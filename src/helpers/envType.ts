const hostname = window.location.hostname;
export const envType = hostname.includes("test") ? "test" : hostname.includes("stage") ? "stage" : "prod";

console.log(envType);
