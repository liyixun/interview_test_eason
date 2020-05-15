const myImage = (function() {
    const imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setSrc: function(src) {
            imgNode.src = src;
        }
    }
})();

const proxyImage = (function() {
    const img = new Image();
    img.onload = function() {
        myImage.setSrc(this.src);
    }
    return {
        setSrc: function(src) {
            myImage.setSrc('loading.jpg');
            img.src = src;
        }
    }
})();

proxyImage.setSrc('http://loaded.jpg')