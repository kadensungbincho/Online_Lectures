const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const AmazoneDaxClient = require("amazon-dax-client");
const dynamodb = new AmazoneDaxClient({
  endpoints: ['dax-notes-app.4fovtg.clustercfg.dax.usw2.cache.amazonaws.com:8111'],
  region: 'us-west-2'
})

// const dynamodb = new AWS.DynamoDB();
dynamodb.getItem({
  TableName: "global_td_notes",
  Key: {
    user_id: {
      S: "2fb8c502-ca81-48dc-9d5a-c1bdaca70781",
    },
    timestamp: {
      N: "1564835071"
    }
  }
}, (err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
})

