const numberRounds = document.getElementById('number-rounds');
const roundInfoDiv = document.querySelector('.round-info');

function displayRoundsInputs(e) {
  roundInfoDiv.innerHTML = '';
  const numberOfRounds = this.value;
  let roundHTML = ``;
  axios.get('/api/question-types')
  .then(response => {
    for (let i = 1; i <= numberOfRounds; i++) {
      roundHTML += `<h4>Round ${i}</h4>
      <div class="form-group">
        <input type="hidden" name="round" value="${i}">
      </div>
      <div class="form-group">
        <label for="round-name">Round Name</label>
        <input type="text" name="roundName" id="round-name" class="form-control">
      </div>
      <div class="form-group">
        <label>Choose a Question Type</label>
        <select name="question-types" id="question-type-dropdown" class="form-control">
        <option value='' hidden>Question Type</option>
      `;
      const optionsArray = [];
      response.data.forEach(questionType => {
        optionsArray.push(`<option value='${questionType.type}'>${questionType.type}</option>`);
      });
      roundHTML += optionsArray.join('');
      roundHTML += `</select></div>`;
    }
    console.log(roundHTML);
    roundInfoDiv.insertAdjacentHTML('afterbegin', roundHTML);
  })
  .catch(err => console.log(err));
}


numberRounds.addEventListener('blur', displayRoundsInputs);