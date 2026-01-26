const {Client, IntentsBitField, messageLink } = require("discord.js");
require("dotenv").config() // gives access to content of env file anywhere in this file

const TOKEN = process.env.DISCORD_TOKEN;

let lastNumber = 0;

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
})

client.on("ready", (cl) => {
  console.log(`${cl.user.tag} is ready and online 🟢 !!`);
})

// Basic
client.on("messageCreate", (message) => {

  if (message.author.id === "1429448834282688654") {
    return;
  }

  if (message.content == "hello") {
    message.reply("hello");
  }
})

// Detect bot
// client.on("messageCreate", (message) => {
//   if (message.author.id !== "1429448834282688654") {
//     if (message.author.bot) {
      
//     }
//   }
// })



// client.on("messageCreate", (message) => {

//   let num = Number.parseInt(message.content);
//   console.log(num);
  
//   if (num !== NaN) {
//     if (num - lastNumber === 1) {
//       lastNumber++;
//       message.react("✅");
//     }
//   }
// })

client.login(TOKEN);