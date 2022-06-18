/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { check, info, warning, Icon } from '@wordpress/icons';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const type = 'success'; // Will come from attributes later.
	const className = `is-${ type }-notice`;

	let icon = info;
	if ( 'success' === type ) {
		icon = check;
	} else if ( 'warning' === type || 'error' === type ) {
		icon = warning;
	}

	return (
		<div { ...useBlockProps( { className } ) }>
			<div className="wp-block-ryelle-notice-block__icon">
				<Icon icon={ icon } />
			</div>
			<div className="wp-block-ryelle-notice-block__content">
				<p>
					{ __(
						'Notice Block – hello from the editor!',
						'notice-block'
					) }
				</p>
			</div>
		</div>
	);
}
