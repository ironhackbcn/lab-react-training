export const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

export const convertStringToHex = (r,g,b) => {
  let rgb = ''+r+g+b;
let nou = '#'+parseInt(rgb).toString(16);

  return nou;
}