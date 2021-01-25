class Chain{
    constructor(body1,body2){
            //Create a constraint between the bird and the log6
        var options = {
            bodyA : body1,
            bodyB : body2,
            length : 100,
            stiffness: 0
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);


    }

    display(){
      //line(x1,y1,x2,y2);
        strokeWeight(3);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x,this.chain.bodyB.position.y )  
        
    }
}