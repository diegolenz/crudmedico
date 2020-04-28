package hospital.domain.repository.medico;

import hospital.domain.entity.medico.Medico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 *
 */
public interface IMedicoRepository extends JpaRepository<Medico, Long> {
    /**
     *
     */
    @Query("FROM Medico medico WHERE lower(medico.nome) = lower(:nome)")
    Optional<Medico> findByNome(@Param("nome") String nome);

    /**
     *
     */
    @Query("FROM Medico medico WHERE medico.crm = :crm")
    Optional<Medico> findByCrm(@Param("crm") String crm);

    /**
     *
     */
    @Query("FROM Medico medico WHERE medico.crm = :crm and medico.id = :id")
    Optional<Medico> findByCrmAndId(@Param("crm") String crm, @Param("id") Long id);

}
