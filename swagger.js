// importamos las dos depencias que acabamos de instalar
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0", 
    info: {
      title: "Concesionario",
      version: "1.0.0",
      description: "API para probar todos los endpoints creados en concesionario",
    },
  },
  apis: [
    "./src/routes/users.routes.js",
    "./src/models/users.models.js",

    "./src/routes/auth.routes.js",
    "./src/models/users.models.js",

    "./src/routes/price.routes.js",
    "./src/models/price.models.js",

    "./src/routes/buyers.routes.js",
    "./src/models/buyers.models.js",
    
    "./src/routes/vehicles.routes.js",
    "./src/models/vehicles.models.js",

    "./src/routes/sales.routes.js",
    "./src/models/sales.models.js",

  ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {

  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("ContentType", "application/json")
    res.send(swaggerSpec)
  })
  console.log(`Documentacion disponible en https//:localhost:${port}/api/v1/docs}`);
};

module.exports = swaggerDocs; 