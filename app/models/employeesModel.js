const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({
        id:{
                type: Number,
                unique:true,
                dropDups: true
        },
        first_name:{
                type:String,
                required:true,
        },
        last_name:{
                type:String,
                required:true,
        },
        email:{
                type:String,
                required:true,
                unique:true
        },
        country:{
                type:String,
                default:null,
                required:true
        },
        password:{
                type:String,
                required:true
        },
},
{timestamps:true});


const EmployeeRoleSchema = new mongoose.Schema({
        id:{
                type: Number,
                unique:true,
                dropDups: true
        },
        employee_id:{
                type:Number,
                ref:'Employee',
                required:true,
        },
        role_id:{
                type:Number,
                ref: 'Role',
                required:true,
        },
});

const RoleSchema = new mongoose.Schema({
        id:{
                type: Number,
                unique:true,
                dropDups: true},
        title:{
                type:String,
                enum:['Admin','Manager','Senior','Junior'],
                required:true,
        },
        description:{
                type:String,
                default:null,
                required:true
        },
});

const EmployeeProjectSchema = new mongoose.Schema({
        id:{
                type: Number,
                unique:true,
                dropDups: true,
        },
                
        project_id:{
                type:Number,
                ref: 'Project',
                required:true,
        },
        employee_id:{
                type:Number,
                ref: 'Employee',
                required:true
}
});

const ProjectSchema = new mongoose.Schema({
        id:{
                type: Number,
                unique:true,
                dropDups: true
        },
        name:{
                type:String,
                required:true,
        },
        description:{
                type:String,
                default: null,
                required:true
        }
});
 

const Employee  = mongoose.model('Employee', EmployeeSchema);
const Employee_role  = mongoose.model('EmployeeRole', EmployeeRoleSchema);
const Role  = mongoose.model('Role', RoleSchema);
const Project  = mongoose.model('Project', ProjectSchema);
const EmployeeProject  = mongoose.model('EmployeeProject', EmployeeProjectSchema);

class Models{
        static getModels(){
                return{
                        Employee,
                        Employee_role,
                        EmployeeProject,
                        Role,
                        Project
                }
        };
};
module.exports = Models;