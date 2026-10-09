import React from "react";

const Sum = React.memo(({ n }) => {
  console.log("Sum component rendered");
  function calculateSumOfNeturalNumbers(n) {
    console.log("Calculating sum of first", n, "natural numbers");
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  const total = calculateSumOfNeturalNumbers(n);

  return (
    <>
      <h3>
        Sum of first {n} natural numbers is {total}
      </h3>
    </>
  );
});

export default Sum;
