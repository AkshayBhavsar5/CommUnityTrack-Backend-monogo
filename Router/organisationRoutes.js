import express from "express";

import { createOrganisation } from "../Controller/organisationController.js";

const router = express.Router();

router.post("/add", createOrganisation);

export default router;
