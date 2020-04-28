package hospital.application.restful;

import hospital.domain.entity.medico.Medico;
import hospital.domain.service.medico.MedicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/medico")
public class MedicoResource {

    /*-------------------------------------------------------------------
     * 		 					ATTRIBUTES
     *-------------------------------------------------------------------*/

    /**
     *
     */
    @Autowired
    private MedicoService medicoService;

    public MedicoResource() {
        //medicoService = new MedicoService();
    }

    /*-------------------------------------------------------------------
     * 		 					RESOURCES
     *-------------------------------------------------------------------*/

    /**
     * @return
     */
    @PostMapping("/add")
    public Medico adicionar(@RequestBody Medico medico) {
        try {
            return medicoService.save(medico);
        } catch (Exception exc) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, exc.getMessage(), exc);
        }
    }

    /**
     * @return
     */
    @DeleteMapping("/delete/{id}")
   // @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void deletar(@PathVariable("id") Long id) {
        try {
            medicoService.delete(Long.valueOf(id));
        } catch (Exception exc) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, exc.getMessage(), exc);
        }
    }


    /**
     * @return
     */
    @PostMapping("/update")
    public Medico editar(@RequestBody Medico medico) {
        try {
            return medicoService.update(medico);
        } catch (Exception exc) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, exc.getMessage(), exc);
        }
    }

    /**
     * @return
     */
    @GetMapping("")
    public List<Medico> findAll() {
        try {
            return medicoService.getAll();
        } catch (Exception exc) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, exc.getMessage(), exc);
        }
    }


}



