CREATE TABLE restaurants(
   restaurant_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
   restaurant_name VARCHAR(50) NOT NULL,
   restaurant_address TEXT NOT NULL,
   restaurant_contact_number TEXT NOT NULL,
   restaurant_contact_telegram TEXT,
   restaurant_image TEXT,
   restaurant_ref_id uuid,
      FOREIGN KEY (restaurant_ref_id)
         REFERENCES restaurant_types(res_type_id)
            ON DELETE CASCADE
);

                              --      insert      --

--    milliy taom    --
INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'Milliy Taomlar',
   'Shayxontohur, Xadra maydoni',
   '(99)999-99-49',
   'https://t.me/uzbek_taomlari',
   'milliy-milliy-taomlar.jpg',
   '7cdae980-2429-43f0-ac00-602401f5f9a2'
);

INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'Sardoba',
   'Yunusobod, Chingiz Aytmatov st.',
   '(97)447-10-10',
   'https://www.instagram.com/sardoba.milliy.taomlar/',
   'milliy-sardoba.jpg',
   '7cdae980-2429-43f0-ac00-602401f5f9a2'
);

INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'Rayhon',
   'Shayxontohur, Qoratosh st.',
   '(99)890-05-01',
   'https://www.instagram.com/rayhonuz/',
   'milliy-rayhon2.jpg',
   '7cdae980-2429-43f0-ac00-602401f5f9a2'
);

INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'Mazza',
   'Shayxontohur, Navoiy st.',
   '(99)080-08-80',
   'https://www.instagram.com/mazzataom/',
   'milliy-mazza.jpg',
   '7cdae980-2429-43f0-ac00-602401f5f9a2'
);

INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'Jasmin',
   'Samarqand',
   '(97)507-90-00',
   'https://www.instagram.com/jasminsamarkand/',
   'milliy-jasmin.jpg',
   '7cdae980-2429-43f0-ac00-602401f5f9a2'
);

INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'Kashtan',
   'Mirobod, Abu Sulaymon Banokatiy',
   '(90)950-90-05',
   'https://www.instagram.com/kashtan_milliy_taomlari_/',
   'milliy-kashtan.jpg',
   '7cdae980-2429-43f0-ac00-602401f5f9a2'
);

INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'Rohat Milliy Taomlar',
   'Yashnobod, TKAD st.',
   '(71)298-27-77',
   'https://www.instagram.com/rohatrestaurant/',
   'milliy-rohat.jpg',
   '7cdae980-2429-43f0-ac00-602401f5f9a2'
);

INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'O`zbegim',
   'Chilonzor, Lutfiy st.',
   '(71)202-80-20',
   'https://www.instagram.com/ozbegimmilliytaomlar/',
   'milliy-ozbegim.png',
   '7cdae980-2429-43f0-ac00-602401f5f9a2'
);


                                                --     fast food     --

INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'EVOS',
   'Chilonzor, Furqat st.',
   '(71)203-12-12',
   'https://www.instagram.com/evosuzbekistan/',
   'fast-evos.jpg',
   'c3301aa7-9f8e-4849-9823-38f0dcbbd720'
);

INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'Oqtepa Lavash',
   'Shayxontohur, Samarqand D. st.',
   '(78)150-00-30',
   'https://www.instagram.com/oqtepalavash.official/',
   'fast-oqtepa.png',
   'c3301aa7-9f8e-4849-9823-38f0dcbbd720'
);

INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'Max Way Food',
   'Yunusobod, Amir Temur X. ',
   '(71)200-54-00',
   'https://www.instagram.com/maxwayuz/',
   'fast-maxway.png',
   'c3301aa7-9f8e-4849-9823-38f0dcbbd720'
);

INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'Bellissimo Pizza',
   'Buyuk Ipak Yo`li',
   '(71)203-66-66',
   'https://www.instagram.com/bellissimouz/',
   'fast-Bellissimo.png',
   'c3301aa7-9f8e-4849-9823-38f0dcbbd720'
);

INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'Feed Up',
   'Shayxontohur, Qoratosh st.',
   '(71)200-22-11',
   'https://www.instagram.com/feedupuz/',
   'fast-feedup2.jpg',
   'c3301aa7-9f8e-4849-9823-38f0dcbbd720'
);

INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'Loook',
   'Chilonzor,Farhod st.',
   '(71)207-20-70',
   'https://www.instagram.com/loookuz/',
   'fast-loook4.jpg',
   'c3301aa7-9f8e-4849-9823-38f0dcbbd720'
);

INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'Hot DogiDog',
   'Miro Ulug`bek, Istiqbol st.',
   '(95)193-39-99',
   'https://www.instagram.com/hotdoguz/',
   'fast-dogidogi2.jpg',
   'c3301aa7-9f8e-4849-9823-38f0dcbbd720'
);

INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_contact_telegram,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
   'KFC',
   'Chilonzor, Kichik Halqa Yo`li st.',
   '(78)129-70-00',
   'https://www.instagram.com/kfcinuzbekistan/',
   'fast-kfc.png',
   'c3301aa7-9f8e-4849-9823-38f0dcbbd720'
);
