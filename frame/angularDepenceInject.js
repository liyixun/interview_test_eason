/**
 * angular依赖注入
 * http://www.alloyteam.com/2015/09/angularjs-study-of-dependency-injection/
 * @type {{dependencies: {}, register: inject.register, resolve: (function(*=, *=): Function)}}
 */
var inject = {
  dependencies: {},
  register: function (key, value) {
    this.dependencies[key] = value;
  },
  resolve: function (func, scope) {
    var deps = [];
    if (Array.isArray(func)) {
      let last = func.length - 1;
      deps = func.slice(0, last);
      func = func[last];
    }
    var arr = [];
    for (let i = 0; i < deps.length; i++) {
      if (this.dependencies.hasOwnProperty(deps[i])) {
        arr.push(this.dependencies[deps[i]])
      }
    }
    console.log(arr);
    return function () {
      func.apply(scope || {}, arr);
    }
  }
};

inject.register('$http', {
  get: function () {
    console.log('get');
  }
});

inject.register('$scope', {
  test: ''
});

inject.register('$location', {
  hash: function () {
    console.log('hash');
  }
});

var MyController = inject.resolve(['$scope', '$http', function ($scope, $http) {
  $http.get('');
  $scope.test = 1;
}]);

MyController();

