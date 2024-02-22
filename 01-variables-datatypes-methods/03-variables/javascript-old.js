var categoryList = [
  {
    key: 'pl',
    name: 'Personal Loan',
  },
  {
    key: 'Vl',
    name: 'Vehicle Loan',
  },
  {
    key: 'EL',
    name: 'Education Loan',
  },
  {
    key: 'hL',
    name: 'Home Loan',
  },
];

console.table(categoryList);

var category = function category(key) {
  // Write the Logic here

  const lookupCat = categoryList.filter((cat) => cat.key === key);

  return lookupCat.name;
};

console.table(categoryList);
console.log(category('pl'));

/*
    module.exports = {
      category: category
    };
    */
