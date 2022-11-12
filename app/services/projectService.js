const Models = require('../models/employeesModel');

class ProjectFactory{
        
        static ProjectModel = Models.getModels().Project;
        static async createProject(name,description){
                try{
                        const projectExist =   await this.ProjectModel.find({name});
                        if(projectExist.length > 0){
                                throw new Error('specified project already exists, please use a different project and try again.');
                        }
                        else{
                                let id;
                                const projects =   await this.ProjectModel.find();
                                if(projects.length === 0){
                                         id = 1;
                                }else if(projects.length > 0){
                                        id = projects[projects.length-1].id + 1;
                                }
                        let projectModel = this.ProjectModel;
                        const data = {id,name,description};
                        const project = new projectModel(data);
                        const newproject = await project.save();
                        return newproject;
                        }
                }catch(error){
                        console.log(error);
                        throw new Error('error occured while creating project');
                }
        }
        static async getProjects(){
                try{
                        const projects = await this.ProjectModel.find();
                        return projects;
                }catch(error){
                        console.log(error);
                        throw new Error('error occured while getting projects');
                }
        }
        static async getProject(id){
                try{
                        const project = await this.ProjectModel.find({id:id});
                        return project;
                }catch(error){
                        console.log(error);
                        throw new Error('error occured while getting projects');
                }
        }

        static async updateProject(id, data){
                try{
                        const project = await this.ProjectModel.findOne({id:id})
                        data.name = project.name;
                         const updatedproject =   await this.ProjectModel.findOneAndUpdate({id},data, {new:true});
                         console.log(updatedproject);
                         return updatedproject;
                }catch(error){
                         console.log("update project error",error);
                         throw new Error('update project error');
 
                 }
         }
        static async deleteProject(id){
                try{
                        const project = await this.ProjectModel.findOneAndRemove({id:id})
                         return project;
                }catch(error){
                         console.log("update project error",error);
                         throw new Error('update project error');
 
                 }
         }
}
module.exports = ProjectFactory;

