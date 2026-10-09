
import React,{ useMemo } from "react";


const Sum = React.memo(({ onCalculate }) => {
  const n = 1000000;
  console.log("Sum component rendered");

  function calculateSquareRoot() {
    const result = Math.sqrt(n);
    onCalculate(result);
    return result;
  }

  const sqrtResult = calculateSquareRoot();

  return (
    <>
      <h5>
        Square Root of {n} is {sqrtResult}
      </h5>
    </>
  );
})

export default Sum;
