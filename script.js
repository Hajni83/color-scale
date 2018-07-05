$(function() {
    var canvas=document.getElementById('MyCanvas');
    var context=canvas.getContext('2d');
    var r = 199;
    var b = 120;
    for (i=0;i<6;i++){
      
      for (j=0;j<6;j++){
        context.fillStyle='rgb(' + r + ',79,'+ b +')';
        r-=7;
        context.fillRect(j*40+40,40+i*40,38,38);
      }
      b+=15;
  }
  });