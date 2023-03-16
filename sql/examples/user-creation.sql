insert into image (src) VALUE ('https://www.economist.com/sites/default/files/images/print-edition/20131207_WBP004_0.jpg');

insert into user (email, password, name, surname, phone, imageId) VALUE 
('user3@gmail.com', 'City123!', 'Baby', 'Face', '+388 583 9283321', last_insert_id());