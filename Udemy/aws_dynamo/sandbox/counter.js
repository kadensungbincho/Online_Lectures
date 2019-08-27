const AWS = require("aws-sdk");
AWS.config.update({ region: 'ap-northeast-2' });

const docClient = new AWS.DynamoDB.DocumentClient();
