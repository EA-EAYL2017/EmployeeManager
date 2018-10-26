-- set @username := 'employee_manager';
-- set @password := 'password';

SET @query1 = CONCAT(
	'GRANT UPDATE,DELETE ON EmployeeManager.* TO "',@username,
    '"@"localhost" IDENTIFIED BY "',@password,'"'
);
PREPARE stmt FROM @query1;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;