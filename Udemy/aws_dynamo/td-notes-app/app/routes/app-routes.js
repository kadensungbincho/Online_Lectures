const express = require('express');
const moment = require('moment');
const _ = require('underscore');
const uuidv4 = require('uuid/v4');

const router = express.Router();

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = router;