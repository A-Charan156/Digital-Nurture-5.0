CREATE TABLE Accounts (
    AccountId NUMBER PRIMARY KEY,
    AccountHolderName VARCHAR2(100),
    AccountType VARCHAR2(20),
    Balance NUMBER(15, 2)
);

INSERT INTO Accounts VALUES (420, 'Kiran', 'SAVINGS', 6000);
INSERT INTO Accounts VALUES (421, 'John', 'CURRENT', 5000);
INSERT INTO Accounts VALUES (422, 'Venkat', 'SAVINGS', 8000);
COMMIT;


SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
    v_updated_rows NUMBER;
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'SAVINGS';

    v_updated_rows := SQL%ROWCOUNT;

    DBMS_OUTPUT.PUT_LINE(v_updated_rows || ' savings account(s) updated with 1% interest.');

    COMMIT;
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/



