'use strict';

var app = angular.module('routerApp');

app.controller('recentCtrl', function($scope, $state, Orders) {
    Orders.getAll()
        .then(res => {
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
            console.log('res:', res)
            $scope.items = items
            $scope.orders = res.data
                // $scope.people = people;
        })
        .catch(err => {
            console.log('err:', err);
        });
});
app.controller('currentCtrl', function($scope, $state, Orders) {
    Orders.getCurrent()
        .then(res => {
            console.log('res.data:', res.data)
            $scope.bids = res.data.bids
            $scope.asks = res.data.asks
            $scope.selectItem = function (id) {
              return id
            }
                // $scope.people = people;
        })
        .catch(err => {
            console.log('err:', err);
        });
});
app.controller('detailCtrl', function($scope, id) {
    Orders.getItem(id)
      .then(res => {
        $scope.item = res
      })


 });

app.controller('homeCtrl', function() {
    console.log('homeCtrl!');
});

app.controller('viewItem', function($scope, $state, Orders, item) {
  Orders.getCurrent()

})
