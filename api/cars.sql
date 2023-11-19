

SET FOREIGN_KEY_CHECKS=0;
CREATE TABLE Categories (
                            CategoryID INT PRIMARY KEY,
                            CategoryName VARCHAR(100)
);
INSERT INTO Categories (CategoryID, CategoryName) VALUES
                                                      (1, '电子产品'),
                                                      (2, '书籍'),
                                                      (3, '服装'),
                                                      (4, '食品');

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

CREATE TABLE Users (
                       UserID INT PRIMARY KEY,
                       UserName VARCHAR(50),
                       UserEmail VARCHAR(100)
);
INSERT INTO Users (UserID, UserName, UserEmail) VALUES
                                                    (1, '张三', 'zhangsan@example.com'),
                                                    (2, '李四', 'lisi@example.com'),
                                                    (3, '王五', 'wangwu@example.com'),
                                                    (4, '赵六', 'zhaoliu@example.com');

CREATE TABLE Addresses (
                           AddressID INT PRIMARY KEY,
                           UserID INT,
                           Address VARCHAR(255),
                           FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
INSERT INTO Addresses (AddressID, UserID, Address) VALUES
                                                       (1, 1, '北京市朝阳区'),
                                                       (2, 2, '上海市浦东新区'),
                                                       (3, 3, '广州市天河区'),
                                                       (4, 4, '深圳市南山区');
