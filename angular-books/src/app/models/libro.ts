export class Libro {

    public id_libro: number
    public id_usuario: number
    public titulo: string
    public tipoLibro: 'Tapa dura' | 'Tapa blanda';
    public autor: string
    public precio: number
    public photo: string

    constructor(titulo: string, tipoLibro: 'Tapa dura' | 'Tapa blanda', autor: string, 
    precio: number, photo: string,id_libro: number = 0, id_usuario: number = 0, ){
            this.id_libro = id_libro;
            this.id_usuario = id_usuario;
            this.titulo = titulo;
            this.tipoLibro = tipoLibro;
            this.autor = autor;
            this.precio = precio;
            this.photo = photo;
    }
}
