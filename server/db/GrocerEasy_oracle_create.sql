CREATE TABLE "food" (
	"id" SERIAL PRIMARY KEY,
	"food_name" VARCHAR(255) NOT NULL,
	"food_id" INT NOT NULL,
	"food_price" INT NOT NULL,
	"food_size" VARCHAR(255) NOT NULL);

CREATE TABLE "user_info" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(255) NOT NULL,
	"password" VARCHAR(255) NOT NULL,
	"email" VARCHAR(255) NOT NULL);

CREATE TABLE "cart" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT NOT NULL);

CREATE TABLE "cart_item" (
	"id" SERIAL PRIMARY KEY,
	"cart_id" INT NOT NULL,
	"food_id" INT NOT NULL);

/* reference foreign keys */

ALTER TABLE "cart" ADD CONSTRAINT "cart_fk0" FOREIGN KEY ("user_id") REFERENCES "user_info"("id");
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_fk0" FOREIGN KEY ("cart_id") REFERENCES "cart"("id");
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_fk1" FOREIGN KEY ("food_id") REFERENCES "food"("id");

SELECT f.* FROM cart c RIGHT OUTER JOIN cart_item ci ON ci.cart_id = c.id RIGHT OUTER JOIN food f ON f.id = ci.food_id WHERE c.user_id = 2;