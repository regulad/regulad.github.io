---
layout: post
---
## How to setup & optimize your server for maximum performance without greatly changing vanilla gameplay
Alright, imagine you want to start a "vanilla" Minecraft server with your 4-7 pals. You have $20 in pocket money at the moment, and you are willing to spend US$10-15 per month. Let's get into it.

## Getting a Server

### 1. Choosing a host
There are a variety of hosts out there, all of which have distinct pros and cons. I personally reccomend ![PebbleHost Favicon](https://pebblehost.com/favicon.ico) [PebbleHost](https://pebblehost.com/), since they have a reasonable selection of options for low-medium range Minecraft servers.

### 2. Choosing a plan
You have two options if you want a playable 18+ TPS experience, [Premium](https://pebblehost.com/minecraft/premium#tiers) and [Extreme](https://pebblehost.com/minecraft/extreme#tiers). While you could attempt to get away with [Budget](https://pebblehost.com/minecraft/budget#tiers), the CPU is considerably weaker and this is very important since versions of Minecraft higher than 1.13 are quite the CPU hog. Extreme allows you to change Java startup flags ([Aikar's Flags](https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/)), and also grants you Dedicated CPU threads. I'll be using [Premium](https://pebblehost.com/minecraft/premium#tiers), since the difference isn't *that* dramatic.

### 3. Choosing RAM
For some reason, mosts hosts would have you assume that RAM is the most valuable resource when running a Minecraft server. This is only partially true. A faster CPU means you'll use less of your memory, since the Java GC will function more efficient. Since I'll be targetting version 1.16.4/5, I am going to be purchasing 5GB. For NA markets, this costs you US$11.25/mo. You can also upgrade to 6GB, which will run you US$13.50/mo.

### 4. Purchasing your server
1. Once you are at the [Product Configuration](https://billing.pebblehost.com/cart.php?a=confproduct&i=1) page, you need to make a few changes before purchasing your server.
2. Automated Daily Reboots
    * You should enable Automated Daily Reboots if you don't mind having a couple minutes of downtime.
    1. ![Automated Daily Reboots](https://i.imgur.com/pphFXPh.png) Simply click "Yes."
3. Advanced DDoS Mitigation
    * Advanced DDoS Mitigation is a service that PebbleHost offers. It's basically just the Enterprise version of TCPShield.
    * If you want *some* DDoS mitigation, you can just use the free plan on TCPShield.
    * You should disable Advanced DDoS Mitigation unless you truly need it.
    1. ![Automated Daily Reboots](https://i.imgur.com/MOSiilf.png) Simply click "Disabled (Unprotected)."
4. Everything else can be left as-is.

There are a couple of other "Addons" you can purchase, but in my opinion these are all just a waste of money when you can set it up yourself. ![Addons](https://i.imgur.com/HUwy1jk.png)

You are ready to hit that big ol' buy button. ![Continue](https://i.imgur.com/PTLmiKX.png)

Great, now we have a server on PebbleHost that we are ready to work with. ![Server](https://i.imgur.com/VurPhnc.png)

### 5. (Optional) Buying & setting up a domain
You don't need to buy a domain, but it will make you look a lot more professional, as well as making it easier for your players to connect. While PebbleHost offers [a free "subdomain"](https://help.pebblehost.com/en/article/how-to-change-your-server-ip-1wqvbyw/), it reeks of crappy sites like Aternos and Minehut and I don't reccomend you use it.

On registrars like ![Namecheap Favicon](https://www.namecheap.com/assets/img/nc-icon/favicon.ico) [Namecheap](https://www.namecheap.com/), domains are dirt cheap. `.xyz` TLD domains go for US$1/yr. Hmm, wonder why this site is `regulad.xyz`.

1. Go onto the [main page](https://www.namecheap.com/), and look up your desired domain name.
2. Add it to your cart, then continue through the purchasing process.
3. After you click buy, you'll need to go and check your emails for a few varification steps. ![IMMEDIATE VERIFICATION](https://i.imgur.com/MMELeiJ.png)
4. Once you have verified your domain, you'll need to go to your [dashboard](https://ap.www.namecheap.com/).
5. Click on ![Manage](https://i.imgur.com/LzyOSSs.png).

Keep this tab open, you'll need it soon.

#### 5a. Setting up Cloudflare
![Cloudflare Favicon](https://www.cloudflare.com/favicon.ico) [Cloudflare](com) is one of the best ways to manage a domain, reguardless of which registrar you are using.

1. Go to [the Cloudflare dashboard](https://dash.cloudflare.com/). If you don't already have an account, go ahead and make one.
2. After you have signed in/signed up, click "+ Add a Site."
3. This process is pretty self-explanatory. 
    1. When it asks you to import DNS records, you can go ahead and delete them.
    2. Configure your Nameservers, you can use the page you should have open on Namecheap.
    3. Once your site is active, click "DNS." You'll need this for the next step. ![DNS](https://i.imgur.com/AdF05IS.png)

#### 5b. Connecting your server
There are two things you can do here, you can either directly connect the domain to the server with only DNS, or you can use a proxy serice like ![TCPShield Favicon](https://www.tcpshield.com/favicon.ico) [TCPShield](https://www.tcpshield.com/).

##### 5ba. DNS Only
If you are just using DNS, you only need to make an `A` record and an `SRV` record.

![Server IP](https://i.imgur.com/Qsw1xo9.png)

1. If your IP is `123.123.123.123`, then make an `A` record like this: ```A @ 123.123.123.123 3600``` ![Cloudflare A Record](https://i.imgur.com/jlReE6I.png)
2. If your Port is `25566`, than make an `SRV` record like this: ```SRV _minecraft._tcp.example.com 0 0 25566 example.com``` (with example.com being your domain, of course) ![Cloudflare SRV Record](https://i.imgur.com/bEeWc5A.png)

PebbleHost also has [a guide on this](https://help.pebblehost.com/en/article/how-to-connect-a-domain-to-your-server-1exxanh/).

##### 5bb. TCPShield
Only use TCPShield if you are not using Geyser: Geyser tends to break when using another proxy. For only 4-7 players, there's no need for anything but the free plan.

1. Make a free TCPShield account, and get to the [Account Dashboard](https://panel.tcpshield.com/dashboard/overview). ![TCPShield Account Dashboard](https://i.imgur.com/JiKXr9r.png)
2. Click "Add Network." Choose a name, make it the same as what you chose on PebbleHost.
3. Click "Backends" on the left menu.
4. Click "Add Set," then input your server information. ![Add Backend Set](https://i.imgur.com/ewsuBtl.png)
5. Click "Domains" on the left menu, then copy the `CNAME` record. ![CNAME Record](https://i.imgur.com/n6DSgq7.png)
6. Make a `CNAME` record on Cloudflare. ![TCPShield CNAME](https://i.imgur.com/ZguhKdy.png)
7. Go back to TCPShield, and click "Add Domain." Then, Fill it in with the correct information. ![Add Domain](https://i.imgur.com/Uk8hdR8.png)
8. Click "Re-check domain" until it lets you pass. DNS Records propagate pretty dang fast with Cloudflare.
9. Copy the Spigot plugin, you'll need it later.

All done!

## Preparing Enviorment
Ok, you have a server, you (might) have a domain that connects to the server, and you are ready to get into the more setup-y bits.

### 6. Install Tools
You'll need 3 essential tools, you will use these to edit & pull files on the server. Install these if you don't already use them.
1. [Notepad++](https://notepad-plus-plus.org/). This is a text editor.
2. [7-Zip](https://www.7-zip.org/). This is a archive tool.
3. [WinSCP](https://winscp.net/eng/index.php). This is an FTP client.
    * You can also use [FileZilla](https://filezilla-project.org/) client too, but this is one case where I would reccomend the closed source tool over the open source one.

### 7. Get Information
You should have information on hand, you'll be using this a lot.
1. PebbleHost Panel Email
2. PebbleHost Panel Password
3. PebbleHost Server ID (You can see this below the name of your server, it is 6 digits long)
4. PebbleHost FTP Server (Click on "FTP File Access") to see this

### 8. Configure Tools
You should setup your tools before you need them. **Notice: These instructions are for Windows machines. You are on your own for macOS, but if you need help on Linux, drop me a line.**
1. Setup NP++
    1. Create a `.txt` file and open properties.
    2. Look for "Opens with:" then click "Change..." ![Change...](https://i.imgur.com/jT2vMbv.png)
    3. Select NP++ ![NP++](https://i.imgur.com/SRKhxQF.png)
        * If you don't see NP++, you should scroll down to "Look for another app on this PC," then locate the NP++ executable, normally in "Program Files" or "Program Files (x86)."
    * After this, any `.txt` file you open will open in NP++ instead of Notepad.
2. Setup 7z
    1. Open 7zFM. (Just look up "7-Zip File Manager" in Windows Search)
    2. Click "Tools," then "Options..."
    3. Click the left "+" button. ![7-Zip File](https://i.imgur.com/9fegrQO.png)
    4. Click "Apply."
    5. Close 7z
3. Setup WinSCP and connect to your server
    1. Open WinSCP
    2. Click on "New Session," unless the Login dialogue is already open. ![Login](https://i.imgur.com/D1PKt4R.png)
    3. Put in your credentials. ![Login, Populated](https://i.imgur.com/KoEQmom.png)
        1. PebbleHost FTP Address, (normally looks like `na000.pebblehiost.com`) goes into the "Host name:" field.
        2. 21 goes into the "Port number:" field.
        3. PebbleHost Panel Email and PebbleHost Server ID goes into the "User name:" field. (normally looks like `{email}.{serverid}`)
        4. PebbleHost Panel Password goes into the "Password:" field.
    4. Click "Save," then "Ok."
    5. Re-enter your password and connect.
    6. Keep this window open, you'll need it later.

## Minecraft Setup & Optimization
Alright, your server is up, your tools are installed and setup, and we are ready to get to work.

Minecraft Java Edition Server is a very resource intensive program, so we have to optimize it heavily to have a good experience.

**Note: These steps apply to almost any Minecraft host that lets you change your server JAR. If your host doesn't: why aren't you using PebbleHost?**

### 9. Choose your server software
You've heard of Vanilla, Bukkit, CraftBukkit and Spigot, but what about Paper?

Ok, I guess Paper isn't as obscure as it used to be. But, think about it.

Bukkit is built off of Vanilla. CraftBukkit is a fork of Bukkit, and Spigot is built off of CraftBukkit. Paper is also a fork of Spigot.

But, what about a [fork of Paper](https://github.com/topics/paper-fork)? These offer all the features of Paper and it's downstream dependencies, but with much, MUCH more performance.

One of the first [forks](https://github.com/topics/paper-fork) is [Tuinity](https://github.com/Spottedleaf/Tuinity). 

Another option is [PurPur](https://github.com/pl3xgaming/Purpur).

But... what if we could fork a fork? Ladies and Gentlemen, let me show you my friend [Yatopia](https://github.com/YatopiaMC/Yatopia).

Yatopia is a collection of patches from many different forks. While it isn't the most stable, it's still very efficent. No other fork is even close.

You can download it from [their CI](https://ci.codemc.io/job/YatopiaMC/job/Yatopia/job/dev%252Fver%252F1.16.5/).

### 10. Installing Server Software
At the time of writing, the most stable build is #1. The filename is `yatopia-1.16.5-paperclip-b1.jar`. This will (of course) change with time, so expect it to be just a little different.

1. Upload your JAR to the server using the FTP(S) window you should have open.
2. Change the JAR to your to the name of the JAR you just uploaded on the main panel. ![Jarfile Dialogue](https://i.imgur.com/UE2MBUG.png)
3. Click "Save" at the bottom of the page.

### 11. Server Software Optimization
Luckily, someone else has already done the heavy lifting here. Check out [this](https://www.spigotmc.org/threads/guide-server-optimization%E2%9A%A1.283181/) SpigotMC thread for most important information.

PebbleHost has some more options for it's loader. Just copy the text below into your `pebblehost.yml`:
```yaml
# Version 1.3.6
# This is the settings file for the PebbleHost server loader.
# Got a suggestion for this file? Join our discord and suggest it using -suggest

# THESE SETTINGS CAN BREAK PARTS OF YOUR SERVER, BE CAREFUL WHEN EDITING THEM

# If you break this file, Please delete it and it will automatically regenerate.

### Automatic reboot / restart on crash settings
#
# Possible Settings: true, false
# Default: false
#
# This will enable and create a start.sh file which is required for both using the /restart commnad
# and is required for a server to restart if it crashes.
# Please ensure your server supports this file format and it is setup within spigot.yml
#
auto-reboot=true

### Server URL redirection
#
# This setting allows you to redirect any URL requests to your servers IP to your own website
# For example, if your servers IP is 1.25.6.54:25567 you can redirect 1.25.6.54 in your browser to your website
# You need a domain for this to work!
#
# Your servers IP Address (must be a domain!)
redirect-from=
# The website you would like users to be redirected to
redirect-to=

### Heaplimiter Settings
#
# If your server is running out of metaspace memory frequently we suggest enabling this option, You may read more @ https://help.pebblehost.com/en/article/1lsc8ad/
# 
# Possible Settings: 1,2,3
# Default: 1
# 1. 0MB 
# 2. 300MB
# 3. 600MB
heaplimited=3

### Startup flag options
#
# The following option enables UTF-8 encoding in your servers startup settings
#
# Possible Settings: true, false
# Default: false
#
utf8=false

# This option removes the 20 second wait time by adding the -DIKnowWhatImDoingISwear flag to your servers startup command
#
# Possible Settings: true, false
# Default: false
#
waitremoval=false

# This option adds the --forceUpgrade argument to your servers startup for 1 boot allowing you to upgrade to a new version.
#
# Possible Settings: true, false
# Default: false
#
forceupgrade=false

### Forge Timeout Settings
#
# You can set the following options inside the `-Dfml.readTimeout=` flag on your server
# 
# Possible Settings: 1,2,3
# Default: 1
# 1. Disabled
# 2. 120 seconds
# 3. 240 seconds
forgetimeout=1

### Rescue Mode
#
# This enables a temporary 1.8 paper server to test / debug any issues.
rescue=false

### Java Version setting
# Possible Settings: 8,11
# Default: 8
# 8. Your server will run on Java 8.
# 11. Your server will run on Java 11.
javaversion=11

### Reverse Proxy Settings
#
# Please configure these options from within your panel under Tools -> Reverse Proxy
# Reverse Proxy Domain
proxy-domain=
# Reverse Proxy Port
proxy-port=
#
# Please keep in mind, Any changes made to this will take up to 60 seconds to update and will require a server reboot.
```

## Plugins
Join me next time as we go through the "joy" that is installing & configuring plugins!

###### If you need any help, feel free to [contact me](/contact)
