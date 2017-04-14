-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2017 at 12:46 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_integrated`
--

-- --------------------------------------------------------

--
-- Table structure for table `maincontent`
--

CREATE TABLE IF NOT EXISTS `maincontent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(20) NOT NULL,
  `contentImage` text NOT NULL,
  `contentName` varchar(20) NOT NULL,
  `contentDetails` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `maincontent`
--

INSERT INTO `maincontent` (`id`, `content`, `contentImage`, `contentName`, `contentDetails`) VALUES
(0, 'F55', 'counselling', 'Counselling Services', 'Counselling is one of of our largest divisions at the Mental Health Association of Canada. Whether it be limited access, or fear of being judged, too many Canadians are not receiving the mental health help they desperately need.  We offer our counselling services for no charge and we ensure your privacy is our number one concern.'),
(1, 'F56', 'lobbying', 'Government Lobbying', 'Another way that the MHAC helps those suffering from mental illnesses is by lobbying the Canadian government.  We have been able to assist in the crafting of legislation across the province of Ontario and are seeking to expand our influence further.'),
(2, 'R58', 'legal', 'Legal Guidance', 'Our team of professional legal aides, lawyers and paralegals are always standing by the assist those who require it. We have a long history of fighting legal cases where employers did not want to compensate those with mental illnesses.\r\n\r\n');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
