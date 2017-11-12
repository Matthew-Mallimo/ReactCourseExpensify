

export default (expenses) => {
    let costs = expenses.map((expense) => expense.amount);
    let totalCost = costs.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
    return totalCost;
}