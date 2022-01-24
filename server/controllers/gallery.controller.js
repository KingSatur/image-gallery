import express from 'express';
import AWS from 'aws-sdk';
import config from '../config';
import { ImageWrapperModel } from '../schemas/image';

const spacesEndpoint = new AWS.Endpoint(config.endpoint);

const s3Bucket = new AWS.S3({
  endpoint: spacesEndpoint,
});

export const uploadImage = async function (req = express.request, res = express.response) {
  const { image } = req.files;
  const { title } = req.body;

  try {
    const key = `${image.name}${Date.now()}`;
    const uploadedObject = await s3Bucket
      .putObject({
        ACL: 'public-read',
        Bucket: config.bucket_name,
        Body: image.data,
        Key: key,
      })
      .promise();
    const image_url = `https://${config.bucket_name}.${config.endpoint}/${image.name}`;
    const imageWrapper = await new ImageWrapperModel({
      title,
      key,
      image_url,
    }).save();
    return res.json(imageWrapper);
  } catch (error) {
    console.log(error);
    return res.send('');
  }
};

export const getImages = async function (req = express.request, res = express.response) {
  const images = await ImageWrapperModel.find();
  return res.json(images);
};
export const getImageById = async function (req = express.request, res = express.response) {
  const { id } = req.params;
  const image = await ImageWrapperModel.findById(id);
  return res.json(image);
};
export const deleteImageById = async function (req = express.request, res = express.response) {
  const { id } = req.params;
  const deleteImaged = await ImageWrapperModel.findByIdAndDelete(id);
  await s3Bucket
    .deleteObject({
      Bucket: config.bucket_name,
      Key: deleteImaged.key,
    })
    .promise();
  return res.json(deleteImaged);
};
