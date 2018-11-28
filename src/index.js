let a = [9.9, 10, 17, 19, 20, 22, 25];

const caculSommeMax = (arr, valeur) => {
  let out = {};
  let values = {};

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        out[[i] + "-" + [j] + "-" + [k]] = a[i] + a[j] + a[k];
      }
    }
  }

  for (var prop in out) {
    if (out[prop] < valeur + 1 && out[prop] > valeur - 1) {
      values[prop] = out[prop];
    }
  }

  return values;
};

console.log(caculSommeMax(a, 48));
