 //                ########## Question  ###########
// |1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
// |3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
// |1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|
// Example
// matrixAddition(
//   [ [1, 2, 3],
//     [3, 2, 1],
//     [1, 1, 1] ],
// //      +
//   [ [2, 2, 1],
//     [3, 2, 3],
//     [1, 1, 3] ] )

// // returns:
//   [ [3, 4, 4],
//     [6, 4, 4],
//     [2, 2, 4] ]

//-------------------solution ----------------------

const matrixAddition = (matrixA, matrixB) => {
  let res = matrixA.map((row, index1) =>row.map((value, index2) => value + matrixB[index1][index2])
  );
  console.log(res);
};

matrixAddition(
  [[1, 2, 3][(3, 2, 1)], [1, 1, 1]],
  [ [2, 2, 1], [3, 2, 3],[1, 1, 3],]
);
