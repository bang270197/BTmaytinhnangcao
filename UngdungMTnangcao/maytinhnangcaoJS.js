function hienthitext(nhapso)
{
   let hienthi =document.getElementById("input").value+=nhapso;
}
function  thuchienpheptinh() {
    let laygitricuatext =document.getElementById("input").value;
    let kq=eval(laygitricuatext);
    document.getElementById("input").value=kq;;
}
function C() {
    
    document.getElementById("input").value=" ";
}