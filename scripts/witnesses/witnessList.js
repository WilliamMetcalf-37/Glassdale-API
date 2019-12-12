import witnessComponent from "./witnesses.js";
import { useWitnesses } from "./witnessDataProvider.js";

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".criminalsContainer");

const witnessListComponent = () => {
 const render = witnessCollection => {
      contentElement.innerHTML = `
      <h2>Witnesses:</h2>
      <section class ="witnessCollection">
  ${witnessCollection
    .map(wit => {
      return witnessComponent(wit);
    })
    .join("")}</section>
  `;
    };
  
  const witnesses = useWitnesses();
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.classList.contains("button--Witness")) {
      render(witnesses);
    }

   
  });
};

export default witnessListComponent;
