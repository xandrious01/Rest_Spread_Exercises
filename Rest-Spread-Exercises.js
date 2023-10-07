function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

const filterOutOdds =  (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...args) => Math.min(...args); 

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr, ...args.map(num => num * 2)
]

/////////////////////////////////////////////////////////////////////////

const removeRandom = (items) => {
    let toRemove = Math.floor(Math.random() * items.length);
    return [...items].filter(item => items.indexOf(item) !== toRemove)
};

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => ({...obj, [key] : val});

const removeKey = (obj, key) => {
    const removed = {...obj};
    delete removed[key];
    return removed;
}

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, val) => ({...obj, [key] : val});