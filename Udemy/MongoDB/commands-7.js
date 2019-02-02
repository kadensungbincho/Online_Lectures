db.friends.aggregate([
  { $unwind: "$hobbies" },
  { $group: { _id: { age: "$age" }, allHobbies: { $push: "$hobbies"  } } }
]).pretty()

db.friends.aggregate([
  { $unwind: "$hobbies" },
  { $group: { _id: { age: "$age" }, allHobbies: { $addToSet: "$hobbies"  } } }
]).pretty()

db.friends.aggregate([
  { $project: { _id: 0, examScore: { $slice: ["$examScores", -2] } } }
]).pretty()

db.friends.aggregate([
  { $project: { _id: 0, numScores: { $size: "$examScores" } } }
]).pretty()

db.friends.aggregate([
  { 
    $project: { 
    _id: 0, 
    scores: { $filter: { input: "$examScores", as: "sc", cond: { $gt: ["$$sc.score", 60] } } } 
    } 
  }
]).pretty()

db.friends.aggregate([
  { $unwind: "$examScores" },
  { $project: { _id: 1, name: 1, age: 1, score: "$examScores.score" } },
  { $sort: { examScores: -1 } },
  { $group: { _id: "$_id", name: { $first: "$name" }, maxScore: { $max: "$score" } } },
  { $sort: { maxScore: -1 } }
]).pretty();

db.persons.aggregate([
  { 
    $bucket: { 
      groupBy: "$dob.age", 
      boundaries: [0, 18, 30, 50, 80, 120], 
      output: {
        numPersons: { $sum: 1 },
        averageAge: { $avg: "$dob.age" },
        names: { $push: "$name.first" }
      } 
    } 
  }
]).pretty();

db.persons.aggregate([
  { 
    $bucket: { 
      groupBy: "$dob.age", 
      boundaries: [18, 30, 40, 50, 60, 80], 
      output: {
        numPersons: { $sum: 1 },
        averageAge: { $avg: "$dob.age" }
      } 
    } 
  }
]).pretty();

db.persons.aggregate([
  { 
    $bucketAuto: {
      groupBy: "$dob.age",
      buckets: 5,
      output: {
        numPersons: { $sum: 1 },
          averageAge: { $avg: "$dob.age" }
      }
    } 
  }
]).pretty();

db.persons.aggregate([
  { $project: { _id: 0, name: 1, birthdate: { $toDate: "$dob.date" } } },
  { $sort: { birthdate: 1 } },
  { $limit: 10 }
]).pretty()

db.persons.aggregate([
  { $project: { _id: 0, name: { $concat: ["$name.first", " ", "$name.last"] }, birthdate: { $toDate: "$dob.date" } } },
  { $sort: { birthdate: 1 } },
  { $skip: 10 },
  { $limit: 10 }
]).pretty()

