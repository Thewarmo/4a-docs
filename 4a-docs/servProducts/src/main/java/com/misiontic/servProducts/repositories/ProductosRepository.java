package com.misiontic.servProducts.repositories;

import com.misiontic.servProducts.models.Productos;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductosRepository extends MongoRepository<Productos,Integer>{

}