-- Connect to database created in schema
\c clothes_db

-- Insert seed data
INSERT INTO clothes 
(name, brand, category, shop_url, img_url, is_Favorite, is_selected)
VALUES
('Speedy Bandoulière 25', 'Louis Vuitton', 'Bags', 'https://www.louisvuitton.com/eng-us/products/speedy-bandouliere-25-monogram-008657', 'https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--speedy-bandouliere-25-monogram--M40312_PM2_Front%20view.jpg', true, false);


