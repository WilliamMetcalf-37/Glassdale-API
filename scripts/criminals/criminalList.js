import { useCriminals } from "./criminalDataProvider.js"
import criminalComponent from "./criminals.js"
import { useOfficers } from "../officers/OfficerProvider.js"





const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer")



const CriminalListComponent = () =>{

   const criminal = useCriminals()
  const officer = useOfficers()


eventHub.addEventListener("filter", clickEvent =>{


  const filteredCriminals = criminal.filter((criminal)=>{
      
      if(criminal.conviction.toLowerCase() === clickEvent.detail.crime.toLowerCase() &&
        criminal.arrestingOfficer.toLowerCase()=== clickEvent.detail.officer.toLowerCase())
       {
         return criminal
       }
      
      
    })
   
    render(filteredCriminals)
  })

  

eventHub.addEventListener("click", clickEvent => {
if(clickEvent.target.id.startsWith("associate--")){
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