'use client'

import AuthButtons from '@/components/AuthButtons';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const HomePage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to the MIS Dashboard</h1>

      {/* Authentication Section */}
      <div className="mb-6">
        <AuthButtons />
        {session && (
          <p className="mt-2">
            Signed in as <strong>{session.user?.email}</strong>
          </p>
        )}
      </div>

      {/* Main Dashboard Links */}
      {session ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Employees Management */}
          <Link href="/employees" passHref>
            <div className="p-4 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 cursor-pointer">
              <h2 className="text-2xl font-semibold">Employee Management</h2>
              <p>Manage all employees, departments, and their roles.</p>
            </div>
          </Link>

          {/* Additional links for other features */}
          <Link href="/departments" passHref>
            <div className="p-4 bg-green-100 rounded-lg shadow-md hover:bg-green-200 cursor-pointer">
              <h2 className="text-2xl font-semibold">Department Management</h2>
              <p>View and manage departments in the organization.</p>
            </div>
          </Link>

          {/* You can add more links here for other features, like reports, analytics, etc. */}
          <Link href="/reports" passHref>
            <div className="p-4 bg-yellow-100 rounded-lg shadow-md hover:bg-yellow-200 cursor-pointer">
              <h2 className="text-2xl font-semibold">Reports & Analytics</h2>
              <p>Generate reports and analyze data.</p>
            </div>
          </Link>
        </div>
      ) : (
        <p>Please sign in to access the management dashboard.</p>
      )}
    </div>
  );
};

export default HomePage;
