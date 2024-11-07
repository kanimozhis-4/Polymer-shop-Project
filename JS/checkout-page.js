document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('different-billing');
    const billingAddressDiv = document.getElementById('diff-billing-address');

    
    billingAddressDiv.style.display = 'none';

    
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            billingAddressDiv.style.display = 'block'; 
        } else {
            billingAddressDiv.style.display = 'none'; 
        }
    });
});