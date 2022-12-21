import { Composer, InlineKeyboard } from "grammy/mod.ts";

const composer = new Composer();

composer.callbackQuery("help", async (ctx) => {
  await ctx.editMessageText(
    `<b>Help Menu:</b>
    
Cloning the bot:
1. Go to @BotFather and create a new bot.
2. Forward the message with token from @BotFather to this bot.
That's it!

<b>Using the bot:</b>
Send or forward a message and use the buttons to get the message data.`,
    {
      reply_markup: new InlineKeyboard().url(
        "Source",
        "https://github.com/xditya/TGdetailsBot",
      )
        .text("Home", "home"),
      parse_mode: "HTML",
    },
  );
});

export default composer;
