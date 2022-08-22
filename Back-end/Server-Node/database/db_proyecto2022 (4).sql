-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 22-08-2022 a las 00:59:30
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(9, 'PepeSandHospital', 'PepeSandHospital@gmail.com'),
(10, 'ArotuAlzoHospital', 'ArotuAlzoHospital@gmail.com'),
(11, 'NachoHosp', 'Nacho@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `id` int(11) NOT NULL,
  `DNI` int(8) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` int(11) NOT NULL,
  `id_medico` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id`, `DNI`, `nombre`, `apellido`, `createdAt`, `updatedAt`, `id_medico`) VALUES
(30, 13789432, 'Ramiro', 'Perez', '2022-08-17 17:33:30', 0, NULL),
(31, 13789432, 'Ramiro', 'Perez', '2022-08-17 17:33:53', 0, NULL),
(33, 11222344, 'Pancho', 'Santarelli', '2022-08-22 00:48:33', 0, 11),
(34, 908732626, 'Pancho', 'Santarelli', '2022-08-22 00:54:18', 0, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `radiografias`
--

CREATE TABLE `radiografias` (
  `id` int(11) NOT NULL,
  `nombre_img` varchar(40) NOT NULL,
  `titulo_img` varchar(40) NOT NULL,
  `descripcion_img` varchar(50) NOT NULL,
  `ruta_img` varchar(40) NOT NULL,
  `titulo_img_procesada` varchar(40) NOT NULL,
  `descripcion_img_procesada` varchar(50) NOT NULL,
  `ruta_img_procesada` varchar(40) NOT NULL,
  `probabilidad` double NOT NULL,
  `posicion` varchar(40) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` int(11) NOT NULL,
  `id_Paciente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `radiografias`
--

INSERT INTO `radiografias` (`id`, `nombre_img`, `titulo_img`, `descripcion_img`, `ruta_img`, `titulo_img_procesada`, `descripcion_img_procesada`, `ruta_img_procesada`, `probabilidad`, `posicion`, `createdAt`, `updatedAt`, `id_Paciente`) VALUES
(2, '402871.gif', 'hola', 'chau', 'images\\402871.gif', '', '', '', 0, '', '2022-08-21 20:00:25', 0, 0),
(3, '402871.gif', 'hola', 'chau', 'images\\402871.gif', '', '', '', 0, '', '2022-08-21 20:00:40', 0, 0),
(4, '402871.gif', 'hola', 'chau', 'images\\402871.gif', '', '', '', 0, '', '2022-08-21 20:08:49', 0, 0),
(5, '402871.gif', 'hola', 'chau', 'images\\402871.gif', '', '', '', 0, '', '2022-08-22 00:04:28', 0, 0),
(6, '402871.gif', 'hola', 'chau', 'images\\402871.gif', '', '', '', 0, '', '2022-08-22 00:06:26', 0, 0),
(7, '402871.gif', 'hola', 'chau', 'images\\402871.gif', '', '', '', 0, '', '2022-08-22 00:11:34', 0, 0),
(8, '402871.gif', 'hola', 'chau', 'images\\402871.gif', '', '', '', 0, '', '2022-08-22 00:39:24', 0, 0);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(11, 'Pepe', 'Sand', 'PepeSand@gmail.com', '$2a$12$u8.qy7Yz4sDXX3.4rLj3ze7VQTj0bxTghTa5pyckCJChmZWiBsSYy', 124567, 9),
(12, 'Arotu', 'Alzo', 'ArotuAlzo@gmail.com', '$2a$12$IqhwNm3KXhHsFg4wgQFGfey1rJTblGCjYPiT.CYOULMTo557GRbTe', 897654, 10),
(13, 'Nacho', 'Alzo', 'Nacho@gmail.com', '$2a$12$tCtK2g21mf4ZZd4lwbJAK.B2BqYZCSyZaO91OYua/i18rlp0o4A4S', 897654, 11);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario` (`id_medico`);

--
-- Indices de la tabla `radiografias`
--
ALTER TABLE `radiografias`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `radiografias`
--
ALTER TABLE `radiografias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD CONSTRAINT `fk_usuario` FOREIGN KEY (`id_medico`) REFERENCES `registro` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `registro`
--
ALTER TABLE `registro`
  ADD CONSTRAINT `fk_hospital` FOREIGN KEY (`id_Hospital`) REFERENCES `hospitales` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
