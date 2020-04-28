package hospital.domain.entity.endereco;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.util.Assert;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table
public class Endereco {

    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(fetch = FetchType.LAZY)
    private Long id;

    /**
     * Cidade
     */
    @Column(length = 144)
    private String cidade;

    /**
     * Estado
     */
    @Column(length = 144)
    @NotNull
    @NotEmpty
    private String estado;

    /**
     * Pais
     */
    @Column(length = 144)
    public String pais;


    /**
     * Bairro
     */
    @Column(length = 144)
    @NotNull
    @NotEmpty
    private String bairro;

    /**
     * Cep
     */
    @Column(length = 10)
    private String cep;

    /**
     * Logradouro
     */
    @Column(length = 144)
    private String logradouro;

    /**
     * Número
     */
    @Column(length = 20)
    private String numero;

    /**
     *
     */
    /*-------------------------------------------------------------------
     *				 		     CONSTRUCTORS
     *-------------------------------------------------------------------*/
    public Endereco() {

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

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }
}