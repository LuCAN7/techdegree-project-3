
$( document ).ready(function(e) {
    $('input#name').focus();
    // e.preventDefault();

  const jobRole = document.getElementById('other-title');
  const selectJob = document.querySelector('#title');
  // Hide 'Other' text input 
  jobRole.style.display = 'none';
  // Event listener on 'change' to job role
  selectJob.addEventListener('change', function(){
    if ( selectJob.selectedIndex === 5 ) {
      // A more dynamic way...incase more options are added => select.options[select.selectedIndex].text
      // Display input if 'other' is selected
      jobRole.style.display = 'block';
    } else { 
      jobRole.style.display = 'none';
    }
  });

  const selectDesign = document.querySelector('#design');
  const selectColor = document.querySelector('#color');
  
  if( selectDesign.selectedIndex === 0 ){
    for (let i = 0; i < selectColor.options.length; i++) {
        $(selectColor.options).hide();
    } 
  } 
    
  $(selectDesign).change(function (e) { 
    //   e.preventDefault();
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
      console.log('working...1');
      $(selectColor.options[1]).show();
      $(selectColor.options[2]).show();
      $(selectColor.options[3]).show();
      $(selectColor.options[4]).hide();
      $(selectColor.options[5]).hide();
      $(selectColor.options[6]).hide();
    }
    
    if ( selectDesign.selectedIndex === 2 ) {
      console.log('working...2');
      $(selectColor.options[1]).hide();
      $(selectColor.options[2]).hide();
      $(selectColor.options[3]).hide();
      $(selectColor.options[4]).show();
      $(selectColor.options[5]).show();
      $(selectColor.options[6]).show();
    }
  });

  let selectActivity = document.querySelectorAll('input[type="checkbox"');
  let ActivityLabel = document.querySelectorAll('.activities label');


  $(selectActivity).change(function (e) { 
    // e.preventDefault();
   
    for (let i = 0; i < selectActivity.length; i++) {
      
      for (let j = 0; j < ActivityLabel.length; j++) {
        if (selectActivity[1].checked) {

            ActivityLabel[3].style.color = "grey";
            $(selectActivity[3]).attr("disabled", true);
          
        } else if (selectActivity[3].checked) {
          
          ActivityLabel[1].style.color = "grey";
          $(selectActivity[1]).attr("disabled", true);

        } else if (selectActivity[2].checked) {

          ActivityLabel[4].style.color = "grey";
          $(selectActivity[4]).attr("disabled", true);
          
        } else if (selectActivity[4].checked) {
          
          ActivityLabel[2].style.color = "grey";
          $(selectActivity[2]).attr("disabled", true);
        
        }else { 

          ActivityLabel[3].style.color = "black"; 
          $(selectActivity[3]).attr("disabled", false);

          ActivityLabel[1].style.color = "black";
          $(selectActivity[1]).attr("disabled", false);

          ActivityLabel[4].style.color = "black";
          $(selectActivity[4]).attr("disabled", false); 

          ActivityLabel[2].style.color = "black";
          $(selectActivity[2]).attr("disabled", false);
        }
      }

    }

      
  });


});



// if (selectActivity[1].checked) {
//   for (let j = 0; j < ActivityLabel.length; j++) {

//     ActivityLabel[3].style.color = "grey";
//     $(selectActivity[3]).attr("disabled", true);
//   }

// } else if (selectActivity[3].checked) {

//   ActivityLabel[1].style.color = "grey";
//   $(selectActivity[1]).attr("disabled", true);
// } else { 

//   ActivityLabel[3].style.color = "black"; 
//   $(selectActivity[3]).attr("disabled", false);

//   ActivityLabel[1].style.color = "black";
//   $(selectActivity[1]).attr("disabled", false);
// }

// if (selectActivity[2].checked) {
//   for (let j = 0; j < ActivityLabel.length; j++) {

//     ActivityLabel[4].style.color = "grey";
//     $(selectActivity[4]).attr("disabled", true);
//   }

// } else if (selectActivity[4].checked) {
//   ActivityLabel[2].style.color = "grey";
//   $(selectActivity[2]).attr("disabled", true);
// } else { 

//   ActivityLabel[4].style.color = "black";
//   $(selectActivity[4]).attr("disabled", false); 

//   ActivityLabel[2].style.color = "black";
//   $(selectActivity[2]).attr("disabled", false);
// }