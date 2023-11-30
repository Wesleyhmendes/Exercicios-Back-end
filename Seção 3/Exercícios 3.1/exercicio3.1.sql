USE hr;

-- 1
SELECT MAX(salary) FROM employees;

-- 2
SELECT MAX(salary) - MIN(salary) FROM employees; 

-- 3
SELECT AVG(salary) AS 'average_salary', job_id FROM employees
GROUP BY job_id
ORDER BY AVG(salary) DESC;

-- 4
SELECT SUM(salary) FROM employees; 

-- 5
SELECT ROUND(MAX(salary)), ROUND(MIN(salary)), ROUND(SUM(salary)), ROUND(AVG(salary)) FROM employees; 

-- 6
SELECT COUNT(job_id) FROM employees
WHERE job_id = 'IT_PROG';

-- 7
SELECT SUM(salary), job_id FROM employees
GROUP BY job_id;

-- 8
SELECT SUM(salary), job_id FROM employees
GROUP BY job_id
HAVING job_id = 'it_prog';

-- 9
SELECT AVG(salary) 'average_salary', job_id FROM employees
WHERE job_id <> 'it_prog'
GROUP BY job_id
ORDER BY average_salary DESC;

-- 10
SELECT department_id, AVG(salary) 'average_salary', COUNT(*) 'number_of_employees' 
FROM employees
GROUP BY department_id
HAVING number_of_employees > 10;

-- 11
SET SQL_SAFE_UPDATES = 0;
UPDATE employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE ('515%');





