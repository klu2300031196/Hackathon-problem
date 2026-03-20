let premiumValue = 0;

function calculatePremium() {
  let distance = document.getElementById("distance").value;

  if (!distance) {
    alert("Enter travel distance!");
    return;
  }

  let riskFactor = Math.random() * 0.3;
  premiumValue = distance * 2 + riskFactor * 50;

  document.getElementById("premium").innerText =
    "Daily Premium: ₹" + premiumValue.toFixed(2);
}

function simulateAccident() {
  triggerPayout("Accident");
}

function simulateDelay() {
  triggerPayout("Trip Delay");
}

function triggerPayout(reason) {
  if (premiumValue === 0) {
    alert("Calculate premium first!");
    return;
  }

  let payout = premiumValue * 8;

  document.getElementById("payout").innerText =
    `Payout for ${reason}: ₹${payout.toFixed(2)}`;
}