const witnessComponent = wit =>{
  return `
  <section class = "witness__Card">
  <div>Who: ${wit.name}</div>
  <div>What: ${wit.statements}</div>
  </section>`
}

export default witnessComponent