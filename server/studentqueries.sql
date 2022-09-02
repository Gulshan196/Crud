-- select * from employees
/*write this query in postgres*/
CREATE TABLE student (
   studentid int PRIMARY KEY ,
   studentname varchar(20),
	subject varchar(20),
   marks int
   
);

select * FROM student

insert into student(studentid,studentname,subject,marks) 
                        values(1,'viki','math',8)

