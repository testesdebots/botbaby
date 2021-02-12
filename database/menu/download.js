const download = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *DOWNLOAD MENU* ]----- 🔰
Oiiii, ${pushname} 👋
Tenha um bom dia, usuários ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot! ✨
Se você não entende, digite *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}play*
┃│➸ *${prefix}yutubdl*
┃│➸ *${prefix}tiktod*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.download = download