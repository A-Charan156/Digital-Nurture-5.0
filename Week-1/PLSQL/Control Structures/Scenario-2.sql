CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);
/

INSERT INTO Customers (CustomerID, Name, Balance, IsVIP) VALUES (1, 'Sriram', 12000, NULL);
INSERT INTO Customers (CustomerID, Name, Balance, IsVIP) VALUES (2, 'Nikhil', 10000, NULL);
INSERT INTO Customers (CustomerID, Name, Balance, IsVIP) VALUES (3, 'Vishal', 13000, NULL);
INSERT INTO Customers (CustomerID, Name, Balance, IsVIP) VALUES (4, 'Surya', 11000, NULL);
INSERT INTO Customers (CustomerID, Name, Balance, IsVIP) VALUES (5, 'Karthik', 5000, NULL);
COMMIT;
/

SET SERVEROUTPUT ON;

DECLARE
    CURSOR bal_cursor IS
        SELECT CustomerID
        FROM Customers
        WHERE Balance > 10000;
BEGIN
    FOR bal_rec IN bal_cursor LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = bal_rec.CustomerID;

        DBMS_OUTPUT.PUT_LINE('CustomerID ' || bal_rec.CustomerID || ' marked as VIP');
    END LOOP;

    COMMIT;
END;
/

