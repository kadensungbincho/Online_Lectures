/*
 * Hibernate Validator, declare and validate application constraints
 *
 * License: Apache License, Version 2.0
 * See the license.txt file in the root directory or <http://www.apache.org/licenses/LICENSE-2.0>.
 */
package org.hibernate.validator.test.internal.engine.valueextraction.model;

import javax.validation.valueextraction.ExtractedValue;
import javax.validation.valueextraction.ValueExtractor;

/**
 * @author Marko Bekhta
 */
public class PairLeftValueExtractor implements ValueExtractor<Pair<@ExtractedValue ?, ?>> {

	@Override
	public void extractValues(Pair<?, ?> originalValue, ValueReceiver receiver) {
		receiver.value( "left", originalValue.getLeft() );
	}
}
