```text
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/

 :: Spring Boot ::               (v3.5.16)

2026-07-01T23:36:36.594+05:30  INFO 21440 --- [           main] c.c.orm_learn.OrmLearnApplication        : Starting OrmLearnApplication using Java 21.0.4 with PID 21440 (E:\Charan\CTS\Assignments_DN_5.0\Week-2\Spring Data JPA\orm-learn\target\classes started by dell in E:\Charan\CTS\Assignments_DN_5.0\Week-2\Spring Data JPA\orm-learn)
2026-07-01T23:36:36.598+05:30  INFO 21440 --- [           main] c.c.orm_learn.OrmLearnApplication        : No active profile set, falling back to 1 default profile: "default"
2026-07-01T23:36:37.693+05:30  INFO 21440 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-07-01T23:36:37.766+05:30  INFO 21440 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 61 ms. Found 1 JPA repository interface.
2026-07-01T23:36:38.398+05:30  INFO 21440 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2026-07-01T23:36:38.418+05:30  INFO 21440 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2026-07-01T23:36:38.418+05:30  INFO 21440 --- [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.55]
2026-07-01T23:36:38.485+05:30  INFO 21440 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2026-07-01T23:36:38.485+05:30  INFO 21440 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1788 ms
2026-07-01T23:36:38.706+05:30  INFO 21440 --- [           main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
2026-07-01T23:36:38.795+05:30  INFO 21440 --- [           main] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 6.6.53.Final
2026-07-01T23:36:38.845+05:30  INFO 21440 --- [           main] o.h.c.internal.RegionFactoryInitiator    : HHH000026: Second-level cache disabled
2026-07-01T23:36:39.323+05:30  INFO 21440 --- [           main] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
2026-07-01T23:36:39.370+05:30  INFO 21440 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2026-07-01T23:36:40.982+05:30  INFO 21440 --- [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection com.mysql.cj.jdbc.ConnectionImpl@7d284f15
2026-07-01T23:36:40.984+05:30  INFO 21440 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
2026-07-01T23:36:41.123+05:30  INFO 21440 --- [           main] org.hibernate.orm.connections.pooling    : HHH10001005: Database info:
    Database JDBC URL [Connecting through datasource 'HikariDataSource (HikariPool-1)']
    Database driver: undefined/unknown
    Database version: 8.0.46
    Autocommit mode: undefined/unknown
    Isolation level: undefined/unknown
    Minimum pool size: undefined/unknown
    Maximum pool size: undefined/unknown
2026-07-01T23:36:42.267+05:30  INFO 21440 --- [           main] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000489: No JTA platform available (set 'hibernate.transaction.jta.platform' to enable JTA platform integration)
2026-07-01T23:36:42.335+05:30  INFO 21440 --- [           main] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-07-01T23:36:42.712+05:30  WARN 21440 --- [           main] JpaBaseConfiguration$JpaWebConfiguration : spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning
2026-07-01T23:36:43.241+05:30  INFO 21440 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/'
2026-07-01T23:36:43.251+05:30  INFO 21440 --- [           main] c.c.orm_learn.OrmLearnApplication        : Started OrmLearnApplication in 7.583 seconds (process running for 9.486)
2026-07-01T23:36:43.256+05:30  INFO 21440 --- [           main] c.c.orm_learn.OrmLearnApplication        : Inside Main
2026-07-01T23:36:43.256+05:30  INFO 21440 --- [           main] c.c.orm_learn.OrmLearnApplication        : Start
Hibernate: select c1_0.co_code,c1_0.co_name from country c1_0
2026-07-01T23:36:43.553+05:30  INFO 21440 --- [           main] c.c.orm_learn.OrmLearnApplication        : Countries: [Country{code='IN', name='India'}, Country{code='US', name='United States'}]
2026-07-01T23:36:43.553+05:30  INFO 21440 --- [           main] c.c.orm_learn.OrmLearnApplication        : End
```