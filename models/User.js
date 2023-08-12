const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: function (email) {
                    const emailREGEX = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    return emailREGEX.test(email)
                },
                message: input => `${input} is not a valid email. Please enter valid entry.`
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
        ]
    }
);

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length
});

const User = model('user', userSchema);

module.exports = User;