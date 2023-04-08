const products = JSON.parse(localStorage.getItem("products"));

function takeDataOfProduct() {
    let nameProduct = document.getElementById("name-product").value;
    let typeProduct = document.getElementById("type-product").value;
    let descriptionProduct = document.getElementById("description-product").value;
    let priceProduct = document.getElementById("price-product").value;
    let stockProduct = document.getElementById("stock-product").value;

    if(nameProduct == ""){
        alert("Debe completar el nombre del producto.");
        document.getElementById("name-product").focus();
    }else{
        if(typeProduct == "0"){
            alert("Debe seleccionar el tipo de producto.");
            document.getElementById("type-product").focus();
        }else{
            if(descriptionProduct == ""){
                alert("Debe agregar una descripción del producto.");
                document.getElementById("description-product").focus();
            }else{
                if(priceProduct == "" || priceProduct == "e"){
                    alert("Debe establecer el precio del producto.");
                    document.getElementById("price-product").focus(); 
                }else{
                    if(stockProduct == "" || stockProduct == "e"){
                        alert("Debe indicar la cantidad disponible del producto.");
                        document.getElementById("stock-product").focus(); 
                    }else{

                        if(typeProduct == "1"){
                            typeProduct = "Auricular";
                        }else if(typeProduct == "2"){
                            typeProduct = "Teclado";
                        }else if(typeProduct == "3"){
                            typeProduct = "Mouse";
                        }else{
                            typeProduct = "MousePad";
                        }

                        products.push(
                            {
                                name: nameProduct,
                                type: typeProduct,
                                description: descriptionProduct,
                                price: priceProduct,
                                stock: stockProduct
                            }
                        );
                        
                        document.getElementById("name-product").value="";
                        document.getElementById("type-product").value="0";
                        document.getElementById("description-product").value="";
                        document.getElementById("price-product").value="";
                        document.getElementById("stock-product").value="";
                        document.getElementById("name-product").focus();

                        localStorage.setItem("products", JSON.stringify(products));

                        console.log(products);
                    }
                }
            }
        }
    }
}

console.log(localStorage.getItem("products"))