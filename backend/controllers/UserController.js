var UserModel = require('../models/UserModel.js');


module.exports = {

    /**
     * UserController.list()
     */
    list: async function (req, res) {
        try {
            const Users = await UserModel.find();
            return res.json(Users);
        } catch(err) {
            return res.status(500).json({
                message: 'Error when getting User.',
                error: err
            });
        }
    },

    /**
     * UserController.show()
     */
    show: async function (req, res) {
        try {
            const id = req.params.id;
            const User = await UserModel.findOne({_id: id});

            if (!User) {
                return res.status(404).json({
                    message: 'No such User'
                });
            }
            return res.json(User);
        } catch(err) {
            return res.status(500).json({
                message: 'Error when getting User.',
                error: err
            });
        }
    },

    /**
     * UserController.create()
     */
    create: async function (req, res) {
        try {
            const User = new UserModel({
                username : req.body.username,
                password : req.body.password,
                email : req.body.email,
                phone : req.body.phone
            });
    
            const savedUser = await User.save();
            return res.status(201).json(savedUser);
        } catch(err) {
            return res.status(500).json({
                message: 'Error when creating User',
                error: err
            });
        }
    },
    login: async function (req, res, next) {
        try {
            const user = await UserModel.authenticate(req.body.username, req.body.password);
            if (!user) {
                const err = new Error("Wrong username or password");
                err.status = 401;
                return res.json({
                    message: 'Wrong login!',
                    error: err
                });
            } else {
                req.session.userId = user._id;
                req.session.username = user.username;
                return res.json(user);
            }
        } catch(err) {
            return res.status(500).json({
                message: 'Error during login',
                error: err.message
            });
        }
    },

    /**
     * UserController.update()
     */
    update: async function (req, res) {
        try {
            const id = req.params.id;

            const User = await UserModel.findOne({_id: id});

            if (!User) {
                return res.status(404).json({
                    message: 'No such User'
                });
            }

            User.username = req.body.username ? req.body.username : User.username;
			User.password = req.body.password ? req.body.password : User.password;
			User.email = req.body.email ? req.body.email : User.email;
            User.phone = req.body.phone ? req.body.phone : User.phone;
			
            const updatedUser = await User.save();
            return res.json(updatedUser);
        } catch(err) {
            return res.status(500).json({
                message: 'Error when updating User.',
                error: err
            });
        }
    },

    /**
     * UserController.remove()
     */
    remove: async function (req, res) {
        try {
            const id = req.params.id;

            await UserModel.findByIdAndRemove(id);
            return res.status(204).json();
        } catch(err) {
            return res.status(500).json({
                message: 'Error when deleting the User.',
                error: err
            });
        }
    }
};
