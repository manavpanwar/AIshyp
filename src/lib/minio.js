import * as Minio from "minio";

const endpoint = process.env.MINIO_ENDPOINT || "s3.vizta.in";
const port = parseInt(process.env.MINIO_PORT || "443", 10);
const useSSL = process.env.MINIO_USE_SSL === "true" || process.env.MINIO_USE_SSL === true;
const accessKey = process.env.MINIO_ACCESS_KEY || "";
const secretKey = process.env.MINIO_SECRET_KEY || "";

export const BUCKET_NAME = process.env.MINIO_BUCKET_NAME || "multitenanttest";

export const minioClient = new Minio.Client({
  endPoint: endpoint,
  port: port,
  useSSL: useSSL,
  accessKey: accessKey,
  secretKey: secretKey,
});


export async function uploadToMinio(buffer, filename, mimeType ) {
  // Ensure bucket exists
  try {
    const exists = await minioClient.bucketExists(BUCKET_NAME);
    if (!exists) {
      await minioClient.makeBucket(BUCKET_NAME, "us-east-1");
    }
  } catch (err) {
    console.warn("MinIO bucketExists check warning:", err?.message);
  }

  // Upload file buffer
  await minioClient.putObject(BUCKET_NAME, filename, buffer, buffer.length, {
    "Content-Type": mimeType,
  });

  // Construct direct public URL
  const protocol = useSSL ? "https" : "http";
  const portSuffix = (port === 80 || port === 443) ? "" : `:${port}`;
  const publicUrl = `${protocol}://${endpoint}${portSuffix}/${BUCKET_NAME}/${filename}`;

  return publicUrl;
}

export default minioClient;
