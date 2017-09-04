const _ = require('pipefn');

const result = [1, 2, 3, 4, 5] |> _([].concat, [6, 7, 8, 9, 0]);

console.log(result);


(async () => {
  const test = async t => t;
  const result2 = 63 |> await test;
  console.log(result2);
})();
