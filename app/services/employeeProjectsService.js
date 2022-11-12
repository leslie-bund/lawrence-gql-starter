const Models = require('../models/employeesModel');

class EmployeeProjectFactory{

        static EmployeeProjectModel = Models.getModels().EmployeeProject;

        static async createEmployeeProject(employee_id,project_id){
                let err = null;
                try{
                        const employeeRoleExist =   await this.EmployeeProjectModel.find({project_id,employee_id});
                        if(employeeRoleExist.length > 0){
                                err = 'specified employee project already exists, please use a different role  and try again.';
                                throw new Error('specified employee project already exists, please use a different role  and try again.');
                        }
                        else{
                                let id;
                                const employeeProjects =   await this.EmployeeProjectModel.find();
                                if(employeeProjects.length === 0){
                                         id = 1;
                                }else if(employeeProjects.length > 0){
                                        id = employeeProjects[employeeProjects.length-1].id + 1;
                                }
                        const data = {id,employee_id,project_id};
                        const employeeProject = new this.EmployeeProjectModel(data);
                        const newEmployeeProject = await employeeProject.save();
                        return newEmployeeProject;
                        }
                }catch(error){
                        console.log(error);
                        throw new Error(`error occured while creating employee project: ${err}`);
                }
        }
        static async getEmployeesProjects(){
                try{
                        const employeesProjects = await this.EmployeeProjectModel.find();
                        return employeesProjects;
                }catch(error){
                        console.log(error);
                        throw new Error('error occured while getting employees projects');
                }
        }
        static async getEmployeeProject(id){
                try{
                        const employeeProject = await this.EmployeeProjectModel.find({id});
                        return employeeProject;
                }catch(error){
                        console.log(error);
                        throw new Error('error occured while getting employee project');
                }
        }

        static async updateEmployeeProject(id, data){
                try{
                        const employeeProject = await this.EmployeeProjectModel.findOne({id})
                        data.employee_id = employeeProject.employee_id;
                         const updatedEmployeeProject =   await this.EmployeeProjectModel.findOneAndUpdate({id},data, {new:true});
                         console.log(updatedEmployeeProject);
                         return updatedEmployeeProject;
                }catch(error){
                         console.log("update project error",error);
                         throw new Error('update employee project error');
 
                 }
         }
        static async deleteEmployeeProject(id){
                try{
                        const employeeProject = await this.EmployeeProjectModel.findOneAndRemove({id})
                         return employeeProject;
                }catch(error){
                         console.log("update project error",error);
                         throw new Error('delete employee project error');
 
                 }
         }
}
module.exports = EmployeeProjectFactory;