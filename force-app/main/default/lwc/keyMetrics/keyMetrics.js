import { LightningElement, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getMetadataValues from '@salesforce/apex/KeyMetricsController.getMetadataValues';

export default class KeyMetrics extends LightningElement {
    @api customMetadataLabel;
    @api recordId;

    metrics = [];

    @wire(getMetadataValues, { customMetadataLabel: "$customMetadataLabel" })
    metadataValues({ error, data }) {
        if (data) {
            if (data.Card_Format__c == 2) {
                this.metrics = [
                    { id: 1, recordId: this.recordId, objectApiName: data.Object_API_Name__c, apiName: data.Metric_1_API_Name__c, label: data.Metric_1_Label__c, format: data.Metric_1_Format__c },
                    { id: 2, recordId: this.recordId, objectApiName: data.Object_API_Name__c, apiName: data.Metric_2_API_Name__c, label: data.Metric_2_Label__c, format: data.Metric_2_Format__c}
                ];
            } else if (data.Card_Format__c == 3) {
                this.metrics = [
                    { id: 1, recordId: this.recordId, objectApiName: data.Object_API_Name__c, apiName: data.Metric_1_API_Name__c, label: data.Metric_1_Label__c, format: data.Metric_1_Format__c},
                    { id: 2, recordId: this.recordId, objectApiName: data.Object_API_Name__c, apiName: data.Metric_2_API_Name__c, label: data.Metric_2_Label__c, format: data.Metric_2_Format__c},
                    { id: 3, recordId: this.recordId, objectApiName: data.Object_API_Name__c, apiName: data.Metric_3_API_Name__c, label: data.Metric_3_Label__c, format: data.Metric_3_Format__c}
                ];
            } else if (data.Card_Format__c == 4) {
                this.metrics = [
                    { id: 1, recordId: this.recordId, objectApiName: data.Object_API_Name__c, apiName: data.Metric_1_API_Name__c, label: data.Metric_1_Label__c, format: data.Metric_1_Format__c},
                    { id: 2, recordId: this.recordId, objectApiName: data.Object_API_Name__c, apiName: data.Metric_2_API_Name__c, label: data.Metric_2_Label__c, format: data.Metric_2_Format__c},
                    { id: 3, recordId: this.recordId, objectApiName: data.Object_API_Name__c, apiName: data.Metric_3_API_Name__c, label: data.Metric_3_Label__c, format: data.Metric_3_Format__c},
                    { id: 4, recordId: this.recordId, objectApiName: data.Object_API_Name__c, apiName: data.Metric_4_API_Name__c, label: data.Metric_4_Label__c, format: data.Metric_4_Format__c}
                ];
            }
        } else if (error) {
            const errorToastEvent = new ShowToastEvent({
                title: "Oops! Something went wrong.",
                message: "Ensure you have configured your custom metadata type and supplied the correct label in the LWC settings on this page.",
                mode: "dismissible",
                variant: "error"
            });
            this.dispatchEvent(errorToastEvent);
        }
    }
}