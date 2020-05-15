var Event = function() {
    this.obj = {};
    this.cacheList = []
}

Event.prototype.on = function(eventType, fn) {
    if (!this.obj[eventType]) {
        this.obj[eventType] = [];
    }
    this.obj[eventType].push(fn);
    for (let i = 0; i < this.cacheList.length; i++) {
        this.cacheList[i]()
    }
}

Event.prototype.emit = function() {
    const arg = arguments;
    const that = this;
    function cache() {
        var eventType = Array.prototype.shift.call(arg);
        var arr = that.obj[eventType];
        for (let i = 0; i < arr.length; i++) {
            arr[i].apply(arr[i], arg);
        }
    }
    this.cacheList.push(cache);
}

var ev = new Event();

ev.on('click', function(a) {            // 订阅函数
    console.log(a);
})

ev.emit('click', 1);                    // 发布函数

