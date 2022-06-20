
CREATE TABLE restaurant_types(
   res_type_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
   res_type_name VARCHAR(50) NOT NULL
);


INSERT INTO restaurant_types (
   res_type_name
)
VALUES (
   'Fast Food'
);

INSERT INTO restaurant_types (
   res_type_name
)
VALUES (
   'Milliy Taomlar'
);

INSERT INTO restaurant_types (
   res_type_name
)
VALUES (
   'All'
);