/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var isInfinite = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isInfinite, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided `+infinity`', function test( t ) {
	t.equal( isInfinite( PINF ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if provided `-infinity`', function test( t ) {
	t.equal( isInfinite( NINF ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if not provided an infinite number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.0,
		-1.0e308,
		4.0e-324,
		NaN,
		true,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isInfinite( values[i] ), false, 'returns expected value' );
	}
	t.end();
});
