import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// POST (Create Employee)
export async function POST(req: Request) {
  const { name, email, departmentId } = await req.json();
  
  const employee = await prisma.employee.create({
    data: { name, email, departmentId },
  });

  return NextResponse.json(employee);
}

// GET (List Employees)
export async function GET() {
  const employees = await prisma.employee.findMany({
    include: { department: true },
  });

  return NextResponse.json(employees);
}
