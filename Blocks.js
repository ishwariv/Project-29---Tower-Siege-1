class Block{
    constructor(x, y, width, height){
        var options = {
            restitution : 0.4,
            isStatic:true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
      }

    display()
    {
    push();
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
    }
    
};