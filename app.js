const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// 1 STRING, 1 OUTPUT
app.message('get a kkred', async ({ message, say }) => {
  await say('pay me');
});

app.message('ping', async ({ message, say }) => {
  await say('PONG');
});

app.message('bing', async ({ message, say }) => {
  await say('BONG');
});

app.message('oo', async ({ message, say }) => {
  await say('OOBOO');
});

app.message('chess', async ({ message, say }) => {
  await say('chezz');
});

// MENTIONS
app.event('app_mention', async ({ event, say , context }) => {
  await say('IO 2 I AM OOBOO');
});

app.message(/echo (.*)/i, async ({ message, say, context }) => {
  var user = message.user;
  console.log(message.user);
  //d = U0316HMAS
  if(user == "U0316HMAS") {
    await say(context.matches[1]);
  }
});

/* FUNCTIONS
app.message(/math (\S*) (\S*)/i, async ({ message, say, context }) => {
  const a = context.matches[1];
  const b = context.matches[2];
  var c = (+a) + (+b);
  await say(c.toString());
});*/



(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();