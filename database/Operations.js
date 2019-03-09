module.exports = function () {

    var opers = {

        // wstawienie jednego "rekordu" do dokumentu - INSERT

        InsertOne: function (data) {
            data.save(function (error, data, dodanych) {
                console.log("dodano " + data)
            })
        },


        // pobranie wszystkich "rekordów" z dokumentu - SELECT
        // zwracamy uwagę na argument Model
        SelectAll: function (Model) {
            Model.find({}, function (err, data) {
                if (err) return console.error(err);
                console.log(data);
            })
        },

        //pobranie z ograniczeniem ilości i warunkiem - WHERE, LIMIT
        SelectByImie: function (Model, nick, count, callback) {
            var obj = {};
            Model.find({ nick: nick }, function (err, data) {
                if (err) {
                    obj.data = err
                }
                else {
                    obj.data = data
                }
                //funkcja zwracająca dane na zewnątrz
                callback(obj);
            }).limit(count)
        },

        //aktualizacja - np zamiana imienia - UPDATE

        UpdateNick: function (Model, Nick, ile) {
            Model.update({ nick: Nick }, { ilosc: ile }, function (err, data) {
                if (err) return console.error(err);
                console.log(data);
            })
        },

        //usuniecie danych - DELETE

        DeleteAll: function (Model) {
            Model.remove(function (err, data) {
                if (err) return console.error(err);
                console.log(data);
            })
        },
        //Funkcja zwracajaca wartosci
        SelectAndLimit: function (Model, nick, callback) {
            var obj = {};
            Model.find({nick:nick}, function (err, data) {
                if (err) {
                    obj.data = err
                }
                else {
                    obj.data = data
                }
                //funkcja zwracająca dane na zewnątrz
                callback(obj);
            })
        },
        // pozostałe niezbędne operacje trzeba sobie dopisać samemu, 
        // na podstawie dokumentacji Mongoose
    }

    return opers;

}
