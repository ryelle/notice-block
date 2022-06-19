/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import Icon from './icon';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { content, type } = attributes;
	const className = `is-${ type }-notice`;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'notice-block' ) }>
					<SelectControl
						options={ [
							{ value: 'info', label: 'Informational' },
							{ value: 'success', label: 'Success' },
							{ value: 'help', label: 'Help' },
							{ value: 'warning', label: 'Warning' },
							{ value: 'error', label: 'Error' },
						] }
						value={ type }
						label={ __( 'Notice type', 'notice-block' ) }
						onChange={ ( newValue ) =>
							setAttributes( { type: newValue } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps( { className } ) }>
				<div className="wp-block-ryelle-notice-block__icon">
					<Icon type={ type } />
				</div>
				<RichText
					tagName="div"
					multiline="p"
					className="wp-block-ryelle-notice-block__content"
					onChange={ ( newContent ) =>
						setAttributes( { content: newContent } )
					}
					value={ content }
				/>
			</div>
		</>
	);
}
