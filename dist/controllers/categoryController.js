import prisma from '../prismaClient.js';
export const getCategories = async (_req, res) => {
    try {
        const categories = await prisma.category.findMany({ include: { items: true } });
        res.json(categories);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
};
export const createCategory = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ error: 'Category name is required' });
        return;
    }
    try {
        const newCategory = await prisma.category.create({ data: { name } });
        res.status(201).json(newCategory);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create category' });
    }
};
