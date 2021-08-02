console.log("working")

//coding a pop up.
//grab the game button
const openBtn1 = document.querySelector("#openModal1");

//grabbing the modal
const modal1 = document.querySelector("#modal1");


//grabbig the close button
const close1 = document.getElementById("close1");


//Function to change modal display to block
const openModal = () => {
    modal1.style.display = "block";
}


const closeModal = () => {
    modal1.style.display = "none"
}

//adding event listener
openBtn1.addEventListener("click", openModal)

//adding event listener
close1.addEventListener("click", closeModal)

//setTimeout(openModal, 2000)  - this will pop out the modal without click
//setTimeout(closeModal, 10000) - this will remove the display modal.

const openBtn2 = document.querySelector("#openModal2");
const modal2 = document.querySelector("#modal2");
const close2 = document.querySelector("#close2");



openBtn2.addEventListener("click", openModal2 = () => {
    modal2.style.display = "block";
})

close2.addEventListener("click", closeModal2 = () => {
    modal2.style.display = "none";
})

const openBtn3 = document.querySelector("#openModal3");
const modal3 = document.querySelector("#modal3");
const close3 = document.querySelector("#close3");



openBtn3.addEventListener("click", openModal3 = () => {
    modal3.style.display = "block";
})

close3.addEventListener("click", closeModal3 = () => {
    modal3.style.display = "none";
})

const openBtn4 = document.querySelector("#openModal4");
const modal4 = document.querySelector("#modal4");
const close4 = document.querySelector("#close4");



openBtn4.addEventListener("click", openModal4 = () => {
    modal4.style.display = "block";
})

close4.addEventListener("click", closeModal4 = () => {
    modal4.style.display = "none";
})