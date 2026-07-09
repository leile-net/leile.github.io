class quizresult{
    constructor(quizname, result, link, img, date, bgsticky){
        this.quizname = quizname
        this.result = result
        this.link = link
        this.img = img
        this.datetaken = date
        this.bgstickyid = bgsticky
    }
}

//EXISTING QUIZ RESULTS
const allquizresults = [
new quizresult("MBTI test", "ISTJ-T", "https://www.16personalities.com/free-personality-test", "personalityquizmedia/mbti.png", "6/6/26", 0)
,new quizresult("Enneagram test", "type 2", "https://www.idrlabs.com/open-enneagram/test.php", "personalityquizmedia/enneagram.png", "6/28/26", 3)
,new quizresult("Hello Kitty test", "Pompompurin", "https://www.idrlabs.com/hello-kitty/test.php", "personalityquizmedia/hellokitty.png", "6/30/26", 2)
,new quizresult("Which minor inconvenience are you ", "tangled earphones", "https://uquiz.com/quiz/J1ZBAv/which-minor-inconvenience-are-you", "personalityquizmedia/minorinconvenience.png", "6/30/26", 1)
,new quizresult("Pikmin Bloom Flower Personality Quiz ", "lily", "https://quiz.pikminbloom.com/#/", "personalityquizmedia/pikminflower.webp", "7/1/26", 4)
,new quizresult("Dual-Type Pokemon Personaity type test ", "water monotype + ice/ice dual type", "https://professorbonsly.itch.io/18types", "personalityquizmedia/poke18types.png", "7/1/26", 2)

]
//const allquizresults = [mbtires, enneagramres, ]
//EXISTING QUIZ RESULTS

const allstickies = ["personalityquizmedia/yellosticky.PNG", "personalityquizmedia/orngsticky.PNG",
    "personalityquizmedia/pinksticky.PNG", "personalityquizmedia/bluesticky.PNG", "personalityquizmedia/greensticky.PNG"
]
const allstickycolors = ['darkgoldenrod', 'darkorange', 'deeppink', 'mediumblue', 'green']
const containerdiv = document.getElementById("quizresultscontainer")


function displayquizresults(){

    for (let i = 0; i<allquizresults.length; i++){
        
        cres = allquizresults[i]
        const cresdiv = document.createElement("div")
        cresdiv.classList.add("quizresultdiv")
        const rotate = Math.random() * (20 - (-20)) -20;
        cresdiv.style = "rotate: " + rotate + "deg"
        console.log(rotate)
        
        const stickybg = document.createElement("img")
        stickybg.style = "width: 330px; position: absolute; top: 0px; left: 0px;"
        stickybg.src = allstickies[cres.bgstickyid]
        cresdiv.append(stickybg)

        const restitle = document.createElement("a")
        restitle.textContent = cres.quizname
        restitle.href = cres.link
        restitle.classList.add("linked")
        restitle.target = "_blank"
        restitle.style = "position: relative; top: 20px; left: 20px; font-size: 13px; "
        cresdiv.append(restitle)
        cresdiv.append(document.createElement("br"))
        cresdiv.append(document.createElement("br"))



        const res = document.createElement("p")
        cresdiv.append(res)
        res.textContent = "quiz result: "+ cres.result
        res.style = "position: relative; left: 20px; font-size:13px; width: 300px;"


        const resimg = document.createElement("img")
        resimg.src = cres.img
        resimg.style = "position: relative; left: 20px; max-width:85%; max-height: 170px; border: 2px solid " + allstickycolors[cres.bgstickyid]
        resimg.addEventListener('dblclick', e =>{
            const imgwindow = document.createElement("div")
            imgwindow.id = "imgwindow"
            imgwindow.classList.add("enlargedimgcontainer")
            const bigresimg = document.createElement("img")
            bigresimg.src = resimg.src
            bigresimg.style = "position: relative; margin:auto; max-width:75vw; max-height: 75vh"
            
            imgwindow.append(bigresimg)

            const okbutton = document.createElement("div")
            okbutton.textContent = " x "
            okbutton.style = "position: absolute; top: 10px; right: 10px; width: 20px; text-align: center; background-color: LightCoral; border-style: solid; border-color: padding: 15px; 'black'; border-width:2px;"
            okbutton.id = "okbutton"
            okbutton.addEventListener('click', e =>{
                document.getElementById("imgwindow").remove();
            })
            imgwindow.append(document.createElement("br")); imgwindow.append(document.createElement("br"))

            imgwindow.append(okbutton)
            document.body.appendChild(imgwindow)
            console.log(imgwindow.offsetWidth)
            const sidemargin = ((1-(imgwindow.offsetWidth/window.innerWidth))/2)
            const topmargin = ((1-(imgwindow.offsetHeight/window.innerHeight))/2)
            imgwindow.style = "left: " + String(sidemargin*100) + "vw; position: fixed;" + "top: " + String(topmargin*100) + "vh;"
            

        })
        
        cresdiv.append(resimg)
        cresdiv.append(document.createElement("br"))

        if (i<=1){
            const resdate = document.createElement("a")
            resdate.textContent = "date taken: " + cres.datetaken
            resdate.style = "position: relative; left: 20px; font-size: 13px;"
            resimg.style = "position: relative; left: 20px; max-width:85%; max-height: 170px; border: 2px solid " + allstickycolors[cres.bgstickyid]

            cresdiv.append(resdate)

        }
        

        containerdiv.appendChild(cresdiv)


        //document.body.appendChild(cresdiv)

    }
}
displayquizresults()