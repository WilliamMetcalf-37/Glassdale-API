const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close");

  for (const btn of allCloseButtons) {
    btn.addEventListener("click", theEvent => {
      const dialogElement = theEvent.target.parentNode;
      dialogElement.close();
    });
  }
const eventHub = document.querySelector(".container")



eventHub.addEventListener("click", clickEvent =>{
  if(clickEvent.target.id.startsWith("button--")){
    const associate = new CustomEvent("associateButtonClick")
    eventHub.dispatchEvent(associate)
  }

})

}

export default initializeDetailButtonEvents