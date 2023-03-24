import { LightningElement,track ,wire} from 'lwc';
import getAllFeed from '@salesforce/apex/displayingorderlineitems.displayingorder';

export default class Displayingorderlineitems extends LightningElement
 {
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
 }