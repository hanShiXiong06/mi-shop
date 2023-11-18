<?php
header('Access-Control-Allow-Origin:*');
// 接收参数
$cid = isset($_GET['cid'])?$_GET['cid']:'';
$status = isset($_GET['status'])?$_GET['status']:'';
require_once "./dbConfig.php";
// 1. 链接数据库
$link = mysqli_connect(HOST,USER,PWD,dBName,PORT);
// 2. 设置编码
mysqli_set_charset($link,CHARSET);
// 3. 写一个查询语句
$sql = "update cars set isSelected ={$status} where cid = {$cid}";
// 4. 发送并执行sql语句
$result = mysqli_query($link,$sql);
// 5. 处理结果
if($result){
$data = array("errno"=>200,"msg"=>'修改成功');
}else{
    $data = array("errno"=>202,"msg"=>'修改失败');
}
// 6. 关闭数据库
mysqli_close($link);
// 给前端返回数据
echo json_encode($data);

?>