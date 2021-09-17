<img width="120" height="120" align="left" style="float: left; margin: 0 10px 0 0;" alt="Atlanta" src="https://user-images.githubusercontent.com/56278136/133721912-db2f6fc0-f448-41b5-89ea-f9f6167ca48e.png">  

# Anti-Thread

[![](https://img.shields.io/discord/559414466664464384.svg?logo=discord&colorB=7289DA&label=Support)](https://discord.gg/jYqaGhxDGT)
[![](https://img.shields.io/badge/discord.js-v13.1.0-blue.svg?logo=npm)](https://github.com/discordjs/discord.js)


> This bot is a private bot used in french community servers and more.

Keep safe your Discord server against a raid by threads creation.<br/>

This bot is a open source Discord bot coded in JavaScript with [discord.js](https://discord.js.org) by [Evaninoo](https://github.com/Evaninoo).<br/>
Feel free to add a star ⭐ to the repository to promote the project !

## Features

### Main functionality
When a thread is created, the bot automatically delete it, and log it into the console.
<img width="600" height="430" alt="thread-gif" src="https://user-images.githubusercontent.com/56278136/133724684-d2d4a5e9-2b5a-4b65-9d34-491b98b57fde.gif">

### Log into the console
As soon as the thread is created, you are aware of it by seeing it in the console. You see the <strong>name</strong> of the thread, and the <strong>author</strong> of it. <br/>
![image](https://user-images.githubusercontent.com/56278136/133725338-36923121-0891-4ba9-b16a-564c81866c39.png)

### Owner / Exempt functionality
Thanks to the owner functionality, you can allow certain users to create threads. To do this, go to the <strong>config.js</strong>, and replace 'id 1', by the first id of the owner. Same, for the second, third, etc.<br/>
![image](https://user-images.githubusercontent.com/56278136/133726680-f257e320-967b-4c73-80d2-f4e9b0e18b06.png)

## How to Install
Create the application and then the bot on [Discord Developper Portal](https://discord.com/developers/applications).
Take the bot token and put it in the <strong>config.js</strong>, in the place of 'your secret token'.
Then if you want to add owners, replace ids by the ids of owners.

Make sure you have version 16 of [nodejs](https://nodejs.org/).

Then install node modules by opening a terminal and typing `npm i`. 

Now you can start the bot by typing `node index.js` in your terminal.
