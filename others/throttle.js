const yourFunction = function (func, threshold) {
    let clock = 0
	return function (...args) {
      let time = new Date()
      if(time - clock > threshold) {
      	clock = time;
        func(...args);
      }
    }
}
console.log('hhhhh')
const triggerSearch = yourFunction((val) => {
  console.log(val);
}, 300);
triggerSearch('searchText');
triggerSearch('searchText');