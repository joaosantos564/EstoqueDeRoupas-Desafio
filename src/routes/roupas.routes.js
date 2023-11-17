import { Router } from "express";
import {
    getRoupas,
    getRoupasById,
    createRoupa,
    deleteRoupa,
    updateRoupas

} from "../controllers/roupas.controller.js"

const roupasRoutes = Router();

roupasRoutes.get("/", getRoupas);

roupasRoutes.get("/:id", getRoupasById);

roupasRoutes.post("/", createRoupa);

roupasRoutes.delete("/:id", deleteRoupa);

roupasRoutes.put("/:id", updateRoupas);



export default roupasRoutes;