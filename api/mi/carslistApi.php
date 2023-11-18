<?php
header('Access-Control-Allow-Origin:*');
require_once "./dbConfig.php";
// 1. 链接数据库
$link = mysqli_connect(HOST,USER,PWD,dBName,PORT);
// 2. 设置编码
mysqli_set_charset($link,CHARSET);
// 3. 写一个查询语句
$sql = "select * from cars where isDel = 0";
// 4. 发送并执行sql语句
$result = mysqli_query($link,$sql);
// 5. 处理结果
$data= mysqli_fetch_all($result,MYSQLI_ASSOC);
// 6. 关闭数据库
mysqli_close($link);
// 给前端返回数据
echo json_encode($data);

?>