

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

let player1score = 0
let choice1
let choice2
let turn = 0

p1score.innerHTML = player1score

openBtn1.addEventListener("click", openModal1 = () => {
    modal1.style.display = "block";
    openBtn1.classList.add("selected")
    if(turn == 0) {
        //i added value to correctly match each other for the function.
        choice1 = openBtn1.value
      
        console.log(turn)
    console.log(choice1)
    turn = 1
    } else {
        choice2 = openBtn1.value
        compareCards()
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
    openBtn2.classList.add("selected")
    if(turn == 0) {
        choice1 = openBtn2.value
        
       
        console.log(turn)
    console.log(choice1)
    turn = 1
    } else {
        choice2 = openBtn2.value
        compareCards()
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
    openBtn3.classList.add("selected")
    if(turn == 0) {
        choice1 = openBtn3.value
       
        console.log(turn)
    console.log(choice1)
    turn = 1
    } else {
        choice2 = openBtn3.value
        compareCards()
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
    openBtn4.classList.add("selected")
    if(turn == 0) {
        choice1 = openBtn4.value
        console.log(turn)
      
    console.log(choice1)
    turn = 1
    } else {
        choice2 = openBtn4.value
        console.log(turn)
compareCards()


        console.log(choice2)
        turn = 0
    }
})

close4.addEventListener("click", closeModal4 = () => {
    modal4.style.display = "none";
})


function compareCards() {
    console.log("compare card working?")
    if (choice1 == choice2) {
        //update player score to increment by 10
        player1score = player1score+ 10
        console.log("player1score inside", player1score)
        //display the updated player score on the DOM.
        p1score.innerHTML = player1score
        //im selecting all of the button that have selected from DOM
        console.log("look here for selected buttons", document.querySelectorAll(".selected"))
        //i a grabbing the button that have selected class inside them
        const selectedButtons = document.querySelectorAll('.selected');
        selectedButtons.forEach(btn => {
            //i created a var btn to represent Each of the btn that selected. then make it red.
            btn.style.backgroundColor = "green"
            btn.disabled = true

            console.log("what is this", btn)
        });
    } else {
        player1score = player1score - 5
        console.log("player1score inside", player1score)
        p1score.innerHTML = player1score  
    }

//to remove the selected class    
openBtn1.classList.remove("selected");
openBtn2.classList.remove("selected");
openBtn3.classList.remove("selected");
openBtn4.classList.remove("selected");
}








// //setTimeout(openModal, 2000)  - this will pop out the modal without click
// setTimeout(closeModal, 10000) 
// //this will remove the display modal.
// setTimeout(closeModal2, 10000) 
// setTimeout(closeModal3, 10000) 
// setTimeout(closeModal4, 10000) 

// const gameReset = document.querySelector(".resetButton")

// gameReset.addEventListener("click", location.reload())