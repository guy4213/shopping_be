import prisma from '../prismaClient.js';
export async function getAllCategories() {
    return await prisma.category.findMany();
}
