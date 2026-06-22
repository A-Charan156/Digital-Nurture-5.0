BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE Employee';
EXCEPTION
    WHEN OTHERS THEN
        IF SQLCODE != -942 THEN
            RAISE;
        END IF;
END;
/

CREATE TABLE Employee (
    EmpId NUMBER PRIMARY KEY,
    EmpName VARCHAR2(100),
    Department VARCHAR2(50),
    Salary NUMBER(10, 2)
);
/

INSERT INTO Employee VALUES (201, 'Abhiram', 'Admin', 30000);
INSERT INTO Employee VALUES (202, 'Keerthi', 'Loan Officer', 25000);
INSERT INTO Employee VALUES (203, 'Sohan', 'Bank Teller', 45000);
INSERT INTO Employee VALUES (204, 'Divya', 'Asset Manager', 50000);
COMMIT;
/

SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    dept_name IN VARCHAR2,
    bonus_percentage IN NUMBER
) IS
    v_employee_count NUMBER;
BEGIN
    UPDATE Employee
    SET Salary = Salary + (Salary * bonus_percentage / 100)
    WHERE Department = dept_name;

    v_employee_count := SQL%ROWCOUNT;

    DBMS_OUTPUT.PUT_LINE('Bonus applied to ' || v_employee_count || 
                         ' employee(s) in ' || dept_name || 
                         ' department (' || bonus_percentage || '%).');

    COMMIT;
END;
/

BEGIN
    UpdateEmployeeBonus('Admin', 10);
    UpdateEmployeeBonus('Loan Officer', 15);
END;
/
