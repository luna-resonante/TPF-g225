
package com.portfolio.AylenSanduay.Controlador;

import com.portfolio.AylenSanduay.Dto.dtoEducacion;
import com.portfolio.AylenSanduay.Entidad.Educacion;
import com.portfolio.AylenSanduay.Security.Controller.Mensaje;
import com.portfolio.AylenSanduay.Servicio.SEducacion;
import java.util.List;
import org.codehaus.plexus.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/educacion")
@CrossOrigin(origins = "http://localhost:4200")
public class CEducacion {

    @Autowired
    SEducacion sEducacion;

    @GetMapping("/lista")
    public ResponseEntity<List<Educacion>> list() {
        List<Educacion> list = sEducacion.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @PostMapping("/crear")
    public ResponseEntity<?> create(@RequestBody dtoEducacion dtoeducacion) {
        if (StringUtils.isBlank(dtoeducacion.getNombreE())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (sEducacion.existByNombreE(dtoeducacion.getNombreE())) {
            return new ResponseEntity(new Mensaje("Esa nombre ya existe"), HttpStatus.BAD_REQUEST);
        }

        Educacion educacion = new Educacion(dtoeducacion.getNombreE(), dtoeducacion.getDescripcionE());
        sEducacion.save(educacion);

        return new ResponseEntity(new Mensaje("Educacion agregada"), HttpStatus.OK);
    }
      
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update (@PathVariable("id") int id, @RequestBody dtoEducacion dtoeducacion){
        if(!sEducacion.existsById(id))
            return new ResponseEntity (new Mensaje("El ID no existe"), HttpStatus.NOT_FOUND);
        
        if (sEducacion.existByNombreE(dtoeducacion.getNombreE()) && sEducacion.getByNombreE(dtoeducacion.getNombreE()).get().getId() !=id)
            return new ResponseEntity (new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        
        if (sEducacion.existByNombreE(dtoeducacion.getDescripcionE()) && sEducacion.getByNombreE(dtoeducacion.getDescripcionE()).get().getId() !=id)
            return new ResponseEntity (new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        
        if (StringUtils.isBlank(dtoeducacion.getNombreE()))
            return new ResponseEntity (new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        
        Educacion educacion = sEducacion.getOne(id).get();
        educacion.setNombreE(dtoeducacion.getNombreE());
        educacion.setDescripcionE((dtoeducacion.getDescripcionE()));
        
        sEducacion.save(educacion);
        return new ResponseEntity(new Mensaje("Educación actualizada"), HttpStatus.OK);
                
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")int id){
        if(!sEducacion.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.NOT_FOUND);
        
        sEducacion.delete(id);
        
        return new ResponseEntity(new Mensaje("Educación eliminada"), HttpStatus.OK);
        
    }
}
