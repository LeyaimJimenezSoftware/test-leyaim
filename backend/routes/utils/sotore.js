const price = (items) => {
  let total = 0
  console.log(items)
  for (const prop in items) {
    switch (prop) {
      case "HAT":
        total += hatPrice(items[prop]) 
        break;
      case "PANTS":
        total += pantsPrice(items[prop])
        break;
      case "TSHIRT":
        total += tShirtPrice(items[prop])
        break;
      default:
        console.log('Lo lamentamos.')
    }
  }
  return `$ ${total.toFixed(2)}`
}

const hatPrice = (items) => {
  if (items === 0) { return 0 }
  return items * 7.50
}

const pantsPrice = (items) => {
  if (items === 0) { return 0 }
  if (items === 1) { return 5 }
  let num = items % 2
  return num === 0 ? (items / 2) * 5 : (((items - 1) / 2) * 5) + 5
}

const tShirtPrice = (items) => {
  if (items === 0) { return 0 }
  return items >= 3 ? items * 19 : items * 20 
}

module.exports = {
 price
}