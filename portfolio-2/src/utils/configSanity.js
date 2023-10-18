import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "n8a3iqt4",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});
