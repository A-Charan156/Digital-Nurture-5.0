package org.example;

import static org.mockito.Mockito.*;
import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

/**
 * Exercise 2: Verifying Interactions
 * - Create a mock of ExternalAPI
 * - Inject it into Service
 * - Call fetchData()
 * - Verify that getData() was called on the mock
 *
 * @author Avutapalli Ram Charan
 */
public class MyServiceVerifyTest {

    private ExternalAPI apiMock;
    private Service myService;

    @Before
    public void setUp() {
        // Arrange: Create mock object
        apiMock = mock(ExternalAPI.class);
        myService = new Service(apiMock);
    }

    @Test
    public void testVerifyInteraction() {
        // Act
        myService.fetchData();

        // Assert - verify that getData() was called
        verify(apiMock).getData();
    }
}
