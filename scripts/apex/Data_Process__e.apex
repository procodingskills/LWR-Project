// Create a Basic Platform Event and Verify it
Data_Process__e event = new Data_Process__e(
    Data__c = 'JSON BODY 1',
    Sobject_Type__c = 'Account'
);
List<Data_Process__e> events = new List<Data_Process__e>();
events.add(event);
List<Database.SaveResult> results = EventBus.publish(events);
system.debug('Event ReplyId : '+event.Data__c);
// Inspect publishing result for each event
for (Database.SaveResult sr : results) {
    if (sr.isSuccess()) {
        System.debug('Successfully published event.'+sr);
    } else {
        for(Database.Error err : sr.getErrors()) {
            System.debug('Error returned: ' +
                        err.getStatusCode() +
                        ' - ' +
                        err.getMessage());
        }
    }       
}