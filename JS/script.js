/* Introdução */

const history = {

    history: document.getElementById("history"),
    alien: document.getElementById("alien-history"),
    area: document.getElementById("history-area"),
    text:{

        track: 0,
        area: document.getElementById("text-area"),
        p: document.getElementById("text"),
        tempo: 200,
        espaco: 0,
        text: ["P", "r", "e", "c", "i", "s", "a", "m", "o", "s", " ", " e", "n", "c", "o", "n", "t", "r", "á", "-", "l", "o",
               " n", "ã", "o", " s", "a", "b", "e", "m", "o", "s", " o", "s", " r", "i", "s", "c", "o", "s", " q", "u", "e",
               " e", "l", "e", " p", "o", "d", "e", " c", "a", "u", "s", "a", "r", "!", "\n", "\n", "N", "ó", "s", /*" d", "o", " q", 
               "u", "a", "r", "t", "e", "l" */, " a", "c", "r", "e", "d", "i", "t", "a", "m", "o", "s", " q", "u", "e", " v", "o", "c", "ê",
               " s", "e", "j", "a", " o", " m", "a", "i", "s", " p", "r", "e" , "p", "a", "r", "a", "d", "o", " p", "a", "r", "a", " e", "n",
               "c", "o", "n", "t", "r", "a", "r", " o", " q", "u", "e", " q", "u", "e", "r", " q", "u", "e", " e", "l", "e", " s", "e", "j", "a", ".",
               "\n", "\n", "A", "s", "s", ":", " G", "e", "n", "e", "r", "a", "l", ".",
            ],

    }

}

const game = {

    game: document.getElementById("game"),
    life1: document.getElementById("life1"),
    life2: document.getElementById("life2"),
    life3: document.getElementById("life3"),

}

function clearAlienHistory(){

    console.log(history.alien)
    console.log(history.area)
    console.log(history.text.area)

    setTimeout(() => {

        history.alien.style.display = "none"

    }, 1950)

    setTimeout(() => {

        history.area.style.display = "none"
        history.text.area.style.display = "flex"

        history.text.text.forEach((caractere) => {

            setTimeout(() => {

                history.text.p.innerText += caractere;

                setTimeout(() => {

                    history.history.style.display = "none"
                    game.game.style.display = "flex"
                    
                    setTimeout(() => {

                        alert(document.getElementById("arvores").style.paddingLeft)

                    },500)
                
                },history.text.tempo * 1.5)

            },history.text.tempo)

            history.text.tempo += 100
            
        });

    }, 2050)

}

/* ----------------------------------- */

clearAlienHistory()
