import { useOfficers } from "./OfficerProvider.js";

const contentTarget = document.querySelector(".filters__officer");

const officerSelect = () => {
  const officers = useOfficers();

  // eventHub.addEventListener("change", changeEvent =>{
  //   if(changeEvent.target.classList.contains("crimeSelect")){
  //     const selectedOfficer = changeEvent.target.value

  //     const officer = new CustomEvent("crimeSelected", {
  //       detail:{
  //         AresstingOfficer: selectedOfficer
  //       }
  //     })
  //     eventHub.dispatchEvent(officer)
  //   }
  // })






  const render = officerCollection => {
    /*
       Use interpolation here to invoke the map() method on
       the convictionsCollection to generate the option elements.
       Look back at the example provided above.
   */

    contentTarget.innerHTML = `
       <select class="dropdown" id="officerSelect">
           <option value="0">Please select an officer...</option>
           ${officers
             .map(officer => `<option value="${officer}" id="officer--${officer}">${officer}</option>`)
             .join("")}
       </select>
   `;
  };
  render(officers);
};

export default officerSelect;
