'use client'
import { useState } from 'react';
import { useSession } from 'next-auth/react';

const AddEmployeeForm = () => {

  const {data: session}= useSession();

  if (session?.user.role !== 'admin') {
   return <p>You do not have permission to add employees.</p>;
 }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [departmentId, setDepartmentId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, departmentId }),
    });

    if (response.ok) {
      alert('Employee added successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Department ID"
        value={departmentId}
        onChange={(e) => setDepartmentId(e.target.value)}
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;
