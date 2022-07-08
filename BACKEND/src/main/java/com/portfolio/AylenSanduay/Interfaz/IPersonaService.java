
package com.portfolio.AylenSanduay.Interfaz;

import com.portfolio.AylenSanduay.Entidad.Persona;
import java.util.List;



public interface IPersonaService {
    
    public List<Persona> getPersona();
    
    public void savePersona (Persona persona);
    
    public void deletePersona (Long Id);
    
    public Persona findPersona(Long Id);
    
}
