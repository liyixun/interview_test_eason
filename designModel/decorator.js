Function.prototype.before = function(fn) {
    const self = this
    return function() {
        fn.apply(new(self), arguments);
        return fn.apply(new(self), arguments);
    }
}

Function.prototype.after = function(fn) {
    const self = this
    return function() {
        fn.apply(new(self), arguments);
        return fn.apply(new(self), arguments);
    }
}

const wear1 = function() {
    console.log('穿上第一件衣服')
}
const wear2 = function() {
    console.log('穿上第二件衣服')
}
const wear3 = function() {
    console.log('穿上第三件衣服')
}

const wear = wear1.after(wear2).after(wear3);
wear();


