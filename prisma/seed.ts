import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const comidas = [
    { id: 1, nome: "Hambúrguer Clássico", tipo: "Lanche", preco: 18.5, descricao: "Hambúrguer com carne bovina, queijo e alface." },
    { id: 2, nome: "Brigadeiro Gourmet", tipo: "Sobremesa", preco: 5.0, descricao: "Docinho tradicional feito com cacau nobre." },
    { id: 3, nome: "Suco de Laranja Natural", tipo: "Bebida", preco: 7.0, descricao: "Suco fresco e natural, sem adição de açúcar." },
    { id: 4, nome: "Pizza Margherita", tipo: "Prato Principal", preco: 35.0, descricao: "Pizza com molho de tomate, muçarela e manjericão." },
    { id: 5, nome: "Feijoada Completa", tipo: "Prato Principal", preco: 40.0, descricao: "Feijoada com acompanhamentos tradicionais (arroz, couve, farofa)." },
    { id: 6, nome: "Açaí na Tigela", tipo: "Sobremesa", preco: 12.0, descricao: "Açaí servido com granola e banana." },
    { id: 7, nome: "Cachorro-quente Simples", tipo: "Lanche", preco: 8.0, descricao: "Pão, salsicha, ketchup, mostarda e maionese." },
    { id: 8, nome: "Café Espresso", tipo: "Bebida", preco: 4.5, descricao: "Café puro, forte e encorpado." },
    { id: 9, nome: "Tiramisu Italiano", tipo: "Sobremesa", preco: 15.0, descricao: "Sobremesa italiana com queijo mascarpone e café." },
    { id: 10, nome: "Bife à Parmegiana", tipo: "Prato Principal", preco: 30.0, descricao: "Bife empanado coberto com molho de tomate e queijo." },

    { id: 11, nome: "Salada Caesar", tipo: "Prato Principal", preco: 25.0, descricao: "Alface americana, croutons, queijo parmesão e molho caesar." },
    { id: 12, nome: "Refrigerante Cola", tipo: "Bebida", preco: 6.0, descricao: "Lata de refrigerante de cola (350ml)." },
    { id: 13, nome: "Batata Frita", tipo: "Acompanhamento", preco: 10.0, descricao: "Porção média de batatas fritas crocantes." },
    { id: 14, nome: "Brownie de Chocolate", tipo: "Sobremesa", preco: 9.0, descricao: "Brownie úmido com pedaços de chocolate meio amargo." },
    { id: 15, nome: "Sanduíche de Peito de Peru", tipo: "Lanche", preco: 16.0, descricao: "Pão integral, peito de peru, queijo branco e rúcula." },
    { id: 16, nome: "Lasanha Bolonhesa", tipo: "Prato Principal", preco: 32.0, descricao: "Lasanha com carne moída, molho de tomate e queijo." },
    { id: 17, nome: "Chá Gelado de Limão", tipo: "Bebida", preco: 5.5, descricao: "Chá preto gelado com suco de limão e um toque de hortelã." },
    { id: 18, nome: "Petit Gateau", tipo: "Sobremesa", preco: 18.0, descricao: "Bolo de chocolate quente com recheio cremoso e sorvete." },
    { id: 19, nome: "Taco de Frango", tipo: "Lanche", preco: 14.0, descricao: "Tortilha de milho recheada com frango desfiado e pico de gallo." },
    { id: 20, nome: "Filé de Salmão Grelhado", tipo: "Prato Principal", preco: 45.0, descricao: "Salmão grelhado servido com legumes no vapor." }
];

async function seed() {
    console.log('Start seeding...');

    await prisma.comidas.deleteMany({}); 

    await prisma.comidas.createMany({
        data: comidas,
        skipDuplicates: true,
    });

    console.log('Database seeded');
    await prisma.$disconnect();
}

seed().catch(e => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
});