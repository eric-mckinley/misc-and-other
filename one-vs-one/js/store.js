
var storeURL = 'https://api.myjson.com/bins'

function createStore(data, callbackSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', storeURL, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//    xhr.responseType = 'json';

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            var created = JSON.parse(xhr.responseText);
            var n = created.uri.lastIndexOf("/");
            var binId = created.uri.substr(n +1);
            callbackSuccess(binId)
        }
    }
    xhr.send(JSON.stringify(data));
};


function addScore(binId, scoreA, scoreB) {
}

function getStore(id, callbackSuccess) {
}