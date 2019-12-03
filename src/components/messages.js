import { getAllMessages } from "../utilities/service";

class Messages {
    constructor() {
        this.node = document.createElement('div');
        this.posts = []
        this.handle = setInterval(() => this.getMessages(), 10000);
        this.getMessages();
    }

    getNode() {
        return this.node;
    }

    getMessages() {
        getAllMessages().then((response) => {
            const postsArray = response.data.map(element => {
                const paragraph = document.createElement('p');
                const user = element.username;
                const msg = element.message;
                const time = new Date(element.timestamp).toLocaleTimeString('sr-Cyrl', { hour12: true });
                paragraph.textContent = `${user}: ${msg} ${time}`;
                return paragraph;
            });

            this.renderMessages(postsArray);
        });
    }
    
    renderMessages(messages) {
        this.node.innerHTML = '';
        messages.forEach(element => {
            this.node.appendChild(element);
        });
    }

    removeHandler() {
        clearInterval(this.handle);
    }
}

export {
    Messages
}

