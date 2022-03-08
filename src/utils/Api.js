class Api {
    constructor({ baseURL }) {
        this._baseURL = baseURL;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
    }

    getUserInfo = (token) => {
        return fetch(`${this._baseURL}/authenticate`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
        })
            .then(res => this._getResponseData(res))
    }

    getProjectInfo = (token) => {
        return fetch(`${this._baseURL}/info`, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
        })
            .then(res => this._getResponseData(res))
    }
}



export default new Api({
    baseURL: "https://private-052d6-testapi4528.apiary-mock.com",
});