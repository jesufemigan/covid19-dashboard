export const notEmptyObject = (obj) => {
  return Object.keys(obj).length !== 0
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}