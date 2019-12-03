var URL="https://coetus.herokuapp.com";
var VERSION="/api";

const getAllMessages = () => { //destructuring
    return fetch(`${URL}:${VERSION}/message`).then(response => response.json());
}



function addMessage(username, message) {
    return fetch(`${URL}:${VERSION}/message`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
            username: username,
            message: message
        })
    }).then(response => response.json(), (error) => {
        console.log(error);
    })

}

function singleUserMessages(user) {
    return fetch(`${URL}:${VERSION}/message`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            username: user
        })
    }).then(response => response.json(), (error) => {
        console.log(error);
    })

}


export {
    getAllMessages,
    addMessage,
    singleUserMessages
}