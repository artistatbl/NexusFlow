const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteAllData() {
  await prisma.chatMessage.deleteMany({});
  await prisma.chatRoom.deleteMany({});
  await prisma.customerResponses.deleteMany({});
  await prisma.customer.deleteMany({});
  await prisma.filterQuestions.deleteMany({});
  await prisma.helpDesk.deleteMany({});
  await prisma.billings.deleteMany({});
  await prisma.chatBot.deleteMany({});
  await prisma.domain.deleteMany({});
  await prisma.campaign.deleteMany({});
  await prisma.user.deleteMany({});
  // Add other models as needed

  console.log('All data deleted');
}

deleteAllData()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });