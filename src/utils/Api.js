export default class API {
  constructor(header, url) {
    this._header = header;
    this._url = url;
  }


  _checkStatus(promise) {
    return promise.then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    });
  }

  getData(patch) {
    const promise = fetch(`${this._url}${patch}`, {
      method: "GET",
      headers: {
        authorization: this._header,
      },
    });
    return this._checkStatus(promise);
  }

  editProfie(data) {
    const promise = fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._header,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    });
    return this._checkStatus(promise);
  }

  editAvatar(data) {
    const promise = fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._header,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    });
    return this._checkStatus(promise);
  }

  addCard(data) {
    const promise = fetch(`${this._url}cards`, {
      method: "POST",
      headers: {
        authorization: this._header,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    });
    return this._checkStatus(promise);
  }

  deleteCard(cardId) {
    const promise = fetch(`${this._url}cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._header,
      },
    });
    return this._checkStatus(promise);
  }

  putLike(cardId) {
    const promise = fetch(`${this._url}cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._header,
      },
    });
    return this._checkStatus(promise);
  }

  removeLike(cardId) {
    const promise = fetch(`${this._url}cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._header,
      },
    });
    return this._checkStatus(promise);
  }

}
