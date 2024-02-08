// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method:"POST",
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({
            'name': `${name}`,
            'email': `${email}`
        })
    })
    .then(response => response.json())
    .then(object => {
        let objId = object.id;
        document.body.innerHTML = `${objId}`;
    })
    .catch(function(error) {
        document.body.innerHTML = `${error}`;
    })
}
submitData("Koby", "email@email.com")