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