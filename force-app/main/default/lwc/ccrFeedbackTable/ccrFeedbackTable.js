import { LightningElement,wire,track } from 'lwc';
import ccrFeedbackTable from './ccrFeedbackTable.css';
import getAllFeed from '@salesforce/apex/EmployeeData.getAllFeedback';

export default class CcrFeedbackTable extends LightningElement {

    @track records;
    @track errors;
    

    @wire(getAllFeed,{} )
    wiredCases({data,error}){
    if(data)
    {
        this.records = data;
        this.errors = undefined;
    }
    if(error)
    {
        this.errors = error;
        this.records = undefined;
        }
    }
    renderedCallback() {
        Promise.all([
            getAllFeed(this, ccrFeedbackTable)
        ]).then(() => {
          console.log('CSS loaded successfully');
        }).catch(error => {
          console.error(error);
        });
      }
}