import { Composer, InlineKeyboard } from "grammy/mod.ts";
import contextCache from "../helpers/cache.ts";

const composer = new Composer();

const reply_markup = new InlineKeyboard().text("Message Details", "update")
  .text("Chat ID", "chatId");

composer.callbackQuery("update", async (ctx) => {
  const context = contextCache.get(ctx.from!.id);
  if (!context) {
    return await ctx.editMessageText("Timed out! Please send the text again!");
  }
  try {
    await ctx.editMessageText(
      `<code>${JSON.stringify(context!.update, null, 2).substr(0, 1024) ?? "null"}</code>`,
      {
        reply_markup: reply_markup,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      },
    );
  } catch {
    await ctx.answerCallbackQuery("done");
  }
});

composer.callbackQuery("chatId", async (ctx) => {
  const context = contextCache.get(ctx.from!.id);
  if (!context) {
    return await ctx.editMessageText("Timed out! Please send the text again!");
  }
  let msg = `Current Chat ID: <code>${ctx.from!.id}</code>`;
  if (context.update.message?.forward_from) {
    msg +=
      `\nForward from Chat ID: <code>${context.update.message.forward_from.id}</code>`;
  }
  try {
    await ctx.editMessageText(
      msg,
      {
        reply_markup: reply_markup,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      },
    );
  } catch {
    await ctx.answerCallbackQuery("done");
  }
});

export default composer;
