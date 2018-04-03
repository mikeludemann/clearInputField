function clearInputField(inputfield, container, clearElement) {

    "use strict";

    var input = document.querySelector(inputfield),
        clear = document.querySelector(container),
        element = document.querySelector(clearElement);

    input.addEventListener("focus", function () {

        clear.style.display = "block";

    });

    input.addEventListener("blur", function () {

        clear.style.display = "none";

    });


    element.addEventListener("click", function () {

        input.value = "";
        input.focus();

    });

}