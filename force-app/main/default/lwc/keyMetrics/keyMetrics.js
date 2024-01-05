import { LightningElement, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getMetadataValues from '@salesforce/apex/KeyMetricsController.getMetadataValues';

export default class KeyMetrics extends LightningElement {
    @api customMetadataLabel;
    @api recordId;
    @api themeBackgroundColor;
    @api themeMetricTextColor;
    @api themeMetricLabelColor;
    @api themeMetricTextSize;
    @api themeMetricLabelSize;

    metrics = [];

    renderedCallback() {
        if (this.themeBackgroundColor != null) {
            this.template
                .querySelector("lightning-layout")
                .style.setProperty("--card-background-color", this.themeBackgroundColor);
        }
        if (this.themeMetricTextColor != null) {
            this.template
                .querySelector("lightning-layout")
                .style.setProperty("--metric-text-color", this.themeMetricTextColor);
        }
        if (this.themeMetricLabelColor != null) {
            this.template
                .querySelector("lightning-layout")
                .style.setProperty("--metric-label-color", this.themeMetricLabelColor);
        }
        if (this.themeMetricTextSize != null) {
            this.template
                .querySelector("lightning-layout")
                .style.setProperty("--metric-text-size", this.themeMetricTextSize);
        }
        if (this.themeMetricLabelSize != null) {
            this.template
                .querySelector("lightning-layout")
                .style.setProperty("--metric-label-size", this.themeMetricLabelSize);
        }
    }

    @wire(getMetadataValues, { customMetadataLabel: "$customMetadataLabel" })
    metadataValues({ error, data }) {
        if (data) {
            let n = 0;
            let m = [];

            while (n < data.Card_Format__c) {
                n += 1;
                let metricApiKeyName = 'Metric_' + n + '_API_Name__c';
                let metricLabelKeyName = 'Metric_' + n + '_Label__c';
                let metricFormatKeyName = 'Metric_' + n + '_Format__c';

                m.push({
                    id: n,
                    recordId: this.recordId, 
                    objectApiName: data.Object_API_Name__c, 
                    apiName: data[metricApiKeyName], 
                    label: data[metricLabelKeyName], 
                    format: data[metricFormatKeyName],
                    dateDayOption: data.Date_Day_Format__c, 
                    dateMonthOption: data.Date_Month_Format__c, 
                    dateYearOption: data.Date_Year_Format__c, 
                    dateWeekdayOption: data.Date_Weekday_Format__c,
                    currencyDisplay: data.Currency_Format__c
                });
            }
            this.metrics = this.metrics.concat(m);
        } else if (error) {
            const errorToastEvent = new ShowToastEvent({
                title: "Error Loading Custom Metadata Type",
                message: "Ensure custom metadata type is configured correctly for this component and the correct user permissions have been applied",
                mode: "dismissible",
                variant: "error"
            });
            this.dispatchEvent(errorToastEvent);
        }
    }
}