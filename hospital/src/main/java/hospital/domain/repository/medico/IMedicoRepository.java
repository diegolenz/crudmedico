package hospital.domain.repository.medico;

import hospital.domain.entity.medico.Medico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

/**
 *
 */
public interface IMedicoRepository extends JpaRepository<Medico, Long> {

    /**
     *
     */
    @Query("FROM Medico medico WHERE medico.crm = :crm")
    Optional<Medico> findByCrm(@Param("crm") String crm);

}
