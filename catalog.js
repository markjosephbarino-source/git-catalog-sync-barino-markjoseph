function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  if (daysLate <= 1) {
    return 0;
  }
  let fee = Math.round(daysLate * ratePerDay);
  fee = Math.max(fee, 1);
  fee = Math.min(fee, 20);
  return fee;
}

module.exports = { isValidLoan, calculateLateFee };
