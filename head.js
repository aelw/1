


	function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var id = getParameterByName('img');

document.write("\
<center>   \n\
  <img src='http://"+id+"' onerror=\"this.style.display = 'none'\" style='width:80px;height:80px;padding:15px;border-radius:25px'>\n\
</center>");

document.write("\
<span style='color:#fafafa'><a href='/1/5?img="+id+"'>Girls</a> / <a href='/1/5-1?img="+id+"'>Boys</a> / <a href='/1/bp?img="+id+"'>Blackpink</a> / <a href='/1/bts?img="+id+"'>BTS</a> / <a href='/1/sk?img="+id+"'>Stray Kids</a></span><br>\n\
<span><br>");
