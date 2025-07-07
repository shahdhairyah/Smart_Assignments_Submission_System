-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2025 at 07:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+05:30";

CREATE DATABASE IF NOT EXISTS `sass`;
USE `sass`;

-- Table: feedback
CREATE TABLE `feedback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `submitted_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Table: students
CREATE TABLE `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roll_number` varchar(12) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `roll_number` (`roll_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `students` (`id`, `full_name`, `email`, `password`, `roll_number`) VALUES
(1, 'Shah Dhairya', '1shahdhairya@gmail.com', '$2y$10$sNhRKN6dIUCUmVtisRJe3.KaTYtlNhPs1BHbz5vmdI61nms7hm7da', '236040307169'),
(3, '', '', '$2y$10$pJgnDtzyXe0i/zeYBM4kCefOvVbEUtqMRB0DBnZlTQvMu8XvW5ihW', ''),
(4, 'BBITians', 'india1947@gmail.com', '$2y$10$n6p8Vv3KQP61Y4Kh7eiNdeBjTlgyR1kC5XPyWQiHT2qdA.34JxwRC', '123456789011');

-- Table: student_submissions
CREATE TABLE `student_submissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `assignment_id` int(11) NOT NULL,
  `student_email` varchar(100) DEFAULT NULL,
  `student_name` varchar(100) DEFAULT NULL,
  `roll_number` varchar(50) DEFAULT NULL,
  `pdf_url` text NOT NULL,
  `submission_version` int(11) DEFAULT 1,
  `is_outdated` tinyint(1) DEFAULT 0,
  `status` varchar(50) DEFAULT 'Pending',
  `marks` int(11) DEFAULT NULL,
  `submitted_at` datetime DEFAULT current_timestamp(),
  `reviewed_at` datetime DEFAULT NULL,
  `marks_submitted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Table: teachers
CREATE TABLE `teachers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `teachers` (`id`, `full_name`, `email`, `password`) VALUES
(3, 'Admin Teacher', 'admin@school.edu', '$2y$10$vR5sFGV1EXmLi8Q3JFIiO.5wvBq9mhS9RaQuLcu7rpD5gfxDe9AdG');

-- Table: tec_assignment
CREATE TABLE `tec_assignment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `AssName` varchar(100) NOT NULL,
  `AssNu` varchar(20) NOT NULL,
  `Asslink` text NOT NULL,
  `dueDate` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tec_assignment` (`id`, `AssName`, `AssNu`, `Asslink`, `dueDate`, `created_at`) VALUES
(4, 'php', '3', 'https://drive.google.com/file/d/1DSZ9e2iy0ZdPwzVnzrTC-FbtAgbZMVYg/view?usp=drive_link', '2025-07-10 18:29:00', '2025-07-03 08:59:31'),
(5, 'php', '21', 'https://drive.google.com/file/d/1DSZ9e2iy0ZdPwzVnzrTC-FbtAgbZMVYg/view?usp=drive_link', '2025-07-10 18:29:00', '2025-07-03 09:08:24'),
(6, 'SQL', '1', 'https://drive.google.com/file/d/1DSZ9e2iy0ZdPwzVnzrTC-FbtAgbZMVYg/view?usp=drive_link', '2025-07-10 18:29:00', '2025-07-03 09:18:26'),
(7, 'php', '0009', 'https://drive.google.com/file/d/1DSZ9e2iy0ZdPwzVnzrTC-FbtAgbZMVYg/view?usp=drive_link', '2025-07-10 18:29:00', '2025-07-03 09:19:19'),
(8, 'sass', '07069276736', 'https://docs.google.com/document/d/1MJTx3_zRxKXAsIgdZCms3frDlBArT_rhx5TE8SiUWQo/edit?usp=drive_link', '2025-07-10 18:29:00', '2025-07-03 09:22:14'),
(9, 'sasspp', '07069276736', 'https://drive.google.com/file/d/1DSZ9e2iy0ZdPwzVnzrTC-FbtAgbZMVYg/view?usp=drive_link', '2025-07-10 18:29:00', '2025-07-03 09:30:49'),
(10, 'sassll', '+917069276736', 'https://drive.google.com/file/d/1DSZ9e2iy0ZdPwzVnzrTC-FbtAgbZMVYg/view?usp=drive_link', '2025-07-10 18:29:00', '2025-07-03 09:33:53');

COMMIT;
