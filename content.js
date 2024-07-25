
let totalLots = 0;
let instruments = {};
function findButton(ButtonText) {
  let buttons = document.querySelectorAll(".MuiButtonBase-root");
  let actionButton
  buttons.forEach(button => {
    let firstChild = button.firstChild;
    if (firstChild && firstChild.textContent.toUpperCase().includes(ButtonText)) {
      actionButton = button;
      console.log(`Found the ${ButtonText} button: `, actionButton);
      return true;
    }
  });
  return actionButton;
}

function addButtonClickListener(button, action) {
  if (button) {
    button.addEventListener("click", function () {
      console.log(`${action} clicked`);
      addInstrument(action);
    });
  } else {
    console.log ("Button is undefined or still loading");
  }
}

function addInstrument(action) {
  instruments[findInstrument()] = findButton(action)
}

function calculateLots(action) {
  switch(action) {
    case BUY:
      console.log('Value is 1');
      break;
    case SELL:
      console.log('Value is 2');
      break;
    default:
      console.log('Invalid Value');
      break;
  }

}

function findInstrument() {
  let instrumentSelection = document.querySelector(INSTRUMENT_NAME);
  return instrumentSelection.defaultValue;
}

// Polling every 100ms until the buttons are added to the document
let checkExist = setInterval(function() {
  let buyButton;
  let sellButton;
  if (document.querySelectorAll(".MuiButtonBase-root")) {
    console.log("The buttons are present.");
    buyButton = findButton(BUY);
    sellButton = findButton(SELL);
    addButtonClickListener(buyButton, BUY);
    addButtonClickListener(sellButton, SELL);
  }
  if (buyButton && sellButton) {
    clearInterval(checkExist);
  }
}, CHECK_INTERVAL);

//Todo: Need to build the counter to keep track of active positions in each contract.
//Todo: Need to build the block to disable the input of orders.
//Todo: Need to build a configuration for time frames.
//Todo: Failsafe emergency flatten.
