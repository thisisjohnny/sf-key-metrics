import { LightningElement, api, wire } from 'lwc';
import getMetadataValues from "@salesforce/apex/KeyMetricsController.getMetadataValues";

export default class KeyMetrics extends LightningElement {
    @api customMetadataLabel;

    metrics = [];

    @wire(getMetadataValues, { customMetadataLabel: "$customMetadataLabel" })
    metadataValues({ error, data }) {
        if (data) {
            if (data.Card_Format__c == 2) {
                this.metrics = [
                    { id: 1, apiName: data.Metric_1_API_Name__c},
                    { id: 2, apiName: data.Metric_2_API_Name__c}
                ];
            } else if (data.Card_Format__c == 3) {
                this.metrics = [
                    { id: 1, apiName: data.Metric_1_API_Name__c},
                    { id: 2, apiName: data.Metric_2_API_Name__c},
                    { id: 3, apiName: data.Metric_3_API_Name__c}
                ];
            } else if (data.Card_Format__c == 4) {
                this.metrics = [
                    { id: 1, apiName: data.Metric_1_API_Name__c},
                    { id: 2, apiName: data.Metric_2_API_Name__c},
                    { id: 3, apiName: data.Metric_3_API_Name__c},
                    { id: 4, apiName: data.Metric_4_API_Name__c}
                ];
            }
        } else if (error) {
            // jawn
        }
    }
}