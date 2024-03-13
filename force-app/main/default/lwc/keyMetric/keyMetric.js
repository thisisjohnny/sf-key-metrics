import { LightningElement, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';

export default class KeyMetric extends LightningElement {
    @api metric;
    metricFormatCurrency = false;
    metricFormatNumber = false;
    metricFormatDate = false;
    metricMaximumDigits = 2;
    value;
    field;

    renderedCallback() {
        if (this.metric.format == 'currency') {
            this.metricFormatCurrency = true;
        } else if (this.metric.format == 'percent' || this.metric.format == 'decimal') {
            this.metricFormatNumber = true;
        } else if (this.metric.format == 'date') {
            this.metricFormatDate = true;
        }
        this.field = this.metric.objectApiName + '.' + this.metric.apiName;
    }

    @wire(getRecord, {recordId: "$metric.recordId", fields: "$field"})
    metricValue({ error, data }) {
        if (data && this.metric.format == 'percent') {
            let fieldValue = getFieldValue(data, this.field);
            this.value = fieldValue / 100;
        } else if (data) {
            let fieldValue = getFieldValue(data, this.field);
            this.value = fieldValue;
        } else if (error) {
            const errorToastEvent = new ShowToastEvent({
                title: "Oops! Something went wrong.",
                message: `There was an error returning the value for ${this.metric.label}. Ensure user access to the field`,
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

    get metricDayOption() {
        return this.metric.dateDayOption;
    }

    get metricMonthOption() {
        return this.metric.dateMonthOption;
    }

    get metricYearOption() {
        return this.metric.dateYearOption;
    }

    get metricWeekdayOption() {
        return this.metric.dateWeekdayOption;
    }

    get metricIncludeWeekday() {
        if (this.metric.dateWeekdayOption != null) {
            return true;
        } else {
            return false;
        }
    }

    get metricCurrencyDisplay() {
        return this.metric.currencyDisplay;
    }

    get metricCurrencyCode() {
        return CURRENCY;
    }

    get currencyNotation() {
        return this.metric.currencyNotation;
    }

    get numberNotation() {
        return this.metric.numberNotation;
    }

    get metricCurrencyValue() {
        const DISPLAY = this.metricCurrencyDisplay;
        const NOTATION = this.currencyNotation;

        let formattedValue = new Intl.NumberFormat("en-US", {
            currency: CURRENCY,
            currencyDisplay: DISPLAY,
            style: "currency",
            notation: NOTATION,
        }).format(this.value);     
        
        return formattedValue;
    }

    get metricDecimal() {
        if (this.metricFormat == 'decimal') {
            return true;
        } else {
            return false;
        }
    }

    get metricNumberValue() {
        const NOTATION = this.numberNotation;

        let formattedValue = new Intl.NumberFormat("en-US", {
            style: "decimal",
            maximumFractionDigits: this.metricMaximumDigits,
            notation: NOTATION,
        }).format(this.value);

        return formattedValue;
    }
}