import Fastify from "fastify"
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const prisma = new PrismaClient()

const PORT = 3333
const app = Fastify()

app.register(cors)

app.get('/', async () => {
  const habits = await prisma.habit.findMany()
  return habits
})

app.listen({ port: PORT }).then(() => console.log(`Server running at http://localhost${PORT}`)
)