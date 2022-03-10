
interface SeedData {
    entries: SeedEntry[];
}


interface SeedEntry {

    description: string;
    status: string;
    createdAt: number;
}


export const seedData: SeedData = {
    entries: [
        {

            description: "Pendiente: Adipisicing anim dolor nulla ipsum dolore",
            status: "pending",
            createdAt: Date.now(),
        },
        {

            description: "En-Progreso: Adipisicing anim dolor nulla ipsum dolore",
            status: "in-progress",
            createdAt: Date.now() - 10000000,
        },
        {

            description: "Terminadas: Adipisicing anim dolor nulla ipsum dolore",
            status: "finished",
            createdAt: Date.now() - 100000,
        },
    ]

}