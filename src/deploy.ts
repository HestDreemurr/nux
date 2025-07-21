import {
  REST,
  Routes
} from "discord.js";
import { load } from "./utils/load";

const commands = load("commands").map(({ command }) => command.data.toJSON());

export async function deployCommands() {
  const rest = new REST().setToken(process.env.BOT_TOKEN);
  
  try {
    console.log(`Recarregando ${commands.length} comandos slash...`);
    
    const data = await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );
    
    console.log(`${data.length} comandos slash foram recarregados`);
  } catch (err) {
    console.error(err);
  }
}