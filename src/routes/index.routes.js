import { Router } from "express";
import roupasRoutes from "../routes/roupas.routes.js";


const router = Router();

router.use("/roupas", roupasRoutes);

router.get("/", (req, res) => {
    return res.status(200).send({
        message: "Running Server"
    });
});

export default router;