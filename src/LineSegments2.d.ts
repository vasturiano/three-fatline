import {
	Mesh,
} from 'three';

import { LineMaterial } from './LineMaterial';
import { LineSegmentsGeometry } from './LineSegmentsGeometry';

export class LineSegments2 extends Mesh {

	constructor( geometry?: LineSegmentsGeometry, material?: LineMaterial );
	isLineSegments2: boolean;

	computeLineDistances(): this;

}
