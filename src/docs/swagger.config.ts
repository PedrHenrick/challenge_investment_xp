export const swaggerConfig = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Desafio técnico XP",
      description: "Api que simula um site investimentos",
      version: "1.0"
    },
    servers: [{
      url: "http://localhost:3001",
      description: "Servidor local"
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ["./src/Routes/router.ts"],
}