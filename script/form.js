//Global variables
let jsonForm = [];


//this code will execute after page loading
$(document).ready(function () {
    let y = {};
    //take the file from the file.json
    takeFileFromJson();
});
/*
function showDataForTask(fileData) {
    let contact = fileData['contact'];
    console.log(contact);
    let standard = contact['standard'];
    console.log(standard);
    $.each(contact, function (key, value) {
        //console.log("this is key ----",key);
        //console.log("this is value---",value);
        //only one console.log();
        for (let i = 0; i < value.length; i++) {
            console.log(value[i]);

        }
    });
}

 */
function takeFileFromJson() {
    $.ajax({
        type: "GET",
        async: "false",
        url: "data/file.json",
        success: function (response) {
            //showDataForTask(response);
            let dataFile =response;

            for (let formParameters of dataFile.contact.standard) {
               // document.getElementById("formFile").innerHTML += formParameters["field_name"] + "</br>"
                //document.getElementById("formFile").innerHTML += `<input type="${formParameters}"> </br></br>`;
            }
        }
    });
}





















