import fastify from 'fastify'
import { FastifyInstance } from 'fastify'
import { z } from "zod"
import { PrismaClient } from "@prisma/client"
import cors from "@fastify/cors"

const app: FastifyInstance = fastify();

(async () => {
  await app.register(cors, {  
    // put your options here
  })
})();

const prisma = new PrismaClient() 

app.post("/createUser", async (request, reply) => {
  const createUserBody = z.object({
    name: z.string(),
    password: z.string(),
    email: z.string(),
    cpf: z.string()
  })
  
  const { name, password, email, cpf } = createUserBody.parse(request.body)

  const user = await prisma.user.create({
    data: {
      name,
      password,
      email,
      cpf
    }
  })

  return reply.status(201).send({userId: user.id})
})

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server is running")
})
