import { useCriminals } from "./criminalDataProvider.js"
import criminalComponent from "./criminals.js"
import { useOfficers } from "../officers/OfficerProvider.js"





const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer")



const CriminalListComponent = () =>{

   const criminal = useCriminals()
  const officer = useOfficers()
  // eventHub.addEventListener("crimeSelected", event => {
   
  //   const convictionName = event.detail.conviction
  //   console.log(convictionName)
  //   const filteredCriminals = criminal.filter((criminal) => {
  //     if(criminal.conviction === convictionName)
  //     {
  //       return criminal
  //     }     
  //   })  
  //   render(filteredCriminals) 
  // })

  // eventHub.addEventListener("officerSelected", event => {
   
  //   const arrestingOfficer = event.detail.arrestingOfficer
  //   const filteredOfficers = criminal.filter((criminal) => {
  //     if(criminal.arrestingOfficer.toLowerCase() === arrestingOfficer.toLowerCase())
  //     {
  //       return officer
  //     }     
  //   })  
  //   render(filteredOfficers) 
  // })

eventHub.addEventListener("filter", clickEvent =>{


  const filteredCriminals = criminal.filter((criminal)=>{
    if(clickEvent.detail.officer === "0"){
      
    }
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