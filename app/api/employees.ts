import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, departmentId, roleId } = req.body;
    const employee = await prisma.employee.create({
      data: { name, email, departmentId, roleId },
    });
    res.status(201).json(employee);
  } else if (req.method === 'GET') {
    const employees = await prisma.employee.findMany();
    res.status(200).json(employees);
  }
}
