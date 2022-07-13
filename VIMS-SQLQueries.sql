CREATE TABLE customer (
    custid int  IDENTITY(1,1) NOT NULL primary key,
	first_name varchar(25) not null,
	last_name varchar(25) not null,
	email varchar(30) not null,
	phone_no varchar(15) not null,
	address varchar(30) not null,
	password varchar(30) not null,
);

CREATE TABLE Admin (
    adminid int  IDENTITY(1,1) NOT NULL primary key,
	first_name varchar(25) not null,
	last_name varchar(25) not null,
	email varchar(30) not null,
	phone_no varchar(15) not null,
	address varchar(30) not null,
	password varchar(30) not null,
);




create table Vehicles(
    Vehicles_id int  IDENTITY(1,1) NOT NULL primary key,
	model varchar(10) not null,
)


create table AllPolicies(
    policyid int  IDENTITY(1,1) NOT NULL primary key,
	premium_amount int not null,
	gst_amount int not null,
	total_amount int not null,
	duration varchar(20) not null,
)

CREATE TABLE vehicle_info  (
    vehid int  IDENTITY(1,1) NOT NULL primary key,
	regi_no varchar(10) not null,
	veh_chassis_no varchar(17) not null,
	Veh_engine_no varchar(11) not null,
	model varchar(10) not null,
	purchase_year int not null,
	custid int FOREIGN KEY REFERENCES customer(custid)
);


CREATE TABLE policy  (
    id int  IDENTITY(1,1) NOT NULL primary key,
	premium_amount int not null,
	gst_amount int not null,
	total_amount int not null,
	renew_date datetime not null,

	policyid int FOREIGN KEY REFERENCES AllPolicies(policyid),
	custid int FOREIGN KEY REFERENCES customer(custid),
	vehid  int FOREIGN KEY REFERENCES vehicle_info(vehid)
);


CREATE TABLE renew_policy  (
    id int  IDENTITY(1,1) NOT NULL primary key,

	renew_amount int not null,
	gst_amount int not null,
	total_amount int not null,
	Next_renew_date datetime not null,

	Initial_policy_Id int FOREIGN KEY REFERENCES policy(id),
	custid int FOREIGN KEY REFERENCES customer(custid),
	vehid  int FOREIGN KEY REFERENCES vehicle_info(vehid)
);


CREATE TABLE payment_info  (
    pay_id int  IDENTITY(1,1) NOT NULL primary key,
	payment_date datetime not null,
	paid_amount int not null,
	
	custid int FOREIGN KEY REFERENCES customer(custid),
	policyid  int FOREIGN KEY REFERENCES policy(id)
);


CREATE TABLE Claim  (
    claim_id int  IDENTITY(1,1) NOT NULL primary key,

	claim_amount int not null,
	claim_date datetime not null,

	damage_des varchar(50) not null,
	is_approved char not null,
	custid int FOREIGN KEY REFERENCES customer(custid),
	vehid  int FOREIGN KEY REFERENCES vehicle_info(vehid),
	policyid  int FOREIGN KEY REFERENCES policy(id)
);








select * from policy
select * from payment_info
select * from renew_policy