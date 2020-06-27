export const createAndUpdateProfile = ({ ocRestClient, ccConstants, data }: any) => {
  return ocRestClient.request({
    data,
    endpoint: ccConstants.ENDPOINT_CREATE_PROFILE,
  });
};
