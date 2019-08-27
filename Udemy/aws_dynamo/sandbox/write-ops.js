const AWS = require("aws-sdk");
AWS.config.update({ region: 'ap-northeast-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.put({
//   TableName: 'td_notes_sdk',
//   Item: {
//     user_id: 'bb',
//     timestamp: 2,
//     title: 'my title',
//     content: 'my content'
//   }
// }, (err, data) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });