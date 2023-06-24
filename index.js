let phoneDisplayEl = document.getElementById("phone-display")
let pagerDisplayEl = document.getElementById("pager-display")


let phoneOutput = ""
let pagerOutput = 0

function key1() {
    phoneDisplayEl.textContent += "1"
    phoneOutput += "1"
}
function key2() {
    phoneDisplayEl.textContent += "2"
    phoneOutput += "2"
}
function key3() {
    phoneDisplayEl.textContent += "3"
    phoneOutput += "3"
}
function key4() {
    phoneDisplayEl.textContent += "4"
    phoneOutput += "4"
}
function key5() {
    phoneDisplayEl.textContent += "5"
    phoneOutput += "5"
}
function key6() {
    phoneDisplayEl.textContent += "6"
    phoneOutput += "6"
}
function key7() {
    phoneDisplayEl.textContent += "7"
    phoneOutput += "7"
}
function key8() {
    phoneDisplayEl.textContent += "8"
    phoneOutput += "8"
}
function key9() {
    phoneDisplayEl.textContent += "9"
    phoneOutput += "9"
}
function key0() {
    phoneDisplayEl.textContent += "0"
    phoneOutput += "0"
}
function keyStar() {
    phoneDisplayEl.textContent += "*"
    phoneOutput += "*"
}
function keyLine() {
    phoneDisplayEl.textContent += "#"
    phoneOutput += "#"
}


function reset() {
    phoneDisplayEl.textContent = ""
    phoneOutput = ""
}

function send() {
    pagerDisplayEl.textContent = phoneOutput
    phoneOutput = ""
    phoneDisplayEl.textContent = ""

}