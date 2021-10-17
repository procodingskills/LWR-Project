import { LightningElement , track , api } from 'lwc';
import {FlowAttributeChangeEvent, FlowNavigationNextEvent} from 'lightning/flowSupport';

export default class InputFlowScreen extends LightningElement {
    @track _flowPropertyName ='';
    @api
    get flowPropertyName(){
        return this._flowPropertyName;
    }
    set flowPropertyName(val){
        this._flowPropertyName = val;
    }
    handleChange(event){
        this._flowPropertyName = event.target.value;
    }
    handleNext(event){
        const attriVal = new FlowAttributeChangeEvent('flowPropertyName' , this._flowPropertyName);
        this.dispatchEvent(attriVal);
        const navi = new FlowNavigationNextEvent();
        this.dispatchEvent(navi);
    }
}