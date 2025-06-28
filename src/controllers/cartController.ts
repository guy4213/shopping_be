import { Request, Response } from 'express';
import prisma from '../prismaClient.js';

export const saveCart = async (req: Request, res: Response) => {
  const items = req.body.items; // Expecting: { items: [{ name, quantity, categoryId }] }

  try {
    const newCart = await prisma.cart.create({ data: {} });

    for (const item of items) {
      await prisma.item.create({
        data: {
          name: item.name,
          quantity: item.quantity,
          categoryId: item.categoryId,
          cartId: newCart.id,
        },
      });
    }
    console.log('Cart saved:', newCart);
    res.status(201).json({ message: 'Cart saved successfully', cartId: newCart.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save cart' });
  }
};

export const getAllCarts = async (_req: Request, res: Response) => {
  try {
    const carts = await prisma.cart.findMany({
      include: { items: true },
    });
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch carts' });
  }
};
