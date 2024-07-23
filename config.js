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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_54_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDk3LFxuICAgICAgICAyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc4LFxuICAgICAgICAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDkzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3LFxuICAgICAgICA5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU1LFxuICAgICAgICA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVPTXlEWUhYLzV2Z3JPbHlNdk5sWFBRdURsamNkZlJCcXRsNjNvVUxkeUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1BckQyRlh0VE1Hbk00NHptZktqUUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTcxYjJlMDQtYmZhNy00MGY4LWI0ZGYtMjIyMDY2NDE4ZDYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM3LFxuICAgICAgMTE3LFxuICAgICAgMjE3LFxuICAgICAgMTU5LFxuICAgICAgODgsXG4gICAgICA5MCxcbiAgICAgIDE3LFxuICAgICAgMjMzLFxuICAgICAgMjMzLFxuICAgICAgMjIzLFxuICAgICAgMTQzLFxuICAgICAgNjQsXG4gICAgICAxOSxcbiAgICAgIDMwLFxuICAgICAgMTQ4LFxuICAgICAgMTkyLFxuICAgICAgMjM5LFxuICAgICAgNTMsXG4gICAgICAyMTYsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgNjgsXG4gICAgICA3OCxcbiAgICAgIDIzNyxcbiAgICAgIDg2LFxuICAgICAgMTA0LFxuICAgICAgMTIzLFxuICAgICAgMTU5LFxuICAgICAgNzQsXG4gICAgICAxODYsXG4gICAgICA4LFxuICAgICAgMTIzLFxuICAgICAgMTIsXG4gICAgICAxNzQsXG4gICAgICA1OSxcbiAgICAgIDIxMixcbiAgICAgIDg2LFxuICAgICAgMTg4LFxuICAgICAgMTcsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVlRDM1ZaVDZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMjk1NDQzODY6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkyMjM5MDAyOTEwODA5OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08zMG9aRUJFS2JwZ0xVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSk1vdTVKZzl0WmdEbDgyQkVSZUY0ZVJud05Wa0sxMnBjMll1TkdKeWltTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXemhWWW1yb3JTMFNMMG9GQVJjNkdzYjVyd2d5YzcxTzd3OENvVTRoQTFGSTBhSjhrTjBFOEN5N1k3bkFrVitsUHV6SGViWFNtbVZQWlFoMVZFcXBEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNaTk1VjZUMkVRanFmaWJSUVRBNkpzSWNOZGFxN1A3WTA3SnVBdTQ0VW5YbEZwNGhyalBJalpraDVwVHhrVmhTSCtuOFJVeW9JWFBzZ1laMlM4NmNCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDI5NTQ0Mzg2OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3NzUyNzRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
