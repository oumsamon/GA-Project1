

const openBtn1 = document.querySelector("#openModal1");
const modal1 = document.querySelector("#modal1");
const close1 = document.getElementById("close1");

const openModal = () => {
    modal1.style.display = "block";
    let card1 = document.querySelector(".img").src
}

const closeModal = () => {
    modal1.style.display = "none"
}

openBtn1.addEventListener("click", openModal)

close1.addEventListener("click", closeModal)

const openBtn2 = document.querySelector("#openModal2");
const modal2 = document.querySelector("#modal2");
const close2 = document.querySelector("#close2");

openBtn2.addEventListener("click", openModal2 = () => {
    modal2.style.display = "block";
    let card2 = document.querySelector("#card2").src
})

close2.addEventListener("click", closeModal2 = () => {
    modal2.style.display = "none";
})

const openBtn3 = document.querySelector("#openModal3");
const modal3 = document.querySelector("#modal3");
const close3 = document.querySelector("#close3");


openBtn3.addEventListener("click", openModal3 = () => {
    modal3.style.display = "block";
    let card3 = document.querySelector("#card3").src
})

close3.addEventListener("click", closeModal3 = () => {
    modal3.style.display = "none";
})

const openBtn4 = document.querySelector("#openModal4");
const modal4 = document.querySelector("#modal4");
const close4 = document.querySelector("#close4");

openBtn4.addEventListener("click", openModal4 = () => {
    modal4.style.display = "block";
    let card4 = document.querySelector("#card4").src
})

close4.addEventListener("click", closeModal4 = () => {
    modal4.style.display = "none";
})


// working in J.

console.log(card1, card2, card3, card4)

let player1score = 0
let player2score = 0

const p1score = document.getElementById("p1")
const p2score = document.getElementById("p2")

p2score.innerHTML = player2score
p1score.innerHTML = player1score


console.log(player1score)
function compareCards() {
    if (card1 == card3) {
        //console.log before and after in the terminal.
        player1score.innerHTML(parseInt(player1score.innerHTML) + 10)
        console.log(player1score)
    }

else {score--}
}

//compareCards()






// //setTimeout(openModal, 2000)  - this will pop out the modal without click
// setTimeout(closeModal, 10000) 
// //this will remove the display modal.
// setTimeout(closeModal2, 10000) 
// setTimeout(closeModal3, 10000) 
// setTimeout(closeModal4, 10000) 

// const gameReset = document.querySelector(".resetButton")

// gameReset.addEventListener("click", location.reload())