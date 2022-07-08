
package com.portfolio.AylenSanduay.Repositorio;

import com.portfolio.AylenSanduay.Entidad.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository <Persona,Long> {
    
}
