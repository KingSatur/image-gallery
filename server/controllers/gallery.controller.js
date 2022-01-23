import express from 'express';

export const uploadImage = async function (req = express.request, res = express.response) {
  console.log(req.files);
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
