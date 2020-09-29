let companys = {
    4: "万",
    8: "亿",
};
let objectPro = Object.prototype;
let utils = {
    getCompany(str) {
        str = str.toString();
        let length = str.length;
        let num = 0;
        if (length > 8) {
            num = 8;
        } else if (length > 5) {
            num = 4;
        };
        let company = companys[num] || "";
        let num2 = new Array(num).fill(0);
        let result;
        num2 = "1" + num2.join("");
        num2 = str / num2;
        console.log(num2);
        result = length > 8 ? num2.toFixed(1) : Math.floor(num2);
        return result + company;
    },
    toType(val) {
        let type = objectPro.toString.call(val);
        return type.match(/\[object (\w+)\]/)
    },
};

export default {
    install(vue) {
        vue.prototype.$utils = utils;
    }
};