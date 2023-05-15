const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 16,
        match: /^[a-z0-9]+$/,
    },
    password: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 16,
        validate: {
            validator: function(value) {
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/;
                return passwordRegex.test(value);
            },
            message: '비밀번호는 영문 대문자, 소문자, 숫자, 특수문자 중 2가지 이상을 조합하여야 합니다.',
        },
    },
    passwordConfirmation: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return value === this.password;
            },
            message: '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
        },
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true,
    },
    birthday: {
        type: Date,
        required: true,
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
});

const User = mongoose.model('User', userSchema)

module.exports = { User }