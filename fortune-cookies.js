"use strict";

const TelegramBot = require('node-telegram-bot-api'),
	CronJob = require('cron').CronJob,
	request = require('request'),
	token = '528622242:AAE_3eqMAzzYCPagYQSB6QZrjxNp2Wt6v6E';

const bot = new TelegramBot(token, {
	polling: true,
});

// enable Cron
var job = new CronJob('0,15,30,45 * * * * *', function() {
	console.log('knock-knock');
});

job.start();
