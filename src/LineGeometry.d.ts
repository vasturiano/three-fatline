import {
	Line
} from 'three';

import { LineSegmentsGeometry } from './LineSegmentsGeometry';

export class LineGeometry extends LineSegmentsGeometry {

	constructor();
	isLineGeometry: boolean;

	fromLine( line: Line ): this;

}
