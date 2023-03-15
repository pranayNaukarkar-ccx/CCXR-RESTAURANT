import { LightningElement,track } from 'lwc';

export default class WaiterScreen extends LightningElement 
{
    
    @track isShowModal = false;

    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }
    @track isShowModal = false;

    showModalBox1() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }
}