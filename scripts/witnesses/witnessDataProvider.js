let witnesses = [];

export const getWitnesses = () => {
  return fetch("http://criminals.glassdale.us/witnesses")
    .then(res => res.json())
    .then(parsedWitnesses => {
      witnesses = parsedWitnesses.slice();
    });
};

export const useWitnesses = () => {
  return witnesses;
};
