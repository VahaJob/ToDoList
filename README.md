# ToDoList
ToDoList- is a web service and task management software suite. Tasks can also contain notes with files of any type. Tasks can be placed in projects, sorted by filters, edited and exported.

Installing

Database 

First of all you need to instal docker your local/vm mashine and after start init postgres in docker

1.docker pull postgres

2.docker images/docker ps -a

3.docker run 
    --name ToDoList 
    -p 5455:5432 
    -e POSTGRES_USER=postgres 
    -e POSTGRES_PASSWORD=postgres
    -e POSTGRES_DB=ToDoListDB 
    -d 
    postgres
	
4. docker start postgresqldb

also you can use pgadmin or dbvear	

5.docker exec -it yamls.data bash

6. psql -U postgres
