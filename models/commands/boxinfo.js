const fs = require("fs");
const request = require("request");
module.exports.config = {
	name: "groupinfo",
	version: "1.0.0", 
	hasPermssion: 1,
	credits: "uzairrajput",
	description: "View your box information",
	commandCategory: "Box", 
	usages: "groupinfo", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	let threadInfo = await api.getThreadInfo(event.threadID);
	var memLength = threadInfo.participantIDs.length;
	let threadMem = threadInfo.participantIDs.length;
	var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
     for (let z in threadInfo.userInfo) {
     	var gioitinhone = threadInfo.userInfo[z].gender;
     	var nName = threadInfo.userInfo[z].name;
        if(gioitinhone == "MALE"){gendernam.push(z+gioitinhone)}
        else if(gioitinhone == "FEMALE"){gendernu.push(gioitinhone)}
            else{nope.push(nName)}
    };
	var nam = gendernam.length;
    var nu = gendernu.length;
	let qtv = threadInfo.adminIDs.length;
	let sl = threadInfo.messageCount;
	let u = threadInfo.nicknames;
	let icon = threadInfo.emoji;
	let threadName = threadInfo.threadName;
	let id = threadInfo.threadID;
	let sex = threadInfo.approvalMode;
			var pd = sex == false ? 'Turned off' : sex == true ? 'Turned on' : 'Kh';
			var callback = () =>
				api.sendMessage(
					{
						body: `🔧 𝐺𝑟𝑜𝑢𝑝 𝑁𝑎𝑚𝑒: ${threadName}\n🔧 𝐺𝑟𝑜𝑢𝑝 𝐼𝐷: ${id}\n🔧 𝐴𝑝𝑝𝑟𝑜𝑣𝑎𝑙: ${pd}\n🔧 𝐸𝑚𝑜𝑗𝑖: ${icon}\n🔧 𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛: including ${threadMem} 𝑀𝑒𝑚𝑏𝑒𝑟𝑠\n🔧 𝑁𝑢𝑚𝑏𝑒𝑟 𝑂𝑓 𝑀𝑎𝑚𝑚𝑎 𝐾𝑒 𝐿𝑎𝑑𝑙𝑦: ${nam} 𝑀𝑒𝑚𝑏𝑒𝑟𝑠\n🔧 𝑁𝑢𝑚𝑏𝑒𝑟 𝑂𝑓 𝐵𝑎𝑏𝑎 𝐾𝑖 𝑃𝑎𝑟𝑖: ${nu} 𝑀𝑒𝑚𝑏𝑒𝑟𝑠\n🔧 𝑊𝑖𝑡ℎ ${qtv} 𝐴𝑑𝑚𝑖𝑛𝑖𝑠𝑡𝑟𝑎𝑡𝑜𝑟𝑠\n🔧 𝑇𝑜𝑡𝑎𝑙 𝑁𝑢𝑚𝑏𝑒𝑡 𝑂𝑓 𝑀𝑒𝑠𝑠𝑎𝑔𝑒: ${sl} msgs.\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨`,
						attachment: fs.createReadStream(__dirname + '/cache/1.png')
					},
					event.threadID,
					() => fs.unlinkSync(__dirname + '/cache/1.png'),
					event.messageID
				);
			return request(encodeURI(`${threadInfo.imageSrc}`))
				.pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
				.on('close', () => callback());
	    }
