slowMath.add(6, 2).then(addR => {
    console.log('Add Result: ', addR)
    return slowMath.multiply(addR, 2)
})
    .then(multR => {
        console.log('Multiply Result: ', multR);
        return slowMath.divide(multR, 4)
    })
    .then(divR => {
        console.log('Divide Result: ', divR);
        return slowMath.subtract(divR, 3)
    })
    .then(subR => {
        console.log('Substract Result: ', subR);
        return slowMath.add(subR, 98)
    })
    .then(addR => {
        console.log('Add Result: ', addR);
        return slowMath.remainder(addR, 2)
    })
    .then(remR => {
        console.log('Remainder Result: ', remR);
        return slowMath.multiply(remR, 50)
    })
    .then(mul1R => {
        console.log('Multiply1 Result: ', mul1R);
        return slowMath.remainder(mul1R, 40)
    })
    .then(rem1R => {
        console.log('Remainder1 Result: ', rem1R);
        return slowMath.add(rem1R, 32)
    })
    .then(final => {
        console.log('The Final Result is ', final);

    })
    .catch(err => console.log(err))


// when changing the first arguments i get "Error adding values -2 and 98"
