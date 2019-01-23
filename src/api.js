const API_URL = 'https://crud-springs-api.herokuapp.com/api/v1/springs';

export function getAllSpots() {
    return fetch(API_URL)
    .then(res => res.json());
}

export function getSpot(id) {
    return fetch(`${API_URL}/${id}`)
    .then(res => res.json());
}

export function createSpot(spot) {
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(spot),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json());
}