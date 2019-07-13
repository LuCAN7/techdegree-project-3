
$( document ).ready(function(e) {
  $('input#name').focus();
  // e.preventDefault();

  /*
  Wrote everything with very few JQuery functions but read through the Study Guide
  and realized that i was not using certain functions. This is the reason why the code is 
  a litte messy with Vanilla JS and JQuery methods. Just hoping to get this completed and pass.
  */

  const jobRole = document.getElementById('other-title');
  const selectJob = document.querySelector('#title');
  // Hide 'Other' text input 
  $(jobRole).hide();
  // Event listener on 'change' to job role
  $(selectJob).on('change', function(){
    if ( selectJob.selectedIndex === 5 ) {
      // show() input if 'other' is selected else hide()
      $(jobRole).show();
    } else { 
      $(jobRole).hide();
    }
  });

  const selectDesign = document.querySelector('#design');
  const selectColor = document.querySelector('#color');
  // Hide Color options if design isnt selected
  if( selectDesign.selectedIndex === 0 ){
    for (let i = 0; i < selectColor.options.length; i++) {
        $(selectColor.options).hide();
    } 
  } 
  // Hide or Show color option based on design selction
  $(selectDesign).change(function (e) { 
      
    let designSelected =  $( "select#design option:checked" ).val();
    let colorSelected =  $( "select#design option:checked" ).val();
   
    $(selectDesign[0]).hide();
    if( selectDesign.selectedIndex === 0 ){
      for (let i = 0; i < selectColor.options.length; i++) {
          $(selectColor.options).hide();
      } 
    } else {
        for (let i = 0; i < selectColor.options.length; i++) {
          $(selectColor.options).show();
        }    
    }
    
    if ( designSelected === 'js puns' ) {
      $(selectColor.options[1]).show();
      $(selectColor.options[2]).show();
      $(selectColor.options[3]).show();
      $(selectColor.options[4]).hide();
      $(selectColor.options[5]).hide();
      $(selectColor.options[6]).hide();
    }
    
    if ( designSelected === 'heart js' ) {
      $(selectColor.options[1]).hide();
      $(selectColor.options[2]).hide();
      $(selectColor.options[3]).hide();
      $(selectColor.options[4]).show();
      $(selectColor.options[5]).show();
      $(selectColor.options[6]).show();
    }
  });

  const selectActivity = document.querySelectorAll('input[type="checkbox"');
  const activityLabel = document.querySelectorAll('.activities label');
  const activityTotal = document.createElement('div');
  const regExCost = /\d{3}/g;
  // Set attribute on #ID, append to DIV and then hide 
  $(activityTotal).attr('id',"activity-total" );
  $('.activities').append(activityTotal);
  $(activityTotal).hide();
  let costTotal = 0;

  $(selectActivity).change(function (e) {  
      // Sum cost of activitites selected
      if (e.currentTarget.checked) {
        // Parse the integer in checkbox label & add/show value to activityToal DIV 
        let cost = parseInt(e.target.parentNode.innerText.match(regExCost));
        costTotal += cost;
        $(activityTotal).text(`TOTAL: $${costTotal}`);
        $(activityTotal).show();  
      } else { 
        //  Parse the integer in checkbox label & minus/show value to activityToal DIV 
        let cost = parseInt(e.target.parentNode.innerText.match(regExCost));
        costTotal -= cost;
        $(activityTotal).text(`TOTAL: $${costTotal}`);          
      }
     
      // Disable and/or Enable activities based on schedule
      if (selectActivity[1].checked) {
        $(activityLabel[3]).css('color', 'grey');
        $(selectActivity[3]).attr("disabled", true);
      } else {
        $(activityLabel[3]).css('color', 'black');
        $(selectActivity[3]).attr("disabled", false);
      }

      if (selectActivity[3].checked) {
        $(activityLabel[1]).css('color', 'grey');
        $(selectActivity[1]).attr("disabled", true);
      } else {
        $(activityLabel[1]).css('color', 'black');
        $(selectActivity[1]).attr("disabled", false);
      }
      
      if (selectActivity[2].checked) {
        $(activityLabel[4]).css('color', 'grey');
        $(selectActivity[4]).attr("disabled", true); 
      }  else {
        $(activityLabel[4]).css('color', 'black');
        $(selectActivity[4]).attr("disabled", false);
      }

      if (selectActivity[4].checked) {
        $(activityLabel[2]).css('color', 'grey');
        $(selectActivity[2]).attr("disabled", true);      
      } else {
        $(activityLabel[2]).css('color', 'black');
        $(selectActivity[2]).attr("disabled", false);
      }   
  });

  const payment = document.querySelector('#payment');
  const creditCard = document.querySelector('#credit-card');
  const payPal = document.querySelector('#paypal');
  const bitCoin = document.querySelector('#bitcoin');

  $(payPal).hide();
  $(bitCoin).hide();
  
  $(payment).change(function (e) { 
  // Hide payment option index 0('Select Payment Method')
  $(payment[0]).hide();
  // Show payPal payment and Hide other options
  if( payment.selectedIndex === 2){ 
    $(payPal).show();
    $(bitCoin).hide();
    $(creditCard).hide();
    // Show bitCoin payment and Hide other options
  } else if ( payment.selectedIndex === 3){
    $(bitCoin).show();
    $(payPal).hide();
    $(creditCard).hide();
    // Show creditCard pament option by default
  } else { 
    $(creditCard).show();
    $(payPal).hide();
    $(bitCoin).hide();
  }
  
  });

  const getName = function() {
    // Remove DIV with class name '.error-name' if created
    $('.error-name').remove();
    const nameInput = $('#name').val();
    const errorDiv = document.createElement('div');
    // Check name input string length. Add text, attribute & append to DIV
    if (nameInput.length < 1) {
      $('#name').css('borderColor', 'red');
      $(errorDiv).text('This field is required');
      $(errorDiv).attr('class', 'error-name');
      $('label[for="name"]').append(errorDiv);
      return false;
    } else {
      $('#name').css('borderColor', 'lightgrey');
      // bg color = #bod3e2
      return true;
     }
  }
  
  const getEmail = function() {
    $('.error-email').remove();
    const emailInput = $('input#email').val();
    const errorDiv = document.createElement('div');
        
    if (emailInput.length < 1) {
      $('#email').css('borderColor', 'red');
      $(errorDiv).text('This field is required');
      $(errorDiv).attr('class', 'error-email');
      $('label[for="email"]').append(errorDiv);
      return false;
    } else {
      // const emailValidation = /^[A-Z0-9][A-Z0-9._%+-]{0,20}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      const emailValidation = /[a-z0-9]+@[a-z0-9]+.[a-z]+$/i;
      const validEmail = emailValidation.test(emailInput);
      
      $('input#email').css('borderColor', 'lightgrey');    
      if (!validEmail) {
        $('#email').css('borderColor', 'red');
        $(errorDiv).text('Please enter a valid email');
        return false;
      }
      $(errorDiv).remove();
      return true;
    }
  } 

  const getActivity = function() {
    $('.error-activity').remove();
    const errorDiv = document.createElement('div');
    
    if($('input[type="checkbox"]').is(':checked')){
        return true;  
    } else {
      $(errorDiv).text('Please check at least one Activity');
      $(errorDiv).attr('class','error-activity' );
      $('.activities').append(errorDiv); 
      return false;
      }  
  } 

  const getCreditCard = function() {
    $('.error-card').remove();
    const cardInput = $('input#cc-num').val();
    const errorDiv = document.createElement('div');
    $(errorDiv).attr('class','error-card');
    $('.col-6').append(errorDiv); 
    if (cardInput.length < 1) {
      $('input#cc-num').css('borderColor', 'red');
      $(errorDiv).text('Please enter a credit card number');
      return false;
    } else if (cardInput.length < 10) {
      $('input#cc-num').css('borderColor', 'red');
      $(errorDiv).text('Must be between 13-16 numbers');
      if(isNaN(cardInput)){
        $(errorDiv).text('Not a valid number');
      } 
      return false;
    } else { 
      $('input#cc-num').css('borderColor', 'lightgrey');
      return true;
    }
  } 

  const getZip = function() {
    $('.error-zip').remove();
    const zipInput = $('input#zip').val();
    const errorDiv = document.createElement('div');
    
    if (zipInput.length < 5) {
      $('input#zip').css('borderColor', 'red');
      $(errorDiv).text('ZIP must be 5 characters');
      $(errorDiv).attr('class','error-card');
      $('.col-6').append(errorDiv); 
      return false;
    } else { 
      $('input#zip').css('borderColor', 'lightgrey');
      return true;
    } 
  }

  const getCVV = function() {
    $('.error-cvv').remove();
    const cvvInput = $('input#cvv').val();
    const errorDiv = document.createElement('div');
    
    if (cvvInput.length < 3) {
      $('input#cvv').css('border-color', 'red');
      $(errorDiv).attr('class','error-card');
      $(errorDiv).text('CVV must be 3 characters');
      $('.col-6').append(errorDiv); 
      return false;
    } else { 
      $('input#cvv').css('borderColor', 'lightgrey');
      return true;
    } 
  }
      
  const validateAll = function (e) {  
    if(getName && getEmail && getActivity){
      getName();
      getEmail();
      getActivity();   
      if(payment.selectedIndex === 1){
        getCreditCard();
        getZip();
        getCVV();
      }
      return true;
    } else {
      return false;
    }
  }
  
  $('form').on('submit', function(e) {
    e.preventDefault();
    validateAll();
    // console.log(!validateAll());
    if(!validateAll){ 
      e.preventDefault();
    }
    console.log('Submitted...');
  });

});