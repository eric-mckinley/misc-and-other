
var storeURL = 'https://api.myjson.com/bins'

{
    "uri": "https://api.myjson.com/bins/jzbes"
}

function createStore(data, callbackSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', storeURL, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.responseType = 'json';

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            console.log("done, " + xhr.response);
        }
    }
    xhr.send(JSON.stringify(data));

};


function updateStore(id, data, callbackSuccess) {
}

function getStore(id, callbackSuccess) {
}