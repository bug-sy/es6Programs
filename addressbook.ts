import datalog from './example.json';
import { rawListeners } from 'process';

const fs = require('fs');
const path = require('path');


const readline = require('readline-sync');
let firstname: any;
let lastname: any
let address: any
let state: any
let phonenumber: any
let arrayPersonalDetail:any;
let continuation ;

var obj = {
    personalDetail: []
 };

 var deleteMode;

const insertUser = () => {
 firstname = readline.question("What is your firstname? ");
 lastname = readline.question("What is your lastname? ")
 address = readline.question("What is your address? ")
 state = readline.question("what is your state? ")
 phonenumber = readline.question("what is your phonenumber")

 obj.personalDetail.push({firstname: firstname, lastname: lastname, address: address, state: state, phonenumber: phonenumber})

 console.log("+++++++++++++++++++++++++++++++++++++++")
    for(let item in obj.personalDetail){
        console.log(obj.personalDetail[item])
    }
 console.log("+++++++++++++++++++++++++++++++++++++++")

}

var final = () => {
  deleteMode = readline.question("if you want to delete ? "); 

 if(deleteMode === 'y')
 {

     let numberToDelete = readline.question("Enter the number to be deleted ")
     fs.readFile('student-4.json', function (err: any, data: string) {
     let json = JSON.parse(data)

     for (let item = 0; item<json.personalDetail.length; item++){
     if(item == numberToDelete){

        console.log(item == numberToDelete)

        console.log("popped content is" + json.personalDetail.pop(item) )

     }
     }
     console.log(json.personalDetail)
     fs.writeFileSync("student-4.json", JSON.stringify(json))

  })
 }
}


let enteringData = () => {
 var firstRun = false
    do{
    if(firstRun === false){
        insertUser()

        var json = JSON.stringify(obj);

        fs.writeFileSync('student-4.json', json);

      firstRun = true
    }


    else{
        insertUser()

        fs.readFile('student-4.json', function (err: any, data: string) {
        var json = JSON.parse(data)
        
        for (let item = 1;item<obj.personalDetail.length;item++){
            json.personalDetail.push(obj.personalDetail[item])
        }
        
        fs.writeFileSync("student-4.json", JSON.stringify(json))
        
    })

    }
    continuation = readline.question("Do you want to add more personal detail ? ");
    }while(continuation === 'y' )
}

/////////////////////////////////////////////////////////////////////////////////////

let sortingData = () => {
  var firstRun = false 
  let  obj = {
  personalDetail: []
  };

  let sortedFirst = {
    personalDetail: []
  }

  let afterSort = {
    personalDetail: []
  }

 
     fs.readFile('student-4.json', function (err: any, data: string) {
     var json = JSON.parse(data)
     
     for (let item = 0;item<json.personalDetail.length;item++){
         obj.personalDetail.push(json.personalDetail[item].firstname)
     }
     console.log(obj.personalDetail)
     console.log("after sorting")
     sortedFirst.personalDetail = obj.personalDetail.sort()
     console.log(sortedFirst.personalDetail)

     for(let sort =0;sort<sortedFirst.personalDetail.length;sort++){

      for(let sortedName =0;sortedName<json.personalDetail.length;sortedName++){

        //console.log("value" + (sortedFirst.personalDetail[sort] == json.personalDetail[sortedName].firstname))
        if(sortedFirst.personalDetail[sort] == json.personalDetail[sortedName].firstname){
          console.log("value" + (sortedFirst.personalDetail[sort] == json.personalDetail[sortedName].firstname))
          afterSort.personalDetail.push(json.personalDetail[sortedName])
        }
      }

     }
     fs.writeFileSync("student-4.json", JSON.stringify(afterSort))
     
 })
 }


 ////////////////////////////////////////////////////////////////////////////////////////////////////
 let editingData = () => {
  console.log("editing")
  let  obj = {
  personalDetail: []
  };

 
     fs.readFile('student-4.json', function (err: any, data: string) {
     var json = JSON.parse(data)
     
     for (let item = 0;item<json.personalDetail.length;item++){
        obj.personalDetail.push(json.personalDetail[item])
     }

     for(let theData = 0; theData < obj.personalDetail.length; theData++ ){
        console.log((theData) + " => { " + obj.personalDetail[theData].firstname + " " + obj.personalDetail[theData].lastname + " " + obj.personalDetail[theData].address + " " + obj.personalDetail[theData].phonenumber + " " +obj.personalDetail[theData].state+ " } ")
     }
     
     
    let selectData = readline.question("Select the number you want to data from ")
    
     for(let theData = 0; theData < obj.personalDetail.length; theData++ ){
       if(selectData == theData){
          console.log((theData) + " => { " + obj.personalDetail[theData].firstname + " " + obj.personalDetail[theData].lastname + " " + obj.personalDetail[theData].address + " " + obj.personalDetail[theData].phonenumber + " " +obj.personalDetail[theData].state+ " } ")
          let dataEdit =  readline.question("Mention the data you want to edit firstname,lastname,address,state,phonenumber => ");
          console.log(dataEdit)
          if(dataEdit === "firstname"){
          obj.personalDetail[theData].firstname = readline.question(dataEdit +" Change it to => ")
          }
          else if (dataEdit == "lastname"){
            obj.personalDetail[theData].lastname = readline.question(dataEdit + "Change it to => ")
          }
          else if (dataEdit == "state"){
            obj.personalDetail[theData].state = readline.question(dataEdit + "Change it to => ")
          }
          else if (dataEdit == "address"){
            obj.personalDetail[theData].address = readline.question(dataEdit + "Change it to => ")
          }
          else{
            obj.personalDetail[theData].phonenumber = readline.question(dataEdit + "Change it to => ")
          }
          console.log("changed to " + obj.personalDetail[theData].firstname)
        }  
      }
     
      fs.writeFileSync("student-4.json", JSON.stringify(obj))

     
    })
 }



///////////////////////////////////////////////////////////////////////////////////////////////////
let inputOperation =  readline.question("Press 1 for deletion of data ?\n Press 2 for adding data\n Press 3 for sorting data\n Press 4 for editing data => ");
     switch (inputOperation) {
            case "1":
              final()
              break;
            case "2":
             enteringData()
              break;
            case "3":
              sortingData()
              break
            case "4":
              editingData();
              break;
            default:
                
      }
  

