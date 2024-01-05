public with sharing class KeyMetricsController {
    @AuraEnabled(cacheable=true)
    public static Key_Metrics_Setting__mdt getMetadataValues(String customMetadataLabel) {
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
                Date_Weekday_Format__c
            FROM
                Key_Metrics_Setting__mdt 
            WHERE
                MasterLabel = :customMetadataLabel LIMIT 1
        ];

        return metricSettings;
    }
}