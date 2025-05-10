// Shallow-copy 
const original = { foo: 'bar', nested: { baz: 'qux' } };
const shallowCopy = { ...original };
console.log(shallowCopy);
shallowCopy.foo = 'changed';
shallowCopy.nested.baz = 'modified';
console.log(original);
// Output: { foo: 'bar', nested: { baz: 'modified' } }
console.log(shallowCopy);
// Output: { foo: 'changed', nested: { baz: 'modified' } 

// Shallow-copy 
const originals = { fruit: 'apple', basket: { count: 5 } };
const copy = { ...originals };
copy.fruit = 'banana';
copy.basket.count = 10;
console.log('Original:', originals);
console.log('Copy:', copy);

// Deep-clone
const originalz = { book: 'fairy tale', info: { pages: 100 } };
const shallow = { ...originalz };
const deep = JSON.parse(JSON.stringify(originalz));

shallow.info.pages = 200;
deep.info.pages = 300;

console.log('Original:', originalz.info.pages); // What will this be?
console.log('Shallow:', shallow.info.pages);   // And this?
console.log('Deep:', deep.info.pages);         // And this?

console.log('Original:', originalz); 
console.log('Shallow:', shallow);   
console.log('Deep:', deep);