const { Client, IntentsBitField, EmbedBuilder, Embed, messageLink } = require("discord.js");
require("dotenv").config() // gives access to content of env file anywhere in this file
const { OpenAI } = require("openai");

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

  if (message.content === "+rules") {
    const embed = new EmbedBuilder()
      .setTitle("📘Public Server Rules")
      .setDescription(`
        1) 🤝
        Be Respectful
        • Treat everyone kindly.
        • No bullying, hate speech, racism, or discrimination.
        • No rude, offensive, or harassing messages.

        2) 🌍
        Language Rules
        • English is the main language.
        • You can use other languages, but NOT to insult, hide bad behavior, or break rules.

        3) 🙅
        No Begging
        • Don't ask for roles, permissions, or unfair advantages.

        4) 🛠️
        Follow Staff Instructions
        • Listen to moderators and admins at all times.
        • Don't argue or create drama with staff decisions.

        5) 💬
        No Spamming
        • No message spam, emoji spam, or bot command spam.
        • Raiding = instant ban.

        6) 🎧
        No Mic Spam (VC)
        • Don't scream, blast music, or disrupt voice chats.
        • Use push-to-talk if needed.

        7) 🎭
        No Impersonation
        • Don't pretend to be staff

        8) 🧒
        Be Mature
        • No unnecessary drama, fights, or attention-seeking behavior.
        • Act responsibly

        9) 🧠
        Use Common Sense
        • If you think it might break the rules… don't do it.
        • Don't look for loopholes or try to bend rules.
        `)
      .setColor("#000000");

    client.channels.cache.get("1465935638477144298").send({ embeds: [embed] });
  }

  // if (message.content.toLocaleLowerCase().includes("insane")) {
  //   client.channels.cache.get("1466130239057821716").send("<@434738865136336896> mentioned!!");
  // }

  // if (message.content.toLocaleLowerCase().includes("ak40")) {
  //   client.channels.cache.get("1466130239057821716").send("<@1383428957486977119> mentioned!!");
  // }

  // if (message.content.toLocaleLowerCase().includes("germ") || message.content.toLocaleLowerCase().includes("GΣЯM")) {
  //   client.channels.cache.get("1466130239057821716").send("<@833593810444746775> mentioned!!");
  // }


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

    const uwuResponses = [
      "UwU you're standing kinda close~ 💕",
      "OwO h-hey… don't look at me like that~ ✨",
      "blushes deeply uwu stop teasing~ 🌸",
      "UwU m-my heart just skipped… weird~ 💗",
      "leans in a little owo is this okay~?",
      "UwU you're dangerously charming~ ✨",
      "tail swishes uwu someone's confident~ 🐾",
      "OwO why is it suddenly warm in here~?",
      "soft giggle uwu you're trouble~ 💕",
      "UwU eye contact is illegal… stop~ 🌸",
      "fidgets owo you noticed that~?",
      "UwU flirting detected… engaging blush mode 💗",
      "smirks owo bold today, aren't you~",
      "UwU this feels like an anime moment~ ✨",
      "heart goes doki doki uwu oh no~ 💕"
    ];

    const reply = uwuResponses[Math.floor(Math.random() * uwuResponses.length)];
    interaction.reply(reply);
  }

  if (interaction.commandName === "whoami") {
    interaction.reply("I am Casca bot working for Insane");
  }

  if (interaction.commandName === "owner") {

  }

  if (interaction.commandName === "add") {
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;
    interaction.reply(`${num1 + num2}`);
  }

  if (interaction.commandName === "embed") {
    const title = interaction.options.get("title").value;
    const description = interaction.options.get("description").value;
    let color = interaction.options.get("color").value;
    if (color === null) {
      color = "#FFF000";
    }
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
    // console.log(interaction.guild.iconURL());
    console.log(interaction);
    interaction.reply("Test done");
  }

  if (interaction.commandName === "set-reminder") {
    interaction.reply("Bro, I am not your slave wtf??!!??");
  }

})



const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ai") {
    const query = interaction.options.get("query").value;
    const ALLOWED_AICHAT_CHANNELS = ["1465916890936246312", "1465788754156322837", "1465754118630146313", "1369673178657329314"];

    if (!ALLOWED_AICHAT_CHANNELS.includes(interaction.channelId)) {
      await interaction.reply("You are not allowed to use this command here");
      return;
    }

    await interaction.deferReply();

    // Get reply type
    const personality = interaction.options.get("personality").value;
    let content = "";

    switch (personality) {
      case "uwu": 
        content = "You are cute uwu chan, be full uwu, uwu bro!!. You are very very funny and not serious at all. And you are not formal. You are like everyones fav uwu waifu";
        break;
      case "sigma":
        content = "You are full sigma, hold back nothing. You are extremely serious. You dont give a damn and are too arrogant."
        break;
      case "giga digga chad": 
        content = "You are giga chad, you are him. You treat others like children and you are their mentor.";
        break;
      case "very pro nasa hacker":
        content = "You are very pro level nasa hacker with so much knowledge even god would feel shy."
        break;
    }

    // openai api response
    const response = await openai.chat.completions.create({
      model: "gpt-5-nano",
      messages: [
        {
          // name: 
          role: "system",
          content: content + "And you reply in no more than 20 words!!" + "Dont sound like a robot or a teacher at all, be like a real person talking with the personality mentioned.",
        },
        {
          role: "user",
          content: query,
        }
      ]
    }).catch((error) => {
      console.log("OpenAI error:\n", error);
    })

    if (!response) {
      interaction.editReply("There was some error with the OPENAI api. Try again in some moments or DM Insane.");
      return;
    }

    interaction.editReply("Your question: " + query + "\n" + "Personality: " +  personality + "\n" + "Response: " + response.choices[0].message.content);
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