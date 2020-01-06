import { useCriminals } from "../criminals/criminalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filter__button")

let selectedOfficer = null
let selectedCrime = null
const criminal = useCriminals()

const fullyFilteredCriminals = []
const FilteredCriminals = []

export const FilterComponent = () => {

    eventHub.addEventListener("officerSelected", event => {
      selectedOfficer = event.detail.arrestingOfficer
    })

    eventHub.addEventListener("crimeSelected", event => {
       selectedCrime = event.detail.conviction
    })




  
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "filterButton") {
          const filter = new CustomEvent("filter",{
            detail:{
              crime: selectedCrime,
              officer: selectedOfficer
            }
            
          })
            eventHub.dispatchEvent(filter)



            }
        })
   
      }
  