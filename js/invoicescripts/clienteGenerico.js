// Cliente Generico functionality
document.addEventListener('DOMContentLoaded', function() {
    const generalClientBtn = document.getElementById('general-client-btn');
    if (!generalClientBtn) return;

    // Create back button
    const backButton = document.createElement('button');
    backButton.type = 'button';
    backButton.id = 'back-from-generic-btn';
    backButton.className = 'btn secondary-btn';
    backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Voltar';
    backButton.style.display = 'none';
    backButton.style.marginLeft = '8px';

    // Insert back button after general client button
    generalClientBtn.parentNode.insertBefore(backButton, generalClientBtn.nextSibling);

    // Get client form elements
    const clientInput = document.getElementById('client-list');
    const clientEmail = document.getElementById('clientEmail');
    const clientAddress = document.getElementById('clientAddress');
    const clientTaxId = document.getElementById('clientTaxId');

    // Store original values when switching to generic client
    let originalValues = {
        clientName: '',
        email: '',
        address: '',
        taxId: ''
    };

    // When Cliente Generico is selected
    generalClientBtn.addEventListener('click', function() {
        // Store current values
        originalValues = {
            clientName: clientInput ? clientInput.value : '',
            email: clientEmail ? clientEmail.value : '',
            address: clientAddress ? clientAddress.value : '',
            taxId: clientTaxId ? clientTaxId.value : ''
        };

        // Fill in generic client information
        if (clientInput) {
            clientInput.value = 'Cliente Generico';
            clientInput.dataset.generalClient = 'true';
        }
        if (clientEmail) clientEmail.value = '';
        if (clientAddress) clientAddress.value = '';
        if (clientTaxId) clientTaxId.value = '000000000';

        // Update UI
        generalClientBtn.style.display = 'none';
        backButton.style.display = 'inline-block';
        generalClientBtn.classList.add('highlighted');
    });

    // Back button functionality
    backButton.addEventListener('click', function() {
        // Restore original values
        if (clientInput) {
            clientInput.value = originalValues.clientName;
            delete clientInput.dataset.generalClient;
        }
        if (clientEmail) clientEmail.value = originalValues.email;
        if (clientAddress) clientAddress.value = originalValues.address;
        if (clientTaxId) clientTaxId.value = originalValues.taxId;

        // Update UI
        generalClientBtn.style.display = 'inline-block';
        backButton.style.display = 'none';
        generalClientBtn.classList.remove('highlighted');
    });

    // Add styles for the buttons
    const style = document.createElement('style');
    style.innerHTML = `
        #back-from-generic-btn {
            background-color: #6c757d;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        #back-from-generic-btn:hover {
            background-color: #5a6268;
        }

        #back-from-generic-btn i {
            margin-right: 4px;
        }

        #general-client-btn.highlighted {
            background: #e0f7fa;
            border: 2px solid #00bcd4;
            color: #00796b;
        }
    `;
    document.head.appendChild(style);
});
