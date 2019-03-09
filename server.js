var fs = require("fs");
var http = require("http");
var qs = require("querystring");
var socketio = require("socket.io")
var mongoose = require("mongoose")
var Models = require("./database/Models.js")(mongoose)
mongoose.connect('mongodb://localhost/users');
var Operations = require("./database/Operations.js")
var db;
var opers = new Operations();
var Nick = [];
var UserReady = false;
var tab_user1 = [];
var tab_user2 = [];
var ilosc = 0;
var mongoDB;
var server = http.createServer(function (request, response) {
    //console.log(request.url)
    switch (request.method) {
        case "GET":
            if (request.url === "/") {

                fs.readFile("static/index.html", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url.indexOf(".js") != -1) {

                fs.readFile("static/" + request.url, function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url.indexOf(".mp3") != -1) {

                fs.readFile("static/" + request.url, function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'audio/mpeg' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url.indexOf(".wav") != -1) {

                fs.readFile("static/" + request.url, function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'audio/x-wav' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url.indexOf(".png") != -1) {

                fs.readFile("static/" + request.url, function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url.indexOf(".gif") != -1) {

                fs.readFile("static/" + request.url, function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/gif' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url.indexOf(".JPG") != -1) {

                fs.readFile("static/" + request.url, function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url.indexOf(".obj") != -1) {
                fs.readFile("static/" + request.url, function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'text/plain' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url.indexOf(".mtl") != -1) {
                fs.readFile("static/" + request.url, function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'text/plain' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/jpg/waternormals.jpg") {

                fs.readFile("static/jpg/waternormals.jpg", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/models/HAMINA.PNG") {
                fs.readFile("static/models/Hamina.png", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/jpg/IntroSky.jpg") {
                fs.readFile("static/jpg/IntroSky.jpg", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/jpg/Water.jpg") {
                fs.readFile("static/jpg/Water.jpg", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/css/interface.css") {

                fs.readFile("static/css/interface.css", function (error, data) {
                    response.writeHead(200, { 'Content-Type': 'text/css' });
                    response.write(data);
                    response.end();
                })
            }
            else {
                response.writeHead(404, { 'Content-Type': 'text/html' });
                response.write("<h1>404 - brak takiej strony</h1>");
                response.end();
            }
            break;

    }


})
server.listen(3000);
console.log("serwer staruje na porcie 3000 - ten komunikat zobaczysz tylko raz");
function connectToMongo() {

    db = mongoose.connection;

    //przy wystąpieniu błędu

    db.on("error", function () {
        console.log("problem z mongo")
    });

    //przy poprawnym połaczeniu z bazą

    db.once("open", function () {
        console.log("mongo jest podłączone - można wykonywać operacje na bazie");
        //- wewnatrz db.once("open"...) możemy wykonywać operacje na bazie MongoDB
        //- korzystając z przygotowanego modułu/klasy Operations.js

        opers = new Operations();

        //- INSERT

        //utworzenie obiektu Podatnika na podstawie Modelu
        //zaimportowanego wcześniej metodą require

        /*tab = new Models.Tab(
                        {
                            nick: "Skurwiel",
                            tab: "Junior",
                        });

        //przed wstawieniem danych do bazy
        //zalecana jest walidacja poprawności stworzenia obiektu
        //czyli czy poprawnie uzupełniono kluczowe dane

        tab.validate(function (err) {
            //console.log(err);
        });

        opers.InsertOne(tab);
        */
        //- SELECT

        //poniższa operacja wypisze w konsoli NodeJS zawartość wszystkich
        //dodanych obiektów Podatnika

        


        //- SELECT, LIMIT, WHERE

        //poniższa operacja ograniczy wyniki do 5

        //opers.SelectByImie(Models.Podatnik, "Jan", 5)

        //- UPDATE

        //poniższa operacja zaktualizuje "Jan" na "Piotr"

        //opers.UpdateImie(Models.Podatnik, "Jan","Piotr")

        //- DELETE

        //poniższa operacja usunie wszystkie "rekordy"

        //opers.DeleteAll(Models.Podatnik)
    });

    //przy rozłaczeniu z bazą

    db.once("close", function () {
        console.log("mongodb zostało odłączone");
    });
}

connectToMongo();
var io = socketio.listen(server)

io.sockets.on("connection", function (client) {
    console.log("klient sie podłączył" + client.id)
    client.on("Logowanie", function (data) {
        //opers.SelectAll(Models.Tab)
        if (Nick[0] == data.nick || Nick[1] == data.nick) {
            io.sockets.connected[client.id].emit("Logowanie", { nick: "used"/*, usa: data.usa, japan: data.japan */});
        }
        else if (Nick.length >= 2) {
            io.sockets.connected[client.id].emit("Logowanie", { nick: "full"/*, usa: data.usa, japan: data.japan */});
        } else if (Nick.length < 2) {
            

            //opers.InsertOne(nick);
                    
            opers.SelectByImie(Models.Nick, "" + data.nick + "", 5, function (daata) {
                //console.log(data)
                //mongoDB = daata;
                //console.log(data)
                //console.log(data.data.length)
                //console.log(data.data[0].ilosc)
                //console.log(data)
                if (daata.data.length != 0) {
                    console.log("Stary")
                    ilosc = daata.data[0].ilosc
                    io.sockets.connected[client.id].emit("Logowanie", { nick: data.nick, usa: data.usa, japan: data.japan, ilosc: ilosc });
                }
                else if (daata.data.length == 0) {
                    //Utworzenie nowego rekordu z wynikami
                    console.log("Nowy")
                    nick = new Models.Nick(
                        {
                            nick: data.nick,
                            ilosc: 0
                        });
                    console.log(nick)
                    //przed wstawieniem danych do bazy
                    //zalecana jest walidacja poprawności stworzenia obiektu
                    //czyli czy poprawnie uzupełniono kluczowe dane

                    nick.validate(function (err) {
                        console.log("err"+err);
                    });
                    console.log(nick)
                    opers.InsertOne(nick);
                    io.sockets.connected[client.id].emit("Logowanie", { nick: data.nick, usa: data.usa, japan: data.japan, ilosc: 0 });
                }
                
            })
            
            //console.log(mongoDB)
            //console.log(mongoDB)
            
            Nick[Nick.length] = data.nick
                                 
        }
        
    })
    client.on("Ready", function (data) {
        if (UserReady) {
            tab_user2 = data.tab_statki
            io.sockets.emit("Ready", { allReady: true })
            io.sockets.connected[client.id].emit("Tablica", { tab_statki: tab_user1 })
            client.broadcast.emit("Tablica", { tab_statki: tab_user2 });
        } else if (!UserReady) {
            tab_user1 = data.tab_statki
            UserReady = true
            io.sockets.connected[client.id].emit("Ready", { allReady: false })
        }
    })
    client.on("Ruch", function (data) {
        client.broadcast.emit("Ruch", { x: data.x, z: data.z, trafione: data.trafione, licznik: data.licznik });
    })
    client.on("Wygrana", function (data) {
        /*nick = new Models.Nick(
                        {
                            nick: data.nick
                        });

        //przed wstawieniem danych do bazy
        //zalecana jest walidacja poprawności stworzenia obiektu
        //czyli czy poprawnie uzupełniono kluczowe dane

        nick.validate(function (err) {
            //console.log(err);
        });

        opers.InsertOne(nick);*/
        //opers.UpdateNick(Models.Nick, "" + data.nick + "", 2)
        //console.log(data.nick,data.ilosc)
        opers.UpdateNick(Models.Nick, data.nick, data.ilosc)
        client.broadcast.emit("Przegrana", { lose: true });
        /*opers.SelectByImie(Models.Nick, "" + data.nick + "", 5, function (data) {
            console.log(data)
            io.sockets.connected[client.id].emit("Wygrana", { nick: data });
        })*/
    })
})