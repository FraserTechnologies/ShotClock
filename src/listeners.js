function addOrderButtonClickListener(button, action) {
  if (button) {
    button.addEventListener("click", function () {
      console.log(`${action} clicked`);
      addInstrument(action);
    });
  } else {
    console.log ("Button is undefined or still loading");
  }
}

function addCloseButtonClickListener(button, action) {
  if (button) {
    button.addEventListener("click", function () {
      console.log(`${action} clicked`);
      let instrument = findInstrument();
      delete instruments[instrument];
      // Todo: Build then call functionality to block trades.
    })
  }
}
