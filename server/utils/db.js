import mysql from "mysql"
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mysql",
    database:"employeedb"
});

con.connect((err)=>{
if(err){
    console.log(err)
}else{
    console.log("connected")
}
})

export default con