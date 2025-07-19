import {
  Client,
  GatewayIntentBits
} from "discord.js";
import { load } from "./utils/load";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

const events = load("events");
events.forEach(({ event }) => {
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
});

client.login(process.env.BOT_TOKEN);