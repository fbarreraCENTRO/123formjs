function mask(url) {
    var meta = document.createElement("meta");
    meta.setAttribute("http-equiv", "refresh");
    meta.setAttribute("content", "0; url=" + url);
}