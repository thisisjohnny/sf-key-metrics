/**
 * @author John Scardino
 * @date 2024
 * 
 * @description Test class for KeyMetricsController to ensure metric configuration are returned as expected.
 * Uses the SeeAllData=true flag to test the included example Custom Metadata Type record.
 */
@isTest(SeeAllData=true)
private class KeyMetricsControllerTest {

@isTest
    static void testGetMetadataValues() {
        
        // Create test user with System Administrator profile
        Profile adminProfile = [SELECT Id FROM Profile WHERE Name = 'System Administrator' WITH USER_MODE LIMIT 1];
        User testUser = new User(
            Alias = 'testU',
            Email = 'example@none.com',
            EmailEncodingKey = 'UTF-8',
            LastName = 'MetricsTester',
            LanguageLocaleKey = 'en_US',
            LocaleSidKey = 'en_US',
            ProfileId = adminProfile.Id,
            TimeZoneSidKey = 'America/Los_Angeles',
            UserName = 'example321@none.com'
        );
        insert testUser;
        
        System.runAs(testUser) {
            // Test the getMetadataValues method
            Test.startTest();
            Key_Metrics_Setting__mdt setting = KeyMetricsController.getMetadataValues('Example Settings');
            Test.stopTest();
            
            // Assert a representative number of the results
            System.assertEquals('3', setting.Card_Format__c, 'Card format value is incorrect or missing.');
            System.assertEquals('Annual Revenue', setting.Metric_1_Label__c, 'Metric 1 label is incorrect or missing.');
            System.assertEquals('symbol', setting.Currency_Format__c, 'Currency Format is incorrect or missing.');
            System.assertEquals(null, setting.Metric_4_API_Name__c, 'Metric 4 API Name should be null.');
        }
    }
}