const CryptoJS = require("crypto-js");
module.exports = {
    key : "Tedi Susanto",
    encrypt(string){
        const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(string), this.key).toString();
        return ciphertext;
    },
    decrypt(chipertext){
        var bytes  = CryptoJS.AES.decrypt(chipertext, this.key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}