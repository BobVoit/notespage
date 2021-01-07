export const required = value => value ? undefined : 'Поле обязательное к заполеннию';

export const maxLengthCreator = maxLength =>  
    value => value && value.length > maxLength ? `Количество символов должно быть не более ${maxLength}` : undefined;

export const minLengthCreator = minLength =>
    value => value && value.length < minLength ? `Количество символов должно быть не менее ${minLength}` : undefined;

