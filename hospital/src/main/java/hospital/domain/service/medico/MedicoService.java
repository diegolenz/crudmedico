package hospital.domain.service.medico;

import hospital.domain.entity.medico.Medico;
import hospital.domain.repository.medico.IMedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author rodrigo@eits.com.br
 */
@Service
public class MedicoService {
    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    // Repositories
    /**
     *
     */
    @Autowired
    private IMedicoRepository medicoRepository;

    public MedicoService() {
    }

    /*-------------------------------------------------------------------
     *				 		     SERVICES
     *-------------------------------------------------------------------*/

    /**
     * @param medico
     * @return
     */
    public Medico save(Medico medico) {

        medico.validateMedico();
        medico.getEndereco().validateEndereco();

        medico = this.medicoRepository.save(medico);

        return medico;
    }

    /**
     *
     */
    public Medico update(Medico medico) {
        if (medico.getId() == null) {
            return medico;
        }
        medico.validateMedico();

        return this.medicoRepository.save(medico);
    }

    /**
     *
     */
    public void delete(Long medicoId) {
        if (medicoId == null) {
            return;
        }
        this.medicoRepository.deleteById(medicoId);
    }

    /**
     *
     */
    @Transactional(readOnly = true)
    public Medico findPessoaById(Long medicoId) {
        Medico medico = this.medicoRepository.findById(medicoId)
                .orElseThrow(() -> new RuntimeException("Medico não encontrada"));

        return medico;
    }


    /**
     *
     */
    @Transactional(readOnly = true)
    public List<Medico> getAll(/*PageRequest pageable*/) {
        List<Medico> medicos = this.medicoRepository.findAll();

        return medicos;
    }
}