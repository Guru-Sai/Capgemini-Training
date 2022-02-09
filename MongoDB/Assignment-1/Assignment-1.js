MongoDB Exercise in mongo shell
Connect to a running mongo instance, use a database named mongo_practice.
Document all your queries in a javascript file to use as a reference.

1.Insert Documents
Insert the following documents into a movies collection.

ANS:

use mongo_practice
db.createCollection('movies')
db.movies.insert({title: 'Fight Club',writer: 'Chuck Palahniuko',year: 1999,actors: ['Brad Pitt','Edward Norton']})
db.movies.insert({title: 'Pulp Fiction',writer: 'Quentin Tarantino',year: 1994,actors: ['John Travolta','Uma Thurman']})
db.movies.insert({title: 'Inglorious Bastards',writer:'Quentin Tarantino',year: 2009,actors: ['Brad Pitt','Diane Kruger','Eli Roth']})
db.movies.insert({title: 'The Hobbit: An Unexpected Journey',writer: 'J.R.R. Tolkein',year: 2012,franchise : 'The Hobbit'})
db.movies.insert({title: 'The Hobbit: The Desolation of Smaug',writer: 'J.R.R. Tolkein',year: 2013,franchise : 'The Hobbit'})
db.movies.insert({title: 'The Hobbit: The Battle of the Five Armies',writer: 'J.R.R. Tolkein',year: 2012,franchise : 'The Hobbit',synopsis: 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.'})
db.movies.insert({title: "Pee Wee Herman's Big Adventure"})
db.movies.insert({title: 'Avatar'})


2.Query / Find Documents
query the movies collection to
1. get all documents
2. get all documents with writer set to "Quentin Tarantino"
3. get all documents where actors include "Brad Pitt"
4. get all documents with franchise set to "The Hobbit"
5. get all movies released in the 90s
6. get all movies released before the year 2000 or after 2010

ANS:
db.movies.find()
db.movies.find({writer:'Quentin Tarantino'})
db.movies.find({actors:"Brad Pitt"})
db.movies.find({franchise:"The Hobbit"})
db.movies.find({$and:[{year:{$gte:1990}},{year:{$lt:2000}}]})
db.movies.find({$or:[{year:{$gte:2010}},{year:{$lt:2000}}]})

3.Update Documents
1. add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
2. add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
3. add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"


ANS:
db.movies.update({title:"The Hobbit: An Unexpected Journey"},{$set:{synopsis:"A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})
db.movies.updateOne({title:"The Hobbit: The Desolation of Smaug"},{$set:{synopsis:"The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})
db.movies.updateOne({title:"Pulp Fiction"},{$set:{"actors.2" :"Samuel L. Jackson" }})

4.Delete Documents
1. delete the movie "Pee Wee Herman's Big Adventure"
2. delete the movie "Avatar"

ANS:
db.movies.deleteOne({title:"Pee Wee Herman's Big Adventure"})
db.movies.deleteOne({title:"Avatar"})