


var button = document.getElementById('1');





function rasschitat(){
    
    var dlina32 = document.getElementById('in7').value;
    var dlina34 = document.getElementById('in8').value;
      
  var dlina57 = document.getElementById('in9').value;
     var dlina63 = document.getElementById('in10').value;
 var dlina25 = document.getElementById('in6').value;
     
    
    var chislitel = 345.96 * dlina25 + 676 * dlina32 + 729 * dlina34 + 2500 * dlina57 + 2641.96 * dlina63;

var znamenatel = 18.6 * dlina25 + 26 * dlina32 + 27 * dlina34 + 50 * dlina57 + 51.4 * dlina63;
    
    var diametr = chislitel / znamenatel ;

 
            var dopyskaemoe_padenie_g1 = 20 / diametr;
            document.getElementById('out2').innerHTML = dopyskaemoe_padenie_g1.toFixed(2) + " кПа";
    
    var dopyskaemoe_padenie_g2 = 480 / diametr
    document.getElementById('out3').innerHTML = dopyskaemoe_padenie_g2.toFixed(2) + " кПа";
       
    }
 
  

     
   
    





