'use strict';

var app = angular.module('routerApp');

app.service('Orders', function($q, $http) {
  // var orders = $http.jsonp('https://api.korbit.co.kr/v1/transactions?callback=JSON_CALLBACK')

  this.getAll = () => {
    // return people;
    return $http.post('/api/ajax', {url: 'https://api.korbit.co.kr/v1/transactions?time=day'});
  };
  this.getCurrent = () => {
    return $http.post('/api/ajax', {url: 'https://api.korbit.co.kr/v1/orderbook'});

  }
  this.getItem = (id) => {
    var items = [{
      name:"cup",
      price: "1.00",
      cat: "home",
      img: "1"
    }, {
      name:"hat",
      price: "2.00",
      cat: "wear",
      img: "2"
    }, {
      name:"rice",
      price: "3.00",
      cat: "food",
      img: "3"
    }
   ]
   return items[id]

  }
  this.getByName = name => {
    // returning a promise
    return $q((resolve, reject) => {
      var person = people.filter(obj => obj.name.toLowerCase() === name.toLowerCase())[0];

      if(person) {
        resolve(person); // trigger .then()
      } else {
        reject(new Error('Person not found'));  // trigger .catch()
      }

    });
  };

});
