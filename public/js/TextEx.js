window.onload = () => {
    document.querySelectorAll('[data-textex]').forEach(text => {
        let params = text.getAttribute('data-textex').split(','),
            anime = params[0]
        if (!anime) return
        text.style.visibility='visible'
        let interval = params[1] ? Number(params[1]) : 200,
            duration = params[2] ? Number(params[2]) : 1000,
            reParams, reAnime, reStyle, reWait
        if (text.getAttribute('data-retex')) {
            reParams = text.getAttribute('data-retex').split(',')
            reAnime = reParams[0]
            reStyle = reParams[1]
            reWait = reParams[2] ? Number(reParams[2]) : 1000
        }
        text.innerHTML = text.textContent
            .replace(/\s/g, '')
            .replace(/(.)/g, '<span class="textex">$1</span>')
        let Timethrough = interval * (text.textContent.length - 1) + duration
        text.childNodes.forEach((word, index) => {
            word.style.display = 'inline-block'
            word.style.position = 'relative'
            word.style.animation = `${anime} ${duration}ms ${interval * index}ms forwards`
            if (reAnime && reStyle) {
                setTimeout(() => {
                    word.style.animationName = reAnime
                    word.setAttribute('style', word.getAttribute('style') + reStyle)
                }, Timethrough + reWait)
            }
        })
    })
}
