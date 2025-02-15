export function onEvent(id, type, callback) {
    
}

export function getText(id) {
    return `${id}'s text`;
}

export function setText(id, text) {
    console.log(`Set ${id}'s text to ${text}.`);
}

export function getNumber(id) {
    return `${id}'s number`;
}


export function playSound(url, loop) {
    console.log(`Playing ${url}, which is ${loop ? "" : "not"} looping`);
}

export function stopSound(url) {
    console.log(`Stopped ${url}.`);
}

export function showElement(id) {
    console.log(`Showing ${id}.`);
}

export function hideElement(id) {
    console.log(`Hiding ${id}.`);
}

export function setProperty(id, property, value) {
    console.log(`Set ${id}'s ${property} to ${value}.`);
}

export function getProperty(id, property) {
    return `${id}'s ${property} value`;
}

export function setScreen(screenId) {
    console.log(`Set screen to ${screenId}.`);
}


export function insertItem(list, index, item) {
    let returnList;

    try {
        returnList = list.splice(index, 0, item);
    } catch {
        throw Error("Invalid index or list.");
    }

    return returnList;
}

export function appendItem(list, item) {
    let returnList;
    
    try {
        returnList = list.append(item);
    } catch {
        throw Error("Invalid list.");
    }
    
    return returnList;
}

export function removeItem(list, index) {
    let returnList;
    
    try {
        returnList = list.splice(index, 1);
    } catch {
        throw Error("Invalid index or list.");
    }

    return returnList;
}


export function getColumn(table, column) {
    return ["placeholder" * 5];
}


export function randomNumber(min, max) {
    let offset = 0;
    let scaleFactor = 1;
    let multiplicand = max;

    if (min > max) {
        throw new Error("Min is greater than max. Try swapping around the min and max values.");
    }

    if (min < 0 && max < 0) {
        scaleFactor = -1;
        multiplicand = min;
    } else if (min < 0) {
        offset = Math.abs(min);
    }

    let RNG = (Math.round(Math.random() * (Math.abs(multiplicand) + offset)) - offset) * scaleFactor;

    if (RNG < min || RNG > max) {
        RNG = randomNumber(min, max);
    }

    return RNG;
}