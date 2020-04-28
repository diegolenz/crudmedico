package hospital.domain.entity.medico;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import hospital.domain.entity.endereco.Endereco;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table
public class Medico {
    public Medico() {
    }

    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(fetch = FetchType.LAZY)
    private Long id;

    @NotEmpty
    @NotNull
    @Column(length = 255)
    @Basic(fetch = FetchType.LAZY)
    private String nome;

    @NotEmpty
    @NotNull
    @Column(length = 255, unique = true)
    @Basic(fetch = FetchType.LAZY)
    private String crm;

    @OneToOne(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
    private Endereco endereco;

    /**
     *
     */
    public void validateMedico()
    {

    }


    /*-------------------------------------------------------------------
     *				 		     GETTERS AND SETTERS
     *-------------------------------------------------------------------*/

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCrm() {
        return crm;
    }

    public void setCrm(String crm) {
        this.crm = crm;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }
}
