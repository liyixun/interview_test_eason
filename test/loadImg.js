let imgSrc = 'http://static.trendygroup-it.com/crm/20190529/20ceae9c-0436-40ca-aa43-7eba4c2f8e186187342679735510626.jpg';
let imgSrc1 = 'http://img1.ochirly.com.cn/wcsstore/TrendyCatalogAssetStore/images/trendy/fiveplus/2016/d/2HD4025960090/2HD4025960090_m_1.jpg';
let imgSrc2 = 'http://img1.ochirly.com.cn/wcsstore/TrendyCatalogAssetStore/images/trendy/fiveplus/2016/d/2HD4025960090/2HD4025960090_m_6.jpg';


function loadImg(src) {
    var img = new Image();
    img.src = src;
    img.onload = function() {
        console.log('加载完成');
    }
}

function loadImgPromise(src) {
    return new Promise(resolve => {
        var img = new Image();
        img.src = src;
        img.onload = function() {
            resolve(true);
        }
    });
}

async function loadImgs(array) {
    for (let item of array) {
        await loadImgPromise(item);
    }
}

let imgSrcArray = [imgSrc, imgSrc1, imgSrc2];
loadImgs(imgSrcArray);