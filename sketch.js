let myClock;

function setup(){
	createCanvas(
		window.innerWidth,
		window.innerHeight
	);
	myClock = new MyClock();
	angleMode(DEGREES);
}

function draw(){
	background(0);
	//myClock.textRender();
	myClock.textRender12Hr();
	translate(width/2, height/2);
	rotate(-90);
	myClock.analogRender();
}

function MyClock(){

	this.textRender = function(){
		push();
		fill(250)
		textSize(32);
		let hr  = (hour()   < 10) ? ('0' + hour()  ) : hour();
		let min = (minute() < 10) ? ('0' + minute()) : minute();
		let sec = (second() < 10) ? ('0' + second()) : second();
		text(hr + ':' + min + ':' + sec, 
			 width/2 - 75, 
			 100);
		pop();
	}

	this.analogRender = function(){
		strokeWeight(8);
		noFill();
		
		push();
		let secondAngle = map(second(), 0, 60, 0, 360);
		stroke(255, 100, 150);
		arc(0, 0, 300, 300, 0, secondAngle);
		rotate(secondAngle);
		line(0, 0, 100, 0);
		pop();


		push();
		let minuteAngle = map(minute(), 0, 60, 0, 360);
		stroke(150, 100, 255);
		arc(0, 0, 280, 280, 0, minuteAngle);
		rotate(minuteAngle);
		line(0, 0, 75, 0);
		pop();


	   push();
	   stroke(150, 255, 100);
	   let hourAngle = map(hour() % 12, 0, 12, 0, 360);
	   arc(0, 0, 260, 260, 0, hourAngle);
	   rotate(hourAngle);
	   line(0, 0, 50, 0);
	   pop();
	}

	this.textRender12Hr = function(){
		push();
		fill(250)
		textSize(32);
		let h = hour();
		let hrTemp = h %  12;
		let t12 = (h < 12) ? 'AM' : 'PM';
		let hr  = (h   < 10) ? ('0' + h  ) : h;
		let min = (minute() < 10) ? ('0' + minute()) : minute();
		let sec = (second() < 10) ? ('0' + second()) : second();
		text(hrTemp + ':' + min + ':' + sec + ' ' + t12, 
			 width/2 - 75, 
			 100);
		pop();
	}
}