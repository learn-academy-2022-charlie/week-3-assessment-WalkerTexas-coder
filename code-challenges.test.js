// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fib", ()=>{
  it("Takes a number and returns an array of the same length containing the numbers of the fibonacci seq.", ()=>{
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// RED
//  ● fib › Takes a number and returns an array of the same length containing the numbers of the fibonacci seq.

//   ReferenceError: fib is not defined


// b) Create the function that makes the test pass.

// Create a function named fib
  // Accepts number as argument parameter name will be length
// within the function 
  // create a local variable named sequence and assign to empty array- this will store the number sof the fibonacci sequence
  // create a for loop that will execute the length number of times 
    // conditional statements 
      // if the current index is less than or equal to one
        // push one into the sequence array
      // else add the numbers from the previous two index and push this value into the seq array
  // return the sequence array

  const fib = (length) => {
    let sequence = []
    for(let i = 0; i < length; i++){
      if( i <= 1 ){
        sequence.push(1)
      }
      else {
        let sum = sequence[i - 1] + sequence[i - 2]
        sequence.push(sum)
      }
    }
    return sequence
  }





// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accume", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]

    const numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]

    const numbersToAdd3 = []
// Expected output: []
    expect(accume(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(accume(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(accume(numbersToAdd3)).toEqual([])
  })
})


//Red 
  // ● accume › takes in an array and returns an array of the accumulating sum.An empty array should return an empty array.

  // ReferenceError: accume is not defined

// b) Create the function that makes the test pass.

  // create a function named accume that takes an array as its param
    //return map through the array taking in value and index as params in the cb (callback function)
      // return slice the array between zero and the next index (index + 1)
      // append reduce (iterator that creates sums) the numbers to obtain the sums
        // pass reduce a cb that takes prev and curr as parameters and use them to creat a sum

  const accume = (array) => {
    return array.map((value, index) => {
      return array.slice(0, index + 1).reduce((prev, curr) => {
        return  prev + curr
      })
    })
  }
    

