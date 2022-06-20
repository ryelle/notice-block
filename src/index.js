/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { Edit, typeOptions } from './edit';
import Icon from './icon';
import save from './save';
import metadata from './block.json';
import './style.scss';

registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,

	variations: typeOptions.map( ( { value, label } ) => ( {
		name: value,
		/* translators: %s is the notice type. */
		title: sprintf( __( '%s Notice', 'notice-block' ), label ),
		isActive: ( blockAttributes, variationAttributes ) =>
			blockAttributes.type === variationAttributes.type,
		scope: [ 'transform' ],
		attributes: { type: value },
	} ) ),
} );
