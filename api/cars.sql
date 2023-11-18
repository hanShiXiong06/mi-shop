/*
Navicat MySQL Data Transfer

Source Server         : yjyan
Source Server Version : 50725
Source Host           : bdm721864350.my3w.com:3306
Source Database       : bdm721864350_db

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2022-07-20 22:48:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cars
-- ----------------------------
DROP TABLE IF EXISTS `cars`;
CREATE TABLE `cars` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `cname` varchar(100) DEFAULT NULL,
  `thumb` varchar(200) DEFAULT NULL,
  `attr` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `cnt` tinyint(255) DEFAULT NULL,
  `isSelected` tinyint(255) NOT NULL DEFAULT '0',
  `isdel` tinyint(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cars
-- ----------------------------
INSERT INTO `cars` VALUES ('1', '\r\n小米小爱音箱Play ', 'https://www.yjyan.cn/mi/car1.webp', '增强版 黑色', '149.00', '1', '0', '0');
INSERT INTO `cars` VALUES ('2', '\r\n\r\nXiaomi 12X ', 'https://www.yjyan.cn/mi/car2.webp', '8GB+256GB 黑色', '3299.00', '1', '0', '0');
INSERT INTO `cars` VALUES ('3', 'Xiaomi 12S Pro ', 'https://www.yjyan.cn/mi/car3.webp', '8GB+128GB 白色', '4699.00', '1', '0', '0');
INSERT INTO `cars` VALUES ('4', '\r\n小米小爱音箱Play ', 'https://www.yjyan.cn/mi/car1.webp', '增强版 黑色', '149.00', '1', '0', '0');
INSERT INTO `cars` VALUES ('5', '\r\n\r\nXiaomi 12X ', 'https://www.yjyan.cn/mi/car2.webp', '8GB+256GB 黑色', '3299.00', '1', '0', '0');
INSERT INTO `cars` VALUES ('6', 'Xiaomi 12S Pro ', 'https://www.yjyan.cn/mi/car3.webp', '8GB+128GB 白色', '4699.00', '1', '0', '0');
