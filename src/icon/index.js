/**
 * WordPress dependencies
 */
import { Icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import check from './library/check';
import error from './library/error';
import help from './library/help';
import info from './library/info';
import warning from './library/warning';

export default function ( { type } ) {
	switch ( type ) {
		case 'error':
			return <Icon icon={ error } />;
		case 'help':
			return <Icon icon={ help } />;
		case 'success':
			return <Icon icon={ check } />;
		case 'warning':
			return <Icon icon={ warning } />;
		case 'info':
		default:
			return <Icon icon={ info } />;
	}
}
