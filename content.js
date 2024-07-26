
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


// for keeping track of positions on different instruments.
function addInstrument(action) {
  let instrument = findInstrument();
  instruments[instrument] = calculateLots(action, findButton(action), instrument)
}

function calculateLots(action, button, instrument) {
  let value = parseInt(button.childNodes.item(1).textContent) // How many contracts we're changing
  let instrumentLots = getInstrumentValue(instrument)
  switch(action) {
    case BUY:
      instrumentLots += value;
      break;
    case SELL:
      instrumentLots -= value;
      break;
    default:
      return 0;
  }
  return instrumentLots
}

function findInstrument() {
  let instrumentSelection = document.querySelector(INSTRUMENT_NAME);
  return instrumentSelection.defaultValue;
}

// Function for getting and handling instruments that do or do not have a value.
function getInstrumentValue(instrument) {
  if (instruments[instrument]) {
    return instruments[instrument]
  } else {
    return 0;
  }
}

// Polling every 100ms until the buttons are added to the document
let checkExist = setInterval(function() {
  let buyButton;
  let sellButton;
  let closeButton;
  if (document.querySelectorAll(".MuiButtonBase-root")) {
    console.log("The buttons are present.");
    buyButton = findButton(BUY);
    sellButton = findButton(SELL);
    closeButton = findButton(CLOSE);
    addOrderButtonClickListener(buyButton, BUY);
    addOrderButtonClickListener(sellButton, SELL);
    addCloseButtonClickListener(closeButton, CLOSE);
  }
  if (buyButton && sellButton) {
    clearInterval(checkExist);
  }
}, CHECK_INTERVAL);

//Todo: Need to build the counter to keep track of active positions in each contract.
//Todo: Need to build flatten / close functionality because bugs already are arising. - Priority.
//Todo: Need to build the block to disable the input of orders.
//Todo: Need to build a configuration for time frames.
//Todo: Failsafe emergency flatten.
