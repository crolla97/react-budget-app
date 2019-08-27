export const expensesTotal = (items) => {
  return items
      .filter((item) => item.type === 'expense')
      .map((item) => item.amount)
      .reduce((sum, value) => sum + value, 0);
};

export const incomeTotal = (items) => {
  return items
      .filter((item) => item.type === 'income')
      .map((item) => item.amount)
      .reduce((sum, value) => sum + value, 0);
};
