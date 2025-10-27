import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
    return await prisma.comidas.findMany({
        orderBy: { id: 'asc' }
    });
}

export const findById = async (id) => {
    return await prisma.comidas.findUnique({
        where: { id: Number(id) }
    })
}

export const criar = async (dado) => {
    return await prisma.comidas.create({
        data: {
            nome: nome.data,
            tipo: tipo.data,
            preco: preco.data,
            descricao: descricao.data
        }
    })
}