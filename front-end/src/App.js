import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;

// const [testApi, setTestApi] = useState(null);

// useEffect(() => {
//   async function testApi() {
//     let api = await JoblyApi.getJobs();
//     setTestApi(api);
//   }
//   testApi();
// }, []);

// return <div className="App">{console.log({ testApi })}</div>;
