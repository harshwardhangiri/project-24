class Ball{
    constructor(x,y){
        var option= {
            'isStatic':false,
            'restitution': 0.3,
            'friction': 0.5,
           'density': 1.2
           }
           this.body=Bodies.circle(x, y,30,option) ;
           World.add(world,this.body);
    }

    display() {
          push ();
       translate (this.body.position.x,this.body.position.y);
       fill (239, 255, 99);
       ellipseMode(CENTER);
       ellipse(0,0,30);
       pop ();
    }

}