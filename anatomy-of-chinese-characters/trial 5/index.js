$(document).ready(function(){   

var images=new Array()
images[0]='<img class="seg c-1" src="images/segments-white/segment-white-01.png">'
images[1]='<img class="seg c-1" src="images/segments-white/segment-white-02.png">'
images[2]='<img class="seg c-1" src="images/segments-white/segment-white-03.png">'
images[3]='<img class="seg c-1" src="images/segments-white/segment-white-04.png">'
images[4]='<img class="seg c-1" src="images/segments-white/segment-white-05.png">'
images[5]='<img class="seg c-1" src="images/segments-white/segment-white-06.png">'
images[6]='<img class="seg c-1" src="images/segments-white/segment-white-07.png">'
images[7]='<img class="seg c-1" src="images/segments-white/segment-white-08.png">'
images[8]='<img class="seg c-2" src="images/segments-white/segment-white-09.png">'
images[9]='<img class="seg c-2" src="images/segments-white/segment-white-10.png">'
images[10]='<img class="seg c-2" src="images/segments-white/segment-white-11.png">'
images[11]='<img class="seg c-2" src="images/segments-white/segment-white-12.png">'
images[12]='<img class="seg c-2" src="images/segments-white/segment-white-13.png">'
images[13]='<img class="seg c-2" src="images/segments-white/segment-white-14.png">'
images[14]='<img class="seg c-2" src="images/segments-white/segment-white-15.png">'
images[15]='<img class="seg c-2" src="images/segments-white/segment-white-16.png">'
images[16]='<img class="seg c-3" src="images/segments-white/segment-white-17.png">'
images[17]='<img class="seg c-3" src="images/segments-white/segment-white-18.png">'
images[18]='<img class="seg c-3" src="images/segments-white/segment-white-19.png">'
images[19]='<img class="seg c-4" src="images/segments-white/segment-white-20.png">'
images[20]='<img class="seg c-4" src="images/segments-white/segment-white-21.png">'
images[21]='<img class="seg c-4" src="images/segments-white/segment-white-22.png">'
images[22]='<img class="seg c-4" src="images/segments-white/segment-white-23.png">'
images[23]='<img class="seg c-4" src="images/segments-white/segment-white-24.png">'
images[24]='<img class="seg c-4" src="images/segments-white/segment-white-25.png">'
images[25]='<img class="seg c-4" src="images/segments-white/segment-white-26.png">'
images[26]='<img class="seg c-4" src="images/segments-white/segment-white-27.png">'
images[27]='<img class="seg c-5" src="images/segments-white/segment-white-28.png">'
images[28]='<img class="seg c-5" src="images/segments-white/segment-white-29.png">'
images[29]='<img class="seg c-5" src="images/segments-white/segment-white-30.png">'
images[30]='<img class="seg c-5" src="images/segments-white/segment-white-31.png">'
images[31]='<img class="seg c-5" src="images/segments-white/segment-white-32.png">'
images[32]='<img class="seg c-6" src="images/segments-white/segment-white-33.png">'
images[33]='<img class="seg c-6" src="images/segments-white/segment-white-34.png">'
images[34]='<img class="seg c-6" src="images/segments-white/segment-white-35.png">'
images[35]='<img class="seg c-6" src="images/segments-white/segment-white-36.png">'
images[36]='<img class="seg c-6" src="images/segments-white/segment-white-37.png">'
images[37]='<img class="seg c-6" src="images/segments-white/segment-white-38.png">'
images[38]='<img class="seg c-6" src="images/segments-white/segment-white-39.png">'
images[39]='<img class="seg c-6" src="images/segments-white/segment-white-40.png">'
images[40]='<img class="seg c-7" src="images/segments-white/segment-white-41.png">'
images[41]='<img class="seg c-7" src="images/segments-white/segment-white-42.png">'
images[42]='<img class="seg c-7" src="images/segments-white/segment-white-43.png">'
images[43]='<img class="seg c-7" src="images/segments-white/segment-white-44.png">'
images[44]='<img class="seg c-7" src="images/segments-white/segment-white-45.png">'
images[45]='<img class="seg c-7" src="images/segments-white/segment-white-46.png">'
images[46]='<img class="seg c-7" src="images/segments-white/segment-white-47.png">'
images[47]='<img class="seg c-7" src="images/segments-white/segment-white-48.png">'
images[48]='<img class="seg c-8" src="images/segments-white/segment-white-49.png">'
images[49]='<img class="seg c-8" src="images/segments-white/segment-white-50.png">'
images[50]='<img class="seg c-8" src="images/segments-white/segment-white-51.png">'
images[51]='<img class="seg c-8" src="images/segments-white/segment-white-52.png">'
images[52]='<img class="seg c-8" src="images/segments-white/segment-white-53.png">'
images[53]='<img class="seg c-8" src="images/segments-white/segment-white-54.png">'
images[54]='<img class="seg c-8" src="images/segments-white/segment-white-55.png">'
images[55]='<img class="seg c-8" src="images/segments-white/segment-white-56.png">'
images[56]='<img class="seg c-9" src="images/segments-white/segment-white-57.png">'
images[57]='<img class="seg c-9" src="images/segments-white/segment-white-58.png">'
images[58]='<img class="seg c-9" src="images/segments-white/segment-white-59.png">'
images[59]='<img class="seg c-9" src="images/segments-white/segment-white-60.png">'
images[60]='<img class="seg c-9" src="images/segments-white/segment-white-61.png">'
images[61]='<img class="seg c-9" src="images/segments-white/segment-white-62.png">'
images[62]='<img class="seg c-10" src="images/segments-white/segment-white-63.png">'
images[63]='<img class="seg c-10" src="images/segments-white/segment-white-64.png">'
images[64]='<img class="seg c-10" src="images/segments-white/segment-white-65.png">'
images[65]='<img class="seg c-10" src="images/segments-white/segment-white-66.png">'
images[66]='<img class="seg c-10" src="images/segments-white/segment-white-67.png">'
images[67]='<img class="seg c-11" src="images/segments-white/segment-white-68.png">'
images[68]='<img class="seg c-11" src="images/segments-white/segment-white-69.png">'
images[69]='<img class="seg c-11" src="images/segments-white/segment-white-70.png">'
images[70]='<img class="seg c-12" src="images/segments-white/segment-white-71.png">'
images[71]='<img class="seg c-12" src="images/segments-white/segment-white-72.png">'
images[72]='<img class="seg c-12" src="images/segments-white/segment-white-73.png">'
images[73]='<img class="seg c-12" src="images/segments-white/segment-white-74.png">'
images[74]='<img class="seg c-12" src="images/segments-white/segment-white-75.png">'
images[75]='<img class="seg c-12" src="images/segments-white/segment-white-76.png">'
images[76]='<img class="seg c-12" src="images/segments-white/segment-white-77.png">'
images[77]='<img class="seg c-12" src="images/segments-white/segment-white-78.png">'
images[78]='<img class="seg c-13" src="images/segments-white/segment-white-79.png">'
images[79]='<img class="seg c-13" src="images/segments-white/segment-white-80.png">'
images[80]='<img class="seg c-13" src="images/segments-white/segment-white-81.png">'
images[81]='<img class="seg c-14" src="images/segments-white/segment-white-82.png">'
images[82]='<img class="seg c-14" src="images/segments-white/segment-white-83.png">'
images[83]='<img class="seg c-14" src="images/segments-white/segment-white-84.png">'
images[84]='<img class="seg c-14" src="images/segments-white/segment-white-85.png">'
images[85]='<img class="seg c-14" src="images/segments-white/segment-white-86.png">'
images[86]='<img class="seg c-14" src="images/segments-white/segment-white-87.png">'
images[87]='<img class="seg c-14" src="images/segments-white/segment-white-88.png">'
images[88]='<img class="seg c-15" src="images/segments-white/segment-white-89.png">'
images[89]='<img class="seg c-15" src="images/segments-white/segment-white-90.png">'
images[90]='<img class="seg c-15" src="images/segments-white/segment-white-91.png">'
images[91]='<img class="seg c-15" src="images/segments-white/segment-white-92.png">'
images[92]='<img class="seg c-15" src="images/segments-white/segment-white-93.png">'
images[93]='<img class="seg c-16" src="images/segments-white/segment-white-94.png">'
images[94]='<img class="seg c-16" src="images/segments-white/segment-white-95.png">'
images[95]='<img class="seg c-16" src="images/segments-white/segment-white-96.png">'
images[96]='<img class="seg c-16" src="images/segments-white/segment-white-97.png">'
images[97]='<img class="seg c-17" src="images/segments-white/segment-white-98.png">'
images[98]='<img class="seg c-17" src="images/segments-white/segment-white-99.png">'
images[99]='<img class="seg c-17" src="images/segments-white/segment-white-100.png">'
images[100]='<img class="seg c-17" src="images/segments-white/segment-white-101.png">'
images[101]='<img class="seg c-18" src="images/segments-white/segment-white-102.png">'
images[102]='<img class="seg c-18" src="images/segments-white/segment-white-103.png">'
images[103]='<img class="seg c-18" src="images/segments-white/segment-white-104.png">'
images[104]='<img class="seg c-18" src="images/segments-white/segment-white-105.png">'
images[105]='<img class="seg c-18" src="images/segments-white/segment-white-106.png">'
images[106]='<img class="seg c-19" src="images/segments-white/segment-white-107.png">'
images[107]='<img class="seg c-19" src="images/segments-white/segment-white-108.png">'
images[108]='<img class="seg c-19" src="images/segments-white/segment-white-109.png">'
images[109]='<img class="seg c-19" src="images/segments-white/segment-white-110.png">'
images[110]='<img class="seg c-19" src="images/segments-white/segment-white-111.png">'
images[111]='<img class="seg c-19" src="images/segments-white/segment-white-112.png">'
images[112]='<img class="seg c-20" src="images/segments-white/segment-white-113.png">'
images[113]='<img class="seg c-20" src="images/segments-white/segment-white-114.png">'
images[114]='<img class="seg c-20" src="images/segments-white/segment-white-115.png">'
images[115]='<img class="seg c-20" src="images/segments-white/segment-white-116.png">'
images[116]='<img class="seg c-20" src="images/segments-white/segment-white-117.png">'
images[117]='<img class="seg c-20" src="images/segments-white/segment-white-118.png">'
images[118]='<img class="seg c-20" src="images/segments-white/segment-white-119.png">'
images[119]='<img class="seg c-20" src="images/segments-white/segment-white-120.png">'
images[120]='<img class="seg c-21" src="images/segments-white/segment-white-121.png">'
images[121]='<img class="seg c-21" src="images/segments-white/segment-white-122.png">'
images[122]='<img class="seg c-21" src="images/segments-white/segment-white-123.png">'
images[123]='<img class="seg c-21" src="images/segments-white/segment-white-124.png">'
images[124]='<img class="seg c-21" src="images/segments-white/segment-white-125.png">'
images[125]='<img class="seg c-21" src="images/segments-white/segment-white-126.png">'
images[126]='<img class="seg c-21" src="images/segments-white/segment-white-127.png">'
images[127]='<img class="seg c-21" src="images/segments-white/segment-white-128.png">'
images[128]='<img class="seg c-22" src="images/segments-white/segment-white-129.png">'
images[129]='<img class="seg c-22" src="images/segments-white/segment-white-130.png">'
images[130]='<img class="seg c-22" src="images/segments-white/segment-white-131.png">'
images[131]='<img class="seg c-22" src="images/segments-white/segment-white-132.png">'
images[132]='<img class="seg c-22" src="images/segments-white/segment-white-133.png">'
images[133]='<img class="seg c-22" src="images/segments-white/segment-white-134.png">'
images[134]='<img class="seg c-23" src="images/segments-white/segment-white-135.png">'
images[135]='<img class="seg c-23" src="images/segments-white/segment-white-136.png">'
images[136]='<img class="seg c-23" src="images/segments-white/segment-white-137.png">'
images[137]='<img class="seg c-23" src="images/segments-white/segment-white-138.png">'
images[138]='<img class="seg c-23" src="images/segments-white/segment-white-139.png">'
images[139]='<img class="seg c-23" src="images/segments-white/segment-white-140.png">'
images[140]='<img class="seg c-23" src="images/segments-white/segment-white-141.png">'
images[141]='<img class="seg c-24" src="images/segments-white/segment-white-142.png">'
images[142]='<img class="seg c-24" src="images/segments-white/segment-white-143.png">'
images[143]='<img class="seg c-24" src="images/segments-white/segment-white-144.png">'
images[144]='<img class="seg c-24" src="images/segments-white/segment-white-145.png">'
images[145]='<img class="seg c-24" src="images/segments-white/segment-white-146.png">'
images[146]='<img class="seg c-25" src="images/segments-white/segment-white-147.png">'
images[147]='<img class="seg c-25" src="images/segments-white/segment-white-148.png">'
images[148]='<img class="seg c-25" src="images/segments-white/segment-white-149.png">'
images[149]='<img class="seg c-25" src="images/segments-white/segment-white-150.png">'
images[150]='<img class="seg c-25" src="images/segments-white/segment-white-151.png">'
images[151]='<img class="seg c-25" src="images/segments-white/segment-white-152.png">'
images[152]='<img class="seg c-26" src="images/segments-white/segment-white-153.png">'
images[153]='<img class="seg c-26" src="images/segments-white/segment-white-154.png">'
images[154]='<img class="seg c-26" src="images/segments-white/segment-white-155.png">'
images[155]='<img class="seg c-26" src="images/segments-white/segment-white-156.png">'
images[156]='<img class="seg c-26" src="images/segments-white/segment-white-157.png">'
images[157]='<img class="seg c-26" src="images/segments-white/segment-white-158.png">'
images[158]='<img class="seg c-26" src="images/segments-white/segment-white-159.png">'
images[159]='<img class="seg c-26" src="images/segments-white/segment-white-160.png">'


images[160]='<img class="seg c-1" src="images/segments-white/segment-white-01.png">'
images[161]='<img class="seg c-1" src="images/segments-white/segment-white-02.png">'
images[162]='<img class="seg c-1" src="images/segments-white/segment-white-03.png">'
images[163]='<img class="seg c-1" src="images/segments-white/segment-white-04.png">'
images[164]='<img class="seg c-1" src="images/segments-white/segment-white-05.png">'
images[165]='<img class="seg c-1" src="images/segments-white/segment-white-06.png">'
images[166]='<img class="seg c-1" src="images/segments-white/segment-white-07.png">'
images[167]='<img class="seg c-1" src="images/segments-white/segment-white-08.png">'
images[168]='<img class="seg c-2" src="images/segments-white/segment-white-09.png">'
images[169]='<img class="seg c-2" src="images/segments-white/segment-white-10.png">'
images[170]='<img class="seg c-2" src="images/segments-white/segment-white-11.png">'
images[171]='<img class="seg c-2" src="images/segments-white/segment-white-12.png">'
images[172]='<img class="seg c-2" src="images/segments-white/segment-white-13.png">'
images[173]='<img class="seg c-2" src="images/segments-white/segment-white-14.png">'
images[174]='<img class="seg c-2" src="images/segments-white/segment-white-15.png">'
images[175]='<img class="seg c-2" src="images/segments-white/segment-white-16.png">'
images[176]='<img class="seg c-3" src="images/segments-white/segment-white-17.png">'
images[177]='<img class="seg c-3" src="images/segments-white/segment-white-18.png">'
images[178]='<img class="seg c-3" src="images/segments-white/segment-white-19.png">'
images[179]='<img class="seg c-4" src="images/segments-white/segment-white-20.png">'
images[180]='<img class="seg c-4" src="images/segments-white/segment-white-21.png">'
images[181]='<img class="seg c-4" src="images/segments-white/segment-white-22.png">'
images[182]='<img class="seg c-4" src="images/segments-white/segment-white-23.png">'
images[183]='<img class="seg c-4" src="images/segments-white/segment-white-24.png">'
images[184]='<img class="seg c-4" src="images/segments-white/segment-white-25.png">'
images[185]='<img class="seg c-4" src="images/segments-white/segment-white-26.png">'
images[186]='<img class="seg c-4" src="images/segments-white/segment-white-27.png">'
images[187]='<img class="seg c-5" src="images/segments-white/segment-white-28.png">'
images[188]='<img class="seg c-5" src="images/segments-white/segment-white-29.png">'
images[189]='<img class="seg c-5" src="images/segments-white/segment-white-30.png">'
images[190]='<img class="seg c-5" src="images/segments-white/segment-white-31.png">'
images[191]='<img class="seg c-5" src="images/segments-white/segment-white-32.png">'
images[192]='<img class="seg c-6" src="images/segments-white/segment-white-33.png">'
images[193]='<img class="seg c-6" src="images/segments-white/segment-white-34.png">'
images[194]='<img class="seg c-6" src="images/segments-white/segment-white-35.png">'
images[195]='<img class="seg c-6" src="images/segments-white/segment-white-36.png">'
images[196]='<img class="seg c-6" src="images/segments-white/segment-white-37.png">'
images[197]='<img class="seg c-6" src="images/segments-white/segment-white-38.png">'
images[198]='<img class="seg c-6" src="images/segments-white/segment-white-39.png">'
images[199]='<img class="seg c-6" src="images/segments-white/segment-white-40.png">'
images[200]='<img class="seg c-7" src="images/segments-white/segment-white-41.png">'
images[201]='<img class="seg c-7" src="images/segments-white/segment-white-42.png">'
images[202]='<img class="seg c-7" src="images/segments-white/segment-white-43.png">'
images[203]='<img class="seg c-7" src="images/segments-white/segment-white-44.png">'
images[204]='<img class="seg c-7" src="images/segments-white/segment-white-45.png">'
images[205]='<img class="seg c-7" src="images/segments-white/segment-white-46.png">'
images[206]='<img class="seg c-7" src="images/segments-white/segment-white-47.png">'
images[207]='<img class="seg c-7" src="images/segments-white/segment-white-48.png">'
images[208]='<img class="seg c-8" src="images/segments-white/segment-white-49.png">'
images[209]='<img class="seg c-8" src="images/segments-white/segment-white-50.png">'
images[210]='<img class="seg c-8" src="images/segments-white/segment-white-51.png">'
images[211]='<img class="seg c-8" src="images/segments-white/segment-white-52.png">'
images[212]='<img class="seg c-8" src="images/segments-white/segment-white-53.png">'
images[213]='<img class="seg c-8" src="images/segments-white/segment-white-54.png">'
images[214]='<img class="seg c-8" src="images/segments-white/segment-white-55.png">'
images[215]='<img class="seg c-8" src="images/segments-white/segment-white-56.png">'
images[216]='<img class="seg c-9" src="images/segments-white/segment-white-57.png">'
images[217]='<img class="seg c-9" src="images/segments-white/segment-white-58.png">'
images[218]='<img class="seg c-9" src="images/segments-white/segment-white-59.png">'
images[219]='<img class="seg c-9" src="images/segments-white/segment-white-60.png">'
images[220]='<img class="seg c-9" src="images/segments-white/segment-white-61.png">'
images[221]='<img class="seg c-9" src="images/segments-white/segment-white-62.png">'
images[222]='<img class="seg c-10" src="images/segments-white/segment-white-63.png">'
images[223]='<img class="seg c-10" src="images/segments-white/segment-white-64.png">'
images[224]='<img class="seg c-10" src="images/segments-white/segment-white-65.png">'
images[225]='<img class="seg c-10" src="images/segments-white/segment-white-66.png">'
images[226]='<img class="seg c-10" src="images/segments-white/segment-white-67.png">'
images[227]='<img class="seg c-11" src="images/segments-white/segment-white-68.png">'
images[228]='<img class="seg c-11" src="images/segments-white/segment-white-69.png">'
images[229]='<img class="seg c-11" src="images/segments-white/segment-white-70.png">'
images[230]='<img class="seg c-12" src="images/segments-white/segment-white-71.png">'
images[231]='<img class="seg c-12" src="images/segments-white/segment-white-72.png">'
images[232]='<img class="seg c-12" src="images/segments-white/segment-white-73.png">'
images[233]='<img class="seg c-12" src="images/segments-white/segment-white-74.png">'
images[234]='<img class="seg c-12" src="images/segments-white/segment-white-75.png">'
images[235]='<img class="seg c-12" src="images/segments-white/segment-white-76.png">'
images[236]='<img class="seg c-12" src="images/segments-white/segment-white-77.png">'
images[237]='<img class="seg c-12" src="images/segments-white/segment-white-78.png">'
images[238]='<img class="seg c-13" src="images/segments-white/segment-white-79.png">'
images[239]='<img class="seg c-13" src="images/segments-white/segment-white-80.png">'
images[240]='<img class="seg c-13" src="images/segments-white/segment-white-81.png">'
images[245]='<img class="seg c-14" src="images/segments-white/segment-white-82.png">'
images[246]='<img class="seg c-14" src="images/segments-white/segment-white-83.png">'
images[247]='<img class="seg c-14" src="images/segments-white/segment-white-84.png">'
images[248]='<img class="seg c-14" src="images/segments-white/segment-white-85.png">'
images[249]='<img class="seg c-14" src="images/segments-white/segment-white-86.png">'
images[250]='<img class="seg c-14" src="images/segments-white/segment-white-87.png">'
images[251]='<img class="seg c-14" src="images/segments-white/segment-white-88.png">'
images[252]='<img class="seg c-15" src="images/segments-white/segment-white-89.png">'
images[253]='<img class="seg c-15" src="images/segments-white/segment-white-90.png">'
images[254]='<img class="seg c-15" src="images/segments-white/segment-white-91.png">'
images[255]='<img class="seg c-15" src="images/segments-white/segment-white-92.png">'
images[256]='<img class="seg c-15" src="images/segments-white/segment-white-93.png">'

console.log(images.length);

var i=0;
var random

window.onload = function(){
	while (i<images.length){
		random = Math.floor(Math.random()*images.length)
		if (images[random]!="selected"){
			let aaa = document.getElementById("grid-container");
			aaa.innerHTML += (images[random]);
			images[random]="selected"
			i++
		}
	}
}

      $('.scroll-wrapper').scrollLeft( 3000 );
      $('.scroll-wrapper').scrollTop( 3000 );

      // not needed for functionality — but for refereence, 
      // you can output scroll positions
      $('.scroll-wrapper').scroll(function(){
        let x = $(this).scrollLeft();
        let y = $(this).scrollTop();
        console.log(x, y);
      });

$.getJSON("info.json")
      .done(function( data ) {
         console.log(data);

      // $('.c-1').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-1"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   });   

      // $('.c-2').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-2"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-3').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-3"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-4').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-4"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-5').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-5"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-6').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-6"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-7').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-7"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-8').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-8"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-9').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-9"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-10').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-10"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-11').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-11"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-12').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-12"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-13').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-13"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-14').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-14"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-15').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-15"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-16').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-16"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-17').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-17"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-18').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-18"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-19').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-19"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-20').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-20"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-21').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-21"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-22').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-22"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-23').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-23"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-24').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-24"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-25').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-25"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      // $('.c-26').click(function(){
      //       $('.info-panel').toggle();

      //       let info = data["character-26"];
      //       console.log(info);

      //       let character = info["character"]; //info.Character
      //       $('.character').html(character);
            
      //       let segments = info["segment"];
      //       $('.segments').html(segments);

      //       let date = info["date"];
      //       $('.date').html(date);

      //       let location = info["location"];
      //       $('.location').html(location);

      //       let item= info["item"];
      //       $('.item').html(item);
      //   }); 

      $('.c-1').click(function(){
            let info = data["character-1"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        }); 

        $('.c-2').click(function(){
            let info = data["character-2"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-3').click(function(){
            let info = data["character-3"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-4').click(function(){
            let info = data["character-4"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-5').click(function(){
            let info = data["character-5"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });  

        $('.c-6').click(function(){
            let info = data["character-6"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-7').click(function(){
            let info = data["character-7"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });
 
        $('.c-8').click(function(){
            let info = data["character-8"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-9').click(function(){
            let info = data["character-9"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-10').click(function(){
            let info = data["character-10"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-11').click(function(){
            let info = data["character-11"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-12').click(function(){
            let info = data["character-12"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-13').click(function(){
            let info = data["character-13"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-14').click(function(){
            let info = data["character-14"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-15').click(function(){
            let info = data["character-15"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-16').click(function(){
            let info = data["character-16"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-17').click(function(){
            let info = data["character-17"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-18').click(function(){
            let info = data["character-18"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-19').click(function(){
            let info = data["character-19"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-20').click(function(){
            let info = data["character-20"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-21').click(function(){
            let info = data["character-21"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-22').click(function(){
            let info = data["character-22"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-23').click(function(){
            let info = data["character-23"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-24').click(function(){
            let info = data["character-24"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-25').click(function(){
            let info = data["character-25"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

        $('.c-26').click(function(){
            let info = data["character-26"];
            console.log(info);

            let character = info["character"]; //info.Character
            $('.character').html(character);
            
            let segments = info["segment"];
            $('.segments').html(segments);

            let date = info["date"];
            $('.date').html(date);

            let location = info["location"];
            $('.location').html(location);

            let item= info["item"];
            $('.item').html(item);

            if( $(this).hasClass('active') ){
              $('.info-panel').removeClass('show');

            }else{
              $('.active').removeClass('active');
              
              //populate panel with new info
              $('.character').html(character);
              $('.segments').html(segments);
              $('.date').html(date);
              $('.location').html(location);
              $('.item').html(item);

              //open up panel
              $('.info-panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

      });

}); 

