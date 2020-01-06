/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./convictionsProvider.js"
// Get a reference to the DOM element where the <select> will be rendered

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")




const ConvictionSelect = () => {
  const convictions = useConvictions()
    // Get all convictions from application state

  eventHub.addEventListener("change", changeEvent =>{
    if(changeEvent.target.classList.contains("crimeSelect")){
      const selectedConviction = changeEvent.target.value

      const criminal = new CustomEvent("crimeSelected", {
        detail:{
          conviction: selectedConviction
        }
      })
      eventHub.dispatchEvent(criminal)
    }
  })






    const render = convictionsCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML = `
            <select class="dropdown crimeSelect select-css" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${convictions.map(crime => `<option value="${crime}">${crime}</option>`).join("")}

            </select>
        `
    }

    render(convictions)
    }

export default ConvictionSelect