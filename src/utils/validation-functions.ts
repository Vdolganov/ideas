export const goodsEmail = (value: string) => {
	return (!value || !!value.match('^[A-Za-z0-9._%+-]+@goods.ru$')) || 'Введите ваш рабочий email';
};

export const minLength = (length: number) => {
	return (value: string) => {
		return (!value || value.length >= length) || `Минимальная длина ${length} символов`;
	};
};

export const required = (value: number | string) => (!!value && value.toString().trim().length > 0) || 'Обязательное поле.';