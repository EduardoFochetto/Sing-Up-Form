function verifyForm(){
  const form = document.querySelector('.form');
  form.addEventListener('submit', e => {
    handleSubmit(e);
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const verify = isValid();

    if (verify){
      alert('Formulário enviado')
      form.submit();
    }
  }

  const isValid = () => {
    let valid = true;

    for (let errorText of form.querySelectorAll('.errorText')){
      errorText.remove()
    }

    for (let camp of form.querySelectorAll('.valid')){
      const label = camp.previousElementSibling.innerText;

      if (!camp.value){
        createError(camp, `${label} cannot be empty`);
        changeInputLayer(camp)
        valid = false;
      } else {
        changeToOriginalLayer(camp)
      }

      if (camp.classList.contains('email')){
        if (!camp.value.match(/\S+@\S+\.\S+/)){
          createError(camp, 'Email is not valid');
          changeInputLayer(camp)
          valid = false;
        } else {
          changeToOriginalLayer(camp)
        }
      }

    }
    return valid;
  }

  const createError = (camp, msg) => {
    const div = document.createElement('div');

    div.innerHTML = msg;
    div.classList.add('errorText')

    camp.insertAdjacentElement('afterend', div)
  }

  const changeInputLayer = (layer) => {
    if (layer){
      layer.style.outlineColor = 'red';
      layer.style.backgroundImage = "url('https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png')";
    } 
  }

  const changeToOriginalLayer = (layer) => {
      layer.style.outlineColor = 'hsl(248, 32%, 49%)'
      layer.style.backgroundImage = 'none'
  }
}

verifyForm();