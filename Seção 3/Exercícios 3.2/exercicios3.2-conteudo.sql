-- actor_id, actor_name, film_id  --> tabelas: actor, film_actor
USE sakila;

-- 1
SELECT 
    a.actor_id, a.first_name, f.film_id
FROM
    actor AS a
        INNER JOIN
    film_actor f ON a.actor_id = f.film_id;

-- 2
SELECT 
	s.first_name, s.last_name, a.address
FROM
		staff AS s
			INNER JOIN
		address a ON s.address_id = a.address_id;

-- 3: client_id, first_name, email --> address_id, street_name, client_address: Encontrado em customer e address
SELECT 
    c.customer_id,
    c.first_name,
    c.email,
    a.address_id,
    a.address
FROM
    customer AS c
        INNER JOIN
    address AS a ON c.customer_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

-- 4: NOME, EMAIL, ID ENDEREÇO, ENDEREÇO, DISTRITO --> california e contem "rene" no nome. --> tabelas: address, customer
SELECT
	c.first_name,
    c.email,
    c.address_id,
    a.address,
    a.district
FROM
		customer AS c
			INNER JOIN
		address AS a ON c.address_id = a.address_id
        WHERE
        c.first_name LIKE '%rene%' AND a.district = 'California';


-- 5: nome, sobrenome, quantidade de filmes alugados --> ordenar por nome, sobrenome, crescente -> apenas ativos --> customer, rental
SELECT
	c.first_name,
    c.last_name,
    COUNT(r.rental_id) AS 'quantidade de filmes alugados'
FROM 
	customer AS c
		INNER JOIN
	rental AS r ON c.customer_id = r.customer_id
WHERE
	c.active = 1
GROUP BY
	c.customer_id
ORDER BY
	c.first_name DESC,
    c.last_name DESC;


-- 6: nome, sobrenome, media de pagamento(amount) em 2006. Tabelas: payment, staff --> GROUP BY nome, sobrenome
SELECT 
    s.first_name,
    s.last_name,
    AVG(p.amount) AS 'media de pagamento'
FROM
    staff AS s
        INNER JOIN
    payment AS p ON s.staff_id = p.staff_id
WHERE
    YEAR(p.payment_date) = 2006
GROUP BY s.first_name , s.last_name;

-- 7: 
SELECT
	a.actor_id,
    a.first_name,
    f.film_id,
    f.title
FROM
	actor AS a
INNER JOIN
	film_actor AS fa ON a.actor_id = fa.film_id
INNER JOIN
    sakila.film AS f ON f.film_id = fa.film_id;
    



