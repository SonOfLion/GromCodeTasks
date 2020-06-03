function getTitle() {
    const textCont = document.querySelector('.title').textContent;

    console.dir(textCont);
    return textCont;
}

function getDescription() {
    const desc = document.querySelector('.about').textContent;

    console.dir(desc);
    return desc;
}

function getPlans() {
    const plans = document.querySelector('.plans').textContent;

    console.dir(plans);
    return plans;
}

function getGoal() {
    const goal = document.querySelector('.goal').textContent;

    console.dir(goal);
    return goal;
}

getTitle();
getDescription();
getPlans();
getGoal();

export { getTitle, getDescription, getPlans, getGoal };