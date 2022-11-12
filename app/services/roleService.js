const Models = require('../models/employeesModel');

class RoleFactory{
        
        static RoleModel = Models.getModels().Role;
       static async createRole(title, description){
                try{
                        const roleExist =   await this.RoleModel.find({title});
                        if(roleExist.length){
                                throw new Error('specified role already exists, please use a different role and try again.');
                        }
                        else{
                                let id;
                                const roles =   await this.RoleModel.find();
                                if(roles.length === 0){
                                         id = 1;
                                }else if(roles.length > 0){
                                        id = roles[roles.length-1].id + 1;
                                }
                        let RoleModel = this.RoleModel;
                        const data = {id,title,description};
                        const role = new RoleModel(data);
                        const newRole = await role.save();
                        return newRole; 
                        }
                }catch(error){
                        console.log(error);
                        throw new Error('error occured while creating role');
                }
        }
        static async getRoles(){
                try{
                        const roles = await this.RoleModel.find();
                        return roles;
                }catch(error){
                        console.log(error);
                        throw new Error('error occured while getting roles');
                }
        }
        static async getRole(id){
                try{
                        const role = await this.RoleModel.find({id:id});
                        return role;
                }catch(error){
                        console.log(error);
                        throw new Error('error occured while getting roles');
                }
        }

        static async updateRole(id, data){
                try{
                        
                        const role = await this.RoleModel.findOne({id})
                        data.title = role.title;
                        console.log("from role service id is==>",id, role);
                         const updatedRole =   await this.RoleModel.findOneAndUpdate({id},data,{new:true});
                         console.log(updatedRole);
                         return updatedRole;
                }catch(error){
                         console.log("update role error",error);
                         throw new Error('update role error');
 
                 }
         }
        static async deleteRole(id){
                try{
                        const role = await this.RoleModel.findOneAndRemove({id})
                         return role;
                }catch(error){
                         console.log("update role error",error);
                         throw new Error('update role error');
 
                 }
         }
}
module.exports = RoleFactory;

