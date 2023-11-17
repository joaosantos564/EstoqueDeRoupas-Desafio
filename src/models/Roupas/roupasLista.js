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


    removeRoupas(id) {
        this.roupas = this.roupas.filter((roupa) => roupa.id !== id)
    }

    updateRoupas(id, nome, tipo, tamanho, cor, imagem, quantidade) {
        this.roupa = this.roupas.map((roupa) => {
            if (roupa.id === id) {
                this.nome = nome;
                this.tipo = tipo;
                this.tamanho = tamanho;
                this.cor = cor;
                this.imagem = imagem;
                this.quantidade = quantidade;
            }
            return roupa;
        });

        return this.getRoupas(id);
    }





}