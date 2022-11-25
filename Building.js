class Building{
  constructor()
  {
    this.height=10;
    this.position=1;    
    this.yPosition=390;
    this.width=40;
    this.floors=10;
    
    this.building_height=this.floors*12;
    
  }  
  display()
  {
   this.height=this.floors*8;
   this.yPosition=395-(this.height);
   
   this.xPosition=this.position*40;
   rect(this.xPosition,this.yPosition, this.width, this.height); 
  }  
  
}
