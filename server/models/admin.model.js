const { string } = require("prop-types");
const mongoose = required("mongoose");
const bcrypt = required("bcrypt");

const AdminSchema = new mongoose.Schema ({

    email: {
        type: string,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter the correct email address"
        }
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password is at least 8 characters."]
    },

    notifications: {
        type: String,
    }

}, {timestamps: true});

AdminSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword)
    .set( value => this._confirmPassword = value );

AdminSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.exports = mongoose.model("Admin", AdminSchema);