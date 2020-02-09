$( document ).ready(function() {
 
  console.log( "ready!" );

  var demoChildren = $('.demo-container-children');
  var image = $('.myImg');
  

  demoChildren.hover(function(){
    // $('.myImg').css({opacity: '1'});
    $(this).find(image).css({opacity: '1', 'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'});
    //console.log('Hover on');


  }, function(){
    //$('.myImg').css({opacity: '0.5'})
    //console.log('Hover off');
    $(this).find(image).css({opacity: '0.4', 'box-shadow': '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.09)'});
  });

  //set initial display none to solo logo
  //$('#solo-logo-container').css('display' , 'none');
  $('#whole-logo-container').removeClass('whole-logo-reveal');
  $('#whole-logo-container').removeClass('whole-logo-hide');


  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;  

    if(scroll > 30){
         

      console.log('Scroll Triggered');
      
      //add class
      $('#whole-logo-container').addClass('whole-logo-hide'); 
      $('#solo-logo-container').addClass('solo-logo-reveal'); 
      $('#nav-container').addClass('nav-animation-forward');

      //remove class
      $('#whole-logo-container').removeClass('whole-logo-reveal');
      $('#solo-logo-container').removeClass('solo-logo-hide');
      $('#nav-container').removeClass('nav-animation-backward');

      
     
   
    }
    console.log(scroll);
    
    if(scroll <= 30 && $('#whole-logo-container').hasClass('whole-logo-hide')){

  
      //add classes
      $('#whole-logo-container').addClass('whole-logo-reveal');
      $('#solo-logo-container').addClass('solo-logo-hide');
      $('#nav-container').addClass('nav-animation-backward');
      
      
      //remove classes
      $('#whole-logo-container').removeClass('whole-logo-hide');
      $('#nav-container').removeClass('nav-animation-forward');
    
      

      // setTimeout(function(){ 
        $('#solo-logo-container').css('display' , 'none'); 
      // }, 1000);

      
    }
   

    
  });



});



window.onload = function() {
  // Get the modal
  var modal = document.getElementById("myModal");

  //Put images into array/node list
  //Get the image and insert it inside the modal - use its "alt" text as a caption
  var imageArray = document.getElementsByClassName("myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  for (var i = 0; i < imageArray.length; i++) {
    imageArray[i].onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };
  }

  //if user clicks anywhere outside of modal.... close modal
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  // Get the <span> element that closes the modal
  var span = document.getElementById("close");

  //   When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  //determing scroll position
  //Shrink navbar based on this
  


  




};
