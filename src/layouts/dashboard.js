import { Main } from "./main";

class Dashboard {
    constructor(){
        this.main = new Main();
        this.node = document.createElement('dashboard');
        this.node.appendChild(this.main.getNode());
    }

    getNode() {
        return this.node;
    }

}

export {
    Dashboard
}