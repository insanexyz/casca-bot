const {Client, IntentsBitField, messageLink } = require("discord.js");
require("dotenv").config() // gives access to content of env file anywhere in this file

const TOKEN = process.env.TOKEN;

let lastNumber = 0;

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
})

client.on("clientReady", (cl) => {
  console.log(`${cl.user.tag} is ready and online 🟢 !!`);
})

// Basic
client.on("messageCreate", (message) => {

  // console.log(typeof message);

  if (message.author.id === "1429448834282688654") {
    return;
  }

  if (message.content == "hello") {
    message.reply("hello");
  }
})

// Listen to slash commands and do
client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "hey") {
    interaction.reply("Heyyy!!!");
  }

  if (interaction.commandName === "ping") {
    interaction.reply("Pong!");
  }

  if (interaction.commandName === "uwu") {
    interaction.reply("uwu wow 💓 ");
  }

  if (interaction.commandName === "whoami") {
    interaction.reply("I am Casca bot working for Insane");
  }

  if (interaction.commandName === "add") {
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;
    interaction.reply(`${num1 + num2}`);
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