export const substringToBold = (string: string, subString: string) => {
  return string
    .toLowerCase()
    .replaceAll(subString.toLowerCase(), "<b>" + subString + "</b>");
};
