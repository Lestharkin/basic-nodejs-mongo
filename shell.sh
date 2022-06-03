# mongoose
npm install mongoose

# mongo
mongo 

# create db
use app
# create user
db.createUser(
    {
    user: "app",
    pwd: "app",
    roles: [ { role: "dbOwner", db: "app" } ]
    })

nano /etc/mongod.conf
#  bindIp: 127.0.0.1
security:
  authorization: 'enabled'

systemctl restart mongod

mongo --port 27017 -u "app" -p "app" --authenticationDatabase "app"