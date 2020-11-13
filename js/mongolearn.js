"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="c:\data\db"
"C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"
use name
db.createCollection("namecollection")
db.namecollection.drop()
db.namecollection.insertOne({"name":"Heman","phone":9249436777,"has a car":true,"email":"germanmol@mail.ru"})
db.users.insertOne({"name":"Heman","phone":9249436777,"has a car":true,"email":"germanmol@mail.ru"})

db.users.insertOne({
    "name":"Anna Sergevna",
    "email":"nakhodka@mail.ru",
    "age":34,
    "birthday":new Date('15.08.1986'),
    "hasCar":"ture",
    "favColors":["green","red","black"],
    "password":"132165679"
})

db.users.insertMany([
    {
        "name":"Anna Sergevna",
        "email":"nakhodka@mail.ru",
        "age":34,
        "birthday":new Date('15.08.1986'),
        "hasCar":"ture",
        "favColors":["green","red","black"],
        "password":"132165679"
    },
    {
        "name":"Anna Sergevna",
        "email":"nakhodka@mail.ru",
        "age":34,
        "birthday":new Date('15.08.1986'),
        "hasCar":"ture",
        "favColors":["green","red","black"],
        "password":"132165679"
    },
    {
        "name":"Anna Sergevna",
        "email":"nakhodka@mail.ru",
        "age":34,
        "birthday":new Date('15.08.1986'),
        "hasCar":"ture",
        "favColors":["green","red","black"],
        "password":"132165679"
    }
])
db.users.find({}, {id:0}).limit(2)
db.users.find()
db.users.find({email: "germanmol@mail.ru"}, {_id: 0}).sort({age: -1, email: -1})
db.users.find({}, {_id: 0, email: 0}).sort({age: 1, email: 1})
db.users.find({$or: [{age: 35}, {email: "germanmol@mail.ru"}]}, {_id: 0}).limit(1).sort({age: 1})
db.users.find({$or: [{age: {$lt: 20}}, {email: "germanmol@mail.ru"}]}, {_id: 0}).sort({age: 1})
db.users.find({$or: [{age: {$gt: 20}}, {email: "germanmol@mail.ru"}]}, {_id: 0}).sort({age: 1})
db.users.find({name: {$in: ["Herman", "Anna", "spy"]}}, {_id: 0, child:0})
db.users.find({name: {$nin: ["Herman", "Anna", "spy"]}}, {_id: 0, child:0})
db.users.find({child: {$exists: true}}, {_id: 0, child:0})
db.users.find({favColors: {$size: 3}}, {_id: 0, child:0, birthday: 0, favColors: 0})
db.users.find({"favColors.1": "red"}, {_id: 0, child:0, birthday: 0, favColors: 0})
db.users.find({age: {$elemMatch: {$lte: 35}}}, {_id: 0, child:0, birthday: 0, favColors: 0})
db.users.updateOne({age: 11}, {$set: {age: 100}})
db.users.updateMany({age: {$gt: 20}}, {$set: {age: 30}})
db.users.updateMany({age:  18}, {$set: {name: "Anna", email: "nikhodka@gmail.com"}})
db.users.replaceOne(
    {age: 30},
    {name: "New user", hasCar: 5, password: "216846546879654689498", hasWife: true}
    )
db.users.deleteMany({age: {$gte : 40}, age: {$lte: 20}})
db.users.bulkWrite([
    {
        insertOne : {
            "document": {name: "Mike", age: 45, email: "mike@test.ru"}
        }
    },
    {
        deleteOne : {
            filter: {age: 20}
        }
    },
    {
        updateOne : {
            filter: {name: "Herman"},
            update: {$set: {email: "germanmol@gmail.com"}}
        }
    },
    {
        replaceOne : {
            filter: {name: "Herman"},
            replacement: {$set: {name: "Герман"}}
        }
    }

])