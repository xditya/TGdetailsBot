import { Composer, InlineKeyboard } from "grammy/mod.ts";
import contextCache from "../helpers/cache.ts";

const composer = new Composer();

const reply_markup = new InlineKeyboard().text("Message Details", "update")
  .text("Chat ID", "chatId");

composer
  .chatType("private")
  .on("message", async (ctx) => {
    contextCache.set(ctx.from!.id, ctx);
    await ctx.reply(
      "Chose the Option!\n\nJoin @BotzHub for more useful bots!",
      {
        reply_markup: reply_markup,
      },
    );
  });

export default composer;
