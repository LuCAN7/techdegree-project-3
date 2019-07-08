
$( document ).ready(function(e) {
  $('input#name').focus();
  // e.preventDefault();

  const jobRole = document.getElementById('other-title');
  const selectJob = document.querySelector('#title');
  // Hide 'Other' text input 

  $(jobRole).hide();
  // Event listener on 'change' to job role
  selectJob.addEventListener('change', function(){
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
      // e.preventDefault();
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
    
    if ( selectDesign.selectedIndex === 1 ) {
      $(selectColor.options[1]).show();
      $(selectColor.options[2]).show();
      $(selectColor.options[3]).show();
      $(selectColor.options[4]).hide();
      $(selectColor.options[5]).hide();
      $(selectColor.options[6]).hide();
    }
    
    if ( selectDesign.selectedIndex === 2 ) {
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
  activityTotal.style.display = 'none';
  let costTotal = 0;

  $(selectActivity).change(function (e) { 
    // e.preventDefault(); 
      // Sum cost of activitites selected
      if (e.currentTarget.checked) {
        //
          let cost = parseInt(e.target.parentNode.innerText.match(regExCost));
          costTotal += cost;
          $(activityTotal).text(`TOTAL: $${costTotal}`);
          activityTotal.style.display = 'block';
          console.log(costTotal); 
      } else { 
          // 
          let cost = parseInt(e.target.parentNode.innerText.match(regExCost));
          costTotal -= cost;
          $(activityTotal).text(`TOTAL: $${costTotal}`);
          console.log(costTotal);
                
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

  payPal.style.display = 'none';
  bitCoin.style.display = 'none';

  $(payment).change(function (e) { 
  // e.preventDefault();
  $(payment[0]).hide();
  
  if( payment.selectedIndex === 2){ 
    // console.log();
    payPal.style.display = 'block';
    bitCoin.style.display = 'none';
    creditCard.style.display = 'none';
    
  } else if ( payment.selectedIndex === 3){
    bitCoin.style.display = 'block';
    payPal.style.display = 'none';
    creditCard.style.display = 'none';

  } else { 
    creditCard.style.display = 'block';
  }
  
  });
  
  

  const registerButton = document.querySelector('button[type="submit"]');

  $('form').submit(function(e) {
  
    // const cardNumber = document.querySelector('#cc-num');
    const nameValidation = /^[a-zA-Z]+$/i;
    const emailValidation = /[a-z0-9]+@[a-z0-9]+.[a-z]+$/i;
    //  /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
    const activityValidation = false;
    const cardValidation = /\d{13}/;
    const zipValidation = /\d{5}/;
    const cvvValidation = /\d{3}/;

    const errorMessage = document.createElement('div');
    errorMessage.innerHTML = '<span class="error">This field is required</span>';


    const getName = function(name) {
      const nameInput = $('input#name').val();
      
      if (nameInput.length < 1) {
        $('input#name').css('borderColor', 'red');
        const error = $('label[for="name"]').append(errorMessage);
        $(error).show();
        
        return false;
      } else { 
        $('input#name').css('borderColor', 'lightgrey');
        $(error).remove();
        return true;
       }
    }

    getName();

    const getEmail = function(email) {
      const emailInput = $('input#email').val();
      console.log('email');
      if (emailInput.length < 1) {
        $('input#email').css('borderColor', 'red');
        // .before('<span class="error">This field is required</span>');
      } else {
        // let regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
        // let validEmail = regEx.test(emailInput);
        //
        const emailValidation = /[a-z0-9]+@[a-z0-9]+.[a-z]+$/i;
        const validEmail = emailValidation.test(emailInput);
    
        if (!validEmail) {
          $('input#email').css('borderColor', 'red');
          // .before('<span class="error">Please enter a valid email</span>');
        }
      }
    } 
    const getActivity = function(activity) {
      if(!selectActivity.checked){
        $('.activities legend').css('borderColor', 'red');
        console.log('name');
        // .after('<span class="error">Please check atleast one activity</span>');
      }
    } 
    const getCredit = function(credit) {
      const cardInput = $('input#cc-num').val();
      console.log('name');
      if (cardInput.length < 13 || cardInput.length > 16) {
        $('input#cc-num').css('borderColor', 'red');
        // .after('<span class="error">Credit Card Number must be between 13-16 characters</span></br>');
      } 
    } 
    const getZip = function(zip) {
      const zipInput = $('input#zip').val();
      console.log('name');
      if (zipInput.length < 5) {
        $('input#zip').css('borderColor', 'red');
        // .after('<span class="error">Zip must be 5 characters</span>');
      } 
    } 
    const getCVV = function(cvv) {
      const cvvInput = $('input#cvv').val();
      console.log('name');
      if (cvvInput.length < 3 || cvvInput.length > 3) {
        $('input#cvv').css('borderColor', 'red');
        // .after('<span class="error">CVV must be 3 characters</span>');
      } 
    }
    


    console.log('Submitted...');
    e.preventDefault();

  });


});
