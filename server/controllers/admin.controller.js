const Admin = require('../models/admin.model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.findAdmin = (req,res) => {
    Admin.findOne(({ _id: req.params.id }))
    .then(onlyAdmin => res.json({ admin: onlyAdmin }))
    .catch(err => res.json ({ message: "SOMETHING WENT WRONG", error:err }));
}

module.exports.Login = (req,res) => {
    console.log(req.body);
    Admin.findOne({ email: req.body.email })
        .then(admin => {
            res, json({ admin: admin });
            if (admin === null) {
                res.json({ msg: "Invalid Login Attempt" });
            } else {
                bcrpt
                    .compare(req.body.password, admin.password)
                    .then(passwordIsValid => {
                        if (passwordIsValid) {
                            const newJWT = jwt.sign({
                                _id: admin._id
                            })
                            const secret = "mysecret";
                            res
                                .cookie("admintoken", newJWT, secret, {
                                    httpOnly: true
                                })
                                .json({ msg: "success!" })
                        } else {
                            res.json({ msg: "Invalid Login Attempt" })
                        }
                            })
                    .catch(err => res.json({ msg: "Invalid Login Attempt", error: err }));
                }
            })
            .catch(err => res.json(err));
}