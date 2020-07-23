const bcrypt = require("bcrypt");

let password = "Cash2020";

bcrypt.hash(password, 10)
    .then(hash => {
        password = hash;
        console.log(hash);
    });