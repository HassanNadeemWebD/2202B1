create database University ;
use university;
create table students(SId int primary key auto_increment , SName varchar(40) , SAge int , Scontact varchar(11));
select * from students;
INSERT INTO  STUDENTS(SNamE ,SAge, Scontact )  VALUES ("AREEB" , 22 , "031256987456");
INSERT INTO  STUDENTS(SNamE ,SAge, Scontact )  VALUES ("" , 25 , "03125698745");
ALTER TABLE STUDENTS ADD COLUMN SGender varchar(6); 
ALTER TABLE STUDENTS DROP COLUMN SGender ; 
ALTER TABLE STUDENTS modify column SAge varchar(2);
ALTER TABLE STUDENTS modify column Scontact bigint;
select * from students where SName = "umer";
select * from students where SGender = null;  