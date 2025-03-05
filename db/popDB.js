const { Client } = require(`pg`);
require(`dotenv`).config();

const SQL = `
CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR (255),
  studio VARCHAR (255),
  category VARCHAR (255)
);

INSERT INTO games (title, studio, category)
VALUES
  ( 'GTA VI' , 'Rockstar', 'Action-Adventure'),
  ( 'Ghost Of Yotei' , 'Sucker Punch', 'Action-Adventure');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
