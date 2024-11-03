const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "panel.skycastle.us"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaXKAEoKmCPS6Jz7sw0N";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaXKAEoKmCPS6Jz7sw0N" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://ibb.co/4K2WH0G" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_14_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5LFxuICAgICAgICAzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk1LFxuICAgICAgICA4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU5LFxuICAgICAgICAyOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDk2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODgsXG4gICAgICAgIDM3LFxuICAgICAgICA1MyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDMzLFxuICAgICAgICA2LFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkxLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwLFxuICAgICAgICA5NixcbiAgICAgICAgMjA0LFxuICAgICAgICA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MixcbiAgICAgICAgNixcbiAgICAgICAgMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgODksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRIZUVMU1VHUmZCTllCemlBdUo4dFpKdk9iVjJ3YkRIdVkvenhpMVBvcDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlQyazlkYnZTUUFHUUJUR3FucUZjVGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWUwYTU5ZDctZjAyMy00N2M4LTk1YzMtYTYwYjU3Yzc1OGZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDQyLFxuICAgICAgMjA2LFxuICAgICAgNzcsXG4gICAgICAyMjYsXG4gICAgICAyMDIsXG4gICAgICA5MSxcbiAgICAgIDEzMSxcbiAgICAgIDIwMixcbiAgICAgIDEwNSxcbiAgICAgIDkxLFxuICAgICAgMjE1LFxuICAgICAgMTAyLFxuICAgICAgMjEyLFxuICAgICAgMTYzLFxuICAgICAgOTYsXG4gICAgICAxMDUsXG4gICAgICAxMjcsXG4gICAgICAyNDEsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMjQ4LFxuICAgICAgMTU3LFxuICAgICAgMjU1LFxuICAgICAgMTczLFxuICAgICAgMTUxLFxuICAgICAgMjA1LFxuICAgICAgNjIsXG4gICAgICA5MCxcbiAgICAgIDI0LFxuICAgICAgMjE4LFxuICAgICAgMTMzLFxuICAgICAgODEsXG4gICAgICAxMTMsXG4gICAgICAxMSxcbiAgICAgIDYzLFxuICAgICAgNzgsXG4gICAgICAxMTMsXG4gICAgICAxMTQsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkQ5RTNGRkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODkzMzY5OTI6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBSSBPZiBMYXV0ZWNoXCIsXG4gICAgXCJsaWRcIjogXCIxMjk3OTg0NTgzNDM1MDI6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2pLaktVRkVNanJuN2tHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0QW9ISXlkRWc4a1pUNTE0aVNLNUlZbnY5WXFwekwyd3VTUCtvUEI3bmlzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVYNDNBcXl4OFE4Y2U1NWdUZ2dSVytHeVJvT1pOYlVwT1BLTEJLbUp5akRGMkpPRHMxZkhaNitBZ050NE1PTHZabXlYNUhNVmw0K25rN2QvNGZ3cUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlE3MUs2MmFWWnQ2Q1RFbllBV1ZobnlPd3RmeWxGVnlEVWpwcytSMGJKM3pKODNERTBuYmFZb1Fzc0hIMkw2KytTaVg1TDcrUFo4MUxkelA1L2QwQWlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODkzMzY5OTI6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA2NzIwNzdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD_Ai Of Lautech",
  ownername:process.env.OWNER_NAME|| "Suhail-X_Ai Of Lautech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
