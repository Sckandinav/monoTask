import './styles/style.scss';
import maskPhone from './utils/phoneMask';
import init from './utils/maps';
import { nameValidation, phoneValidation, clearErr, textAreaValidation, showErr } from './utils/validation';

maskPhone('#tel');

const inputName = document.getElementById('name');
const inputPhone = document.getElementById('tel');
const textareaInput = document.getElementById('message');
const inputs = document.getElementsByTagName('input');
const form = document.getElementById('form');
const agree = document.getElementById('agreement');

Object.values(inputs).forEach(input => input.addEventListener('focus', clearErr));

inputName.addEventListener('blur', nameValidation);
inputPhone.addEventListener('blur', phoneValidation);

textareaInput.addEventListener('focus', clearErr);
textareaInput.addEventListener('blur', textAreaValidation);

const checkInputsText = input => {
  if (input.value.trim().length === 0) {
    showErr(input);
    return false;
  } else {
    return true;
  }
};

const checkAgree = input => {
  if (!input.checked) {
    agree.nextElementSibling.style.color = 'var(--accent)';
    return false;
  } else {
    return true;
  }
};

const checkTextareaInput = textareaInput => {
  if (textareaInput.value.length === 0) {
    const err = textareaInput.nextElementSibling.nextElementSibling;
    err.style.display = 'block';
    return false;
  } else {
    return true;
  }
};

agree.addEventListener('click', function () {
  agree.nextElementSibling.style.color = 'var(--text)';
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let hasErrors = false;

  Object.values(inputs).forEach(input => {
    switch (input.type) {
      case 'text':
      case 'tel':
        if (!checkInputsText(input)) {
          hasErrors = true;
        }
        break;
      case 'checkbox':
        if (!checkAgree(input)) {
          hasErrors = true;
        }
        break;
    }
  });

  if (!checkTextareaInput(textareaInput)) {
    hasErrors = true;
  }
  if (!hasErrors) {
    form.submit();
    form.reset();
  }
});
