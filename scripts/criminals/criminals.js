const criminalComponent = (criminal) => {
return `
<section class="criminal__card">
<div>${criminal.name}</div>
<div>${criminal.age}</div>
<div>${criminal.conviction}</div>
<div>${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
<div>${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
</section>
`

}
export default criminalComponent