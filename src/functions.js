export const canBeBlack = (ver, hor, filed) => {
    let neigh = 0
    if (ver === 0) {
        if (filed[ver + 1][hor] === 'x') neigh += 1;
        if (filed[ver + 1][hor + 1] === 'x') neigh += 1;
        if (filed[ver + 1][hor - 1] === 'x') neigh += 1;
        if (filed[ver][hor + 1] === 'x') neigh += 1;
        if (filed[ver][hor + 1] === 'x') neigh += 1;
    } else if(ver === 39) {
        if (filed[ver - 1][hor] === 'x') neigh += 1;
        if (filed[ver - 1][hor + 1] === 'x') neigh += 1;
        if (filed[ver - 1][hor - 1] === 'x') neigh += 1;
        if (filed[ver][hor + 1] === 'x') neigh += 1;
        if (filed[ver][hor + 1] === 'x') neigh += 1;
    } else {
        if (filed[ver + 1][hor] === 'x') neigh += 1;
        if (filed[ver + 1][hor + 1] === 'x') neigh += 1;
        if (filed[ver + 1][hor - 1] === 'x') neigh += 1;
        if (filed[ver - 1][hor] === 'x') neigh += 1;
        if (filed[ver - 1][hor + 1] === 'x') neigh += 1;
        if (filed[ver - 1][hor - 1] === 'x') neigh += 1;
        if (filed[ver][hor + 1] === 'x') neigh += 1;
        if (filed[ver][hor - 1] === 'x') neigh += 1;
    }
    
    if (neigh === 3) {
        return true
    } else {
        return false
    }
}


export const canBeWhite = (ver, hor, filed) => {
    let neigh = 0
    if (ver === 0) {
        if (filed[ver + 1][hor] === 'x') neigh += 1;
        if (filed[ver + 1][hor + 1] === 'x') neigh += 1;
        if (filed[ver + 1][hor - 1] === 'x') neigh += 1;
        if (filed[ver][hor + 1] === 'x') neigh += 1;
        if (filed[ver][hor + 1] === 'x') neigh += 1;
    } else if (ver === 39) {
        if (filed[ver - 1][hor] === 'x') neigh += 1;
        if (filed[ver - 1][hor + 1] === 'x') neigh += 1;
        if (filed[ver - 1][hor - 1] === 'x') neigh += 1;
        if (filed[ver][hor + 1] === 'x') neigh += 1;
        if (filed[ver][hor + 1] === 'x') neigh += 1;
    } else {
        if (filed[ver + 1][hor] === 'x') neigh += 1;
        if (filed[ver + 1][hor + 1] === 'x') neigh += 1;
        if (filed[ver + 1][hor - 1] === 'x') neigh += 1;
        if (filed[ver - 1][hor] === 'x') neigh += 1;
        if (filed[ver - 1][hor + 1] === 'x') neigh += 1;
        if (filed[ver - 1][hor - 1] === 'x') neigh += 1;
        if (filed[ver][hor + 1] === 'x') neigh += 1;
        if (filed[ver][hor - 1] === 'x') neigh += 1;
    }
    // console.log([ver, hor, neigh]);
    if (neigh === 2 || neigh === 3) {
        return false
    } else {
        return true
    }
}