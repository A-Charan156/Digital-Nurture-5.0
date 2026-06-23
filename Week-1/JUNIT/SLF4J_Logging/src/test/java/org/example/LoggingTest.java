package org.example;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

public class LoggingTest extends TestCase {

    public LoggingTest(String testName) {
        super(testName);
    }

    public static Test suite() {
        return new TestSuite(LoggingTest.class);
    }

    public void testAppReturnsTrue() {
        assertTrue(true);
    }
}
