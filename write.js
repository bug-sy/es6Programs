"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var path = require('path');
var readline = require('readline-sync');
var firstname;
var lastname;
var address;
var state;
var phonenumber;
var arrayPersonalDetail;
var continuation;
var obj = {
    personalDetail: []
};
var deleteMode;
var insertUser = function () {
    firstname = readline.question("What is your firstname? ");
    lastname = readline.question("What is your lastname? ");
    address = readline.question("What is your address? ");
    state = readline.question("what is your state? ");
    phonenumber = readline.question("what is your phonenumber");
    obj.personalDetail.push({ firstname: firstname, lastname: lastname, address: address, state: state, phonenumber: phonenumber });
    console.log("+++++++++++++++++++++++++++++++++++++++");
    for (var item in obj.personalDetail) {
        console.log(obj.personalDetail[item]);
    }
    console.log("+++++++++++++++++++++++++++++++++++++++");
};
var final = function () {
    deleteMode = readline.question("if you want to delete ? ");
    if (deleteMode === 'y') {
        var numberToDelete_1 = readline.question("Enter the number to be deleted ");
        fs.readFile('student-4.json', function (err, data) {
            var json = JSON.parse(data);
            for (var item = 0; item < json.personalDetail.length; item++) {
                if (item == numberToDelete_1) {
                    console.log(item == numberToDelete_1);
                    console.log("popped content is" + json.personalDetail.pop(item));
                }
            }
            console.log(json.personalDetail);
            fs.writeFileSync("student-4.json", JSON.stringify(json));
        });
    }
};
var enteringData = function () {
    var firstRun = false;
    do {
        if (firstRun === false) {
            insertUser();
            var json = JSON.stringify(obj);
            fs.writeFileSync('student-4.json', json);
            firstRun = true;
        }
        else {
            insertUser();
            fs.readFile('student-4.json', function (err, data) {
                var json = JSON.parse(data);
                for (var item = 1; item < obj.personalDetail.length; item++) {
                    json.personalDetail.push(obj.personalDetail[item]);
                }
                fs.writeFileSync("student-4.json", JSON.stringify(json));
            });
        }
        continuation = readline.question("Do you want to add more personal detail ? ");
    } while (continuation === 'y');
};
/////////////////////////////////////////////////////////////////////////////////////
var sortingData = function () {
    var firstRun = false;
    var obj = {
        personalDetail: []
    };
    var sortedFirst = {
        personalDetail: []
    };
    var afterSort = {
        personalDetail: []
    };
    fs.readFile('student-4.json', function (err, data) {
        var json = JSON.parse(data);
        for (var item = 0; item < json.personalDetail.length; item++) {
            obj.personalDetail.push(json.personalDetail[item].firstname);
        }
        console.log(obj.personalDetail);
        console.log("after sorting");
        sortedFirst.personalDetail = obj.personalDetail.sort();
        console.log(sortedFirst.personalDetail);
        for (var sort = 0; sort < sortedFirst.personalDetail.length; sort++) {
            for (var sortedName = 0; sortedName < json.personalDetail.length; sortedName++) {
                //console.log("value" + (sortedFirst.personalDetail[sort] == json.personalDetail[sortedName].firstname))
                if (sortedFirst.personalDetail[sort] == json.personalDetail[sortedName].firstname) {
                    console.log("value" + (sortedFirst.personalDetail[sort] == json.personalDetail[sortedName].firstname));
                    afterSort.personalDetail.push(json.personalDetail[sortedName]);
                }
            }
        }
        fs.writeFileSync("student-4.json", JSON.stringify(afterSort));
    });
};
////////////////////////////////////////////////////////////////////////////////////////////////////
var editingData = function () {
    console.log("editing");
    var obj = {
        personalDetail: []
    };
    fs.readFile('student-4.json', function (err, data) {
        var json = JSON.parse(data);
        for (var item = 0; item < json.personalDetail.length; item++) {
            obj.personalDetail.push(json.personalDetail[item]);
        }
        for (var theData = 0; theData < obj.personalDetail.length; theData++) {
            console.log((theData) + " => { " + obj.personalDetail[theData].firstname + " " + obj.personalDetail[theData].lastname + " " + obj.personalDetail[theData].address + " " + obj.personalDetail[theData].phonenumber + " " + obj.personalDetail[theData].state + " } ");
        }
        var selectData = readline.question("Select the number you want to data from ");
        for (var theData = 0; theData < obj.personalDetail.length; theData++) {
            if (selectData == theData) {
                console.log((theData) + " => { " + obj.personalDetail[theData].firstname + " " + obj.personalDetail[theData].lastname + " " + obj.personalDetail[theData].address + " " + obj.personalDetail[theData].phonenumber + " " + obj.personalDetail[theData].state + " } ");
                var dataEdit = readline.question("Mention the data you want to edit firstname,lastname,address,state,phonenumber => ");
                console.log(dataEdit);
                if (dataEdit === "firstname") {
                    obj.personalDetail[theData].firstname = readline.question(dataEdit + " Change it to => ");
                }
                else if (dataEdit == "lastname") {
                    obj.personalDetail[theData].lastname = readline.question(dataEdit + "Change it to => ");
                }
                else if (dataEdit == "state") {
                    obj.personalDetail[theData].state = readline.question(dataEdit + "Change it to => ");
                }
                else if (dataEdit == "address") {
                    obj.personalDetail[theData].address = readline.question(dataEdit + "Change it to => ");
                }
                else {
                    obj.personalDetail[theData].phonenumber = readline.question(dataEdit + "Change it to => ");
                }
                console.log("changed to " + obj.personalDetail[theData].firstname);
            }
        }
        fs.writeFileSync("student-4.json", JSON.stringify(obj));
    });
};
///////////////////////////////////////////////////////////////////////////////////////////////////
var inputOperation = readline.question("Press 1 for deletion of data ?\n Press 2 for adding data\n Press 3 for sorting data\n Press 4 for editing data => ");
switch (inputOperation) {
    case "1":
        final();
        break;
    case "2":
        enteringData();
        break;
    case "3":
        sortingData();
        break;
    case "4":
        editingData();
        break;
    default:
}
//# sourceMappingURL=write.js.map