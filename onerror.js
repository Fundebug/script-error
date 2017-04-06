window.onerror = function(errorMessage, scriptURI, lineNumber, columnNumber, error) {
    console.log(errorMessage);
    console.log(scriptURI);
    console.log(lineNumber);
    console.log(columnNumber);
    console.log(error);
}
