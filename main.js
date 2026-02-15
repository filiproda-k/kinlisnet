let cover = document.getElementById("cover")
let title = document.getElementById("title")

let homeButton = document.getElementById("homeButton")
let liveButton = document.getElementById("liveButton")
let vaultButton = document.getElementById("vaultButton")

let homeContainer = document.getElementById("homeContainer")
let liveContainer = document.getElementById("liveContainer")
let vaultContainer = document.getElementById("vaultContainer")

let vaultTextEntry = document.getElementById("vaultTextEntry")
let vaultEntryButton = document.getElementById("vaultEntryButton")

let mainPage = document.getElementById("mainPage")
let whitePage = document.getElementById("whitePage")
let wayOutPage = document.getElementById("wayOutPage")

let containers = {
    "home" : homeContainer,
    "live" : liveContainer,
    "vault" : vaultContainer,
}

let pages = {
    "main" : mainPage,
    "white" : whitePage,
    "wayout" : wayOutPage,
}

// hi

function SwitchMenu(menuName) {
    for (let[name, menu] of Object.entries(containers)) {
        if (menu == null) {
            continue
        }

        menu.style.opacity = menuName == name && 100 || 0
        menu.style.pointerEvents = menuName == name && "auto" || "none"
    }
}

function SwitchPage(pageName) {
    for (let[name, menu] of Object.entries(pages)) {
        if (menu == null) {
            continue
        }

        menu.style.opacity = pageName == name && 100 || 0
        menu.style.pointerEvents = pageName == name && "auto" || "none"
    }
}

function EnterCode() {
    let code = vaultTextEntry.value
    vaultTextEntry.value = ""

    if (code == "way out") {
        SwitchPage("wayout")
    }
}

homeButton.onclick = function() {
    SwitchMenu("home")
}

liveButton.onclick = function() {
    SwitchMenu("live")
}

vaultButton.onclick = function() {
    SwitchMenu("vault")
}

vaultEntryButton.onclick = function() {
    EnterCode()
}

function EntryAnimation() {
    SwitchMenu("")
    SwitchPage("white")

    setTimeout(function() {
        SwitchPage("main")
    }, 600)

    let toAnimate = {
        1000: cover,
        2000: title,
        3000: homeButton,
        3200: liveButton,
        3400: vaultButton
    }

    let lastDelay = 0

    for (let [delay, element] of Object.entries(toAnimate)) {
        element.style.opacity = 0

        let animTime = (delay - lastDelay) * 0.001
        let animation = "fadeIn forwards " + animTime.toString() + "s"

        setTimeout(function() {
            element.style.animation = animation
        }, delay)

        lastDelay = delay
    }

    setTimeout(function() {
        SwitchMenu("home")
    }, 4000)
}

EntryAnimation()