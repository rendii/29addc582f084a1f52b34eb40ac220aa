var thumbnail_mode = &quot;no-float&quot; ;
summary_noimg    = 150,
    summary_img      = 150,
    img_thumb_height = 62,
    img_thumb_width  = 100;
</script>
<script type='text/javascript'>
//<![CDATA[
function removeHtmlTag(strx,chop){ 
	if(strx.indexOf("<")!=-1)
	{
		var s = strx.split("<"); 
		for(var i=0;i<s.length;i++){ 
			if(s[i].indexOf(">")!=-1){ 
				s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length); 
			} 
		} 
		strx =  s.join(""); 
	}
	chop = (chop < strx.length-1) ? chop : strx.length-2; 
	while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++; 
	strx = strx.substring(0,chop-1); 
	return strx+'...'; 
}
function createSummaryAndThumb(pID){
	var div = document.getElementById(pID);
	var imgtag = "";
	var img = div.getElementsByTagName("img");
	var summ = summary_noimg;
	if(img.length>=1) {	
		imgtag = '<span class="thumbimg"><img src="'+img[0].src+'" width="'+img_thumb_width+'px"height="'+img_thumb_height+'px" /></span>';
		summ = summary_img;
	} else {
		imgtag = '<span class="thumbimg"><img src="http://2.bp.blogspot.com/-9DMMcOhegNk/Tq4JIpnooHI/AAAAAAAAAdo/3r39sH3IJqE/s1600/noimages.gif" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px" /></span>';
		summ = summary_img;
        }
	
	var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
	div.innerHTML = summary;
}
