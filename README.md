# Web-App-Team-6---Vote4Social
Ramon Prat, Iuliana Vladisavlevici, Romina Rua, Cristina Fernández, Laura Carulla

Front-End para app creada durante las jornadas de Hackaton del 30/31 de Julio 2018 para IT Academy Developer (Barcelona Activa). Desarrollo colaborativo de aplicación para m4social (www.m4social.org) con el objetivo de crear una plataforma de votación para asambleas generales de entidades del tercer sector.

Back-End creada con Java Restfull API framework Spring and JPA.

https://github.com/Iuliana19/v4socialBE

WebApp responsive realizada con bootstrap, flexbox y grids.

Pantallas
login.html
Entrar con login y pass ya sea entidad o usuario (asistente a la votación). 
Si la entidad no está registrada, iniciar registro.
Recordar contraseña

perfilent.html
Si la entidad está registrada, editar datos.
Posibilidad de añadir usuarios en su base de datos (database.html)
Si la entidad no está registrada, introducir datos y registrar (no guardar).

perfiluser.html
si el usuario entra con su login y pass, posibilidad de editar sus datos
y eliminar cuenta

database.html
Introducir usuarios nuevos.
Editar si participa o no en el evento creado.
Editar usuario y votos.

events.html
pantalla para entidad.
añadir nuevo evento
ver información evento futuro (single-future-event.html)
votar evento presente (single-event.html)
ver información evento pasado (single-past-event.html)


single-future-event.html
descripción del próximo evento con fecha de inicio
volver a eventos

single-event.html
descripción del evento en curso y fecha de finalización
ir a votar (votacion.html)

single-past-event.html
descripción del evento con fecha de finalización
ver resultados 

votacion.html
Pregunta núm 1 
siguiente pregunta
contador de preguntas
