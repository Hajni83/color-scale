$(function() {
    var canvas=document.getElementById('MyCanvas');
    var context=canvas.getContext('2d');

     for (j=0;j<6;j++){
        context.fillRect(j*40,40,38,38);
    }

  });