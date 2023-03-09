insert into country(title) values
('Germany'),
('Italy'),
('United Kingdom'),
('Russian'),
('Japan'),
('California');

insert into city(countryId, title) values
(1, 'Wolfsburg'),
(2, 'Modena'),
(3, 'London'),
(1, 'Vorsprung'),
(1, 'Munich'),
(2, 'Sant Agata Bolognese'),
(2, 'Roma'),
(4, 'Moskov'),
(1, 'Stuttgart'),
(5, 'Tahara'),
(3, 'Goodwood'),
(6, 'Los Angeles');


insert into model(title) values
('G63 AMG'),
('812 GTS'),
('Range Rover Sport'),
('A7'),
('750'),
('Huracan'),
('Urus'),
('2101'),
('911 Carrera'),
('GR Supra'),
('Wraith'),
('Mustang');

insert into brand(modelId, title) values
(1, 'Mercedes Benz'),
(2, 'Ferrari'),
(3, 'Land Rover'),
(4, 'Audi'),
(5, 'BMW'),
(6, 'Lamborghini'),
(7, 'Lamborghini'),
(8, 'Lada'),
(9, 'Porsche'),
(10, 'Toyota'),
(11, 'Rolls Royce'),
(12, 'Ford');
