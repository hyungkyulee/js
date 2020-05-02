module.exports.main = function() {
    var str = '===================================';
    console.log(str);

    const item = [
        {
            name: 'aaaa',
            address: 'a adress',
            phone: '1111',
        },
        {
            name: 'bbbb',
            address: 'b adress',
            phone: '2222',
        },
        {
            name: 'cccc',
            address: 'c adress',
            phone: '3333',
        }
    ];
    
    let newItem = [];
    // for(let i=0; i< side.length; i++) {
    //     areaFor.push(side[i]*side[i]);
    // }
    var tmpItem = {};

    item.map((i) => {
        // var tmpItem = {}; // **** if tempItem is declared inside map function, it's working fine.
        tmpItem.name = i.name;
        tmpItem.address = i.address;
        newItem.push(tmpItem);
        // return tmpItem;
    })

    console.log(newItem);
}

module.exports.main_basic = function() {
    var str = 'Javascript Map Test';
    console.log(str);

    const side = [2, 5, 9];
    const areaFor = [];
    let areaMap = [];

    for(let i=0; i< side.length; i++) {
        areaFor.push(side[i]*side[i]);
    }

    side.map((item) => item * item);

    console.log(`side : ${side}`);
    console.log(`area by forloop : ${areaFor}`);
    console.log(`area by map : ${areaMap}`);
}
