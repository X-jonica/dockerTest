// generateData.js
import { faker } from '@faker-js/faker';
import { writeFileSync } from 'fs';

// Configurer Faker (optionnel)
// faker.locale = 'fr';

function generateUsers(count = 20) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      country: faker.location.country()
    },
    avatar: faker.image.avatar()
  }));
}

const db = {
  users: generateUsers(50),
  products: Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription()
  }))
};

writeFileSync('db.json', JSON.stringify(db, null, 2));
console.log('✅ Données générées dans db.json');