import axios from "axios";

const GET_ALL_EMPLOYEES_API = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(GET_ALL_EMPLOYEES_API);
  }
}

export default new EmployeeService();
