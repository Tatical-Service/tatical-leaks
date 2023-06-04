var FistQuestionPage = {
    'TATICAL ENGINE': {
        value: 'engine',
        id: 'tca-engine',
        nome: 'Tatical Engine',
        img: 'https://media.discordapp.net/attachments/1064105595797520484/1114848324235825183/tcaengine.png?width=563&height=563'
    },
    'TATICAL LEAKS': {
        value: 'leaks',
        id: 'tca-leaks',
        nome: 'Tatical Leaks',
        img: 'https://media.discordapp.net/attachments/1112439680416358430/1112480856544657418/taticalLeaks2.png?width=675&height=675'
    },
    'TATICAL DEVELOPMNET': {
        value: 'development',
        id: 'tca-development',
        nome: 'Tatical Development',
        img: 'https://media.discordapp.net/attachments/1064105595797520484/1114906067965595778/tcadev.png?width=563&height=563'
    },
    'TATICAL ANTICHEAT': {
        value: 'acnticheat',
        id: 'tca-ac',
        nome: 'Tatical Anticheat',
        img: 'https://media.discordapp.net/attachments/1064105595797520484/1114907786090926090/ac.png?width=563&height=563'
    },
}

function inizializeFirstQuestions() {
    for (const k in FistQuestionPage) {
        const v = FistQuestionPage[k];
        let html = `
        <input class="relative left-[0%] border-solid border-[2.5px] cursor-pointer border-zinc-700 rounded-[12px] hover:border-zinc-400 transition-all duration-500 ease-in-out w-[33vh] h-[6vh]" type="radio" id="${v.id}" name="radioFruit" value="${v.value}">
        <label class="text-white xs:text-left sm:text-left relative left-[0%] top-[0%] font-[Inter] text-[1.5vmin] relative left-[10%] mr-[-3.5%] border-solid border-[2.5px] cursor-pointer border-zinc-700 rounded-[12px] hover:border-zinc-400 transition-all duration-500 ease-in-out xs:w-[80%] sm:w-[80%] md:w-[33vh] h-[6vh] mb-5" for="${v.id}"><b class='relative xs:left-[20%] sm:left-[13%] md:left-[20%] xs:text-[2.7vmin] xs:top-[30%] sm:top-[30%] md:top-[35%] md:ml-3 2xs:ml-3 2xs:text-[3.8vmin]'>${v.nome}</b></label>
        <img class='relative xs:left-[-62%] sm:left-[-65%] md:left-[-24%] top-[0%] w-[6vh] h-[6vh]' src='${v.img}'>
        `
        $('#main').append(html)
    }
}

inizializeFirstQuestions()

function choose(th) {
    const scelta = $(th).attr('data-scelta').toUpperCase()
    localStorage.setItem('id', scelta);
}

{/* <div id="${v.id}" onclick="choose(this); toggleSelected(this)" data-scelta = '${v.id}' class="relative left-[10%] mr-4 border-solid border-[2.5px] cursor-pointer border-zinc-700 rounded-[12px] hover:border-zinc-400 transition-all duration-500 ease-in-out w-[33vh] h-[6vh]">
<img class='absolute left-[2%] top-[-10%] w-[6vh] h-[6vh]' src='${v.img}'>
<h1 class="text-white relative left-[20%] top-[25%] font-[Inter] text-[1.7vmin]"><b>${v.nome}</b></h1>
</div> */}