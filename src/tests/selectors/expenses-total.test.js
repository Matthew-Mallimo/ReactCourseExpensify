import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('should correctly add up multiple expenses', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toEqual(114195);
});

test('should return 0 if no expenses', () => {
    const expenses = [];
    const total = getExpensesTotal(expenses);
    expect(total).toEqual(0);
});

test('should correctly add up a single expense', () => {
    const expenses = [
        {
            id: '1',
            description: 'Gum',
            note: '',
            amount: 200,
            createdAt: 0
        }
    ];
    const total = getExpensesTotal(expenses);
    expect(total).toEqual(200);
});