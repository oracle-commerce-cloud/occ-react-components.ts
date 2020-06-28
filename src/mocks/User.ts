export default {
  isUserSessionExpired: () => false,
  loggedInUserName: () => true,
  loggedIn: () => false,
  catalogId: () => "idCatalog",
  firstName: () => "firstNameMok",
  lastName: () => "lastNameMok",
  email: () => "test@email.com",
  customerOrganization: () => "companini",
  primaryShippingAddress: () => ({
    phoneNumber: "0123456789",
  }),
};
