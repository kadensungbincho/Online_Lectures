package org.hibernate.validator.internal.util.logging;

import java.util.Locale;
import java.io.Serializable;
import java.lang.String;

/**
 * Warning this class consists of generated code.
 */
public class Messages_$bundle implements Messages, Serializable {
    private static final long serialVersionUID = 1L;
    protected Messages_$bundle() {}
    public static final Messages_$bundle INSTANCE = new Messages_$bundle();
    protected Object readResolve() {
        return INSTANCE;
    }
    private static final Locale LOCALE = Locale.ROOT;
    protected Locale getLoggingLocale() {
        return LOCALE;
    }
    private static final String mustNotBeNull0 = "must not be null.";
    protected String mustNotBeNull0$str() {
        return mustNotBeNull0;
    }
    @Override
    public final String mustNotBeNull() {
        return mustNotBeNull0$str();
    }
    private static final String mustNotBeNull1 = "%s must not be null.";
    protected String mustNotBeNull1$str() {
        return mustNotBeNull1;
    }
    @Override
    public final String mustNotBeNull(final String parameterName) {
        return String.format(getLoggingLocale(), mustNotBeNull1$str(), parameterName);
    }
    private static final String parameterMustNotBeNull = "The parameter \"%s\" must not be null.";
    protected String parameterMustNotBeNull$str() {
        return parameterMustNotBeNull;
    }
    @Override
    public final String parameterMustNotBeNull(final String parameterName) {
        return String.format(getLoggingLocale(), parameterMustNotBeNull$str(), parameterName);
    }
    private static final String parameterMustNotBeEmpty = "The parameter \"%s\" must not be empty.";
    protected String parameterMustNotBeEmpty$str() {
        return parameterMustNotBeEmpty;
    }
    @Override
    public final String parameterMustNotBeEmpty(final String parameterName) {
        return String.format(getLoggingLocale(), parameterMustNotBeEmpty$str(), parameterName);
    }
    private static final String beanTypeCannotBeNull = "The bean type cannot be null.";
    protected String beanTypeCannotBeNull$str() {
        return beanTypeCannotBeNull;
    }
    @Override
    public final String beanTypeCannotBeNull() {
        return beanTypeCannotBeNull$str();
    }
    private static final String propertyPathCannotBeNull = "null is not allowed as property path.";
    protected String propertyPathCannotBeNull$str() {
        return propertyPathCannotBeNull;
    }
    @Override
    public final String propertyPathCannotBeNull() {
        return propertyPathCannotBeNull$str();
    }
    private static final String propertyNameMustNotBeEmpty = "The property name must not be empty.";
    protected String propertyNameMustNotBeEmpty$str() {
        return propertyNameMustNotBeEmpty;
    }
    @Override
    public final String propertyNameMustNotBeEmpty() {
        return propertyNameMustNotBeEmpty$str();
    }
    private static final String groupMustNotBeNull = "null passed as group name.";
    protected String groupMustNotBeNull$str() {
        return groupMustNotBeNull;
    }
    @Override
    public final String groupMustNotBeNull() {
        return groupMustNotBeNull$str();
    }
    private static final String beanTypeMustNotBeNull = "The bean type must not be null when creating a constraint mapping.";
    protected String beanTypeMustNotBeNull$str() {
        return beanTypeMustNotBeNull;
    }
    @Override
    public final String beanTypeMustNotBeNull() {
        return beanTypeMustNotBeNull$str();
    }
    private static final String methodNameMustNotBeNull = "The method name must not be null.";
    protected String methodNameMustNotBeNull$str() {
        return methodNameMustNotBeNull;
    }
    @Override
    public final String methodNameMustNotBeNull() {
        return methodNameMustNotBeNull$str();
    }
    private static final String validatedObjectMustNotBeNull = "The object to be validated must not be null.";
    protected String validatedObjectMustNotBeNull$str() {
        return validatedObjectMustNotBeNull;
    }
    @Override
    public final String validatedObjectMustNotBeNull() {
        return validatedObjectMustNotBeNull$str();
    }
    private static final String validatedMethodMustNotBeNull = "The method to be validated must not be null.";
    protected String validatedMethodMustNotBeNull$str() {
        return validatedMethodMustNotBeNull;
    }
    @Override
    public final String validatedMethodMustNotBeNull() {
        return validatedMethodMustNotBeNull$str();
    }
    private static final String classCannotBeNull = "The class cannot be null.";
    protected String classCannotBeNull$str() {
        return classCannotBeNull;
    }
    @Override
    public final String classCannotBeNull() {
        return classCannotBeNull$str();
    }
    private static final String classIsNull = "Class is null.";
    protected String classIsNull$str() {
        return classIsNull;
    }
    @Override
    public final String classIsNull() {
        return classIsNull$str();
    }
    private static final String validatedConstructorMustNotBeNull = "The constructor to be validated must not be null.";
    protected String validatedConstructorMustNotBeNull$str() {
        return validatedConstructorMustNotBeNull;
    }
    @Override
    public final String validatedConstructorMustNotBeNull() {
        return validatedConstructorMustNotBeNull$str();
    }
    private static final String validatedParameterArrayMustNotBeNull = "The method parameter array cannot not be null.";
    protected String validatedParameterArrayMustNotBeNull$str() {
        return validatedParameterArrayMustNotBeNull;
    }
    @Override
    public final String validatedParameterArrayMustNotBeNull() {
        return validatedParameterArrayMustNotBeNull$str();
    }
    private static final String validatedConstructorCreatedInstanceMustNotBeNull = "The created instance must not be null.";
    protected String validatedConstructorCreatedInstanceMustNotBeNull$str() {
        return validatedConstructorCreatedInstanceMustNotBeNull;
    }
    @Override
    public final String validatedConstructorCreatedInstanceMustNotBeNull() {
        return validatedConstructorCreatedInstanceMustNotBeNull$str();
    }
    private static final String inputStreamCannotBeNull = "The input stream for #addMapping() cannot be null.";
    protected String inputStreamCannotBeNull$str() {
        return inputStreamCannotBeNull;
    }
    @Override
    public final String inputStreamCannotBeNull() {
        return String.format(getLoggingLocale(), inputStreamCannotBeNull$str());
    }
    private static final String constraintOnConstructorOfNonStaticInnerClass = "Constraints on the parameters of constructors of non-static inner classes are not supported if those parameters have a generic type due to JDK bug JDK-5087240.";
    protected String constraintOnConstructorOfNonStaticInnerClass$str() {
        return constraintOnConstructorOfNonStaticInnerClass;
    }
    @Override
    public final String constraintOnConstructorOfNonStaticInnerClass() {
        return String.format(getLoggingLocale(), constraintOnConstructorOfNonStaticInnerClass$str());
    }
    private static final String parameterizedTypesWithMoreThanOneTypeArgument = "Custom parameterized types with more than one type argument are not supported and will not be checked for type use constraints.";
    protected String parameterizedTypesWithMoreThanOneTypeArgument$str() {
        return parameterizedTypesWithMoreThanOneTypeArgument;
    }
    @Override
    public final String parameterizedTypesWithMoreThanOneTypeArgument() {
        return String.format(getLoggingLocale(), parameterizedTypesWithMoreThanOneTypeArgument$str());
    }
    private static final String unableToUseResourceBundleAggregation = "Hibernate Validator cannot instantiate AggregateResourceBundle.CONTROL. This can happen most notably in a Google App Engine environment or when running Hibernate Validator as Java 9 named module. A PlatformResourceBundleLocator without bundle aggregation was created. This only affects you in case you are using multiple ConstraintDefinitionContributor JARs. ConstraintDefinitionContributors are a Hibernate Validator specific feature. All Bean Validation features work as expected. See also https://hibernate.atlassian.net/browse/HV-1023.";
    protected String unableToUseResourceBundleAggregation$str() {
        return unableToUseResourceBundleAggregation;
    }
    @Override
    public final String unableToUseResourceBundleAggregation() {
        return String.format(getLoggingLocale(), unableToUseResourceBundleAggregation$str());
    }
    private static final String annotationTypeMustNotBeNull = "The annotation type must not be null when creating a constraint definition.";
    protected String annotationTypeMustNotBeNull$str() {
        return annotationTypeMustNotBeNull;
    }
    @Override
    public final String annotationTypeMustNotBeNull() {
        return annotationTypeMustNotBeNull$str();
    }
    private static final String annotationTypeMustBeAnnotatedWithConstraint = "The annotation type must be annotated with @javax.validation.Constraint when creating a constraint definition.";
    protected String annotationTypeMustBeAnnotatedWithConstraint$str() {
        return annotationTypeMustBeAnnotatedWithConstraint;
    }
    @Override
    public final String annotationTypeMustBeAnnotatedWithConstraint() {
        return annotationTypeMustBeAnnotatedWithConstraint$str();
    }
}
