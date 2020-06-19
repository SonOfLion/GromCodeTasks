/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

/* ...code here */

export const makePromise = new Promise(resolve => {
    resolve(17);
});

const makePromise = Promise.resolve(17);

/*
 * пример использования
 */
makePromise(17)
    .then(number => {
        console.log(number); // 17
    });