import { Schema, model } from 'mongoose';

const ImageWrapperSchema = new Schema(
  {
    title: String,
    key: String,
    image_url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'ImageWrapper',
    versionKey: false,
  }
);

export const ImageWrapperModel = new model('ImageWrapper', ImageWrapperSchema);
