import * as GCS from "@google-cloud/storage";
export const bucket = new GCS.Storage({
  keyFilename: process.env.GCS_FILENAME,
  projectId: process.env.GCS_ID,
}).bucket(process.env.GCS_BUCKET);
