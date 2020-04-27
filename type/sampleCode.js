module.exports.main = function() {
    var str = 'Javascript String Type';
    console.log(str);

    // Null and undefined
    var nullObj = null;
    var emptyObj;

    console.log(typeof nullObj);
    console.log(typeof nunullObjllVar === null); // false
    console.log(nullObj === null); // true

    console.log(typeof emptyObj);
    console.log(emptyObj === null); // false
    console.log(emptyObj == null); // true
}