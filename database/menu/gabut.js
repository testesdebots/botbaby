const gabut = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *GABUTZ MENU* ]----- 🔰
Hallo, ${pushname} 👋
Tenha um bom dia, usuários, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot!✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}apakah*
┃│➸ *${prefix}bisakah*
┃│➸ *${prefix}kapankah*
┃│➸ *${prefix}hobby*
┃│➸ *${prefix}rate*
┃│➸ *${prefix}seberapagay*
┃│➸ *${prefix}nangis*
┃│➸ *${prefix}cium*
┃│➸ *${prefix}peluk*
┃│➸ *${prefix}truth*
┃│➸ *${prefix}dare*
┃│➸ *${prefix}timer*
┃│➸ *${prefix}simi*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.gabut = gabut
