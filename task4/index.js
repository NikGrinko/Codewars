function likes(names) {

    const lng = names.length;
    switch (true) {
        case (lng === 0):
            return "no one likes this";
            break;
        case (lng === 1):
            return `${names[0]} likes this`;
            break;
        case (lng > 1 && lng < 3):
            return `${names[0]} and ${names[1]} like this`;
            break;
        case (lng === 3):
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
            break;
        case (lng > 3):
            return `${names[0]}, ${names[1]} and ${lng - 2} others like this`;
            break;
        default:
            return '';
    }
}