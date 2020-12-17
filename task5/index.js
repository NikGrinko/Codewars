let converter = x => x <= 0 ? '00' : x >= 255 ? 'FF' : x.toString(16).toUpperCase().padStart(2, '0');
let rgb = (...x) => x.map(x => converter(x)).join('');
