import { Router } from "express";
import {
    store,
    index,
    show,
    update,
    destroy
} from "../controllers/student_controller"

const router = Router();

//ROTAS PRIVADAS

router.post("/", store)
router.get("/", index);
router.get("/:id", show);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router