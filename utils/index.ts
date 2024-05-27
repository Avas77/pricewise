export const isValidAmazonUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostName = parsedUrl.hostname;
    if (
      hostName.includes("amazon.com") ||
      hostName.includes("amazon.") ||
      hostName.endsWith("amazon")
    ) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
