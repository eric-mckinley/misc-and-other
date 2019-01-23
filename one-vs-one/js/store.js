
var storeURL = 'https://api.myjson.com/bins'

function createGame(data, callbackSuccess) {
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


function addScore(binId, scoreA, scoreB, callbackSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', storeURL +'/' + binId, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var storeData = JSON.parse(xhr.responseText);
            storeData.matches.push({"scorePlayerA":scoreA,"scorePlayerB":scoreB});
            saveScores(binId, storeData);
            callbackSuccess(binId, storeData);
        }
    }
    xhr.send();
}

function saveScores(binId, storeData) {
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', storeURL +'/' + binId, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//    xhr.responseType = 'json';

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var saved = JSON.parse(xhr.responseText);
            console.log('SAVE Succsess ' + saved);
        }
    }
    xhr.send(JSON.stringify(storeData));
}

function getStore(binId, callbackSuccess) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', storeURL +'/' + binId, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var storeData = JSON.parse(xhr.responseText);
            callbackSuccess(binId, storeData)
        }
    }
    xhr.send();


}