======================|модулі node.js|======================

-підключення require
-змінні var, exports, global
-види модулів: JS, NODE(компіляція на C++), JSON
-модуль дерикторія DIR/index

//server.js

//var user = require('./user.js');
require('./user/index.js');//якщо global
User.prototype.hello = function(who){
    console.log("Hello, " + who.name)
}
//var vasya = new user.User("Vasya");
var vasya = new User("Vasya");
vasya.hello(vasya);

//user.js

//exports - об'єкт, через властивості якого передаються дані при підключенні модуля
//global - глобальний об'єкт(аля windows)
function User(name){
    this.name = name;
}

var phrase = require("./ua.json")
console.log(phrase.Hello);
console.log("index.js is required!");
//exports.User = User;
global.User = User;/

//ua.json

{
  "Hello": "Привіт"
}

======================|Робота з модулями|======================

- обєкт module
//console.log(module);
- module.parent модуль або самостійний додаток
//може працювати як окремий додаток або частина
- модуль-функція module.exports = function
//module.exports = exports = this
- кешування модулів
- розташування модулів, порядок пошуку
//папка node_modules або по NODE_PATH
- передаємо параметри, прийом модуль-фабрика(передавання параметрів у модуль){}

+++++++++ node in progress 1 +++++++++++++

//server.js

var db = require('db');//кешування файла модуля(достатньо раз підключити і ініціалізувати), тобто файл модуля заново ніколи не читається
db.connect();

var User = require('user');
function run(){
    var vasya = new User("Vasya");
    vasya.hello(vasya);

    console.log(db.getPhrase("Run successful"));
}
//може працювати як окремий додаток або частина:
if(module.parent){//якщо існує module.parent, то даний модуль підключено в іншому, тому експортуємо функціонал
    exports.run = run;
}else{
    run();//якщо не підключений(виконується явно), то виконуємо його безпосередньо(напр node server.js)
}
console.log(module);
//змінна оточенння, в консолі:
//set NODE_PATH=. - добавився в список шляхів, по яких проходить пошук модулів

//user

var db = require('db');
var log = require('logger')(module);//модуль-фабрика
function User(name){
    this.name = name;
}
User.prototype.hello = function(who){
    log(db.getPhrase("Hello") + ", " + who.name)
}
module.exports = User;//експортуємо тільки функцію

//db

var phrases;
exports.connect = function(){
    phrases = require('./ua');
}
exports.getPhrase = function(name){
    if(!phrases[name]){
        throw new Error("Немає такої фрази: " + name);
    }
    return phrases[name];
};

//ua.json

{
  "Hello": "Привіт",
  "Run successful": "Запуск успішний"
}

//logger

// для використання var log = require('logger')(module);:
module.exports = function(module){//отримує назву модуля, яку потрібно логувати
    return function (/* ... */){
        var args = [module.filename].concat([].slice.call(arguments));
        console.log.apply(console, args);
    }
}

======================|модуль NPM - менеджер пакетів для Node.js|======================

//npmjs.org 

//щоб опублікувати модуль потрібно створити файл з описом package.json
//згенерувати package.json з консолі - npm init
//опублікувати - npm publish
//спочатку додати користувача npm adduser
//npm help - команди

//npm s "ключові пошукові слова" - пошук модулів
//npm i "назва модуля" - встановлення модуля в папку node_modules
//npm up - оновлення модуля
//npm r "назва модуля" - видалення модуля

//закритий npm модулі - irisnpm.com
module.exports = function(){
    console.log("npm модуль - зе бест")
}

//package.json

{
  "name": "supermodule",
  "version": "0.0.1",
  "main": "index.js",//точка входу в пакет
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}

+++++++++ node in progress 2 +++++++++++++

======================|Структура пеката NPM|======================

- версія: Major.Minor.Patch semver.org
- Залежності: dependencies, devDependencies
- точка входу в модуль: main
- bin, scripts
- npm help json 
//npm i - можна встановлювати з багатьох джерел (див хелп)
//npm i express@3.3.3//після @ вказується версія

//package.json:

"dependencies":{
	"назва модуля": "версія"
}
"devDependencies" - модулі, що по замовчуванню не ставлять (потрібні, наприклад, для розробки)
+++++++++ node in progress 3 +++++++++++++

		//		Глобальні модулі

//npm i -g "назва модуля" 
- установлюються в системну дерикторію

======================|модуль util і наслідування|======================

var util = require('util');

var obj = {
    a: 5,
    b:6
}
 obj.self = obj;
console.log(util.inspect(obj));//виведення будь-якого обєкта(навіть з силкою на самого себе) подібний до toString

var str = util.format("My %s %d %j", "string", 123, {test: "obj"});//формат виведення для стрінгів, чисел та json
console.log(str);

function Animal(name){
    this.name = name;
}
Animal.prototype.walk = function(){
    console.log(this.name + " ходить")
}
function Rabbit(name){
    this.name = name;
}

util.inherits(Rabbit, Animal);//прототипне наслідування
//майже (плюс кілька властивостей) теж саме, що і:
// Rabbit.prototype = Object.create(Animal.prototype);
// Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.jump = function(){
    console.log(this.name + " пригає")
}

var rabbit = new Rabbit("Банні");
rabbit.jump();
rabbit.walk();

+++++++++ node in progress 4 +++++++++++++

======================|модуль console|======================

Найчистіші модулі: console
- використовує util.format, util.inspect
- глобальна змінна (не потрібно require)
- для потоків виводу - звичайний і для помилок:
	console.log(); == console.info();
	console.error(); == console.warn();

======================|Наслідування від помилок Error|======================
- правильні властивості name, message та можливість виводу stack

var util = require('util');

var phrases = {
    "Hello": "Привіт",
    "world": "світ"
}

function PhraseError(message){
    this.message = message;
    Error.captureStackTrace(this, PhraseError);//отримати стек(вбудований метод у v8) - відсутній в стандартному js
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = "PhraseError";

function HttpError(status, message){
    this.message = message;
    this.status = status;
    Error.captureStackTrace(this, HttpError);//отримати стек(вбудований метод у v8) - відсутній в стандартному js
}
util.inherits(HttpError, Error);
HttpError.prototype.name = "HttpError";

function getPhrase(name){
    if(!phrases[name]){
        throw new PhraseError("Такої фрази не існує: " + name);
    }
    return phrases[name];
}

function makePage(url){
    if(url!="index.html"){
        throw new HttpError(404,"Немає такої сторінки");
    }
    return util.format("%s, %s!", getPhrase("errr"), getPhrase("world"));//помилка тут
}

try {
    var page = makePage('index.html');//можна зробити помилку тут
    console.log(page);
}catch (e) {
    if(e instanceof HttpError){
        console.log(e.status, e.message)
    } else {
        console.log("Помилка %s\n Повідомлення: %s\n стек: %s", e.name, e.message, e.stack);
    }
}

======================|Події, EventEmitter, витік памяті|======================

require('events').EventEmitter
- emit(event, args...)->on(event, args...)
- зберігає порядок "обработчиков"
- можна перевірити наявність "обработчиков"
	EventEmitter.listenerCount(emitter, event) - кількість "обработчиков"
	emitter.listeners(event) - отримати "обработчики"
- якщо emit(error) без "обработчиков", то -> throw
- боротьба з "утечками" памяті

//ee.js

//аргументи передаються по ланцюжку
//"обработчики" спрацьовують в тому ж порядку, в якому були назначені
var EventEmitter = require('events').EventEmitter;
var server = new EventEmitter;
//https://nodejs.org/dist/latest-v4.x/docs/api/events.html
server.on('request', function(request){//"обработчик"
    request.approved = true;
});

server.on('request', function(request){
    console.log(request);
});
server.emit('request', {from: "Клієнт"});//генерація події + повертає true/false
server.emit('request', {from: "Ще клієнт"});
console.log(EventEmitter.listenerCount(server, 'request'));//2

//error.js

var EventEmitter = require('events').EventEmitter;
var server = new EventEmitter;
server.on('error', function(err) {
  // ..
  console.error(err);
});
server.emit('error', new Error("серверна помилка"));

//leak.js

function Request() {
    var self = this;
    this.bigData = new Array(1e6).join('*');
    this.send = function(data) {
        console.log(data);
    };
    this.onError = function() {
        self.send("вибачте, у нас проблема");
    };
setInterval(function() {
    var request = new Request();
    console.log(process.memoryUsage().heapUsed);
}, 200);

//leak1.js

var EventEmitter = require('events').EventEmitter;
var db = new EventEmitter();
function Request() {
    var self = this;
    this.bigData = new Array(1e6).join('*');
    this.send = function(data) {
        console.log(data);
    };
    db.on('data', function(info) {
        self.send(info);
    });
}
setInterval(function() {
    var request = new Request();
    console.log(process.memoryUsage().heapUsed);
}, 200);

//leak_fixed.js

var EventEmitter = require('events').EventEmitter;
var db = new EventEmitter();
db.setMaxListeners(0);
function Request() {
    var self = this;
    this.bigData = new Array(1e6).join('*');
    this.send = function(data) {
        console.log(data);
    };
    function onData(info) {
        self.send(info);
    }
    this.end = function() {
        db.removeListener('data', onData)
    };
    db.on('data', onData);
}
setInterval(function() {
    // heapdump
    var request = new Request();
    // ...
    request.end();
    console.log(process.memoryUsage().heapUsed);
    console.log(db);
}, 200);

+++++++++ node in progress 5 +++++++++++++

======================|Node.js як сервер|======================

- http.Server -> net.Srever -> EventEmitter
- Події listening, connection, request

var http = require('http');
var server = new http.Server();//слухає ip-port і відповідає на вхідні запроси(використовуючи події)
// наслідування http.Server -> net.Srever -> EventEmitter
server.listen(1337, "127.0.0.1");//ip-port
var counter = 0;
var emit = server.emit;
server.emit = function(event/*, arg1, arg2,... */) {
    console.log(event);
    // emit повертає true, якщо на подію були "обработчики", інакше false
    return emit.apply(this, arguments);
};
server.on('request', function(req, res){//req - інф від браузера(читаєм), res - обєкт відповідь(записуєм)
    res.end("Hello, world! " + ++counter);//закінчує виконання запиту і вісилає рядок
});

+++++++++ node in progress 6 +++++++++++++

======================|Ехо-сервер|======================

// http://127.0.0.1:3000/echo?message=Hello -> Hello
var http = require('http');
var url = require('url');
var server = new http.Server(function(req, res){
    console.log(req.method, req.url)
    var urlParsed = url.parse(req.url, true);
    console.log(urlParsed);
    if (urlParsed.pathname == '/echo' && urlParsed.query.message){
        res.end(urlParsed.query.message);
    } else{
        res.statusCode = 404;
        res.end("Page not found");
    }
    //чекає на відповідь res.end
});
server.listen(1337, '127.0.0.1');

+++++++++ node in progress 7 +++++++++++++

======================|Робота з заголовками|======================

// http://127.0.0.1:3000/echo?message=Hello -> Hello
var http = require('http');
var url = require('url');
var server = new http.Server(function(req, res){
    console.log(req.headers);
    var urlParsed = url.parse(req.url, true);
    if (urlParsed.pathname == '/echo' && urlParsed.query.message){
        //res.statusCode = 200;//Ok - статус за замовчуванням
        //res.writeHead(200, "OK", {'Cache-control': 'no-cache'}); - запис заголовків відразу
        res.setHeader('Cache-control', 'no-cache');//запис заголовків при наступному запиті
        res.end(urlParsed.query.message);
    } else{
        res.statusCode = 404;//Not found
        res.end("Page not found");
    }
});
server.listen(1337, '127.0.0.1');

+++++++++ node in progress 8 +++++++++++++

======================|Модуль http|======================

https://nodejs.org/dist/latest-v4.x/docs/api/http.html#http_http

    HTTP
        Class: http.Agent
            new Agent([options])
            agent.destroy()
            agent.freeSockets
            agent.getName(options)
            agent.maxFreeSockets
            agent.maxSockets
            agent.requests
            agent.sockets
        Class: http.ClientRequest//об'єкт запиту, якщо ми викор. http.client(якщо ми за допомогою node.js генеруємо даний запит)
            Event: 'abort'
            Event: 'connect'
            Event: 'continue'
            Event: 'response'
            Event: 'socket'
            Event: 'upgrade'
            request.abort()
            request.end([data][, encoding][, callback])
            request.flushHeaders()
            request.setNoDelay([noDelay])
            request.setSocketKeepAlive([enable][, initialDelay])
            request.setTimeout(timeout[, callback])
            request.write(chunk[, encoding][, callback])
        //при отриманні запиту відбувається подія 'request'-> функція-"обработчик", вхідні параметри якої:
        //1. обєкт запиту(вхідні дані) - http.IncomingMessage
        //2. обєкт відповіді - http.ServerResponse
        Class: http.Server// 1. створюється обєкт
            Event: 'checkContinue'
            Event: 'clientError'
            Event: 'close'
            Event: 'connect'
            Event: 'connection'
            Event: 'request'//вішається "обработчик" на request(прийшов запит)
            Event: 'upgrade'
            server.close([callback])
            server.listen(handle[, callback])//
            server.listen(path[, callback])//						назначається порт...
            server.listen(port[, hostname][, backlog][, callback])//
            server.maxHeadersCount
            server.setTimeout(msecs, callback)
            server.timeout
        Class: http.ServerResponse
            Event: 'close'//закриває сервер (перестає слухати), але закінчує виконувати попередні запити
            Event: 'finish'
            response.addTrailers(headers)
            response.end([data][, encoding][, callback])
            response.finished
            response.getHeader(name)
            response.headersSent
            response.removeHeader(name)
            response.sendDate
            response.setHeader(name, value)
            response.setTimeout(msecs, callback)
            response.statusCode
            response.statusMessage
            response.write(chunk[, encoding][, callback])
            response.writeContinue()
            response.writeHead(statusCode[, statusMessage][, headers])
        Class: http.IncomingMessage
            Event: 'close'
            message.headers
            message.httpVersion
            message.method
            message.rawHeaders
            message.rawTrailers
            message.setTimeout(msecs, callback)
            message.statusCode
            message.statusMessage
            message.socket
            message.trailers
            message.url
        http.METHODS
        http.STATUS_CODES
        http.createClient([port][, host])//устарівший = http.request(options, callback) - створює http запит
        http.createServer([requestListener])//створює новий обєкт класа http.Server
        http.get(options[, callback])
        http.globalAgent
        http.request(options[, callback])

======================|Розробка і відладка|======================

- supervisor - модуль(якщо щось змінюється в проекті - перезапускає node.js)
//C:\Users\yaros\AppData\Roaming\npm\supervisor.cmd
- відладка node debug
- відладка chrome (node-inspector):
//npm i -g node-inspector
//node --debug server.js
//в іншому терміналі node-inspector
- відладка під IDE

var http = require('http');
var url = require('url');
var server = http.createServer();
server.on('request',function(req, res) {
    var urlParsed = url.parse(req.url, true);
    //відладка node debug
    debugger;//з консолі node debug server.js
    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message ) {
        res.end(urlParsed.query.message);
        return;
    }
    res.statusCode = 404;
    res.end('Not Found');
} );
server.listen(1337);
console.log("server is runing");

+++++++++ node in progress 9 +++++++++++++

======================|Логування, модулі debug і winston|======================
- debug
- winston
- обгортка над winston
- NODE_DEBUG="cluster fs http module net timer tls"

- debug
//server.js

//потрібно встановити змінну через консоль:
//set DEBUG=server//або server:request, або через кому перерахувавши іентифікатори
var http = require('http');
var debug = require('debug')('server');//npm i debug//server - ідентифікатор, яким буде позначений вивід з даногго файлу
var server = http.createServer();
server.on('request', require('./request'));
server.listen(1337);
debug("server is running");//замість console.log

//request.js

var url = require('url');
var debug = require('debug')('server:request');
module.exports = function(req, res) {
    var urlParsed = url.parse(req.url, true);
    debug("Got request", req.method, req.url);
    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message ) {
        var message = urlParsed.query.message;
        debug("Echo: " + message);
        res.end(message);
        return;
    }
    debug("Unknown URL");
    res.statusCode = 404;x
    res.end("Not found");
} ;

- winston
//request.js
var url = require('url');
var log = require('winston');
module.exports = function(req, res) {
    var urlParsed = url.parse(req.url, true);
    log.info("Got request", req.method, req.url);
    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message ) {
        var message = urlParsed.query.message;
        log.debug("Echo: " + message);
        res.end(message);
        return;
    }
    log.error("Unknown URL");
    res.statusCode = 404;
    res.end("Not found");
} ;

- обгортка над winston
//server.js
var http = require('http');
var log = require('./log')(module);
var server = http.createServer();
server.on('request', require('./request'));
server.listen(1337);
log.debug("Server is running");

//request.js

var url = require('url');
var log = require('./log')(module);
module.exports = function(req, res) {
    var urlParsed = url.parse(req.url, true);
    log.info("Got request", req.method, req.url);
    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message ) {
        var message = urlParsed.query.message;
        log.debug("Echo: " + message);
        res.end(message);
        return;
    }
    log.error("Unknown URL");
    res.statusCode = 404;
    res.end('Not Found');
};

//log.js

var winston = require('winston');
module.exports = function(module) {
    return makeLogger(module.filename);
};
function makeLogger(path) {
    if (path.match(/request.js$/)) {
        var transports = [
            new winston.transports.Console({
                timestamp: true, // function() { return new Date().toString() }
                colorize: true,
                level: 'info'
            }),
            new winston.transports.File({ filename: 'debug.log', level: 'debug' })
        ];
        return new winston.Logger({ transports: transports });
    } else {
        return new winston.Logger({
            transports: []
        });
    }
}

+++++++++ node in progress 10 +++++++++++++

======================|Асинхронна розробка|======================

//Sync

// 1. Блокує -> використоваується там, де нема паралелізма
// 2. Працює try..catch
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    var info;
    if (req.url == '/') {
        try {
            info = fs.readFileSync('index.html');//синхронний виклик, блокує інтерпретатор js
        } catch (err) {
            console.error(err);
            res.statusCode = 500;
            res.end("На сервере произошла ошибка!");
            return;
        }
        res.end(info);
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
}).listen(3000);

//Async

// 1. Не блокує
// 2. не працює try..catch
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
  if (req.url == '/') {
    fs.readFile('index.html', function(err, info) {//err - об'єкт помилки
      if (err) {//при асинхронній розробці - обов'язково опрацьовувати помилки
        console.error(err);
        res.statusCode = 500;
        res.end("На сервере произошла ошибка!");
        return;
      }
      res.end(info);
    });
  } else { 
    res.statusCode = 404;
    res.end("Not Found");
  }
}).listen(3000);

======================|Подійний цикл, бібліотека libUV|======================

libUV: сила і слабкість

+ багато операцій вводу/виводу одночасно
- все потрібно робити асинхронно
- протипоказані складні обчислення

while(є "обработчики"){
	javaScript -> ввод-вивід
			   <-  Таймери
}

======================|Таймери Node.js|======================

відмінності від браузерних:
- вплив на процес ref/unref
- process.nextTick(callback); = setTimeout(callback, 0); до нових подій
- setImmediate(callback); = setTimeout(callback, 0); після новий подій
https://nodejs.org/dist/latest-v4.x/docs/api/timers.html

Timers
	clearImmediate(immediateObject)
	clearInterval(intervalObject)
	clearTimeout(timeoutObject)
	ref()
	setImmediate(callback[, arg][, ...])
	setInterval(callback, delay[, arg][, ...])
	setTimeout(callback, delay[, arg][, ...])//поки є активний таймер libUV не може завершити процес
	unref()

var http = require('http');
var server = new http.Server(function (req, res) {
	//потрібно виконати якусь операцію асинхронно:
	//setTimeout(function () {//виконається в найближчий час, але невідоми чи до, чи після наступного запиту
	process.nextTick(function () {//теж виконається асинхронно(після поточного js) + виконається до того, як прийдуть наступні події вводу-виводу, таймера і т.д.
		req.on('readable', function (){
			//має спрацювати на найближчих даних
		});
	}/*, 0*/);

	var part = 0;
	setImmediate(function run() {//з одного боку якомога скоріше, з іншого - продовжила роботу на наступній ітерації подійного циклу
		heavyCalc(part++);
		if (notFinished) setImmediate(run);
	});
}).listen(3000);

setTimeout(function () {
	server.close();
}, 2500);

var timer = setInterval(function () {
	console.log(prosess.memoryUsage(););
}, 1000);

timer.unref();//вказує libUV, що timer - другорядний

======================|Робота з файлами, модуль fs|======================

https://nodejs.org/dist/latest-v4.x/docs/api/fs.html

Class: fs.FSWatcher
	Event: 'change'
	Event: 'error'
	watcher.close()
Class: fs.ReadStream
	Event: 'open'
Class: fs.Stats
	Stat Time Values
Class: fs.WriteStream
	Event: 'open'
	writeStream.bytesWritten
fs.access(path[, mode], callback)
fs.accessSync(path[, mode])
fs.appendFile(file, data[, options], callback)
fs.appendFileSync(file, data[, options])
fs.chmod(path, mode, callback)
fs.chmodSync(path, mode)
fs.chown(path, uid, gid, callback)
fs.chownSync(path, uid, gid)
fs.close(fd, callback)
fs.closeSync(fd)
fs.createReadStream(path[, options])
fs.createWriteStream(path[, options])
fs.exists(path, callback)//перевірка на наявність файла чи дерикторії
fs.existsSync(path)
fs.fchmod(fd, mode, callback)
fs.fchmodSync(fd, mode)
fs.fchown(fd, uid, gid, callback)
fs.fchownSync(fd, uid, gid)
fs.fstat(fd, callback)
fs.fstatSync(fd)
fs.fsync(fd, callback)
fs.fsyncSync(fd)
fs.ftruncate(fd, len, callback)
fs.ftruncateSync(fd, len)
fs.futimes(fd, atime, mtime, callback)
fs.futimesSync(fd, atime, mtime)
fs.lchmod(path, mode, callback)
fs.lchmodSync(path, mode)
fs.lchown(path, uid, gid, callback)
fs.lchownSync(path, uid, gid)
fs.link(srcpath, dstpath, callback)
fs.linkSync(srcpath, dstpath)
fs.lstat(path, callback)
fs.lstatSync(path)
fs.mkdir(path[, mode], callback)
fs.mkdirSync(path[, mode])
fs.open(path, flags[, mode], callback)
fs.openSync(path, flags[, mode])
fs.read(fd, buffer, offset, length, position, callback)
fs.readdir(path, callback)
fs.readdirSync(path)
fs.readFile(file[, options], callback)
fs.readFileSync(file[, options])
fs.readlink(path, callback)
fs.readlinkSync(path)
fs.realpath(path[, cache], callback)
fs.readSync(fd, buffer, offset, length, position)
fs.realpathSync(path[, cache])
fs.rename(oldPath, newPath, callback)
fs.renameSync(oldPath, newPath)
fs.rmdir(path, callback)
fs.rmdirSync(path)
fs.stat(path, callback)//перевірка на наявність файла
fs.statSync(path)
fs.symlink(target, path[, type], callback)
fs.symlinkSync(target, path[, type])
fs.truncate(path, len, callback)
fs.truncateSync(path, len)
fs.unlink(path, callback)
fs.unlinkSync(path)
fs.unwatchFile(filename[, listener])
fs.utimes(path, atime, mtime, callback)
fs.utimesSync(path, atime, mtime)
fs.watch(filename[, options][, listener])
	Caveats
		Availability
		Filename Argument
fs.watchFile(filename[, options], listener)
fs.write(fd, buffer, offset, length[, position], callback)
fs.write(fd, data[, position[, encoding]], callback)
fs.writeFile(file, data[, options], callback)
fs.writeFileSync(file, data[, options])
fs.writeSync(fd, buffer, offset, length[, position])
fs.writeSync(fd, data[, position[, encoding]])

var fs = require('fs');

//try {
//    var data = fs.readFileSync(__filebame);//синхронне зчитування файла
//}catch (e){
//    console.error(err);
//}

fs.readFile(__filename, {encoding: 'utf-8'}, function(err, data) {//"кодировку" можна вказати тут
    if (err) {
        console.error(err);
    } else {
        console.log(data/*.toString()*/);//об'єкт buffer перетворений в рядок
    }
});

fs.stat(__filename, function(err, stats){//створює об'єкт stats з інформацією про файл
    console.log(stats.isFile());
    console.log(stats);
});

fs.writeFile("file.tmp", "data", function(err) {//створюємо файл і записуємо в нього рядок
    if (err) throw err;

    fs.rename("file.tmp", "new.tmp", function(err) {//переіменовуємо файл
        if (err) throw err;

        fs.unlink("new.tmp", function(err) {//видаляємо файл
            if (err) throw err;
        });
    });

});

+++++++++ node in progress 11 +++++++++++++

======================|Безпечний шлях до файла|======================

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var ROOT = __dirname + "/public/";

http.createServer(function(req, res) {

    if (!checkAccess(req)) {
        res.statusCode = 403;
        res.end("Tell me the secret to access!");
        return;
    }

    sendFileSafe(url.parse(req.url).pathname, res);

}).listen(3000);

function checkAccess(req) {
    return url.parse(req.url, true).query.secret == 'o_O';
}

function sendFileSafe(filePath, res) {//декодування url

    try {
        filePath = decodeURIComponent(filePath); // %D1%8F = я
    } catch(e) {
        res.statusCode = 400;
        res.end("Bad Request");
        return;
    }

    if (~filePath.indexOf('\0')) {//перевірка розкодованого url на перший байт, якого не має бути
        res.statusCode = 400;
        res.end("Bad Request");
        return;
    }

    //  /deep/nodejs.jpg ->  /Users/learn/node/path/public/deep/nodejs.jpg
    filePath = path.normalize(path.join(ROOT, filePath));//отримати повний шлях до файлу на диску

    if (filePath.indexOf(ROOT) != 0) {//перевірка на "префікс" файла - чи знаходиться файл у дозволеній дерикторії
        res.statusCode = 404;
        res.end("File not found");
        return;
    }

    fs.stat(filePath, function(err, stats) {//перевіряємо що лежить по даному шляху
        if (err || !stats.isFile()) {
            res.statusCode = 404;
            res.end("File not found");
            return;
        }

        sendFile(filePath, res);//відсилаємо файл
    });
}

function sendFile(filePath, res) {

    fs.readFile(filePath, function(err, content) {
        if (err) throw err;

        var mime = require('mime').lookup(filePath); // npm install mime
        res.setHeader('Content-Type', mime + "; charset=utf-8"); // text/html image/jpeg
        res.end(content);
    });

}

======================|Потоки в Node.js, fs.ReadStream|======================

- клас stream.Readable - реалізує потоки для читання
	fs.ReadStream(path, options); - з файла
	server.on('request', ...req...) - читання запиту відвідувача
	----%%%%%node in progress fs.ReadStream.jpg%%%%%%-----
- stream.Writable - запис
	fs.WriteStream - в файл
	server.on('request', ...req...) - запис у відповідь
	----%%%%%node in progress stream.writable.jpg%%%%%%----

var fs = require('fs');
// fs.ReadStream наслідує від stream.Readable
var stream = new fs.ReadStream(__filename, {encoding: 'utf-8'});//створення потоку(js об'єкт) з інформацією про ресурс(напр шлях до файла)
//на будь-якому етапі можна викликати метод destroy
stream.on('readable', function() {//потік генерує подію 'readable',
    var data = stream.read();//після якої ми можемо отримати частину даних(64 kB), і далі чекати на 'readable'
    //якщо не викликати stream.read() - чекатиме на даному етапі(не читатиме далі)
    console.log(data);//об'єкт buffer перетворюємо в рядок .toString() або вказуємо декодування при створенні потоку
});
stream.on('end', function() {//вкінці потоку подія 'end'
    console.log("THE END");
});
//для new fs.ReadStream  - плюс події open та close
stream.on('error', function(err){//опрацювання помилок
    if(err.code == "ENOENT"){
        console.log("Файл не знайдено");
    } else {
        console.error(err);
    }
});

================================================

var http = require('http');
var fs = require('fs');
new http.Server(function(req, res) {
    // вихідний потік - res instanceof http.ServerResponse наслідуємий від stream.Writable

    if (req.url == '/big.html') {//якщо відвідувач запросить відповідний url - віддати файл

        var file = new fs.ReadStream('big.html');//т=потік вхідних даних
        sendFile(file, res);
    }
}).listen(3000);
function sendFile(file, res){//приймає потоки для файла і для відповіді
    file.on('readable', write);//чекаємо на дані
    function write() {
        var fileContent = file.read();//зчитати
        //res.write(fileContent);//надсилання у відповідь
        if (fileContent && !res.write(fileContent)){//надіслати
            file.removeListener('readable', write);
            res.once('drain', function(){//почекати
                file.on('readable', write);
                write();
            });
        };
    };
    
    file.on('end', function(){
        res.end();//закриваємо з'єднання(файл повністю надісланий)
    });
}
//або можна скористатись вбудованим методом:
function sendFile(file, res){
    file.pipe(res);
    //pipe(process.stdout);//можна виводити одночасно в кілька потоків
    file.on('error', function(err){
        res.statusCode = 500;
        res.end("Server Error");
        console.error(err);
    });

    res.on('close', function(){
        file.destroy();//вбиваємо потік, якщо сталася помилка при завантаженні(клієнт скасував)
    });
}

======================|Чат на Node.js(long-poling), читання POST|======================

----%%%%%node in progress long-poling.jpg%%%%%%-----

----%%%%%node in progress request life circle.jpg%%%%%%-----

//index.html

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">
</head>
<body class="container">
<p class="lead">Добро пожаловать в чат!</p>

<form id="publish" class="form-inline">
    <input type="text" name="message"/>
    <input type="submit" class="btn btn-primary" value="Отправить"/>
</form>
<ul id="messages"></ul>

<script>

    publish.onsubmit = function() {//відправка форми
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/publish", true);
        xhr.send(JSON.stringify({message: this.elements.message.value}));
        this.elements.message.value = '';
        return false;
    };

    subscribe();

    function subscribe() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/subscribe", true);//отримати діні з url: "/subscribe"
        xhr.onreadystatechange = function() {
            if (this.readyState != 4) return;
            if (this.status != 200) {
                setTimeout(subscribe, 500);
                return;
            }
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(this.responseText));
            messages.appendChild(li);
            subscribe();
        };
        xhr.send(null);
    }

</script>
</body>
</html>/

//server.js

var http = require('http');
var fs = require('fs');
var url = require('url');
var chat = require('./chat');

http.createServer(function(req, res) {
    var urlParsed = url.parse(req.url);

    switch (urlParsed.pathname) {
        case '/':
            sendFile("index.html", res);
            break;
        case '/subscribe':
            chat.subscribe(req, res);
            break;
        case '/publish':
            var body = '';

            req
                .on('readable', function() {
                    body += req.read();

                    if (body.length > 1e4) {
                        res.statusCode = 413;
                        res.end("Your message is too big for my little chat");
                    }
                })
                .on('end', function() {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {
                        res.statusCode = 400;
                        res.end("Bad Request");
                        return;
                    }

                    chat.publish(body.message);
                    res.end("ok");
                });
            break;
        default:
            res.statusCode = 404;
            res.end("Not found");
    }
}).listen(3000);


function sendFile(fileName, res) {
    var fileStream = fs.createReadStream(fileName);
    fileStream
        .on('error', function() {
            res.statusCode = 500;
            res.end("Server error");
        })
        .pipe(res)
        .on('close', function() {
            fileStream.destroy();
        });
}

//chat.js


var clients = [];//поточне підключення

exports.subscribe = function(req, res) {
    console.log("subscribe");

    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    clients.push(res);//додаємо об'єкт res (клієнт) в clients
    //відповіді не робимо ~ запит "підвисає"
    res.on('close', function() {
        clients.splice(clients.indexOf(res), 1);
    });
};

exports.publish = function(message) {//відпраляє повідомлення всім клієнтам, що підписались
    console.log("publish '%s'", message);

    clients.forEach(function(res) {//відправка кожному підписаному клієнту
        console.log("send to client");
        res.end(message);
    });

    clients = [];//очищуємо, оскільки всі з'єднання закриті
};

setInterval(function() {
    console.log(clients.length);
}, 5000);

+++++++++ node in progress 12 +++++++++++++
/
======================|Домени, "асонхронний try..catch"|======================

//server.js
var http = require('http');
var fs = require('fs');
function handler(req, res) {
    if (req.url == '/') {
        fs.readFile('no-such-file', function(err, content) {
            if (err) throw err; // JSON.parse("invalid!")
            res.end(content);
        });
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
}
var server = new http.createServer(handler);
module.exports = server;

//app.js
var domain = require('domain');
var serverDomain = domain.create();
serverDomain.on('error', function(err) {//будь-які помилки, які відбудуться всередині serverDomain перехватяться даною ф-цією
    console.error("Домен перехватил %s", err);
});
serverDomain.run(function() {//запуск сервера всередині домену
    var server = require('./server');//!!!
    server.listen(3000);
});

//index.html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Привет, мир!</title>
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/twitter-bootstrap/latest/css/bootstrap.min.css">
</head>
<body class="container">
<p class="lead">Содержимое файла index.html</p>
</body>
</html>

=================
//domain.js
var domain = require('domain');
var fs = require('fs'), http = require('http');
var d = domain.create(), server;
d.on('error', function(err) {
  console.error("Домен перехватил %s", err);
});
d.run(function() {
  // d.enter();   -> process.domain//поточний об'єкт домена стає глобальним

  server = new http.Server();//якщо створений не в домені, то його можна додати d.add(server); - але server і домен мають посилання один на одного

  // d.exit();
});
console.log(server.domain);
server.on('boom', function() {
  setTimeout(function() {
    fs.readFile(__filename, function() {
      ERROR();
    });
  }, 1000);
});
server.emit('boom');
=================

//app.js
var http = require('http');
var domain = require('domain');
var handler = require('./handler');
var serverDomain = domain.create(); // домен для ошибок, выпадающих из server.listen
serverDomain.on('error', function(err) {
  console.error("Серверная ошибка %s", err);
  process.exit(255);
});
serverDomain.run(function() {
  var server = http.createServer(function(req, res) {
    var requestDomain = domain.create(); // домен для ошибок во время запроса
    requestDomain.add(req);
    requestDomain.add(res);
    requestDomain.on('error', function(err) {
      res.statusCode = 500;
      res.end(err.message);
      // ...
    });
    requestDomain.run(function() {
      handler(req, res);
    });
  });
  server.listen(3000);
});

//hendler.js
var fs = require('fs');
module.exports = function handler(req, res) {
  if (req.url == '/') {
    fs.readFile('no-such-file', function(err, content) {
      if (err) throw err; // JSON.parse("invalid!")
      res.end(content);
    });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
};

//index.html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Привет, мир!</title>
  <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/twitter-bootstrap/latest/css/bootstrap.min.css">
</head>
<body class="container">

<p class="lead">Содержимое файла index.html</p>

</body>
</html>

======================|Передача параметрів для Node.js|======================

модуль optimist
https://github.com/substack/node-optimist

var http = require('http');

var opts = require('optimist').argv;//або з process.argv
//або зі змінної оточення process.env.HOME
http.createServer(function (req, res) {
    res.end("The server is running");
}).listen(opts.port);























