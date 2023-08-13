const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            ref: 'user',
            required: true,
        },
        reactions: [Reaction],
    },
    {
        toJSON: {
        virtuals: true,
        },
        id: false,
    }
);

//Has to be called on each individual instance
thoughtSchema.methods.formatTimestamp = function () {
    const date = new Date(this.createdAt);
    const formattedDate = date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric" });
    return formattedDate;
}

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;