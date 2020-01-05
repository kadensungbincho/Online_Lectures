package com.kadensungbincho;

import java.util.Calendar;
import java.util.Objects;

public class JavaPerson {
    private final Long id;
    private final String title;
    private final String firstName;
    private final String surName;
    private final Calendar dateOfBirth;

    public JavaPerson(Long id, String title, String firstName, String surName, Calendar dateOfBirth) {
        if (id == null || title == null || firstName == null || surName == null)
            throw new NullPointerException();

        this.id = id;
        this.title = title;
        this.firstName = firstName;
        this.surName = surName;
        this.dateOfBirth = dateOfBirth;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getSurName() {
        return surName;
    }

    public Calendar getDateOfBirth() {
        return dateOfBirth;
    }

    @Override
    public String toString() { return title + " " + firstName + " " + surName; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null ||  getClass() != o.getClass()) return false;
        JavaPerson that = (JavaPerson) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(title, that.title) &&
                Objects.equals(firstName, that.firstName) &&
                Objects.equals(surName, that.surName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, firstName, surName, dateOfBirth);
    }
}
