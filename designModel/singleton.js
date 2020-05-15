// 单例设计模式
const singleton = function(name) {
    this.name = name;
    this.instance = null;
}

singleton.prototype.getName = function() {
    return this.name;
}

singleton.getInstance = function(name) {
    if (!this.instance) {
        this.instance = new singleton(name);
    }
    return this.instance;
}

let a = singleton.getInstance('eason');
let b = singleton.getInstance('lee');
console.log(a === b);
