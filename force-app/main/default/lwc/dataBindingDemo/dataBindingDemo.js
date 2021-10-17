import { LightningElement } from 'lwc';

export default class DataBindingDemo extends LightningElement {
    _skillName ='Salesforce';
    _outputProperty;
    _fullName;
    handleInputChange(event){
        this._skillName = event.target.value;
    }

    handleClassQuery(){
        // QuerySelector --> Always returns the first element of the Template
        this._outputProperty = this.template.querySelector(".input-c").value;
        // to write a value 
        this.template.querySelector("div[data-id=outputPan]").style.backgroundColor="red";
    }
    handlePropertyQuery(){
        this._outputProperty = 
        this.template.querySelector("lightning-input[data-id=skill_input]").value;
    }

    getFullName(){
        let nameArrays = this.template.querySelectorAll("lightning-input");
        let fullName ="";
        nameArrays.forEach(getValidInputNames);
        function getValidInputNames(item , index){
            if(item.label !== "Change your Skill")
            {
                fullName += (item.value + " " );
            }
        }
        this._fullName = fullName;
    }
    /* Conditional statememt Example  */
    _selecetdSkills =[];
    get _ouputSelectedSkills(){
        if(this._selecetdSkills.length > 0 ){
            return this._selecetdSkills.join(",");
        }
        else{
            return null;
        }
        
    }
    get _optionsConditional(){
        return [
            {label : "Apex" , value : "Apex"},
            {label : "Aura" , value : "Aura"},
            {label : "LWC",value : "lwc"}
        ];
    }
    handleSkillSelect(event){
        this._selecetdSkills = event.detail.value;
    }
}