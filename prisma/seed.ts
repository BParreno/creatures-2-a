import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const hydra = await prisma.creature.create({
        data: {
          name: 'Hydra',
          description: 'A huge five-headed drake',
          origin: 'Greece',
          skills: 'Invigorated Growth: Every time a head is cut off, it grows two more heads. Elemental Onslaught Each head exhales a different type of damage (Fire, Thunder, Ice, Poison and Acid, ).',
          weaknesses: 'Petrification: This creature is vulnerable to being petrified. Heart-Attack: This creature is susceptible to a powerful strike to the heart.',
        }
        })

    const hecatoncheires = await prisma.creature.create({
        data: {
          name: 'Hecatoncheires',
          description: 'Are giants with a hundred hands and fifty heads, being incrdibly powerful and formidable',
          origin: 'Greece',
          skills: 'Multi-Arm Assault: They can strike multiple foes at once thanks to their fifty arms, delivering devastating blows in rapid succession',
          weaknesses: 'Fury of the Gods: Their existence is often tied to the wrath of the gods, making them vulnerable to divine retribution',
        }
        })
    
        const griffon = await prisma.creature.create({
            data: {
              name: 'Griffon',
              description: 'A legendary creature with the body, tail, and back legs of a lion, and the head and wings of an eagle with its talons on the front legs',
              origin: 'Greece',
              skills: 'Habilidad de Prueba 1',
              weaknesses: 'Debilidad de Prueba 1',
            }
            })

    console.log ({ hydra, hecatoncheires, griffon });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
