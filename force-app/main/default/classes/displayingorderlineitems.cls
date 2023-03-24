public with sharing class displayingorderlineitems {
    @AuraEnabled(cacheable=true)
    
    public static CCXR_Order__c displayingorder()
    {
        CCXR_Order__c orditem = [select  id,Name ,(select CCXR_Item_Name__c,CCXR_Order_ID__c,CCXR_Price__c,CCXR_Quantity__c
                                            from CCXR_Order_Line_Items__r) from CCXR_Order__c where id='a022w00000lwE1iAAE'];
      return orditem;
    }
}