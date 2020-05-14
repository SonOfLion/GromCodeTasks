const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(array)) return null;

    const absoluteValues = arr
        .map(num => Math.abs(num));

    return Math.max(...absoluteValues);
}

console.log(getMaxAbsoluteNumber([-777, 3, 45, 20]));