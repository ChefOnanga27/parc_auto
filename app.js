import express from 'express'
import { PrismaClient } from '@prisma/client'






const prisma = new PrismaClient()
const app = express()
const port = 3000


app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`le serveur demarre bien sur ${port}`)
})