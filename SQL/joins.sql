create database shop;
use shop;
drop table customers;
create table customers(C_id int primary key , c_name varchar(40),c_contact varchar(30));
CREATE TABLE orders (
    C_id INT ,
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    order_amount VARCHAR(10),
    bill_status VARCHAR(5),
    FOREIGN KEY (C_id)
        REFERENCES customers (C_id)
);
insert into customers(C_id, c_name ,c_contact )values("1", "Arsalan" , "03456866398");
insert into customers(C_id, c_name ,c_contact )values("2", "Shehzad" , "03456866398");
insert into orders(
C_id,
order_amount ,
    bill_status 
)values ("1",5000 , "paid");
select * from orders;
alter table orders modify C_id int not null;
insert into orders(
C_id,
order_amount ,
    bill_status 
)values ("2",6000 , "unpaid");
SET FOREIGN_KEY_CHECKS=0;
drop table orders;
select * from customers Join orders on customers.C_id = orders.c_id;



