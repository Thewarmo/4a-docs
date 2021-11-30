package com.misiontic.servProducts.controllers;

import com.misiontic.servProducts.exceptions.ProductsNotFoundException;
import com.misiontic.servProducts.models.Productos;
import com.misiontic.servProducts.repositories.ProductosRepository;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ProductsController {

    private final ProductosRepository productosRepository;
    public ProductsController(ProductosRepository productosRepository) {
        this.productosRepository = productosRepository;
    }
    @GetMapping("/productos/{idProducto}")
    Productos getProductos(@PathVariable Integer idProducto){
        return productosRepository.findById(idProducto)
                .orElseThrow(() -> new ProductsNotFoundException("No se encontro un producto con el id de producto: " + idProducto));
    }
    @PostMapping("/productos")
    Productos newProductos(@RequestBody Productos producto){
        return productosRepository.save(producto);
    }

    @GetMapping("/productos/all")
    public List<Productos> readAll(){
        return productosRepository.findAll();
    }

    @PutMapping("/prodAdd/{idProducto}")
    Productos replaceProducto(@RequestBody Productos newProductos, @PathVariable Integer idProducto){

        return productosRepository.findById(idProducto).map(productos -> {
                    productos.setNombre_producto(newProductos.getNombre_producto());
                    productos.setCantidad(newProductos.getCantidad());
                    productos.setPrecio(newProductos.getPrecio());
                    productos.setImagen(newProductos.getImagen());
                    return productosRepository.save(productos);
                }
        ).orElseGet(()->{
            newProductos.setIdProducto(idProducto);
            return productosRepository.save(newProductos);
        });
    }

    @DeleteMapping("/eliminar/{idProducto}")
    public String deleteUser(
            @PathVariable(value = "idProducto") int idProducto) throws Exception {
        Productos prod = productosRepository.findById(idProducto)
                .orElseThrow(() -> new ProductsNotFoundException("Producto no encontrado  : "+ idProducto));

        productosRepository.delete(prod);
        String respuesta = new String();
        Map<String, Boolean> response = new HashMap<>();
        respuesta = "se elimino el producto  "+idProducto;
        response.put("Eliminado", Boolean.TRUE);
        return respuesta;
    }
}