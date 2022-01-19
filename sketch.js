let particles_a = [];
let particles_b = [];
let particles_c = [];
let nums = 550;
let noiseScale = 400;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(40, 12, 125);
	for(var i = 0; i < nums; i++){
		particles_a[i] = new Particle(random(10, width),random(10,height));
		particles_b[i] = new Particle(random(50, width),random(50,height));
		particles_c[i] = new Particle(random(20, width),random(20,height));
	}
}

function draw(){
	noStroke();
	smooth();
		for(var i = 0; i < nums; i++){
		var radius = map(i,0,nums,1,4);
		var alpha = map(i,0,nums,0,250);

		fill(66,192,239,alpha);
		particles_a[i].move();
		particles_a[i].display(radius);
		particles_a[i].checkEdge();

		fill(212,91,157,alpha);
		particles_b[i].move();
		particles_b[i].display(radius);
		particles_b[i].checkEdge();

		fill(255,255,255,alpha);
		particles_c[i].move();
		particles_c[i].display(radius);
		particles_c[i].checkEdge();
	}  
}


function Particle(x, y){
	this.dir = createVector(1, 255);
	this.vel = createVector(1, 100);
	this.pos = createVector(x, y);
	this.speed = 0.6;

	this.move = function(){
		var angle = noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*TWO_PI*noiseScale;
		this.dir.x = cos(angle);
		this.dir.y = sin(angle);
		this.vel = this.dir.copy();
		this.vel.mult(this.speed);
		this.pos.add(this.vel);
	}

	this.checkEdge = function(){
		if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
			this.pos.x = random(10, width);
			this.pos.y = random(10, height);
		}
	}

	this.display = function(r){
		ellipse(this.pos.x, this.pos.y, r, r);
	}
}