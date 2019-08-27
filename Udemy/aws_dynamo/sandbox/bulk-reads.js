const async = require('async');
const _ = require('underscore');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-northeast-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

var startKey = [];
var results = [];
var pages = 0;
async.doWhilst(
  // iterate
  (callback) => {
    let params = {
      TableName: 'global_td_notes',
      ConsistentRead: true,
      Limit: 3
    };

    if(!_.isEmpty(startKey)) {
      params.ExclusiveStartKey = startKey;
    }

    docClient.scan(params, (err, data) => {
      if(err) {
        console.log(err);
        callback(null, {});
      } else {
        if(typeof data.LastEvaluatedKey !== 'undefined') {
          startKey = data.LastEvaluatedKey;
        } else {
          startKey = [];
        }
      }

      pages++;
      console.log(data.Items, "=====> Page ", pages);

      callback(null, results);
    });
  },

  // truth test
  () => {
    console.log('truth');
    return true;
  },

  // callback
  (err, data) => {
    if(err) {
      console.log(err);
    } else {
      console.log("Pages", pages);
    }
  }
);