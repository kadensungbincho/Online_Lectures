const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const AmazoneDaxClient = require("amazon-dax-client");
const dax = new AmazoneDaxClient({
  endpoints: ['dax-notes-app.4fovtg.clustercfg.dax.usw2.cache.amazonaws.com:8111'],
  region: 'us-west-2'
})

exports.handler = (event, context, callback) => {
  dax.getItem({
    TableName: "global_td_notes",
    Key: {
      user_id: {
        S: event.user_id.toString(),
      },
      timestamp: {
        N: event.timestamp.toString()
      }
    }
  }, (err, data) => {
    if(err) {
      callback(err);
    } else {
      callback(data);
    }
  })
};

