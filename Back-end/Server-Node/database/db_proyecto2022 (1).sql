-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 11-08-2022 a las 13:36:45
-- Versión del servidor: 5.7.17-log
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `id` int(11) NOT NULL,
  `titulo` varchar(30) NOT NULL,
  `descripcion` varchar(40) NOT NULL,
  `nombre_img` varchar(50) NOT NULL,
  `ruta_img` varchar(60) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id`, `titulo`, `descripcion`, `nombre_img`, `ruta_img`, `createdAt`) VALUES
(2, 'hola', 'chau', '10824134359184058001.jpg', '\\Back-end\\Server-Node\\uploads\\10824134359184058001.jpg', '2022-08-11 11:21:01'),
(3, 'hola', 'chau', '10824134359184058001.jpg', '\\Back-end\\Server-Node\\uploads\\10824134359184058001.jpg', '2022-08-11 11:21:01'),
(4, 'hola', 'chau', '10824134359184058001.jpg', '\\Back-end\\Server-Node\\uploads\\10824134359184058001.jpg', '2022-08-11 11:21:01'),
(5, 'hola', 'chau', '10824134359184058001.jpg', 'Back-end\\Server-Node\\images\\10824134359184058001.jpg', '2022-08-11 11:21:01'),
(6, 'hola', 'chau', '10824134359184058001.jpg', 'Back-end\\Server-Node\\images\\10824134359184058001.jpg', '2022-08-11 11:21:01'),
(7, 'hola', 'chau', '10824134359184058001.jpg', 'Server-Node\\images\\10824134359184058001.jpg', '2022-08-11 11:21:01'),
(8, 'hola', 'chau', '10824134359184058001.jpg', 'images\\10824134359184058001.jpg', '2022-08-11 11:21:01'),
(9, 'hola', 'chau', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:21:01'),
(10, 'hola', 'chau', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:22:11'),
(11, 'hola', 'chau', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:25:03'),
(12, 'hola', 'chau', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:28:34'),
(13, 'hola', 'chau', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:29:54'),
(14, 'hola', 'chau', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:35:29'),
(15, 'hola', 'chau', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:36:53'),
(16, 'hola', 'chau', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:37:15'),
(17, 'hola', 'chau', 'WIN_20220317_11_24_18_Pro.jpg', 'images\\WIN_20220317_11_24_18_Pro.jpg', '2022-08-11 11:44:43'),
(18, 'hola', 'chau', 'Ejercicio 1 y 2.jfif', 'images\\Ejercicio 1 y 2.jfif', '2022-08-11 11:45:11'),
(19, 'hola', 'chau', 'Ejercicio 3.jfif', 'images\\Ejercicio 3.jfif', '2022-08-11 11:56:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `id` int(11) NOT NULL,
  `nombre` int(11) NOT NULL,
  `apellido` int(11) NOT NULL,
  `email` int(11) NOT NULL,
  `contrasenia` int(11) NOT NULL,
  `matricula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
