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
    console.table(filteredCriminals)
    render(filteredCriminals)
    
  })
}


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


export default CriminalListComponent