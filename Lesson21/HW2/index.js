function getItemList() {
    const elementList = document.querySelectorAll('.technology');

    console.dir(elementList);
    return elementList;
}

function getItemsArray() {
    const elementsArray = document.querySelectorAll('.tool');

    console.dir(elementsArray);
    return elementsArray;
}

getItemList();
getItemsArray();

export { getItemList, getItemsArray }