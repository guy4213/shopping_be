import { Category } from '../types.js';
import prisma from '../prismaClient.js';

export async function getAllCategories(): Promise<Category[]> {
  return await prisma.category.findMany();
}
