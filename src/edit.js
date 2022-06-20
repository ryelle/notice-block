/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import {
	BlockControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { ToolbarDropdownMenu } from '@wordpress/components';

/**
 * Internal dependencies
 */
import Icon from './icon';

export const typeOptions = [
	{ label: __( 'Informational', 'notice-block' ), value: 'info' },
	{ label: __( 'Success', 'notice-block' ), value: 'success' },
	{ label: __( 'Help', 'notice-block' ), value: 'help' },
	{ label: __( 'Warning', 'notice-block' ), value: 'warning' },
	{ label: __( 'Error', 'notice-block' ), value: 'error' },
];

/**
 * Get the human-readable label from the current type value.
 *
 * @param {string} type The type slug.
 * @return {string} The translated human-friendly label.
 */
function getOptionLabel( type ) {
	const currentType = typeOptions.find( ( { value } ) => type === value );
	return currentType.label || '';
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @return {WPElement} Element to render.
 */
export function Edit( { attributes, setAttributes } ) {
	const { content, type } = attributes;
	const className = `is-${ type }-notice`;

	return (
		<>
			<BlockControls group="block">
				<ToolbarDropdownMenu
					text={ sprintf(
						/* translators: %s is the notice type label. */
						__( 'Type: %s', 'notice-block' ),
						getOptionLabel( type )
					) }
					icon={ false }
					controls={ typeOptions.map( ( { label, value } ) => ( {
						title: label,
						icon: <Icon type={ value } />,
						isActive: value === type,
						onClick: () => setAttributes( { type: value } ),
					} ) ) }
				/>
			</BlockControls>
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
