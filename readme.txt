1. The basic architecture is to provide Restful services from server side and GUI with angular.js on the client side.
2. Implemented restful services to do the corresponding CRUD ops. Software Developer profile include system generated id, name
   and skills in the form of a string, each skill seperated by coma. The record is save to DB. MySql is used. 
3. Components of security (Authentication/authorizationin), connection pooling and results pagenation is not included. 
   Test modules are not provided. With security, login and role based access will be enforced and with different authorizations.
   Current search allows for the OR of any skills searched. More advanced search such as with more complexed logical relationships
   is not implemented.
4. The program can be launched by java -jar SwDevProfiles-1.0.0.jar. Access the GUI by http://localhost:8080
5. Database is configured in application.properties. The sql script to create the table is provided. 