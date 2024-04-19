class Util { 
    static isEmptyOrBlank(str) {
        return !str || str.trim().length === 0;
    }
}

module.exports = Util