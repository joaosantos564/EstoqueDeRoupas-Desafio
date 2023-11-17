import { Router } from "express";
import {
    getRoupas,
    getRoupasById,
    createRoupa

} from "../controllers/roupas.controller.js"

const roupasRoutes = Router();

roupasRoutes.get("/", getRoupas);

roupasRoutes.get("/:id", getRoupasById);

roupasRoutes.post("/", createRoupa);



export default roupasRoutes;