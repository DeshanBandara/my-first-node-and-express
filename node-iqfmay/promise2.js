const promise = new Promise((resolve, reject) => {
    resolve('Success');
    //reject('Failure');
})
    .then(value => {
        console.log(value);
        return "one";
    })
    .then(value => {
        console.log(value);
        return "Two";
    })
    .then(value => {
        console.log(value);
        return "Three";
    })
    .then(value => {
        console.log(value);
        return "Four";
    })
    .catch(error => {
        console.log(error);
    });