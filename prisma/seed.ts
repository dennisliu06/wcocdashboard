import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  console.log("seeding data");

  const company1 = await prisma.company.create({
    data: {
      name: "Nova",
      industry: "Makeup",
      website: "https://example.com",
      email: "novaman@nova.com",
      phone: "8573830183",
      location: "Waltham",
    },
  });

  const company2 = await prisma.company.create({
    data: {
      name: "Green Earth",
      industry: "Environmental",
      website: "https://greenearth.com",
      email: "hello@greenearth.com",
      phone: "+1987654321",
      location: "Austin, TX",
    },
  });

  const company3 = await prisma.company.create({
    data: {
      name: "Foodie Express",
      industry: "Food & Beverage",
      website: "https://foodieexpress.com",
      email: "support@foodieexpress.com",
      phone: "+1098765432",
      location: "New York, NY",
    },
  });

  // Create Events and associate them with Companies
  const event1 = await prisma.event.create({
    data: {
      title: 'Tech Innovators Expo 2025',
      description: 'The largest tech expo showcasing the latest in AI and robotics.',
      startDate: new Date('2025-06-01T09:00:00Z'),
      endDate: new Date('2025-06-01T17:00:00Z'),
      location: 'San Francisco Convention Center',
      sponsor: { connect: { id: company1.id } }, // Associate with Tech Innovators
      numGuests: 500,
      numAttended: 450,
      sales: new Prisma.Decimal(10000.50),
    },
  });

  const event2 = await prisma.event.create({
    data: {
      title: 'Green Earth Sustainability Summit',
      description: 'A summit focused on sustainability practices and green technologies.',
      startDate: new Date('2025-07-10T09:00:00Z'),
      endDate: new Date('2025-07-10T17:00:00Z'),
      location: 'Austin Convention Center',
      sponsor: { connect: { id: company2.id } }, // Associate with Green Earth
      numGuests: 300,
      numAttended: 280,
      sales: new Prisma.Decimal(7500.00),
    },
  });

  const companiesList = [company1, company2, company3]

  const event3 = await prisma.event.create({
    data: {
      title: 'Foodie Express Gourmet Feast 2025',
      description: 'A gourmet food event featuring the best chefs and food trucks.',
      startDate: new Date('2025-08-05T11:00:00Z'),
      endDate: new Date('2025-08-05T20:00:00Z'),
      location: 'New York City Food Park',
      sponsor: { connect: { id: company3.id } }, // Associate with Foodie Express
      numGuests: 1000,
      numAttended: 950,
      sales: new Prisma.Decimal(25000.75),
      registrations: { 
        connect: [
        { id: company1.id },
        { id: company2.id },
      ]}
    },
  });

  console.log('Seed data created!');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });