describe("Expense objects",function(){
  var expense, expenseItem;
  beforeEach(function(){
    expenseItem = new ExpenseItem(100);
    expense = new Expense(expenseItem);
  });

  it("should be of type expense items", function(){
      expect(expense.expenseItem).toBe(expenseItem);
  });
  it("should have correct expense amount", function(){
    expect(expense.expenseItem.amount).toBe(100);
  });
});
