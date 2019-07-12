
$( document ).ready(function(e) {
  $('input#name').focus();
  // e.preventDefault();

  /*
  Wrote everything with very few JQuery functions but read through the Study Guide
  and realized that i was not using certain functions. THis is the reason why the code is 
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
  
  $(activityTotal).attr('id',"activity-total" );
  $('.activities').append(activityTotal);
  // activityTotal.style.display = 'none';
  $(activityTotal).hide();
  let costTotal = 0;

  $(selectActivity).change(function (e) { 
    
      // Sum cost of activitites selected
      if (e.currentTarget.checked) {
        //
          let cost = parseInt(e.target.parentNode.innerText.match(regExCost));
          costTotal += cost;
          $(activityTotal).text(`TOTAL: $${costTotal}`);
          // activityTotal.style.display = 'block';
          $(activityTotal).show();
        
      } else { 
          // 
          let cost = parseInt(e.target.parentNode.innerText.match(regExCost));
          costTotal -= cost;
          $(activityTotal).text(`TOTAL: $${costTotal}`);
                       
      }
      // Disable and/or Enable activities based on schedules
      if (selectActivity[1].checked) {
        // ActivityLabel[3].style.color = "grey";
        $(activityLabel[3]).css('color', 'grey');
        $(selectActivity[3]).attr("disabled", true);
        
      } else if (selectActivity[3].checked) {
        
        $(activityLabel[1]).css('color', 'grey');
        $(selectActivity[1]).attr("disabled", true);

      } else if (selectActivity[2].checked) {

        $(activityLabel[4]).css('color', 'grey');
        $(selectActivity[4]).attr("disabled", true);
        
      } else if (selectActivity[4].checked) {
        
        $(activityLabel[2]).css('color', 'grey');
        $(selectActivity[2]).attr("disabled", true);      
      
      } else if (selectActivity[1].checked && selectActivity[2].checked) {
        $(activityLabel[3]).css('color', 'grey');
        $(selectActivity[3]).attr("disabled", true);
        $(activityLabel[4]).css('color', 'grey');
        $(selectActivity[4]).attr("disabled", true);        
        
      } else if (selectActivity[3].checked && selectActivity[4].checked) {
        $(activityLabel[1]).css('color', 'grey');
        $(selectActivity[1]).attr("disabled", true);
        $(activityLabel[2]).css('color', 'grey');
        $(selectActivity[2]).attr("disabled", true); 
        
      } else { 
        $(activityLabel[1]).css('color', 'black');
        $(selectActivity[1]).attr("disabled", false);
        $(activityLabel[2]).css('color', 'black');
        $(selectActivity[2]).attr("disabled", false);
        $(activityLabel[3]).css('color', 'black');
        $(selectActivity[3]).attr("disabled", false);
        $(activityLabel[4]).css('color', 'black');
        $(selectActivity[4]).attr("disabled", false);
       
      }

  });

  const payment = document.querySelector('#payment');
  const creditCard = document.querySelector('#credit-card');
  const payPal = document.querySelector('#paypal');
  const bitCoin = document.querySelector('#bitcoin');

  $(payPal).hide();
  $(bitCoin).hide();
  
  $(payment).change(function (e) { 

  $(payment[0]).hide();
  if( payment.selectedIndex === 2){ 
    $(payPal).show();
    $(bitCoin).hide();
    $(creditCard).hide();
    
  } else if ( payment.selectedIndex === 3){
    $(bitCoin).show();
    $(payPal).hide();
    $(creditCard).hide();
  } else { 
    $(creditCard).show();
    $(payPal).hide();
    $(bitCoin).hide();
  }
  
  });

  const getName = function() {
    $('.error-name').remove();
    const nameInput = $('#name').val();
    const errorDiv1 = document.createElement('div');
    $(errorDiv1).text('This field is required');
    $(errorDiv1).attr('class', 'error-name');
    $('label[for="name"]').append(errorDiv1);
   
    if (nameInput.length < 1) {
      $('#name').css('borderColor', 'red');
      return false;
    } else {
      $('#name').css('borderColor', 'lightgrey');
      // bg color = #bod3e2
      $(errorDiv1).remove();
      return true;
     }
  }
  
  const getEmail = function() {
    $('.error-email').remove();
    const emailInput = $('input#email').val();
    const errorDiv2 = document.createElement('div');
    $(errorDiv2).text('This field is required');
    $(errorDiv2).attr('class', 'error-email');
    $('label[for="email"]').append(errorDiv2);
    
    if (emailInput.length < 1) {
      $('#email').css('borderColor', 'red');
      return false;
    } else {
      // const emailValidation = /^[A-Z0-9][A-Z0-9._%+-]{0,20}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      const emailValidation = /[a-z0-9]+@[a-z0-9]+.[a-z]+$/i;
      const validEmail = emailValidation.test(emailInput);
      
      $('input#email').css('borderColor', 'lightgrey');    
      if (!validEmail) {
        $('#email').css('borderColor', 'red');
        $(errorDiv2).text('Please enter a valid email');
        return false;
      }
      $(errorDiv2).remove();
      return true;
    }
  } 
  
  const getActivity = function() {
    // $('#error').remove();
    const errorDiv2 = document.createElement('div');
    $(errorDiv2).attr('class','error' );
    $(errorDiv2).attr('id','error' );
    $('#error').remove();
    
    if($('input[type="checkbox"]').not(':checked')){
      $(errorDiv2).css('color', 'red');
      $(errorDiv2).html('<span>Please check at least one Activity</span>');
      $('.activities').append(errorDiv2);   
      return false;
    } else {
    //  if($('input[type="checkbox"]').is(':checked')) {
      
      $('.error').remove();
      return true;  
    }  
  } 

  const getCreditCard = function() {
    const cardInput = $('input#cc-num').val();
    const errorDiv3 = document.createElement('div');
    $('.error').remove();
    $(errorDiv3).remove();
    if (isNaN(cardInput) && cardInput.length < 1) {
      $('input#cc-num').css('border-color', 'red');
      $('input#cc-num').after('<span class="error">Please enter a credit card number</span>');
      return false;
    } else if (isNaN(cardInput) && cardInput.length < 10) {
      $('input#cc-num').css('border-color', 'red');
      $('input#cc-num').after('<span class="error">CC# must be 13-16 characters</span>');
      return false;
    } else { 
      $('input#cc-num').css('border-color', 'lightgrey');
      return true;
    }
  } 

  const getZip = function() {
    const zipInput = $('input#zip').val();
    const errorDiv4 = document.createElement('div');
    $('.error').remove();
    $(errorDiv4).remove();
    if (zipInput.length < 5) {
      $('input#zip').css('borderColor', 'red');
      // $('input#cc-num').after('<span class="error">All fields is required</span>');
      $('input#zip').after('<span class="error">ZIP must be 5 characters</span>');
      
      return false;
    } else { 
      $('input#zip').css('borderColor', 'lightgrey');
      
      return true;
    } 
  }

  const getCVV = function() {
    const cvvInput = $('input#cvv').val();
    const errorDiv5 = document.createElement('div');
    
    $('.error').remove();
    $(errorDiv5).remove();
    if (cvvInput.length < 3) {
      $('input#cvv').css('border-color', 'red');
      // $('input#cc-num').after('<span class="error">All fields is required</span>');
      $('input#cvv').after('<span class="error">CVV must be 3 characters</span>');
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
        // getCreditCard();
        // getCVV();
        // getZip();
      }
    } else {
      return false;
    }
    return true;
  }
  
  $('form').submit(function(e) {
    e.preventDefault();
    console.log('Submitted...');
    validateAll();
    if(!validateAll){ 
      e.preventDefault();
    }
  });

});