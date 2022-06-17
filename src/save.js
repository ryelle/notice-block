/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @return {WPElement} Element to render.
 */
export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<div className="wp-block-ryelle-notice-block__icon">
				<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<circle cx="50" cy="50" r="50" />
				</svg>
			</div>
			<div className="wp-block-ryelle-notice-block__content">
				<p>
					{ __(
						'Notice Block – hello from the saved content!',
						'notice-block'
					) }
				</p>
			</div>
		</div>
	);
}
