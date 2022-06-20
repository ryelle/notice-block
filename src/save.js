/**
 * WordPress dependencies
 */
import { check, info, warning, Icon } from '@wordpress/icons';
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	const { content, type } = attributes;
	const className = `is-${ type }-notice`;

	let icon = info;
	if ( 'success' === type ) {
		icon = check;
	} else if ( 'warning' === type || 'error' === type ) {
		icon = warning;
	}

	return (
		<div { ...useBlockProps.save( { className } ) }>
			<div className="wp-block-ryelle-notice-block__icon">
				<Icon icon={ icon } />
			</div>
			<div className="wp-block-ryelle-notice-block__content">
				<RichText.Content multiline="p" value={ content } />
			</div>
		</div>
	);
}
