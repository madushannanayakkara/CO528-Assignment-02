// Get elements
const angleInput = document.getElementById("angle-input");
const angleSlider = document.getElementById("angle-slider");
const radioButtons = document.querySelectorAll('input[name="angle"]');

// Sync text box with slider
angleInput.addEventListener("input", function() {
  let value = parseInt(angleInput.value);
  
  if (isNaN(value)) {
    value = 0;
  }
  
  // Keep values between 0 and 360
  if (value < 0) value = 0;
  if (value > 360) value = 360;
  
  angleInput.value = value;
  angleSlider.value = value;

  syncRadioButtons(value);
});

// Sync slider with text box
angleSlider.addEventListener("input", function() {
  const value = parseInt(angleSlider.value);
  angleInput.value = value;
  syncRadioButtons(value);
});

// Sync radio buttons with text box and slider
radioButtons.forEach(radio => {
  radio.addEventListener("change", function() {
    const value = parseInt(this.value);
    angleInput.value = value;
    angleSlider.value = value;
  });
});

// Sync radio buttons when typing
function syncRadioButtons(value) {
  radioButtons.forEach(radio => {
    radio.checked = parseInt(radio.value) === value;
  });
}
