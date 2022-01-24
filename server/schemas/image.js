import { Schema, Model } from 'mongoose';

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
    versionKey: false,
    collection: 'ImageWrapper',
  }
);

export default new Model('ImageWrapperSchema', ImageWrapperSchema);
