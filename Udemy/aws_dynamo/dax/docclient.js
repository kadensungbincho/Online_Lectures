const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const AmazoneDaxClient = require("amazon-dax-client");
const dax = new AmazoneDaxClient({
  endpoints: ['dax-notes-app.4fovtg.clustercfg.dax.usw2.cache.amazonaws.com:8111'],
  region: 'us-west-2'
})

const docClient = new AWS.DynamoDB.DocumentClient({
  service: dax
});

exports.handler = (event, context, callback) => {
  docClient.get({
    TableName: 'global_td_notes',
    Key: {
      user_id: event.user_id,
      timestamp: parseInt(event.timestamp)
    }
  }, (err, data) => {
    if(err) {
      callback(err);
    } else {
      callback(data);
    }
  })
}