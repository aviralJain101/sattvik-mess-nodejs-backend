const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    roolNo:{
        type:Number,
        required: true,
        validate(value){
            if(value.toString().length!=8){
                throw new Error('Input a correct rollNo.')
            }
        }
    },
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw Error('Invalid Email')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw Error('Your password is too weak')
            }
        }
    },
    du:{type:String,required:true,trim:true},
    isActive:{
        type:Boolean,
    },
    hostel:{
        type:String,
        required: true,
        trim: true,
        lowercase: true,
    },
    roomNo:{
        type: Number,
        required: true,
        validate(value){
            if(value.toString().length>3){
                throw new Error('Enter a valid room no')
            }
        }
    },
    mobile: {
        type:Number,
        required: true,
        validate(value){
            if(value.toString().length!=10){
                throw new Error('mobileNo must be of 10 digits')
            }
        }
    },
    cancelRequest: [{
        request:{
            acceptance: {type: Boolean,default: false},
            b:{type: Number,default:0},
            l:{type: Number,default:0},
            d:{type: Number,default:0},
            diet:{
                type: Number,
                default: function(){
                    return this.b + this.l + this.d
                }
            },
            date:{type:Date}
        }
    }],
    bill:{
        breakfast:{type: Number,default:0},
        lunch:{type:Number,default:0},
        dinner:{type: Number,default:0},
        totalDiets:{type:Number,default:0},
        totalCost:{type:Number,default:0},
        extraCost:{type:Number,default:0},
    },
    tokens: [{
        token:{
            type:String,
            required:true,
        }
    }],
},{
    timestamps: true,
})

const User = mongoose.model('Users',userSchema);
module.exports = User;