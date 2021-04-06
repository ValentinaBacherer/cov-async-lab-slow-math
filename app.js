// slowMath.add(6, 2).then(addR => {
//     console.log('Add Result: ', addR)
//     return slowMath.multiply(addR, 2)
// })
//     .then(multR => {
//         console.log('Multiply Result: ', multR);
//         return slowMath.divide(multR, 4)
//     })
//     .then(divR => {
//         console.log('Divide Result: ', divR);
//         return slowMath.subtract(divR, 3)
//     })
//     .then(subR => {
//         console.log('Substract Result: ', subR);
//         return slowMath.add(subR, 98)
//     })
//     .then(addR => {
//         console.log('Add Result: ', addR);
//         return slowMath.remainder(addR, 2)
//     })
//     .then(remR => {
//         console.log('Remainder Result: ', remR);
//         return slowMath.multiply(remR, 50)
//     })
//     .then(mul1R => {
//         console.log('Multiply1 Result: ', mul1R);
//         return slowMath.remainder(mul1R, 40)
//     })
//     .then(rem1R => {
//         console.log('Remainder1 Result: ', rem1R);
//         return slowMath.add(rem1R, 32)
//     })
//     .then(final => {
//         console.log('The Final Result is ', final);
//         const p = document.createElement('h1')
//         p.innerText = `The final result is ${final}`
//         document.body.appendChild(p)
//     })
//     .catch(err => console.log(err))


// when changing the first arguments i get "Error adding values -2 and 98"

const doMath = async () => {
    try {
        const addR = await slowMath.add(6, 2)
        console.log('Add Result: ', addR)

        const multR = await slowMath.multiply(addR, 2)
        console.log('Multiply Result: ', multR);

        const divR = await slowMath.divide(multR, 4)
        console.log('Divide Result: ', divR);

        const subR = await slowMath.subtract(divR, 3)
        console.log('Substract Result: ', subR);

        const add1R = await slowMath.add(subR, 98)
        console.log('Add Result: ', add1R);

        const remR = await slowMath.remainder(add1R, 2)
        console.log('Remainder Result: ', remR);

        const mul1R = await slowMath.multiply(remR, 50)
        console.log('Multiply1 Result: ', mul1R);

        const rem1R = await slowMath.remainder(mul1R, 40)
        console.log('Remainder1 Result: ', rem1R);

        const final = await slowMath.add(rem1R, 32)
        console.log('The Final Result is ', final);

        const p = document.createElement('h1')
        p.innerText = `The final result is ${final}`
        document.body.appendChild(p)

    } catch (error) {

        console.log('There was an error!');
        console.log(error);
    }

}

doMath()