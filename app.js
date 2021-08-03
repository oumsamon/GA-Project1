

const openBtn1 = document.querySelector("#openModal1");
const modal1 = document.querySelector("#modal1");
const close1 = document.getElementById("close1");
const openBtn2 = document.querySelector("#openModal2");
const modal2 = document.querySelector("#modal2");
const close2 = document.querySelector("#close2");
const openBtn3 = document.querySelector("#openModal3");
const modal3 = document.querySelector("#modal3");
const close3 = document.querySelector("#close3");
const openBtn4 = document.querySelector("#openModal4");
const modal4 = document.querySelector("#modal4");
const close4 = document.querySelector("#close4");
const p1score = document.getElementById("p1")
const p2score = document.getElementById("p2")



let player1score = 0
let player2score = 0
let choice1
let choice2
let turn = 0

p2score.innerHTML = player2score
p1score.innerHTML = player1score

openBtn1.addEventListener("click", openModal1 = () => {
    modal1.style.display = "block";
    if(turn == 0) {
        choice1 = openBtn1.id
        console.log(turn)
    console.log(choice1)
    turn = 1
    } else {
        choice2 = openBtn1.id
        console.log(turn)
        console.log(choice2)
        turn = 0
    }
    
})

close1.addEventListener("click", closeModal = () => {
    modal1.style.display = "none"
})


openBtn2.addEventListener("click", openModal2 = () => {
    modal2.style.display = "block";
    if(turn == 0) {
        choice1 = openBtn2.id
        console.log(turn)
    console.log(choice1)
    turn = 1
    } else {
        choice2 = openBtn2.id
        console.log(turn)
        console.log(choice2)
        turn = 0
    }
})

close2.addEventListener("click", closeModal2 = () => {
    modal2.style.display = "none";
})


openBtn3.addEventListener("click", openModal3 = () => {
    modal3.style.display = "block";
    if(turn == 0) {
        choice1 = openBtn3.id
        console.log(turn)
    console.log(choice1)
    turn = 1
    } else {
        choice2 = openBtn3.id
        console.log(turn)
        console.log(choice2)
        turn = 0
    }
})

close3.addEventListener("click", closeModal3 = () => {
    modal3.style.display = "none";
})


openBtn4.addEventListener("click", openModal4 = () => {
    modal4.style.display = "block";
    if(turn == 0) {
        choice1 = openBtn4.id
        console.log(turn)
    console.log(choice1)
    turn = 1
    } else {
        choice2 = openBtn4.id
        console.log(turn)
        console.log(choice2)
        turn = 0
    }
})

close4.addEventListener("click", closeModal4 = () => {
    modal4.style.display = "none";
})


function compareCards() {
    if (choice1 == choice2) {
        //console.log before and after in the terminal.
        player1score.innerHTML(parseInt(player1score.innerHTML) + 10)
        console.log(player1score)
    }

else {
    player1score.innerHTML(parseInt(player1score.innerHTML) - 10)
    console.log(player1score)
}
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