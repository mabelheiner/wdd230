let satisfaction_slider = document.querySelector("#satisfaction");
let satisfaction_text = document.querySelector("#sat_value");
satisfaction_text.textContent = satisfaction_slider.value;

function setValue() {
    satisfaction_text.textContent = satisfaction_slider.value;
}
setValue();