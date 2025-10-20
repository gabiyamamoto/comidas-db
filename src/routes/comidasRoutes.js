import { Router } from "express";
import * as ComidasController from './../controllers/comidasController.js'

const router = Router();

router.get("/", ComidasController.listarTodos);
router.get("/:id", ComidasController.listarUm);

export default router;