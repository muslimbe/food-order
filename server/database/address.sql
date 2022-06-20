CREATE DATABASE TABLE INSERT FROM PRIMARY FOREIGN KEY REFERENCES ON WHERE INNER JOIN
VARCHAR INT NOT NULL TEXT ON DELETE DEFAULT IF EXISTS SET UPDATE CASCADE EXTENSION 

CREATE TABLE cities (
   city_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
   city_name VARCHAR(50) NOT NULL
);

CREATE TABLE districts (
   district_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
   district_name VARCHAR(50) NOT NULL,
   district_ref_id uuid,
      FOREIGN KEY (district_ref_id)
         REFERENCES cities(city_id)
            ON DELETE CASCADE
);

INSERT INTO cities
   (city_name)
VALUES 
   ('Toshkent'),
   ('Toshkent viloyati'),
   ('Buxoro');

INSERT INTO districts
   (
      district_name, 
      district_ref_id
   )
VALUES
   (
      'Shayxontohur',
      '2cfa3d0d-ca54-45de-9297-e0cc5750a493'
   ),
   (
      'Yunusobod',
      '2cfa3d0d-ca54-45de-9297-e0cc5750a493'
   ),
   (
      'Olmazor',
      '2cfa3d0d-ca54-45de-9297-e0cc5750a493'
   ),
   (
      'Yangiyo`l',
      'b98618a8-39db-45f9-867c-e27df8775eb2'
   ),
   (
      'Chinoz',
      'b98618a8-39db-45f9-867c-e27df8775eb2'
   ),
   (
      'Zangiota',
      'b98618a8-39db-45f9-867c-e27df8775eb2'
   ),
   (
      'Jondor',
      '08900f60-ebfd-4a2e-93d0-ae95dc2a6bc1'
   ),
   (
      'Qorako`l',
      '08900f60-ebfd-4a2e-93d0-ae95dc2a6bc1'
   ),
   (
      'Kogon',
      '08900f60-ebfd-4a2e-93d0-ae95dc2a6bc1'
   );