var env = require('node-env-file');
env(__dirname + '/.env');

var Botkit = require('botkit');

var controller = Botkit.slackbot({
    debug: true,
    // clientId: process.env.clientId,
    // clientSecret: process.env.clientSecret,
    // clientVerificationToken: process.env.clientVerificationToken,
    json_file_store: __dirname + '/.data/db/',
    scopes: ['bot']
});

var bot = controller.spawn({
    token: process.env.oauthToken
}).startRTM();

controller.hears('hello','direct_message', function(bot, message) {
    bot.reply(message,'Hello yourself!');
});

controller.hears('time','direct_message', function(bot, message) {
    bot.reply(message, ':+1:' + new Date().toLocaleDateString() );
});
