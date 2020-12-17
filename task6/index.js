function pigIt(str) {
    let newString = '';
    let arr = str.split(' ');
    let convertArr = []

    const magic = arr.map(item => {
        if (item === '!' || item === '?') {
            convertArr.push(item);
        } else {
            newString = item.slice(1) + item[0] + 'ay'
            convertArr.push(newString);
        }
    })

    const result = convertArr.join(' ');
    return result
}

//or

function pigIt(str) {
    return str.replace(/\b(\w)(\w*)\b/g, "$2$1ay");
}