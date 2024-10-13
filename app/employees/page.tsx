
import AddEmployeeForm from '@/components/forms/AddEmployeeForm';
import EmployeeList from '@/components/EmployeeList';

const EmployeePage = () => {
  return (
    <div>
      <h1>Employee Management</h1>
      <AddEmployeeForm />
      <EmployeeList />
    </div>
  );
};

export default EmployeePage;
