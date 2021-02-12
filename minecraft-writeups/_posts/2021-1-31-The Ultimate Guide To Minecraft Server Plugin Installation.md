## How to install plugins on your Spigot Minecraft Server
#### If you don't already have a server, check out [this](/minecraft-writeups/2021/01/24/The-Ultimate-Guide-To-Minecraft-Server-Setup-&-Optimization.html)
Note: This guide doesn't go as deep as the last one. PebbleHost has a [Discord Server](https://discord.gg/pebblehost) if you need any help.

### 1. Setting up tools
All you will need is an open FTP connection. You should have set that up last time.

You'll only need NP++ and WinSCP connected to your server to continue.

### 2. Choosing plugins
There are a countless amount of plugins available for your Minecraft server. Personally, I have my server setup for a vanilla-ish experience. Here's my `pl`.
```
Plugins (32): AdvancedBan, AntiVPN, BetterSleeping3, Chunky, ClearLag, CoreProtect, DiscordSRV, dynmap*, Essentials, floodgate-bukkit, Geyser-Spigot, LuckPerms, Marriage, Matrix, mcMMO, Multiverse-Core, Multiverse-Inventories, Multiverse-NetherPortals, OldCombatMechanics, PlaceholderAPI, Plan, PLJRApi, ProtocolLib, ServerUtils, spark, StackMob, SuperVanish, TitleManager, Vault, VentureChat, ViaBackwards, ViaVersion
```

### 3. Downloading plugins
There are a few distribution centers for Minecraft Plugins.
* [GitHub](https://www.github.com/)
* [BukkitDev](https://dev.bukkit.org)
* [SpigotMC](https://www.spigotmc.org/)

There are (of course) more, but these will be where most common plugins are. (Plugins like EssentialsX, mcMMO, and Geyser/Floodgate will have you download the plugins from their own CI.)

### 4. Installing/Uploading plugins
Once you have your `.jar` file downloaded, just upload it to the `/plugins` folder on your server via FTP.

### 5. Configuring 
After starting/restarting your server with the new plugin installed, the plugin will crate a folder in `/plugins` where it will store it's data.

Check out [this](/minecraft-writeups/2021/02/04/The-Ultimate-Guide-To-Minecraft-Server-Plugin-Configuration.html) page on configuration. Toodles!

###### If you need any help, feel free to [contact me](/contact)
