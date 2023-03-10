-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 25-10-2022 a las 12:24:35
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
-- Estructura de tabla para la tabla `hospitales`
--

CREATE TABLE `hospitales` (
  `id` int(11) NOT NULL,
  `email` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `hospitales`
--

INSERT INTO `hospitales` (`id`, `email`) VALUES
(1, 'LuisMaimonides@gmail.com'),
(2, 'LuisMaimonides@gmail.com'),
(3, 'LuisMaimonides@gmail.com'),
(4, 'LuisMaimonides@gmail.com'),
(5, 'LuisMaimonides@gmail.com'),
(6, 'LuisMaimonides@gmail.com'),
(7, 'LuisMaimonides@gmail.com'),
(8, 'LuisovichHospital@gmail.com'),
(9, 'PepeSandHospital@gmail.com'),
(10, 'ArotuAlzoHospital@gmail.com'),
(11, 'Nacho@gmail.com'),
(12, 'HelfHospital@est.edu.ar'),
(13, 'PolloHospital@est.edu.ar'),
(14, 'AAHospital@est.edu.ar'),
(15, 'LuisHospita@est.edu.ar'),
(16, '47205114@est.ort.edu.ar'),
(17, '47205114@est.ort.edu.ar'),
(18, '47205114@est.ort.edu.ar'),
(19, '47205114@est.ort.edu.ar'),
(20, '47205114@est.ort.edu.ar'),
(21, '47205114@est.ort.edu.ar'),
(22, '47205114@est.ort.edu.ar'),
(23, '47205114@est.ort.edu.ar'),
(24, '47205114@est.ort.edu.ar'),
(25, '47205114@est.ort.edu.ar'),
(26, '47205114@est.ort.edu.ar'),
(27, '47205114@est.ort.edu.ar'),
(28, '47205114@est.ort.edu.ar'),
(29, '47205114@est.ort.edu.ar'),
(30, '47205114@est.ort.edu.ar'),
(31, '47205114@est.ort.edu.ar'),
(32, '47205114@est.ort.edu.ar'),
(33, '47205114@est.ort.edu.ar'),
(34, '47205114@est.ort.edu.ar'),
(35, '47205114@est.ort.edu.ar'),
(36, '47205114@est.ort.edu.ar'),
(37, '47205114@est.ort.edu.ar'),
(38, '47205114@est.ort.edu.ar'),
(39, '47205114@est.ort.edu.ar'),
(40, '47205114@est.ort.edu.ar'),
(41, '47205114@est.ort.edu.ar'),
(42, '47205114@est.ort.edu.ar'),
(43, '47205114@est.ort.edu.ar'),
(44, '47205114@est.ort.edu.ar'),
(45, '47205114@est.ort.edu.ar'),
(46, '47205114@est.ort.edu.ar'),
(47, '47205114@est.ort.edu.ar'),
(48, '47205114@est.ort.edu.ar'),
(49, '47205114@est.ort.edu.ar'),
(50, '47205114@est.ort.edu.ar'),
(51, '47205114@est.ort.edu.ar'),
(52, '47205114@est.ort.edu.ar'),
(53, '47205114@est.ort.edu.ar'),
(54, '47205114@est.ort.edu.ar'),
(55, '47205114@est.ort.edu.ar'),
(56, '47205114@est.ort.edu.ar'),
(57, '47205114@est.ort.edu.ar'),
(58, '47205114@est.ort.edu.ar'),
(59, '47205114@est.ort.edu.ar'),
(60, '47205114@est.ort.edu.ar'),
(61, '4720511432@est.ort.edu.ar'),
(62, '4720511432as@est.ort.edu.ar'),
(63, '4720511432sa@est.ort.edu.ar'),
(64, '4720511432sa@est.ort.edu.ar'),
(65, '4720511432ssasaa@est.ort.edu.ar'),
(66, '4720511432ssasaaxzxz@est.ort.edu.ar'),
(67, '4720511432ssasasaaxzxz@est.ort.edu.ar'),
(68, '47205114sa@est.ort.edu.ar'),
(69, '-1'),
(70, 'informes@maimonides.edu');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `id` int(11) NOT NULL,
  `DNI` int(8) NOT NULL,
  `antecedentes` varchar(500) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_medico` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id`, `DNI`, `antecedentes`, `createdAt`, `id_medico`) VALUES
(30, 13789432, '', '2022-08-17 17:33:30', NULL),
(31, 13789432, '', '2022-08-17 17:33:53', NULL),
(33, 11222344, '', '2022-08-22 00:48:33', 11),
(34, 908732626, '', '2022-08-22 00:54:18', 11),
(35, 12345098, '', '2022-08-23 23:24:12', 14),
(36, 12345054, '', '2022-08-23 23:36:52', 14),
(37, 32345054, '', '2022-08-23 23:37:13', 14),
(39, 41335678, '', '2022-09-18 22:14:53', 16),
(40, 21345678, '', '2022-09-18 22:19:14', 16),
(41, 44535678, '', '2022-09-30 23:23:31', 20),
(42, 45678932, '', '2022-09-30 23:23:40', 20),
(43, 21345987, '', '2022-09-30 23:23:46', 20),
(44, 12098765, '', '2022-09-30 23:23:56', 20),
(45, 23456789, '', '2022-09-30 23:27:59', 20),
(46, 45656432, '', '2022-10-01 02:02:03', 20),
(51, 45678900, 'kasldhjalskjdhalksjdhsakl', '2022-10-14 23:14:02', NULL),
(52, 45678900, 'kasldhjalskjdhalksjdhsakl', '2022-10-14 23:16:57', NULL),
(53, 45678900, 'kasldhjalskjdhalksjdhsakl', '2022-10-14 23:20:38', NULL),
(54, 45678900, 'kasldhjalskjdhalksjdhsakl', '2022-10-14 23:21:08', NULL),
(55, 45678900, 'kasldhjalskjdhalksjdhsakl', '2022-10-14 23:21:22', NULL),
(56, 45678900, 'kasldhjalskjdhalksjdhsakl', '2022-10-14 23:23:39', NULL),
(57, 45678900, 'kasldhjalskjdhalksjdhsakl', '2022-10-14 23:26:01', NULL),
(58, 45678900, 'kasldhjalskjdhalksjdhsakl', '2022-10-14 23:26:06', NULL),
(59, 45678900, 'kasldhjalskjdhalksjdhsakl', '2022-10-14 23:27:40', NULL),
(86, 98765, 'dsalkjdalskdjalskdj', '2022-10-15 16:04:03', 52),
(87, 12987345, 'sklaudlaskhdlaskhdlask', '2022-10-15 17:55:29', 52),
(88, 56789123, 'skladhjlaskdjalskdj', '2022-10-15 18:05:23', 52),
(89, 4597090, 'Su familia tiene tuberculosis', '2022-10-15 18:38:51', 52),
(90, 45970901, 'Su familia tiene tuberculosis', '2022-10-15 18:39:37', 52),
(91, 0, '', '2022-10-15 20:02:52', 52),
(92, 45970903, 'Su familia tiene tuberculosis', '2022-10-15 20:04:15', 52),
(93, 45678902, 'Su familia tuvo tuberculosis', '2022-10-15 20:05:40', 52),
(94, 12098654, 'Su familia tuvo tuberculosis', '2022-10-15 20:06:06', 52),
(95, 576493875, 'dsadasd', '2022-10-15 20:58:54', 52),
(96, 90876543, 'La familia tuvo tuberculosis', '2022-10-15 21:01:31', 52),
(97, 54678932, 'La familia tuvo tuberculosis', '2022-10-15 21:02:32', 52),
(99, 32131231, 'hdskajdhaksjh', '2022-10-17 02:29:11', 52),
(100, 32423423, 'asdasdasdasd', '2022-10-17 03:31:02', 52),
(101, 32423425, 'asdasdasdasdsda', '2022-10-17 03:32:35', 52),
(102, 45678, '', '2022-10-17 18:44:36', 52),
(103, 2147483647, '', '2022-10-17 18:49:56', 52),
(104, 2147483647, '', '2022-10-17 18:50:19', 52),
(105, 456783456, '', '2022-10-17 18:52:16', 52),
(106, 45678345, '', '2022-10-17 18:54:22', 52),
(107, 45121212, '', '2022-10-17 18:55:34', 52),
(108, 4512121, '', '2022-10-17 18:56:44', 52),
(109, 451212, '', '2022-10-17 18:57:16', 52),
(157, 4568327, '', '2022-10-18 15:37:43', 52),
(159, 47689026, '', '2022-10-18 16:10:00', 61),
(161, 345678, '', '2022-10-18 19:11:17', 61),
(163, 46328764, '', '2022-10-18 20:29:51', 61),
(167, 46376437, '', '2022-10-19 16:24:37', 61),
(168, 45678901, '', '2022-10-19 18:35:16', 61),
(169, 45678909, '', '2022-10-19 18:35:19', 61),
(170, 45678908, '', '2022-10-19 18:35:21', 61),
(171, 4567890, '', '2022-10-19 18:35:21', 61),
(172, 45678907, '', '2022-10-19 18:35:22', 61),
(179, 65384756, '', '2022-10-24 15:35:08', 61),
(180, 46919484, '', '2022-10-25 12:07:30', 61),
(181, 46437714, '', '2022-10-25 12:19:15', 62);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `radiografias`
--

CREATE TABLE `radiografias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `sintomas` varchar(40) NOT NULL,
  `cloudinaryId` varchar(500) NOT NULL,
  `ruta` varchar(500) NOT NULL,
  `prediccion_cnn` varchar(7) NOT NULL,
  `prediccion_transformers` varchar(7) NOT NULL,
  `prediccion_promedio` varchar(7) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_Paciente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `radiografias`
--

INSERT INTO `radiografias` (`id`, `nombre`, `sintomas`, `cloudinaryId`, `ruta`, `prediccion_cnn`, `prediccion_transformers`, `prediccion_promedio`, `createdAt`, `id_Paciente`) VALUES
(20, 'e265d71b-bde8-4f2c-bc53-1b626845c8ea.jpg', 'hola', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-N', '78.34 %', '', '', '2022-09-16 23:23:54', 37),
(21, 'de5e288d-ae32-4d07-b242-151b07bd239b.jpg', 'hola', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-N', '78.34 %', '', '', '2022-09-18 22:09:36', 37),
(22, '8df64151-8d50-4525-855a-31cdac01e531.jpg', 'hola', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-N', '96.53 %', '', '', '2022-09-18 22:10:12', 37),
(23, 'f5dddbca-3fb9-4e73-abd5-80aad957ede1.jpg', 'hola', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\f5dddbca-3fb9-4e73-abd5-80aad957ede1.jpg', '96.53 %', '', '', '2022-09-18 22:13:15', 37),
(26, 'e2b8a3d2-aec6-42f5-a936-bf52d06dd3a0.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\e2b8a3d2-aec6-42f5-a936-bf52d06dd3a0.jpg', '17.87 %', '75.45 %', '46.66 %', '2022-09-21 22:28:27', 39),
(27, '3667cc0a-78fc-42b6-b7b1-be12bbfba2c7.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\3667cc0a-78fc-42b6-b7b1-be12bbfba2c7.jpg', '17.87 %', '75.45 %', '46.66 %', '2022-09-21 22:28:48', 39),
(31, '152f31c1-6446-427a-b653-458934a467e9.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\152f31c1-6446-427a-b653-458934a467e9.jpg', '17.87 %', '75.45 %', '46.66 %', '2022-09-21 23:34:41', 39),
(32, '210d40a6-4845-4cc4-b0b1-f30053507381.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\210d40a6-4845-4cc4-b0b1-f30053507381.jpg', '17.87 %', '75.45 %', '46.66 %', '2022-09-21 23:35:38', 39),
(33, '753d33a0-ae86-456c-af99-03f437b66b6e.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\753d33a0-ae86-456c-af99-03f437b66b6e.jpg', '17.87 %', '75.45 %', '46.66 %', '2022-09-23 00:26:45', 39),
(34, 'b4881d87-fcc3-40b6-9b5b-5fe8ea95185e.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\b4881d87-fcc3-40b6-9b5b-5fe8ea95185e.jpg', '89.8 %', '92.03 %', '90.91 %', '2022-09-23 00:27:11', 39),
(35, 'd3564c6b-8d2c-410d-adfd-e734092c3ea1.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\d3564c6b-8d2c-410d-adfd-e734092c3ea1.jpg', '89.8 %', '92.03 %', '90.91 %', '2022-09-23 00:31:50', 39),
(36, '0b045878-be25-495e-9375-35612e2da250.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\0b045878-be25-495e-9375-35612e2da250.jpg', '89.8 %', '92.03 %', '90.91 %', '2022-09-23 00:37:47', 39),
(37, '1a4be43c-b4db-4f32-bb29-2b3c7bd663af.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\1a4be43c-b4db-4f32-bb29-2b3c7bd663af.jpg', '89.8 %', '92.03 %', '90.91 %', '2022-09-23 00:48:54', 39),
(38, '5aeaca96-3f0f-436d-9392-ecff4b3d60d1.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\5aeaca96-3f0f-436d-9392-ecff4b3d60d1.jpg', '89.8 %', '92.03 %', '90.91 %', '2022-09-23 00:51:08', 39),
(39, '6241d27a-d972-4e8f-a417-9f4396406408.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\6241d27a-d972-4e8f-a417-9f4396406408.jpg', '89.8 %', '92.03 %', '90.91 %', '2022-09-23 00:51:18', 39),
(40, 'a8315866-b495-4612-b563-f0de010f8e4e.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\a8315866-b495-4612-b563-f0de010f8e4e.jpg', '89.8 %', '92.03 %', '90.91 %', '2022-09-23 00:51:21', 39),
(41, '67023c9d-7ee4-4c54-b144-6887d5318e86.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\67023c9d-7ee4-4c54-b144-6887d5318e86.jpg', '89.8 %', '92.03 %', '90.91 %', '2022-09-23 00:51:25', 39),
(42, 'd56d798d-49dd-4d4b-aa0f-5b1091c9937f.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\d56d798d-49dd-4d4b-aa0f-5b1091c9937f.jpg', '96.53 %', '88.38 %', '92.45 %', '2022-09-23 00:51:31', 39),
(43, '8b7c532a-76c2-4195-b498-70997533854c.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\8b7c532a-76c2-4195-b498-70997533854c.jpg', '96.53 %', '88.38 %', '92.45 %', '2022-09-23 00:51:35', 39),
(44, 'a15cd6f3-aa44-4c94-81c5-f22667230546.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\a15cd6f3-aa44-4c94-81c5-f22667230546.jpg', '1.22 %', '88.55 %', '44.89 %', '2022-09-24 03:45:44', 39),
(45, '68d44bde-252f-43cc-8e67-1c8e83cf6e85.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\68d44bde-252f-43cc-8e67-1c8e83cf6e85.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-09-24 04:02:16', 39),
(46, '6d889899-3710-403a-9b13-4d26e762db31.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\6d889899-3710-403a-9b13-4d26e762db31.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-09-24 04:53:09', 39),
(47, '76dd40c7-ac0b-4d10-9c06-daabf732305b.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\76dd40c7-ac0b-4d10-9c06-daabf732305b.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-09-24 04:53:10', 39),
(51, '899e123e-a177-4ef7-8e25-5e2999408ba4.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\899e123e-a177-4ef7-8e25-5e2999408ba4.dcm', '96.73 %', '43.32 %', '70.02 %', '2022-09-24 21:50:18', 39),
(53, 'b3798d86-78cd-44bf-8890-c0d1634ded13.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\b3798d86-78cd-44bf-8890-c0d1634ded13.dcm', '96.73 %', '43.32 %', '70.02 %', '2022-09-24 22:27:40', 39),
(54, '63add39f-08c9-4526-b5cf-6e11a7b87738.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\63add39f-08c9-4526-b5cf-6e11a7b87738.jpg', '67.83 %', '45.81 %', '56.82 %', '2022-09-24 23:20:25', 39),
(58, '9bec17b6-285c-4a40-b926-38df36b56e3c.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\9bec17b6-285c-4a40-b926-38df36b56e3c.dcm', '96.73 %', '43.32 %', '70.02 %', '2022-09-24 23:29:52', 39),
(59, 'fa04316c-daa3-4141-8ee2-fc9ad8146aff.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\fa04316c-daa3-4141-8ee2-fc9ad8146aff.dcm', '96.73 %', '43.32 %', '70.02 %', '2022-09-24 23:33:43', 39),
(60, 'e537acf0-d714-41d9-a3cf-59d2e27d8e05.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\e537acf0-d714-41d9-a3cf-59d2e27d8e05.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-09-24 23:33:56', 39),
(61, '0559a5bd-9d9e-41c0-9198-4b5ef959898b.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\0559a5bd-9d9e-41c0-9198-4b5ef959898b.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-09-24 23:35:12', 39),
(62, 'a304c85b-f93c-4870-b132-854b1b07f00f.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\a304c85b-f93c-4870-b132-854b1b07f00f.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-09-24 23:35:28', 39),
(63, '74390fa7-849e-49be-b158-3f613da8a400.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\74390fa7-849e-49be-b158-3f613da8a400.jpg', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 05:18:31', 39),
(65, '064e2e03-2637-4297-ae63-d3b5aaf8fae1.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\064e2e03-2637-4297-ae63-d3b5aaf8fae1.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 18:03:09', 39),
(66, '4c824b71-d0fa-47a7-9e8e-6fcd91ef5875.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\4c824b71-d0fa-47a7-9e8e-6fcd91ef5875.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 18:31:18', 39),
(67, '80ed384d-75d2-4054-85b6-227892e176f3.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\80ed384d-75d2-4054-85b6-227892e176f3.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 18:32:57', 39),
(68, 'ad3ba04c-6e33-4a9c-9610-3c8e4c213bd4.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\ad3ba04c-6e33-4a9c-9610-3c8e4c213bd4.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 18:33:34', 39),
(69, 'fdb3f271-5731-41f5-a080-cd1b9d623ad4.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\fdb3f271-5731-41f5-a080-cd1b9d623ad4.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 18:34:00', 39),
(70, '5be890ea-522e-47dd-a7fe-f26975278d62.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\5be890ea-522e-47dd-a7fe-f26975278d62.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 18:43:32', 39),
(71, '6c2406da-bd4d-4ce7-8327-43c9685a3023.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\6c2406da-bd4d-4ce7-8327-43c9685a3023.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 18:45:54', 39),
(72, '1068f45f-2df3-4b4d-b2ed-a75cd6811bb6.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\1068f45f-2df3-4b4d-b2ed-a75cd6811bb6.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 18:58:48', 39),
(73, 'ac3fa1fa-a258-4658-98aa-2d71d2ad8f6b.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\ac3fa1fa-a258-4658-98aa-2d71d2ad8f6b.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 19:00:04', 39),
(74, '27cb6d33-1b7c-45d3-b420-edd8f3847d3d.jpg', '', '', '', '96.41 %', '10.66 %', '53.53 %', '2022-09-25 19:45:58', 39),
(75, '136cf329-7994-4ab9-ae8a-b695267a0254.jpg', '', '', '', '96.41 %', '10.66 %', '53.53 %', '2022-09-25 22:02:08', 39),
(76, '8fb3d59c-5a1b-41aa-8622-58c9724e663d.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\8fb3d59c-5a1b-41aa-8622-58c9724e663d.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-09-25 22:11:03', 39),
(77, '7ad19238-40f9-416e-958f-a196875425b2.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\7ad19238-40f9-416e-958f-a196875425b2.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-09-25 22:11:14', 39),
(78, '5bc49b22-4b2a-4784-bd0d-9d63e6cbfc66.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\5bc49b22-4b2a-4784-bd0d-9d63e6cbfc66.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 22:28:51', 39),
(79, '42c62705-97dd-4ff7-aebb-eb4b14fe9f1c.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\42c62705-97dd-4ff7-aebb-eb4b14fe9f1c.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 22:29:51', 39),
(80, 'c896eecf-b7da-436d-8a92-107d1f456615.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\c896eecf-b7da-436d-8a92-107d1f456615.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 22:32:25', 39),
(81, 'f34af86c-964f-464a-a711-c74eec3e2954.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\f34af86c-964f-464a-a711-c74eec3e2954.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 22:32:53', 39),
(82, 'ab91c18a-b89a-403a-8767-f4ffeb6c0aac.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\ab91c18a-b89a-403a-8767-f4ffeb6c0aac.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 22:34:21', 39),
(83, '2c0f45a1-dc5e-49aa-b0f6-ec59ed4f44d8.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\2c0f45a1-dc5e-49aa-b0f6-ec59ed4f44d8.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 22:35:20', 39),
(84, '8e2d24a3-c4c5-405a-a616-79a7a8581523.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\8e2d24a3-c4c5-405a-a616-79a7a8581523.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 22:44:26', 39),
(85, 'b067c279-d680-4e67-b738-cf3c177a334f.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\b067c279-d680-4e67-b738-cf3c177a334f.dcm', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 22:45:21', 39),
(86, '9b6b7f3c-afd0-4ac9-b62c-f226894a702d.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\9af6b855-579f-4a29-b840-e10f2dfc7a1d.jpg', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 22:46:16', 39),
(87, 'aed6cde4-c42d-4033-8cfd-ffd1639d0597.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\a43a9dc9-18ff-49b7-80a9-21729e5bd544.jpg', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 22:46:58', 39),
(88, '39ca0b46-7e95-40da-a652-51b47700439d.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\0366a29f-ba6c-4311-b1b8-0722422c5e70.jpg', '67.83 %', '45.81 %', '56.82 %', '2022-09-25 22:47:32', 39),
(90, '3691801a-020c-4d9f-9496-4c62015bda92.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\e5805121-61eb-45ee-9516-baa22713ef74.jpg', '67.83 %', '45.81 %', '56.82 %', '2022-09-26 02:00:52', NULL),
(91, '3691fc07-ace7-41f8-a2f5-3a03415e29a3.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\3691fc07-ace7-41f8-a2f5-3a03415e29a3.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-09-26 02:01:02', NULL),
(93, '3b3dd3ba-ccfc-4345-8842-a66d54b9a216.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\a92613bb-6e2b-48ce-96de-c431bb2a2288.jpg', '67.83 %', '45.81 %', '56.82 %', '2022-09-27 01:24:59', 39),
(95, '2661f689-d163-4d2e-971d-2523c6a30ff0.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\2661f689-d163-4d2e-971d-2523c6a30ff0.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-09-27 03:37:16', 39),
(96, '994a6a1b-aab3-4a0d-91ea-00df0f52b2bd.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\b255a88d-ce81-4b37-9bbe-144ab9feebde.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-09-27 03:37:51', 39),
(97, '6ddae6fb-3dad-4b98-91cf-c848e449910d.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\6ddae6fb-3dad-4b98-91cf-c848e449910d.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-09-27 05:05:40', 39),
(98, '97f2e80b-08d7-4c56-9045-159e3d0fe59a.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\97f2e80b-08d7-4c56-9045-159e3d0fe59a.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-09-28 23:18:10', 39),
(99, '1c424909-661f-4edf-b012-fec16c526e70.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\1c424909-661f-4edf-b012-fec16c526e70.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-09-29 23:26:52', 39),
(100, '0feb65a7-a7b8-47a2-a5dc-c050be5e18ce.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\0feb65a7-a7b8-47a2-a5dc-c050be5e18ce.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-09-30 00:58:52', 39),
(101, '7b12b843-cbef-4480-aff8-0dc22b17b584.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\891bb8f7-1f28-40aa-a522-e453b843a94d.jpg', '69.71 %', '48.45 %', '59.08 %', '2022-10-01 18:33:22', 39),
(102, '6053ce0f-7916-4aff-bc58-53c2d94dcf81.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\edfdc2be-9d02-4f85-9045-cc27075510e3.jpg', '69.71 %', '48.45 %', '59.08 %', '2022-10-01 18:45:04', 39),
(103, '0e928b69-e2a4-4780-8067-86b8934d97bf.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\0a27f3fc-2039-454c-80a4-8514ec426775.jpg', '69.71 %', '48.45 %', '59.08 %', '2022-10-02 21:29:43', 39),
(104, '3d9dbaa9-e4b6-4397-875f-28b7232b3353.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\3d9dbaa9-e4b6-4397-875f-28b7232b3353.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-02 21:30:18', 39),
(105, 'cbe16135-a9ab-4fb4-99c6-a031b2976644.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\cbe16135-a9ab-4fb4-99c6-a031b2976644.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-02 21:58:07', 39),
(106, '1127ab1d-5c1e-4bb3-ad99-d207709acdc1.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\c12d6ca8-c1c9-4a04-b4c8-a64d1dcc38d2.jpg', '69.71 %', '48.45 %', '59.08 %', '2022-10-02 21:59:25', 39),
(107, '0875f3e3-1c72-4aa8-b239-2c50d1e647b5.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\bdf3b794-4c41-4c8f-8032-d9b1e476f67b.jpg', '67.83 %', '45.81 %', '56.82 %', '2022-10-05 00:53:03', 39),
(108, '7b41592b-ea50-4bec-84fb-d071e3e2c3c9.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\67f88e5b-f725-4250-a4d7-af94e7003a1b.jpg', '67.83 %', '45.81 %', '56.82 %', '2022-10-05 00:53:09', 39),
(109, '8c82c3a9-eb59-4654-a197-58d25c86d9e2.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\9ffc8bbb-77a1-4751-9472-fe4c70824671.jpg', '67.83 %', '45.81 %', '56.82 %', '2022-10-05 00:53:13', 39),
(110, 'aa9867cf-78d6-4931-9c81-5fc0ec187c89.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\20ed11c6-39b9-4780-a3a4-e45dd9bd3c98.jpg', '67.83 %', '45.81 %', '56.82 %', '2022-10-05 00:53:17', 39),
(111, '9db17bcc-8550-4131-9262-8ec79dae0c41.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\9db17bcc-8550-4131-9262-8ec79dae0c41.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-05 00:55:14', 39),
(112, '10bde005-9aff-4c0d-ac1f-7841868c2ee7.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\10bde005-9aff-4c0d-ac1f-7841868c2ee7.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-05 00:55:15', 39),
(113, '220877f4-6560-4d14-bf61-381a3e3b34a0.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\220877f4-6560-4d14-bf61-381a3e3b34a0.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-05 00:55:24', 39),
(114, 'dcc7c79a-a6de-4ae1-8de7-5c630ea2720e.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\401fb407-1d90-4a77-b068-71259fe05016.jpg', '67.83 %', '45.81 %', '56.82 %', '2022-10-05 16:25:44', 39),
(115, '1d9c2711-03d9-4582-88f0-acf1a2bf99cb.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\92709d4d-f7d8-4aa5-acdd-ba2fb4cf899a.jpg', '67.83 %', '45.81 %', '56.82 %', '2022-10-05 16:26:54', 39),
(116, '3ff633bf-d23a-49ec-8eea-2974f77b6a4e.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\3ff633bf-d23a-49ec-8eea-2974f77b6a4e.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-05 16:27:24', 39),
(118, '209c919c-00a6-4377-bf6f-2d42e55848d5.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\209c919c-00a6-4377-bf6f-2d42e55848d5.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-07 17:39:07', 39),
(119, '6e85de0f-fab7-450d-9050-e902454ce64e.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\6e85de0f-fab7-450d-9050-e902454ce64e.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-07 17:39:17', 39),
(120, '4b90b902-c7e4-4a90-b482-d8d0e70efa46.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\4b90b902-c7e4-4a90-b482-d8d0e70efa46.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-07 17:39:21', 39),
(121, 'da629872-5694-4fbe-b4b3-1feb8a6cab4d.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\87ae517d-0756-431b-8173-15a8cbbc0278.jpg', '69.71 %', '48.45 %', '59.08 %', '2022-10-07 17:46:30', 39),
(122, '9dffd531-4d3b-4e47-b2c8-ed93343999fc.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\9dffd531-4d3b-4e47-b2c8-ed93343999fc.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-07 17:47:08', 39),
(123, 'f1160b42-b754-4d81-b6fc-3ff0ec27ff26.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\f1160b42-b754-4d81-b6fc-3ff0ec27ff26.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-07 17:47:13', 39),
(124, '6dba8422-c55d-4546-bf17-e5a35c649ca6.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\6dba8422-c55d-4546-bf17-e5a35c649ca6.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-07 17:48:26', 39),
(125, '1743236a-ed5c-4fb6-9aa3-4660cd3439d4.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\1743236a-ed5c-4fb6-9aa3-4660cd3439d4.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-07 17:48:29', 39),
(126, '947ab6d9-60db-4867-9ac2-83dd9d622837.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\947ab6d9-60db-4867-9ac2-83dd9d622837.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-07 17:48:31', 39),
(127, 'd108919f-d5e4-4a57-a0f6-f1395510aa6b.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\d108919f-d5e4-4a57-a0f6-f1395510aa6b.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-07 17:50:30', 39),
(128, '05e3e8ba-e2df-4cdb-a01e-36911c7b92aa.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\05e3e8ba-e2df-4cdb-a01e-36911c7b92aa.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-07 17:54:11', 39),
(129, '56e3883f-d13e-4ae2-ada6-6f53773b9eab.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\56e3883f-d13e-4ae2-ada6-6f53773b9eab.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-07 17:54:15', 39),
(130, '0f91ea4f-3f86-49e7-a116-49a7f49f0043.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\0f91ea4f-3f86-49e7-a116-49a7f49f0043.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-07 17:54:21', 39),
(131, '716d368b-4a40-41a7-b82a-f666d5210de8.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\716d368b-4a40-41a7-b82a-f666d5210de8.jpg', '13.31 %', '39.98 %', '26.64 %', '2022-10-07 17:54:26', 39),
(132, 'a693d170-9a93-42cf-b923-1a776b4b3386.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\a693d170-9a93-42cf-b923-1a776b4b3386.jpg', '96.41 %', '10.66 %', '53.53 %', '2022-10-07 17:54:49', 39),
(133, '7822eb54-d6e7-42b4-9209-02bec0e54928.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\58eafbb4-5f68-4530-b013-2af317d3d574.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-07 18:09:52', 39),
(134, '6a6c8ca1-d293-4636-bd2b-79a0622dae87.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\80d5da81-72f0-489a-885f-68d9185ca84e.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-07 18:13:40', 39),
(135, '62b3dc08-d568-4212-b62a-51441c165241.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\6f40a941-f5f6-4304-957f-bcf05b201d56.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-07 18:13:46', 39),
(136, '90290858-4655-4136-9f6f-1f04a8aa1f42.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\9860fc5a-2e18-4b06-a262-9f0657bbc67c.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-07 18:14:14', 39),
(137, 'da083a44-fe2e-47f4-b595-d8ea14d5b208.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\da083a44-fe2e-47f4-b595-d8ea14d5b208.jpg', '65.16 %', '39.06 %', '52.11 %', '2022-10-14 23:21:22', 55),
(138, '0b7fad64-8510-4ff9-b1c3-668548c51c6f.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\c58a6aa3-2db1-4bbd-a258-957efadd8447.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-14 23:23:39', 56),
(139, '2c4056d8-9d4d-43f0-9de7-18956c641189.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\4cc768d0-82bd-484e-800c-c45dce9b1e0a.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-14 23:26:01', 57),
(140, '7fc26af3-5c32-4307-8203-216e604c2a9f.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\2791982f-259f-4edd-9d0b-fd4c9ee03a0b.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-14 23:26:06', 58),
(141, '004ecc66-eba2-43b1-a42b-8037fe32fec9.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\7bb5ad56-3620-4b92-8e26-3aa57f92c998.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-14 23:27:40', 59),
(170, '20462151-1952-4880-8bf5-21ef4adc8f72.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\20462151-1952-4880-8bf5-21ef4adc8f72.jpg', '53.49 %', '39.53 %', '46.51 %', '2022-10-15 16:04:03', 86),
(171, 'abd97ea8-fb7d-4feb-adfe-c4796c484e94.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\abd97ea8-fb7d-4feb-adfe-c4796c484e94.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-15 17:55:29', 87),
(172, '0d4d3f04-5fd8-4b30-8fbc-bbeb4cfe00c6.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\0d4d3f04-5fd8-4b30-8fbc-bbeb4cfe00c6.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-15 18:05:23', 88),
(173, '3c39539f-b42f-4dae-ab00-8743503a0924.jpg', 'covid', 'debe venir mañana', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\3c39539f-b42f-4dae-ab00-8743503a0924.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-15 18:52:31', 90),
(174, 'a7cce0c5-c951-464b-8731-08d232f6e270.jpg', 'maso', 'debe venir mañana', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\a7cce0c5-c951-464b-8731-08d232f6e270.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-15 18:53:02', 90),
(175, '06cec4ab-2b63-4268-a028-32889b9043ed.jpg', 'maso', 'debe venir mañana', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\06cec4ab-2b63-4268-a028-32889b9043ed.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-15 21:40:33', 97),
(177, '86e3ef36-dcf8-470f-86a6-87b4e0cfa044.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\86e3ef36-dcf8-470f-86a6-87b4e0cfa044.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-17 18:44:36', 102),
(178, '02f0de6b-72f7-4597-b154-1b9fea4ed63d.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\02f0de6b-72f7-4597-b154-1b9fea4ed63d.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-17 18:49:56', 103),
(179, '210843a7-ec13-4e54-a2d9-6942e39e08e0.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\210843a7-ec13-4e54-a2d9-6942e39e08e0.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-17 18:50:19', 104),
(180, '3c6ac3e9-98d6-4320-9309-63a8791250f7.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\3c6ac3e9-98d6-4320-9309-63a8791250f7.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-17 18:52:16', 105),
(181, '4f8d35e5-1d04-4a06-8ac1-4c04dce369ee.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\4f8d35e5-1d04-4a06-8ac1-4c04dce369ee.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-17 18:54:22', 106),
(182, 'abdb260e-5397-4124-be94-9bb688cc34e1.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\abdb260e-5397-4124-be94-9bb688cc34e1.jpg', '62.18 %', '35.38 %', '48.78 %', '2022-10-17 18:55:34', 107),
(183, '9e9c7fa3-d969-471e-b63f-e065ed81deee.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\9e9c7fa3-d969-471e-b63f-e065ed81deee.jpg', '60.37 %', '37.45 %', '48.91 %', '2022-10-17 18:56:44', 108),
(184, '738c46f0-e0d6-40a5-a5c7-6e0df68ff6bd.jpg', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\738c46f0-e0d6-40a5-a5c7-6e0df68ff6bd.jpg', '14.54 %', '41.65 %', '28.1 %', '2022-10-17 18:57:16', 109),
(219, '5b71ea4d-654b-4e7c-9d24-377a3a55b1f2.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\5b71ea4d-654b-4e7c-9d24-377a3a55b1f2.dcm', '96.73 %', '43.32 %', '70.02 %', '2022-10-18 15:45:44', 97),
(220, 'ca5b88eb-1ccd-4cf7-b077-074fbedca402.dcm', '', '', 'D:\\Desktop\\WebPractica\\Back-End\\Server-Node\\images\\7adda208-70a7-4b08-b90e-7b8ac4516735.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-18 15:46:58', 97),
(221, 'fac69481-65ad-4e69-b17b-ba19e41f2381.jpg', '', '', 'http://res.cloudinary.com/dvqscievu/image/upload/v1666108431/imagenes/aiugeoddylqtglmppgmv.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-18 15:53:51', 97),
(222, '9039cc4d-1fc9-49c9-8abd-da2f7871f14c.jpg', '', '', 'http://res.cloudinary.com/dvqscievu/image/upload/v1666108495/imagenes/b8lhxhxhst0qzy4r9mie.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-18 15:54:55', 97),
(223, '6fd1edf6-ed6f-4dc7-96b4-3f2ae2b5f2ee.dcm', '', '', 'http://res.cloudinary.com/dvqscievu/image/upload/v1666108828/imagenes/e044if0uyo2xltxrbz1j.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-18 16:00:28', 97),
(224, '7348567d-bb0f-4315-bbdc-d512b30abd78.dcm', '', '', 'http://res.cloudinary.com/dvqscievu/image/upload/v1666108877/imagenes/peltbjvmrkpq2gtvp0ot.jpg', '96.73 %', '43.32 %', '70.02 %', '2022-10-18 16:01:16', 97),
(225, '94fae4f5-21d9-4800-8836-3396c2c0a55c.jpg', '', '', 'http://res.cloudinary.com/dvqscievu/image/upload/v1666108999/imagenes/yn1y5jxq29adn1a8qzct.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-18 16:03:18', 97),
(226, 'a54ef1c0-0f75-40c1-afaa-e429ea02e14a.jpg', '', '', 'http://res.cloudinary.com/dvqscievu/image/upload/v1666109041/imagenes/ht8qgavabdevnmg4hiko.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-18 16:04:01', 97),
(227, 'e0b9397a-f1d1-48a5-bd80-78b5a3cec295.jpg', '', '', 'http://res.cloudinary.com/dvqscievu/image/upload/v1666109129/imagenes/g17eiw93xwltov0ob4cx.jpg', '98.7 %', '50.78 %', '74.74 %', '2022-10-18 16:05:29', 97),
(273, 'c2dc9d29-a59f-4c9d-8e74-d65a43e23a0b.jpg', '', 'imagenes/lfuypxxouol6eu3z5sat', 'http://res.cloudinary.com/dvqscievu/image/upload/v1666205429/imagenes/lfuypxxouol6eu3z5sat.jpg', '7.85 %', '50.94 %', '29.39 %', '2022-10-19 18:50:31', 159),
(274, '6e242057-9578-4b6c-8d76-733375100720.jpg', '', 'imagenes/zdmmrqmfaxiz7b39kbxt', 'http://res.cloudinary.com/dvqscievu/image/upload/v1666205435/imagenes/zdmmrqmfaxiz7b39kbxt.jpg', '5.42 %', '50.33 %', '27.88 %', '2022-10-19 18:50:37', 159),
(275, '684f4ece-31f6-4050-9579-4d6ef6b0eb46.jpg', '', 'imagenes/t314l5hzt9frtkzaretw', 'http://res.cloudinary.com/dvqscievu/image/upload/v1666696327/imagenes/t314l5hzt9frtkzaretw.jpg', '68.84 %', '42.11 %', '55.48 %', '2022-10-25 11:12:07', 159),
(276, '33c49d58-41bb-47fd-bf61-e20273f17d9c.jpg', '', 'imagenes/vokop0sqsfmmtj9d9wg5', 'http://res.cloudinary.com/dvqscievu/image/upload/v1666696328/imagenes/vokop0sqsfmmtj9d9wg5.jpg', '69.71 %', '48.45 %', '59.08 %', '2022-10-25 11:12:09', 159),
(279, '6757432c-aca7-44e3-9cc1-da8d3911058a.jpg', '', 'imagenes/p7wixucejszkguele7hn', 'http://res.cloudinary.com/dvqscievu/image/upload/v1666699710/imagenes/p7wixucejszkguele7hn.jpg', '96.39 %', '44.61 %', '70.5 %', '2022-10-25 12:08:30', 180),
(280, '5e393045-b47d-4d16-9277-af8d5cc16e46.jpg', '', 'imagenes/xpkzjdzyxltde09jq0rz', 'http://res.cloudinary.com/dvqscievu/image/upload/v1666700398/imagenes/xpkzjdzyxltde09jq0rz.jpg', '97.54 %', '40.02 %', '68.78 %', '2022-10-25 12:19:58', 181);

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
  `roles` varchar(18) NOT NULL,
  `id_Hospital` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`id`, `nombre`, `apellido`, `email`, `contrasenia`, `matricula`, `roles`, `id_Hospital`) VALUES
(1, '0', '0', '0', '0', 123908, '', NULL),
(2, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, '', NULL),
(3, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, '', NULL),
(4, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, '', NULL),
(5, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, '', NULL),
(6, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, '', NULL),
(7, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, '', NULL),
(8, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, '', 6),
(9, 'Augusto', 'Lorencetti', 'AugustoLoren@gmail.com', 'Mamhuevo', 123908, '', 7),
(10, 'Mandarino', 'Juancho', 'MandarinoJuancho@gmail.com', '$2a$12$Qv1xTGUKV1XKKz/PITHHgeTh1/n1gT.iA/rCD4/x5IrlbMsJpCFNq', 123333, '', 8),
(11, 'Pepe', 'Sand', 'PepeSand@gmail.com', '$2a$12$u8.qy7Yz4sDXX3.4rLj3ze7VQTj0bxTghTa5pyckCJChmZWiBsSYy', 124567, '', 9),
(12, 'Arotu', 'Alzo', 'ArotuAlzo@gmail.com', '$2a$12$IqhwNm3KXhHsFg4wgQFGfey1rJTblGCjYPiT.CYOULMTo557GRbTe', 897654, '', 10),
(13, 'Nacho', 'Alzo', 'Nacho@gmail.com', '$2a$12$tCtK2g21mf4ZZd4lwbJAK.B2BqYZCSyZaO91OYua/i18rlp0o4A4S', 897654, '', 11),
(14, 'Manuel', 'Rodriguez', 'ManuRodriguez@gmail.com', '$2a$12$Oq16HISFH8I1.KNdOtbFgOG0KO7.7eROCNWg6y0NbCReZ6y6axKyu', 345908, '', 12),
(15, 'Pollo', 'Vignolo', 'PolloVignolo@gmail.com', '$2a$12$hdmxeStotKMwg/NiYEBYKOn0SQoRGrFBs77VWUGxhvGTeQAANW5BO', 456908, '', 13),
(16, 'Ariel', 'Alzogaray', 'ArielAlzogaray@gmail.com', '$2a$12$mxDu6oEOgQIXT05rw5neveVrck3haluxQ2gsTmLAcXXE4q2M2824y', 987654, '', 14),
(17, 'Luis', 'Embo', 'LuisardPollo@gmail.com', '$2a$12$04JDtteS4.rddDvrOS1kXerCkziEZFODfaaaThfDOXxsAAMQiYW6q', 345908, '', 15),
(18, 'Leo', 'E', 'LuisPollo@gmail.com', '$2a$12$Zj19cYg9cnl2nP6GR5Z8S.T4jzQi9mzlbb89MjLynzDFIxQfWgUN.', 345905, '', 16),
(19, 'Leo', 'E', 'LuisPolsalo@gmail.com', '$2a$12$XJc5llT4OB3SZ3V0w8c9KOEKDnRC5pa6/60qgmWxhMJp/S3Eurq0i', 345905, '', 17),
(20, 'Leo', 'E', 'pollo@gmail.com', '$2a$12$Q0rmqjzaIFn8ZSkG6CYqs.UaoP4Mn0BS8Bs5IoQWJ4PmZBT2mv9ZS', 443905, '', 55),
(21, 'Leo', 'E', 'pollsasao@gmail.com', '$2a$12$dOpqPb.Nsgk3FI0WXZapuOnNxT7ssmHFgdG824PPnxgXS/X9eNK9i', 443905, '', 60),
(22, 'Leo', 'E', 'pollsasasao@gmail.com', '$2a$12$.VJ/tdcvSBs8KOjiGUH4QOq0TaJe0jq1gBT0RDOdy6r/P2HSc2fbq', 443905, '', 61),
(23, 'Leo', 'E', 'pollsasasasasao@gmail.com', '$2a$12$cZHWdfFXEERPB4NjIFgaeOOTiY1OUdKze9rg7IvCu1TRzvs39iQJu', 443905, '', 62),
(24, 'Leo', 'E', 'pollsasasasasasao@gmail.com', '$2a$12$Qnp8rE7Kb.oxCCifDLP3Q.eYs4S639Q7vKb9jfj1Zt8QD.v3NBre.', 443905, '', 63),
(25, 'Leo', 'E', 'pollsasasasasashajshajsao@gmail.com', '$2a$12$XaDCFGIcw7J44kl2GpwwZuSzAbVXiYxn6KqKXY0ur8G1eJWA23Us2', 443905, '', 64),
(26, 'Leo', 'E', 'pollsasasasasashajssasahajsao@gmail.com', '$2a$12$5JpWZYcxv860NCUaXk9B4.bup8REnPU75FTeC1R6CN7QTe4P9DLma', 443905, '', NULL),
(27, 'Leo', 'E', 'pollsasassasaasasashajssasahajsao@gmail.com', '$2a$12$bWGFO0s2WmZmGRFf6iaBR.LGP2n2oOOJ2lZfIGEGt0XvCfpB5iZa.', 443905, '', 63),
(28, 'Leo', 'E', 'pollsasassasaasasashajssasahxzxzjsao@gmail.com', '$2a$12$SppXFEJ7GQ5.W05o.0bOYebuXXXr2w7WVyXVN1pzNC2Vbe97U8IIq', 443905, '', NULL),
(29, 'Leo', 'E', 'pollsasassasaasasashajssassaahxzxzjsao@gmail.com', '$2a$12$1rn2AIf.6FlpnTBivxxCpOhKfYnOw6TC8KJDHx3HhKyd6IwfhAJLq', 443905, '', 67),
(30, 'Leo', 'E', 'pollsasassasaasasashajssassaahxzxzsajsao@gmail.com', '$2a$12$4mnVuHgGfYDermo/rayVWetT69ewG0yHY6yJXHidEh2NbvEaWUeOi', 443905, '', 67),
(31, 'Leo', 'E', 'pollsasassasaasasashasasajssassaahxzxzsajsao@gmail.com', '$2a$12$rY31rI4usMigbVsM4fO4X.5jRjOw59N3q1TVH1QwsloUO6sFfOiq2', 443905, '', 67),
(32, 'Leo', 'E', 'pollsasassasaasasashasasajssasssasaaahxzxzsajsao@gmail.com', '$2a$12$PsxG2bpYJK0EROKo0n.57.vNnQnpUHQ8HrLbVZkVlrncpBuZHqZsi', 443905, '', 67),
(33, 'Leo', 'E', 'luis@gmail.com', '$2a$12$Q65qFDg3qVjYBZ19N5dxXutjYevOPIEr9Z6R0kKkWhN/GvppVBaYS', 443905, '', 16),
(34, 'Leo', 'E', 'luissa@gmail.com', '$2a$12$HDcfBcjiW1LPbZgWcD7UQ.Fr7TRTN6REBLa4LhwWY7r56OR4QB8AG', 443905, '', 16),
(35, 'Leo', 'E', 'luissasasa@gmail.com', '$2a$12$LpR7fvDKYes0fxdqag49A.DrxgFflIUoChiFw10Sdvx2EveByRWW2', 443905, '', 16),
(36, 'Leo', 'E', 'luissasasassasasa@gmail.com', '$2a$12$f4e2tCsIRGCFFIrdIV5db.ZKTN7XE2LTIOX8w1MLo61Rv3WPKQsH6', 443905, 'Usuario_Verificado', 16),
(37, 'Leo', 'E', 'luissasasassassaasa@gmail.com', '$2a$12$9XJOTwq8CV9KqruT/OTfRuzG0otmu5yR01n7.EFPWCZXXL9OG5VO2', 443905, 'Usuario_Verificado', 16),
(38, 'Leo', 'E', 'luissasasassassassaasa@gmail.com', '$2a$12$a6BYvWg8pz/aHZ9QP8u4ZePpx455WIt2ez1w6OzWJm96kO2tdyWPa', 443905, 'Usuario_Verificado', 16),
(39, 'Leo', 'E', 'luissasasassassassasasasasa@gmail.com', '$2a$12$fhOyGfC9Mqk2rsVLFwvAWOZkdS7.mprgF0AT7Yy6ovxGTfXx11EK.', 443905, 'Usuario_Verificado', 16),
(40, 'Leo', 'E', 'luissasasassassassasasasasasa@gmail.com', '$2a$12$jEzIaS27B00ZMxy4ddaH7.2y8pzlil5jZgDyMcCUF0EdogGGkqOKC', 443905, 'Usuario_Verificado', 16),
(41, 'Leo', 'E', 'luissasasassassassasasasasasasa@gmail.com', '$2a$12$4IC8ScGu..EXcSijmUOQ1uMrmAhqbHS2nGZ3Hw.ywIlf.jZ7/z7nu', 443905, 'Usuario_Verificado', 16),
(42, 'Leo', 'E', 'luissasasassassassasasasasassasasasa@gmail.com', '$2a$12$IykzqVlavJhC05.qk.Weje4JmLmwy0XNSCo4MNCFBj.q8BhQ2c3fe', 443905, 'Usuario_Verificado', 16),
(43, 'Leo', 'E', 'luissasasasasassassassasasasasassasasasa@gmail.com', '$2a$12$pgMsn2F/s/pgxmFUhEUkvObyp1QLs/Z8sdLWwmNMLPykpAF.M72Hq', 443905, 'Usuario_Verificado', 16),
(44, 'Leo', 'E', 'luissasasasasassassassasasasasasassasasasa@gmail.com', '$2a$12$RroQnHem3eFJCb2JGj8eRe078l1joI9cOdHBCouDLMds3f0cE7YfW', 443905, 'Usuario_Verificado', 16),
(45, 'Leo', 'E', 'luissasasasasassassasassasasasasasassasasasa@gmail.com', '$2a$12$Ca/CeZlVchTpm1BCReEe/.JiW.LhFHNiplFpbOAiERvQry2nFZ3Nq', 443905, 'Usuario_Verificado', 16),
(46, 'Leo', 'E', 'luissasasasasassassasassasasasasasassasasasasa@gmail.com', '$2a$12$qHXOWcokkiY/kQ17MqHeAuaGBn78.XrZtJ7GID2B6el2xMqo2qR.e', 443905, 'Usuario_Verificado', 16),
(47, 'Leo', 'E', 'luissasasasasassassasasassasasasasasassasasasasa@gmail.com', '$2a$12$TxhSCPizhy3.gixtcqRsL.ko53tVRDKLuifplLylgTOT2oOZkVLXK', 443905, 'Usuario_Verificado', 16),
(48, 'Leo', 'E', 'luissasasasasassassasasassasasasasasasassasasasasa@gmail.com', '$2a$12$OicHLOgwQk8.Gn4MrR1ou.tPOT10xuM.1/iR.ogU1.59LIJHED7KS', 443905, 'Usuario_Verificado', 16),
(49, 'Leo', 'E', 'luissasasasasassassasasassasasasasasasassasasasghasa@gmail.c', '$2a$12$1RHLskS7ue2InFHkoaUA5uTskqT0/GLU.5JEhTzG/JhFupvqKqoUy', 443905, 'Usuario_Verificado', 16),
(50, 'Leo', 'E', 'rodrigo@gmail.com', '$2a$12$zBAJfambgjouffc7lYQfPurzx0G6/K8KGNSD7/JUcvwL5Ik7f3rIe', 443905, 'Usuario_Verificado', 16),
(51, 'Leo', 'E', 'rodrigo@gmail.com', '$2a$12$bkG9oi1SbGt.sHaRLSAV.OH3/P00Qqi/cFqrnVe0j5x.TFHMvymUK', 443905, '', 68),
(52, 'Leo', 'E', 'rodrigo1@gmail.com', '$2a$12$qcBloy.D7j.RFLdqjcAMGehcjgaiaQ6qJUFDPyymgD.9tPg9vQyMS', 443905, 'Usuario_Verificado', 16),
(53, 'Leo', 'E', 'rodrigo1sasasa@gmail.com', '$2a$12$MQ5NIVAywSPnRC8HDg7qLOnzR78cGH1c/LtEXdNhFC/CKtLDHFFXK', 443905, 'Usuario_Verificado', 16),
(54, 'Leo', 'E', 'rodrigo1sasasasa@gmail.com', '$2a$12$m/Z5FaWTVQSY18nhoEzjCus/0H/7lcY0C6wYEE23JfzEznlREHCZG', 443905, 'Usuario_Verificado', 16),
(55, 'Leo', 'E', 'rodrigo1sasasassaa@gmail.com', '$2a$12$j9wqnv4cGKVpuSeOqDp/tOsrCfZ0fXYs0UYYh1TJR6TGIdhvdltve', 443905, 'Usuario_Verificado', 16),
(56, 'Leo', 'E', 'rodrigo1sasasaSAssaa@gmail.com', '$2a$12$Ei6DCV2QWZcReM0hNHDinuWPy.AQ4BkXYVssD6VDaJbagXTe2ClBC', 443905, 'Usuario_Verificado', 16),
(57, 'Leo', 'E', 'rodrigo1sasasaSAsSAsaa@gmail.com', '$2a$12$JSfnqJRIjQVNpPNyatMHguZcoHlh6nds9EOS37qH2DOxbUIHv7c.O', 443905, 'Usuario_Verificado', 16),
(58, 'Leo', 'E', 'pollo500@gmail.com', '$2a$12$OtQ078NSl95Yp8q74MbWYe07An7TopRTlcP6LPdCZItB1nZCCbswi', 443905, 'Usuario_Verificado', 16),
(60, 'Benza', 'Gonzaquen', 'pollorico@gmail.com', '$2a$12$ptA9phLgCuo.xgIt4O17DecsWFOqAX4KZgqL8VmOHmahC4n3vEsLu', 345211, 'Usuario_Verificado', 69),
(61, 'Ana', 'Pollo', 'Anapollo@gmail.com', '$2a$12$ce9zdHaN6W.XinMbTdL.7.F6D7zVat.imopnBEiBKDZd2Pe5c2CHG', 326908, 'Usuario_Verificado', 13),
(62, 'Ramiro', 'Zafran', 'rama@gmail.com', '$2a$12$yAQQP30jMjzWtBqp.quxDexDr7bm/mP5t.27EoDw.T4LQd0XoZj9.', 91, 'Usuario_Verificado', 70);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_paciente` (`id_Paciente`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=182;
--
-- AUTO_INCREMENT de la tabla `radiografias`
--
ALTER TABLE `radiografias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=281;
--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD CONSTRAINT `fk_usuario` FOREIGN KEY (`id_medico`) REFERENCES `registro` (`id`);

--
-- Filtros para la tabla `radiografias`
--
ALTER TABLE `radiografias`
  ADD CONSTRAINT `fk_paciente` FOREIGN KEY (`id_Paciente`) REFERENCES `paciente` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `registro`
--
ALTER TABLE `registro`
  ADD CONSTRAINT `fk_hospital` FOREIGN KEY (`id_Hospital`) REFERENCES `hospitales` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
