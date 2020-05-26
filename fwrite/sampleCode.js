module.exports.main = function() {
    var str = '===================================';
    console.log(str);

    const item = [
        {
            name: 'aaaa',
            address: 'a adress',
            phone: '01111',
        },
        {
            name: 'bbbb',
            address: 'b adress',
            phone: '02222',
        },
        {
            name: 'cccc',
            address: 'c adress',
            phone: 03333,
        }
    ];
    
    // let newItem = [];
    // for(let i=0; i< side.length; i++) {
    //     areaFor.push(side[i]*side[i]);
    // }
    // var tmpItem = {};

    let newItem = item.map((i) => {
        var tmpItem = {}; // **** if tempItem is declared inside map function, it's working fine.
        tmpItem.name = i.name;
        tmpItem.phone = i.phone;
        // newItem.push(tmpItem);
        return tmpItem;
    })

    console.log(newItem);
}

module.exports.main_basic = function() {
    var head = 'Javascript fwrite Test';
    console.log(head);

    var fh = fopen("c:\\_dev\\_js\\fwrite\\MyFile.txt", 3); // Open the file for writing

    if(fh!=-1) // If the file has been successfully opened
    
    {
    
    var str = "Some text goes here...";
    
    fwrite(fh, str); // Write the string to a file
    
    fclose(fh); // Close the file

    console.log(`side : ${str}`);
    }
}
