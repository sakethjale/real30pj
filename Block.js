class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visible=255;
      
      this.image=loadImage("block.png")
      World.add(world, this.body);
    }
    display(){
     push ();
      var angle = this.body.angle
      var pos= this.body.position
      if(this.body.speed<7 ){
        var angle = this.body.angle
        var pos= this.body.position
       // rotate(angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
     pop ();
      }
      else{
        World.remove(world,this.body);
        push ()
        this.visible=this.visible-4
        tint (255,this.visible)
      image (this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      pop ();
      }
      
    } 
}

    