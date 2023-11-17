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
        const roupa = this.getRoupas(id);

        if (roupa) {
            roupa.nome = nome;
            roupa.tipo = tipo;
            roupa.tamanho = tamanho;
            roupa.cor = cor;
            roupa.imagem = imagem;
            roupa.quantidade = quantidade;
        }

        return roupa;
    }





}