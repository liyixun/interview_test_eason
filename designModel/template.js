const Drinks = function() {}

Drinks.prototype.firstStep = function() {
    console.log('烧开水')
}

Drinks.prototype.sencondStep = function() {
    
}

Drinks.prototype.thirdStep = function() {
    console.log('导入杯子')
}

Drinks.prototype.fourthStep = function() {
    
}

Drinks.prototype.init = function() {
    this.firstStep();
    this.sencondStep();
    this.thirdStep();
    this.fourthStep();
}

const Tea = function() {}

Tea.prototype = new Drinks();

Tea.prototype.sencondStep = function() {
    console.log('浸泡茶叶');
};

Tea.prototype.fourthStep = function() {
    console.log('加柠檬')
}

let tea = new Tea();
tea.init();

const Coffee = function() {}

Coffee.prototype = new Drinks();
Coffee.prototype.sencondStep = function() {
    console.log('冲泡咖啡')
}
Coffee.prototype.fourthStep = function() {
    console.log('加糖')
}

let coffee = new Coffee();
coffee.init()


