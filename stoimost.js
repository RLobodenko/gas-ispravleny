var button = document.getElementById('1');

function rasschitat(){
    
    var stoimost_gas_vvoda = document.getElementById('in1').value;
    var dlina_gas_vvoda = document.getElementById('in2').value;
      
  var dlina_pe = document.getElementById('in3').value;
     var dlina_stali = document.getElementById('in4').value;

     
    
    var stoimost_pe = stoimost_gas_vvoda * dlina_pe / dlina_gas_vvoda ;

   var stoimost_stali = stoimost_gas_vvoda - stoimost_pe;
   
    document.getElementById('out3').innerHTML = stoimost_pe.toFixed(2) + " руб";
        document.getElementById('out4').innerHTML = stoimost_stali.toFixed(2) + " руб";
   
    
}
