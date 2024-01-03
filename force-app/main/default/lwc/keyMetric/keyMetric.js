import { LightningElement, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';

export default class KeyMetric extends LightningElement {
    @api metric;
    metricFormatCurrency = false;
    metricFormatNumber = false;
    metricDisplay = 'code';
    metricMaximumDigits = 2;
    value;
    field;

    renderedCallback() {
        if(this.metric.format == 'currency') {
            this.metricFormatCurrency = true;
            this.metricFormatNumber = false;
        } else if (this.metric.format == 'percent' || this.metric.format == 'decimal') {
            this.metricFormatNumber = true;
            this.metricFormatCurrency = false;
        }
        this.field = this.metric.objectApiName + '.' + this.metric.apiName;
    }

    @wire(getRecord, {recordId: "$metric.recordId", fields: "$field"})
    metricValue({ error, data }) {
        if(data && this.metric.format == 'percent') {
            let fieldValue = getFieldValue(data, this.field);
            this.value = fieldValue / 100;
        } else if (data) {
            let fieldValue = getFieldValue(data, this.field);
            this.value = fieldValue;
        } else if (error) {
            const errorToastEvent = new ShowToastEvent({
                title: "Oops! Something went wrong.",
                message: `There was an error returning the value for ${this.metric.label}`,
                mode: "dismissible",
                variant: "error"
            });
            this.dispatchEvent(errorToastEvent);
        }
    }

    get metricLabel() {
        return this.metric.label;
    }

    get metricFormat() {
        return this.metric.format;
    }

    get metricCurrency() {
        return CURRENCY;
    }
}