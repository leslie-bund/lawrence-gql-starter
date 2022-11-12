const Models = require('../models/employeesModel');
const bcrypt = require('bcrypt');
const envs = require('../utils/env');

class EmployeesFactory{

        static EmployeeModel = Models.getModels().Employee;
        static async createEmployee(first_name,last_name,email,country,password){
                let err = null;
               try{
                       
                       const employeeExist =   await this.EmployeeModel.find({email});
                       if(employeeExist.length){
                               err = 'Employee with the specified email already exists, please use a different email and try again.';
                               throw new Error("Error occured while creating employee")
                       }
                       else{
                               let id;
                               const employees =   await this.EmployeeModel.find();
                               if(employees.length === 0){
                                        id = 1;
                               }else if(employees.length > 0){
                                       id = employees[employees.length-1].id + 1;
                               }
                               const hashedPassword = await bcrypt.hash(
                                       password,
                                       await bcrypt.genSalt(envs.saltRounds-0) 
                                );
                                const data = {id,first_name,last_name,email,country,password: hashedPassword};
                                const employee =  new this.EmployeeModel(data);
                                const newEmployee = await employee.save();
                                return newEmployee;
                       }
               }catch(error){
                       err = error;
                        console.log("Create employee error",error);
                        throw new Error('Employee creation error: ' + err);

                }
        }
       static async getEmployees(){
               try{
                        const employees =   await this.EmployeeModel.find();
                        console.log(employees);
                        return employees;
               }catch(error){
                        console.log("Get employ error",error);
                        throw new Error('Get employees error');

                }
        }
        
       static async deleteEmployee(id){
               try{
                       await Models.getModels().EmployeeProject.deleteMany({employee_id:id});
                       await Models.getModels().Employee_role.deleteMany({employee_id:id});
                        const employee =   await this.EmployeeModel.findOneAndRemove({id});
                        console.log(employee);
                        return employee;
               }catch(error){
                        console.log("Get employ error",error);
                        throw new Error('Get employees error');

                }
        }
       static async updateEmployee(id, data){
               try{
                       const employee = await this.EmployeeModel.findOne({id:id})
                       data.email = employee.email;
                        const updatedEmployee =   await this.EmployeeModel.findOneAndUpdate({id},data,{new:true});
                        console.log(updatedEmployee);
                        return updatedEmployee;
               }catch(error){
                        console.log("update employee error",error);
                        throw new Error('update employees error');

                }
        }
       static async getEmployee(id){
               try{
                        const employee =   await this.EmployeeModel.findOne({id});
                        console.log(employee);
                        return employee;
               }catch(error){
                        console.log("Get employee by id error",error);
                        throw new Error('Get employees error');

                }
        }
       static async searchEmployee(email){
               try{
                        const employee =   await this.EmployeeModel.find({email});
                        console.log(employee);
                        return employee;
               }catch(error){
                        console.log("Get employee by email error",error);
                        throw new Error('Get employees error');

                }
        }
       static async loginEmployee(email, password){
               try{
                        const employee =   await this.EmployeeModel.find({email});
                        if(!employee) throw new Error("Employee does not exist");
                        let userData;
                       await bcrypt.compare(password,employee[0]["password"],(error,result)=>{
                                if(!result){
                                        throw new Error("email or password incorrect");
                                }
                        })
                        userData = employee[0];
                        delete userData.password
                        console.log(userData);
                        return userData;
               }catch(error){
                        console.log("email or password incorrect",error);
                        throw new Error('login error: email or password incorrect');

                }
        }
};
module.exports = EmployeesFactory;

