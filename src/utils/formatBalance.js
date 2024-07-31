export const formatBalance = (value) =>
  new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
