const a = 'https://cdn.britannica.com/s:900x675,c:crop/94/152294-131-DC3E25DB/Arabian-dromedary-camel.jpg';
const b = 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg';
const c = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/20113314/Carolina-Dog-standing-outdoors.jpg';
const picBank= [a,a,b,b,c,c];
console.log(picBank);
function getRndInteger() {
  	return Math.floor(Math.random() * (picBank.length) )
}
const targetsArray = document.getElementsByClassName("container").item(0).children[0];
console.log(targetsArray);
 	
function matching(){
	
	/* don't know yet I need a value to compare and I believe I need an event listener.
	 Somehow onclick for the first and compare with attribute of second image.Guess Urls*/
}

function randomeness(){
	let bankCopy = picBank;
	for(i=0; i < targetsArray; i++){
	    let r = getRndInteger();
		targetsArray.setAttribute(src, bankCopy[r]);
		bankCopy[r] = "";
	}
	/* form an array of urls. Itererate through them and push/ a method that removes fromm the array 
	and add to the src attribute of an img*/
}
console.log(document.getElementsByClassName("container"))
console.log(getRndInteger(a));//god damn!