function scuberGreetingForFeet(ride){
  let sample
  if (ride <= 400) {
    sample = "This one is on me!";
  }
  else if (ride > 400 && ride <= 2000) {
    sample = "That will be twenty bucks.";
  }
  else if (ride > 2000 && ride <= 2500) {
    sample = "I will gladly take your thirty bucks.";
  }
  else if (ride > 2500) {
    sample = "No can do.";
  }
  return sample;
}

function ternaryCheckCity(destination){
  return destination === "NYC" ? "Ok, sounds good." : "No go." ;
}

function switchOnCharmFromTip(tip){
  let message;
  switch (tip) {
    case 'generous':
      message = "Thank you so much."
      break;
    case 'not as generous':
      message = "Thank you."
      break;
    default:
      message = "Bye."
      break;
  }
  return message
}