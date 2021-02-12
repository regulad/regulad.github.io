# How to configure plugins on your Spigot Minecraft Server
#### If you don't already have a server, check out [this](/minecraft-writeups/2021/01/24/The-Ultimate-Guide-To-Minecraft-Server-Setup-&-Optimization.html)
Note: This guide doesn't go as deep as the last one. PebbleHost has a [Discord Server](https://discord.gg/pebblehost) if you need any help.

### 1. Setting up tools
All you will need is an open FTP connection. You should have set that up last time.

You'll only need NP++ and WinSCP connected to your server to continue.

### 2. Configuration
Check out the folder for each plugin located in `/plugins`.

Here are some recommended configurations that I use on my own server.

#### BetterSleeping3 (config.yml)
```yaml
# ____       _   _            _____ _                 _                       ____

#|  _ \     | | | |          / ____| |               (_)                     |___ \

#| |_) | ___| |_| |_ ___ _ _| (___ | | ___  ___ _ __  _ _ __   __ _     __   ____) |

#|  _ < / _ \ __| __/ _ \ '__\___ \| |/ _ \/ _ \ '_ \| | '_ \ / _` |    \ \ / /__ <

#| |_) |  __/ |_| ||  __/ |  ____) | |  __/  __/ |_) | | | | | (_| |     \ V /___) |

#|____/ \___|\__|\__\___|_| |_____/|_|\___|\___| .__/|_|_| |_|\__, |      \_/|____/

#                                              | |             __/ |

#                                              |_|            |___/





# To reset a BetterSleeping config file, you can simply delete it and perform /bs reload or restart the server



# Useful links:

# Our Spigot plugin page:                                       https://www.spigotmc.org/resources/bettersleeping-1-12-1-14.60837/

# For support or suggestions, head over to our Discord server:  https://discord.gg/AS46VGT

# You can find a live list of upcoming features/bug fixes here: https://github.com/Nuytemans-Dieter/BetterSleeping/issues

# The progress of the next release can be found here:           https://github.com/Nuytemans-Dieter/BetterSleeping/milestones

# Considered buying the premium version? (Spigot account needed)https://www.spigotmc.org/resources/bettersleeping-premium-1-13-1-16.78951/



# Configuration guide and default values:       https://github.com/Nuytemans-Dieter/BetterSleeping/blob/v3.0.0/src/main/resources/config.yml

# All default config files can be found here:   https://github.com/Nuytemans-Dieter/BetterSleeping/blob/v3.0.0/src/main/resources



# The default language file to be used

# Options: en-US (English), nl-BE (Dutch), es-ES (Spanish), pt-PT (Portuguese), de-DE.yml (German), fr-FR (French), Chinese (zh-ZH)

# Want to disable all messages? Set this to: "silent". It will load an empty config files and will disable most messages

# Up-to-date list here: https://github.com/Nuytemans-Dieter/BetterSleeping/tree/v3.0.0/src/main/resources/lang

language: "silent"



# Choose whether to use the short prefix: [BS] (true) or the long one [BetterSleeping] (false)

shorten_prefix: true



# This is ran once on startup when enabled to fetch the latest version

update_notifier: true



# Whether or not phantoms should be disabled

disable_phantoms: false



# Automagically add all missing options in your config (when you delete an option or an update has new features)

# IMPORTANT NOTE: This will reset all comments above options, except for a link to the documentation

# Options in this file will never be automatically added due to the importance of some information

auto_add_missing_options: false
```

#### bStats (config.yml)
```yaml
# bStats collects some data for plugin authors like how many servers are using their plugins.
# To honor their work, you should not disable it.
# This has nearly no effect on the server performance!
# Check out https://bStats.org/ to learn more :)
enabled: false
serverUuid: 
logFailedRequests: false
```

#### ClearLag (config.yml)
```yaml
#--------------------------------------------------------------------#
#                   ClearLag Configuration File                      #
#--------------------------------------------------------------------#
# Configure to your liking, reload the config by tying: /lagg reload #
#                                -                                   #
#  Here is a helpful tutorial on this configuration setup! (Updated) #
# http://dev.bukkit.org/bukkit-plugins/clearlagg/pages/config-setup/ #
#--------------------------------------------------------------------#
#          All possible mob names: https://goo.gl/cch8YK             #
#--------------------------------------------------------------------#
config-version: 19

# -- 'use-internal-tps' Should clearlag just use the calculated internal TPS? (Improves accuracy)
# -- 'language' Clearlag supports multiple languages (https://github.com/bob7l/Clearlag-Languages) translated by the community
# -- 'use-internal-tps' Should Clearlag use Spigot's /tps? (Updated by minutes, much slower, but more accurate!)
settings:
  language: English
  auto-update: true
  enable-api: true
  use-internal-tps: true

#Controls ALL of Clearlag's broadcasting. Disabling this will disable ALL broadcasting on Clearlag
# -- 'enabled' Should clearlag broadcast messages at all? (Example: Auto-removal, warnings, ect)
# -- 'async' Should messages be broadcasted on another thread
# -- 'use-permission-for-broadcasts' Should clearlag use permissions?
# -- 'permission' What is the permission? (By default, it's bukkit's default)
global-broadcasts:
  enabled: true
  async: false
  use-permission-for-broadcasts: false
  permission: bukkit.broadcast

#Monitors your server's main thread for locking/freezing. Helps figure out what's causing lag-spikes
# NOTE: This will outprint mostly just stacktraces. It's up to YOU to interpret the stacktrace
# NOTE: (!Important!) Clearlag will print EVERYTHING to your Spigot/Bukkit server logs!
# NOTE: A large 'Garbage collection time' generally means the spike was caused by the Garbage collector (Memory issue basically..)
# -- 'enabled' Should this be enabled (Prints data to your logs, not ingame chat)
# -- 'min-elapsed-time' How long (IN MILLISECONDS) of a server-tick constitutes a freeze/lock? I don't recommend going under ~80
# -- 'check-interval' How often (IN MILLISECONDS) should the server be checked? Lower the number, more accurate the timings
# -- 'follow-stack' Should Clearlag keep printing the stacktrace every time it changes (Can be very spammy)?
# Help-> https://dev.bukkit.org/projects/clearlagg/pages/finding-the-cause-of-lag-spikes
lag-spike-helper:
  enabled: false
  min-elapsed-time: 500
  check-interval: 100
  follow-stack: true

#Limits the amount of item transfers for all the hoppers in a single chunk
# -- 'transfer-limit' How many transfers per check interval until the hopper should be disabled
# -- 'check-interval' In seconds, on what interval should the transfer limit be reset
hopper-limiter:
  enabled: false
  transfer-limit: 5
  check-interval: 1

#Meters your ram usage. If it goes above 'limit', run 'commands:'
# NOTE: It's perfectly normal for your server to be using a lot of memory. The JVM's garbage collector will automatically free memory.
# NOTE: Only use this if you have very little memory that can't support the server
# -- 'ram-limit' is in MB, do not set it exactly to your max allocated ram amount
# -- 'interval' is how often clearlag will check your ram usage
# -- 'commands' lists the commands that will be ran upon hitting your ram-limit
ram-meter:
  enabled: false
  interval: 20
  ram-limit: 5000
  commands:
    - 'lagg killmobs'
    - 'lagg clear'

#Configure what the '/lagg halt' command does
# -- 'remove-entities' remove entities such as items, primed-tnt, and mobs
# -- 'disable-natural-entity-spawning' disables the server's natural world spawning
# -- 'halted' this section defines which actions should be halted during '/lagg halt'
halt-command:
  remove-entities: true
  disable-natural-entity-spawning: true
  halted:
    fire: true
    fire-burn: true
    explosion: true
    decay: true
    block-fade: true
    block-form: true
    block-spread: true
    block-natural-change: true

#This limits how fast a user can move by walking or flying in a single tick (20 ticks a second)
#I HIGHLY recommend you use this on servers with increased player-speed/fly to prevent chunk overload
#You may also use Spigot's internal speed limiters to achieve the same goal if present on your version (better performance)
# -- 'move-max-speed' Max speed on foot
# -- 'fly-max-speed'  Max speed while flying
player-speed-limiter:
  enabled: false
  move-max-speed: 0.7
  fly-max-speed: 0.8

#Set the age of specific items when they're first spawned so they naturally despawn faster, or slower then others
#Recommended for servers with a lot of item-entities consisting mostly of useless items (Such as stone)
#Material list: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html
# -- 'items' Lists the material names of the entities with their spawn-age (In seconds)
item-spawn-age-setter:
  enabled: false
  items:
    stone: 240
    grass: 240
    cobblestone: 240
    log: 240
    stone_axe: 240
    stone_pickaxe: 240
    stone_sword: 240
    wooden_axe: 240
    wooden_pickaxe: 240
    wooden_sword: 240
    rotten_flesh: 240
    gravel: 240
    dirt: 240
    leather: 200
    sand: 240
    bone: 240
    beef: 240
    chicken: 160
    rabbit: 240
    salmon: 240
    cactus: 210
    wool: 180
    arrow: 160
    PORKCHOP: 240
    potato: 240
    RED_TULIP: 240

#Should mobs be nerfed to prevent over-breeding to reduce CPU usage (And possibly raise TPS)
#When mobs are stuck too close, collisions are extremely intensive putting a pretty mean load on the server
# -- 'max-mobs' means how many bably/adult animals are allowed within the 'check-radius'
# -- 'check-radius' is the radius of what clearlag will check for 'max-mobs'
mob-breeding-limiter:
  enabled: true
  max-mobs: 10
  check-radius: 4

#Should clearlag purge logs under /logs when the server starts?
# -- 'days-old' means how many days old can the log be to be deleted
log-purger:
  enabled: false
  days-old: 3

#What type of entities SHOULD NOT be removed while doing /lagg area?
area-filter:
    - Itemframe
    - Minecart
    - Wolf
    - Villager
    - Horse
    - ARMOR_STAND

#Should clearlag reset the config, or attempt to update your config on updates
# -- 'force-update' is whether or not clearlag will reset your config with a newer version
# -- settings this to false will make clearlag update your config rather then resetting
config-updater:
  force-update: false

#This limits the mob egg spawners so players cannot "overload" the server with them
# -- 'check-radius' is the radius clearlag will check for nearby entities
# -- 'max-mobs' is how many entities may be in the radius before the spawning is blocked
mobegg-limiter:
  enabled: false
  check-radius: 8
  max-mobs: 5

#Disable new chunk generation, or just put a cap on how many can load at once.
#May cause many bugs with Spigot 1.8+, not recommended!
# -- 'create-new-chunks' disables or enables chunk creation. false would disallow new chunks
# -- !UNSTABLE ON SPIGOT BUILDS!
chunk-limiter:
  enabled: false
  limit: 6000
  create-new-chunks: true

#This modifies the view range of entities
# -- Lower it is, the better your entity tick will be and the more CPU cycles you'll save
# -- If it's too high, expect bugs / lots of lag
mob-range:
  enabled: false
  zombie: 30
  skeleton: 30
  creeper: 20

#How long should items/Mobs be left on the ground
# -- live-time's go by ticks (20 ticks a second)
live-time:
  enabled: false
  interval: 10
  mobtimer: true
  itemtimer: true
  arrowtimer: true
  arrowkilltime: 15
  moblivetime: 600
  itemlivetime: 240

#This option disallows the placement of too many tnt-minecarts
# -- 'radius' is the radius clearlag will check for TNT-Minecarts
tnt-minecart:
  enabled: true
  max: 2
  radius: 6

#This option reduces global dispenser fire rate
# -- 'time' is in milliseconds
dispenser-reducer:
  enabled: false
  time: 100

#This option reduces the explosions of mass amounts of tnt, and reduces tnt lag
# -- 'check-radius' is the radius clearlag will check for primed TNT
# -- 'max-primed' is the max primed TNT within the radius allowed before clearlag begins to remove
tnt-reducer:
  enabled: true
  check-radius: 5
  max-primed: 3

#This option reduces fire spread rate
# -- 'time' is in milliseconds
firespread-reducer:
  enabled: false
  time: 2000

#How many entities should one chunk be allowed to hold?
# -- 'entities' lists all the entities that will be counted
#     and possibly removed.
chunk-entity-limiter:
  enabled: false
  limit: 10
  entities:
    - Squid
    - Zombie
    - Skeleton
    - Creeper
    - Chicken
    - Pig
    - Sheep
    - Cow
    - Horse
  # - Pig liveTime=100 <- This mob will be REMOVED if it's been alive for 100 ticks (5 seconds)

#A per-entity chunk limiter. Very useful to limiting useless mobs like squid, but not zombies
# -- 'entity-limits' lists all the entities, their filters, and 'limit' to specify their limit
#    to be removed/culled
per-entity-chunk-entity-limiter:
  enabled: false
  entity-limits:
    - Squid limit:1
    - Zombie limit:2
    - Skeleton limit:2
    - Creeper limit:2
    - Chicken limit:3
    - Pig limit:5
    - Sheep limit:5
    - Cow limit:5
    - Horse limit:3 !hasName
    - Villager limit:4
    - Arrow limit:4 inGround
    - Rabbit limit:2
    - PufferFish limit:2
    - Silverfish limit:2
    - TROPICAL_FISH limit:2
    - COD limit:2
    - DOLPHIN limit:2
    - Bat limit:1

#How many mobs should be allowed to spawn globally
# -- 'interval' is the check interval check the current spawn amounts
spawn-limiter:
  enabled: false
  interval: 15
  mobs: 300
  animals: 300

#Meters your TPS, if it goes to low, run the commands you wrote below!
# -- 'interval' is how often tps-meter will check the TPS
# -- 'tps-trigger' is at what TPS the commands will be ran at
# -- 'tps-recover' is at what TPS should the TPS be considered stable after 'tps-trigger' is executed
# -- 'commands' lists what commands will be executed when tps-tigger is reached
# -- 'recover-commands' lists what commands will be executed when tps-recover is reached
# -- 'trigger-broadcast-message' specifies which message should be broadcasted when tps-trigger runs
# -- 'recover-broadcast-message' specifies which message should be broadcasted when TPS recovers
# -- 'broadcast-enabled' defines whether or not tps-meter should broadcast
tps-meter:
  enabled: true
  trigger-broadcast-message: '&6[ClearLag] &cThe server is overloaded, executing lag-perventing measures'
  recover-broadcast-message: '&6[ClearLag] &aThe server is no longer overloaded!'
  broadcast-enabled: true
  interval: 15
  tps-trigger: 14.0
  tps-recover: 18.0
  commands:
#    - 'lagg killmobs'
    - 'lagg clear'
    - 'lagg halt on'
    - 'su disableplugin dynmap'
  recover-commands:
    - 'lagg halt off'
    - 'su enableplugin dynmap'

#This is /lagg killmobs, put what you DON'T want removed!
# -- 'remove-named', when FALSE entities with custom names will NOT be removed
# -- 'mob-filter' lists which mobs will be IGNORED during /lagg killmobs
kill-mobs:
   remove-named: false
   mob-filter:
   - Villager
   - Wolf
#  - Pig !name="Test" <- This entity will filtered if the name does NOT equal "Test"
#  - Zombie hasName <- This entity will be filtered if it HAS a name
   - ARMOR_STAND
   - Horse

#This nerfs mob-spawners (Natural and player-made)
#-------------------------------------------------
#This goes by chunks rather then spawners. This is to prevent
#a large buildup of mob-spawners within a small region to "bypass"
#your set limit. It also allows for keys to be generated more easily
#increasing the performance
# -- 'max-spawn' is the maximum mobs allowed to spawn by a mob-spawner
# -- 'remove-mobs-on-chunk-unload' is whether or not Clearlag should remove
# --  the mobs spawned by the mobspawner upon chunk unload (Highly Recommended)
mobspawner:
  enabled: true
  max-spawn: 4
  remove-mobs-on-chunk-unload: true

#Dont use if you have CB++ or Spigot!
item-merger:
  enabled: false
  radius: 6

#Auto-removal options
# -- warnings works like this; time = the time warning should be given, msg = warning message at that time
# -- NOTE: The below 'remove' section applies to this remover!
# -- NOTE: Putting the interval to low will cause issues!
# -- NOTE: To disable "warnings", set it to "warnings: []"
# -- NOTE: bukkit.broadcast.user permission will allow users to see broadcasts (If not enabled by default)
#
#        !==[ All string values MUST be inside '']==!
#
# -- 'remove-entities' lists what entities should be REMOVED on removal
# -- 'warnings' list warnings to be given out at specified times
# -- 'item-filter' What ground-items should NOT be removed during removal
# -- 'remove-entities' What entities SHOULD be removed during removal
auto-removal:
  enabled: false
  broadcast-message: '&6[ClearLag] &aRemoved +RemoveAmount Entities!'
  broadcast-removal: true
  autoremoval-interval: 460
  world-filter:
  # - this_world <-This world will be ignored during removal!
  boat: false
  falling-block: true
  experience-orb: true
  painting: false
  projectile: false
  item: true
  itemframe: false
  minecart: false
  primed-tnt: true
  item-filter:
  # - Stone <-This item-id will be ignored during removal!
  # - Grass
  remove-entities:
    - Arrow onGround
    - Snowball
    - Egg
    - Fireball
    - Boat !isMounted
    - Minecart !isMounted
    - MINECART_TNT
  # - cow <- This mob-type will be REMOVED during removal!
  # - MINECART_MOB_SPAWNER
  # - Pig liveTime=100 <- This mob will be REMOVED if it's been alive for 100 ticks (5 seconds)
  # - Minecart !isMounted <- This entity will be REMOVED if it's NOT mounted
  # - Wolf !hasName <- This entity will be REMOVED if it doesn't have a name
  warnings:
        - 'time:400 msg:&4[ClearLag] &cWarning Ground items will be removed in &7+remaining &cseconds!'
        - 'time:440 msg:&4[ClearLag] &cWarning Ground items will be removed in &7+remaining &cseconds!'

#What should be removed during /lagg clear, nearly the same thing as auto-removal
command-remove:
  world-filter:
  # - this_world <-This world will be ignored during removal!
  broadcast-removal: false
  boat: false
  falling-block: false
  experience-orb: true
  painting: false
  projectile: true
  item: false
  itemframe: false
  minecart: false
  primed-tnt: true
  item-filter:
  # - Stone <-This item-id will be ignored during removal!
  # - Grass
  remove-entities:
  # - cow <- This mob-type will be REMOVED during removal!
  # - MINECART_MOB_SPAWNER
  # - Pig liveTime=100 <- This mob will be REMOVED if it's been alive for 100 ticks (5 seconds)
  # - Minecart !isMounted <- This entity will be REMOVED if it's NOT mounted
  # - Wolf !hasName <- This entity will be REMOVED if it doesn't have a name

#Very very old, but still works. Just specifies a global entity limit. I'd recommend 'custom-trigger-removal' instead
# -- 'max' max entities allowed before the entity removal is activated
limit:
  enabled: false
  max: 1000
  check-interval: 60
  broadcast-message: '&6[ClearLag] &aLimit reached, removed +RemoveAmount Entities!'
  world-filter:
  # - this_world <-This world will be ignored during removal!
  broadcast-removal: true
  boat: true
  falling-block: true
  experience-orb: true
  painting: false
  projectile: true
  item: true
  itemframe: false
  minecart: true
  primed-tnt: true
  item-filter:
  # - Stone
  # - Grass <-This item-id will be ignored during removal!


# Create your own custom removal stuff!
# -- warnings works like this; time = the time warning should be given, msg = warning message at that time
# -- NOTE: The below 'remove' section applies to this remover!
# \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/
# >    READ FOR HELP -> https://dev.bukkit.org/projects/clearlagg/pages/config-setup <- READ FOR HELP    <
# /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\
custom-trigger-removal:
  enabled: false
  triggers:
    trigger1:
      trigger-type: tps-trigger
      run-interval: 5
      tps-trigger: 14.0
      tps-recover: 19.0
      jobs:
        command-executor:
          commands:
            - 'lagg killmobs'
            - 'lagg clear'
            - 'lagg halt'
          recover-commands:
            - 'lagg halt'
        entity-clearer:
          execute-job-time: 120
          warnings:
            - 'time:60 msg:&4[ClearLag] &cEntities/drops will be purged in &7+remaining &cseconds!'
            - 'time:100 msg:&4[ClearLag] &cEntities/drops will be purged in &720 &cseconds!'
            - 'time:110 msg:&4[ClearLag] &cEntities/drops will be purged in &710 &cseconds!'
          world-filter:
          # - world <-This world will be ignored during removal
          removeEntities:
            - item
            - zombie !hasName
            - skeleton !hasName
            - pig !hasName
            - cow !hasName
    trigger2:
      trigger-type: entity-limit-trigger
      run-interval: 25
      limit: 200
      world-filter:
        # - world <-This world will be ignored during checking
      entity-limits:
        - zombie
        - skeleton
        - enderman
      jobs:
        entity-clearer:
          world-filter:
          # - world <-This world will be ignored during removal
          remove-entities:
            - zombie
            - skeleton
            - enderman
```

#### EssentialsX (config.yml)
```yaml
############################################################
# +------------------------------------------------------+ #
# |                       Notes                          | #
# +------------------------------------------------------+ #
############################################################

# This is the config file for EssentialsX.
# This config was generated for version 2.19.0-dev+24-f320705.

# If you want to use special characters in this document, such as accented letters, you MUST save the file as UTF-8, not ANSI.
# If you receive an error when Essentials loads, ensure that:
#   - No tabs are present: YAML only allows spaces
#   - Indents are correct: YAML hierarchy is based entirely on indentation
#   - You have "escaped" all apostrophes in your text: If you want to write "don't", for example, write "don''t" instead (note the doubled apostrophe)
#   - Text with symbols is enclosed in single or double quotation marks

# If you need help, you can join the EssentialsX community: https://essentialsx.net/community.html

############################################################
# +------------------------------------------------------+ #
# |                 Essentials (Global)                  | #
# +------------------------------------------------------+ #
############################################################

# A color code between 0-9 or a-f. Set to 'none' to disable.
# In 1.16+ you can use hex color codes here as well. (For example, #613e1d is brown).
ops-name-color: 'd'

# The character(s) to prefix all nicknames, so that you know they are not true usernames.
nickname-prefix: ''

# The maximum length allowed in nicknames. The nickname prefix is included in this.
max-nick-length: 15

# A list of phrases that cannot be used in nicknames. You can include regular expressions here.
# Users with essentials.nick.blacklist.bypass will be able to bypass this filter.
nick-blacklist:
#- Notch
#- '^Dinnerbone'

# When this option is enabled, nickname length checking will exclude color codes in player names.
# ie: "&6Notch" has 7 characters (2 are part of a color code), a length of 5 is used when this option is set to true
ignore-colors-in-max-nick-length: false

# When this option is enabled, display names for hidden users will not be shown. This prevents players from being
# able to see that they are online while vanished.
hide-displayname-in-vanish: true

# Disable this if you have any other plugin, that modifies the displayname of a user.
change-displayname: true

# When this option is enabled, the (tab) player list will be updated with the displayname.
# The value of change-displayname (above) has to be true.
change-playerlist: true

# When EssentialsChat.jar isn't used, force essentials to add the prefix and suffix from permission plugins to displayname.
# This setting is ignored if EssentialsChat.jar is used, and defaults to 'true'.
# The value of change-displayname (above) has to be true.
# Do not edit this setting unless you know what you are doing!
#add-prefix-suffix: true

# When this option is enabled, player prefixes will be shown in the playerlist.
# This feature only works for Minecraft version 1.8 and higher.
# This value of change-playerlist has to be true
add-prefix-in-playerlist: true

# When this option is enabled, player suffixes will be shown in the playerlist.
# This feature only works for Minecraft version 1.8 and higher. 
# This value of change-playerlist has to be true
add-suffix-in-playerlist: true

# If the teleport destination is unsafe, should players be teleported to the nearest safe location?
# If this is set to true, Essentials will attempt to teleport players close to the intended destination.
# If this is set to false, attempted teleports to unsafe locations will be cancelled with a warning.
teleport-safety: true

# This forcefully disables teleport safety checks without a warning if attempting to teleport to unsafe locations.
# teleport-safety and this option need to be set to true to force teleportation to dangerous locations.
force-disable-teleport-safety: false

# If a player is teleporting to an unsafe location in creative, adventure, or god mode; they will not be teleported to a
# safe location. If you'd like players to be teleported to a safe location all of the time, set this option to true.
force-safe-teleport-location: false

# If a player has any passengers, the teleport will fail. Should their passengers be dismounted before they are teleported?
# If this is set to true, Essentials will dismount the player's passengers before teleporting.
# If this is set to false, attempted teleports will be canceled with a warning.
teleport-passenger-dismount: true

# The delay, in seconds, required between /home, /tp, etc.
teleport-cooldown: 0

# The delay, in seconds, before a user actually teleports. If the user moves or gets attacked in this timeframe, the teleport is cancelled.
teleport-delay: 0

# The delay, in seconds, a player can't be attacked by other players after they have been teleported by a command.
# This will also prevent the player attacking other players.
teleport-invulnerability: 4

# Whether to make all teleportations go to the center of the block; where the x and z coordinates decimal become .5
teleport-to-center: true

# The delay, in seconds, required between /heal or /feed attempts.
heal-cooldown: 60

# Do you want to remove potion effects when healing a player?
remove-effects-on-heal: true

# Near Radius
# The default radius with /near
# Used to use chat radius but we are going to make it separate.
near-radius: 200

# What to prevent from /item and /give.
# e.g item-spawn-blacklist: 10,11,46
item-spawn-blacklist:

# Set this to true if you want permission based item spawn rules.
# Note: The blacklist above will be ignored then.
# Example permissions (these go in your permissions manager):
#  - essentials.itemspawn.item-all
#  - essentials.itemspawn.item-[itemname]
#  - essentials.itemspawn.item-[itemid]
#  - essentials.give.item-all
#  - essentials.give.item-[itemname]
#  - essentials.give.item-[itemid]
#  - essentials.unlimited.item-all
#  - essentials.unlimited.item-[itemname]
#  - essentials.unlimited.item-[itemid]
#  - essentials.unlimited.item-bucket # Unlimited liquid placing
#
# For more information, visit http://wiki.ess3.net/wiki/Command_Reference/ICheat#Item.2FGive
permission-based-item-spawn: false

# Mob limit on the /spawnmob command per execution.
spawnmob-limit: 10

# Shall we notify users when using /lightning?
warn-on-smite: true

# Shall we drop items instead of adding to inventory if the target inventory is full?
drop-items-if-full: false

# Essentials Mail Notification
# Should we notify players if they have no new mail?
notify-no-new-mail: true

# Specifies the duration (in seconds) between each time a player is notified of mail they have.
# Useful for servers with a lot of mail traffic.
notify-player-of-mail-cooldown: 60

# The motd and rules are now configured in the files motd.txt and rules.txt.

# When a command conflicts with another plugin, by default, Essentials will try to force the OTHER plugin to take priority.
# Commands in this list, will tell Essentials to 'not give up' the command to other plugins.
# In this state, which plugin 'wins' appears to be almost random.
#
# If you have two plugin with the same command and you wish to force Essentials to take over, you need an alias.
# To force essentials to take 'god' alias 'god' to 'egod'.
# See http://wiki.bukkit.org/Commands.yml#aliases for more information.

overridden-commands:
#  - god
#  - info

# Disabling commands here will prevent Essentials handling the command, this will not affect command conflicts.
# You should not have to disable commands used in other plugins, they will automatically get priority.
# See http://wiki.bukkit.org/Commands.yml#aliases to map commands to other plugins.
disabled-commands:
#  - nick
#  - clear

# These commands will be shown to players with socialSpy enabled.
# You can add commands from other plugins you may want to track or
# remove commands that are used for something you dont want to spy on.
# Set - '*' in order to listen on all possible commands.
socialspy-commands:
  - msg
  - w
  - r
  - mail
  - m
  - t
  - whisper
  - emsg
  - tell
  - er
  - reply
  - ereply
  - email
  - action
  - describe
  - eme
  - eaction
  - edescribe
  - etell
  - ewhisper
  - pm

# Whether the private and public messages from muted players should appear in the social spy.
# If so, they will be differentiated from those sent by normal players.
socialspy-listen-muted-players: true

# The following settings listen for when a player changes worlds.
# If you use another plugin to control speed and flight, you should change these to false.

# When a player changes world, should EssentialsX reset their flight?
# This will disable flight if the player does not have essentials.fly.
world-change-fly-reset: true

# When a player changes world, should we reset their speed according to their permissions?
# This resets the player's speed to the default if they don't have essentials.speed.
# If the player doesn't have essentials.speed.bypass, this resets their speed to the maximum specified above.
world-change-speed-reset: true

# Mute Commands
# These commands will be disabled when a player is muted.
# Use '*' to disable every command.
# Essentials already disabled Essentials messaging commands by default.
# It only cares about the root command, not args after that (it sees /f chat the same as /f)
mute-commands:
  - f
  - kittycannon
 # - '*'

# If you do not wish to use a permission system, you can define a list of 'player perms' below.
# This list has no effect if you are using a supported permissions system.
# If you are using an unsupported permissions system, simply delete this section.
# Whitelist the commands and permissions you wish to give players by default (everything else is op only).
# These are the permissions without the "essentials." part.
#
# To enable this feature, please set use-bukkit-permissions to false.
player-commands:
  - afk
  - afk.auto
  - back
  - back.ondeath
  - balance
  - balance.others
  - balancetop
  - build
  - chat.color
  - chat.format
  - chat.shout
  - chat.question
  - clearinventory
  - compass
  - depth
  - delhome
  - getpos
  - geoip.show
  - help
  - helpop
  - home
  - home.others
  - ignore
  - info
  - itemdb
  - kit
  - kits.tools
  - list
  - mail
  - mail.send
  - me
  - motd
  - msg
  - msg.color
  - nick
  - near
  - pay
  - ping
  - protect
  - r
  - rules
  - realname
  - seen
  - sell
  - sethome
  - setxmpp
  - signs.create.protection
  - signs.create.trade
  - signs.break.protection
  - signs.break.trade
  - signs.use.balance
  - signs.use.buy
  - signs.use.disposal
  - signs.use.enchant
  - signs.use.free
  - signs.use.gamemode
  - signs.use.heal
  - signs.use.info
  - signs.use.kit
  - signs.use.mail
  - signs.use.protection
  - signs.use.repair
  - signs.use.sell
  - signs.use.time
  - signs.use.trade
  - signs.use.warp
  - signs.use.weather
  - spawn
  - suicide
  - time
  - tpa
  - tpaccept
  - tpahere
  - tpdeny
  - warp
  - warp.list
  - world
  - worth
  - xmpp

# Use this option to force superperms-based permissions handler regardless of detected installed perms plugin.
# This is useful if you want superperms-based permissions (with wildcards) for custom permissions plugins.
# If you wish to use EssentialsX's built-in permissions using the `player-commands` section above, set this to false.
# Default is true.
use-bukkit-permissions: true

# When this option is enabled, one-time use kits (ie. delay < 0) will be
# removed from the /kit list when a player can no longer use it
skip-used-one-time-kits-from-kit-list: false

# Determines the functionality of the /createkit command.
# If this is true, /createkit will give the user a link with the kit code.
# If this is false, /createkit will add the kit to the kits.yml config file directly.
#
pastebin-createkit: false

# Essentials Sign Control
# See http://wiki.ess3.net/wiki/Sign_Tutorial for instructions on how to use these.
# To enable signs, remove # symbol. To disable all signs, comment/remove each sign.
# Essentials colored sign support will be enabled when any sign types are enabled.
# Color is not an actual sign, it's for enabling using color codes on signs, when the correct permissions are given.

enabledSigns:
  #- color
  #- balance
  #- buy
  #- sell
  #- trade
  #- free
  #- disposal
  #- warp
  #- kit
  #- mail
  #- enchant
  #- gamemode
  #- heal
  #- info
  #- spawnmob
  #- repair
  #- time
  #- weather

# How many times per second can Essentials signs be interacted with per player.
# Values should be between 1-20, 20 being virtually no lag protection.
# Lower numbers will reduce the possibility of lag, but may annoy players.
sign-use-per-second: 4

# Allow item IDs on pre-existing signs on 1.13 and above.
# You cannot use item IDs on new signs, but this will allow players to interact with signs that
# were placed before 1.13.
allow-old-id-signs: false

# List of sign names Essentials should not protect. This feature is especially useful when
# another plugin provides a sign that EssentialsX provides, but Essentials overrides.
# For example, if a plugin provides a [kit] sign, and you wish to use theirs instead of
# Essentials's, then simply add kit below and Essentials will not protect it.
#
# See https://github.com/drtshock/Essentials/pull/699 for more information.
unprotected-sign-names:
  #- kit

# Backup runs a custom batch/bash command at a specified interval.
# The server will save the world before executing the backup command, and disable
# saving during the backup to prevent world corruption or other conflicts.
# Backups can also be triggered manually with /backup.
backup:
  # Interval in minutes.
  interval: 30
  # If true, the backup task will run even if there are no players online.
  always-run: false
  # Unless you add a valid backup command or script here, this feature will be useless.
  # Use 'save-all' to simply force regular world saving without backup.
  # The example command below utilizes rdiff-backup: https://rdiff-backup.net/
  #command: 'rdiff-backup World1 backups/World1'

# Set this true to enable permission per warp.
per-warp-permission: false

# Sort output of /list command by groups.
# You can hide and merge the groups displayed in /list by defining the desired behaviour here.
# Detailed instructions and examples can be found on the wiki: http://wiki.ess3.net/wiki/List
list:
    # To merge groups, list the groups you wish to merge
    #Staff: owner admin moderator
    Admins: owner admin
    # To limit groups, set a max user limit
    #builder: 20
    # To hide groups, set the group as hidden
    #default: hidden
    # Uncomment the line below to simply list all players with no grouping
    #Players: '*'

# Displays real names in /list next to players who are using a nickname.
real-names-on-list: false

# More output to the console.
debug: false

# Set the locale for all messages.
# If you don't set this, the default locale of the server will be used.
# For example, to set language to English, set locale to en, to use the file "messages_en.properties".
# Don't forget to remove the # in front of the line.
# For more information, visit http://wiki.ess3.net/wiki/Locale
#locale: en

# Turn off god mode when people leave the server.
remove-god-on-disconnect: false

# Auto-AFK
# After this timeout in seconds, the user will be set as AFK.
# This feature requires the player to have essentials.afk.auto node.
# Set to -1 for no timeout.
auto-afk: 300

# Auto-AFK Kick
# After this timeout in seconds, the user will be kicked from the server.
# essentials.afk.kickexempt node overrides this feature.
# Set to -1 for no timeout.
auto-afk-kick: -1

# Set this to true, if you want to freeze the player, if the player is AFK.
# Other players or monsters can't push the player out of AFK mode then.
# This will also enable temporary god mode for the AFK player.
# The player has to use the command /afk to leave the AFK mode.
freeze-afk-players: false

# When the player is AFK, should he be able to pickup items?
# Enable this, when you don't want people idling in mob traps.
disable-item-pickup-while-afk: false

# This setting controls if a player is marked as active on interaction.
# When this setting is false, the player would need to manually un-AFK using the /afk command.
cancel-afk-on-interact: false

# Should we automatically remove afk status when a player moves?
# Player will be removed from AFK on chat/command regardless of this setting.
# Disable this to reduce server lag.
cancel-afk-on-move: true

# Should AFK players be ignored when other players are trying to sleep?
# When this setting is false, players won't be able to skip the night if some players are AFK.
# Users with the permission node essentials.sleepingignored will always be ignored.
sleep-ignores-afk-players: true

# Set the player's list name when they are AFK. This is none by default which specifies that Essentials 
# should not interfere with the AFK player's list name.
# You may use color codes, use {USERNAME} the player's name or {PLAYER} for the player's displayname.
afk-list-name: "&7{PLAYER}"

# When a player enters or exits AFK mode, should the AFK notification be broadcast
# to the entire server, or just to the player?
# When this setting is false, only the player will be notified upon changing their AFK state.
broadcast-afk-message: true

# You can disable the death messages of Minecraft here.
death-messages: true

# How should essentials handle players with the essentials.keepinv permission who have items with
# curse of vanishing when they die?
# You can set this to "keep" (to keep the item), "drop" (to drop the item), or "delete" (to delete the item).
# Defaults to "keep"
vanishing-items-policy: keep

# How should essentials handle players with the essentials.keepinv permission who have items with
# curse of binding when they die?
# You can set this to "keep" (to keep the item), "drop" (to drop the item), or "delete" (to delete the item).
# Defaults to "keep"
binding-items-policy: keep

# When players die, should they receive the coordinates they died at?
send-info-after-death: false

# Should players with permissions be able to join and part silently?
# You can control this with essentials.silentjoin and essentials.silentquit permissions if it is enabled.
# In addition, people with essentials.silentjoin.vanish will be vanished on join.
allow-silent-join-quit: false

# You can set custom join and quit messages here. Set this to "none" to use the default Minecraft message,
# or set this to "" to hide the message entirely.
# You may use color codes, {USERNAME} for the player's name, and {PLAYER} for the player's displayname.
custom-join-message: "none"
custom-quit-message: "none"

# You can disable join and quit messages when the player count reaches a certain limit.
# When the player count is below this number, join/quit messages will always be shown.
# Set this to -1 to always show join and quit messages regardless of player count.
hide-join-quit-messages-above: -1

# Add worlds to this list, if you want to automatically disable god mode there.
no-god-in-worlds:
#  - world_nether

# Set to true to enable per-world permissions for teleporting between worlds with essentials commands.
# This applies to /world, /back, /tp[a|o][here|all], but not warps.
# Give someone permission to teleport to a world with essentials.worlds.<worldname>
# This does not affect the /home command, there is a separate toggle below for this.
world-teleport-permissions: false

# The number of items given if the quantity parameter is left out in /item or /give.
# If this number is below 1, the maximum stack size size is given. If over-sized stacks.
# are not enabled, any number higher than the maximum stack size results in more than one stack.
default-stack-size: -1

# Over-sized stacks are stacks that ignore the normal max stack size.
# They can be obtained using /give and /item, if the player has essentials.oversizedstacks permission.
# How many items should be in an over-sized stack?
oversized-stacksize: 64

# Allow repair of enchanted weapons and armor.
# If you set this to false, you can still allow it for certain players using the permission.
# essentials.repair.enchanted
repair-enchanted: true

# Allow 'unsafe' enchantments in kits and item spawning.
# Warning: Mixing and overleveling some enchantments can cause issues with clients, servers and plugins.
unsafe-enchantments: false

#Do you want Essentials to keep track of previous location for /back in the teleport listener?
#If you set this to true any plugin that uses teleport will have the previous location registered.
register-back-in-listener: false

#Delay to wait before people can cause attack damage after logging in.
login-attack-delay: 5

#Set the max fly speed, values range from 0.1 to 1.0
max-fly-speed: 0.8

#Set the max walk speed, values range from 0.1 to 1.0
max-walk-speed: 0.8

#Set the maximum amount of mail that can be sent within a minute.
mails-per-minute: 1000

# Set the maximum time /mute can be used for in seconds.
# Set to -1 to disable, and essentials.mute.unlimited can be used to override.
max-mute-time: -1

# Set the maximum time /tempban can be used for in seconds.
# Set to -1 to disable, and essentials.tempban.unlimited can be used to override.
max-tempban-time: -1

# Changes the default /reply functionality. This can be changed on a per-player basis using /rtoggle.
# If true, /r goes to the person you messaged last, otherwise the first person that messaged you.
# If false, /r goes to the last person that messaged you.
last-message-reply-recipient: true

# If last-message-reply-recipient is enabled for a particular player,
# this specifies the duration, in seconds, that would need to elapse for the
# reply-recipient to update when receiving a message.
# Default is 180 (3 minutes)
last-message-reply-recipient-timeout: 180

# Changes the default /reply functionality.
# If true, /reply will not check if the person you're replying to has vanished.
# If false, players will not be able to /reply to players who they can no longer see due to vanish.
last-message-reply-vanished: false

# Toggles whether or not left clicking mobs with a milk bucket turns them into a baby.
milk-bucket-easter-egg: true

# Toggles whether or not the fly status message should be sent to players on join
send-fly-enable-on-join: true

# Set to true to enable per-world permissions for setting time for individual worlds with essentials commands.
# This applies to /time, /day, /eday, /night, /enight, /etime.
# Give someone permission to teleport to a world with essentials.time.world.<worldname>.
world-time-permissions: false

# Specify cooldown for both Essentials commands and external commands as well.
# All commands do not start with a Forward Slash (/). Instead of /msg, write msg
#
# Wildcards are supported. E.g.
# - '*i*': 50
# adds a 50 second cooldown to all commands that include the letter i
#
# EssentialsX supports regex by starting the command with a caret ^
# For example, to target commands starting with ban and not banip the following would be used:
#  '^ban([^ip])( .*)?': 60 # 60 seconds /ban cooldown.
# Note: If you have a command that starts with ^, then you can escape it using backslash (\). e.g. \^command: 123
command-cooldowns:
#  feed: 100 # 100 second cooldown on /feed command
#  '*': 5 # 5 Second cooldown on all commands

# Whether command cooldowns should be persistent past server shutdowns
command-cooldown-persistence: true

# Whether NPC balances should be listed in balance ranking features such as /balancetop.
# NPC balances can include features like factions from FactionsUUID plugin.
npcs-in-balance-ranking: false

# Allow bulk buying and selling signs when the player is sneaking.
# This is useful when a sign sells or buys one item at a time and the player wants to sell a bunch at once.
allow-bulk-buy-sell: true

# Allow selling of items with custom names with the /sell command.
# This may be useful to prevent players accidentally selling named items.
allow-selling-named-items: false

# Delay for the MOTD display for players on join, in milliseconds.
# This has no effect if the MOTD command or permission are disabled.
delay-motd: 0

# A list of commands that should have their complementary confirm commands enabled by default.
# This is empty by default, for the latest list of valid commands see the latest source config.yml.
default-enabled-confirm-commands:
#- pay
#- clearinventory

# Whether or not to teleport a player back to their previous position after they have been freed from jail.
teleport-back-when-freed-from-jail: true

# Set the timeout, in seconds for players to accept a tpa before the request is cancelled.
# Set to 0 for no timeout.
tpa-accept-cancellation: 120

# Allow players to set hats by clicking on their helmet slot.
allow-direct-hat: true

# Allow in-game players to specify a world when running /broadcastworld.
# If false, running /broadcastworld in-game will always send a message to the player's current world.
# This doesn't affect running the command from the console, where a world is always required.
allow-world-in-broadcastworld: true

# Consider water blocks as "safe," therefore allowing players to teleport
# using commands such as /home or /spawn to a location that is occupied
# by water blocks
is-water-safe: false

# Should the usermap try to sanitise usernames before saving them?
# You should only change this to false if you use Minecraft China.
safe-usermap-names: true

# Should Essentials output logs when a command block executes a command?
# Example: CommandBlock at <x>,<y>,<z> issued server command: /<command>
log-command-block-commands: true

# Set the maximum speed for projectiles spawned with /fireball.
max-projectile-speed: 8

############################################################
# +------------------------------------------------------+ #
# |                        Homes                         | #
# +------------------------------------------------------+ #
############################################################

# Allows people to set their bed during the day.
# This setting has no effect in Minecraft 1.15+, as Minecraft will always allow the player to set their bed location during the day.
update-bed-at-daytime: true

# Set to true to enable per-world permissions for using homes to teleport between worlds.
# This applies to the /home command only.
# Give someone permission to teleport to a world with essentials.worlds.<worldname>
world-home-permissions: false

# Allow players to have multiple homes.
# Players need essentials.sethome.multiple before they can have more than 1 home.
# You can set the default number of multiple homes using the 'default' rank below.
# To remove the home limit entirely, give people 'essentials.sethome.multiple.unlimited'.
# To grant different home amounts to different people, you need to define a 'home-rank' below.
# Create the 'home-rank' below, and give the matching permission: essentials.sethome.multiple.<home-rank>
# For more information, visit http://wiki.ess3.net/wiki/Multihome
sethome-multiple:
  default: 3
  vip: 5
  staff: 10

# In this example someone with 'essentials.sethome.multiple' and 'essentials.sethome.multiple.vip' will have 5 homes.
# Remember, they MUST have both permission nodes in order to be able to set multiple homes.

# Controls whether players need the permission "essentials.home.compass" in order to point
# the player's compass at their first home.
#
# Leaving this as false will retain Essentials' original behaviour, which is to always
# change the compass' direction to point towards their first home.
compass-towards-home-perm: false

# If no home is set, would you like to send the player to spawn?
# If set to false, players will not be teleported when they run /home without setting a home first.
spawn-if-no-home: true

# Should players be asked to provide confirmation for homes which they attempt to overwrite?
confirm-home-overwrite: false

############################################################
# +------------------------------------------------------+ #
# |                       Economy                        | #
# +------------------------------------------------------+ #
############################################################

# For more information, visit http://wiki.ess3.net/wiki/Essentials_Economy

# You can control the values of items that are sold to the server by using the /setworth command.

# Defines the balance with which new players begin. Defaults to 0.
starting-balance: 0

# Defines the cost to use the given commands PER USE.
# Some commands like /repair have sub-costs, check the wiki for more information.
command-costs:
  # /example costs $1000 PER USE
  #example: 1000
  # /kit tools costs $1500 PER USE
  #kit-tools: 1500

# Set this to a currency symbol you want to use.
# Remember, if you want to use special characters in this document, 
# such as accented letters, you MUST save the file as UTF-8, not ANSI.
currency-symbol: '$'

# Enable this to make the currency symbol appear at the end of the amount rather than at the start.
# For example, the euro symbol typically appears after the current amount.
currency-symbol-suffix: false

# Set the maximum amount of money a player can have.
# The amount is always limited to 10 trillion because of the limitations of a java double.
max-money: 10000000000000

# Set the minimum amount of money a player can have (must be above the negative of max-money).
# Setting this to 0, will disable overdrafts/loans completely.  Users need 'essentials.eco.loan' perm to go below 0.
min-money: -10000

# Enable this to log all interactions with trade/buy/sell signs and sell command.
economy-log-enabled: false

# Enable this to also log all transactions from other plugins through Vault.
# This can cause the economy log to fill up quickly so should only be enabled for testing purposes!
economy-log-update-enabled: false

# Minimum acceptable amount to be used in /pay.
minimum-pay-amount: 0.001

# Enable this to block users who try to /pay another user which ignore them.
pay-excludes-ignore-list: false

# The format of currency, excluding symbols. See currency-symbol-format-locale for symbol configuration.
#
# "#,##0.00" is how the majority of countries display currency.
#currency-format: "#,##0.00"

# Format currency symbols. Some locales use , and . interchangeably.
# Some formats do not display properly in-game due to faulty Minecraft font rendering.
#
# For 1.234,50 use de-DE
# For 1,234.50 use en-US
# For 1'234,50 use fr-ch
#currency-symbol-format-locale: en-US

############################################################
# +------------------------------------------------------+ #
# |                         Help                         | #
# +------------------------------------------------------+ #
############################################################

# Show other plugins commands in help.
non-ess-in-help: true

# Hide plugins which do not give a permission.
# You can override a true value here for a single plugin by adding a permission to a user/group.
# The individual permission is: essentials.help.<plugin>, anyone with essentials.* or '*' will see all help regardless.
# You can use negative permissions to remove access to just a single plugins help if the following is enabled.
hide-permissionless-help: true

############################################################
# +------------------------------------------------------+ #
# |                   EssentialsX Chat                   | #
# +------------------------------------------------------+ #
############################################################

# You need to install EssentialsX Chat for this section to work.
# See https://essentialsx.net/wiki/Module-Breakdown.html for more information.

chat:

  # If EssentialsX Chat is installed, this will define how far a player's voice travels, in blocks. Set to 0 to make all chat global.
  # Note that users with the "essentials.chat.spy" permission will hear everything, regardless of this setting.
  # Users with essentials.chat.shout can override this by prefixing their message with an exclamation mark (!)
  # Users with essentials.chat.question can override this by prefixing their message with a question mark (?)
  # You can add command costs for shout/question by adding chat-shout and chat-question to the command costs section.
  radius: 0

  # Chat formatting can be done in two ways, you can either define a standard format for all chat.
  # Or you can give a group specific chat format, to give some extra variation.
  # For more information of chat formatting, check out the wiki: http://wiki.ess3.net/wiki/Chat_Formatting
  # Note: Using the {PREFIX} and {SUFFIX} placeholders along with {DISPLAYNAME} may cause double prefixes/suffixes to be shown in chat unless add-prefix-suffix is uncommented and set to false.

  format: '<{DISPLAYNAME}> {MESSAGE}'
  #format: '&7[{GROUP}]&r {DISPLAYNAME}&7:&r {MESSAGE}'
  #format: '&7{PREFIX}&r {DISPLAYNAME}&r &7{SUFFIX}&r: {MESSAGE}'

  group-formats:
  #  default: '{WORLDNAME} {DISPLAYNAME}&7:&r {MESSAGE}'
  #  admins: '{WORLDNAME} &c[{GROUP}]&r {DISPLAYNAME}&7:&c {MESSAGE}'

  # If you are using group formats make sure to remove the '#' to allow the setting to be read.
  # Note: Group names are case-sensitive so you must match them up with your permission plugin.
  
  # You can use permissions to control whether players can use formatting codes in their chat messages.
  # See https://essentialsx.net/wiki/Color-Permissions.html for more information.

############################################################
# +------------------------------------------------------+ #
# |                 EssentialsX Protect                  | #
# +------------------------------------------------------+ #
############################################################

# You need to install EssentialsX Protect for this section to work.
# See https://essentialsx.net/wiki/Module-Breakdown.html for more information.

protect:

  # General physics/behavior modifications. Set these to true to disable behaviours.
  prevent:
    lava-flow: false
    water-flow: false
    water-bucket-flow: false
    fire-spread: true
    lava-fire-spread: true
    lava-itemdamage: false
    flint-fire: false
    lightning-fire-spread: true
    portal-creation: false
    tnt-explosion: false
    tnt-playerdamage: false
    tnt-itemdamage: false
    tnt-minecart-explosion: false
    tnt-minecart-playerdamage: false
    tnt-minecart-itemdamage: false
    fireball-explosion: false
    fireball-fire: false
    fireball-playerdamage: false
    fireball-itemdamage: false
    witherskull-explosion: false
    witherskull-playerdamage: false
    witherskull-itemdamage: false
    wither-spawnexplosion: false
    wither-blockreplace: false
    creeper-explosion: false
    creeper-playerdamage: false
    creeper-itemdamage: false
    creeper-blockdamage: false
    ender-crystal-explosion: false
    enderdragon-blockdamage: true
    enderman-pickup: false
    villager-death: false
    bed-explosion: false
    respawn-anchor-explosion: false
    # Monsters won't follow players.
    # permission essentials.protect.entitytarget.bypass disables this.
    entitytarget: false
    # Prevents zombies from breaking down doors
    zombie-door-break: false
    # Prevents Ravagers from stealing blocks
    ravager-thief: false
    # Prevents sheep from turning grass to dirt
    sheep-eat-grass: false
    # Prevent certain transformations.
    transformation:
      # Prevent creepers becoming charged when struck by lightning.
      charged-creeper: false
      # Prevent villagers becoming zombie villagers.
      zombie-villager: false
      # Prevent zombie villagers being cured.
      villager: false
      # Prevent villagers becoming witches when struck by lightning.
      witch: false
      # Prevent pigs becoming zombie pigmen when struck by lightning.
      zombie-pigman: false
      # Prevent zombies turning into drowneds, and husks turning into zombies.
      drowned: false
      # Prevent mooshrooms changing colour when struck by lightning.
      mooshroom: false
    # Prevent the spawning of creatures. If a creature is missing, you can add it following the format below.
    spawn:
      creeper: false
      skeleton: false
      spider: false
      giant: false
      zombie: false
      slime: false
      ghast: false
      pig_zombie: false
      enderman: false
      cave_spider: false
      silverfish: false
      blaze: false
      magma_cube: false
      ender_dragon: false
      pig: false
      sheep: false
      cow: false
      chicken: false
      squid: false
      wolf: false
      mushroom_cow: false
      snowman: false
      ocelot: false
      iron_golem: false
      villager: false
      wither: false
      bat: false
      witch: false
      horse: false
      phantom: false

  # Maximum height the creeper should explode. -1 allows them to explode everywhere.
  # Set prevent.creeper-explosion to true, if you want to disable creeper explosions.
  creeper:
    max-height: -1

  # Disable various default physics and behaviors.
  disable:
    # Should fall damage be disabled?
    fall: false

    # Users with the essentials.protect.pvp permission will still be able to attack each other if this is set to true.
    # They will be unable to attack users without that same permission node.
    pvp: false

    # Should drowning damage be disabled?
    # (Split into two behaviors; generally, you want both set to the same value.)
    drown: false
    suffocate: false

    # Should damage via lava be disabled?  Items that fall into lava will still burn to a crisp. ;)
    lavadmg: false

    # Should arrow damage be disabled?
    projectiles: false

    # This will disable damage from touching cacti.
    contactdmg: false

    # Burn, baby, burn!  Should fire damage be disabled?
    firedmg: false

    # Should the damage after hit by a lightning be disabled?
    lightning: false

    # Should Wither damage be disabled?
    wither: false

    # Disable weather options?
    weather:
      storm: false
      thunder: false
      lightning: false

############################################################
# +------------------------------------------------------+ #
# |                EssentialsX AntiBuild                 | #
# +------------------------------------------------------+ #
############################################################

  # You need to install EssentialsX AntiBuild for this section to work.
  # See https://essentialsx.net/wiki/Module-Breakdown.html and http://wiki.ess3.net/wiki/AntiBuild for more information.

    # Should people without the essentials.build permission be allowed to build?
    # Set true to disable building for those people.
    # Setting to false means EssentialsAntiBuild will never prevent you from building.
    build: true

    # Should people without the essentials.build permission be allowed to use items?
    # Set true to disable using for those people.
    # Setting to false means EssentialsAntiBuild will never prevent you from using items.
    use: true

    # Should we warn people when they are not allowed to build?
    warn-on-build-disallow: true

  # For which block types would you like to be alerted?
  # You can find a list of items at https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html.
  alert:
    on-placement: LAVA,TNT,LAVA_BUCKET
    on-use: LAVA_BUCKET
    on-break:

  blacklist:

    # Which blocks should people be prevented from placing?
    placement: LAVA,TNT,LAVA_BUCKET

    # Which items should people be prevented from using?
    usage: LAVA_BUCKET

    # Which blocks should people be prevented from breaking?
    break:

    # Which blocks should not be moved by pistons?
    piston:

    # Which blocks should not be dispensed by dispensers
    dispenser:

############################################################
# +------------------------------------------------------+ #
# |            EssentialsX Spawn + New Players           | #
# +------------------------------------------------------+ #
############################################################

# You need to install EssentialsX Spawn for this section to work.
# See https://essentialsx.net/wiki/Module-Breakdown.html for more information.

newbies:
  # Should we announce to the server when someone logs in for the first time?
  # If so, use this format, replacing {DISPLAYNAME} with the player name.
  # If not, set to ''
  #announce-format: ''
  announce-format: '&dWelcome {DISPLAYNAME}&d to the server!'

  # When we spawn for the first time, which spawnpoint do we use?
  # Set to "none" if you want to use the spawn point of the world.
  spawnpoint: newbies

  # Do we want to give users anything on first join? Set to '' to disable
  # This kit will be given regardless of cost and permissions, and will not trigger the kit delay.
  #kit: ''
  kit: tools

# What priority should we use for handling respawns?
# Set this to none, if you want vanilla respawning behaviour.
# Set this to lowest, if you want Multiverse to handle the respawning.
# Set this to high, if you want EssentialsSpawn to handle the respawning.
# Set this to highest, if you want to force EssentialsSpawn to handle the respawning.
respawn-listener-priority: high

# What priority should we use for handling spawning on joining the server?
# See respawn-listener-priority for possible values.
# Note: changing this may impact or break spawn-on-join functionality.
spawn-join-listener-priority: high

# When users die, should they respawn at their first home or bed, instead of the spawnpoint?
respawn-at-home: false

# When users die, should EssentialsSpawn respect users' respawn anchors?
respawn-at-anchor: false

# Teleport all joining players to the spawnpoint
spawn-on-join: false
# The following value of `guests` states that all players in group `guests` will be teleported to spawn when joining.
#spawn-on-join: guests
# The following list value states that all players in group `guests` and `admin` are to be teleported to spawn when joining. 
#spawn-on-join:
#- guests
#- admin

# End of file <-- No seriously, you're done with configuration.
```

#### Geyser-Spigot (config.yml)
```yaml
# --------------------------------
# Geyser Configuration File
#
# A bridge between Minecraft: Bedrock Edition and Minecraft: Java Edition.
#
# GitHub: https://github.com/GeyserMC/Geyser
# Discord: https://discord.geysermc.org/
# --------------------------------

bedrock:
  # The IP address that will listen for connections.
  # There is no reason to change this unless you want to limit what IPs can connect to your server.
  address: 0.0.0.0
  # The port that will listen for connections
  port: 19132
  # Some hosting services change your Java port everytime you start the server and require the same port to be used for Bedrock.
  # This option makes the Bedrock port the same as the Java port every time you start the server.
  # This option is for the plugin version only.
  clone-remote-port: true
  # The MOTD that will be broadcasted to Minecraft: Bedrock Edition clients. This is irrelevant if "passthrough-motd" is set to true
  motd1: "GeyserMC"
  motd2: "Another GeyserMC forced host."
  # The Server Name that will be sent to Minecraft: Bedrock Edition clients. This is visible in both the pause menu and the settings menu.
  server-name: "Geyser"
remote:
  # The IP address of the remote (Java Edition) server
  # If it is "auto", for standalone version the remote address will be set to 127.0.0.1,
  # for plugin versions, Geyser will attempt to find the best address to connect to.
  address: auto
  # The port of the remote (Java Edition) server
  # For plugin versions, if address has been set to "auto", the port will also follow the server's listening port.
  port: 25565
  # Authentication type. Can be offline, online, or floodgate (see https://github.com/GeyserMC/Geyser/wiki/Floodgate).
  auth-type: floodgate
  # Whether to enable PROXY protocol or not while connecting to the server.
  # This is useful only when:
  # 1) Your server supports PROXY protocol (it probably doesn't)
  # 2) You run Velocity or BungeeCord with respective option enabled.
  use-proxy-protocol: false

# Floodgate uses encryption to ensure use from authorised sources.
# This should point to the public key generated by Floodgate (Bungee or CraftBukkit)
# You can ignore this when not using Floodgate.
floodgate-key-file: public-key.pem

# The Xbox/Minecraft Bedrock username is the key for the Java server auth-info.
# This allows automatic configuration/login to the remote Java server.
# If you are brave enough to put your Mojang account info into a config file.
# Uncomment the lines below to enable this feature.
#userAuths:
#  BedrockAccountUsername: # Your Minecraft: Bedrock Edition username
#    email: javaccountemail@example.com # Your Minecraft: Java Edition email
#    password: javaccountpassword123 # Your Minecraft: Java Edition password
#
#  bluerkelp2: 
#    email: not_really_my_email_address_mr_minecrafter53267@gmail.com 
#    password: "this isn't really my password"

# Bedrock clients can freeze when opening up the command prompt for the first time if given a lot of commands.
# Disabling this will prevent command suggestions from being sent and solve freezing for Bedrock clients.
command-suggestions: true

# The following three options enable "ping passthrough" - the MOTD, player count and/or protocol name gets retrieved from the Java server.
# Relay the MOTD from the remote server to Bedrock players.
passthrough-motd: true
# Relay the protocol name (e.g. BungeeCord [X.X], Paper 1.X) - only really useful when using a custom protocol name!
# This will also show up on sites like MCSrvStatus. <mcsrvstat.us>
passthrough-protocol-name: true
# Relay the player count and max players from the remote server to Bedrock players.
passthrough-player-counts: true
# Enable LEGACY ping passthrough. There is no need to enable this unless your MOTD or player count does not appear properly.
# This option does nothing on standalone.
legacy-ping-passthrough: false
# How often to ping the remote server, in seconds. Only relevant for standalone or legacy ping passthrough.
# Increase if you are getting BrokenPipe errors.
ping-passthrough-interval: 3

# Maximum amount of players that can connect
max-players: 100

# If debug messages should be sent through console
debug-mode: false

# Thread pool size
general-thread-pool: 32

# Allow third party capes to be visible. Currently allowing:
# OptiFine capes, LabyMod capes, 5Zig capes and MinecraftCapes
allow-third-party-capes: true

# Allow third party deadmau5 ears to be visible. Currently allowing:
# MinecraftCapes
allow-third-party-ears: false

# Allow a fake cooldown indicator to be sent. Bedrock players do not see a cooldown as they still use 1.8 combat
show-cooldown: true

# Controls if coordinates are shown to players.
show-coordinates: true

# The default locale if we dont have the one the client requested. Uncomment to not use the default system language.
# default-locale: en_us

# Configures if chunk caching should be enabled or not. This keeps an individual
# record of each block the client loads in. This feature does allow for a few things
# such as more accurate movement that causes less problems with anticheat (meaning
# you're less likely to be banned) and allows block break animations to show up in
# creative mode (and other features). Although this increases RAM usage, it likely
# won't have much of an effect for the vast majority of people. However, if you're
# running out of RAM or are in a RAM-sensitive environment, you may want to disable
# this. When using the Spigot version of Geyser, support for features or
# implementations this allows is automatically enabled without the additional caching
# as Geyser has direct access to the server itself.
cache-chunks: false

# Specify how many days images will be cached to disk to save downloading them from the internet.
# A value of 0 is disabled. (Default: 0)
cache-images: 0

# Allows custom skulls to be displayed. Keeping them enabled may cause a performance decrease on older/weaker devices.
allow-custom-skulls: true

# Bedrock prevents building and displaying blocks above Y127 in the Nether -
# enabling this config option works around that by changing the Nether dimension ID
# to the End ID. The main downside to this is that the sky will resemble that of
# the end sky in the nether, but ultimately it's the only way for this feature to work.
above-bedrock-nether-building: true

# Force clients to load all resource packs if there are any.
# If set to false, it allows the user to connect to the server even if they don't
# want to download the resource packs.
force-resource-packs: true

# Allows Xbox achievements to be unlocked.
# THIS DISABLES ALL COMMANDS FROM SUCCESSFULLY RUNNING FOR BEDROCK IN-GAME, as otherwise Bedrock thinks you are cheating.
xbox-achievements-enabled: false

# bStats is a stat tracker that is entirely anonymous and tracks only basic information
# about Geyser, such as how many people are online, how many servers are using Geyser,
# what OS is being used, etc. You can learn more about bStats here: https://bstats.org/.
# https://bstats.org/plugin/server-implementation/GeyserMC
metrics:
  # If metrics should be enabled
  enabled: true
  # UUID of server, don't change!
  uuid: e4aca9cc-c57d-4daf-b490-2ddbab3c8e2c

# ADVANCED OPTIONS - DO NOT TOUCH UNLESS YOU KNOW WHAT YOU ARE DOING!

# Geyser updates the Scoreboard after every Scoreboard packet, but when Geyser tries to handle
# a lot of scoreboard packets per second can cause serious lag.
# This option allows you to specify after how many Scoreboard packets per seconds
# the Scoreboard updates will be limited to four updates per second.
scoreboard-packet-threshold: 20

# Allow connections from ProxyPass and Waterdog.
# See https://www.spigotmc.org/wiki/firewall-guide/ for assistance - use UDP instead of TCP.
enable-proxy-connections: false

# The internet supports a maximum MTU of 1492 but could cause issues with packet fragmentation.
# 1400 is the default.
# mtu: 1400

# Whether to use direct server methods to retrieve information such as block states.
# Turning this off for Spigot will stop NMS from being used but will have a performance impact.
use-adapters: true

config-version: 4
```

#### Floodgate-Bukkit (config.yml)
```yaml
# In Floodgate bedrock player data is send encrypted
# The following value should point to the key Floodgate generated.
# The public key should be used for the Geyser(s) and the private key for the Floodgate(s)
key-file-name: key.pem

# Floodgate prepends a prefix to bedrock usernames to avoid conflicts
# However, certain conflicts can cause issues with some plugins so this prefix is configurable using the property below
# It is recommended to use a prefix that does not contain alphanumerical to avoid the possibility of duplicate usernames.
username-prefix: "."

# Should spaces be replaced with '_' in bedrock usernames?
replace-spaces: true

disconnect:
  # The disconnect message Geyser users should get when connecting
  # to the server with an invalid key
  invalid-key: Please connect through the official Geyser
  # The disconnect message Geyser users should get when connecting
  # to the server with the correct key but not with the correct data format
  invalid-arguments-length: Expected {0} arguments, got {1}. Is Geyser up-to-date?

# Configuration for player linking
player-link:
  # Whether to enable the linking system. Turning this off will prevent
  # players from using the linking feature even if they are already linked.
  enable: true
  # The type of storage system you want to use
  # Currently implemented: SQLite
  type: sqlite
  # Whether to allow the use of /linkaccount and /unlinkaccount
  # You can also use allow specific people to use the commands using the
  # permissions floodgate.linkaccount and floodgate.unlinkaccount.
  # This is only for linking, already connected people will stay connected
  allow-linking: true
  # The amount of time until a link code expires in seconds
  link-code-timeout: 300
```

#### Multiverse-Core (config.yml)
```yaml
#  -------------------------------------------------------------------------  #
# This is the MV2 Config. If you mess it up, copy the values out              #
# delete it, and it will be regenerated. Then use the ingame interface        #
# to add your values back via the "/mv conf" command.                         #
# When in-game, simply type: "/mv conf ?" for help.                           #
# A config with explanations can be found here:                               #
# https://github.com/Multiverse/Multiverse-Core/wiki/config.yml               #
#                                                                             #
#                                                                             #
#  IMPORTANT !! IMPORTANT !! IMPORTANT !! IMPORTANT !! IMPORTANT !!IMPORTANT  #
#                                                                             #
# Do NOT delete this line from your config!!!!                                #
# ==: com.onarandombox.MultiverseCore.MultiverseCoreConfiguration             #
#                                                                             #
#  IMPORTANT !! IMPORTANT !! IMPORTANT !! IMPORTANT !! IMPORTANT !!IMPORTANT  #
#  -------------------------------------------------------------------------  #

multiverse-configuration:
  ==: com.onarandombox.MultiverseCore.MultiverseCoreConfiguration
  enforceaccess: 'false'
  prefixchat: 'false'
  prefixchatformat: '[%world%]%chat%'
  useasyncchat: 'true'
  teleportintercept: 'true'
  firstspawnoverride: 'true'
  displaypermerrors: 'true'
  globaldebug: '0'
  silentstart: 'false'
  messagecooldown: '5000'
  version: '2.9'
  firstspawnworld: world
  teleportcooldown: '1000'
  defaultportalsearch: 'false'
  portalsearchradius: '128'
  autopurge: 'true'
  idonotwanttodonate: 'false'
```

#### Multiverse-Inventories (config.yml)
```yaml
# Multiverse-Inventories Settings

# ===[ Multiverse Inventories Config ]===
settings:
  # This is the locale you wish to use.
  locale: en
  # If this is true it will generate world groups for you based on MV worlds.
  first_run: true
  # If this is set to true, it will enable bypass permissions (Check the wiki for more info.)
  use_bypass: false
  # If set to true, any world not listed in a group will automatically use the settings for the default group!
  default_ungrouped_worlds: false
  # The default and suggested setting for this is FALSE.

  # False means Multiverse-Inventories will not attempt to load or save any player data when they log in and out.

  # That means that MINECRAFT will handle that exact thing JUST LIKE IT DOES NORMALLY.

  # Changing this to TRUE will have Multiverse-Inventories save player data when they log out and load it when they log in.

  # The biggest potential drawback here is that if your server crashes, player stats/inventories may be lost/rolled back!
  save_load_on_log_in_out: false
  # If this is set to true, players will have different inventories/stats for each game mode.

  # Please note that old data migrated to the version that has this feature will have their data copied for both game modes.
  use_game_mode_profiles: false
shares:
  # When set to true, optional shares WILL be utilized in cases where a group does not cover their uses for a world.

  # An example of this in action would be an ungrouped world using last_location.  When this is true, players will return to their last location in that world.

  # When set to false, optional shares WILL NOt be utilized in these cases, effectively disabling it for ungrouped worlds.
  optionals_for_ungrouped_worlds: true
  # You must specify optional shares you wish to use here or they will be ignored.

  # The only built in optional share is "economy"
  use_optionals:
  - last_location
```

#### StackMob (config.yml)
```yaml
# StackMob 5.0 Configuration file - by antiPerson and contributors.
#
# Most options can be customised for specific entity types, for details about this, see the end of this file.
# Asterisk meaning:
# (*) This option cannot be overridden in the 'custom' section at the end of this file.
# (**) The following option requires the use of Paper (https://papermc.io) because the API needed is not in Spigot.
#
# If the comments have been removed, you can find a version with comments at https://github.com/Nathat23/StackMob-5/tree/master/src/main/resources

stack:
  # The maximum size that a stack can have.
  max-size: 30
  # How often entities should be checked for stacking (in ticks. 20 ticks = 1 second) (*)
  interval: 100
  # The area around an entity for which applicable stacks should be found.
  # Format: [(x cord),(y cord),(z cord)]
  merge-range: [10,10,10]
  # Only begin to stack entities when this amount of entities are nearby.
  threshold:
    enabled: true
    amount: 5

# Names of worlds where there should be no stacking
worlds-blacklist: []
worlds-blacklist-invert: false
# Types of entity which should not stack
types-blacklist: [VILLAGER, CAT, WOLF, PARROT, HORSE]
types-blacklist-invert: false
# If the entity's spawns reason is listed below, do not stack.
reason-blacklist:
  - BREEDING
reason-blacklist-invert: true

display-name:
  # The formatting of the name tag which is shown when the stack size is above the threshold.
  # Both legacy and RGB hex color codes are supported, these need to be prefixed by the '&' symbol.
  # Placeholders:
  # %type% - the entity's type
  # %size% - the size of the stack
  format: '&a%type% &d(%size%)'
  # Whether the display tag can only be seen when the player targets the entity.
  # Mode:
  # ALWAYS - The tag will always be visible as long as the entity is loaded.
  # HOVER - The tag will only be visible when the player hovers their crosshair on the entity.
  # NEARBY - The tag will only be visible when the player is in range of the entity. (more resource intensive, requires ProtocolLib on 1.15 servers)
  visibility: NEARBY
  # Options for when 'NEARBY' is used above. (*)
  nearby:
    # The range from which the tag should be visible.
    # Format: [(x cord),(y cord),(z cord)]
    range: [12,6,12]
    # How often (in ticks) the tag visibility status of an entity should be updated. (20 ticks = 1 second)
    interval: 20
  # Don't show the tag if the stack size of this entity if it is equal to or below the value specified.
  threshold: 1

# Whether entity specific traits (eg. profession, colour) should be segregated (*)
traits:
  sheep-color: true
  sheep-sheared: true
  slime-size: true
  horse-color: true
  llama-color: true
  parrot-variant: true
  drowned-hand-item: true
  age: true
  breed-mode: true
  love-mode: true
  cat-type: true
  mooshroom-variant: true
  fox-type: true
  bee-nectar: true
  bee-stung: true
  zoglin-baby: true
  piglin-baby: true
  leashed: true

# Prevent stacked mobs from targeting players.
# Similar to no-ai, but allows for movement of entities.
disable-targeting:
  enabled: false
  # If the entity's type is listed below, do not disable targeting.
  type-blacklist: []
  type-blacklist-invert: false
  # If the entity's spawns reason is listed below, do not disable targeting (**)
  reason-blacklist: []
  reason-blacklist-invert: false

# What should be done when these entity actions occur. (*)
events:
  # When an entity is feed its food.
  breed:
    enabled: true
    # MULTIPLY - spawn as many baby entities possible providing there is enough food fed.
    # SPLIT - slice off an entity to that it can be bred normally.
    mode: MULTIPLY
  # When an entity is dyed.
  dye:
    enabled: true
    # MULTIPLY - dye as many entities possible providing there is enough dye.
    # SPLIT - slice off an entity to that it can be dyed normally.
    mode: MULTIPLY
  # When an entity is sheared.
  shear:
    enabled: true
    # MULTIPLY - shear as many entities possible providing the shears have enough durability.
    # SPLIT - slice off an entity to that it can be sheared normally.
    mode: MULTIPLY
  multiply:
    # Chicken eggs and turtle scutes.
    drops: true
    explosion: true
    slime-split: true
  divide:
    nametag: true
    tame: true
    # Only bees now
    enter-block: true
  remove-stack-data:
    # Should we remove the stack data of an entity that was unstacked as a result of nametag division/split?
    # Setting this to false will cause entities that were nametagged to potentially become stacked again.
    nametag: true

# How entities should die
death:
  # Rather than spawn a new entity in place of the killed entity, just decrease the stack size instead. (**)
  skip-animation: false
  # Death options:
  # SINGLE - Only one entity dies.
  # ALL - Every entity dies.
  # STEP - A random amount dies.
  # STEP_DAMAGE - An amount that depends on the damage done dies.
  #
  # The priority 1 is highest and 4 is lowest.
  # If the killed entity is blacklisted, either by type or death reasons, by the highest priority method,
  # then it will attempt to use the next highest priority death method.
  SINGLE:
    priority: 4
    reason-blacklist: []
    reason-blacklist-invert: false
    type-blacklist: []
    type-blacklist-invert: false
  ALL:
    priority: 3
    reason-blacklist: []
    reason-blacklist-invert: false
    type-blacklist: []
    type-blacklist-invert: false
  STEP:
    priority: 2
    reason-blacklist: []
    reason-blacklist-invert: false
    type-blacklist: []
    type-blacklist-invert: false
    max-step: 5
    min-step: 1
  STEP_DAMAGE:
    priority: 1
    reason-blacklist: []
    reason-blacklist-invert: false
    type-blacklist: []
    type-blacklist-invert: false

# Multiply entity drops on entity death.
drops:
  enabled: true
  use-loot-tables: true
  # If each mob should only drop one of the items in the list.
  one-per-stack: []
  one-per-stack-invert: false
  # Items that should not be dropped.
  item-blacklist: []
  item-blacklist-invert: false
  # Death reasons that should not mean that drops are multiplied.
  reason-blacklist: []
  reason-blacklist-invert: false
  # Types of entity for which drops should not be dropped for.
  type-blacklist: []
  type-blacklist-invert: false

# Multiply entity experience on entity death.
experience:
  enabled: true
  # The bounds that should be used for the random multiplier.
  multiplier-min: 0.5
  multiplier-max: 0.8
  # Types of entity for which exp should not be dropped for.
  type-blacklist: []
  type-blacklist-invert: false

# Multiply the player stats which can be seen by the player from the game menu.
player-stats: true

# If specific entities should have a waiting time before their first stack.
# Designed for monster grinders etc.
wait-to-stack:
  enabled: true
  # For (x) times the stack task fires after spawn, don't stack this entity.
  wait-time: 5
  # Entity types that this should work for.
  types-whitelist:
    - ZOMBIE
    - SKELETON
    - ZOMBIFIED_PIGLIN
    - CREEPER
    - ENDERMAN
  types-whitelist-invert: false
  # Spawn reasons that this should work for.
  reasons-whitelist:
    - SPAWNER
  reasons-whitelist-invert: false

# Enable/disable integration with other plugins. (*)
hooks:
  # Allows the custom 'entity-stacking' flag to be used in worldguard regions.
  worldguard: true
  mythicmobs:
    enabled: true
    blacklist: []
    blacklist-invert: false
  # Prevent citizens npcs from stacking.
  citizens: true
  # Prevent stacked entities from giving mcmmo experience.
  mcmmo: true
  # Prevent stacked entities from giving job payments.
  jobs: true
  # Allows the use of ProtocolLib, which is used when the server version is not the native one of the plugin.
  protocollib: true

## Some options can be modified for specific entity types. An example is shown below. Remove comments to see this in action.
## Options and sections with a (*) in the comment preceding cannot be overridden.
#custom:
#  # The entity type
#  CREEPER:
#    # The option to override. This should be the same as it appears above.
#    stack:
#      max-size: 30
#  SKELETON:
#    # Entities can also inherit options from other entities, using the 'clone' option preceded by the entity type to clone.
#    clone: CREEPER
#    # The cloned custom options can still be overridden.
#    stack:
#      max-size: 5
```

#### TitleManager (config.yml)
````yaml
############################################################

# +------------------------------------------------------+ #

# |                       Notes                          | #

# +------------------------------------------------------+ #

############################################################



# Config comment style borrowed from the Essentials config.

#

# If you want to use special characters (ASCII, UTF-8 characters) in the config, you need to save the file as UTF-8.

#   - If you don't know how this is done, you can see the guide on the wiki: https://github.com/Puharesource/TitleManager/wiki/Unicode---UTF-8-characters-for-TitleManager

#

# Config errors, such as the plugin not loading or the config resetting can be fixed by ensuring that:

#   - No tabs are present: YAML only allows spaces.

#   - You have escaped all apostrophes or quotes in your text:

#      - If you surround your text with apostrophes like this 'don't', double all of your apostrophes like this: 'don''t'

#      - If you surround your text with quotes like this "Quote: "hello"", switch to apostrophes instead like this 'Quite: "hello"'.

#

# If you've got problems:

#   - Join the Discord server here: https://discord.gg/U3Yyu6G

#   - Write a ticket on the Issue Tracker here: https://github.com/Puharesource/TitleManager/issues

#

# Help with animations and scripts:

# - Go to https://tarkan.dev/tmgenerator

#

# 1 second = 20 ticks

#

# For more information check: https://github.com/Puharesource/TitleManager/wiki



############################################################

# +------------------------------------------------------+ #

# |                       General                        | #

# +------------------------------------------------------+ #

############################################################



# Never change this value

config-version: 6



# Toggles debug mode, which prints additional information when the plugin does something.

debug: false



# Toggles whether or not all of the features of TitleManager will be toggled.

using-config: true



# Toggles whether or not all of the BungeeCord functionality will be toggled.

using-bungeecord: true



# (Feature only works on 1.7-1.8 Protocol Hack)

# Toggles whether or not 1.7 players will see actionbar messages when they're holding an item.

legacy-client-support: false



# Toggles whether or not the plugin should warn administrators if there's a new version out.

check-for-updates: false



# The locale used for some of the placeholders.

locale: 'en-US'



############################################################

# +------------------------------------------------------+ #

# |                     Player List                      | #

# +------------------------------------------------------+ #

############################################################



# Sets the header and footer of the player list. (Shown when you hold the TAB key.)



player-list:



  # Toggles this feature.

  enabled: true



  # Sets the header of the player list.

  #

  # Single line format.

  # header: 'My header text'

  #

  # Multiple line format.

  # header:

  # - 'My first line'

  # - 'My second line'

  # - 'My third line'

  header:

  - '&6&lMy Server'
  
  - '&7%server_tps_1_colored%'
  
  - ''


  # Sets the footer of the player list.

  #

  # Single line format.

  # footer: 'My footer text'

  #

  # Multiple line format.

  # footer:

  # - 'My first line'

  # - 'My second line'

  # - 'My third line'

  footer:
  
  - ''

  - '&a%{online}&7/&a%{max} &ron this server'
  
  - '&6your.ip.here'



############################################################

# +------------------------------------------------------+ #

# |                    Welcome Title                     | #

# +------------------------------------------------------+ #

############################################################



# Sets the title that is sent to the player when they join the server.



welcome-title:



  # Toggles this feature.

  enabled: true



  # The title shown.

  title: ''



  # The subtitle shown.

  subtitle: ''



  # The time it takes for the title to fade into the screen. (In ticks)

  fade-in: 20



  # The time it takes for the title to stay on the screen. (In ticks)

  stay: 40



  # The time it takes for the title to fade out of the screen. (In ticks)

  fade-out: 20



  # The title shown when the player joins the server for the first time.

  first-join:



    # The title shown.

    title: '&kaa&r &6Welcome to my server!&r &kaa&r'



    # The subtitle shown.

    subtitle: ''



############################################################

# +------------------------------------------------------+ #

# |                  Welcome Actionbar                   | #

# +------------------------------------------------------+ #

############################################################



# Sets the actionbar that is sent to the player when they join the server.



welcome-actionbar:



  # Toggles this feature.

  enabled: false



  # The message shown.

  title: 'Welcome to My Server'



  # The message shown when the player joins the server for the first time.

  first-join: 'Welcome to My Server, this is your first time!'



############################################################

# +------------------------------------------------------+ #

# |                     Placeholders                     | #

# +------------------------------------------------------+ #

############################################################



# Configures anything placeholder related.



placeholders:



  # The format used by the balance placeholder.

  number-format:



    # Toggles this feature.

    enabled: true



    # The format used.

    format: '#,###.##'



  # The format used by the server-time placeholder.

  # The format used can be found here: https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html

  date-format: 'EEE, dd MMM yyyy HH:mm:ss z'



############################################################

# +------------------------------------------------------+ #

# |                      Scoreboard                      | #

# +------------------------------------------------------+ #

############################################################



# Sets the scoreboard (sidebar) that is sent to the player



scoreboard:



  # Toggles this feature

  enabled: false



  # The title displayed at the very top of the scoreboard

  # WARNING! (1.12 or below ONLY) The title must consist of 32 or less characters (this includes color codes)

  title: ''



  # The lines of the scoreboard (Maximum of 15 lines allowed)

  # Each line can only have 40 characters (this includes color codes)

  # Each line must also be unique, a work around would be to put a color code at the end your line, to make it unique.

  lines:
  
  - '&r'


  # A list of worlds that the Scoreboard should not be shown in.

  disabled-worlds:

  - 'my-disabled-world'

  - 'my-disabled-world-nether'



############################################################

# +------------------------------------------------------+ #

# |                      Announcer                       | #

# +------------------------------------------------------+ #

############################################################



# Automatically send titles and/or actionbar messages to the players on the server.



announcer:



  # Toggles this feature.

  enabled: false



  # The announcements

  #

  # The format:

  #

  # announcement-name:

  #   interval: 60                        (Seconds, Default: 60)

  #   timings:

  #     fade-in: 20                       (Ticks, Default: 20)

  #     stay: 40                          (Ticks, Default: 40)

  #     fade-out: 20                      (Ticks, Default: 20)

  #   titles:

  #   - 'First title'                     (The title sent)

  #   - 'Second title\nSecond subtitle'   (The next title sent, this time using \n to split the title and subtitle from each other)

  #   actionbar:

  #   - 'First actionbar'                 (The actionbar message sent)

  #   - 'The next actionbar sent'         (The next actionbar message sent)

  announcements:

    my-announcement:

      interval: 60

      timings:

        fade-in: 20

        stay: 40

        fade-out: 20

      titles:

      - ''

      actionbar:

      - '&aMore to come! Enjoy your stay!'


############################################################

# +------------------------------------------------------+ #

# |                       Bandwidth                      | #

# +------------------------------------------------------+ #

############################################################



# Configures all of the bandwidth saving options.



bandwidth:

  # Prevents sending identical packets, lowering bandwidth (but might be more CPU intensive).

  prevent-duplicate-packets: true



  # The tick rate of the player list in milliseconds. (Lower = More bandwidth & CPU usage, Higher = Less bandwidth & CPU usage)

  player-list-ms-per-tick: 50



  # The tick rate of the scoreboard in milliseconds. (Lower = More bandwidth & CPU usage, Higher = Less bandwidth & CPU usage)

  scoreboard-ms-per-tick: 50



############################################################

# +------------------------------------------------------+ #

# |                       Messages                       | #

# +------------------------------------------------------+ #

############################################################



# Configures all of the messages sent to the users.



messages:

  # The message shown when a player doesn't have permission to run a command.

  no-permission: '&cYou do not have permission to run that command!'



  # The messages from the command /tm version

  command-version:

    description: 'Gives you the current running version of TitleManager'

    version: '&aThe server is running %version'



  # The messages from the command /tm reload

  command-reload:

    description: 'Reloads TitleManager'

    reloaded: '&aTitleManager reloaded'



  # The messages from the command /tm animations

  command-animations:

    description: 'Displays all loaded animations'

    format: '&aLoaded animations (&f%count&a): %animations'

    separator: '&f, &a'



  # The messages from the command /tm scripts

  command-scripts:

    description: 'Displays all loaded scripts'

    format: '&aLoaded scripts (&f%count&a): %scripts'

    separator: '&f, &a'



  # The messages from the command /tm broadcast

  command-broadcast:

    description: 'Broadcasts a title to the server'

    usage: '<title>|<title\nsubtitle>'

    title-sent: '&aYou have broadcasted the title "&r%title&a".'

    subtitle-sent: '&aYou have broadcasted the subtitle "&r%subtitle&a".'

    both-sent: '&aYou have broadcasted the titles "&r%title&a" "&r%subtitle&a".'



  # The messages from the command /tm abroadcast

  command-abroadcast:

    description: 'Broadcasts an actionbar title to the server'

    usage: '<title>'

    sent: '&aYou have broadcasted the actionbar title "&r%title&a".'



  # The messages from the command /tm message

  command-message:

    description: 'Sends a title to the specified player'

    usage: '<player> <title>|<title\nsubtitle>'

    title-sent: '&aYou have sent %player the title "&r%title&a".'

    subtitle-sent: '&aYou have sent %player the subtitle "&r%subtitle&a".'

    both-sent: '&aYou have sent %player the titles "&r%title&a" "&r%subtitle&a".'

    invalid-player: '&c%player is not a valid player.'



  # The messages from the command /tm amessage

  command-amessage:

    description: 'Sends an actionbar title to the specified player'

    usage: '<player> <title>'

    sent: '&aYou have sent %player the actionbar title "&r%title&a".'

    invalid-player: '&c%player is not a valid player.'



  # The messages from the command /tm scoreboard

  command-scoreboard:

    description: 'Toggles the scoreboard on or off.'

    usage: 'toggle'

    toggled-on: '&aYou have enabled your scoreboard.'

    toggled-off: '&cYou have disabled your scoreboard.'
````

#### VentureChat (config.yml)
```yaml
#===============================================================

#                     VentureChat Config                       =

#                      Author: Aust1n46                        =                     

#===============================================================



# - regex1,regex2

# Simple regex tips: Use \b to "cut" a section of the word or phrase.  Example: \bass,donuts

# Example filtered sentence: You are an ass.  Will become: You are an donuts.  

# Example filtered sentence: You caught a bass.  Will stay: You caught a bass.  

# Example filtered sentence: You are an asshole.  Will become: You are an donutshole.

# Default filters by Jabelpeeps

filters:

- (\b.?anus),donuts

- (\ba+r*(se+|ss+(?!(ass|um|oc|ign|ist)).*?|s*e*h+[o0]*[l1]+e*[sz]*)\b),donuts

- (b[i1]a?tch(es)?),puppy

- Carpet Muncher,cookie monster

- (\bc((?!ook\b)[o0]+c*|aw)k\W?(sucker|s*|he[ea]*d)\b),rooster

- (\b[ck]r+a+p+(er|s|z)?\b),poopoo

- (\bcu+m+\b),go

- (\b.?[ck](u*n+|[l1]+[i1]+)t+[sz]*\b),peach

- (\b.?d[1i](c?k(head)?|[l1]+d[o0])e?[sz]?\b),rooster

- f u c k( e r)?,nono

- (\b.?fai*g+[oei1]*t*[sz]*\b),cigar

- Fudge Packer,fine person

- (\b(m[uo]+th[ae]r?)?(f|ph)uc*k*(e[rn]|ah*|ing?|)[sz]?\b),oh dear

- (\b(j(ac|er|ur)k\W?(of+))|(ji[sz]+i*m*)\b),bake brownies

- (\b(ma+s+te?rbai?te?[rs]?|wank(er)?[sz]?)\b),bake brownies

- orafi(s|ce),rooster

- (\bp+[e3]+[ai]*n+[i1!ua]+s+),rooster

- (\bp[i1]s+(?!(ton))(flap|face|drop)?),peepee

- (\b.?sh[i1!y]t+(er?|y|head)?[sz]*),poopoo

- (\bva[1i]?[gj]+[i1]+na+\b),peach

- vu[1l]+va,peach

- planet.?minecraft,another dimension

- pmc,another dimension

- ((\d+\.){3}\d+),another dimension



# command without the /

blockablecommands:

- vote

- me



# blacklisted nicknames 

nicknames:

- Notch



nickname-in-tablist: true



# {player} : player sending command

# {command} : command typed

commandspy:

  format: '&6{player}: {command}'

  worldeditcommands: true

  

antispam:

  enabled: true

  

  # number of messages to be spam

  spamnumber: 20

  

  # amount of time in seconds for it to be spam

  spamtime: 10

  

  # amount of time in minutes for the mute to last, use 0 for untimed mute

  mutetime: 10

 

# Logging chat and commands to a mysql database 

mysql:

  enabled: false

  user: 

  port: 3306

  password: 

  host: 

  database: 


# Login and logout messages

# Use Default for the vanilla login and logout messages

login:

  enabled: true

  message: Default

logout:

  enabled: true

  message: Default



# Loglevel feature is still in the works for adding of debug messages

# Valid loglevels:

# Info: Regular logging

# Debug: Show extra messages and caught errors for debugging

# Severe: Only show severe messages

loglevel: info



# saveinterval is in minutes

saveinterval: 30



# The time in seconds between each check to remove timed mutes

unmuteinterval: 60



# Enables or disabled BungeeCord messaging

bungeecordmessaging: false



# This will allow vanished players to be exempt from being sent private messages, and will act as if they aren't online

vanishsupport: true



# {playerto} : player receivings name

# {playerfrom} : player sendings name

tellformatto: 'You message {playerto}:&7'

tellformatfrom: '{playerfrom} messages you:&7'

tellformatspy: '{playerfrom} messages {playerto}:&7'

replyformatto: 'You reply to {playerto}:&7'

replyformatfrom: '{playerfrom} replies to you:&7'

replyformatspy: '{playerfrom} replied to {playerto}:&7'



# {host} : party hosts name

# {player} : player name

# use Default for the basic formatting

partyformat: Default



formatcleaner: true



# If true, /ignore will block chat from the ignored player as well as PM's

ignorechat: false



# The message shown to players alerting them no one is in the channel to hear them

emptychannelalert: "&6No one is listening to you."



messageremoverpermissions: '&cYou need additional permissions to view this message!'

messageremovertext: '&c&o<message removed>'



# The name of the group is the permissions node for the format

# Example: venturechat.json.Owner is the node for the group Owner

# A lower priority overrides a higher priority if a player has more than 1 group

# Possible options for click_name and click_prefix are suggest_command, run_command, and open_url

jsonformatting:

  Default: # This default format is required!  Do not delete or rename it!

    priority: 2147483647 # Integer.MAX_VALUE

#    hover_name:

#    - '&6I have: {vault_rankprefix}{vault_rank}{vault_ranksuffix}!'

#    click_name: 'suggest_command'

#    click_name_text: '/msg {player_name}'

#    hover_prefix:

#    - '&dI am default!'

#    click_prefix: 'run_command'

#    click_prefix_text: '/help'

#    hover_suffix:

#    - '&dI am default suffix!'

#    click_suffix: 'suggest_command'

#    click_suffix_text: '/msg {player_name}'

    

# The icon is the block shown in the GUI

# The text is the display name of the block icon

# Include a slash (/) before the command   

# Permissions are the name of the button and automatically include "venturechat." 

# Example: mute equals venturechat.mute

#  venturegui:

#   mute:

#    icon: 'REDSTONE_BLOCK'

#    durability: 0

#    text: '&cMute {player_name}'

#    permission: 'mute'

#    command: '/mute {player_name} {channel} 10'

#    slot: 1

#  unmute:

#    icon: 'DIAMOND_BLOCK'

#    durability: 0

#    text: '&bUnmute {player_name}'

#    permission: 'mute'

#    command: '/unmute {player_name} {channel}'

#    slot: 2

#  removemessage:

#    icon: 'DIAMOND_AXE'

#    durability: 0

#    text: '&cRemove Message'

#    permission: 'removemessage'

#    command: '/removemessage {hash} {channel}'

#    slot: 7

    

guiicon: ''

#guitext: '&cOpen Moderation GUI'

#guirows: 1



# All clickable URL's will be underlined if set to true

underlineurls: true



# broadcast information

broadcast:

  color: red

  permissions: venturechat.adminchannel

  displaytag: '[Broadcast]'

  

# Use $ to include arguments into the message  

# Valid component types are:

# Command: Sends a message or command in chat

# Message: Sends a message to the player

# Broadcast: Sends a broadcast to all players on the server

# Permissions automatically include "venturechat." 

# Example: permissions: alert equals venturechat.alert

# Use None for no permissions

# The number of arguments is the minimum number of required arguments, use 0 for no required arguments

alias:  

  tell:

    arguments: 0

    permissions: None

    components:

    - 'Command: /vtell$'

  whisper:

    arguments: 0

    permissions: None

    components:

    - 'Command: /vwhisper$'

  w:

    arguments: 0

    permissions: None

    components:

    - 'Command: /vwhisper$' 

  msg:

    arguments: 0

    permissions: None

    components:

    - 'Command: /vmessage$' 

  message:

    arguments: 0

    permissions: None

    components:

    - 'Command: /vmessage$'

#  vote:

#    arguments: 0

#    permissions: None

#    components:

#    - 'Message: &6Vote here: www.votelinkhere.com'

#  bane:

#    arguments: 2

#    permissions: bane

#    components:

#    - 'Command: /ban $ appeal at www.site.com'

#    - 'Command: /st banned $'

#  alert:

#    arguments: 1

#    permissions: alert

#    components:

#    - 'Broadcast: &c<Alert> $'

#  donate:

#    arguments: 0

#    permissions: None

#    components:

#    - 'Message: &bDonate here: www.mywebsite.com'

#  website:

#    arguments: 0

#    permissions: None

#    components:

#    - 'Message: &aThis is our website: www.site.net'

  

# Enables the creation of special Towny channels: Town and Nation

# To create these channels, simply name two channels below "Town" and "Nation"

# Bungeecord must be set to false for these channels! 

enable_towny_channel: false



# Enables the creation of a special faction only channel using the Factions plugin

# To create this channel, simply name a channel below "Faction"

# Bungeecord must be set to false for this channel!

# WARNING: May not work for all versions of Factions!

enable_factions_channel: false



# color = [channel] color

# chatcolor = text color

# cooldown is in seconds

# bungeecord overrides distance

# channel permissions are configurable

# channels can be changed, and new channels can be created

# Permissions automatically include "venturechat." 

# Example: permissions: staff equals venturechat.staff

# Use None for no permissions



# Use PlaceholderAPI placeholders are required!!!

# Use PlaceholderAPI placeholders are required!!!

# Use PlaceholderAPI placeholders are required!!!

# /papi ecloud download [plugin]

# /papi reload

# Use '' or "" around format, example: '[&2global&f] {vault_prefix} {player_displayname}&2:'

# You must have prefixes and suffixes set in a Vault compatible permissions plugin to avoid errors

# Use "" as the prefix or suffix to have none



# Set chatcolor to 'None' to have a group based chat color! Don't forget to put a suffix or other placeholder at the end of the format!



# Important!!!

# Important!!!

# If you delete a channel, restart the server! Do not use /chatreload!!!

channels:

  Global:

    color: white

    chatcolor: white

    mutable: true

    filter: false

    autojoin: true

    default: true

    distance: 0

    cooldown: 0

    bungeecord: false

    alias: g

    permissions: None

    speak_permissions: None

    format: '&r{vault_prefix}{player_displayname}{vault_suffix}&r:'

#  HexExample:

#    color: '#ff0000'

#    chatcolor: '#ff0000'

#    mutable: true

#    filter: true

#    autojoin: true

#    default: false

#    distance: 0

#    cooldown: 0

#    bungeecord: false

#    alias: he

#    permissions: None

#    speak_permissions: None

#    format: '&f[#ff0000Hex&f] {vault_prefix} {player_displayname}#ff0000:'

#  AnnouncementExample:

#    color: red

#    chatcolor: red

#    mutable: false

#    filter: false

#    autojoin: true

#    default: false

#    distance: 0

#    cooldown: 0

#    bungeecord: true

#    alias: announce

#    permissions: None

#    speak_permissions: announcement

#    format: '&f[&aServer Announcement&f] {vault_prefix} {player_displayname}&c:'


#  GroupChatColorExample:

#    color: '#706C1E'

#    chatcolor: 'None'

#    mutable: true

#    filter: true

#    autojoin: true

#    default: false

#    distance: 0

#    cooldown: 0

#    bungeecord: false

#    alias: ge

#    permissions: None

#    speak_permissions: None

#  : '&f[#706C1EGroupColorChat&f] {vault_prefix} {player_displayname}#706C1E:{vault_suffix}'

#  Donator:

#    color: light_purple

#    chatcolor: light_purple

#    mutable: true

#    filter: true

#    autojoin: true

#    default: false

#    distance: 0

#    cooldown: 0

#    bungeecord: false

#    alias: d

#    permissions: donatorchannel

#    speak_permissions: None

#    format: '&f[&dDonator&f] {vault_prefix} {player_displayname}&d:'

#  Help:

#    color: aqua

#    chatcolor: aqua

#    mutable: true

#    filter: true

#    autojoin: true

#    default: false

#    distance: 0

#    cooldown: 0

#    bungeecord: false

#    alias: h

#    permissions: None

#    speak_permissions: None

#    format: '&f[&bHelp&f] {vault_prefix} {player_displayname}&b:'

#  Trade:

#    color: dark_aqua

#    chatcolor: dark_aqua

#    mutable: true

#    filter: true

#    autojoin: true

#    default: false

#    distance: 0

#    cooldown: 0

#    bungeecord: false

#    alias: t

#    permissions: None

#    speak_permissions: None

#    format: '&f[&3Trade&f] {vault_prefix} {player_displayname}&3:'

#  Local:

#    color: yellow

#    chatcolor: yellow

#    mutable: true

#    filter: true

#    autojoin: true

#    default: false

#    distance: 230

#    cooldown: 0

#    bungeecord: false

#    alias: l

#    permissions: None

#    speak_permissions: None

#    format: '&f[&eLocal&f] {vault_prefix} {player_displayname}&e:'
```

#### ViaVersion (config.yml)
```yaml
# Thanks for downloading ViaVersion
# Ensure you look through all these options
# If you need help:
# Discord - https://viaversion.com/discord
# viaversion.com - Discussion tab
# Docs - https://docs.viaversion.com/display/VIAVERSION/Configuration
# 
# ----------------------------------------------------------#
#                     GLOBAL OPTIONS                       #
# ----------------------------------------------------------#
# 
# Should ViaVersion check for updates?
checkforupdates: true
# Send the supported versions with the Status (Ping) response packet
send-supported-versions: false
# Block specific Minecraft protocols that ViaVersion allows
# List of all Minecraft protocol versions: http://wiki.vg/Protocol_version_numbers or use a generator: https://via.krusic22.com
block-protocols:
- 736
- 735
- 578
- 575
- 573
- 498
- 490
- 485
- 480
- 477
- 404
- 401
- 393
- 340
- 338
- 335
- 316
- 315
- 210
- 110
- 109
- 108
- 107
- 47
- 5
- 4
# Change the blocked disconnect message
block-disconnect-msg: You are using an unsupported Minecraft version!
# If you use ProtocolLib, we can't reload without kicking the players.
# (We don't suggest using reload either, use a plugin manager)
# You can customise the message we kick people with if you use ProtocolLib here.
reload-disconnect-msg: Server reload, please rejoin!
# We warn when there's a error converting item and block data over versions, should we suppress these? (Only suggested if spamming)
suppress-conversion-warnings: false
# 
# ----------------------------------------------------------#
#                  GLOBAL PACKET LIMITER                   #
# ----------------------------------------------------------#
# 
# 
# Packets Per Second (PPS) limiter (Use -1 on max-pps and tracking-period to disable)
# Clients by default send around 20-90 packets per second.
# 
# What is the maximum per second a client can send (Use %pps to display their pps)
# Use -1 to disable.
max-pps: 800
max-pps-kick-msg: You are sending too many packets!
# 
# We can also kick them if over a period they send over a threshold a certain amount of times.
# 
# Period to track (in seconds)
# Use -1 to disable.
tracking-period: 6
# How many packets per second counts as a warning
tracking-warning-pps: 120
# How many warnings over the interval can we have
# This can never be higher than "tracking-period"
tracking-max-warnings: 4
tracking-max-kick-msg: You are sending too many packets, :(
# 
# ----------------------------------------------------------#
#                 MULTIPLE VERSIONS OPTIONS                #
# ----------------------------------------------------------#
# 
# Should we enable our hologram patch?
# If they're in the wrong place enable this
hologram-patch: false
# This is the offset, should work as default when enabled.
hologram-y: -0.96
# Should we disable piston animation for 1.11/1.11.1 clients?
# In some cases when firing lots of pistons it crashes them.
piston-animation-patch: false
# Should we fix nbt for 1.12 and above clients in chat messages (causes invalid item)
chat-nbt-fix: true
# Experimental - Should we fix shift quick move action for 1.12 clients (causes shift + double click not to work when moving items) (only works on 1.8-1.11.2 bukkit based servers)
quick-move-action-fix: false
# Should we use prefix for team colour on 1.13 and above clients
team-colour-fix: true
# 1.13 introduced new auto complete which can trigger "Kicked for spamming" for servers older than 1.13, the following option will disable it completely.
disable-1_13-auto-complete: false
# The following option will delay the tab complete request in x ticks if greater than 0, if other tab-complete is received, the previous is cancelled
1_13-tab-complete-delay: 0
# For 1.13 clients the smallest (1 layer) snow doesn't have collision, this will send these as 2 snowlayers for 1.13+ clients to prevent them bugging through them
fix-low-snow-collision: false
# Infested blocks are instantly breakable for 1.13+ clients, resulting in them being unable to break them on sub 1.13 servers. This remaps them to their normal stone variants
fix-infested-block-breaking: true
# In 1.14 the client page limit has been upped to 100 (from 50). Some anti-exploit plugins ban when clients go higher than 50. This option cuts edited books to 50 pages.
truncate-1_14-books: false
# This prevents clients using 1.9-1.13 on 1.8 servers from receiving no knockback/having velocity bugs whilst sneaking under a block.
change-1_9-hitbox: false
# Similar to the above, but for 1.14+ players on 1.8-1.13 servers.
# WARNING: This gives 1.14+ players the ability to sneak under blocks, that players under that version cannot (sneaking in places that are only 1.5 blocks high)!
# Another thing to remember is that those players might be missed by projectiles and other hits directed at the very top of their head whilst sneaking.
change-1_14-hitbox: false
# Fixes 1.14+ clients on sub 1.14 servers having a light value of 0 for non full blocks.
fix-non-full-blocklight: true
# Fixes walk animation not shown when health is set to Float.NaN
fix-1_14-health-nan: true
# Should 1.15+ clients respawn instantly / without showing a death screen?
use-1_15-instant-respawn: false
# 
# Enable serverside block-connections for 1.13+ clients - all of the options in this section are built around this option
serverside-blockconnections: true
# Sets the method for the block connections (world for highly experimental (USE AT OWN RISK) world-level or packet for packet-level)
blockconnection-method: packet
# When activated, only the most important blocks are stored in the blockstorage. (fences, glass panes etc. won't connect to solid blocks)
reduce-blockstorage-memory: false
# When activated with serverside-blockconnections, flower parts with blocks above will be sent as stems
# Useful for lobbyservers where users can't build and those stems are used decoratively
flowerstem-when-block-above: false
# Vines that are not connected to blocks will be mapped to air, else 1.13+ would still be able to climb up on them.
vine-climb-fix: false
# 
# Ignores incoming plugin channel messages of 1.16+ clients with channel names longer than 32 characters.
# CraftBukkit had this limit hardcoded until 1.16, so we have to assume any server/proxy might have this arbitrary check present.
ignore-long-1_16-channel-names: true
# 
# ----------------------------------------------------------#
#             1.9+ CLIENTS ON 1.8 SERVERS OPTIONS          #
# ----------------------------------------------------------#
# 
# No collide options, these allow you to configure how collision works.
# Do you want us to prevent collision?
prevent-collision: true
# If the above is true, should we automatically team players until you do?
auto-team: true
# When enabled if certain metadata can't be read we won't tell you about it
suppress-metadata-errors: false
# When enabled 1.9+ will be able to block by using shields
shield-blocking: true
# Enable player tick simulation, this fixes eating, drinking, nether portals.
simulate-pt: true
# Should we use nms player to simulate packets, (may fix anti-cheat issues)
nms-player-ticking: true
# Should we patch boss bars so they work? (Default: true, disable if you're having issues)
bossbar-patch: true
# If your boss bar flickers on 1.9+, set this to 'true'. It will keep all boss bars on 100% (not recommended)
bossbar-anti-flicker: false
# This will show the new effect indicator in the top-right corner for 1.9+ players.
use-new-effect-indicator: true
# Show the new death messages for 1.9+ on the death screen
use-new-deathmessages: true
# Should we cache our items, this will prevent server from being lagged out, however the cost is a constant task caching items
item-cache: true
# Patch the anti xray to work on 1.9+ (If your server is 1.8) This can cost more performance, so disable it if you don't use it.
anti-xray-patch: true
# Should we replace extended pistons to fix 1.10.1 (Only on chunk load)
replace-pistons: false
# What id should we replace with, default is air. (careful of players getting stuck standing on them)
replacement-piston-id: 0
# Force the string -> json transform
force-json-transform: false
# Minimize the cooldown animation in 1.8 servers
minimize-cooldown: true
# Left handed handling on 1.8 servers
left-handed-handling: true
```

### 3. MySQL
Many plugins are easier to manage when connected to a database. PebbleHost has built-in MySQL/MariaDB databases for your plugins.

Examples of plugins that I use include:
* AdvancedBan
* AntiVPN
* CoreProtect
* DiscordSRV
* dynmap
* LuckPerms
* mcMMO
* PLJRApi
* VentureChat

All of these plugins can make use of a database to improve their functionality.

PebbleHost has detailed guides on how to do this, so I don't need to write my own.

1. [Creating](https://help.pebblehost.com/en/article/how-to-create-a-mysql-database-1jo2ss4/)
2. [Configuring](https://help.pebblehost.com/en/article/how-to-install-configure-luckperms-veostq/), similar to most plugins

Multiple plugins can use the same database.

##### Dang, I need to do a guide on permissions later, don't I?

###### If you need any help, feel free to [contact me](/contact)
