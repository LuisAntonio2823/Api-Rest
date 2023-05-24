"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.busca = void 0;
class busca {
    constructor(buscar) {
        this.buscar = buscar;
    }
    async buscarid(id) {
        return this.buscar.getId(id).then((ComicsRecibido) => {
            return ComicsRecibido;
        });
    }
}
exports.busca = busca;
