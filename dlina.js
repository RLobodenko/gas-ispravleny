var button = document.getElementById('1');

function rasschitat_priamoe_vgd(){
    
    var glybina_zalojenia = document.getElementById('in1').value;
    

     
    
    var dlina_vyhod_do_myfta = 3.87 - glybina_zalojenia ;
    
    var dlina_vyhod_do_predposlidni = document.getElementById('in2').value;
    
  var dlina_predposledni_do_myfta = dlina_vyhod_do_predposlidni - dlina_vyhod_do_myfta;
    var vyhod = document.getElementById('in3').value;
    
    var myfta = vyhod - dlina_vyhod_do_myfta;
    

    

    
   
    
    document.getElementById('out3').innerHTML = dlina_vyhod_do_myfta.toFixed(2) + " м";
    document.getElementById('out2').innerHTML = dlina_predposledni_do_myfta.toFixed(2) + " м";
    document.getElementById('out4').innerHTML = myfta.toFixed(2) + " м";
  

}


function rasschitat_izognytoe_vgd(){
    
    var glybina_zalojenia = document.getElementById('in4').value;
    

     
    
    var dlina_ot_vyhoda_do_myfta = 3.87 - glybina_zalojenia ;
    
    var dlina_vyhod_do_predposlidni = document.getElementById('in5').value;
    
 // var d = dlina_vyhod_do_predposlidni - dlina_ot_vyhoda_do_myfta;
    var vyhod = document.getElementById('in6').value;
    
  //  var j = vyhod - dlina_ot_vyhoda_do_myfta;
    
    var dlina_predposledni_do_kraini = document.getElementById('in7').value;
    
    var dlina_predposledni_do_myfta = dlina_ot_vyhoda_do_myfta - dlina_vyhod_do_predposlidni;
    
    var dlina_kraini_do_myfta = dlina_predposledni_do_kraini - dlina_predposledni_do_myfta;
    
    
    var myfta = vyhod - dlina_vyhod_do_predposlidni - dlina_predposledni_do_myfta;
    

    document.getElementById('out5').innerHTML = dlina_predposledni_do_myfta.toFixed(2) + " м";
    document.getElementById('out6').innerHTML = dlina_kraini_do_myfta.toFixed(2) + " м";
    document.getElementById('out7').innerHTML = myfta.toFixed(2) + " м";
}

