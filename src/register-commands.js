require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  {
    name: "hey",
    description: "Says hey!",
  },

  {
    name: "ping",
    description: "Shows latency of the bot",
  },

  {
    name: "uwu",
    description: "UwU funny text",
  },

  {
    name: "whoami",
    description: "Who am I?",
  },

  {
    name: "serverinfo",
    description: "Gives server info",
  },

  {
    name: "add",
    description: "Adds two numbers",
    options: [
      {
        name: "first-number",
        description: "Enter first number",
        type: ApplicationCommandOptionType.Number,
        // choices: [
        //   {
        //     name: "one",
        //     value: 1,
        //   },

        // ],
        required: true,
      },

      {
        name: "second-number",
        description: "Enter second number",
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ]
  },

  {
    name: "question",
    description: "Ask any question and get a funny random answer",
    options: [
      {
        name: "query",
        description: "Your question",
        type: ApplicationCommandOptionType.String,
        required: true,
      }
    ]
  },

  {
    name: "8ball",
    description: "(Will implement sometime in future lol)",
    options: [
      {
        name: "enter",
        description: "Enter anything you wish",
        type: ApplicationCommandOptionType.String,
        required: true,
      }
    ]
  },

  {
    name: "embed",
    description: "Sends an embed",
    options: [
      {
        name: "title",
        description: "Title of the embed",
        type: ApplicationCommandOptionType.String,
        required: true,
      },

      {
        name: "description",
        description: "Description of the embed (use /n for new line)",
        type: ApplicationCommandOptionType.String,
        required: true,
      },

      {
        name: "color",
        description: "Color for the embed (use hex value like #FFF000)",
        type: ApplicationCommandOptionType.String,
      },
    ]
  },

  {
    name: "test",
    description: "For testing purposes only",
    options: [
      {
        name: "option-one",
        description: "Test option 1",
        type: ApplicationCommandOptionType.String,
      },

      {
        name: "option-two",
        description: "Test option 2",
        type: ApplicationCommandOptionType.String,
      },
    ]
  },

]

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {

    console.log("Registering slash commands....");

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      {
        body: commands
      }
    )

    console.log("Slash commands were registered successfully ❣️ ");
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();