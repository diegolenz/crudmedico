package hospital.domain.repository.endereco;

import hospital.domain.entity.endereco.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 */
public interface IEnderecoRepository extends JpaRepository<Endereco, Long> {
}
