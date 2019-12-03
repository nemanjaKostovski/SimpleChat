class NewMessage {
    constructor() {
        this.node = document.createElement('section');

        this.message = document.createElement('textarea');
        this.message.id = 'txt-title';
        this.message.placeholder = 'message';
        this.title = ''
        this.message.addEventListener('input', () => {
            this.title = this.message.value
        })

        this.btnAdd = document.createElement('input');
        this.btnAdd.type = 'submit';
        this.btnAdd.id = 'btn-add';
        this.btnAdd.value = 'Post'

        this.form = document.createElement('section');
        this.form.appendChild(this.message);
        this.form.appendChild(this.btnAdd);
        this.node.appendChild(this.form);
    }

    getNode(){
        return this.node;
    }
    
    selectMsgOnClick(select) {
        this.btnAdd.addEventListener('click', select);
    }
}

export{
    NewMessage
}