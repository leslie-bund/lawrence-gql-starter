const Models = require('../models/employeesModel');

class EmployeesRoleFactory{

        static EmployeeRoleModel = Models.getModels().Employee_role;

        static async createEmployeeRole(employee_id,role_id){
                let err = null;
                try{
                        const employeeRoleExist =   await this.EmployeeRoleModel.find({role_id,employee_id});
                        if(employeeRoleExist.length > 0){
                                err = 'specified employee role already exists, please use a different role  and try again.';
                                throw new Error('specified employee role already exists, please use a different role  and try again.');
                        }
                        else{
                                let id;
                                const employeeRoles =   await this.EmployeeRoleModel.find();
                                if(employeeRoles.length === 0){
                                         id = 1;
                                }else if(employeeRoles.length > 0){
                                        id = employeeRoles[employeeRoles.length-1].id + 1;
                                }
                        let EmployeeRoleModel = this.EmployeeRoleModel;
                        const data = {id,employee_id,role_id};
                        const employeeRole = new EmployeeRoleModel(data);
                        const newEmployeeRole = await employeeRole.save();
                        return newEmployeeRole;
                        }
                }catch(error){
                        console.log(error);
                        throw new Error(`error occured while creating employee role: ${err}`);
                }
        }
        static async getEmployeesRoles(){
                try{
                        const employeesRoles = await this.EmployeeRoleModel.find();
                        return employeesRoles;
                }catch(error){
                        console.log(error);
                        throw new Error('error occured while getting employees Roles');
                }
        }
        static async getEmployeeRole(id){
                try{
                        const employeeRole = await this.EmployeeRoleModel.find({id});
                        return employeeRole;
                }catch(error){
                        console.log(error);
                        throw new Error('error occured while getting employee role');
                }
        }

        static async updateEmployeeRole(id, data){
                try{
                        const employeeRole = await this.EmployeeRoleModel.findOne({id})
                        data.employee_id = employeeRole.employee_id;
                         const updatedEmployeeRole =   await this.EmployeeRoleModel.findOneAndUpdate({id},data, {new:true});
                         console.log(updatedEmployeeRole);
                         return updatedEmployeeRole;
                }catch(error){
                         console.log("update project error",error);
                         throw new Error('update employee role error');
 
                 }
         }
        static async deleteEmployeeRole(id){
                try{
                        const employeeRole = await this.EmployeeRoleModel.findOneAndRemove({id})
                         return employeeRole;
                }catch(error){
                         console.log("update project error",error);
                         throw new Error('delete employee role error');
 
                 }
         }
}
module.exports = EmployeesRoleFactory;