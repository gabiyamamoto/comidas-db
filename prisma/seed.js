import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const comidas = [
    { nome: "Hambúrguer Clássico", tipo: "Lanche", preco: 18.5, descricao: "Hambúrguer com carne bovina, queijo e alface." },
    { nome: "Brigadeiro Gourmet", tipo: "Sobremesa", preco: 5.0, descricao: "Docinho tradicional feito com cacau nobre." },
    { nome: "Suco de Laranja Natural", tipo: "Bebida", preco: 7.0, descricao: "Suco fresco e natural, sem adição de açúcar." },
    { nome: "Pizza Margherita", tipo: "Prato Principal", preco: 35.0, descricao: "Pizza com molho de tomate, muçarela e manjericão." },
    { nome: "Feijoada Completa", tipo: "Prato Principal", preco: 40.0, descricao: "Feijoada com acompanhamentos tradicionais (arroz, couve, farofa)." },
    { nome: "Açaí na Tigela", tipo: "Sobremesa", preco: 12.0, descricao: "Açaí servido com granola e banana." },
    { nome: "Cachorro-quente Simples", tipo: "Lanche", preco: 8.0, descricao: "Pão, salsicha, ketchup, mostarda e maionese." },
    { nome: "Café Espresso", tipo: "Bebida", preco: 4.5, descricao: "Café puro, forte e encorpado." },
    { nome: "Tiramisu Italiano", tipo: "Sobremesa", preco: 15.0, descricao: "Sobremesa italiana com queijo mascarpone e café." },
    { nome: "Bife à Parmegiana", tipo: "Prato Principal", preco: 30.0, descricao: "Bife empanado coberto com molho de tomate e queijo." },
    { nome: "Salada Caesar", tipo: "Prato Principal", preco: 25.0, descricao: "Alface americana, croutons, queijo parmesão e molho caesar." },
    { nome: "Refrigerante Cola", tipo: "Bebida", preco: 6.0, descricao: "Lata de refrigerante de cola (350ml)." },
    { nome: "Batata Frita", tipo: "Acompanhamento", preco: 10.0, descricao: "Porção média de batatas fritas crocantes." },
    { nome: "Brownie de Chocolate", tipo: "Sobremesa", preco: 9.0, descricao: "Brownie úmido com pedaços de chocolate meio amargo." },
    { nome: "Sanduíche de Peito de Peru", tipo: "Lanche", preco: 16.0, descricao: "Pão integral, peito de peru, queijo branco e rúcula." },
    { nome: "Lasanha Bolonhesa", tipo: "Prato Principal", preco: 32.0, descricao: "Lasanha com carne moída, molho de tomate e queijo." },
    { nome: "Chá Gelado de Limão", tipo: "Bebida", preco: 5.5, descricao: "Chá preto gelado com suco de limão e um toque de hortelã." },
    { nome: "Petit Gateau", tipo: "Sobremesa", preco: 18.0, descricao: "Bolo de chocolate quente com recheio cremoso e sorvete." },
    { nome: "Taco de Frango", tipo: "Lanche", preco: 14.0, descricao: "Tortilha de milho recheada com frango desfiado e pico de gallo." },
    { nome: "Filé de Salmão Grelhado", tipo: "Prato Principal", preco: 45.0, descricao: "Salmão grelhado servido com legumes no vapor." },
    { nome: "Estrogonofe de Carne", tipo: "Prato Principal", preco: 33.0, descricao: "Cubos de carne com molho cremoso de mostarda e cogumelos." },
    { nome: "Risoto de Camarão", tipo: "Prato Principal", preco: 48.0, descricao: "Arroz arbóreo cozido com caldo e camarões frescos." },
    { nome: "Picanha Grelhada", tipo: "Prato Principal", preco: 55.0, descricao: "Fatia de picanha suculenta, grelhada na brasa." },
    { nome: "Nhoque de Batata", tipo: "Prato Principal", preco: 28.0, descricao: "Massa de batata caseira com molho de queijo." },
    { nome: "Moqueca de Peixe", tipo: "Prato Principal", preco: 42.0, descricao: "Cozido de peixe com leite de coco, azeite de dendê e pimentões." },
    { nome: "Wrap de Frango", tipo: "Lanche", preco: 19.5, descricao: "Tortilha recheada com frango desfiado, cream cheese e alface." },
    { nome: "Pão de Queijo Recheado", tipo: "Lanche", preco: 7.5, descricao: "Pão de queijo grande com recheio de requeijão e presunto." },
    { nome: "Coxinha de Galinha", tipo: "Lanche", preco: 6.0, descricao: "Salgado frito com massa de batata e recheio de frango." },
    { nome: "Hambúrguer de Frango Crocante", tipo: "Lanche", preco: 22.0, descricao: "Filé de frango empanado, maionese e picles no pão de brioche." },
    { nome: "Kibe Frito", tipo: "Lanche", preco: 5.5, descricao: "Salgado árabe de carne moída e trigo." },
    { nome: "Arroz Branco", tipo: "Acompanhamento", preco: 6.0, descricao: "Porção individual de arroz branco soltinho." },
    { nome: "Feijão Tropeiro", tipo: "Acompanhamento", preco: 12.0, descricao: "Feijão misturado com farinha de mandioca, bacon e linguiça." },
    { nome: "Purê de Batata", tipo: "Acompanhamento", preco: 9.0, descricao: "Purê de batata cremoso com manteiga." },
    { nome: "Brócolis no Vapor", tipo: "Acompanhamento", preco: 8.5, descricao: "Brócolis cozido no vapor e temperado com azeite." },
    { nome: "Polenta Frita", tipo: "Acompanhamento", preco: 11.0, descricao: "Tiras de polenta frita crocantes." },
    { nome: "Limonada Suíça", tipo: "Bebida", preco: 8.0, descricao: "Limonada batida com casca de limão e leite condensado." },
    { nome: "Água com Gás", tipo: "Bebida", preco: 4.0, descricao: "Garrafa de água mineral com gás (500ml)." },
    { nome: "Cerveja Artesanal IPA", tipo: "Bebida", preco: 20.0, descricao: "Cerveja Índia Pale Ale, amarga e aromática." },
    { nome: "Vinho Tinto Suave", tipo: "Bebida", preco: 28.0, descricao: "Taça de vinho tinto, levemente adocicado." },
    { nome: "Chocolate Quente", tipo: "Bebida", preco: 10.0, descricao: "Chocolate quente cremoso com chantilly." },
    { nome: "Pudim de Leite Condensado", tipo: "Sobremesa", preco: 11.0, descricao: "Pudim clássico com calda de caramelo." },
    { nome: "Mousse de Maracujá", tipo: "Sobremesa", preco: 9.5, descricao: "Mousse leve e aerada com o sabor cítrico do maracujá." },
    { nome: "Cheesecake de Frutas Vermelhas", tipo: "Sobremesa", preco: 16.0, descricao: "Torta de queijo com base de biscoito e cobertura de frutas." },
    { nome: "Crepe de Nutella com Morango", tipo: "Sobremesa", preco: 17.0, descricao: "Massa fina recheada com Nutella e fatias de morango." },
    { nome: "Gelato de Pistache", tipo: "Sobremesa", preco: 14.0, descricao: "Sorvete italiano artesanal sabor pistache." },
    { nome: "Hambúrguer Vegetariano", tipo: "Prato Principal", preco: 24.0, descricao: "Hambúrguer de grão de bico, queijo coalho e rúcula." },
    { nome: "Salada de Quinoa", tipo: "Prato Principal", preco: 29.0, descricao: "Quinoa com legumes frescos, azeitonas e azeite." },
    { nome: "Torta de Palmito", tipo: "Lanche", preco: 13.0, descricao: "Fatia de torta salgada com recheio cremoso de palmito." },
    { nome: "Suco Verde Detox", tipo: "Bebida", preco: 9.5, descricao: "Mix de couve, gengibre, maçã e água de coco." },
    { nome: "Muffin de Banana Integral", tipo: "Sobremesa", preco: 7.0, descricao: "Bolinho integral de banana e aveia." }
];

async function main() {
    console.log('Iniciando o processo de seed...');

    await prisma.comidas.deleteMany();
    console.log('Registros existentes de Comida deletados.');

    const result = await prisma.comidas.createMany({
        data: comidas,
        skipDuplicates: true,
    });

    console.log(`Seed concluído! ${result.count} novos registros de Comida criados.`);
}

main()
    .catch((e) => {
        console.error("ERRO ao executar o Seed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        console.log("Conexão com o Prisma fechada.");
    });