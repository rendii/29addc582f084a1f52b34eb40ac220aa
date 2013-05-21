function main() {
    $("iframe").attr("src", getIframeUrl());
    registerEvents();
    resizeIframe()
}
function getIframeUrl() {
    var e = window.location.href;
   
    var n = e.indexOf("url=");
    if(n != -1) t = e.substr(n + 4, e.length - n - 4);
    if(t.indexOf("http://") == -1) t = "http://" + t;
    return t
}
function onArrow() {
    if(arrawState == "up") onDownArrow();
    else onUpArrow()
}
function onSearch() {
    var e = $("#qs").val();
    $("iframe").attr("src", "http://www.google.com/search?q=" + e)
}
function resizeIframe() {
    $("#iframe").height(WindowHeight() - getObjHeight(document.getElementById("toolbar")))
}
function WindowHeight() {
    var e = document.documentElement;
    return self.innerHeight || e && e.clientHeight || document.body.clientHeight
}
function getObjHeight(e) {
    if(e.offsetWidth) {
        return e.offsetHeight
    }
    return e.clientHeight
}
$(document).ready(main);
var arrawState = "up";
$(window).bind("load", function () {
    $("#iframeDownload iframe").fadeIn("15000")
})