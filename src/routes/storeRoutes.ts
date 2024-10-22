import { Router } from "express";
import storeController from '../controller/storeController';

const router = Router();
router.get('/store/:cep', storeController.findStore);