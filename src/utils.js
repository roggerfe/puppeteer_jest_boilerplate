const Utils = function () {

    this.removeSpecialChars = function (string) {
        return string.replace(/[^a-zA-Z ]/g, "")
    }
}

module.exports = new Utils();
