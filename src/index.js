import Discord from "discord.js";
import dotenv from "dotenv-safe";

dotenv.config();

const client = new Discord.Client({ intents: "GUILDS" });

const prefix = "!";

client.on("message", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLocaleLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;

    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
});

client.login(process.env.BOT_TOKEN);
