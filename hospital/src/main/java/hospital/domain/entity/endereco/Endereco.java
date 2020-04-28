package hospital.domain.entity.endereco;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.util.Assert;

import javax.persistence.*;

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
     * Bairro
     */
    @Column(length = 144)
    private String bairro;

    /**
     * Cep
     */
    @Column(length = 10)
    private String cep;

    /**
     * Cidade
     */
    @Column(length = 144)
    private String cidade;

    /**
     * Estado
     */
    @Column(length = 144)
    private String estado;

    /**
     * Pais
     */
    @Column(length = 144)
    public String pais;

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
     *				 		     BEHAVIORS
     *-------------------------------------------------------------------*/
    public void validateEndereco() {
        Assert.hasText(this.bairro, "O campo 'Bairro' deve ser preenchido");
        Assert.isTrue(this.pais != null || this.pais.isEmpty(), "O campo 'País' deve ser preenchido");
        Assert.hasText(this.estado, "O campo 'Estado' deve ser preenchido");
        Assert.hasText(this.cidade, "O campo 'Cidade' deve ser preenchido");
        Assert.hasText(this.logradouro, "O campo 'Logradouro' deve ser preenchido");
        Assert.hasText(this.numero, "O campo 'Número' deve ser preenchido");
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