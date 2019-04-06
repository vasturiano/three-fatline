// from https://github.com/mrdoob/three.js/blob/master/examples/js/lines/WireframeGeometry2.js

import {
	WireframeGeometry
} from 'three';

const THREE = window.THREE
	? window.THREE // Prefer consumption from global THREE, if exists
	: {
		WireframeGeometry
	};

import LineSegmentsGeometry from './LineSegmentsGeometry';
Object.assign(THREE, { LineSegmentsGeometry });

/**
 * @author WestLangley / http://github.com/WestLangley
 *
 */

const WireframeGeometry2 = function ( geometry ) {

	THREE.LineSegmentsGeometry.call( this );

	this.type = 'WireframeGeometry2';

	this.fromWireframeGeometry( new THREE.WireframeGeometry( geometry ) );

	// set colors, maybe

};

WireframeGeometry2.prototype = Object.assign( Object.create( THREE.LineSegmentsGeometry.prototype ), {

	constructor: WireframeGeometry2,

	isWireframeGeometry2: true,

	copy: function ( source ) {

		// todo

		return this;

	}

} );

export default WireframeGeometry2;
