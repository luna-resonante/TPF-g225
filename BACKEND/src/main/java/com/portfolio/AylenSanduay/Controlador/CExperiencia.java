package com.portfolio.AylenSanduay.Controlador;

import com.portfolio.AylenSanduay.Dto.dtoExperiencia;
import com.portfolio.AylenSanduay.Entidad.Experiencia;
import com.portfolio.AylenSanduay.Security.Controller.Mensaje;
import com.portfolio.AylenSanduay.Servicio.SExperiencia;
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
@RequestMapping("explab")
@CrossOrigin(origins = "http://localhost:4200")
public class CExperiencia {

    @Autowired
    SExperiencia sExperiencia;

    @GetMapping("/lista")
    public ResponseEntity<List<Experiencia>> list() {
        List<Experiencia> list = sExperiencia.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @PostMapping("/crear")
    public ResponseEntity<?> create(@RequestBody dtoExperiencia dtoexp) {
        if (StringUtils.isBlank(dtoexp.getNombreE())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (sExperiencia.existByNombreE(dtoexp.getNombreE())) {
            return new ResponseEntity(new Mensaje("Esa experiencia ya existe"), HttpStatus.BAD_REQUEST);
        }

        Experiencia experiencia = new Experiencia(dtoexp.getNombreE(), dtoexp.getDescripcionE());
        sExperiencia.save(experiencia);

        return new ResponseEntity(new Mensaje("Experiencia agregada"), HttpStatus.OK);
    }
      
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update (@PathVariable("id") int id, @RequestBody dtoExperiencia dtoexp){
        if(!sExperiencia.existsById(id))
            return new ResponseEntity (new Mensaje("El ID no existe"), HttpStatus.NOT_FOUND);
        
        if (sExperiencia.existByNombreE(dtoexp.getNombreE()) && sExperiencia.getByNombreE(dtoexp.getNombreE()).get().getId() !=id)
            return new ResponseEntity (new Mensaje("Esa experiencia ya existe"), HttpStatus.BAD_REQUEST);
        
        if (StringUtils.isBlank(dtoexp.getNombreE()))
            return new ResponseEntity (new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        
        Experiencia experiencia = sExperiencia.getOne(id).get();
        experiencia.setNombreE(dtoexp.getNombreE());
        experiencia.setDescripcionE((dtoexp.getDescripcionE()));
        
        sExperiencia.save(experiencia);
        return new ResponseEntity (new Mensaje("Experiencia actualizada"), HttpStatus.OK);
                
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete (@PathVariable("id")int id){
        if(!sExperiencia.existsById(id))
            return new ResponseEntity (new Mensaje("El ID no existe"), HttpStatus.NOT_FOUND);
        
        sExperiencia.delete(id);
        
        return new ResponseEntity (new Mensaje("Experiencia eliminada"), HttpStatus.OK);
    }
}
