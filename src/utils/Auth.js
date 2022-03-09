class Auth {

  constructor({ baseURL, headers }) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  authorize = (email, password) => {
    return fetch(`${this._baseURL}/authenticate`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ password, email })
    })
      .then((res) => this._getResponseData(res))
      .then((data) => {
        if (data[0].token)
          localStorage.setItem("jwt", data.token);
        return data;
      });
  };

  checkToken = (token) => {
    return fetch(`${this._baseURL}/info`, {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => this._getResponseData(res))
  }
}







export default new Auth({
  baseURL: "https://private-052d6-testapi4528.apiary-mock.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
}); 