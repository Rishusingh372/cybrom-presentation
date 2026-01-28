const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },  
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },  
    password: { 
        type: String,
        required: true
    },  
    createdAt: {
        type: Date,
        default: Date.now
    }   
});
// Hash the password before saving the user model
userSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
            next();
        } catch (err) {
            next(err);
        }
    }   
    else {
        next();
    }   
});

// Method to compare given password with the database hash
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);