const API_URL = "https://auth.nomoreparties.co";

export const register = (password, email) => {
  return fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
    headers: {
      "Content-Type": "application/json",
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
