import { Roupa } from "../models/Roupas/roupa.js";
import { RoupasLista } from '../models/Roupas/roupasLista.js';

const lista = new RoupasLista();

export const getRoupas = (req, res) => {
    const roupas = lista.getAllRoupas();

    if (roupas.length) {
        return res.status(200).send(roupas);
    }
    return res.status(200).send({
        message: "não há roupas cadastradas"
    });
    
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
    const { nome, tipo, tamanho, cor, imagem, quantidade} = req.body;

    if (!nome || !tipo || !tamanho || !cor|| !imagem || !quantidade) {
        return res.status(400).send({
            message: "missing fields"
        });
    }
    
   const roupa = new Roupa( nome, tipo, tamanho, cor, imagem, quantidade);

   lista.addRoupa(roupa);


    return res.status(200).send({
        message: `Create roupa ${nome} tipo ${tipo} tamanho ${tamanho} cor ${cor} imagem ${imagem} quant ${quantidade}`
    });
}

export const deleteRoupa = (req, res) => {
    const { id } = req.params;

    const roupa = lista.getRoupas(id);

    if(!roupa) {
        return res.status(404).send({
            message: "..."
        })
    }
    return res.status(200).send({
        message: `Delete student ${id}`
    });
}