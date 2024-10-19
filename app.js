import app from './server.js';







const app = express()
const port = 3000


app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const prisma = new PrismaClient();

async function connect() {
  try {
    await prisma.$connect();
    console.log('Connexion à la base de données réussie !');
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
  }
}

connect();


app.listen(port, () => {
  console.log(`le serveur demarre bien sur ${port}`)
})
