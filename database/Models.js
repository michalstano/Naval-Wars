module.exports = function (mongoose) {

    // dla skrócenia późniejszej pisowni 

    var Schema = mongoose.Schema;

    // przykładowy schemat podatnika
    // zawiera niezbędne informacje na temat struktury tworzonego dokumentu
    // zwłaszcza : typ danych, czy pole jest wymagane, wartości domyślne, ew zakres

    var nickSchema = new Schema(
        {
            nick: { type: String, required: true },
            ilosc: { type: Number, required: true, min: 0, max: 10000 }
            //podatek: { type: Number, default: 0 },
            //alive: { type: Boolean, default: false },
            //age: { type: Number, required: true, min: 13, max: 120 }
        });
    // obiekt który chcemy wyeksportować z tego pliku
    // może zawierać więcej niż jeden model,
    // co jest zakomentowane

    var models = {
        Nick: mongoose.model("Nick", nickSchema),
        // Kierowca: mongoose.model("Kierowca", kierowcaSchema) , 
        // Inny: mongoose.model("Inny", innySchema) ,   
    }

    return models;

}