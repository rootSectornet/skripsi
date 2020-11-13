/*
-- Query: SELECT * FROM skripsi.warehouses
LIMIT 0, 1000

-- Date: 2020-11-13 23:23
*/
use skripsi;
INSERT INTO `warehouses` (`id`,`name`,`alamat`,`createdAt`,`updatedAt`) VALUES (1,'Medan','Jl. Merdeka Raya Medan Barat No 33','2020-10-30 22:19:42','2020-10-30 22:19:42');
INSERT INTO `warehouses` (`id`,`name`,`alamat`,`createdAt`,`updatedAt`) VALUES (2,'Jakarta','Jl. Bulungan Barat Raya no 45','2020-10-30 22:19:42','2020-10-30 22:19:42');
INSERT INTO `warehouses` (`id`,`name`,`alamat`,`createdAt`,`updatedAt`) VALUES (3,'Surabaya','Jl. Surabaya merdeka timur no 66','2020-10-30 22:19:42','2020-10-30 22:19:42');
INSERT INTO `users` (`id`,`name`,`password`,`id_warehouse`,`level`,`createdAt`,`updatedAt`) VALUES (1,'tedijammz@gmail.com','$2b$10$B8t6srbNaCxJBHuFr0DvR.lGYOej24/NHmgAX.MLZtdTKrdF6GKHu',NULL,'ADMIN','2020-10-30 15:35:11','2020-10-30 15:35:11');

INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (181,'Keyboard',2,'2020-10-30 22:40:19','2020-10-30 22:40:19');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (182,'LCD Monitor',2,'2020-10-30 22:40:19','2020-10-30 22:40:19');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (183,'Mouse',2,'2020-10-30 22:40:19','2020-10-30 22:40:19');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (184,'Speaker',2,'2020-10-30 22:40:19','2020-10-30 22:40:19');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (185,'Webcam Camera',2,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (186,'Motherboard ASUS',2,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (187,'Harddisk SATA WD',2,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (188,'SSD WD 128GB',2,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (189,'Harddisk SATA 1TB Sandisk',2,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (190,'CD Room WD',2,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (191,'Keyboard',1,'2020-10-30 22:40:19','2020-10-30 22:40:19');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (192,'LCD Monitor',1,'2020-10-30 22:40:19','2020-10-30 22:40:19');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (193,'Mouse',1,'2020-10-30 22:40:19','2020-10-30 22:40:19');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (194,'Speaker',1,'2020-10-30 22:40:19','2020-10-30 22:40:19');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (195,'Webcam Camera',1,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (196,'Motherboard ASUS',1,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (197,'Harddisk SATA WD',1,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (198,'SSD WD 128GB',1,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (199,'Harddisk SATA 1TB Sandisk',1,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (200,'CD Room WD',1,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (201,'Keyboard',3,'2020-10-30 22:40:19','2020-10-30 22:40:19');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (202,'LCD Monitor',3,'2020-10-30 22:40:19','2020-10-30 22:40:19');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (203,'Mouse',3,'2020-10-30 22:40:19','2020-10-30 22:40:19');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (204,'Speaker',3,'2020-10-30 22:40:19','2020-10-30 22:40:19');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (205,'Webcam Camera',3,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (206,'Motherboard ASUS',3,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (207,'Harddisk SATA WD',3,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (208,'SSD WD 128GB',3,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (209,'Harddisk SATA 1TB Sandisk',3,'2020-10-30 22:41:17','2020-10-30 22:41:17');
INSERT INTO `products` (`id`,`nama`,`id_warehouse`,`createdAt`,`updatedAt`) VALUES (210,'CD Room WD',3,'2020-10-30 22:41:17','2020-10-30 22:41:17');

INSERT INTO `penjualans` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (1,3,'2020-10-30 22:45:04','2020-10-30 22:45:04','2020-10-30 22:45:04');
INSERT INTO `penjualans` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (2,3,'2020-11-20 22:45:04','2020-10-30 22:45:04','2020-10-30 22:45:04');
INSERT INTO `penjualans` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (3,3,'2020-10-24 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `penjualans` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (4,3,'2020-10-24 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `penjualans` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (5,3,'2020-11-27 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `penjualans` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (6,2,'2020-10-30 22:45:04','2020-10-30 22:45:04','2020-10-30 22:45:04');
INSERT INTO `penjualans` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (7,2,'2020-11-20 22:45:04','2020-10-30 22:45:04','2020-10-30 22:45:04');
INSERT INTO `penjualans` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (8,2,'2020-10-24 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `penjualans` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (9,2,'2020-10-24 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `penjualans` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (10,2,'2020-11-27 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `penjualans` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (11,1,'2020-10-30 22:45:04','2020-10-30 22:45:04','2020-10-30 22:45:04');
INSERT INTO `penjualans` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (12,1,'2020-11-20 22:45:04','2020-10-30 22:45:04','2020-10-30 22:45:04');
INSERT INTO `penjualans` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (13,1,'2020-10-24 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `penjualans` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (14,1,'2020-10-24 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `penjualans` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (15,1,'2020-11-27 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');

INSERT INTO `pembelians` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (1,1,'2020-10-30 22:45:04','2020-10-30 22:45:04','2020-10-30 22:45:04');
INSERT INTO `pembelians` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (2,1,'2020-11-20 22:45:04','2020-10-30 22:45:04','2020-10-30 22:45:04');
INSERT INTO `pembelians` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (3,1,'2020-10-24 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `pembelians` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (4,1,'2020-10-24 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `pembelians` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (5,1,'2020-11-27 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `pembelians` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (6,2,'2020-10-30 22:45:04','2020-10-30 22:45:04','2020-10-30 22:45:04');
INSERT INTO `pembelians` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (7,2,'2020-11-20 22:45:04','2020-10-30 22:45:04','2020-10-30 22:45:04');
INSERT INTO `pembelians` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (8,2,'2020-10-24 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `pembelians` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (9,2,'2020-10-24 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `pembelians` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (10,2,'2020-11-27 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `pembelians` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (11,3,'2020-10-30 22:45:04','2020-10-30 22:45:04','2020-10-30 22:45:04');
INSERT INTO `pembelians` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (12,3,'2020-11-20 22:45:04','2020-10-30 22:45:04','2020-10-30 22:45:04');
INSERT INTO `pembelians` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (13,3,'2020-10-24 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `pembelians` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (14,3,'2020-10-24 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');
INSERT INTO `pembelians` (`id`,`id_warehouse`,`tanggal`,`createdAt`,`updatedAt`) VALUES (15,3,'2020-11-27 22:45:45','2020-10-30 22:45:45','2020-10-30 22:45:45');

INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (1,1,210,5,'2020-10-30 22:48:25','2020-10-30 22:48:25');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (2,1,199,5,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (3,1,187,10,'2020-10-30 22:56:46','2020-10-30 22:56:51');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (4,2,210,5,'2020-10-30 22:56:54','2020-10-30 22:56:57');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (5,2,191,6,'2020-10-30 22:56:59','2020-10-30 22:57:02');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (6,2,186,2,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (7,2,201,1,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (8,3,209,2,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (9,3,210,2,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (10,4,187,1,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (11,4,199,2,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (12,5,199,3,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (13,3,187,4,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (14,5,193,2,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (15,6,200,2,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (16,6,182,1,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (17,6,204,2,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (18,7,188,3,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (19,7,199,1,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpenjualans` (`id`,`id_penjualan`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (20,8,208,1,'2020-10-30 22:48:43','2020-10-30 22:48:43');


INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (1,1,210,10,'2020-10-30 22:48:25','2020-10-30 22:48:25');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (2,1,199,10,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (3,1,187,10,'2020-10-30 22:54:00','2020-10-30 22:54:49');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (4,2,210,5,'2020-10-30 22:55:03','2020-10-30 22:55:06');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (5,2,191,6,'2020-10-30 22:55:10','2020-10-30 22:55:13');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (6,2,186,8,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (7,2,201,6,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (8,3,209,9,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (9,3,210,5,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (10,4,187,9,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (11,4,199,8,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (12,5,199,8,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (13,3,187,9,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (14,5,193,20,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (15,6,200,3,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (16,6,182,5,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (17,6,204,5,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (18,7,188,6,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (19,7,199,20,'2020-10-30 22:48:43','2020-10-30 22:48:43');
INSERT INTO `detailpembelians` (`id`,`id_pembelian`,`id_product`,`jumlah`,`createdAt`,`updatedAt`) VALUES (20,8,208,9,'2020-10-30 22:48:43','2020-10-30 22:48:43');
