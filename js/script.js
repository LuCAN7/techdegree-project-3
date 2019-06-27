
$( document ).ready(function(e) {
    $('input#name').focus();
    // e.preventDefault();
  });
  
  
const jobRole = document.getElementById('other-title');
const select = document.querySelector('#title');

jobRole.style.display = 'none';

select.addEventListener('change', function(){

  if (select.selectedIndex === 5 ) {
    // A more dynamic way...incase more options are added
    // console.log(select.options[select.selectedIndex].text);
    jobRole.style.display = 'block';
  } else { 
    jobRole.style.display = 'none';
  }
  
});
