import express from "express";
import { ClientModel } from "./schema/schema.js";

const app = express();

app.use(express.json());

app.get("/clients", async (req, res) => {
    try {
      const clients = await ClientModel.find();
      res.json(clients);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

// Create Client
app.post("/clients", async (req, res) => {
    try {
      const client = new ClientModel(req.body);
      const savedClient = await client.save();
      res.json(savedClient);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

//Obtener cliente mediante su id
app.get("/clients/:id", async (req, res) => {
  try {
    const client = await ClientModel.findById(req.params.id);
    if (!client)
      return res.status(404).json({ error: "Cliente no encontrado" });
    res.json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Actualizar un cliente mediante su ID
app.put("/clients/:id", async (req, res) => {
  try {
    const client = await ClientModel.findById(req.params.id, req.body, {
      new: true,
    });
    if (!client)
      return res.status(404).json({ error: "Cliente no encontrado" });
    res.json(client);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Eliminar cliente mediante su id
app.delete("/clients/:id", async (req, res) => {
  try {
    const client = await ClientModel.findByIdAndDelete(req.params.id);
    if (!client)
      return res.status(404).json({ error: "Cliente no encontrado" });
    res.json({ message: "Cliente eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default app;
