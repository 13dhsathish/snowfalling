class Snow{
    constructor(x, y){
        var options = {
            restitution:0.2,
            friction:0.1
        
        }
        this.snow = Bodies.circle(x, y, 20, options);
        this.image = loadImage("snow4.webp");
        World.add(world, this.snow)

    }
    update(){
        if(this.snow.position.y > height){
            Matter.body.setPosition(this.snow, {x : random(0, 1000), y : random(0, 1000)});
        }
    }
    display(){
        fill(255);
        imageMode(CENTER);
        image(this.image, this.snow.position.x, this.snow.position.y, 20, 20);
    }
}