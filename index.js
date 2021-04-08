// const nameH1 = document.querySelector("h1");
let body = document.querySelector('body')

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name,
                email
            })
        })
        .then(response => response.json())
        .then(json => body.textContent = json.id)
        .catch(err => body.textContent = err)
}