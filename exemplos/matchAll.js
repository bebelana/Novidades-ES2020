const re = /(Mestre )\w+/g;
const str = 'Mestre em JS e Mestre em nodeJS';
const matches = str.matchAll(re);

console.info(matches); 
console.info(Array.from(matches));
