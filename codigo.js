function addItem(){
    const cantidad = document.getElementById("options").value
    const tipo = document.getElementById("input").value
    console.log(cantidad)
    console.log(tipo)

    const fila = document.createElement("tr")
    const c1 = document.createElement("td")
    c1.innerText = cantidad
    const c2 = document.createElement("td")
    c2.innerText = tipo
    fila.appendChild(c1)
    fila.appendChild(c2)

    //localizo table body:
    const table = document.getElementById("items")
    table.appendChild(fila)
    }
    
