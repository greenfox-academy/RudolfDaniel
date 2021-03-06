'use strict';

const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amt) {
  }
}

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amt) {
  }
}

const Shuffler = {
  cash: 10000,
  pick: function(country) {
    this.cash -= 1000;
    country.cash += 1000;
  }
}

Shuffler.pick(Panama) // prints Panama got 1000
Shuffler.pick(Cyprus) // prints Cyprus got 1000
Shuffler.pick(Panama) // prints Panama got 1000
Shuffler.pick(Cyprus) // prints Cyprus got 1000

console.log(Panama.cash) // 2000 
console.log(Cyprus.cash) // 2000