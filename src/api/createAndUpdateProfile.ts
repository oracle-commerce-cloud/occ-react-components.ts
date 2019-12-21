export const createAndUpdateProfile = ({ miRestClient, ccConstants, data }: any) => {
  return miRestClient.request({
    data,
    endpoint: ccConstants.ENDPOINT_CREATE_PROFILE,
  });
};
