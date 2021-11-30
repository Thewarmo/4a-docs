package com.misiontic.servProducts.exceptions;

public class ProductsNotFoundException extends RuntimeException{

    public ProductsNotFoundException(String message){
        super(message);
    }
}
