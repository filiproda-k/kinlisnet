let homeButton = document.getElementById("homeButton")
let liveButton = document.getElementById("liveButton")
let vaultButton = document.getElementById("vaultButton")

let homeContainer = document.getElementById("homeContainer")
let liveContainer = document.getElementById("liveContainer")
let vaultContainer = document.getElementById("vaultContainer")

let containers = {
    "home" : homeContainer,
    "live" : liveContainer,
    "vault" : vaultContainer,
}

function SwitchMenu(menuName) {
    for (let[name, menu] of Object.entries(containers)) {
        if (menu == null) {
            continue
        }

        menu.style.opacity = menuName == name && 100 || 0
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

SwitchMenu("vault")