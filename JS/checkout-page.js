document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('different-billing');
    const billingAddressDiv = document.getElementById('diff-billing-address');

    // Initially hide the different billing address section
    billingAddressDiv.style.display = 'none';

    // Add an event listener to the checkbox
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            billingAddressDiv.style.display = 'block'; // Show the billing address
        } else {
            billingAddressDiv.style.display = 'none'; // Hide the billing address
        }
    });
});