const fs = require("fs");
module.exports.config = {
        name: "autoreact",
  version: "1.0.0",
        hasPermssion: 0,
        credits: "uzairrajput",
        description: "non prefix reply",
        commandCategory: "no prefix",
        usages: "noprefix",
    cooldowns: 0,
};
 
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body.toLowerCase();
  if (haha.includes("lol") || haha.includes("😂") || haha.includes("haha") || haha.includes("pagal") || haha.includes("mental") || haha.includes("oye") || haha.includes("love") || haha.includes("jani") || haha.includes("bc") || haha.includes("group") || haha.includes("kis") || haha.includes("kuta") || haha.includes("jan") || haha.includes("oh")){                 
    return api.setMessageReaction("😂", event.messageID, (err) => {}, true)
    api.markAsSeen(1, (err) => {});
  }
    if (haha.includes("death") || haha.includes("mar") || haha.includes("udas") || haha.includes("☹️") || haha.includes("hurt") || haha.includes("please") || haha.includes("😢") || haha.includes("😔") || haha.includes("🥺") || haha.includes("sad")){
      return  api.setMessageReaction("😢", event.messageID, (err) => {}, true);
}
  if (haha.includes("🥵") || haha.includes("umah") || haha.includes("💋") || haha.includes("kiss") || haha.includes("babu") || haha.includes("wow") || haha.includes("wah") || haha.includes("relationship") || haha.includes("gf") || haha.includes("baby") || haha.includes("omg")){
    return api.setMessageReaction("😘", event.messageID, (err) => {}, true)
        }
  if (haha.includes("Relationship") || haha.includes("relationship")){
    api.setMessageReaction("🫣", event.messageID, (err) => {}, true)
    api.sendMessage("𝐒𝐞𝐜𝐫𝐞𝐭 𝐇𝐚𝐢 𝐓𝐮 𝐉𝐚𝐧 𝐊𝐞 𝐊𝐢𝐚 𝐊𝐚𝐫𝐞𝐠𝐚..😾", event.threadID,event.messageID);
  }
  if (haha.includes("good evening") || haha.includes("Good Evening")){
    api.sendMessage("𝐆𝐮𝐝 𝐍𝐢𝐠𝐭𝐡 𝐈𝐧 𝐏𝐞𝐚𝐜𝐞 𝐈 𝐋𝐢𝐞 𝐃𝐨𝐰𝐧 𝐀𝐧𝐝 𝐒𝐨𝐨𝐧 𝐅𝐚𝐥𝐥 𝐀𝐬𝐥𝐞𝐞𝐩. 𝐅𝐨𝐫 𝐎𝐧𝐥𝐲 𝐘𝐨𝐮, 𝐋𝐨𝐫𝐝, 𝐌𝐚𝐤𝐞 𝐌𝐞 𝐋𝐢𝐯𝐞 𝐈𝐧 𝐒𝐚𝐟𝐞𝐭𝐲..", event.threadID, event.messageID)
  }
  if (haha.includes("good afternoon") || haha.includes("Good Afternoon")){
    api.sendMessage("𝐒𝐮𝐧𝐬𝐡𝐢𝐧𝐞 𝐀𝐟𝐭𝐞𝐫𝐧𝐨𝐨𝐧 𝐅𝐨𝐫 𝐘𝐨𝐮..", event.threadID, event.messageID)
  }
  if (haha.includes("Broken") || haha.includes("broken")){
    api.sendMessage("𝐊𝐞𝐡𝐭𝐞 𝐇𝐚𝐢 𝐃𝐞𝐤𝐡𝐞 𝐇𝐚𝐢 𝐇𝐮𝐦𝐧𝐞 𝐇𝐚𝐧𝐠𝐠𝐚𝐦𝐞 𝐛𝐡𝐨𝐭 𝐌𝐨𝐡𝐚𝐛𝐛𝐚𝐭 𝐊𝐞 𝐀𝐠𝐡𝐚𝐳 𝐁𝐡𝐢 𝐑𝐮𝐬𝐰𝐚𝐢 𝐎𝐫 𝐀𝐧𝐣𝐚𝐦 𝐁𝐡𝐢 𝐑𝐮𝐬𝐰𝐚𝐢.. 🥲🥀\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨", event.threadID, event.messageID)
  }
if (haha.includes("Bewafa") || haha.includes("bewafa")){
    api.sendMessage("𝐀𝐫𝐳 𝐇𝐚𝐢. 🥺🍒💫 𝐁𝐡𝐨𝐥 𝐒𝐚𝐤𝐭𝐞 𝐡𝐨 𝐓𝐰 𝐁𝐡𝐨𝐥 𝐉𝐚𝐨. 𝐈𝐣𝐚𝐳𝐚𝐭 𝐇𝐚𝐢 𝐓𝐮𝐦𝐡𝐞. 𝐍𝐚 𝐛𝐡𝐨𝐥 𝐒𝐚𝐤𝐨 𝐓𝐰 𝐋𝐮𝐚𝐭 𝐀𝐧𝐚 𝐀𝐤 𝐎𝐫 𝐈𝐣𝐚𝐳𝐚𝐭 𝐇𝐚𝐢 𝐓𝐮𝐦𝐡𝐞. 🔐💌💫\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨", event.threadID, event.messageID)
}
if (haha.includes("Intezar") || haha.includes("intezar")){
    api.sendMessage("𝐌𝐮𝐣𝐡𝐞 𝐋𝐚𝐠𝐭𝐚 𝐇𝐚𝐢 𝐘𝐞 𝐆𝐡𝐚𝐫𝐫𝐢 𝐉𝐢𝐬 𝐍𝐞 𝐁𝐡𝐢 𝐁𝐚𝐧𝐚𝐢 𝐇𝐨𝐠𝐢.. 𝐈𝐧𝐭𝐞𝐳𝐚𝐫 𝐔𝐬𝐞 𝐁𝐡𝐢 𝐊𝐢𝐬𝐢 𝐊𝐚 𝐁𝐚𝐫𝐢 𝐒𝐡𝐢𝐝𝐝𝐚𝐭 𝐂 𝐡𝐨𝐠𝐚.. 🙌💔🥀\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨", event.threadID, event.messageID)
}
  if (haha.includes("Mohabbat") || haha.includes("mohabbat")){
    api.sendMessage("𝐘𝐞 𝐋𝐢𝐧𝐞.𝐔𝐬 𝐤𝐞 𝐋𝐢𝐲𝐞 𝐉𝐢𝐬 𝐊𝐨 𝐌𝐭𝐱 𝐁𝐡𝐨𝐭 𝐂𝐡𝐚𝐡𝐭𝐚 𝐇𝐚𝐢.\n\n𝐊𝐞 𝐓𝐞𝐫𝐞 𝐍𝐚𝐦𝐞 𝐂 𝐌𝐨𝐡𝐚𝐛𝐛𝐚𝐭 𝐊𝐢 𝐇𝐚𝐢. 𝐓𝐞𝐫𝐞 𝐀𝐡𝐬𝐚𝐬 𝐂 𝐌𝐨𝐡𝐚𝐛𝐛𝐚𝐭 𝐊𝐢 𝐇𝐚𝐢. 𝐓𝐮𝐦 𝐌𝐞𝐫𝐞 𝐏𝐚𝐬𝐬 𝐍𝐡𝐢 𝐏𝐡𝐢𝐫 𝐛𝐡𝐢. 𝐓𝐞𝐫𝐢 𝐘𝐚𝐚𝐝 𝐂 𝐌𝐨𝐡𝐚𝐛𝐛𝐚𝐭 𝐊𝐢 𝐇𝐚𝐢. 😔❤️‍🔥🥺\n\n‎🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍💐𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨", event.threadID, event.messageID)
      }
}
        module.exports.run = function({ api, event, client, __GLOBAL }) {
  }
