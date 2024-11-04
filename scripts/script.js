const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
const budgetAmount = document.querySelector('.budget-amount');
const transactionsList = document.querySelector('.transactions-list');

function saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function calculateTotalBudget() {
    const total = transactions.reduce((sum, transaction) => {
      return transaction.type === 'income' ? sum + transaction.amount : sum - transaction.amount;
    }, 0);
    budgetAmount.textContent = total;
}

document.querySelector('.transaction-form').addEventListener('submit', e => {
    e.preventDefault();
    const amount = parseFloat(document.querySelector('.amount').value);
    const type = document.querySelector('.type').value;
    const date = document.querySelector('.date').value;

    const transaction = {amount, type, date };
    transactions.push(transaction);
    updateLocalStorage();
    renderTransactions();
    calculateTotalBudget();
});

document.querySelector('.filter-transactions').addEventListener('click', () => {
    const min = parseFloat(document.querySelector('.filter-min').value) || null;
    const max = parseFloat(document.querySelector('.filter-max').value) || null;
    const type = document.querySelector('.filter-type').value;
    const notes = document.querySelector('.filter-notes').value;
});

  