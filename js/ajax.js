function funGetXHR() {
    xhr = false;
    if ( window.XMLHttpRequest ) {
        xhr = new XMLHttpRequest();
    }
    return xhr;
}