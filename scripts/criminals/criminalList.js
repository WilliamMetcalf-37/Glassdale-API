import { useCriminals } from "./criminalDataProvider.js"
import criminalComponent from "./criminals.js"





const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer")



const CriminalListComponent = () =>{

   const criminal = useCriminals()
  
  eventHub.addEventListener("crimeSelected", event => {
   
    const convictionName = event.detail.conviction
    const filteredCriminals = criminal.filter((criminal) => {
      if(criminal.conviction === convictionName)
      {
        return criminal
      }
      
    })
  
    render(filteredCriminals)
    
  })

eventHub.addEventListener("associateButtonClicked", clickEvent => {
const buttonSelected = clickEvent.detail.associate
console.log(buttonSelected)
const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
        const theDialog = document.querySelector(dialogSiblingSelector)
        console.log(dialogSiblingSelector)
              theDialog.showModal()

// const allDetailButtons = document.querySelectorAll("button[id^='button--']")
  
//   for (const btn of allDetailButtons) {
//     btn.addEventListener(
//       "associateButtonClicked",
//       theEvent => {
//         const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
//         const theDialog = document.querySelector(dialogSiblingSelector)
//         console.log(dialogSiblingSelector)
//               theDialog.showModal()
//           }
//       )
//   }
})



  const render = criminalcollection =>{
    contentElement.innerHTML =
    `
    ${
  criminalcollection.map((criminals) => {
    return criminalComponent(criminals)
  }).join("")
  
    }
    `
  }
  render(criminal)
}



export default CriminalListComponent