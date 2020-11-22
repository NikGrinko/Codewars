function order(words) {
    if (words === '') return '';

    let newString = '';
    let arrWords = words.split(' ');
    console.log(arrWords);
    for (let i = 1; i <= 9; i++) {
        for (let word of arrWords) {
            for (let str of word) {
                if (str === `${i}`) {
                    newString += `${word} `
                }
            }
        }
    }
    const result = newString.trim();
    return result;
}