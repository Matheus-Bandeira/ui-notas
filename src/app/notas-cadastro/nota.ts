

export class Nota {
    id: number;
    title: string;
    descricao: string;

    constructor(id?: number, title?: string, descricao?: string ){
        this.id = id;
        this.title = title;
        this.descricao = descricao;
    }
}