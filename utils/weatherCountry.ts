import { countryCodes } from "./countryCodes";

export const weatherCountry = (countryCode: string) => {
  const country = countryCodes.find(
    (country) => country.alpha_2 === countryCode,
  );
  return country.name;
};
