"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categoryController_1 = __importDefault(require("../controllers/categoryController"));
const router = express_1.default.Router();
// user routes
/** @used */
router.post("/", categoryController_1.default.create);
router.put("/:id", categoryController_1.default.update);
router.get("/", categoryController_1.default.getAll);
exports.default = router;
