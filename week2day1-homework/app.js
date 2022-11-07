var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/statsdb";



MongoClient.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
}, function (err, db) {

    // 1. creating statsdb (database)
    var dbo = db.db('statsdb');
    if (err) throw err;
    console.log('database created!');

    // 2. creating uscensus (collection)
    dbo.createCollection('uscensus', function(err, res) {
        if (err) throw err;
        console.log('Collection uscensus created!');
    })
    

    // 3. adding givne data to the newly created databases
    var stats =[
        {
            'city': 'San Juan', 
            'zip': '00926', 
            'state': 'PR', 
            'income': '34781',
            'age': '44'
        },
        {
            'city': 'Corona', 
            'zip': '11368', 
            'state': 'NY', 
            'income': '50797',
            'age': '32'
        },
        {
            'city': 'Chicago', 
            'zip': '60629', 
            'state': 'IL', 
            'income': '42019',
            'age': '31'
        },
        {
            'city': 'El Paso', 
            'zip': '79936', 
            'state': 'TX', 
            'income': '54692',
            'age': '31'
        },
        {
            'city': 'Los Angeles', 
            'zip': '90011', 
            'state': 'CA', 
            'income': '36954',
            'age': '28'
        },
        {
            'city': 'Norwalk', 
            'zip': '90650', 
            'state': 'CA', 
            'income': '66453',
            'age': '35'
        }
    ]
    dbo.collection('uscensus').insertMany(stats, function(err, result) {
        if (err) throw err;
        console.log('Number of documents inserted: ' + result.insertedCount);
    })

    // 4. insert one record to uscensus collection:
    var two = [{'city': "Pacoima", 'zip': 91331, 'state': "CA", 'income': 60360, 'age': 33},
                {'city': "Ketchikan", 'zip': 99950, 'state': "AK", 'income': 00000, 'age': 00}];
    dbo.collection('uscensus').insertMany(two, function(err, res) {
        if (err) throw err;
        console.log('2 document inseretd');
    })

    // 5. query data:
    var myquery = {'state': /^CA/};
    dbo.collection('uscensus').find(myquery).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    })
    // var newvalues = {$set: {name: 'Mickey', address: 'Canyon 123'}};
    // dbo.collection('customers').updateOne(myquery, newvalues, function(err, res) {
    //   if (err) throw err;
    //   console.log('1 document updated');
    //   db.close();
    // })
})

