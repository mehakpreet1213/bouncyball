class Box{
    //properties
    constructor(x,y,width, height){
        var options={
            restitution:0.2,
            density:1.0,
            friction:0.3
        }
    this.body= Bodies.rectangle(x,y,width,height, options);
    World.add(world,this.body);

    this.w=width;
    this.h=height;
    }

    //function
    display()
    {
        push();
        
        rotate(this.body.angle);
        translate(this.body.position.x, this.body.position.y);
        fill('yellow');
        rectMode(CENTER);
        rect(0,0, this.w,this.h);
        pop();
    } 
}