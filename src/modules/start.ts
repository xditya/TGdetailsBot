import { Composer, InlineKeyboard } from "grammy/mod.ts";

const composer = new Composer();

composer
  .chatType("private")
  .command("start", async (ctx) => {
    await ctx.reply(
      "This bot can fetch you all the data contained in a telegram message. Forward or send a message to know more.",
      {
        reply_markup: new InlineKeyboard().url(
          "Source",
          "https://github.com/xditya/TGdetailsBot",
        )
          .text("Help", "help"),
      },
    );
  });

composer.callbackQuery("home", async (ctx) => {
  await ctx.editMessageText(
    "This bot can fetch you all the data contained in a telegram message. Forward or send a message to know more.",
    {
      reply_markup: new InlineKeyboard().url(
        "Source",
        "https://github.com/xditya/TGdetailsBot",
      )
        .text("Help", "help"),
    },
  );
});

export default composer;
