import {
  Client,
  GatewayIntentBits,
  Collection
} from "discord.js";
import { load } from "./utils/load";
import { deployCommands } from "./deploy";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

client.commands = new Collection();

const events = load("events");
events.forEach(({ event }) => {
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
});

const commands = load("commands");
commands.forEach(({ command }) => {
  client.commands.set(command.data.name, command);
});

deployCommands();
client.login(process.env.BOT_TOKEN);