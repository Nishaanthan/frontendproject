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
        // url: "data/file.json",
        url: "https://raw.githubusercontent.com/Nishaanthan/frontendproject/main/data/file.json",
        crossDomain: true,
        success: function (response) {
            //showDataForTask(response);
            let data = JSON.parse(response)
            for (const field of data.contact.standard) {
                document.getElementById("formFile").innerHTML += document.getElementById("formFile").innerHTML + `<input type="$field.datatype">`;
            }
        }
    });
}






















