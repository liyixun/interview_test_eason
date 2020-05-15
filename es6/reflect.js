var obj = {
    assign: true
};

console.log('assign' in obj);
console.log(Reflect.has(obj, 'assign'))

var proxy = new Proxy(obj, {
    set: function(target, name, value, receiver) {
        var success = Reflect.set(target, name, value, receiver);
        if (success) {
            console.log(`property  ${name} on ${target.toString()} set to  ${value}`);
        }
        return success;
    }
});
proxy.name = 'eason'
