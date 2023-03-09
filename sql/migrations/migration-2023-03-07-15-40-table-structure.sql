create table country (
	countryId int4 unsigned primary key auto_increment,
	title varchar(256) not null unique,
	createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp
);

create table city (
  cityId int4 unsigned primary key auto_increment,
  title varchar(256) not null,
  countryId int4 unsigned not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp,
  foreign key (countryId) references country(countryId)
);


create table model (
  modelId int4 unsigned primary key auto_increment,
  title varchar(32) not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp
);

create table brand (
  brandId int4 unsigned primary key auto_increment,
  title varchar(32) not null,
  modelId int4 unsigned not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp,
  foreign key (modelId) references model(modelId)
);

create table image (
  imageId int4 unsigned primary key auto_increment,
  src varchar(256) not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp
);

create table user (
  userId int4 unsigned primary key auto_increment,
  email varchar(64) not null unique,
  password varchar(64) not null,
  name varchar(64) not null,
  surname varchar(64) not null,
  phone varchar(16) not null,
  imageId int4 unsigned not null unique,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp,
  foreign key (imageId) references image(imageId)
);

create table car (
  carId int4 unsigned primary key auto_increment,
  style varchar(16) not null,
  year varchar(16) not null,
  address varchar(64) not null,
  userId int4 unsigned not null,
  cityId int4 unsigned not null,
  brandId int4 unsigned not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp,
  foreign key (userId) references user(userId),
  foreign key (cityId) references city(cityId),
  foreign key (brandId) references brand(brandId)
);

create table user_liked_car (
  carId int4 unsigned not null,
  userId int4 unsigned not null,
  foreign key (carId) references car(carId),
  foreign key (userId) references user(userId),
  primary key (carId, userId)
);

create table car_image (
  carId int4 unsigned not null,
  imageId int4 unsigned not null primary key,
  foreign key (carId) references car(carId),
  foreign key (imageId) references image(imageId)
);
