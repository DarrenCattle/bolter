const { App, directMention } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// 1 STRING, 1 OUTPUT
app.message('get a kkred', async ({ message, say }) => {
  await say('pay me');
});

app.message('bing', async ({ message, say }) => {
  await say('BONG');
});

app.message('chess', async ({ message, say, context }) => {
  await say('chezz');
});

// MENTIONS
app.event('app_mention', async ({ event, say , context }) => {
  await say('IO 2 I AM OOBOO');
});

app.message(/echo (.*)/i, async ({ message, say, context }) => {
  var user = message.user;
  //d = U0316HMAS
  if(user == "U0316HMAS") {
    await say(context.matches[1]);
  }
});

//COMMANDS
app.command('/roll', async ({ command, ack, say }) => {
  await ack();
  var die = 6;
  if(command.text!=='' && !isNaN(command.text)) {
    die = parseInt(command.text);
  }
  else { die = 6; }
  die = die < 1 ? 1 : die;
  die = die > 1001 ? 1000 : die;
  var roll = Math.ceil(Math.random()*die);
  await say(command.user_name + ' rolls: ' + roll);
});

app.command('/ooboo', async ({ command, ack, say }) => {
  await ack();
  await say('OOBOO!!! brought to you by ' + command.user_name);
});


(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();
