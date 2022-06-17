/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<div className="wp-block-ryelle-notice-block__icon">
				<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<circle cx="50" cy="50" r="50" />
				</svg>
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
