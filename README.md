# CO528-Assignment-02 (Angle Selector using Vanilla JS, HTML, and CSS)

This is a simple angle selector implemented using HTML, CSS, and JavaScript. It allows users to select an angle between 0 and 360 degrees using a text box, slider, and radio buttons, keeping all input elements in sync.

## Features

1. **Text Box**: Users can enter a numeric value between 0 and 360.
2. **Slider**: Users can select an angle by moving the slider. The slider updates based on the text box input.
3. **Radio Buttons**: A set of common angles (0, 45, 60, 90, and 180) that users can select.
4. **Synchronization**: The text box, slider, and radio buttons remain in sync.

## How It Works

- The **text box** shows the current angle value. You can type any numeric value, and it will automatically update the slider and the corresponding radio button if the value matches.
- The **slider** can be moved to adjust the angle, and this will update the text box and radio button selection.
- **Radio buttons** allow the user to select common angles directly, updating the text box and slider.

## Live Demo

Check out the live demo of the angle selector hosted at the following URL:

[Angle Selector Demo](https://madushannanayakkara.github.io/CO528-Assignment-02-Task-01/)

## Project Structure

- `index.html`: The main HTML file for the angle selector.
- `styles.css`: The CSS file for styling the components.
- `script.js`: The JavaScript file that handles the interaction and synchronization between the elements.
