// <![CDATA[
var bgcolour="#000000"; // background colour
var hlcolour="#ddccff"; // highlight colour
var speed=100; // speed colours change, 1 second = 1000

/****************************
*    Phone-In Text Effect   *
*(c) 2003-6 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var p_txt;
window.onload=function() { if (document.getElementById) {
  var phoni;
  var phone=document.getElementById("phonein");
  p_txt=phone.firstChild.nodeValue;
  while (phone.childNodes.length) phone.removeChild(phone.childNodes[0]);
  for (var i=0; i<p_txt.length; i++) {
    phoni=document.createElement("div");
	phoni.style.display="inline";
    phoni.setAttribute("id", "phon"+i);
    phoni.appendChild(document.createTextNode(p_txt.charAt(i)));
    phone.appendChild(phoni);
  }
  phone_me((p_txt=p_txt.length)-1);
}}

function phone_me(p_cnt) {
  var p_tmp=document.getElementById("phon"+p_cnt);
  p_tmp.style.fontWeight="normal";
  if (document.all) p_tmp.style.filter='';
  p_tmp.style.backgroundColor=bgcolour;
  p_cnt=++p_cnt%p_txt;
  p_tmp=document.getElementById("phon"+p_cnt);
  if (p_tmp.firstChild.nodeValue!=" ") {
    p_tmp.style.fontWeight="bold";
    if (document.all) p_tmp.style.filter="GLOW(strength=3, color=#"+bgcolour+")";
    p_tmp.style.backgroundColor=hlcolour;
  }
  setTimeout("phone_me("+p_cnt+")", speed);
}
// ]]>
