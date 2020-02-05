-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 05, 2020 at 03:08 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `wild_circus`
--
CREATE DATABASE IF NOT EXISTS `wild_circus` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `wild_circus`;

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `url` varchar(256) NOT NULL,
  `alt_text` varchar(256) NOT NULL,
  `spectacle_id` int(11) DEFAULT NULL,
  `is_cover` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `url`, `alt_text`, `spectacle_id`, `is_cover`) VALUES
(1, 'https://static.lexpress.fr/medias_11697/w_2048,h_1146,c_crop,x_0,y_68/w_480,h_270,c_fill,g_north/v1564404244/cirque-tigre_5989370.jpg', 'tigre', 1, 1),
(2, 'https://fiveprestige.fr/wp-content/uploads/2016/08/clown-spectacle-enfant-adulte-cirque.jpg', 'clown', 2, 0),
(3, 'https://c7.alamy.com/compes/j00p5k/tres-clowns-sentado-en-la-playa-tomando-el-sol-en-un-dia-soleado-durante-el-festival-internacional-de-payasos-en-bognor-regis-west-sussex-inglaterra-j00p5k.jpg', 'clown_plage', 2, 1),
(4, 'https://www.parisnightlife.fr/wp-content/uploads/Spectacle-visuel549f3b497fad1.jpg', 'magicien', 3, 1),
(5, 'https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2017/03/22/node_136311/27014519/public/2017/03/22/B9711478857Z.1_20170322101715_000%2BG6D8OAPI9.2-0.jpg?itok=hC4a8TN21490174253', 'Trapézistes', 4, 1),
(6, 'https://www.telez.fr/content/uploads/2019/12/43e-edition-du-festival-du-cirque-de-monte-carlo-1280x720.jpg', 'Trapézistes 2', 4, 0),
(7, 'https://i0.wp.com/www.profession-spectacle.com/wp-content/uploads/2016/02/Clown.jpg?resize=1280%2C640&ssl=1', 'Clowns', 2, 0),
(8, 'https://cirqueindigo.com/wp-content/uploads/2019/01/spectacle-vivant-pyrom%C3%A9lodique-cirque-indigo.jpg', 'Jongleur de feu', 5, 1),
(9, 'https://www.amicale19ussel.com/wp-content/uploads/2011/06/Jongleurs.jpg', 'Jongleur sur chevaux', 5, 0),
(10, 'https://vl-media.fr/wp-content/uploads/2019/05/cirque-roncalli-animaux-hologrammes-2.png', 'Eléphant holograme', 6, 0),
(11, 'https://www.turkiyekulisi.com/images/upload/hologram-circus-animals-roncalli-2.jpg', 'Virtual Horses', 6, 1);

-- --------------------------------------------------------

--
-- Table structure for table `localisation_circus`
--

CREATE TABLE `localisation_circus` (
  `id` int(11) NOT NULL,
  `nom` varchar(256) NOT NULL,
  `rue` varchar(256) NOT NULL,
  `ville` varchar(256) NOT NULL,
  `pays` varchar(256) NOT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `localisation_circus`
--

INSERT INTO `localisation_circus` (`id`, `nom`, `rue`, `ville`, `pays`, `latitude`, `longitude`) VALUES
(1, 'Wild Circus Paris', '11 rue de Poissy', 'Paris', 'France', 48.8491, 2.35286),
(2, 'Wild circus Biarritz', '27 Route de Pitoys', 'Biarritz', 'France', 43.4635, -1.51156),
(3, 'Wild Circus La Loupe', '18 Rue de la Gare', 'La Loupe', 'France', 48.4739, 1.01205),
(4, 'Wild Circus Bordeaux', '9 allée Serr', 'Bordeaux ', 'France', 44.8418, -0.560954),
(5, 'Wild Circus London', '68 Hanbury St', 'London', 'Royaume-Uni', 51.5206, -0.070549);

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `id` int(11) NOT NULL,
  `spectacle_id` int(11) NOT NULL,
  `nom` varchar(256) NOT NULL,
  `prenom` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `telephone` varchar(256) NOT NULL,
  `nb_places` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`id`, `spectacle_id`, `nom`, `prenom`, `email`, `telephone`, `nb_places`) VALUES
(1, 1, 'Covert', 'Harry', 'harrycovert@mail.com', '0123456789', 1),
(7, 1, 'Covert', 'Harry', 'harrycovert20@mail.com', '022222233', 1),
(8, 1, 'Covert', 'Harry', 'harrycovert20@mail.com', '022222233', 2),
(9, 1, 'Covert', 'Harry', 'harrycovert20@mail.com', '022222233', 4),
(10, 1, 'Covert', 'Harry', 'harrycovert20@mail.com', '022222233', 3),
(11, 1, 'Covert', 'Harry', 'harrycovert20@mail.com', '022222233', 2),
(15, 1, 'homer', 'simpson', 'h@simpson.com', '001122334455', 1),
(16, 2, 'Le Yeti', 'George', 'g.leyeti@mail.fr', '805622334', 2),
(17, 2, 'Bon', 'Jean', 'jeanbon@email.fr', '01234567', 1),
(18, 2, 'george', 'clown', 'gclown@mail.com', '00000000', 3),
(19, 1, 'Dumans', 'Henriette', 'h.dumans@rilleitte.fr', '0672345908', 2),
(20, 1, 'Dumans', 'Henriette', 'h.dumans@rilleitte.fr', '0672345908', 2);

-- --------------------------------------------------------

--
-- Table structure for table `spectacles`
--

CREATE TABLE `spectacles` (
  `spectacle_id` int(11) NOT NULL,
  `titre` varchar(256) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `dates` date NOT NULL,
  `circus_id` int(11) NOT NULL,
  `prix` decimal(5,2) DEFAULT '0.00',
  `nb_places` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `spectacles`
--

INSERT INTO `spectacles` (`spectacle_id`, `titre`, `description`, `dates`, `circus_id`, `prix`, `nb_places`) VALUES
(1, 'Demo Day', 'Jour de démonstration du projet 3 des Dev\r\nLorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aspernatur? Harum unde a laborum provident, dicta ipsam magnam recusandae voluptatem. Impedit suscipit ad ipsa, omnis illum magnam ab eligendi sapiente!\r\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aspernatur? Harum unde a laborum provident, dicta ipsam magnam recusandae voluptatem. Impedit suscipit ad ipsa, omnis illum magnam ab eligendi sapiente!', '2020-02-06', 1, '12.50', 105),
(2, 'les clowns à la plage', 'Des clown sur une plage...\r\nLorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aspernatur? Harum unde a laborum provident, dicta ipsam magnam recusandae voluptatem. Impedit suscipit ad ipsa, omnis illum magnam ab eligendi sapiente!\r\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aspernatur? Harum unde a laborum provident, dicta ipsam magnam recusandae voluptatem. Impedit suscipit ad ipsa, omnis illum magnam ab eligendi sapiente!', '2020-01-31', 2, '8.00', 75),
(3, 'Hector le magicien', 'Un spectacle magique. Jour de démonstration du projet 3 des Dev Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aspernatur? Harum unde a laborum provident, dicta ipsam magnam recusandae voluptatem. Impedit suscipit ad ipsa, omnis illum magnam ab eligendi sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit', '2020-02-13', 1, '9.99', 16),
(4, 'Les trapézistes en folie', 'Très beaux numéro de trapézistes\r\nDu jamais vu !\r\nLorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aspernatur? Harum unde a laborum provident, dicta ipsam magnam recusandae voluptatem.', '2020-02-12', 3, '10.00', 60),
(5, 'Jonglage sauvage', 'Une superbe performance de jonglage\r\nLorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aspernatur? Harum unde a laborum provident, dicta ipsam magnam recusandae voluptatem. Impedit ', '2020-02-18', 4, '12.50', 80),
(6, 'Virtual Animals', 'Come see those spectacular virtual animals in a magical performance powered by the latest hologram technologies.', '2020-02-28', 5, '15.00', 200);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `spectacle_id` (`spectacle_id`);

--
-- Indexes for table `localisation_circus`
--
ALTER TABLE `localisation_circus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `spectacle_id` (`spectacle_id`);

--
-- Indexes for table `spectacles`
--
ALTER TABLE `spectacles`
  ADD PRIMARY KEY (`spectacle_id`) USING BTREE,
  ADD KEY `circus_id` (`circus_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `localisation_circus`
--
ALTER TABLE `localisation_circus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `spectacles`
--
ALTER TABLE `spectacles`
  MODIFY `spectacle_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`spectacle_id`) REFERENCES `spectacles` (`spectacle_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `spectacles`
--
ALTER TABLE `spectacles`
  ADD CONSTRAINT `spectacles_ibfk_1` FOREIGN KEY (`circus_id`) REFERENCES `localisation_circus` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
SET FOREIGN_KEY_CHECKS=1;
