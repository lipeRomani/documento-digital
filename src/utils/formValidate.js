const messages = {
  requiredField: () => "Campo obrigatório",
  mingLength: (minLength) => `Campo dever ter no mínimo ${minLength} caracteres`,
  email: () => 'Campo deve ser um e-mail válido',
}

export const required = value => 
  (value && value.length > 0 
    ? undefined 
    : messages.requiredField());

export const minLength = min => value =>
  value && value.length < min 
    ? messages.mingLength(min) 
    : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? messages.email()
    : undefined;