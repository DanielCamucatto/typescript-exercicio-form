const SHOW_ERROR_MESSAGES = 'show-error-message';
const form = document.querySelector('.form') as HTMLFormElement;
const userName = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement; 

form.addEventListener('submit', (ev: SubmitEvent) => {
  ev.preventDefault();
  hideErrorMessages(form);
  checkedEmptyFilds(userName, email, password, password2)
  checkedEqualsPassword(password, password2)

  if(sendForm(form)){
    console.log('enviado')
  }else{
    console.log('Houve algum erro no form')
  }
})

const checkedEmptyFilds = (...input: HTMLInputElement[]): void => {
  input.forEach(input => {
    if(!input.value){
      showErrorMessage(input, 'O campo não pode ficar vazio')
    }
  })
}

const checkedEqualsPassword = (pass : HTMLInputElement, pass2: HTMLInputElement): void => {
  if(pass.value !== pass2.value){
    showErrorMessage(pass,'As senhas não correspondem');
    showErrorMessage(pass2,'As senhas não correspondem');
  }

} 

const hideErrorMessages = (form: HTMLFormElement): void => {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(item => item.classList.remove(SHOW_ERROR_MESSAGES))
}

const showErrorMessage = (input: HTMLInputElement, msg: string): void => {
  const formFilds = input.parentElement as HTMLDivElement; 
  const errorMessage = formFilds.querySelector('.error-message',) as HTMLSpanElement; 
  errorMessage.innerText = msg
  formFilds.classList.add(SHOW_ERROR_MESSAGES)
}
 
const sendForm = (form: HTMLFormElement): boolean => {
  let send = true; 
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => send = false)
  return send
}

