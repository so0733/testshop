const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    id: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        match: /^[a-z0-9]{4,16}$/
    },
    password: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 16,
        match: /^(?=.*[A-Za-z])(?=.*\d|.*[\[\]!@#$%^&*()\-_=+{};:,<.>]).{2,}$/
    },
    confirmPassword: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                const password = this.password;
                return value === password;
            },
            message: 'Passwords do not match'
        }
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 1,
        match: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    termsAgreement: {
        type: Boolean,
        required: true
    },
    privacyAgreement: {
        type: Boolean,
        required: true
    },
    smsAgreement: {
        type: Boolean,
        required: true
    },
    emailAgreement: {
        type: Boolean,
        required: true
    },

    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }