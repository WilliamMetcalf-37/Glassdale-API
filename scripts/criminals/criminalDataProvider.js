let criminals = []

const getCriminals = () => {
    return fetch("http://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                
                criminals = parsedCriminals.slice()
                
            }
        )
      }
          export const useCriminals = () => {
              return criminals
          }
          


export default getCriminals