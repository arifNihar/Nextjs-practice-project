import { config } from "./config";

export async function getData(endpoint) {
  try {
    const baseUrl = config.apiPrefix + config.apiHost + "/api/" + endpoint;
    const response = await fetch(baseUrl, {
      mode: "no-cors",
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
