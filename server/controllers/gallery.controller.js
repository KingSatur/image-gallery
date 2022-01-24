import express from 'express';
import AWS from 'aws-sdk';
import config from '../config';
import Image from '../schemas/image';

const spacesEndpoint = new AWS.Endpoint(config.endpoint);

const s3Bucket = AWS.S3({
  endpoint: spacesEndpoint,
});

export const uploadImage = async function (req = express.request, res = express.response) {
  const { image } = req.files;

  try {
    const uploadedObject = await s3Bucket
      .putObject({
        ACL: 'public-read',
        Bucket: config.bucket_name,
        Body: image.data,
        Key: `${Date.now()}`,
      })
      .promise();
    const urlImage = `https://${config.bucket_name}.${config.endpoint}/${image.name}`;
    // const imageObje

    console.log(uploadedObject);
    return res.send(image);
  } catch (error) {
    return res.send('');
  }
};

export const getImages = async function (req = express.request, res = express.response) {
  return res.json('Hola');
};
export const getImageById = async function (req = express.request, res = express.response) {
  return res.json('Hola');
};
export const deleteImageById = async function (req = express.request, res = express.response) {
  return res.json('Hola');
};
