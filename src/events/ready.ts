import { Events, Client } from "discord.js";

export const event = {
  name: Events.ClientReady,
  once: true,
  execute(client: Client) {
    console.log(`[+] O Bot ${client.user.tag} está on-line!`);
  }
};