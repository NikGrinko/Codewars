function disemvowel(str) {
    const arr = str.split('');
    const newArr = arr.map((item) => {
        switch (item) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'O':
            case 'I':
                break
            default:
                return item;
        }
    })
    let result = newArr.join('')
    return result;
}