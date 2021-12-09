class nodo
{
    constructor(dato)
    {
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
}

class listaCircular
{
    constructor()
    {
        this.primero = null;
    }

    insertar(dato)
    {
        let nuevo = new nodo(dato);

        if(this.primero == null) // La lista esta vacia
        {
            this.primero = nuevo;
            nuevo.siguiente = this.primero;
        }
        else
        {
            let aux = this.primero;
            
            do
            {
                aux = aux.siguiente;
            } while(aux != this.primero);

            aux.siguiente = nuevo;
            nuevo.anterior = aux;
            nuevo.siguiente = this.primero;
        }
    }

    mostrar()
    {
        let aux = this.primero;
        console.log("***Mostrar lista***")

        do
        {
            console.log("-> " + aux.dato);
            aux = aux.siguiente;
        }while(aux != this.primero);
    }
}

let lista = new listaCircular();
lista.insertar(10);
lista.insertar(12);
lista.mostrar();