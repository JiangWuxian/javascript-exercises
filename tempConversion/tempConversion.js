const ftoc = function (x) {
  const temp = (x - 32) * (5 / 9);
  return Math.round(temp * 10) / 10;
}

const ctof = function (x) {
  const temp = x * (9 / 5) + 32;
  return Math.round(temp * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
