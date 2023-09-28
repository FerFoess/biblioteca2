"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class MultasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const multas = yield database_1.default.query('SELECT * FROM Multas');
                res.json(multas);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Error al obtener las multas' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idMulta } = req.params;
            try {
                const multas = yield database_1.default.query('SELECT * FROM Multas WHERE IdMulta = ?', [idMulta]);
                if (multas.length > 0) {
                    res.json(multas[0]);
                }
                else {
                    res.status(404).json({ error: "La multa especificada no existe" });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Error al obtener la multa' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idMulta } = req.params;
            try {
                const result = yield database_1.default.query('UPDATE Multas SET ? WHERE IdMulta = ?', [req.body, idMulta]);
                if (result.affectedRows > 0) {
                    res.json({ message: 'La multa se actualizó' });
                }
                else {
                    res.status(404).json({ error: "La multa especificada no existe" });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Error al actualizar la multa' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.query('INSERT INTO Multas SET ?', [req.body]);
                res.json({ message: 'Nueva multa guardada', id: result.insertId });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Error al crear la nueva multa' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idMulta } = req.params;
            try {
                const result = yield database_1.default.query('DELETE FROM Multas WHERE IdMulta = ?', [idMulta]);
                if (result.affectedRows > 0) {
                    res.json({ message: "La multa ha sido eliminada" });
                }
                else {
                    res.status(404).json({ error: "La multa especificada no existe" });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Error al eliminar la multa' });
            }
        });
    }
}
const multasController = new MultasController();
exports.default = multasController;
