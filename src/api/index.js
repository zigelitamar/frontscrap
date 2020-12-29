import axios from "axios";

export function getArticles(jwt) {
  return axios.get("http://localhost:5000/get_my_articles", {
    headers: { Authorization: `Bearer: ${jwt}` },
  });
}

export function authenticate(userData) {
  return axios.post("http://localhost:5000/login", userData);
}
export function signup(userData) {
  return axios.post("http://localhost:5000/register", userData);
}
export function addTeam(teams, jwt) {
  return axios.post("http://localhost:5000/teams", teams, {
    headers: { Authorization: `Bearer: ${jwt}` },
  });
}

export function getTeams(jwt) {
  return axios.get("http://localhost:5000/teams", {
    headers: { Authorization: `Bearer: ${jwt}` },
  });
}
export function logOut(jwt) {
  return axios.get("http://localhost:5000/logout", {
    headers: { Authorization: `Bearer: ${jwt}` },
  });
}
export function remTeam(teams, jwt) {
  return axios.post("http://localhost:5000/teamsRem", teams, {
    headers: { Authorization: `Bearer: ${jwt}` },
  });
}
