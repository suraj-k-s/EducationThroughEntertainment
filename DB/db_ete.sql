-- phpMyAdmin SQL Dump
-- version 2.11.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 09, 2022 at 06:25 AM
-- Server version: 5.0.51
-- PHP Version: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_ete`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `admin_id` int(11) NOT NULL auto_increment,
  `admin_uname` varchar(50) NOT NULL,
  `admin_password` varchar(50) NOT NULL,
  PRIMARY KEY  (`admin_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`admin_id`, `admin_uname`, `admin_password`) VALUES
(1, 'Admin', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `category_id` int(11) NOT NULL auto_increment,
  `category_name` varchar(100) NOT NULL,
  PRIMARY KEY  (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`category_id`, `category_name`) VALUES
(1, 'LKG');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_entertainmenttype`
--

CREATE TABLE `tbl_entertainmenttype` (
  `entertainment_id` int(11) NOT NULL auto_increment,
  `entertainment_type` varchar(100) NOT NULL,
  PRIMARY KEY  (`entertainment_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_entertainmenttype`
--

INSERT INTO `tbl_entertainmenttype` (`entertainment_id`, `entertainment_type`) VALUES
(1, 'Video');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_entertainmetfile`
--

CREATE TABLE `tbl_entertainmetfile` (
  `Efile_id` int(11) NOT NULL auto_increment,
  `category_id` int(11) NOT NULL,
  `entertainment_id` int(11) NOT NULL,
  `etype_id` int(11) NOT NULL,
  `file` varchar(100) NOT NULL,
  PRIMARY KEY  (`Efile_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_entertainmetfile`
--

INSERT INTO `tbl_entertainmetfile` (`Efile_id`, `category_id`, `entertainment_id`, `etype_id`, `file`) VALUES
(1, 1, 1, 1, 'http://localhost/EducationThroughEntertainment/Project/api/Files/MaterialVideo/STORY.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_etype_category`
--

CREATE TABLE `tbl_etype_category` (
  `etype_id` int(11) NOT NULL auto_increment,
  `entertainment_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY  (`etype_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_etype_category`
--

INSERT INTO `tbl_etype_category` (`etype_id`, `entertainment_id`, `name`) VALUES
(1, 1, 'Enjoyment');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_material`
--

CREATE TABLE `tbl_material` (
  `material_id` int(11) NOT NULL auto_increment,
  `subcategory_id` int(11) NOT NULL,
  `material_caption` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `vedio_file` varchar(100) NOT NULL,
  PRIMARY KEY  (`material_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_material`
--

INSERT INTO `tbl_material` (`material_id`, `subcategory_id`, `material_caption`, `description`, `vedio_file`) VALUES
(1, 2, 'Maths Mulltiplication', 'Multiplication Video', 'http://localhost/EducationThroughEntertainment/Project/api/Files/MaterialVideo/maths.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_package`
--

CREATE TABLE `tbl_package` (
  `package_id` int(11) NOT NULL auto_increment,
  `category_id` int(11) NOT NULL,
  `package_amount` float NOT NULL,
  `duration` int(11) NOT NULL,
  `package_name` varchar(100) NOT NULL,
  PRIMARY KEY  (`package_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_package`
--

INSERT INTO `tbl_package` (`package_id`, `category_id`, `package_amount`, `duration`, `package_name`) VALUES
(1, 1, 1000, 60, 'Gold Package');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_packagebooking`
--

CREATE TABLE `tbl_packagebooking` (
  `booking_id` int(11) NOT NULL auto_increment,
  `booking_date` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  PRIMARY KEY  (`booking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `tbl_packagebooking`
--


-- --------------------------------------------------------

--
-- Table structure for table `tbl_questionanswer`
--

CREATE TABLE `tbl_questionanswer` (
  `questionanswer_id` int(11) NOT NULL auto_increment,
  `question_id` int(11) NOT NULL,
  `right_answer` varchar(100) NOT NULL,
  `wrong_answer1` varchar(100) NOT NULL,
  `wrong_answer2` varchar(100) NOT NULL,
  `wrong_answer3` varchar(100) NOT NULL,
  PRIMARY KEY  (`questionanswer_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_questionanswer`
--

INSERT INTO `tbl_questionanswer` (`questionanswer_id`, `question_id`, `right_answer`, `wrong_answer1`, `wrong_answer2`, `wrong_answer3`) VALUES
(1, 1, 'its a Boy', 'its a Cat', 'its a rat', 'its a dog');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_questionbundle`
--

CREATE TABLE `tbl_questionbundle` (
  `questionbundle_id` int(11) NOT NULL auto_increment,
  `questionlevel_id` int(11) NOT NULL,
  `material_id` int(11) NOT NULL,
  `no_ofquestions` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY  (`questionbundle_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_questionbundle`
--

INSERT INTO `tbl_questionbundle` (`questionbundle_id`, `questionlevel_id`, `material_id`, `no_ofquestions`, `name`) VALUES
(1, 1, 1, 2, 'Qustion Bundle Name');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_questionlevel`
--

CREATE TABLE `tbl_questionlevel` (
  `questionlevel_id` int(11) NOT NULL auto_increment,
  `questionlevel_name` varchar(100) NOT NULL,
  PRIMARY KEY  (`questionlevel_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_questionlevel`
--

INSERT INTO `tbl_questionlevel` (`questionlevel_id`, `questionlevel_name`) VALUES
(1, 'Easy');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_questions`
--

CREATE TABLE `tbl_questions` (
  `question_id` int(11) NOT NULL auto_increment,
  `questionbundle_id` int(11) NOT NULL,
  `questionlevel_id` int(11) NOT NULL,
  `question` varchar(100) NOT NULL,
  `qimage` varchar(100) NOT NULL,
  PRIMARY KEY  (`question_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_questions`
--

INSERT INTO `tbl_questions` (`question_id`, `questionbundle_id`, `questionlevel_id`, `question`, `qimage`) VALUES
(1, 1, 1, 'What is this', 'http://localhost/EducationThroughEntertainment/Project/api/Files/MaterialVideo/B.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_staffassign`
--

CREATE TABLE `tbl_staffassign` (
  `s_id` int(11) NOT NULL auto_increment,
  `staffreg_id` int(11) NOT NULL,
  `stud_id` int(11) NOT NULL,
  PRIMARY KEY  (`s_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `tbl_staffassign`
--


-- --------------------------------------------------------

--
-- Table structure for table `tbl_staffregistration`
--

CREATE TABLE `tbl_staffregistration` (
  `staffreg_id` int(11) NOT NULL auto_increment,
  `s_name` varchar(100) NOT NULL,
  `s_photo` varchar(100) NOT NULL,
  `s_email` varchar(100) NOT NULL,
  `s_contact` int(11) NOT NULL,
  `s_uname` varchar(100) NOT NULL,
  `s_password` varchar(100) NOT NULL,
  PRIMARY KEY  (`staffreg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `tbl_staffregistration`
--


-- --------------------------------------------------------

--
-- Table structure for table `tbl_studentregistration`
--

CREATE TABLE `tbl_studentregistration` (
  `stud_id` int(11) NOT NULL auto_increment,
  `stud_name` varchar(30) NOT NULL,
  `stud_email` varchar(100) NOT NULL,
  `stud_uname` varchar(100) NOT NULL,
  `stud_password` varchar(100) NOT NULL,
  `category_id` int(11) NOT NULL,
  `stud_photo` varchar(100) NOT NULL,
  PRIMARY KEY  (`stud_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_studentregistration`
--

INSERT INTO `tbl_studentregistration` (`stud_id`, `stud_name`, `stud_email`, `stud_uname`, `stud_password`, `category_id`, `stud_photo`) VALUES
(1, 'Suraj K S', 'surajks28101999@gmail.com', 'suraj123', 'suraj123', 1, 'http://localhost/EducationThroughEntertainment/Project/api/Files/UserPhoto/B.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_student_answer`
--

CREATE TABLE `tbl_student_answer` (
  `sanswer_id` int(11) NOT NULL auto_increment,
  `student_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `student_answer` varchar(100) NOT NULL,
  `answer_status` varchar(50) NOT NULL,
  PRIMARY KEY  (`sanswer_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `tbl_student_answer`
--

INSERT INTO `tbl_student_answer` (`sanswer_id`, `student_id`, `question_id`, `student_answer`, `answer_status`) VALUES
(15, 1, 1, 'its a Boy', 'Correct'),
(16, 1, 1, 'its a Boy', 'Correct'),
(17, 1, 1, 'its a Boy', 'Correct'),
(18, 1, 1, 'its a Boy', 'Correct');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_subcategory`
--

CREATE TABLE `tbl_subcategory` (
  `subcategory_id` int(11) NOT NULL auto_increment,
  `category_id` int(11) NOT NULL,
  `subcategory_name` varchar(100) NOT NULL,
  PRIMARY KEY  (`subcategory_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tbl_subcategory`
--

INSERT INTO `tbl_subcategory` (`subcategory_id`, `category_id`, `subcategory_name`) VALUES
(2, 1, 'English');
