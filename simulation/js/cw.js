var tn=0;
var a,b,c=0;
var n=0;


$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});
// var dataSet=[[10,0,10.3,10.3,10,0,0.4,0.4,100,0,3.5,3.5],
			// [10,0,11,11,10,0,0.4,0.4,100,0,3.5,3.5],
			// [10,0,10,10,10,0,0.4,0.4,100,0,3.3,3.3],
			// [10,0,10.1,10.1,10,0,0.4,0.4,100,0,4.2,4.2],
			// [10,0,10.5,10.5,10,0,0.3,0.3,100,0,3.4,3.4],
			// [10,0,10.2,10.2,10,0,0.4,0.4,100,0,3.3,3.3],
			// [10,0,10.2,10.2,10,0,0.3,0.3,100,0,3.3,3.3],
			// [10,0,10.5,10.5,10,0,0.3,0.3,100,0,3.4,3.4],
			// [10,0,10.5,10.5,10,0,0.3,0.3,100,0,3.4,3.4],
			// [10,0,10.1,10.1,10,0,0.2,0.2,100,0,3.3,3.3],
			// [10,0,10.5,10.5,10,0,0.4,0.4,100,0,3.7,3.7],
			// [10,0,10,10,10,0,0.2,0.2,100,0,3.5,3.5],
			// [10,0,10.9,10.9,10,0,0.7,0.7,100,0,3.5,3.5]]

var dataSet=[[10.3,0.4,3.5],
			 [11,0.4,3.5],
			 [10,0.4,3.3],
			 [10.1,0.4,4.2],
			 [10.5,0.3,3.4],
			 [10.2,0.4,3.3],
			 [10.2,0.3,3.3],
			 [10.5,0.3,3.4],
			 [10.5,0.3,3.4],
			 [10.1,0.2,3.3],
			 [10.5,0.4,3.7],
			 [10,0.2,3.5],
			 [10.9,0.7,3.5]]
			 
// var normData=[0.0137,0.012818182,0.0141,0.013960396,0.013428571,0.013823529,0.013823529,0.013428571,0.013428571,0.013960396,0.013428571,0.0141,0.01293578
var normData=[0.0137,0.012818182,0.0141,0.013960396,0.013428571,0.013823529,0.013823529,0.013428571,0.013428571,0.013960396,0.013428571,0.0141,0.01293578
];

var clData=[15.04812233,14.09051455,14.499594,18.81135446,14.76149143,14.21528824,14.70547059,14.76149143,14.76149143,15.34610495,15.71384571,16.499538,12.84367706];

var p=Math.floor(Math.random()*(13));

function navNext()
{
	for(temp=0;temp<=20;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

var ca;
var questions=["Experiment is carried out by which</br> of the following method?",
			   "The normality of sodium chloride solution taken is",
			   "Which of the following indicator </br>is used in the experiment?",
			   "The Mohr's method can only be used in the</br> pH interval between 6.5 and 9.0?"];
				
var options2=[["Iodometric method","Mohr's method","Colorimetric method","Winkler's method"],//Mohr's method
			  ["0.005N","0.01N","0.0121N","0.0141N"],//0.0141N
			  ["Ferroin","Erichrome Black T","Potassium chromate","Phenolphthalein"],//Potassium chromate
			  ["True","False"]];//true

function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

function magic()
{
	if(simsubscreennum==1) //display heading
	{
		$("#1-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	
	if(simsubscreennum==2) //fill  burette
	{
		tn=22;
		step2();
	}
	
	if(simsubscreennum==3) //fill flask with NaCl
	{
		tn=3;
		step3();
	}
	
	if(simsubscreennum==4) //add indicator
	{
		tn=4;
		step4();
	}
	
	if(simsubscreennum==5) // titration
	{
		tn=5;
		a=0;
		step5();
	}
	if(simsubscreennum==6) //1st calculation
	{
		document.getElementById("59-1knob").style.visibility="hidden";
		document.getElementById("5p9-1").style.visibility="hidden";
		document.getElementById("5p9-3").style.visibility="hidden";
		
		document.getElementById("fin1").innerHTML=dataSet[p][0];
		document.getElementById("vol1").innerHTML=dataSet[p][0];
		
		document.getElementById("norm").onclick=function()
		{
			document.getElementById("NAgNO3").style.visibility="visible";
		}
		
		document.getElementById("check1").onclick=function()
		{
			document.getElementById("NAgNO3").style.visibility="hidden";
			if(!document.getElementById("NNaCl").value  || !document.getElementById("NNaCl").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				n = document.getElementById("NNaCl").value;
				
				if(n >= 0.012 && n <= 0.0141 )
				{
					document.getElementById("check1").style.visibility="hidden";
					document.getElementById("norm").style.visibility="hidden";
					document.getElementById("r1").style.visibility="visible";
					document.getElementById("nextButton").style.visibility="visible";
					document.getElementById("result1").style.visibility="hidden";
					document.getElementById("w1").style.visibility="hidden";
				}
				else
				{
					document.getElementById("result1").style.visibility="visible";
					document.getElementById("w1").style.visibility="visible";
				}
			}	
			document.getElementById("result1").onclick=function()
			{
				document.getElementById("NAgNO3").style.visibility="hidden";
				document.getElementById("display1").style.visibility="visible";
				document.getElementById("display1").innerHTML="Normality of AgNO<sub>3</sub> = "+normData[p].toFixed(4)+" N";
				document.getElementById("check1").style.visibility="hidden";
				document.getElementById("result1").style.visibility="hidden";
				document.getElementById("w1").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
				document.getElementById("norm").style.visibility="hidden";
				document.getElementById("display1").style="border:none; background-color:white; colour:black;";
				document.getElementById("display1").disabled="true";
			}
		}
		//document.getElementById("nextButton").style.visibility="visible";
	}
	
// Blank test	
	if(simsubscreennum==7)// second heading
	{
		document.getElementById("display1").style.visibility="hidden";
		document.getElementById("r1").style.visibility="hidden";
		$("#7-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	
	if(simsubscreennum==8)//filling burette
	{
		tn=88;
		step2();
	}
	
	if(simsubscreennum==9)//fill flask with distilled water
	{
		tn=9;
		document.getElementById("9name").style.visibility="visible";
		step3();
	}
	
	if(simsubscreennum==10) //add indicator
	{
		document.getElementById("9name").style.visibility="hidden";
		tn=10;
		step4();
	}
	
	if(simsubscreennum==11) //blank test titration
	{
		tn=11;
		a=1;
		step5();
	}
	
	if(simsubscreennum==12) //2st calculation
	{
		document.getElementById("119-1knob").style.visibility="hidden";
		document.getElementById("11p9-1").style.visibility="hidden";
		document.getElementById("11p9-3").style.visibility="hidden";
		
		document.getElementById("fin2").innerHTML=dataSet[p][1];
		document.getElementById("vol2").innerHTML=dataSet[p][1];
		
		document.getElementById("nextButton").style.visibility="visible";
	}
	
// Sample titration	
	if(simsubscreennum==13)// third heading
	{
		$("#13-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	
	if(simsubscreennum==14)//filling burette
	{
		tn=14;
		step2();
	}
	
	if(simsubscreennum==15)//fill flask with distilled water
	{
		tn=15;
		document.getElementById("15name").style.visibility="visible";
		step3();
	}
	
	if(simsubscreennum==16) //add indicator
	{
		document.getElementById("15name").style.visibility="hidden";
		tn=16;
		step4();
	}
	
	if(simsubscreennum==17) //blank test titration
	{
		tn=17;
		a=2;
		step5();
	}
	
	if(simsubscreennum==18) //3rd calculation
	{
		document.getElementById("179-1knob").style.visibility="hidden";
		document.getElementById("17p9-1").style.visibility="hidden";
		document.getElementById("17p9-3").style.visibility="hidden";
		
		document.getElementById("fin3").innerHTML=dataSet[p][2];
		document.getElementById("vol3").innerHTML=dataSet[p][2];
		
		document.getElementById("nextButton").style.visibility="visible";
	}
	
	if(simsubscreennum==19)
	{
		document.getElementById("1").innerHTML="Volume of AgNO<sub>3</sub> for sample titration = "+dataSet[p][2]+" ml";
		document.getElementById("2").innerHTML="Volume of AgNO<sub>3</sub> for blank titration = "+dataSet[p][1]+" ml";
		document.getElementById("3").innerHTML="Normality of AgNO<sub>3</sub> = "+normData[p].toFixed(4)+" ml";
		document.getElementById("4").innerHTML="Volume of sample taken = 100 ml";
		
		document.getElementById("cwform").onclick=function()
		{
			document.getElementById("clFormula").style.visibility="visible";
		}
		
		document.getElementById("check2").onclick=function()
		{
			document.getElementById("clFormula").style.visibility="hidden";
			if(!document.getElementById("cw").value  || !document.getElementById("cw").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				c = document.getElementById("cw").value;
				
				if(Math.round(c) == Math.round(clData[p]))
				{
					document.getElementById("check2").style.visibility="hidden";
					document.getElementById("cwform").style.visibility="hidden";
					document.getElementById("r2").style.visibility="visible";
					document.getElementById("result2").style.visibility="hidden";
					document.getElementById("w2").style.visibility="hidden";
					document.getElementById("nextButton").style.visibility="visible";
				}
				else
				{
					document.getElementById("result2").style.visibility="visible";
					document.getElementById("w2").style.visibility="visible";
				}
			}	
			document.getElementById("result2").onclick=function()
			{
				document.getElementById("clFormula").style.visibility="hidden";
				document.getElementById("display2").style.visibility="visible";
				document.getElementById("display2").innerHTML="Chloride (mg/l as Cl<sup>-</sup>) = "+clData[p].toFixed(2)+" mg/l";
				document.getElementById("check2").style.visibility="hidden";
				document.getElementById("result2").style.visibility="hidden";
				document.getElementById("w2").style.visibility="hidden";
				document.getElementById("cwform").style.visibility="hidden";
				document.getElementById("display2").style="border:none; background-color:white; colour:black;";
				document.getElementById("display2").disabled="true";
				document.getElementById("nextButton").style.visibility="visible";
			}
		}
		
	}
	if(simsubscreennum==20)
	{
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("display2").style.visibility="hidden";
		document.getElementById("check2").style.visibility="hidden";
		document.getElementById("result2").style.visibility="hidden";
		document.getElementById("w2").style.visibility="hidden";
		document.getElementById("cwform").style.visibility="hidden";
		document.getElementById("output2").style.visibility="hidden";
	}
}

function checkInference()
{
	var str;
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==1)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is &lt;250mg/l";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		if(clData[p].toFixed(3)<=250)
		{
			document.getElementById("infAns").innerHTML="According to BIS for drinking water, the acceptable range of chloride is less than 250mg/l. The water sample given has chloride level = "+clData[p].toFixed(2)+"mg/l, so it is in the BIS standards range for drinking water.";
		}
		else 
		{
			document.getElementById("infAns").innerHTML="According to BIS for drinking water, the acceptable range of chloride is less than 250mg/l. The water sample given has chloride level = "+clData[p].toFixed(2)+"mg/l, so it is not in the BIS standards range for drinking water.";
		}
		$("#infAns").fadeIn(750);
	},1000);
}

function step2()
{
	$("#"+tn+"-2").fadeIn(1500);
		setTimeout(function()
		{
		

		myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:300px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			document.getElementById(tn+"-2").onclick=function()
			{
				myStopFunction();
				document.getElementById(tn+"-2").onclick="";
				document.getElementById(tn+"-2").style.animation="moveFunnel 2s forwards";
				setTimeout(function()
				{
					document.getElementById(tn+"-3").style.visibility="visible";
					document.getElementById(tn+"-3Cap").style.visibility="visible";
					setTimeout(function()
					{
						myInt=setInterval(function(){animatearrow();},500);
						document.getElementById("arrow1").style="visibility:visible; position:absolute; left:559px; top:240px; height:30px; z-index:10;";
						document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
						document.getElementById("arrow1").style.msTransform="rotate(270deg)";
						document.getElementById("arrow1").style.transform="rotate(270deg)";
						document.getElementById(tn+"-3Cap").onclick=function()
						{
							myStopFunction();
							document.getElementById(tn+"-3Cap").onclick="";
							document.getElementById(tn+"-3Cap").style.animation="openNa2SO3Cap 2s forwards";
							setTimeout(function()
							{
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:350px; height:30px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
								document.getElementById("arrow1").style.msTransform="rotate(180deg)";
								document.getElementById("arrow1").style.transform="rotate(180deg)";
								document.getElementById(tn+"-3").onclick=function()
								{
									myStopFunction();
									document.getElementById(tn+"-3").onclick="";
									document.getElementById(tn+"-32").style.visibility="visible";
									document.getElementById(tn+"-3").style.visibility="hidden";
									document.getElementById(tn+"-32").style.animation="moveNa2SO3Bottle 1.5s forwards";
									setTimeout(function()
									{
										document.getElementById(tn+"-32").style="position:absolute; left:375px; top:32px; animation: rotateNa2SO3Bottle 1s forwards;";
										setTimeout(function()
										{
											document.getElementById(tn+"-2samp").style.visibility="visible";
											document.getElementById(tn+"-2samp").style.animation="sampFromFunnelUpDown 2s 7 ";
											setTimeout(function()
											{
												document.getElementById(tn+"-2samp2").style.visibility="visible";
												setTimeout(function()
												{
													document.getElementById(tn+"-2samp3").style.animation="whiteUp 5s forwards";
													setTimeout(function()
													{
														document.getElementById(tn+"-2samp3").style.visibility="hidden";
														document.getElementById(tn+"-2samp4").style.animation="sampFromFunnelUp 5s forwards";
														setTimeout(function()
														{
															document.getElementById(tn+"-2samp2").style.visibility="hidden";
															document.getElementById(tn+"-2samp").style.animation="sampFromFunnelDown2 1.5s forwards ";
															setTimeout(function()
															{
																document.getElementById(tn+"-2samp").style.visibility="hidden";
																document.getElementById(tn+"-2samp4").style="position:absolute; left:240px; top:185px;";
																document.getElementById(tn+"-2samp4").style.animation="sampFromFunnelUp2 1.5s forwards";
																document.getElementById(tn+"-32").style.animation="rotateNa2SO3Bottle2 1.5s forwards";
																setTimeout(function()
																{
																	document.getElementById(tn+"-32").style.animation="moveNa2SO3BottleBack 1.5s forwards";
																	setTimeout(function()
																	{
																		document.getElementById(tn+"-32").style.visibility="hidden";
																		document.getElementById(tn+"-3").style.visibility="visible";
																		
																		myInt=setInterval(function(){animatearrow();},500);
																		document.getElementById("arrow1").style="visibility:visible; position:absolute; left:644px; top:320px; height:30px; z-index:10;";
																		document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
																		document.getElementById("arrow1").style.msTransform="rotate(270deg)";
																		document.getElementById("arrow1").style.transform="rotate(270deg)";
																		document.getElementById(tn+"-3Cap").onclick=function()
																		{
																			myStopFunction();
																			document.getElementById(tn+"-3Cap").onclick="";
																			document.getElementById(tn+"-3Cap").style.animation="closeNa2SO3Cap 2s forwards";
																			setTimeout(function()
																			{
																				document.getElementById(tn+"-3Cap").style.visibility="hidden";
																				document.getElementById(tn+"-3").style.visibility="hidden";
																				
																				myInt=setInterval(function(){animatearrow();},500);
																				document.getElementById("arrow1").style="visibility:visible; position:absolute; left:420px; top:155px; height:30px; z-index:10;";
																				document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
																				document.getElementById("arrow1").style.msTransform="rotate(0deg)";
																				document.getElementById("arrow1").style.transform="rotate(0deg)";
																				document.getElementById(tn+"-2").onclick=function()
																				{
																					myStopFunction();
																					document.getElementById(tn+"-2").onclick="";
																					document.getElementById(tn+"-2").style.animation="moveFunnelBack 2s forwards";
																					setTimeout(function()
																					{
																						$("#"+tn+"-2").fadeOut(800);
																						setTimeout(function()
																						{
																							if(tn==22 || tn==14)
																							{
																								document.getElementById("nextButton").style.visibility="visible";
																							}
																							if(tn==88)
																							{
																								validateAnswer(0,1,"450px","200px");
																							}
																						},800);
																					},2100);
																				}
																			},2100);
																		}
																	},1600);
																},1000);
															},800);
														},5000);
													},4500);
												},800);
											},1000);
										},1100);
									},1550);
								}
							},2100);
						}
					},250);
				},2100);
			}
		},1500);
	
}

function step3()
{
	setTimeout(function()
			{
				document.getElementById(tn+"p3-1").style.visibility="visible";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:295px; top:190px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(220deg)"; 
		     // Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(220deg)"; 
		     // Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(220deg)";
				document.getElementById(tn+"-4").onclick=function()
				{
					myStopFunction();
					document.getElementById(tn+"-4").onclick="";
					document.getElementById(tn+"-4").style.visibility="hidden";
					document.getElementById(tn+"p3-1").style.visibility="hidden";
					document.getElementById(tn+"-41").style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById(tn+"-41").style.animation="moveGP1 1.5s forwards";
						setTimeout(function()
						{
							$("#"+tn+"-5bulb").fadeIn(1000);
							$("#"+tn+"-5up").fadeIn(1000);
							$("#"+tn+"-5down").fadeIn(1000);
							setTimeout(function()
							{
								document.getElementById(tn+"p3-2").style.visibility="visible";
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="position:absolute; visibility:visible; left:321px; top:300px; height:20px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								// Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								document.getElementById(tn+"-5up").onclick=function()
								{
									myStopFunction();
									document.getElementById(tn+"-5up").onclick="";
									document.getElementById(tn+"p3-2").style.visibility="hidden";
									$("#"+tn+"-5bulb").fadeOut(1500);
									$("#"+tn+"-5up").fadeOut(1500);
									$("#"+tn+"-5down").fadeOut(1500);
									document.getElementById(tn+"-41sw").style.visibility="visible";
									document.getElementById(tn+"-41sw").style.animation="h2so4Up 2s forwards";
									document.getElementById(tn+"-3").style.animation="h2so4Down 2s forwards";
									setTimeout(function()
									{
										document.getElementById(tn+"-41sw").style.visibility="hidden";
										document.getElementById(tn+"-41").style.visibility="hidden";
										document.getElementById(tn+"-42").style.visibility="visible";
									    													
													 myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:450px; top:230px; height: 35px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
													// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(180deg)";
													document.getElementById(tn+"-42").onclick=function()
													{  
														myStopFunction();
														document.getElementById(tn+"-42").onclick="";
														document.getElementById(tn+"-42").style.animation="moveGP3 3s forwards";
														setTimeout(function()
														{   
															$("#"+tn+"-5bulb").fadeIn(1500);
															$("#"+tn+"-5up").fadeIn(1500);
															$("#"+tn+"-5down").fadeIn(1500);
															document.getElementById(tn+"p3-2").style="visibility:visible; position:absolute; left:350px; top:100px; color:red; font-size:14px;";
															document.getElementById(tn+"p3-2").innerHTML="Press the down arrow on the bulb </br></br>to release the liquid";
															setTimeout(function()
															{
																document.getElementById(tn+"p3-2").style.visibility="visible";
																myInt=setInterval(function(){animatearrow();},500);
																document.getElementById("arrow1").style="position:absolute; visibility:visible; left:358px; top:330px; height:20px; z-index:10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
																// Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(90deg)";
																document.getElementById(tn+"-5down").onclick=function()
																{
																	myStopFunction();
																	document.getElementById(tn+"-5down").onclick="";
																	document.getElementById(tn+"p3-2").style.visibility="hidden";
																	$("#"+tn+"-5bulb").fadeOut(1000);
																	$("#"+tn+"-5up").fadeOut(1000);
																	$("#"+tn+"-5down").fadeOut(1000);
																	document.getElementById(tn+"-41").style="visibility:visible; position:absolute; left:76px; top:100px;";
																	document.getElementById(tn+"-43").style.visibility="visible";
																	
																	document.getElementById(tn+"-42").style.visibility="hidden";

																	document.getElementById(tn+"-43").style.animation="NaClDown 2s forwards";
																	setTimeout(function()
																	{
																	document.getElementById(tn+"-1samp1").style.animation="NaClUp 2s forwards";
																	setTimeout(function()
																	{
																		document.getElementById(tn+"-41").style.animation="movebackGP 1.5s forwards";
																		setTimeout(function()
																		{
																																						
																			$("#"+tn+"-41").fadeOut(1200);
																			setTimeout(function()
																					{
																						document.getElementById(tn+"-43").style.visibility="hidden";
																						if(tn==3 || tn==9)
																						{	
																							document.getElementById("nextButton").style.visibility="visible";
																						}
																						if(tn==15)
																						{
																							validateAnswer(3,0,"200px","125px");
																						}
																					},1400);
																			},1750);
																	},2300);
																	},200);
																}
															},1000);
														},3100);
													}
												//},1250);
														
										},2100);
								}
							},1100);
						},1600);
						
					},150);
				}
			},500);
}

function step4()
{
	$("#"+tn+"-4a").fadeIn(1500);
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:440px; top:290px; height:35px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			document.getElementById(tn+"-4a").onclick=function()
			{
				myStopFunction();
				document.getElementById(tn+"-4a").onclick="";
				document.getElementById(tn+"-4a").style.animation="moveDropper 1.5s forwards";
				setTimeout(function()
				{
					document.getElementById(tn+"-2a").style.animation="K2Cr2O4Down 1.5s forwards";
					document.getElementById(tn+"-2b").style.animation="K2Cr2O4Up 1.5s forwards";
					setTimeout(function()
					{
						$("#"+tn+"-4a").fadeOut(0);
						document.getElementById(tn+"-4b").style.visibility="visible";
						document.getElementById(tn+"-2b").style.visibility="hidden";//yellow colour
						myInt=setInterval(function(){animatearrow();},500);
						document.getElementById("arrow1").style="visibility:visible; position:absolute; left:510px; top:260px; height:35px; z-index:10;";
						document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
						document.getElementById("arrow1").style.msTransform="rotate(270deg)";
						document.getElementById("arrow1").style.transform="rotate(270deg)";
						document.getElementById(tn+"-4b").onclick=function()
						{
							myStopFunction();
							document.getElementById(tn+"-4b").onclick="";
							document.getElementById(tn+"-4b").style.animation="moveDropper2 2s forwards";
							setTimeout(function()
							{
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="visibility:visible; position:absolute; left:60px; top:220px; height:35px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
								document.getElementById("arrow1").style.msTransform="rotate(180deg)";
								document.getElementById("arrow1").style.transform="rotate(180deg)";
								document.getElementById(tn+"-4b").onclick=function()
								{
									myStopFunction();
									document.getElementById(tn+"-4b").onclick="";
									document.getElementById(tn+"-4a").style="visibility:visible; position:absolute; left:81px; top:150px;";
									document.getElementById(tn+"-2c").style.visibility="visible";
									document.getElementById(tn+"-4b").style.visibility="hidden";
									setTimeout(function()
									{
										document.getElementById(tn+"-2c").style.animation="K2Cr2O4Down2 12.5s forwards";
										document.getElementById(tn+"drop4-1").style.visibility="visible";
										document.getElementById(tn+"drop4-1").style.animation="dropK2Cr2O4 0.75s 11";
										setTimeout(function()
										{
											document.getElementById(tn+"-0").style.borderColor="yellow";
											document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(yellow ,#F8F8F8 5% )";
											setTimeout(function()
											{
												document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(yellow ,#F8F8F8 15% )";
												setTimeout(function()
												{
													document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(yellow ,#F8F8F8 25% )";
													setTimeout(function()
													{
														document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(yellow ,#F8F8F8 35% )";
														setTimeout(function()
														{
															document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(yellow ,#F8F8F8 45% )";
															setTimeout(function()
															{
																document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(yellow ,#F8F8F8 55% )";
																setTimeout(function()
																{
																	document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(yellow ,#F8F8F8 65% )";
																	setTimeout(function()
																	{
																		document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(yellow ,#F8F8F8 75% )";
																		setTimeout(function()
																		{
																			document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(yellow ,#F8F8F8 85% )";
																			setTimeout(function()
																			{	
																				document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(yellow,#F8F8F8 95%)";
																				setTimeout(function()
																				{	
																					document.getElementById(tn+"-0").style.backgroundImage="linear-gradient(yellow,yellow)";
																				
																					document.getElementById(tn+"drop4-1").style.visibility="hidden";
																					document.getElementById(tn+"-2c").style.visibility="hidden";
																					$("#"+tn+"-4a").fadeOut(200);
																					setTimeout(function()
																					{
																						if(tn==10 || tn==16)
																						{
																							document.getElementById("nextButton").style.visibility="visible";
																						}
																						if(tn==4)
																						{
																							validateAnswer(1,3,"200px","100px");
																						}
																					},250);
																				},600);
																			},750);
																		},750);
																	},750);
																},750);
															},750);
														},750);
													},750);
												},750);
											},750);
										},750);
									},200);
								}
							},2000);
						}
					},1500);

				},1750);
			}
		},1500);
}

function step5()
{
	setTimeout(function()
	{
		document.getElementById(tn+"p9-0a").style.visibility="visible";
		document.getElementById(tn+"p9-1").style.visibility="visible";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:225px; top:320px; height: 35px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(300deg)"; 
			// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(300deg)"; 
			// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(300deg)";
		document.getElementById(tn+"9-1knob").onclick=function()
		{
			myStopFunction();
			document.getElementById(tn+"9-1knob").onclick="";	
			document.getElementById(tn+"9-1knob").style.visibility="hidden";
			document.getElementById(tn+"9-1hand").style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById(tn+"p9-0a").style.visibility="hidden";
				document.getElementById(tn+"9-1hand").style.visibility="hidden";
				document.getElementById(tn+"9-1hand2").style.visibility="visible";
				document.getElementById(tn+"9-1stopper").style="position:absolute; left:153px; top:309.75px;";
				setTimeout(function()
				{
					document.getElementById(tn+"drop9-1").style.visibility="visible";
					document.getElementById(tn+"drop9-1").style.animation="drop2 0.75s 15";
					document.getElementById(tn+"9-1a").style.animation="Na2S2O3fromBurette1 10s forwards";
					setTimeout(function()
					{
						document.getElementById(tn+"drop9-2").style.visibility="visible";
						document.getElementById(tn+"drop9-2").style.animation="drop2 0.75s 15";
						setTimeout(function()
						{
							document.getElementById(tn+"9-3").style.animation="colourChange2 13s forwards";

							setTimeout(function()
							{
									document.getElementById(tn+"drop9-1").style.visibility="hidden";
									document.getElementById(tn+"drop9-2").style.visibility="hidden";
									// document.getElementById("9-3").style.backgroundColor="#FFFF99";
									document.getElementById(tn+"9-1hand").style.visibility="visible";
									document.getElementById(tn+"9-1hand2").style.visibility="hidden";
									//document.getElementById("p9-0b").style.visibility="hidden";
									document.getElementById(tn+"9-1stopper").style="position:absolute; left:150px; top:307.75px; ";
									setTimeout(function()
									{
										document.getElementById(tn+"9-1knob").style.visibility="visible";
										document.getElementById(tn+"9-1hand").style.visibility="hidden";
										setTimeout(function()
										{
											document.getElementById(tn+"p9-3").style.visibility="visible";
											document.getElementById(tn+"p9-3").innerHTML="Final burette reading = "+dataSet[p][a]+" ml";
											if(tn==5 || tn==17)
											{
												document.getElementById("nextButton").style.visibility="visible";
											}
											if(tn==11)
											{
												validateAnswer(2,2,"350px","300px");
											}
										},500);
									},750);
								//},1000);
							},12200);
						},250);
					},250);
				},100);
			},250);
		}
	},500);
}


	
function refresh()
{
	document.getElementById("22-2").style.animation="";
	document.getElementById("22-3Cap").style.animation=	"";
	document.getElementById("22-32").style.animation="";
	document.getElementById("22-2samp4").style.animation="";
	document.getElementById("22-2samp").style.animation="";
	document.getElementById("22-2samp2").style.animation="";
	document.getElementById("22-2samp3").style.animation="";
}