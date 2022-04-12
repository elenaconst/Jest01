function positiveSum(arr) {
  if (arr.length >0) {
    let newArr = arr.filter((el) => el > 0) 
      if (newArr.length >0) {
        return newArr.reduce((sum, el) => sum += el)
  } return 0
 }
   return 0
 }
module.exports = positiveSum;
