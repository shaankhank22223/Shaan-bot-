module.exports.config = {
  name: "antiswearbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uairrajput",
  description: "otherbot",
  commandCategory: "...",
  cooldowns: 0
};
module.exports.handleEvent = async ({
	event: o,
	api: t,
	Users: n
}) => {
	var {
		threadID: e,
		messageID: a,
		body: b,
		senderID: s,
		reason: d
	} = o;
	
     const i = require("moment-timezone").tz("Asia/Karachi").format ("h:mm:ss A");
  const moment = require("moment-timezone");
  const Date = moment.tz("Asia/Karachi").format("DD/MM/YYYY");
	if (s == t.getCurrentUserID()) return;
	let c = await n.getNameUser(o.senderID);
	var h = {
		body: `${c}, 𝐌𝐮𝐣𝐡𝐞 𝐆𝐚𝐥𝐢 𝐃𝐞𝐧𝐞 𝐊𝐞 𝐉𝐮𝐫𝐦 𝐌𝐞. 𝐌𝐚𝐢 𝐓𝐮𝐦𝐡𝐞 𝐁𝐚𝐧 𝐊𝐚𝐫𝐭𝐢 𝐇𝐨 𝐎𝐫 𝐀𝐩𝐧𝐞 𝐁𝐨𝐬𝐬 𝐌𝐫𝐔𝐳𝐚𝐢𝐫𝐗𝐱𝐗-𝐌𝐓𝐗 𝐊𝐨 𝐁𝐡𝐢 𝐓𝐮𝐦𝐡𝐞 𝐁𝐚𝐧 𝐊𝐚𝐫𝐧𝐞 𝐊𝐢 𝐖𝐚𝐣𝐚 𝐁𝐚𝐭𝐚 𝐃𝐮𝐠𝐢..😾😾`
	};
    //Add curse words without capital letters
	["𝐒𝐭𝐮𝐩𝐢𝐝 𝐅𝐨𝐫 𝐒𝐰𝐞𝐚𝐫𝐢𝐧𝐠 𝐁𝐨𝐭"].forEach((a => { 
		
        const s = o.senderID;
    let haha = o.body;
	if (haha.includes("Sasta bot") || haha.includes("Bc bot") || haha.includes("Gandu bot") || haha.includes("chutiya bot") || haha.includes("fuck bot") || haha.includes("mardarchod") || haha.includes("lol bot") || haha.includes("tharki bot") || haha.includes("Teri maa ki ()") || haha.includes("gagong bot") || haha.includes("Bobong bot") || haha.includes("Bobo bot") || haha.includes("botbot") || haha.includes("bobo nung bot") || haha.includes("walang alam na bot") || haha.includes("tanga mong bot") ||  haha.includes("kick yung bot") || haha.includes("botlog bot")) {
			modules = "[ BOT BAN ]", console.log(c, modules, a);
			const o = n.getData(s).data || {};
			n.setData(s, {
				data: o			
			}), o.banned = 1, o.reason = a || null, o.dateAdded = i, global.data.userBanned.set(s, {
				reason: o.reason,
				dateAdded: o.dateAdded
			}), t.sendMessage(h, e, (() => {
				const o = global.config.ADMINBOT;
				var n = o;
				for (var n of o) t.sendMessage(`•——[𝐒𝐖𝐄𝐀𝐑𝐈𝐍𝐆 𝐁𝐎𝐓]——•\n❯ Date now : ${Date}\n❯ 𝐓𝐢𝐦𝐞 : ${i} (h:m:s) \n❯ 𝐍𝐚𝐦𝐞 : ${c}\n❯ 𝐔𝐢𝐝 : ${s}\n❯ 𝐅𝐛 𝐥𝐢𝐧𝐤 : https://www.facebook.com/${s}\n————————\n𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐛𝐚𝐧𝐧𝐞𝐝 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐛𝐨𝐭.`, n)
			}))
		} 
	})) 
}, module.exports.run = async ({
	event: o,
	api: t
}) => t.sendMessage("𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐦𝐝𝐬 𝐢𝐬 𝐮𝐬𝐞𝐝 𝐭𝐨 𝐝𝐞𝐭𝐞𝐜𝐭 𝐰𝐡𝐞𝐧 𝐬𝐰𝐞𝐚𝐫𝐢𝐧𝐠 𝐭𝐨 𝐛𝐨𝐭.\n\n𝐔𝐳𝐚𝐢𝐫 𝐑𝐚𝐣𝐩𝐮𝐭", o.threadID);
