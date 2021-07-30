console.log("working")

//coding a pop up.
//grab the game button
const openBtn = document.querySelector(".modal-buttons");

//grabbing the modal
const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal1");

//grabbig the close button
const close = document.getElementById("close");


//Function to change modal display to block
const openModal = () => {
    modal.style.display = "block";
}
console.log("modal working?")

const closeModal = () => {
    modal.style.display = "none"
}

//adding event listener
openBtn.addEventListener("click", openModal)

//adding event listener
close.addEventListener("click", closeModal)

//setTimeout(openModal, 2000)  - this will pop out the modal without click
//setTimeout(closeModal, 10000) - this will remove the display modal.