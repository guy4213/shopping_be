import prisma from '../prismaClient.js';
export async function addItem(item) {
    return await prisma.item.create({
        data: {
            name: item.name,
            quantity: item.quantity,
            categoryId: item.categoryId,
            cartId: item.cartId, // הוספת cartId
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
