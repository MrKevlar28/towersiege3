class Polygon{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2

        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.r = radius;
        
    }
    display(){
        
        var pos2 = this.body.position;
        push();
        translate(pos2.x, pos2.y);
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(0,0,this.r,this.r);
        pop();

    }
}