class project{
    constructor(title, desc, access, id){
        this.title = title;
        this.desc = desc;
        this.access = access;
        this.id = id
        localStorage.setItem(this.id, JSON.stringify(this))
    }
}

// EXISTING PROJECTS
var allprojects = ["siteproject", "dieinaholeproject", "dosmthappproject"]
const siteproject = new project("this site", "my personal website :>", "you're already here!", "siteproject")
const dieinaholeproject = new project("die in a hole", 
    "do you ever feel like dying in a hole? then this is the website for you!", 
    "go to <a href = 'https://leile-net.github.io/dieinahole.github.io/' style = 'color= black;'>this link</a>", 
    "dieinaholeproject")
const dosmthappproject = new project ("do something app", "an app that randomly gives you something to do (it's actually basically just a spinner), i think this only works for mac", 
    "1. go to <a href = 'https://drive.google.com/file/d/140YvRFbS4Pg5RbtA77IW3AHw8z_0jlHE/view?usp=sharing' style = 'color = black;'>this link</a> and download the dmg file <br> 2. open the dmg file and drag the app to your applications folder <br> 3. run this command in terminal: xattr -cr /Applications/dosmthapp.app"
    ,"dosmthappproject")

// EXISTING PROJECTS





function initproject(projectname){
    const projectbutton = document.getElementById(projectname);
    console.log(projectname)
    projectbutton.addEventListener('click', e => {
        if (document.getElementById("projectwindow") == null) {
            // project window
            const projectwindow = document.createElement("div")
            projectwindow.id = "projectwindow"
            projectwindow.classList.add("projectwindow")
            projectwindow.append(document.createElement("br"))

            // add project info to window
            const cproject = JSON.parse(localStorage.getItem(projectname))

            const projecttitle = document.createElement("div")
            console.log(cproject.title)
            projecttitle.textContent = cproject.title
            projecttitle.style.textAlign = "center"
            projectwindow.append(projecttitle)
            projectwindow.append(document.createElement("br"))


            const projectdesc = document.createElement("div")
            console.log(cproject.desc)
            projectdesc.textContent = "description: ".concat(cproject.desc)
            projectdesc.style.marginLeft = "20px"
            projectwindow.append(projectdesc)
            projectwindow.append(document.createElement("br"))


            const projectaccess = document.createElement("div")
            console.log(cproject.access)
            projectaccess.innerHTML = "how to use/access: <br>".concat(cproject.access)
            projectaccess.style.marginLeft = "20px"
            projectwindow.append(projectaccess)
            projectwindow.append(document.createElement("br"))

            
            // project window close button
            const projectwindowclosebutton = document.createElement("div")
            projectwindowclosebutton.textContent = "close"
            projectwindowclosebutton.style.textAlign = "center"
            projectwindowclosebutton.id = "projectwindowclosebutton"
            projectwindowclosebutton.addEventListener('click', e => {
                    projectwindow.remove()
                }
            )
            projectwindow.append(projectwindowclosebutton)


            // append project window to document
            document.body.appendChild(projectwindow)

        } 
        }
    )

}

allprojects.forEach(initproject)