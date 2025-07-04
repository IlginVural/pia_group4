import { getRequest, postRequest } from "../GlobalApiService";

export const getJobs = async () => {
  const response = await getRequest('/job-postings');
  return response;
};

export const createJob = async (job) => {
  const response = await postRequest('/job-postings', job);
  return response;
};