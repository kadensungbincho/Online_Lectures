const AWS = require("aws-sdk");
AWS.config.update({ region: 'ap-northeast-2' });

const dynamodb = new AWS.DynamoDB();

dynamodb.putItem({ 
  TableName: 'td_notes_archive',
  Item: { 
    note_id: { S: '5559jkhs' },
    user_id: { S: '88888888' },
    user_name: { S: 'Riyaz' },
    title: { S: 'updated note' },
    content: { S: 'this is a test note' },
    timestamp: { N: '1520513143' }
    }
  },
   (err, data) => {
  if(err) {
    console.log(err);
  }
})