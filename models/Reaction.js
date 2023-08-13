const { ObjectId } = require('bson');
const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            ref: 'user',
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

//Has to be called on each individual instance
reactionSchema.methods.formatTimestamp = function () {
    const date = new Date(this.createdAt);
    const formattedDate = date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric" });
    return formattedDate;
}

module.exports = reactionSchema;