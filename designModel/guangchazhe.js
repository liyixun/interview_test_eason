//  Object.defindProperty 观察者模式
var obj = {
    firstName: '',
    lastName: ''
}

Object.defineProperty(obj, 'fullName', {
    get() {
        return this.firstName + ' ' + this.lastName;
    },
    set(val) {
        console.log('值被更改了')
        var names = fullName.trim().split(' ');
        if (2 === names.length) {
            this.firstName = names[0];
            this.lastName = names[1];
        }
    }
});

obj.firstName = 'eason';
obj.lastName = 'lee';
console.log(obj.fullName);

obj.fullName = 'simin han';
console.log(obj.firstName);
console.log(obj.lastName)



