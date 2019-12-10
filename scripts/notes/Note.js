const noteComponent = (note) =>{
  return `
  <section class="note__card">
<div>${new Date(note.date).toLocaleDateString('en-US')}</div>
<div>${note.title}</div>
<div>${note.details}</div>
</section>
`
}

export default noteComponent