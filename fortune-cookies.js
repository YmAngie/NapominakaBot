"use strict";

const TelegramBot = require('node-telegram-bot-api'),
	CronJob = require('cron').CronJob,
	request = require('request'),
	token = '528622242:AAE_3eqMAzzYCPagYQSB6QZrjxNp2Wt6v6E';

// temporary solution for testing without sending a start message every time
// TO DO: change after host within heroku
let chatId = '109792809' || '';
//let chatId = '';

const bot = new TelegramBot(token, {
	polling: true,
});

// TO DO: save chatId only once?
bot.on('message', function(msg) {
	chatId = msg.chat.id;
})

const job = new CronJob('15,30,45 * * * * *', function() {
	const url = 'http://www.yerkee.com/api/fortune';

	request(url, function(error, response, body) {
		const data = JSON.parse(body);
		
		bot.sendMessage(chatId, data.fortune);
	});
});

job.start();
