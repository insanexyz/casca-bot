// handle all the events in the events/ folder
const path = require("path");
const getAllFiles = require("../utils/getAllFiles")

module.exports = (client) => {

  // __dirname gives current dir from root level
  const eventFolders = getAllFiles(path.join(__dirname, "..", "events"), true);

  for (const eventFolder of eventFolders) {
    const eventFiles = getAllFiles(eventFolder);

    // Sort events based on names, so we can give priority to some events based on numbers
    eventFiles.sort((a, b) => {
      return a > b;
    });

    // const eventName = eventFolder.replace(/\\/g, "/").split("/").pop(); // for windows
    const eventName = eventFolder.split("/").pop();

    client.on(eventName, async (arg) => {
      
      for (const eventFile of eventFiles) {
        const eventFunction = require(eventFile);
        await eventFunction(client, arg);
      }
    })
  }
}