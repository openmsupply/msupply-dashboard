-- This query should be run to create views summarising item names and categories for the filters within Dashboards.
-- This view greatly simplifies SQL queries for these filters.

DROP VIEW IF EXISTS item_categories;
CREATE VIEW item_categories AS (
	with stock_type_strings as 
	(
	  select id, 'On essential drug list' as stock_type from item where essential_drug_list = true  union 
	  select id, 'Critical stock' as stock_type from item where critical_stock = true union
	  select id, 'Normal stock' as stock_type from item where normal_stock = true
	)
SELECT
	item.id,
    item.item_name, 
	COALESCE (item_category.description, 'NONE') AS category, 
	CASE WHEN item_category_level2.description IS NULL THEN 'NONE' ELSE item_category_level2.description END AS category_level2, 
	CASE WHEN item_category_level1.description IS NULL THEN 'NONE' ELSE item_category_level1.description END AS category_level1, 
	CASE WHEN item_category2.description IS NULL THEN 'NONE' ELSE item_category2.description END AS category2, 
	CASE WHEN item_category3.description IS NULL THEN 'NONE' ELSE item_category3.description END AS category3, 
	CASE WHEN ven_category = ''OR ven_category IS NULL THEN 'NONE' ELSE ven_category END AS ven_category, 
	essential_drug_list, 
	critical_stock, 
	normal_stock,
	CASE WHEN stock_type IS NULL THEN 'NONE' ELSE stock_type END AS stock_type
FROM 
	item 
	LEFT JOIN item_category ON category_id = item_category.id 
	LEFT JOIN item_category2 ON category2_id = item_category2.id 
	LEFT JOIN item_category3 ON category3_id = item_category3.id 
	LEFT JOIN item_category_level2 ON item_category.parent_id = item_category_level2.id 
	LEFT JOIN item_category_level1 ON item_category_level2.parent_id = item_category_level1.id
	LEFT JOIN stock_type_strings ON item.id = stock_type_strings.id
);
