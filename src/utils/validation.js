export const clearErr = event => {
  const err = event.target.nextElementSibling.nextElementSibling;
  if (err) {
    err.style.display = 'none';
  }
};

export const nameValidation = event => {
  const err = event.target.nextElementSibling.nextElementSibling;
  const value = event.currentTarget.value;
  if (value.trim().length === 0) {
    err.style.display = 'block';
  }
};

export const phoneValidation = event => {
  const err = event.target.nextElementSibling.nextElementSibling;
  const value = event.currentTarget.value.replace(/\D/g, '');

  if (value.length < 11) {
    err.style.display = 'block';
  }
};

export const textAreaValidation = event => {
  const err = event.target.nextElementSibling.nextElementSibling;
  const value = event.currentTarget.value;
  if (value.trim().length === 0) {
    err.style.display = 'block';
  }
};

export const showErr = input => {
  const err = input.nextElementSibling.nextElementSibling;
  err.style.display = 'block';
};
