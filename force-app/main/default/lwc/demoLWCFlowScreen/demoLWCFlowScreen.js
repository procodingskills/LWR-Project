import { LightningElement , api , track } from 'lwc';
import {FlowAttributeChangeEvent , FlowNavigationNextEvent} from 'lightning/flowSupport';
export default class DemoLWCFlowScreen extends LightningElement {
    @track _userName='';
    @api
    get userNameFlowProperty(){
        return this._userName;
    }
    set userNameFlowProperty(vale){
        this._userName = vale;
    }
    @api flowUserDetails;

    changeValueEvent(event){
        this._userName = event.target.value;
    }
    navigateToDisplayPage(event){
        // We need to adssign attribute values
        const attValues = new FlowAttributeChangeEvent('userNameFlowProperty',this._userName);
        this.dispatchEvent(attValues);
        // We need to navigate away
        const naviAtt = new FlowNavigationNextEvent();
        this.dispatchEvent(naviAtt);
    }
}