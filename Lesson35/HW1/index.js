const parseUser = (jSonStr) => {
    try {
        return JSON.parse(jSonStr);
    } catch (err) {
        return null;
    }
};

// const user = {
//     name: 'Leonid',
//     age: 29,
//     city: 'Odessa'
// };

// console.log(parseUser(user));