import { Username } from "../components/login";
import { Messages } from "../components/messages";
import { NewMessage } from "../components/newmessage";
import { addMessage, addUser, singleUserMessages } from '../utilities/service'
import { MyMessages } from "../components/mymessages";

class Main {
    constructor() {
        this.node = document.createElement('main');

        let username = new Username();
        this.node.appendChild(username.getNode());

        this.messages = new Messages();
        this.node.appendChild(this.messages.getNode());

        let newMessage = new NewMessage();
        this.node.appendChild(newMessage.getNode())

        let myMessages = new MyMessages();
        this.node.appendChild(myMessages.getNode())
        //Add new username
        let username1;
        username.selectBtnOnClick(() => {
            username1 = username.username.value;
            addUser(username1).then(data => {
                data.messages.forEach(element => {
                    let paragraph = document.createElement('p');
                    let user = element.username;
                    let msg = element.message;
                    let time = new Date(element.timestamp).toLocaleTimeString('sr-Cyrl', { hour12: true });
                    paragraph.textContent = `${user}: ${msg} ${time}`;
                    this.messages.node.appendChild(paragraph);
                });
            });
        })
// `<h3>${user}</h3>: <p>${msg}</p> <span>${time}</span>`
        //Show messages for one user
        username.selectBtnOnClick(() => {
            myMessages = username.username.value;
            console.log(myMessages)
            singleUserMessages(myMessages).then(data => {
                data.messages.forEach(element => {
                    let div = document.createElement('div');
                    let user = element.username;
                    let msg = element.message;
                    let time = new Date(element.timestamp).toLocaleTimeString('sr-Cyrl', { hour12: true });
                    div.textContent = `${user}: ${msg} ${time}`;
                    this.messages.node.appendChild(div);
                });
            });
        });
        //Save message
        newMessage.selectMsgOnClick(() => {
            let text = newMessage.title;
            addMessage(username1, text).then(data => { console.log(data) });
        });

    }
    getNode() {
        return this.node;
    }

}

export {
    Main
}