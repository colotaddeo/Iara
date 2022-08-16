-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 16-08-2022 a las 00:24:38
-- Versión del servidor: 8.0.17
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_proyecto2022`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospitales`
--

CREATE TABLE `hospitales` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `email` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `hospitales`
--

INSERT INTO `hospitales` (`id`, `nombre`, `email`) VALUES
(1, 'Maimonides', 'LuisMaimonides@gmail.com'),
(2, 'Maimonides', 'LuisMaimonides@gmail.com'),
(3, 'Maimonides', 'LuisMaimonides@gmail.com'),
(4, 'Maimonides', 'LuisMaimonides@gmail.com'),
(5, 'Maimonides', 'LuisMaimonides@gmail.com'),
(6, 'Maimonides', 'LuisMaimonides@gmail.com'),
(7, 'Maimonides', 'LuisMaimonides@gmail.com'),
(8, 'LuisovichHospital', 'LuisovichHospital@gmail.com'),
(9, 'PepeSandHospital', 'PepeSandHospital@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `id` int(11) NOT NULL,
  `titulo` varchar(30) NOT NULL,
  `descripcion` varchar(40) NOT NULL,
  `nombre_img` varchar(50) NOT NULL,
  `ruta_img` varchar(60) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id`, `titulo`, `descripcion`, `nombre_img`, `ruta_img`, `createdAt`) VALUES
(10, 'hola', 'chau', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:22:11'),
(11, '', '', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:25:03'),
(12, '', '', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:28:34'),
(13, 'hola', 'chau', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:29:54'),
(14, '', '', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:35:29'),
(15, 'hola', 'chau', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:36:53'),
(16, 'hola', 'chau', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:37:15'),
(17, 'hola', 'chau', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:44:43'),
(18, 'hola', 'chau', 'Ejercicio 1 y 2.jfif', 'images\\Ejercicio 1 y 2.jfif', '2022-08-11 11:45:11'),
(19, 'hola', 'chau', 'Ejercicio 3.jfif', 'images\\Ejercicio 3.jfif', '2022-08-11 11:56:30'),
(20, 'hola', 'chau', '10824134359184058001.jpg', 'images\\10824134359184058001.jpg', '2022-08-11 22:05:37'),
(21, 'Buen dia', 'Buenasss', '10824134359184058001.jpg', '\\Back-end\\Server-Node\\images\\10824134359184058001.jpg', '2022-08-12 00:35:23'),
(22, 'Buen dia', 'Buenasss', '402871.gif', '\\Back-end\\Server-Node\\images\\402871.gif', '2022-08-12 00:35:52'),
(23, 'hola', 'chau', '10824134359184058001.jpg', 'images\\10824134359184058001.jpg', '2022-08-13 01:53:51'),
(24, 'hola', 'chau', '10824134359184058001.jpg', 'Back-end\\Server-Node\\images\\10824134359184058001.jpg', '2022-08-13 01:57:26'),
(25, 'hola', 'chau', '10824134359184058001.jpg', 'Server-Node\\images\\10824134359184058001.jpg', '2022-08-13 01:58:25'),
(26, 'hola', 'chau', '10824134359184058001.jpg', 'images\\10824134359184058001.jpg', '2022-08-13 02:02:03'),
(27, 'hola', 'chau', 'Pantalla5_fondo1440x1040.png', 'images\\Pantalla5_fondo1440x1040.png', '2022-08-13 03:07:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `email` varchar(60) NOT NULL,
  `contrasenia` varchar(100) NOT NULL,
  `matricula` int(6) NOT NULL,
  `id_Hospital` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`id`, `nombre`, `apellido`, `email`, `contrasenia`, `matricula`, `id_Hospital`) VALUES
(1, '0', '0', '0', '0', 123908, NULL),
(2, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, NULL),
(3, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, NULL),
(4, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, NULL),
(5, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, NULL),
(6, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, NULL),
(7, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, NULL),
(8, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, 6),
(9, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, 7),
(10, 'Mandarino', 'Juancho', 'MandarinoJuancho@gmail.com', '$2a$12$Qv1xTGUKV1XKKz/PITHHgeTh1/n1gT.iA/rCD4/x5IrlbMsJpCFNq', 123333, 8),
(11, 'Pepe', 'Sand', 'PepeSand@gmail.com', '$2a$12$u8.qy7Yz4sDXX3.4rLj3ze7VQTj0bxTghTa5pyckCJChmZWiBsSYy', 124567, 9);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `hospitales`
--
ALTER TABLE `hospitales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_hospital` (`id_Hospital`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `hospitales`
--
ALTER TABLE `hospitales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `registro`
--
ALTER TABLE `registro`
  ADD CONSTRAINT `fk_hospital` FOREIGN KEY (`id_Hospital`) REFERENCES `hospitales` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
