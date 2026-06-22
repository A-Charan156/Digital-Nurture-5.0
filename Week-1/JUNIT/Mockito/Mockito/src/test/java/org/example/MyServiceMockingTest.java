package org.example;

import static org.mockito.Mockito.*;
import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

/**
 * Exercise 1: Mocking and Stubbing
 * - Create a mock of ExternalAPI
 * - Stub its getData() method to return "Mock Data"
 * - Assert that myService.fetchData() returns the mocked value
 *
 * @author Avutapalli Ram Charan
 */
public class MyServiceMockingTest {

    private ExternalAPI mockApi;
    private Service myService;

    @Before
    public void setUp() {
        // Arrange: Create mock
        mockApi = mock(ExternalAPI.class);
        myService = new Service(mockApi);
    }

    @Test
    public void testExternalApi() {
        // Arrange - stub getData() to return "Mock Data"
        when(mockApi.getData()).thenReturn("Mock Data");

        // Act
        String result = myService.fetchData();

        // Assert
        assertEquals("Mock Data", result);
    }
}
