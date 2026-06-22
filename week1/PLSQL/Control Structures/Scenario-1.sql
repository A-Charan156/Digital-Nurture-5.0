CREATE TABLE customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(200),
    Age NUMBER,
    InterestRate NUMBER
);

INSERT INTO Customers (CustomerID, Name, Age, InterestRate)
VALUES (101,'Sriram',70,6);

INSERT INTO Customers (CustomerID, Name, Age, InterestRate)
VALUES (102,'Vishal',65,4);

INSERT INTO Customers (CustomerID, Name, Age, InterestRate)
VALUES (103,'Nikhil',60,5);

INSERT INTO Customers (CustomerID, Name, Age, InterestRate)
VALUES (104,'Karthik',42,4);

COMMIT;

SET SERVEROUTPUT ON;

DECLARE
    CURSOR senior_customers IS
        SELECT CustomerID, InterestRate
        FROM Customers
        WHERE Age >= 60;

    v_adjustedRate NUMBER;

BEGIN
    FOR cust_rec IN senior_customers LOOP   
        v_adjustedRate := cust_rec.InterestRate - 0.5;

        UPDATE Customers
        SET InterestRate = v_adjustedRate
        WHERE CustomerID = cust_rec.CustomerID;

        DBMS_OUTPUT.PUT_LINE('CustomerID: ' || cust_rec.CustomerID || 
                             ' | New InterestRate: ' || v_adjustedRate);
    END LOOP;

    COMMIT;
END;
/