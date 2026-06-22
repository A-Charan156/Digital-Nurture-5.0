CREATE TABLE Loans (
    LoanId NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    DueDate DATE
);
/

INSERT INTO Loans (LoanId, CustomerID, DueDate) VALUES (401, 11, SYSDATE + 10);
INSERT INTO Loans (LoanId, CustomerID, DueDate) VALUES (402, 12, SYSDATE + 40);
INSERT INTO Loans (LoanId, CustomerID, DueDate) VALUES (403, 13, SYSDATE + 25);
INSERT INTO Loans (LoanId, CustomerID, DueDate) VALUES (404, 14, SYSDATE + 5);
INSERT INTO Loans (LoanId, CustomerID, DueDate) VALUES (405, 15, SYSDATE + 60);
COMMIT;
/


SELECT * FROM Loans;
/


SET SERVEROUTPUT ON;


DECLARE
    CURSOR loan IS
        SELECT CustomerID, LoanId, DueDate
        FROM Loans
        WHERE DueDate <= SYSDATE + 30;
BEGIN
    FOR loan_rec IN loan LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ' || loan_rec.LoanId || 
            ' for Customer ' || loan_rec.CustomerID || 
            ' is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/

