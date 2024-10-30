<?php
/*
Plugin Name:	Better Editor for Oxygen
Plugin URI:		https://gabrieleiacovone.net/
Description:	Improve the Oxygen builder Editor: Structure opened by default, Back to Templates/Pages/Posts Menu, Display Currently Editing & more.
Version:		2.0.2
Author:			Gabriele Iacovone
Author URI:		https://gabrieleiacovone.net
License:		GPL-2.0+
License URI:	http://www.gnu.org/licenses/gpl-2.0.txt

This plugin is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

This plugin is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with This plugin. If not, see {URI to Plugin License}.
*/

if ( ! defined( 'WPINC' ) ) {
	die;
}

/* Loads the plugin's Js and Css file. */
add_action( 'oxygen_enqueue_ui_scripts', 'befo_enqueue_files' );

function befo_enqueue_files() {

	if ( defined( 'SHOW_CT_BUILDER' ) ) {
		wp_enqueue_style( 'befo-style', plugin_dir_url( __FILE__ ) . '/assets/css/befo-editor.css');
		wp_enqueue_script( 'befo-scripts', plugin_dir_url( __FILE__ ) . '/assets/js/befo-editor.js', array( 'jquery' ), '1.0.0', true );
	}

}


/* Adds the name of the Template/Page currently being edited in the Oxygen editor. */
add_action( 'oxygen_enqueue_ui_scripts', 'befo_oxygen_editor_currently_editing' );

function befo_oxygen_editor_currently_editing() {
	if ( ! function_exists( 'oxygen_vsb_current_user_can_access' ) ) {
		return;
	}

	wp_enqueue_script( 'oxygen-editor-currently-editing', plugin_dir_url( __FILE__ ) . '/assets/js/befo-currently.js', [], '1.0.0', true );
	wp_localize_script( 'oxygen-editor-currently-editing', 'current_entry', [ 'name' => get_the_title() ] );
}

