let convictions = []

export const getConvictions = () => {
    return fetch("http://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedConvictions => {
               
                convictions = parsedConvictions.slice()
            }
        )
      }
          export const useConvictions = () => {
              return convictions
          }

