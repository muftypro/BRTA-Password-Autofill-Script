// ==UserScript==
// @name         BRTA A/C Creating, Autofill Password Fields from Hidden Input
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Copy value from input and paste into password fields
// @author       Your Name
// @match        https://bsp.brta.gov.bd/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define the CSS selector for the hidden input field (from which we'll retrieve the value)
    var hiddenInput = document.querySelector('#register-form > div:nth-child(10) > input');

    // Check if the hidden input field exists and has a value
    if (hiddenInput && hiddenInput.value) {
        // Define the password fields (where the value should be copied)
        var passwordField = document.querySelector('#registerPassword');
        var confirmPasswordField = document.querySelector('#registerCpassword');

        // If both password fields are present, copy the value from the hidden input
        if (passwordField && confirmPasswordField) {
            // Set the value of both password fields to the value of the hidden input
            passwordField.value = hiddenInput.value;
            confirmPasswordField.value = hiddenInput.value;
        } else {
            console.error('Password fields not found on the page.');
        }
    } else {
        console.error('Hidden input field not found or it has no value.');
    }

})();