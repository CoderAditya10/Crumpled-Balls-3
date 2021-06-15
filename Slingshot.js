class slingshot {
    constructor (bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 8,
            stiffness: 0.1
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB;
        
            stroke(48,22,8);
            if(bodyA.x < 220) {
                strokeWeight(3);
                //line(bodyA.x + 25, bodyA.y, pointB.x -10, pointB.y);
                line(bodyA.x + 25, bodyA.y, pointB.x + 20, pointB.y - 3);
            }

        //strokeWeight(3);
        }
    }
}