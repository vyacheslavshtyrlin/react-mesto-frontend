const API_URL = "https://api.vyacheslavshtyrlin.nomoredomains.xyz";

export const register = (password, email) => {
  return fetch(`${API_URL}/signup`, {
    method: "POST",
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },

    body: JSON.stringify({ password: password, email: email }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  }).catch((error) => {
    console.log(error)
  })
};

export const login = (password, email) => {
  return fetch(`${API_URL}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },

    body: JSON.stringify({ password, email }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  }).catch((error) => {
    console.log(error)
  })
};

export const checkToken = (token) => {
  return fetch(`${API_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  }).catch((error) => {
    console.log(error)
  })
};
