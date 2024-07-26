const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2348029544386" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348029544386";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348029544386";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_34_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTc4LFxuICAgICAgICA4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNixcbiAgICAgICAgMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDksXG4gICAgICAgIDI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NixcbiAgICAgICAgMjIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTExLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDksXG4gICAgICAgIDAsXG4gICAgICAgIDM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI5LFxuICAgICAgICAzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVCS3VDSWZURkZWeWFUNWxWVE5STFUxdHduUFNNQmthYjJ4KzIzSUx5QzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZxOWxvOWZlUW55NXpobG53dWlhZFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTJmYmQ0YzktNzhhNi00ZTZhLWJlODktNWZmN2FjOTM0MDk3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgyLFxuICAgICAgMTIwLFxuICAgICAgNTQsXG4gICAgICA3LFxuICAgICAgMjQwLFxuICAgICAgMTc5LFxuICAgICAgMjAxLFxuICAgICAgMzQsXG4gICAgICA1NyxcbiAgICAgIDEwOSxcbiAgICAgIDI0MCxcbiAgICAgIDIyNixcbiAgICAgIDEwNCxcbiAgICAgIDIwNCxcbiAgICAgIDIzMixcbiAgICAgIDIwMSxcbiAgICAgIDIyMSxcbiAgICAgIDkzLFxuICAgICAgMjEyLFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDU4LFxuICAgICAgMjMyLFxuICAgICAgMTAzLFxuICAgICAgMTg3LFxuICAgICAgNzYsXG4gICAgICAxOTksXG4gICAgICA2NixcbiAgICAgIDE5OCxcbiAgICAgIDI0MCxcbiAgICAgIDEyNixcbiAgICAgIDI0NyxcbiAgICAgIDIwMCxcbiAgICAgIDEwLFxuICAgICAgMTAsXG4gICAgICAyMDEsXG4gICAgICAxMTcsXG4gICAgICAyMDYsXG4gICAgICAzMixcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldMRzNUNkhDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDI5NTQ0Mzg2OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MjIzOTAwMjkxMDgwOToxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPNzBvWkVCRU0zdGlyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpNb3U1Smc5dFpnRGw4MkJFUmVGNGVSbndOVmtLMTJwYzJZdU5HSnlpbU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVXpaQXlOZHd0Y1dRMjllN3M0bkd4VS93V21HclBkL0UrQVZ4QU5TMkdUeEx3RnBMZThvRngzWGh2NWVScmRyNTBnb1RiSmU4Qmd3bEJCTFNtRlRVRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibVpQcnlGZnVTcHhFZXorMkxJSWtrcTdXaG92Sk1YN2M1dHFlZEpxdjE5Y2UvVnlMdzlMNUdXR2hCK2txUHpza241ZjJFaXZsNXJpMUhNNjlVOXdlREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAyOTU0NDM4NjoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTM5NjY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1p1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPWnUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1S2tnQWF4NkJ4a21ITHhtZGtOVFVBdGRpNWFOU3hIR2Q0MWRPSnpsQXZBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwNDY0MjY2OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
