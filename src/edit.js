/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { check, info, warning, Icon } from '@wordpress/icons';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { type } = attributes;
	const className = `is-${ type }-notice`;

	let icon = info;
	if ( 'success' === type ) {
		icon = check;
	} else if ( 'warning' === type || 'error' === type ) {
		icon = warning;
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'notice-block' ) }>
					<SelectControl
						options={ [
							{ value: 'info', label: 'Informational' },
							{ value: 'warning', label: 'Warning' },
							{ value: 'error', label: 'Error' },
							{ value: 'success', label: 'Success' },
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
		</>
	);
}
