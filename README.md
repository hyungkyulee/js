# js
Let's master the Javascript

## Test Environment

Install Node
Install npm

create sampleCode.js as a main function to run the test code
``` javascript
module.exports.main = function() {
    var str = 'Javascript String Type';
    console.log(str);
}
```

Create package.json
``` json
{
    "scripts": {
        "test": "node -e \"require('./sampleCode').main()\""
    }
}
```
> For linux system : "test-linux": "node -e 'require(\"./sampleCode\").main()'",
> For win10 : "test-window": "node -e \"require('./sampleCode').someFunction()\"",

Run the code
```
npm run test
```
