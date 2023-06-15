/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryWiseObject = {};
  let categoryWiseObjectArray = [];
  for (let transaction of transactions){
    const { category, price } = transaction;
    //categoryWiseList[transaction.category] = (categoryWiseList[transaction.category] || 0) + transaction.price;
    if (categoryWiseObject.hasOwnProperty(category)) {
      categoryWiseObject[category] += price;
    } else {
      categoryWiseObject[category] = price;
    }
  }
  
  for (let category in categoryWiseObject) {
    categoryWiseObjectArray.push({ category: category, totalSpent: categoryWiseObject[category] });
  }
  return categoryWiseObjectArray;
}

module.exports = calculateTotalSpentByCategory;
