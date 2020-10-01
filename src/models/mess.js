const mongoose = require('mongoose')
const validator = require('validator')

const messSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    isActive:{
        type: Boolean,
        default: true,
    },
    saturdayDiet:{type: Number, default:1.5},
    totalStudents:{type: Number},
    notice:{type: String, default: "Welcome to Satvik Mess"},
    menus:[{
        menu:{
            breakfast: {type: String},
            lunch: {type: String},
            dinner: {type: String},
        }
    }],
    cancelRequest:[{
        request:{
            acceptance: {type: Boolean,default: false},
            owner:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'Users',
            },
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
    students: [{
        student:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Users'
        }
    }],
    serviceCharge:{type: Number,default: 200},
    extractCharge:{type: Number,default:5}
})

const Mess = mongoose.model('Messes',messSchema);
module.exports = Mess;
