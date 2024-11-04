const transaction = { id: Date.now(), amount, type, date, notes };

function saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(transaction));
}

function loadTransactions() {
    return JSON.parse(localStorage.getItem('transactions')) || [];
}