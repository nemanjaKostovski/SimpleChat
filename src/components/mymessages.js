class MyMessages {
    constructor() {
    this.node = document.createElement('div');

    this.myMsgsBtn = document.createElement('input');
    this.myMsgsBtn.type = 'submit';
    this.myMsgsBtn.id = 'btn-list-msg';
    this.myMsgsBtn.value = 'List messages';
    this.myMsgsBtn.addEventListener('click', this.outputMessages);

    this.node.appendChild(this.myMsgsBtn);

    }
    getNode() {
        return this.node;
    }
    outputMessages(show) {
        this.myMsgsBtn.addEventListener('click', show);
    }

}

export {
    MyMessages
}