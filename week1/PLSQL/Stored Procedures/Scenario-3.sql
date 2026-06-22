
CREATE TABLE Accounts (
    AccountId NUMBER PRIMARY KEY,
    AccountHolderName VARCHAR2(100),
    AccountType VARCHAR2(20),
    Balance NUMBER(15, 2)
);

INSERT INTO Accounts VALUES (1, 'Koushik', 'SAVINGS', 6000);
INSERT INTO Accounts VALUES (2, 'Likhith', 'SAVINGS', 4000);
INSERT INTO Accounts VALUES (3, 'Vishal', 'CURRENT', 7000);
COMMIT;

SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_source_account IN NUMBER,
    p_destination_account IN NUMBER,
    p_amount IN NUMBER
) IS
    v_source_balance NUMBER;

BEGIN
    SELECT Balance INTO v_source_balance
    FROM Accounts
    WHERE AccountId = p_source_account;

    IF v_source_balance < p_amount THEN
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance.');
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance.');
    END IF;

    UPDATE Accounts
    SET Balance = Balance - p_amount
    WHERE AccountId = p_source_account;

    UPDATE Accounts
    SET Balance = Balance + p_amount
    WHERE AccountId = p_destination_account;

    DBMS_OUTPUT.PUT_LINE('Transferred Rs.' || p_amount || 
                         ' from Account ID ' || p_source_account || 
                         ' to Account ID ' || p_destination_account || '.');

    COMMIT;
END;
/

BEGIN
    TransferFunds(1, 2, 1000); 
END;
/