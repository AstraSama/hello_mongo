const mongoose = require("mongoose");

const mongo_db = "mongodb+srv://AstraSama:faveiro40@cluster0.ran3a.mongodb.net/";

async function main() {
    await mongoose.connect(mongo_db);

}

main()
    .then(() => console.log("Conexão realizada com sucesso"))
    .catch(err => console.log(err));

module.exports = mongo_db;  