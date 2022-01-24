import { config } from 'dotenv';

config();

export default {
  bucket_name: process.env.BUCKET_NAME,
  endpoint: process.env.ENDPOINT,
};
