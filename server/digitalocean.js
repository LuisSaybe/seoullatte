import AWS from 'aws-sdk';
import { settings } from 'server/settings';

const { bucket, endpoint, region, key, secret } = settings.digitalocean.spaces;
const s3 = new AWS.S3({
  region: region,
  endpoint: new AWS.Endpoint(endpoint),
  accessKeyId: key,
  secretAccessKey: secret,
});

export const upload = (Key, Body, ContentType) => {
  return new Promise((resolve, reject) => {
    s3.putObject({
      ACL: 'public-read',
      Body,
      Bucket: bucket,
      Key,
      ContentType
    }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const url = `https://${bucket}.${region}.cdn.digitaloceanspaces.com/${Key}`;

        resolve({
          data,
          url
        });
      }
   });
  });
};

export const deleteObject = (Key) => {
  return new Promise((resolve, reject) => {
    s3.deleteObject({
      Bucket: bucket,
      Key
    }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
   });
  });
};
