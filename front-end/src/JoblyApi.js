import axios from "axios";

const BASE_URL = 
process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get", customHeaders = {}) {
    console.debug("API Call:", endpoint, data, method);
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}`, ...customHeaders };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API Routes

  // register a new user

  static async register(formData) {
    let res = await this.request(`auth/register`, formData, "post");
    return res;
  }

  //login a user

  static async login(formData) {
    let res = await this.request(`auth/token`, formData, "post");
    return res;
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get a list of all companies */

  static async getCompanies(searchQuery) {
    let query = searchQuery ? `?name=${searchQuery}` : "";
    let res = await this.request(`companies/${query}`);
    return res.companies;
  }

  /**  Get a user by usernamev*/

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /**  Post for a job */

  static async applyForJob(username, jobId) {
    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
    return res;
  }

  /** Patch a user profile */

  static async changeUserProfile(username, newData) {
    let res = await this.request(`users/${username}`, newData, "patch");
    return res.user;
  }

  /** Post a resume */

    static async postResume({resume}) {
      const formData = new FormData();
      formData.append("resume", resume);
      let res = await this.request(`users/resume`, formData, "post", { 'Content-Type': 'multipart/form-data' });
      return res.getURL;
    }

  /** Get a job */

  static async getJob(jobId) {
    let res = await this.request(`jobs/${jobId}`);
    return res.job;
  }

  /** Get a list of all jobs */

  static async getJobs(searchQuery) {
    let query = searchQuery ? `?title=${searchQuery}` : "";
    let res = await this.request(`jobs/${query}`);
    return res.jobs;
  }
}

export default JoblyApi;
