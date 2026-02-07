const { Client, IntentsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
require("dotenv").config()

const TOKEN = process.env.TOKEN;

let lastNumber = 0;

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
});

const role = [
  {
    id: "1469602277320036364",
    label: "hacker"
  },
  {
    id: "1469602375881850965",
    label: "programmer"
  },
  {
    id: "1469602347683414106",
    label: "3d artist"
  },
  {
    id: "1234",
    label: "fake role"
  }
]

client.on("clientReady", async (cl) => {
  try {

    // to send to which channel
    // const channel = await client.channels.cache.get("1467948842283569183"); // Test channel
    const rolesChannel = await client.channels.cache.get("1469602593587331147");

    if (!rolesChannel) {
      console.log("Channel does not exists !!");
      return;
    }

    const row = new ActionRowBuilder();
    role.forEach((role) => {
      row.components.push(
        new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
      )
    });

    await rolesChannel.send({
      content: "Choose your role",
      components: [row]
    });

    process.exit(); // exit this file

  } catch (error) {
    console.log(error);
  }
})



client.login(TOKEN);

