// create a promise
// wait for 4 seconds
// resolve or reject based on randomBool
// false - reject 'hero is on vacation'
// true - resolve 'batman is here'

function fourSecPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomBool) {
        resolve('batman is here')
      } else {
        reject('hero is on vacation')
      }
    }, 4000)
  })
}

const randomBool = Boolean(Math.round(Math.random()))

// returns either 0 or 1
;(async function () {
  try {
    const result = await fourSecPromise()
    console.log(result)
  } catch (err) {
    console.log(err)
  }
})()
