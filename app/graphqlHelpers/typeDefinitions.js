const {gql} =require('apollo-server-express');
// const {gql} =require('graphql');


const typeDefs = gql`
type Employee {
       id:Int
       first_name: String
       last_name: String
       email: String
       country: String
}
type Role {
       id:Int
       title: String
       description: String
}

type EmployeeRole{
       id:Int
       employee_id:Int
       role_id:Int
}

type EmployeeProject{
       id:Int
       employee_id:Int
       project_id:Int

}

type Project {
       id:Int
       name: String
       description: String
}
input LoginInput {
       email: String, 
       password: String
}
input EmployeeRoleInput {
       employee_id:Int
       role_id:Int
}
type Query {
       getAllEmployees: [Employee]

       getOneEmployee(id:Int): [Employee]

       searchEmployeeByEmail(email: String): [Employee]

       searchEmployeeByName(name: String): [Employee]

       getRoles: [Role]

       getRole(id:Int): [Role]

       getProjects: [Project]

       getProject(id:Int): [Project] 

       loginEmployee(data:LoginInput):Employee

       getEmployeesRoles: [EmployeeRole]

       getEmployeeRole(id:Int): [EmployeeRole]

       getEmployeesProjects:[EmployeeProject]
       
       getEmployeeProject(id:Int): [EmployeeProject]
}
input EmployeeInput{
       first_name: String
       last_name: String
       email: String
       country: String
       password: String
}

input EmployeeProjectInput {
       employee_id:Int
       project_id:Int
}

input RoleInput {
       title: String
       description: String
}

input ProjectInput {
       name: String
       description: String
}
type Mutation {
       createNewEmployee(employee: EmployeeInput): Employee

       deleteEmployee(id:Int): Employee

       updateEmployee(id:Int, employee: EmployeeInput): Employee
       
       updateRole(id:Int, role: RoleInput): Role

       createRole(role: RoleInput): Role

       deleteRole(id: Int): Role
       
       createProject(project: ProjectInput): Project

       deleteProject(id: Int): Project

       updateProject(id:Int, role: ProjectInput): Project

       createEmployeeRole(employeeRole:EmployeeRoleInput): EmployeeRole

       deleteEmployeeRole(id:Int): EmployeeRole

       updateEmployeeRole(id:Int, employeeRole:EmployeeRoleInput) : EmployeeRole

       createEmployeeProject(employeeProject:EmployeeProjectInput): EmployeeProject

       deleteEmployeeProject(id:Int): EmployeeProject

       updateEmployeeProject(id:Int, employeeProject:EmployeeProjectInput) : EmployeeProject
}
`;
module.exports = typeDefs;
