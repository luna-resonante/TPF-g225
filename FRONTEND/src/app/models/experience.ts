export class Experience {
    codigo: number
    descripcion:string
    observacion: string
    mesesTrabajados:number
    company:object
  
    constructor(codigo:number = 0,descripcion:string = "" , observacion:string = "" , mesesTrabajados:number=1, company:object= {}){
      this.descripcion = descripcion
      this.observacion = observacion
      this.codigo = codigo
      this.mesesTrabajados = mesesTrabajados
      this.company = company
    }
  
    aumentarTiempoTrabajado() {
      this.mesesTrabajados++
    }
  
  }