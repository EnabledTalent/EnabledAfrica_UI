// Override with REACT_APP_AUTH_BASE_URL and REACT_APP_BUSINESS_BASE_URL for your deployment.
const DEFAULT_AUTH =
  process.env.REACT_APP_AUTH_BASE_URL || "https://enabledafrica-auth.onrender.com";
const DEFAULT_BUSINESS =
  process.env.REACT_APP_BUSINESS_BASE_URL || "https://enabledafrica-be.onrender.com";

export const BUSINESS_BASE_URL = DEFAULT_BUSINESS;

const BASE_URL = DEFAULT_AUTH;

export const AUTH_BASE_URL = DEFAULT_AUTH;

export default BASE_URL;
