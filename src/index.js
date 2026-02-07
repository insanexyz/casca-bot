const { Client, IntentsBitField, Embed, messageLink } = require("discord.js");
require("dotenv").config() // gives access to content of env file anywhere in this file
const { getRandomInt } = require("./utils/getRandomInt");

const eventHandler = require("./handlers/eventHandler.js");

const TOKEN = process.env.TOKEN;

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
})


eventHandler(client);

client.login(TOKEN);