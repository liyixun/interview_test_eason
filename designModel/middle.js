const player = function(name) {

}

// 这个函数当成中介者
const playerMiddle = (function() {
    const players = [];
    const winArr = [];
    const loseArr = [];
    return {
        add: function(name) {
            players.push(name);
        },
        win: function(name) {
            winArr.push(name)
            this.checkEnd();
        },
        lose: function(name) {
            loseArr.push(name)
            this.checkEnd();
        },
        show: function() {
            for (let winner in winArr) {
                console.log(winner + '挑战成功;')
            }
            for (let loser in loseArr) {
                console.log(loser + '挑战失败')
            }
        },
        checkEnd: function() {
            if (winArr.length + loseArr.length === players.length) {
                this.show();
            }
        }
    };

})();

