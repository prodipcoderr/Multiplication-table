const submitBtn = () => {
  const inputField = document.getElementById('input-field');
  const inputFieldValue = inputField.value;
  const multiValueNum = parseInt(inputFieldValue);

  const mainSection = document.getElementById('data-show');
  mainSection.innerText = '';

  if (isNaN(multiValueNum)) {
    alert('Please enter a valid number');
  } else {
    for (let i = 1; i <= 10; i++) {
      const multiValue = multiValueNum * i;
      console.log('🚀 ~ submitBtn ~ multiValue:', multiValue);

      const div = document.createElement('div');
      div.classList = `flex justify-center p-3 bg-gray-50 m-2 text-gray-600 rounded-sm`;
      div.innerHTML = `
      <h2 class = "hind-siliguri  font-medium">${multiValueNum} x ${i} = ${multiValue} </h2>
      `;

      mainSection.appendChild(div);
    }
  }
};
