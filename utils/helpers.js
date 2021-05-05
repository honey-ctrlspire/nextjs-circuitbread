import _unescape from 'lodash/unescape';

export const rawMarkup = (markup) => {
	return { __html: _unescape(markup) };
}