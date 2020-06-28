export default {
  siteInfo: { id: "siteUS" },
  additionalLanguages: [
    {
      displayName: "Anglais (Royaume-Uni)",
      repositoryId: "6",
      name: "en",
      localeId: "6",
    },
    {
      displayName: "Français",
      repositoryId: "4",
      name: "fr",
      localeId: "4",
    },
  ],
  selectedPriceListGroup: () => ({
    currency: {
      symbol: "£",
      currencyCode: "USD",
      fractionalDigits: 2,
    },
  }),
};
