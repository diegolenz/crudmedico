package hospital.infrastructure.hibernate;

	public class PostgreSQLDialect extends org.hibernate.dialect.PostgreSQL9Dialect
	{
		/**
		 *
		 */
		public PostgreSQLDialect()
		{
			super.registerFunction("FILTER", new PostgreSQLFilterFunction());
		}
	}
