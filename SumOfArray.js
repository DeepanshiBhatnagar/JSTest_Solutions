//3. Let us consider this example (array written in general format):
// ls = [0, 1, 3, 6, 10]
// Its following parts:
// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
// Other Examples:
// ls = [1, 2, 3, 4, 5, 6]
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

//        ###Solution ########

const parts_sums = (ls) => {
  let res = ls.map((i, index) => ls.slice(index).reduce((a, b) => a + b)).concat(0);
  return res;
};
console.log(parts_sums([1, 2, 3, 4, 5, 6]));
