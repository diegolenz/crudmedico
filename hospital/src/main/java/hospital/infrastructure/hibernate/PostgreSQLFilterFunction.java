package hospital.infrastructure.hibernate;

import org.hibernate.QueryException;
import org.hibernate.dialect.function.SQLFunction;
import org.hibernate.engine.spi.Mapping;
import org.hibernate.engine.spi.SessionFactoryImplementor;
import org.hibernate.type.BooleanType;
import org.hibernate.type.Type;
import java.util.List;
import java.util.stream.Collectors;

public class PostgreSQLFilterFunction implements SQLFunction
{
	@Override
	public boolean hasArguments()
	{
		return true;
	}

	@Override
	public boolean hasParenthesesIfNoArguments()
	{
		return false;
	}

	@Override
	public Type getReturnType( Type firstArgumentType, Mapping mapping ) throws QueryException
	{
		return new BooleanType();
	}

	// filter(:filter, usuario.id, usuario.login, usuario.nome)
	// firstArgumentType = StringType
	// arguments = [?, _usuario_0.id, _usuario_0.login, _usuario_0_nome]
	// return -> filter(cast(? as text), _usuario_0_id as text, ...
	@Override
	@SuppressWarnings("unchecked")
	public String render( Type firstArgumentType, List arguments, SessionFactoryImplementor factory ) throws QueryException
	{
		final String query = renderCast( (String) arguments.get( 0 ) );
		final List<String> fields = ((List<String>) arguments).stream().skip( 1 )
				.map( this::renderCast )
				.collect( Collectors.toList() );
		return String.format(
				"filter(%s, %s)",
				query,
				String.join( ", ", fields ) );
	}

	private String renderCast( String field )
	{
		return String.format( "cast(%s as text)", field );
	}
}