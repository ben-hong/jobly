require('dotenv').config()
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})

// uploads a file to s3
async function uploadFile(file) {
  const key = `${Date.now()}_${file.originalname}`;
  const uploadParams = {
    Bucket: bucketName,
    Body: file.buffer,
    Key: key,
  }

  return s3.upload(uploadParams, (err) => {
    if (err) {
        console.log('ERROR HERE: ', err);
    } else {
        console.log('success!');
    }
  });
}

// retrieves key and signed url from s3
function getSignedURL(fileKey) {
  const signedParams = {
    Bucket: bucketName,
    Key: fileKey,
    ResponseContentType: 'application/pdf',
    Expires: 600000,
  }

  return s3.getSignedUrl('getObject', signedParams)
}

// checks if url is expired
function isUrlExpired(signedUrl) {
  if (!signedUrl) return true;

  const urlParams = new URLSearchParams(signedUrl.split('?')[1]);
  const expirationTime = parseInt(urlParams.get('Expires'));
  const currentTime = Math.floor(Date.now() / 1000); 

  return expirationTime < currentTime;
}

module.exports = {
    uploadFile,
    getSignedURL,
    isUrlExpired,
}