module.exports.config = {
	name: "approve",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "uzairrajput",
	description: "THIS BOT MADE BY UZAIR RAJPUT MTX",
	commandCategory: "Admin",
    cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const dataPending = __dirname + "/cache/pendingdThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
	if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(dataPending)) fs.writeFileSync(dataPending, JSON.stringify([]));
}
module.exports.handleReply = async function ({ event, api, Currencies, handleReply, Users, args }) {
    if (handleReply.author != event.senderID) return;
    const { body, threadID, messageID, senderID } = event;
    const { type } = handleReply;
    let data = JSON.parse(fs.readFileSync(dataPath));
    let dataP = JSON.parse(fs.readFileSync(dataPending));
    let idBox = (args[0]) ? args[0] : threadID;
  switch (type) {
        case "pending": {
          switch (body) {
                case `A`: {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒑𝒖𝒕 𝐁𝐨𝐭 😇👈
=𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 🌹◈ ──────────────── 💚✨ 𝐀𝐩 𝐊𝐚 𝐆𝐫𝐎𝐮𝐏 𝐀𝐩𝐏𝐑𝐨𝐕𝐚𝐋 𝐊𝐚𝐑 𝐃𝐢𝐘𝐚 𝐇𝐚𝐈 =𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 🌹\n${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
        }
      }
    }
  }
module.exports.run = async ({ event, api, args, Threads, handleReply, Users }) => {
	const { threadID, messageID, senderID } = event;
	let data = JSON.parse(fs.readFileSync(dataPath));
  let dataP = JSON.parse(fs.readFileSync(dataPending));
  let msg = "";
  var lydo = args.splice(2).join(" ");
  let idBox = (args[0]) ? args[0] : threadID;
        if (args[0] == "list" || args[0] == "l") {
    	msg = `◈ ──── 💚✨ 「 GC THAT HAD BEEN APPROVED: ${data.length} 」 ◈ ──── 💚✨ `;
    	let count = 0;
    	for (e of data) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
    		msg += `\n〘${count+=1}〙» ${threadName}\n${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "a",
        })
    }, messageID);
        }
     else if (args[0] == "pending" || args[0] == "p") {
    	msg = `◈ ──── 💚✨ 「 THREADS NEED TO BE APPROVE: ${dataP.length} 」 ◈ ──── 💚✨`;
    	let count = 0;
    	for (e of dataP) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
    		msg += `\n〘${count+=1}〙» ${threadName}\n${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "pending",
        })
    }, messageID);
     }
       else if (args[0] == "help" || args[0] == "h") {
         const tst = (await Threads.getData(String(event.threadID))).data || {};
  const pb = (tst.hasOwnProperty("PREFIX")) ? tst.PREFIX : global.config.PREFIX;
  const nmdl = this.config.name
  const cre = this.config.credits
        return api.sendMessage(`◈ ──── 💚✨ 「 APPROVE 」◈ ──── 💚✨\n\n${pb}${nmdl} l/list => see list of approved boxes\n\n${pb}${nmdl} p/pending => see the list of unapproved boxes\n\n${pb}${nmdl} d/del => with ID to remove from bot used list\n\n${pb}${nmdl} => Attach an ID to browse that box\n\n⇒ ${cre} ⇐`, threadID, messageID);
       }
      
    else if (args[0] == "del" || args[0] == "d") {
    	idBox = (args[1]) ? args[1] : event.threadID;
      if (isNaN(parseInt(idBox))) return api.sendMessage("[ ERR ] Not a number", threadID, messageID);
    	if (!data.includes(idBox)) return api.sendMessage("[ ERR ] Box is not pre-approved!", threadID, messageID);
      api.sendMessage(`[ OK ] Your group has been removed from the browsing list by the admin for the reason: ${lydo}`, idBox);
    	api.sendMessage(`[ OK ] Box has been removed from the list of allowed bots`, threadID, () => {
    		data.splice(data.indexOf(idBox), 1);
    		fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    	}, messageID)
    }
    else if (isNaN(parseInt(idBox))) api.sendMessage("[ ERR ] The ID you entered is not valid", threadID, messageID);
    else if (data.includes(idBox)) api.sendMessage(`[ - ] ID ${idBox} pre-approved!`, threadID, messageID);
   	else api.sendMessage("𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 𝐁𝐨𝐭 😇◈ ──────────────── 💚✨ 𝐀𝐩 𝐊𝐚 𝐆𝐫𝐎𝐮𝐏 𝐀𝐩𝐏𝐑𝐨𝐕𝐚𝐋 𝐊𝐚𝐑 𝐃𝐢𝐘𝐚 𝐇𝐚𝐈 𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 🌹 \n◈ ──────────────── 💚✨\n◈ ──── 💚✨  𝐀𝐁𝐁  𝐊𝐀𝐑𝐎  𝐌𝐀𝐒𝐓𝐈 ◈ ──── 💚✨ \n◈ ──────────────── 💚✨\n=𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 🌹\n◈ ──────────────── 💚✨\n𝐀𝐩𝐤𝐀 𝐏𝐈𝐲𝐑𝐚 𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 🌹 \n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊👈 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 :- ☞ \n\nhttps://www.facebook.com/Mtxuzair\n◈ ──────────────── 💚✨\n𝐊𝐢𝐒𝐢 𝐁𝐡𝐈 𝐓𝐚𝐑𝐇𝐚 𝐊𝐢 𝐇𝐞𝐋𝐩 𝐋𝐚𝐍𝐢 𝐇𝐨 𝐀𝐛𝐇𝐢 𝐌𝐞𝐒𝐒𝐠 𝐊𝐚𝐑𝐞 𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 🌹◈ ──────────────── 💚✨ 👉 [+92 3198188449]", idBox, (error, info) => {
   		api.changeNickname(` 〖 ${global.config.PREFIX} 〗 ➺ ${(!global.config.BOTNAME) ? "" : global.config.BOTNAME}`, idBox, global.data.botID);
      const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
   let admID = "61552682190483";    
  
      api.getUserInfo(parseInt(admID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", "");  
      
      axios.get('https://api.satou-chan.xyz/api/endpoint/happy').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
      api.sendMessage({body: `❒❒ BOT ARE NOW CONNECTED ❒❒\n◈ ──────────────── 💚✨\n┏━━━━ 💚 ━━━━┓
  ✦❥⋆⃝𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿

┗━━━    💚 ━━━━┛\n◈ ──────────────── 💚✨\n➪ BOT: ${global.config.BOTNAME}\n➪ Prefix: ${global.config.PREFIX}\n➪ Users: ${global.data.allUserID.length}\n➪ Groups: ${global.data.allThreadID.length}\n◈ ──────────────── 💚✨\n[]---------------------------------------[]\nUse '${global.config.PREFIX}Help' T0o View The Commands That Available! 🖤\n[]---------------------------------------[]\n⌨ Made by: ${firstname}\n`, mentions: [{
                           tag: firstname,
                           id: admID,
                           fromIndex: 0,
                 }],
						attachment: fs.createReadStream(__dirname + `/cache/duyet.${ext}`)
					}, idBox,() => fs.unlinkSync(__dirname + `/cache/duyet.${ext}`));
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/duyet.${ext}`)).on("close", callback);
			}) 
      })
   		if (error) return api.sendMessage("[ ERR ] Something went wrong, make sure the id you entered is valid and the bot is in the box!", threadID, messageID);
   		else {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`[ OK ] Successfully Approved The Box (◕‿◕):\n${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
   	});
  }
