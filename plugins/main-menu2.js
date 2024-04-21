import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Karachi').format('HH')
let wib = moment.tz('Asia/Karachi').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ تعذر العثور عللى المستخدم في قاعدة البيانات`
let pp = (thumb)
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = ` *☠️𝙾𝚁𝙰𝙷𝙰𝚁𝙰..♪*


╮━⊱「مرحبا بك في قائمة الاوامر⊱━╭

│📚✫ - 「${usedPrefix}اوامر-المطور
│📚✫ - 「${usedPrefix}التعلم
│💌✫ - 「${usedPrefix}البوت
│🧬✫ - 「${usedPrefix}المجموعة
│📥✫ - 「${usedPrefix}التنزيل
│🧰✫ - 「${usedPrefix}الادوات
│🎨✫ - 「${usedPrefix}الملصقات
│🎉✫ - 「${usedPrefix}الترفيه
│🎮✫ - 「${usedPrefix}الالعاب
│🎩✫ - 「${usedPrefix}الوغو

│ *${usedPrefix}اوامر2 (عرض قائمة الاوامر)*

│ *${usedPrefix}اوامر3 (عرض الاوامر المميزة)*

│ *${usedPrefix}لست (عرض جميع الاوامر)*

│ *${greeting}*

╯━━━━━━━━━━━━━━━━╰
📚 *_عبارة اليوم: ${quote}_* 📚
`


    conn.sendFile(m.chat, pp, 'prefil.jpg', str, m, false)
    m.react(done)

}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['اوامر', 'الاوامر','أوامر','الأوامر'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Asia/Karachi').format('HH')
      let res = "طاب يومكم🌇"
      if (time >= 4) {
        res = "طاب يومكم🌇"
      }
      if (time >= 10) {
        res = "طاب يومكم🌇"
     }
      if (time >= 15) {
        res = "طاب يومكم🌇"
      }
      if (time >= 18) {
        res = "طاب يومكم🌇"
      }
      return res
    }
    const quotes = [
      "انا لست كسول, انا فقط بوضع حفظ الطاقة.",
      "الحياة قصيرة, اضحك بينما مازلت تمتلك اسنان.",
      "قد يكون تاثيري سيئا, لكن المهم اني مستمتع!",
      "اخبرت زوجتي انه يجب ان تتقبل اخطائها... قامت بمعانقتي.",
"أنا جيد جدًا في القيام بأكثر من مهمة واحدة. يمكنني إضاعة الوقت وعدم الإنتاجية والتسويف كلها في آن واحد.",
"تعرف أنك تشيخ عندما تنحني لربط حذائك وتتساءل ماذا يمكنك فعله بينما أنت هناك.",
"أنا جيد جدًا في النوم، يمكنني القيام بذلك بعيني مغلقتين.",
"إذا كنت تعتقد أن لا أحد يهتم بوجودك، فجرب أن تتخطى بعض المدفوعات.",
"كنت أعتقد أنني لا أستطيع اتخاذ قرار، ولكن الآن لست متأكدًا.",
"إذا لم تستطع إقناعهم، فأحجمهم.",
"قلت لزوجتي إنها ترسم حاجبيها مرتفعة جدًا. بدت متفاجئة.",
"أنا لست أتعثر، أنا فقط في مهمة لاختبار الجاذبية.",
"قلت لزوجتي إنها يجب أن تقوم بالمزيد من الضغطات. قالت: 'يمكنني القيام بمئة!' لذا عدت إلى عشرة وتوقفت.",
"الحياة مثل صندوق من الشوكولاتة؛ لا تدوم طويلاً إذا كنت جائعًا.",
"أنا لا أقول إنني واندر وومان، أنا فقط أقول أنه لم ير أحدنا معًا في الغرفة نفسها.",
"لماذا يطلقون عليه النوم الجميل عندما تستيقظ وتبدو وكأنك ترووول؟",
"لا أفقد هاتفي دائمًا، ولكن عندما أفعل، فإنه دائمًا في وضع الصمت.",
"سريري مكان سحري حيث أتذكر فجأة كل ما كان يجب علي فعله.",
"أحب الصوت الذي تصدره عندما تسكت.",
"أنا لا أجادل، أنا فقط أوضح لماذا أنا على حق.",
"أنا لست أحمقًا كاملًا، بعض الأجزاء مفقودة.",
"عندما تعطيك الحياة ليمونًا، فقم برش شخص ما في عينه.",
"لا أحتاج إلى إدارة الغضب. أنت فقط بحاجة إلى التوقف عن جعلي غاضبًا.",
"أنا لست أقول إنني باتمان، أنا فقط أقول أنه لم ير أحدنا معًا في الغرفة نفسها.",
"أنا لست أقول إنني سوبرمان، أنا فقط أقول أنه لم ير أحدنا معًا في الغرفة نفسها.",
"أنا لست أقول إنني سبايدر مان، أنا فقط أقول أنه لم ير أحدنا معًا في الغرفة نفسها.",
"أنا لست أقول إنني بطل خارق، أنا فقط أقول أنه لم ير أحدنا معًا في الغرفة نفسها.",
];
