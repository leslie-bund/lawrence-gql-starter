const EmployeesFactory = require('../services/employeeService');
const RoleFactory = require('../services/roleService');
const ProjectFactory = require('../services/projectService');
const EmployeesRoleFactory = require('../services/employeesRoleService');
const EmployeeProjectFactory = require('../services/employeeProjectsService');

const resolvers = {
        Query: {
                getAllEmployees: ()=>{
                        return EmployeesFactory.getEmployees();
                },
                getOneEmployee:  (_parent, args, _context, _info)=>{
                        const {id} = args;
                        console.log("from resolver===>",id);
                        return  [EmployeesFactory.getEmployee(id)];
                },
                searchEmployeeByEmail:  async (_parent, args, _context, _info)=>{
                        const {email} = args;
                        const allEmployees = await EmployeesFactory.getEmployees();
                        return  allEmployees.filter(employee=> employee.email.includes(email));
                },
                searchEmployeeByName:  async (_parent, args, _context, _info)=>{
                        const {name} = args;
                        const allEmployees = await EmployeesFactory.getEmployees();
                        return  allEmployees.filter(employee=> employee.first_name.includes(name) || employee.last_name.includes(name));
                },

                getRoles: ()=>{
                        return RoleFactory.getRoles();
                },

                getRole: (_parent, args, _context, _info)=>{
                        const {id} = args;
                        return RoleFactory.getRole(id);
                },

                getProjects: (_parent, args, _context, _info)=>{
                        return ProjectFactory.getProjects();
                },

                getProject: (_parent, args, _context, _info)=>{
                        const {id} = args;
                        return ProjectFactory.getProject(id);
                },
                
                loginEmployee:(_parent, args, _context, _info)=>{
                        const {email, password} = args.data;
                        return EmployeesFactory.loginEmployee(email,password);
                },

                getEmployeesRoles:()=>{
                        return EmployeesRoleFactory.getEmployeesRoles();
                },

                getEmployeeRole: (_parent, args, _context, _info)=>{
                        const {id} = args;
                        return EmployeesRoleFactory.getEmployeeRole(id);
                },

                getEmployeesProjects:()=>{
                        return EmployeeProjectFactory.getEmployeesProjects();
                },

                getEmployeeProject: (_parent, args, _context, _info)=>{
                        const {id} = args;
                        return EmployeeProjectFactory.getEmployeeProject(id);
                },
        },

        Mutation: {
                createNewEmployee: (_parent, args, _context, _info)=>{
                        const {first_name, last_name,email,country,password} = args.employee;
                        return EmployeesFactory.createEmployee(first_name, last_name,email,country,password);
                },
                updateEmployee: (_parent, args, _context, _info)=>{
                        const {first_name, last_name,email,country} = args.employee;
                        const {id} = args;
                        return EmployeesFactory.updateEmployee(id,{first_name, last_name,email,country});
                },

                updateRole:  (_parent, args, _context, _info)=>{
                        const {title, description} = args.role;
                        const {id} = args;
                        console.log("from resolver id is===>",id);
                        return  RoleFactory.updateRole(id,{title, description});
                },
                
                deleteEmployee: (_parent, args, _context, _info)=>{
                        const {id} = args;
                        return EmployeesFactory.deleteEmployee(id);
                },
                
                deleteRole: (_parent, args, _context, _info)=>{
                        const {id} = args;
                        return RoleFactory.deleteRole(id);
                },
                
                createRole: (_parent, args, _context, _info)=>{
                        const {title, description} = args.role;
                        return RoleFactory.createRole(title, description);
                },
                
                createProject: (_parent, args, _context, _info)=>{
                        const {name, description} = args.project;
                        return ProjectFactory.createProject(name, description);
                },
                
                deleteProject: (_parent, args, _context, _info)=>{
                        const {id} = args;
                        return ProjectFactory.deleteProject(id);
                },

                updateProject:  (_parent, args, _context, _info)=>{
                        const {name, description} = args.role;
                        const {id} = args;
                        console.log("from resolver id is===>",id);
                        return  ProjectFactory.updateProject(id,{name, description});
                },

                createEmployeeRole: (_parent, args, _context, _info)=>{
                        const {employee_id, role_id} = args.employeeRole;
                        return EmployeesRoleFactory.createEmployeeRole(employee_id,role_id);
                },

                deleteEmployeeRole: (_parent, args, _context, _info)=>{
                        const {id} = args;
                        return EmployeesRoleFactory.deleteEmployeeRole(id);
                },

                updateEmployeeRole:  (_parent, args, _context, _info)=>{
                        const {employee_id, role_id} = args.employeeRole;
                        const {id} = args;
                        console.log("from resolver id is===>",id);
                        return  EmployeesRoleFactory.updateEmployeeRole(id,{employee_id, role_id});
                },

                createEmployeeProject: (_parent, args, _context, _info)=>{
                        const {employee_id, project_id} = args.employeeProject;
                        return EmployeeProjectFactory.createEmployeeProject(employee_id,project_id);
                },

                deleteEmployeeProject: (_parent, args, _context, _info)=>{
                        const {id} = args;
                        return EmployeeProjectFactory.deleteEmployeeProject(id);
                },

                updateEmployeeProject:  (_parent, args, _context, _info)=>{
                        const {employee_id, project_id} = args.employeeRole;
                        const {id} = args;
                        console.log("from resolver id is===>",id);
                        return  EmployeeProjectFactory.updateEmployeeProject(id,{employee_id, project_id});
                },
        }
}

module.exports = resolvers;
