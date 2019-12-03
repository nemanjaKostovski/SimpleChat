import { singleUserMessages } from "../utilities/service";

class UserMessages {
    constructor() {
        this.node = document.createElement('div');
        this.node.className = 'messages';
        this.posts = [];
    }

    getNode() {
        return this.node;
    }

    getMessages(username) {
        singleUserMessages(username).then((response) => {
            const postsArray = response.messages.map(element => {
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
    UserMessages
}