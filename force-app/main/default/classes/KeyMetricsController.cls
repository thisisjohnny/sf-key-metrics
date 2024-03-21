/**
 * @author John Scardino
 * @date 2024
 * 
 * @description Controller for Key_Metrics_UI__mdt to be used on Key Metrics LWC.
 * Brings in relevant configuration options to use for rendering metrics dynamically.
 * 
 * @returns {Key_Metrics_Setting__mdt} fields related to metrics used, and rendering options.
 */
public with sharing class KeyMetricsController {
    // method enabled for LWC use
    @AuraEnabled(cacheable=true)
    public static Key_Metrics_Setting__mdt getMetadataValues(String customMetadataLabel) { // NOPMD
        // query custom metadata type for relevant settings to the Key Metrics Component 
        // security enforced to ensure access is enforced via FLS/CRUD on Key_Metrics_Setting__mdt
        Key_Metrics_Setting__mdt metricSettings = [
            SELECT
                Object_API_Name__c, 
                Card_Format__c, 
                Metric_1_API_Name__c,
                Metric_1_Label__c,
                Metric_1_Format__c,
                Metric_2_API_Name__c,
                Metric_2_Label__c,
                Metric_2_Format__c,
                Metric_3_API_Name__c,
                Metric_3_Label__c,
                Metric_3_Format__c,
                Metric_4_API_Name__c,
                Metric_4_Label__c,
                Metric_4_Format__c,
                Date_Day_Format__c,
                Date_Month_Format__c,
                Date_Year_Format__c,
                Date_Weekday_Format__c,
                Currency_Format__c,
                Currency_Notation__c,
                Number_Notation__c
            FROM
                Key_Metrics_Setting__mdt 
            WHERE
                MasterLabel = :customMetadataLabel 
            WITH
                SECURITY_ENFORCED
            LIMIT 1
        ];

        return metricSettings;
    }
}