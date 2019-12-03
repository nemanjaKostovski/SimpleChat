import { Username } from "../components/login";
import { Messages } from "../components/messages";
import { NewMessage } from "../components/newmessage";
import { addMessage, singleUserMessages } from '../utilities/service'
import { MyMessages } from "../components/mymessages";
import { UserMessages } from "../components/userMessages";

class Main {
    constructor() {
        this.node = document.createElement('main');

        let username = new Username();
        this.node.appendChild(username.getNode());

        this.messages = new Messages();
        this.node.appendChild(this.messages.getNode());

        let newMessage = new NewMessage();
        this.node.appendChild(newMessage.getNode())

        //Add new username
        let username1;
        username.selectBtnOnClick(() => {
            username1 = username.username.value;
        })

        newMessage.selectMsgOnClick(() => {
            let text = newMessage.title;
            addMessage(username1, text).then(data => {
                console.log(data);
                this.messages.getMessages();
            });
        });
        let myMessages = new MyMessages();
        this.node.appendChild(myMessages.getNode());
        this.userMessages = new UserMessages();
        this.node.appendChild(this.userMessages.getNode());

        
        myMessages.outputMessages(() => {
            this.userMessages.getMessages(username1);
        });

    }
    getNode() {
        return this.node;
    }

}

export {
    Main
}