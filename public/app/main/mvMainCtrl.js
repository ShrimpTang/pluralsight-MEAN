angular.module('app')
    .controller('mvMainCtrl', function ($scope) {
        $scope.courses = [
            {name: 'C#', featured: true, published: new Date('1/1/2013')},
            {name: 'QDW#', featured: true, published: new Date('12/1/2013')},
            {name: 'CXZ#', featured: false, published: new Date('1/3/2013')},
            {name: 'VRE#', featured: true, published: new Date('4/4/2013')},
            {name: 'GBV#', featured: false, published: new Date('5/5/2013')},
            {name: 'BNR#', featured: true, published: new Date('1/5/2013')},
            {name: 'NSR#', featured: true, published: new Date('1/6/2013')},
        ]
    })