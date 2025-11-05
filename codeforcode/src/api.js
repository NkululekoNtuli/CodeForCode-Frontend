import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api", // adjust to your backend base path
});

// Example: submit code
export const submitCode = async (submission) => {
    return API.post("/submission", submission);
};

// Example: fetch challenge
export const getChallenge = async (id) => {
    return API.get(`/challenges/${id}`);
};

export default API;
