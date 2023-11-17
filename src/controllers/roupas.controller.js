import { Roupa } from "../models/Roupas/roupa.js";
import { RoupasLista } from '../models/Roupas/roupasLista.js';

const lista = new RoupasLista();

export const getRoupas = (req, res) => {
    const roupas = lista.getAllRoupas();

    const filtrado = [];


    const { tipo, tamanho, cor } = req.query;

    if (tipo) {
        const roupas = lista.getByTipo(tipo);
        if (roupas.length) {
            filtrado.push(roupas)
        } else {
             return res.status(200).send({
                 message: `não há roupas cadastradas do tipo ${tipo}`
             });

        }
    }
    if (tamanho) {
        const roupas = lista.getByTamanho(tamanho);
        if (roupas.length) {
            filtrado.push(roupas)
        }
        // return res.status(200).send({
        //     message: `não há roupas cadastradas do tamanho ${tamanho}`
        // });
    }
    if (cor) {
        const roupas = lista.getByCor(cor);
        if (roupas.length) {
            filtrado.push(roupas)
        }

        if(roupas.length === 0) {
            return res.status(404).send({ message: "roupa não encontrada"})
        }
        // return res.status(200).send({
        //     message: `não há roupas cadastradas do cor ${cor}`
        // });
    }

    if (tamanho && tipo) {
        const roupas = lista.getByTamanho(tamanho);
        if (roupas.length) {
            return res.status(200).send({ quantity: roupas.length, data: roupas })
        }
    }

    if (!tipo && !tamanho && !cor) {
        const roupas = lista.getAllRoupas();

        return res.status(200).send({ quantity: roupas.length, data: roupas })
    }

    return res.status(200).send({ quantity: lista.length, data: filtrado})


    // if (roupas.length) {
    //     return res.status(200).send(roupas);
    // }

    // return res.status(200).send({
    //     message: "não há roupas cadastradas"
    // });


}

export const getRoupasById = (req, res) => {
    const { id } = req.params;


    console.log(id);

    const roupa = lista.getRoupas(id);

    if (!roupa) {
        return res.status(404).send({
            message: "Aluno não encontrado",
        });
    }
    return res.status(200).send({
        message: `roupa with id ${id}`
    });
}

export const createRoupa = (req, res) => {
    const { nome, tipo, tamanho, cor, imagem, quantidade } = req.body;



    if (!nome || !tipo || !tamanho || !cor || !imagem || !quantidade) {
        return res.status(400).send({
            message: "missing fields"
        });
    }
    if (nome.length < 6) {
        return res.status(400).send({
            message: "O Nome tem que ter no minímo 6 caracteres"
        });
    } else if (nome.length > 40) {
        return res.status(400).send({
            message: "O Nome tem que ter no máximo 40 caracteres"
        });
    } if (tipo.length > 40) {
        return res.status(400).send({
            message: "O tipo é de no máximo 50 caracteres"
        });
    } if (tamanho !== "PP" && tamanho !== "P" && tamanho !== "M" && tamanho !== "G" && tamanho !== "GG" && tamanho !== "XG") {
        return res.status(400).send({
            message: "O tamanho é inválido"
        });
    } if (cor.length > 20) {
        return res.status(400).send({
            message: "O Nome tem que ter no máximo 20 caracteres"
        });
    } if (quantidade > 15000) {
        return res.status(400).send({
            message: "O estoque se limita a 15000 produtos"
        });
    } if (imagem.match(/\.(jpeg|jpg|webp|gif|png)$/) == null) {
        return res.status(400).send({
            message: "O Url da imagem é inválido"
        });
    }

    const roupa = new Roupa(nome, tipo, tamanho, cor, imagem, quantidade);

    lista.addRoupa(roupa);


    return res.status(200).send({
        message: `Create roupa ${nome} tipo ${tipo} tamanho ${tamanho} cor ${cor} imagem ${imagem} quant ${quantidade}`
    });
}

export const deleteRoupa = (req, res) => {
    const { id } = req.params;

    const roupa = lista.getRoupas(id);

    if (!roupa) {
        return res.status(404).send({
            message: "..."
        })
    }

    lista.removeRoupas(id)

    return res.status(200).send({
        message: `Delete roupa ${id}`
    });
}

export const updateRoupas = (req, res) => {
    const { id } = req.params;
    const { nome, tipo, tamanho, cor, imagem, quantidade } = req.body;

    if (!nome || !tipo || !tamanho || !cor || !imagem || !quantidade) {
        return res.status(400).send({
            message: "missing fields"
        });
    }

    const roupa = lista.getRoupas(id);

    if (!roupa) {
        return res.status(404).send({
            message: "roupa não encontrada",
        });
    }

    lista.updateRoupas(id, nome, tipo, tamanho, cor, imagem, quantidade)



    return res.status(200).send({
        message: `Update roupa ${nome} tipo ${tipo} tamanho ${tamanho} cor ${cor} imagem ${imagem} quant ${quantidade}`
    });
}