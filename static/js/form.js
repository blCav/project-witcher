const rangeResults = document.querySelectorAll('.range-result');

rangeResults.forEach(function(rangeResult) {
  const rangeInput = document.querySelector('#' + rangeResult.dataset.input);
  
  if (rangeInput) {
    rangeResult.innerHTML = rangeInput.value;
    
  	rangeInput.addEventListener('input', function() {
   		 rangeResult.innerHTML = this.value;
    });
  }
});