package com.kadensungbincho.unittesting.unittesting.business;

import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

public class ListMockTest {

    List<String> mock = mock(List.class);

    @Test
    public void test() {
        when(mock.size()).thenReturn(5);

        assertEquals(5, mock.size());
    }

    @Test
    public void returnWithGenericParameters() {
        when(mock.get(anyInt())).thenReturn("kadencho");

        assertEquals("kadencho", mock.get(0));
    }

    @Test
    public void verificationBasics() {
        mock.get(0);
        mock.get(1);

        verify(mock).get(0);
        verify(mock, times(2)).get(anyInt());
    }

    @Test
    public void argumentCapturing() {
        mock.add("SomeString");

        ArgumentCaptor<String> captor = ArgumentCaptor.forClass(String.class);
        verify(mock).add(captor.capture());

        assertEquals("SomeString", captor.getValue());
    }

    @Test
    public void multipleArgumentCapturing() {
        mock.add("SomeString1");
        mock.add("SomeString2");

        ArgumentCaptor<String> captor = ArgumentCaptor.forClass(String.class);
        verify(mock, times(2)).add(captor.capture());

        List<String> allValues = captor.getAllValues();
        assertEquals("SomeString1", allValues.get(0));
        assertEquals("SomeString2", allValues.get(1));
    }

    @Test
    public void mocking() {
        // mock does not have the original behavior of the class
        ArrayList arrayListMock = mock(ArrayList.class);
        arrayListMock.get(0);
        arrayListMock.size();
        arrayListMock.add("Test");
        arrayListMock.size(); // 0
    }

    @Test
    public void spying() {
        ArrayList arrayListMock = spy(ArrayList.class);
        // arrayListMock.get(0); // exception
        arrayListMock.size();
        arrayListMock.add("Test");
        arrayListMock.size(); // 1
    }

}
