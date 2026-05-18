/*
=====================================
FORMAT PRICE
=====================================
*/

export const formatPrice = (price) => {

  return new Intl.NumberFormat(
    "en-IN",
    {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }
  ).format(price);
};

/*
=====================================
SHORTEN TEXT
=====================================
*/

export const shortenText = (
  text,
  maxLength = 100
) => {

  if (!text) return "";

  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + "...";
};

/*
=====================================
FORMAT DATE
=====================================
*/

export const formatDate = (date) => {

  return new Date(date).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
  );
};