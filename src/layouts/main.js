import { Username } from "../components/login";
import { Messages } from "../components/messages";
import { NewMessage } from "../components/newmessage";
import {addMessage, addUser, singleUserMessages} from '../utilities/service'
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
                    let z = document.createElement('p');
                    let y = element.username;
                    let x = element.message;
                    let j =  new Date(element.timestamp).toLocaleTimeString('sr-Cyrl',{hour12:true});
                    z.textContent = `${y}: ${x} ${j}`;
                    this.messages.node.appendChild(z);
                });
            });
        })

        //Show messages
        // singleUserMessages()

        //Save message
        newMessage.selectMsgOnClick( () => {
            let text = newMessage.title;
            addMessage(username1, text).then(data=>{console.log(data)}); 
        });
        
    }
    getNode() {
        return this.node;
    }

}

export {
    Main
}