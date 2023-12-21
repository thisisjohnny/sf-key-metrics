import { LightningElement, api, wire } from 'lwc';

export default class KeyMetrics extends LightningElement {
    @api color;
    examples = [
        {
            id: 1,
            apiName: "My_Custom_Field_1__c"
        },
        {
            id: 2,
            apiName: "My_Custom_Field_2__c"
        },
        {
            id: 3,
            apiName: "My_Custom_Field_3__c"
        }
    ];
}