<?php

class Mysql{
   
    private static $servername="localhost";
    private static $username="root";
    private static $userpassword="abc";
    private static $dbname="registerdb";
    private static $charset="utf8";
    private $conn=null;
    
    function _construct(){
        
        $this->conn=new mysqli(self::$servername,self::$username,self::$userpassword,self::$dbname);
        
     
        
    if(!$this->conn)
    {
         echo '数据库连接失败';
    }
    
    else{
       
        echo '数据库连接成功';
    }
    
    $this->conn->query("set names ".self::$charset);  
    
    }
  
  /*
   
   function select($sql)
   {
      $res=$this->$conn->query($sql);
           
        
        if(!$res)
        {
            echo '查询格式有误';
        }
        
        else {
            
            $line=mysqli_num_rows($res);
            
            if($line=0)
            {
              echo '对不起,没有找到相关内容';
            }
            
            else{
                echo "<table border='1'>
<tr>
<th>用户名</th>
<th>电子邮箱</th>
<th>生日</th>
<th>性别</th>
</tr>";

while($row = mysql_fetch_array($res))
  {
  echo "<tr>";
  echo "<td>" . $row['name'] . "</td>";
  echo "<td>" . $row['email'] . "</td>";
   echo "<td>" . $row['birdaytime'] . "</td>";
    echo "<td>" . $row['gender'] . "</td>";
  echo "</tr>";
  }
echo "</table>";

            }
            
           
        }
   }
    
    */
    public function close()
    {
        mysqli_close($this->conn);
    }
    
}


?>