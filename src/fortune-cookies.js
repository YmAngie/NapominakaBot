"use strict";

import { token } from './token.js';

const TelegramBot = require('node-telegram-bot-api'),
	CronJob = require('cron').CronJob,
	request = require('request'),
	test = 'test';

const bot = new TelegramBot(token, {
	polling: true,
});

bot.on('message', function(msg) {
	let chatId = msg.chat.id;
	getFortuneCookie(chatId);
})

function getFortuneCookie(chatId) {
	const url = 'http://www.yerkee.com/api/fortune';

	request(url, function(error, response, body) {
		const data = JSON.parse(body);
		
		bot.sendMessage(chatId, data.fortune);
	});
}
