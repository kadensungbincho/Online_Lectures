/*
 * Hibernate Validator, declare and validate application constraints
 *
 * License: Apache License, Version 2.0
 * See the license.txt file in the root directory or <http://www.apache.org/licenses/LICENSE-2.0>.
 */
package org.hibernate.validator.test.internal.engine.groups.validationordergenerator;

import javax.validation.GroupSequence;

/**
 * @author Hardy Ferentschik
 */
@GroupSequence(value = CyclicGroupSequence1.class)
public interface CyclicGroupSequence2 {
}
