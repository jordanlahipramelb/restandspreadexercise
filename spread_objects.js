const tea = {
  type: 'oolong',
  name: 'winter sprout',
  origin: 'taiwan',
};

const teaData = {
  steepTime: '30s',
  brewTemp: 175,
  origin: 'japan',
};

// const tea2 = { ...tea };

const teaTin = { ...tea, price: 22.99 };
//price is added into object
//const teaTin = {
// 	type   : 'oolong',
// 	name   : 'winter sprout',
// 	origin : 'taiwan'
// 	price: 22.99
// };

// const newTea = { ...tea, name: 'golden frost' };
const newTea = { name: 'golden frost', ...tea };
//Order matters. Name in ...tea overrides golden frost

const fullTea = { ...tea, ...teaData };

const colors = ['red', 'orange', 'blue'];
//{0: {0:'red', 1:'orange', 2:'blue'}
const dummyObj = { ...colors, ...'CAT' };
// {0: "C", 1: "A", 2: "T"}
