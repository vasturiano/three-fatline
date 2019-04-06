// from https://github.com/mrdoob/three.js/blob/master/examples/js/lines/Line2.js

const THREE = window.THREE
	? window.THREE // Prefer consumption from global THREE, if exists
	: {};

import LineGeometry from './LineGeometry';
import LineMaterial from './LineMaterial';
import LineSegments2 from './LineSegments2';
Object.assign(THREE, { LineGeometry, LineMaterial, LineSegments2 });

/**
 * @author WestLangley / http://github.com/WestLangley
 *
 */

const Line2 = function ( geometry, material ) {

	THREE.LineSegments2.call( this );

	this.type = 'Line2';

	this.geometry = geometry !== undefined ? geometry : new THREE.LineGeometry();
	this.material = material !== undefined ? material : new THREE.LineMaterial( { color: Math.random() * 0xffffff } );

};

Line2.prototype = Object.assign( Object.create( THREE.LineSegments2.prototype ), {

	constructor: Line2,

	isLine2: true,

	copy: function ( source ) {

		// todo

		return this;

	}

} );

export default Line2;
