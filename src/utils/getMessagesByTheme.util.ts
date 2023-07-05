import { EStatusTheme, TLang } from '../types';

const getMessagesByTheme = (theme: EStatusTheme, lang?: TLang) => {
	const message = {
		[EStatusTheme.SUCCESS]: {
			en: 'Your request was submitted successfully!',
			es: '¡Su solicitud se envió correctamente!',
			pt: 'Sua solicitação foi enviada com sucesso!'
		},
		[EStatusTheme.CLIENT_ERROR]: {
			en: 'An error occurred with your client!',
			es: '¡Se produjo un error con su cliente!',
			pt: 'Ocorreu um erro com o seu cliente!'
		},
		[EStatusTheme.SERVER_ERROR]: {
			en: 'Resource not found, an error occurred with the system server',
			es: 'Recurso no encontrado, se produjo un error con el servidor del sistema',
			pt: 'Recurso não encontrado, ocorreu um erro com o servidor do sistema'
		},
		[EStatusTheme.UNKNOWN]: {
			pt: 'Retorno desconhecido para darmos alguma especificação!',
			en: '¡Respuesta desconocida para especificaciones!',
			es: 'Unknown response for specifications!'
		}
	};

	if (lang) {
		return message[theme][lang];
	}

	return message[theme]['en'] || '';
};

export default getMessagesByTheme;
