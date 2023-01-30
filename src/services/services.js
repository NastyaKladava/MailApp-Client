import http from "./http-common";

const registerUser = (data) => {
  return http.post("/register", data);
};

const getUsers = () => {
  return http.get("/profile");
};

const sendMail = (data) => {
  return http.post("/mails", data);
};

const getMails = (id) => {
  return http.get(`/mails/${id}`);
};

const Service = { registerUser, getUsers, sendMail, getMails };

export default Service;
