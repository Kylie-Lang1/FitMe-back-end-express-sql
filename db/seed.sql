-- Connect to database created in schema
\c clothes_db

-- Insert seed data
INSERT INTO clothes 
(name, brand, category, img_url, shop_url, is_Favorite, is_Owned, is_selected)
VALUES
(
    'Prada Re-Edition 2005 Re-Nylon mini bag', 
    'Prada', 
    'accessory', 
    'https://www.prada.com/content/dam/pradabkg_products/1/1NE/1NE204/R064F0002/1NE204_R064_F0002_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.1250.1250.jpg,https://www.prada.com/content/dam/pradabkg_products/1/1NE/1NE204/R064F0002/1NE204_R064_F0002_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.2000.2000.jpg', 
    'https://www.prada.com/us/en/women/bags/mini_bags/products.Prada_Re_Edition_2005_Re_Nylon_mini_bag.1NE204_R064_F0002.html?utm_campaign=GoogleShopping_US&utm_medium=CPC&utm_source=Google&utm_content=PMax&s_kwcid=AL!8549!3!!!!x!!&gclid=CjwKCAiA0JKfBhBIEiwAPhZXD9ShdeFF8QWmUe96d3rBih9Yzt6o7709OpRR1QFB-1_a3HlD15Ab5BoC_YIQAvD_BwE&gclsrc=aw.ds', 
    false, 
    false,
    false
),
(
    'Davie Mini Dress', 
    'Finesse', 
    'dress', 
    'https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-Set-Front_1ee772ac-ccd3-4c55-bc71-224facc5fe4f_1100x.jpg?v=1674910743',
    'https://finesse.us/products/davie-mini-dress?variant=39604847607885&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&wickedsource=google&wickedid=CjwKCAiA0JKfBhBIEiwAPhZXD088MdGQbIF6FJgqVsEO04DuqI9nqLCAaxxdHlgea89pJXqzOWuqZRoC05EQAvD_BwE&wickedid=&wcid=17492405202&wv=4&wickedsource=google&wickedid=CjwKCAiA0JKfBhBIEiwAPhZXD088MdGQbIF6FJgqVsEO04DuqI9nqLCAaxxdHlgea89pJXqzOWuqZRoC05EQAvD_BwE&wickedid=&wcid=17492405202&wv=4&gclid=CjwKCAiA0JKfBhBIEiwAPhZXD088MdGQbIF6FJgqVsEO04DuqI9nqLCAaxxdHlgea89pJXqzOWuqZRoC05EQAvD_BwE', 
    false, 
    false,
    false
),
(
    'Leather Double Bow Glitter Pumps 110', 
    'MACH & MACH', 
    'shoes', 
    'https://image.harrods.com/mach-mach-leather-double-bow-glitter-pumps-110_17464163_36632699_1000.jpg',
    'https://www.harrods.com/en-gb/shopping/mach-mach-leather-double-bow-glitter-pumps-110-17464163', 
    false, 
    false,
    false
),
(
    'Thrifted Flannel', 
    '', 
    'top', 
    'https://cdnimg.emmiol.com/E/202107/img_original-DBG0347TO-0302101026.jpg',
    '',
    true, 
    true,
    false
),
(
    'Black Cargo Pants w/ Chain', 
    'Manière de Voir', 
    'bottom', 
    'https://cdn.shopify.com/s/files/1/1604/7647/products/cargo-pants-with-marble-and-matte-chain-black1.jpg?v=1673630765',
    'https://us.manieredevoir.com/products/cargo-pants-with-marble-and-matte-chain-black',
    true, 
    false,
    false
);

INSERT INTO outfits
(name, img1_url, img2_url, img3_url, img4_url, img5_url, img6_url)
VALUES 
(
    'Going Out',
    'https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-Set-Front_1ee772ac-ccd3-4c55-bc71-224facc5fe4f_1100x.jpg?v=1674910743',
    'https://www.prada.com/content/dam/pradabkg_products/1/1NE/1NE204/R064F0002/1NE204_R064_F0002_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.1250.1250.jpg,https://www.prada.com/content/dam/pradabkg_products/1/1NE/1NE204/R064F0002/1NE204_R064_F0002_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.2000.2000.jpg', 
    'https://image.harrods.com/mach-mach-leather-double-bow-glitter-pumps-110_17464163_36632699_1000.jpg',
    null,
    null,
    null
)
