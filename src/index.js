const { Client, IntentsBitField, EmbedBuilder, Embed } = require("discord.js");
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

  // if (interaction.commandName === "ping") {
  //   // Vibed
  //   const sent = await interaction.reply({
  //     content: "🏓 Pinging...",
  //     fetchReply: true
  //   });

  //   const timeDiff = sent.createdTimestamp - interaction.createdTimestamp;
  //   const apiLatency = Math.round(client.ws.ping);

  //   await interaction.editReply({
  //     content: `🏓 **Pong!**\n⏱️ Latency: ${timeDiff}ms\n🌐 API Latency: ${apiLatency}ms`
  //   });
  // }

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

  if (interaction.commandName === "embed") {
    const title = interaction.options.get("title").value;
    const description = interaction.options.get("description").value;
    let color = interaction.options.get("color")?.value || "#FFF000";
    const embed = new EmbedBuilder()
      .setTitle(title)
      .setDescription(description)
      .setColor(color);

    interaction.reply({ embeds: [embed] });
  }

  if (interaction.commandName === "serverinfo") {
    const title = "🏳️ INSANE ASYLUM - SERVER INFO";
    const description = "Welcome to Insane Asylum! 🎮\n\n" +
      "A chill community created by Insane for gamers, developers or actually anyone who is deep into something! 🛠️\n\n" +
      "**What its about?**\n" +
      "-> Its a place mainly for devs to come and talk, discuss about their project, get help, collaborate\n" +
      "-> We also allow hiring and advertisments but only if a staff approves\n" +
      "-> Also not much rules here!\n" +
      "**Future Project:**\n" +
      "🚀 Coming soon: The Busters - A community-driven initiative to expose online scammers and protect users!\n\n" +
      "Thanks for being part of our asylum! 🏆";
    const color = "#8B00FF";
    const embed = new EmbedBuilder()
      .setTitle(title)
      .setDescription(description)
      .setColor(color)
      .setThumbnail(interaction.guild.iconURL())
      .setFooter({ text: `Created by Insane | Members: ${interaction.guild.memberCount}` });

    interaction.reply({ embeds: [embed] });
  }

  if (interaction.commandName === "question") {
    const funnyAnswers = [
      "Ask me again when I've had my coffee ☕",
      "The magic 8-ball is currently charging... try again later 🔮",
      "According to my calculations... the answer is 42 🤓",
      "I asked my rubber duck, he said no 🦆",
      "Error 404: Wisdom not found 🤖",
      "Let me check with the council of squirrels... 🐿️",
      "The voices in my head are divided on this one 🗣️",
      "I would tell you, but then I'd have to ban you 🤫",
      "According to the ancient scrolls... maybe? 📜",
      "I consulted the crystal ball, but it's just a paperweight ⚖️",
      "The answer is hidden in a fortune cookie somewhere 🥠",
      "I asked ChatGPT, but we're not on speaking terms 💬",
      "My sources say... look over there! 👀",
      "The hamster running my brain wheel is on break 🐹",
      "I'd answer, but my programming says I should be working 🛠️",
      "According to the algorithm of chaos... absolutely! 🎲",
      "Let me google that... brb 📱",
      "The answer is written in binary, but I forgot how to read it 💻",
      "I asked the universe, but it left me on read 🌌",
      "My psychic powers are currently updating... 📡"
    ];

    const randomAnswer = funnyAnswers[Math.floor(Math.random() * funnyAnswers.length)];
    interaction.reply(randomAnswer);
  }


  if (interaction.commandName === "test") {
    console.log(interaction.guild.iconURL());
    interaction.reply("Test done");
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