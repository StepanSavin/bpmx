import axios from "axios";

const OAUTH_KEY =
  "48299b4e3b73ca4d15d12337509bf60f48c0240a2ea76fc652457e94a7d14687";

const AXIOS_CONFIG = {
  baseURL: "https://api.getbase.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${OAUTH_KEY}`,
  },
};

const httpClient = axios.create(AXIOS_CONFIG);

export default httpClient;
