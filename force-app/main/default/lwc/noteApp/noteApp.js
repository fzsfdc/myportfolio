import { LightningElement } from 'lwc';


const DEFAULT_NOTE_FORM = {
    Name:"",
    Note_Description__c:""
}

export default class NoteApp extends LightningElement {
    showModal = false;
    noteRecord=DEFAULT_NOTE_FORM;
    formats = ['font','size','bold','italic','underline','strike','list','indent','align','link','clean','table','header','color'];

    createNoteHandler() {
        this.showModal = true;
    }

    closeModalHandler() {
        this.showModal = false;
        this.noteRecord = DEFAULT_NOTE_FORM;
    }

    changeHandler(event) {
        const{nme,value} = event.target;
        //const name = event.target.name;
        //const value = event.target.value;
        this.noteRecord = {...this.noteRecord, [name]:value};
    }

    formSubmitHandler(event) {
        event.preventDefault();
        console.log("this.noteRecord: ", this.noteRecord);

    }
}