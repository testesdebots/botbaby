exports.wait = () => {
	return`*「❗」ESPERE CARALHO*`
}

exports.succes = () => {
	return`*「 SUCESSO PORRA 」*`
}

exports.lvlon = () => {
	return`*「❗」ATIVAR NIVEL*`
}

exports.lvloff = () => {
	return`*「❗」DESATIVAR NIVEL*`
}

exports.lvlnul = () => {
	return`*「❗」SEU NÍVEL AINDA ESTÁ ZERADO!*`
}

exports.lvlnoon = () => {
	return`*「❗」O NÍVEL DO GRUB NÃO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「❗」NÃO REGISTRADO*\n*Como registrar ${prefix}daftar nome|idade* \n\n*exemplo ${prefix}daftar reizin|15*`
}

exports.baned = () => {
	return`*「❗」DESCULPE, MAN MAS VOCÊ JÁ ESTÁ BANIDO YAHAHAHA HAYUUU :V*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*você registrou ja registrou >_<*`
}

exports.stikga = () => {
	return`*「 FALHOU 」Tente novamente na próxima vez man*`
}

exports.linkga = () => {
	return`*「❗」desculpe o link é inválido*`
}

exports.groupo = () => {
	return`*「❗」SÓ NO GRUPO*`
}

exports.ownerb = () => {
	return`*「❗」PROPRIETÁRIO DO BOT APENAS*`
}

exports.ownerg = () => {
	return`*「❗」SOMENTE GRUPO DE PROPRIETÁRIOS*`
}

exports.admin = () => {
	return`*「❗」SOMENTE GRUPO DE ADMINISTRAÇÃO*`
}

exports.badmin = () => {
	return`*「❗」O BOT DEVE SER ADMINISTRADOR*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW EM ATIVO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*「🤔」Onde está o texto, man?*`
}

exports.clears = () => {
	return`*「🚮」Limpa tudo sucesso*`
}

exports.pc = () => {
	return`*「❗」CADASTRO*\n\n para saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTE:\n*se você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`*「 REGISTRO DE SUCESSO 」*\nPara informações do usuário :\n\n*➸ Nome : ${namaUser}*\n*➸ Numero : wa.me/${sender.split("@")[0]}*\n*➸ Era : ${umurUser}*\n*➸ Hora do registro : ${time}*\n\n*「SN」: ${serialUser}*\n_NOTE : Esta mensagem é muito importante :v_`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado\tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} script do proprietário*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
➸ *Nome* : ${pushname}
➸ *Numero* : wa.me/${sender.split("@")[0]}
➸ *Xp* : ${getLevelingXp(sender)}
➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} O limite de hoje expira*\n*O limite é zerado a cada hora 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
o resto do seu limite : ${limitCounts}

Atualização premium do meu chefe, então é grátis usar bots`
}

exports.satukos = () => {
	return`*Adicionar parâmetros 1/habilitar ou 0/desabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : ${sender.split("@")[0]}\n┃│➸ UANG : ${uangkau}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}