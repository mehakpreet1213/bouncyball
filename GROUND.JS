class GROUND{
    //properties
    constructor(x,y,width, height){
        var options1={
            isStatic: true
        }
    this.body= Bodies.rectangle(x,y,width,height, options1);
    World.add(world,this.body);

    this.w=width;
    this.h=height;
    }

    //function
    display()
    {
        fill('green');
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.w,this.h);

    } 
}