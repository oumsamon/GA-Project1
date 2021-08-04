

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
const openBtn5 = document.querySelector("#openModal5");
const modal5 = document.querySelector("#modal5");
const close5 = document.getElementById("close5");
const openBtn6 = document.querySelector("#openModal6");
const modal6 = document.querySelector("#modal6");
const close6 = document.querySelector("#close6");
const openBtn7 = document.querySelector("#openModal7");
const modal7 = document.querySelector("#modal7");
const close7 = document.querySelector("#close7");
const openBtn8 = document.querySelector("#openModal8");
const modal8 = document.querySelector("#modal8");
const close8 = document.querySelector("#close8");
const openBtn9 = document.querySelector("#openModal9");
const modal9 = document.querySelector("#modal9");
const close9 = document.querySelector("#close9");
const openBtn10 = document.querySelector("#openModal10");
const modal10 = document.querySelector("#modal10");
const close10 = document.querySelector("#close10");

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
    openBtn1.disabled = true
    } else {
        choice2 = openBtn1.value
        compareCards()
        console.log(turn)
        console.log(choice2)
        turn = 0
    }
    setTimeout(closeModal, 3000)
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
    setTimeout(closeModal2, 3000) 
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
    setTimeout(closeModal3, 3000)
})

close3.addEventListener("click", closeModal3 = () => {
    modal3.style.display = "none";
})
 
openBtn4.addEventListener("click", openModal4 = () => {
    modal4.style.display = "block";
    openBtn4.classList.add("selected")
    if(turn == 0) {
        choice1 = openBtn4.value
    turn = 1
    } else {
        choice2 = openBtn4.value
        compareCards()
        turn = 0
    }
    setTimeout(closeModal4, 3000)
})

close4.addEventListener("click", closeModal4 = () => {
    modal4.style.display = "none";
})

openBtn5.addEventListener("click", openModal5 = () => {
    modal5.style.display = "block";
    openBtn5.classList.add("selected")
    if(turn == 0) {
        choice1 = openBtn5.value
    turn = 1
    } else {
        choice2 = openBtn5.value
        compareCards()
        turn = 0
    }
    setTimeout(closeModal, 3000)
})

close5.addEventListener("click", closeModal5 = () => {
    modal5.style.display = "none";
})

openBtn6.addEventListener("click", openModal6 = () => {
    modal6.style.display = "block";
    openBtn6.classList.add("selected")
    if(turn == 0) {
        choice1 = openBtn6.value
    turn = 1
    } else {
        choice2 = openBtn6.value
        compareCards()
        turn = 0
    }
    setTimeout(closeModal6, 000)
})

close6.addEventListener("click", closeModal6 = () => {
    modal6.style.display = "none";
})
 
openBtn7.addEventListener("click", openModal7 = () => {
    modal7.style.display = "block";
    openBtn7.classList.add("selected")
    if(turn == 0) {
        choice1 = openBtn7.value
    turn = 1
    } else {
        choice2 = openBtn7.value
        compareCards()
        turn = 0
    }
    setTimeout(closeModal7, 3000)
})

close7.addEventListener("click", closeModal7 = () => {
    modal7.style.display = "none";
})
 
openBtn8.addEventListener("click", openModal8 = () => {
    modal8.style.display = "block";
    openBtn8.classList.add("selected")
    if(turn == 0) {
        choice1 = openBtn8.value
    turn = 1
    } else {
        choice2 = openBtn8.value
        compareCards()
        turn = 0
    }
    setTimeout(closeModal8, 3000)
})

close8.addEventListener("click", closeModal8 = () => {
    modal8.style.display = "none";
})

openBtn9.addEventListener("click", openModal9 = () => {
    modal9.style.display = "block";
    openBtn9.classList.add("selected")
    if(turn == 0) {
        choice1 = openBtn9.value
    turn = 1
    } else {
        choice2 = openBtn9.value
        compareCards()
        turn = 0
    }
    setTimeout(closeModal9, 000)
})

close9.addEventListener("click", closeModal9 = () => {
    modal9.style.display = "none";
})
 
openBtn10.addEventListener("click", openModal10 = () => {
    modal10.style.display = "block";
    openBtn10.classList.add("selected")
    if(turn == 0) {
        choice1 = openBtn10.value
    turn = 1
    } else {
        choice2 = openBtn10.value
        compareCards()
        turn = 0
    }
    setTimeout(closeModal10, 3000)
})

close10.addEventListener("click", closeModal10 = () => {
    modal10.style.display = "none";
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
        window.alert("You are correct!");
    } else {
        player1score = player1score - 5
        console.log("player1score inside", player1score)
        p1score.innerHTML = player1score
        window.alert("Please try again!");  
    }

//to remove the selected class    
openBtn1.classList.remove("selected");
openBtn2.classList.remove("selected");
openBtn3.classList.remove("selected");
openBtn4.classList.remove("selected");
}
