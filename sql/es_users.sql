CREATE TABLE IF NOT EXISTS `es_users` ( 
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT, 
  `username` varchar(255), 
  `password` varchar(255)  
)