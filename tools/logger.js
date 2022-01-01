function Logger () {

}

Logger.prototype.message = function (message, prefix) {
    console.log(`${new Date().toLocaleDateString()} [${new Date().toLocaleTimeString()}] [${prefix}]: ${message}`);
}

Logger.ready = function(message) {
    Logger.prototype.message(message, 'READY');
}

Logger.info = function (message) {
    Logger.prototype.message(message, 'INFO');
}

Logger.warn = function (message) {
    Logger.prototype.message(message, 'WARN');
}

Logger.error = function (message) {
    Logger.prototype.message(message, 'ERROR');
}

module.exports = Logger;