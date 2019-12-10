const criminalComponent = (criminal) => {


return `
<section class="criminal__card">
  <div>${criminal.name}</div>
  <div>${criminal.age}</div>
  <div>${criminal.conviction}</div>
  <div>${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
  <div>${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
  <div>
  <button id="button--${criminal.id}" class="button--${criminal.id}">View Known Associates</button>
  <dialog class='dialog--known_associates' id="details--${criminal.id}">
    <h4>Known Associates</h4>
    <div>
   ${criminal.known_associates.map(ass =>{
     return ass.name
   }).join(", ")}
    </div>
    <h4>Known Alibi</h4>
    <div>
    ${criminal.known_associates.map(ass =>{
      return ass.alibi
    }).join(", ")}
    </div>
    <button class="button--close">Close Dialog</button>
  </dialog>
  </div>

</section>
`

}
export default criminalComponent