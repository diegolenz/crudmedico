package hospital.domain.service.endereco;

import hospital.domain.entity.endereco.Endereco;
import hospital.domain.repository.endereco.IEnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class EnderecoService {
    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    @Autowired
    private IEnderecoRepository enderecoRepository;

    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/


    /**
     *
     */
    public Endereco insertEndereco(Endereco endereco) {
        return this.enderecoRepository.save(endereco);
    }

}
