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



  

eventHub.addEventListener("click", clickEvent => {
if(clickEvent.target.id.startsWith("button--")){
  const dialogSiblingSelector = `#${clickEvent.target.id}+dialog`
             const theDialog = document.querySelector(dialogSiblingSelector)
             theDialog.showModal()
         }

  if(clickEvent.target.classList.contains("button--close")){
    const theDialog = clickEvent.target.parentNode
    theDialog.close();
  }
}

)



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