class Username {
    constructor() {
        this.node = document.createElement('section');

        this.username = document.createElement('input');
        this.username.type = 'text';
        this.username.id = 'txt-title';
        this.username.placeholder = 'Username';
        this.newUsername = '';
        this.username.addEventListener('input', () => {
            this.newUsername = this.username.value;
        })

        this.btnAdd = document.createElement('input');
        this.btnAdd.type = 'submit';
        this.btnAdd.id = 'btn-add';
        this.btnAdd.value = 'Add Username'

        this.form = document.createElement('section');

        this.form.appendChild(this.username);
        this.form.appendChild(this.btnAdd);
        this.node.appendChild(this.form)
        
    }
    getNode(){
        return this.node;
    }
    selectBtnOnClick(select) {
        this.btnAdd.addEventListener('click', select);
    }
}

export{
    Username
}