var Client = require('pg-native')

var client = new Client()
client.connect(function(err) {
  if(err) throw err
  
  console.log('connected!')
})
 
var client2 = new Client()
client2.connect('postgresql://user:postgrespassword@321456host:5432/database?param=value', function(err) {
  if(err) throw err
  
  console.log('connected with connection string!')
})