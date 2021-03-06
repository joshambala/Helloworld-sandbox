### Schema

CREATE DATABASE helloworld;
USE helloworld;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id)
);

CREATE TABLE bootcamps
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	outcomes BOOLEAN DEFAULT false,
	location varchar(255) NOT NULL,
  logo varchar(255) NOT NULL,
  rating int NOT NULL,
  technology varchar(255) NOT NULL,
  duration int NOT NULL,
  comments varchar(255) NOT NULL,
  costs int NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE comments
(
	id int NOT NULL AUTO_INCREMENT,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
