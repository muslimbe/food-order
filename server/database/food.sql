CREATE TABLE foods(
   food_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
   food_name VARCHAR(80) NOT NULL,
   food_price INT NOT NULL,
   food_image TEXT,
   food_ref_id uuid,
      FOREIGN KEY (food_ref_id)
         REFERENCES restaurants(restaurant_id)
          ON DELETE CASCADE
);

--       insert       --

--       milliy taomlar        --

INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Dolma',
    28.000,
   'milliy-taom-dolma.jpg',
   'ed7f235c-2ef3-420f-9bb5-c889b176d351'
);

INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Manti',
    26.000,
   'milliy-taom-manti.jpg',
   'ed7f235c-2ef3-420f-9bb5-c889b176d351'
);

INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Mastava',
    20.000,
   'milliy-taom-mastava.jpg',
   'ed7f235c-2ef3-420f-9bb5-c889b176d351'
);

INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Qovurma lag`mon',
    30.000,
   'milliy-taom-qovurma-lagmon.jpg',
   'ed7f235c-2ef3-420f-9bb5-c889b176d351'
);

                                 --       sardoba       --

INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Beshbarmoq',
    35.000,
   'sardoba-beshbarmoq.jpg',
   '0c64670e-992e-4f16-a971-b91798a01e6e'
);

INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Bifshteks',
    32.000,
   'sardoba-bishteks.jpg',
   '0c64670e-992e-4f16-a971-b91798a01e6e'
);

INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Honim',
    3.000,
   'sardoba-honim.jpg',
   '0c64670e-992e-4f16-a971-b91798a01e6e'
);

INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Norin',
    33.000,
   'sardoba-norin.jpg',
   '0c64670e-992e-4f16-a971-b91798a01e6e'
); 

INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Sho`rva',
    25.000,
   'sardoba-shorva.jpg',
   '0c64670e-992e-4f16-a971-b91798a01e6e'
); 

                     --                rayhon                --

INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Assorti',
    30.000,
   'rayhon-assorti.jpg',
   'df6a138b-eeea-4f83-955a-bac338f97d40'
);

INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Barbekyu',
    31.000,
   'rayhon-barbekyu.jpg',
   'df6a138b-eeea-4f83-955a-bac338f97d40'
);

INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Halim',
    28.000,
   'rayhon-halim.jpg',
   'df6a138b-eeea-4f83-955a-bac338f97d40'
);

INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Kapadokiya',
    28.000,
   'rayhon-kapadokiya.jpg',
   'df6a138b-eeea-4f83-955a-bac338f97d40'
); 

                           --      mazza      --
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Yaponcha Salat',
    12.000,
   'mazza-salat.jpg',
   '5b3fec39-bf50-4f0d-aac8-2cd03336df97'
); 
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Ko`za Sho`rva',
    25.000,
   'mazza-koza-shorva.jpg',
   '5b3fec39-bf50-4f0d-aac8-2cd03336df97'
); 
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Somsa',
    5.000,
   'mazza-somsa.jpg',
   '5b3fec39-bf50-4f0d-aac8-2cd03336df97'
); 
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Sazan Baliq',
    20.000,
   'mazza-baliq.jpg',
   '5b3fec39-bf50-4f0d-aac8-2cd03336df97'
); 

                     --      jasmin      --
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Kachalka',
   40.000,
   'jasmin-kachalka.jpg',
   'a1c20d5d-245e-4885-a315-2fe19b7a2c6a'
); 
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Qo`y Bo`yin',
    33.000,
   'jasmin-boyin.jpg',
   'a1c20d5d-245e-4885-a315-2fe19b7a2c6a'
); 
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Mimoza',
    27.000,
   'jasmin-mimoza.jpg',
   'a1c20d5d-245e-4885-a315-2fe19b7a2c6a'
); 
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Cho`poncha Jiz',
    29.000,
   'jasmin-jiz.jpg',
   'a1c20d5d-245e-4885-a315-2fe19b7a2c6a'
); 

                 --          kashtan           --
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Qovrma Lag`mon',
    25.000,
   'kashtan-qovurma-lagmon.jpg',
   '31746d52-6e11-4a72-97cf-c109388e24f1'
); 
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Kabob',
    12.000,
   'kashtan-kabob.jpg',
   '31746d52-6e11-4a72-97cf-c109388e24f1'
); 
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Tovuq',
    24.000,
   'kashtan-tovuq.jpg',
   '31746d52-6e11-4a72-97cf-c109388e24f1'
); 
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Shampinyon',
    20.000,
   'kashtan-shampinyon.jpg',
   '31746d52-6e11-4a72-97cf-c109388e24f1'
); 

                     --    rohat    --
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Uyg`urcha Lag`mon',
    18.000,
   'rohat-uygurcha-lagmon.png',
   '444be296-b31c-4c55-9b95-4434de6af159'
); 
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Manti',
    4.000,
   'rohat-manti.png',
   '444be296-b31c-4c55-9b95-4434de6af159'
); 
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Norin',
    22.000,
   'rohat-norin.jpg',
   '444be296-b31c-4c55-9b95-4434de6af159'
); 
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Assorti',
    26.000,
   'rohat-assorti.jpg',
   '444be296-b31c-4c55-9b95-4434de6af159'
); 

           --          o'zbegim          --

INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Tushonka',
    34.000,
   'ozbegim-tushonka.jpg',
   'fa3e4eb6-fd99-4478-b63b-80577dcc2c74'
); 
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Ko`za Sho`rva',
    19.000,
   'ozbegim-koza-shorva.jpg',
   'fa3e4eb6-fd99-4478-b63b-80577dcc2c74'
); 
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Somsa',
    6.000,
   'ozbegim-somsa.jpg',
   'fa3e4eb6-fd99-4478-b63b-80577dcc2c74'
); 
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   'Mampar',
    15.000,
   'ozbegim-mampar.jpg',
   'fa3e4eb6-fd99-4478-b63b-80577dcc2c74'
); 

-- ---------------------- fast food -------------------------- --
INSERT INTO foods(
   food_name,
   food_price,
   food_image,
   food_ref_id
) 
VALUES(
   '',
    15.000,
   'ozbegim-mampar.jpg',
   'fa3e4eb6-fd99-4478-b63b-80577dcc2c74'
); 
