# Amazon DAX Client for JavaScript

DAX is a DynamoDB-compatible caching service that enables you to benefit from fast in-memory performance for demanding applications.

This client library provides access from NodeJS to DAX.

## Installing
The Amazon DAX client only runs from NodeJS, and can be installed using npm:
```sh
npm install amazon-dax-client
```

## Usage and Getting Started
You can follow the Getting Started tutorial at:

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.client.sample-app.html

To quickly use DAX, replace `AWS.DynamoDB` with `AmazonDaxClient`:

```javascript
const AmazonDaxClient = require('amazon-dax-client');

// Replace this ...
var ddb = new AWS.DynamoDB({region: region});
/// with this ...
var dax = new AmazonDaxClient({endpoints: [endpoint], region: region});

// If using AWS.DynamoDB.DocumentClient ...
var doc = new AWS.DynamoDB.DocumentClient({service: dax});
```

The DAX endpoint can be found the AWS console or by using `aws dax describe-clusters` from the command line.

## Getting Help
Please use these community resources for getting help.

 * Ask a question on [StackOverflow](https://stackoverflow.com/) and tag it with `amazon-dynamodb-dax`
 * Ask a question on [the AWS DynamoDB forum](https://forums.aws.amazon.com/forum.jspa?forumID=131&start=0)
 * Open a support ticket with [AWS Support](https://console.aws.amazon.com/support/home#/)

