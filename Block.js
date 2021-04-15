class Block{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
            
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
    }


    display(){
        if(this.body.speed < 8){
            var pos2 = this.body.position;
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            translate(pos2.x, pos2.y);
            rectMode(CENTER);
            fill("yellow");
            rect(0,0,this.width,this.height);
            pop();

        }
        else{
            World.remove(world,this.body);
        }

    }
    
}