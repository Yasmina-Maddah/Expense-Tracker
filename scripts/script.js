const transaction = { id: Date.now(), amount, type, date, notes };

function saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(transaction));
}

function loadTransactions() {
    return JSON.parse(localStorage.getItem('transaction')) || [];
}

document.getElementById('transaction-form').addEventListener('submit', handleFormSubmit);

