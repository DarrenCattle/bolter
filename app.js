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

app.message(/math (\S*) (\S*)/i, ({ say, context }) => {
  const a = context.matches[1];
  const b = context.matches[2];
  await say(a+b);
});

app.message(/echo (.*)/i, ({ say, context }) => {
  say(context.matches[1]);
});

// MENTION LISTENERS
app.event('app_mention', async ({ event, say , context }) => {
  await say('im not a ho');
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();