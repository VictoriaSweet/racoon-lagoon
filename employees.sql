-- Make a new database employee_tracker
create database employee_tracker;

-- Make employees table in database
use database employee_tracker;
use employee_tracker;
CREATE TABLE `employees` (
  `employee_name` varchar(50) DEFAULT NULL,
  `employee_id` tinyint(4) NOT NULL,
  `department_id` int(11) NOT NULL,
  `department_name` varchar(50) NOT NULL,
  `salary` bigint(20) NOT NULL,
  `manager` varchar(50) NOT NULL,
  `department_role` varchar(50) NOT NULL,
  UNIQUE KEY `employee_id` (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
  