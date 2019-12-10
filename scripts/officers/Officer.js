import { useOfficers } from "./OfficerProvider.js";

const contentTarget = document.querySelector(".filters__officer");

const officerSelect = () => {
  const officers = useOfficers();
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
