package hospital.domain.service.medico;

import hospital.domain.entity.medico.Medico;
import hospital.domain.repository.medico.IMedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Optional;

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

    private void validate(Medico medico) {
        Assert.hasText(medico.getNome(), "O campo 'Nome' deve ser preenchido");
        Assert.hasText(medico.getCrm(), "O campo 'CPF' deve ser preenchido");
        Optional<Medico> medicoValidator = this.medicoRepository.findByCrm(medico.getCrm());
        if (medicoValidator.isPresent()) {
            if (medico.getId() == null) {
                Assert.isTrue(!medicoValidator.isPresent(), "CRM já cadastrado");
            } else {
                Assert.isTrue(medico.getId().equals(medicoValidator.get().getId()), "CRM já cadastrado");
            }
        }

        Assert.notNull(medico.getEndereco(), "O endereço não pode ser nulo");
        Assert.hasText(medico.getEndereco().getPais(), "O campo 'País' deve ser preenchido");
        Assert.hasText(medico.getEndereco().getEstado(), "O campo 'Estado' deve ser preenchido");
        Assert.hasText(medico.getEndereco().getCidade(), "O campo 'Cidade' deve ser preenchido");
        Assert.hasText(medico.getEndereco().getBairro(), "O campo 'Bairro' deve ser preenchido");
    }


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
        this.validate(medico);
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
        this.validate(medico);

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