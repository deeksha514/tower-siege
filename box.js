class Box {
    constructor(x,y,w,h){

        var options={
            isStatic:true
        }

        this.w=w;
        this.h=h;
        this.x=x;
        this.y=y;
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body);
    }
    
    display(){
        var BoxPos=this.body.position; 
        push();
        translate(BoxPos.x,BoxPos.y);
        rectMode(CENTER);
        fill(255,255,0);
        strokeWeight(4);
        rect(0,0,this.w,this.h);
        pop();
    }
}