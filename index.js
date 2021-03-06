// create a promise
// wait for 4 seconds
// resolve or reject based on randomBool
// false - reject 'hero is on vacation'
// true - resolve 'batman is here'

// function fourSecPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (randomBool) {
//         resolve('batman is here')
//       } else {
//         reject('hero is on vacation')
//       }
//     }, 4000)
//   })
// }

// const randomBool = Boolean(Math.round(Math.random()))

// // returns either 0 or 1
// ;(async function () {
//   try {
//     const result = await fourSecPromise()
//     console.log(result)
//   } catch (err) {
//     console.log(err)
//   }
// })()

// //////////////////////////////////////////////////////////////////////////////////////////

//  FULLFILL ALL PROMISES CHALLENGE

// const startTransaction = () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(true)
//     }, 5000)
//   })
// }
// const initPayment = () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(true)
//     }, 1000)
//   })
// }
// const launchVerification = () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(true)
//     }, 2000)
//   })
// }

// const performance = async (label) => {
//   const date = new Date()
//   console.log(label, `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
// }

// ;(async function () {
//   try {
//     await performance('start')
//     const result = await Promise.all([
//       startTransaction(),
//       initPayment(),
//       launchVerification(),
//     ])
//     await performance('end')
//     console.log(result)
//   } catch (err) {
//     console.log(err)
//   }
// })()

// //////////////////////////////////////////////////////////////////////////////////////////

//  FULFIL THE FASTEST PROMISE CHALLENGE

// const taskA = () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res('a')
//     }, 4000)
//   })
// }
// const taskB = () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res('b')
//     }, 2000)
//   })
// }
// const taskC = () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res('c')
//     }, 10000)
//   })
// }

// ;(async function () {
//   try {
//     const result = await Promise.race([taskA(), taskB(), taskC()])
//     console.log(result)
//   } catch (err) {
//     console.log(err)
//   }
// })()

// //////////////////////////////////////////////////////////////////////////////////////////

//  PARALLEL EXECUTION CHALLENGE

const taskW = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('W')
    }, 1000)
  })
}
const taskO = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('O')
    }, 500)
  })
}
const taskExclaim = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('!')
    }, Math.floor(Math.random() * 1000))
  })
}
const taskSmiley = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(':)')
    }, 300)
  })
}

// execute taskW append W to wow
// execute taskW and taskO in parallel and append result to wow
// execute taskExclaim and taskSmiley in race condition append result to wow
// get either WOW! or WOW:) depending on the random value of taskExclaim timeout

;(async function () {
  try {
    let wow = ''
    const resultW = await taskW()
    wow += resultW

    const resultOW = await Promise.all([taskO(), taskW()])
    wow += resultOW[0] + resultOW[1]

    const resultRace = await Promise.race([taskExclaim(), taskSmiley()])
    wow += resultRace

    console.log(wow)
  } catch (err) {
    console.log(err)
  }
})()
