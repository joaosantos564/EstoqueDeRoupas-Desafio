export class RoupasLista {
    constructor() {
        this.roupas = [];
    }

    getAllRoupas() {
        return this.roupas;
    }

    getRoupas(id) {
        return this.roupas.find((roupa) => roupa.id === id);
    }

    addRoupa(roupa) {
        this.roupas.push(roupa);
    }



}