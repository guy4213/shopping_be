import { CartItem } from '../types.js';
import prisma from '../prismaClient.js';

export async function addItem(item: CartItem) {
  return await prisma.item.create({
    data: {
      name: item.name,
      quantity: item.quantity,
      categoryId: item.categoryId,
    },
  });
}
export async function getAllItems() {
  return await prisma.item.findMany({
    include: {
      category: true, // אם אתה רוצה גם את שם הקטגוריה
    },
  });
}
