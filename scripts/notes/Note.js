const noteComponent = (note) =>{
  return `
  <section class="note__card">
<div>${new Date(note.date).toLocaleDateString('en-US')}</div>
<div id="${note.id}--title">${note.title}</div>
<div id="${note.id}--details">${note.details}</div>
<button id="deleteButton--${note.id}">Delete this shitty note</button>
<button id="editButton--${note.id}">Edit this shitty note</button>

</section>
`
}

export default noteComponent