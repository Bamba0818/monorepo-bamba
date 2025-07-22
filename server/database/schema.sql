CREATE DATABASE IF NOT EXISTS oeuvres_bamba CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE oeuvres_bamba;


DROP TABLE IF EXISTS oeuvre;


CREATE TABLE oeuvre (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titre VARCHAR(255) NOT NULL,
  auteur VARCHAR(255) NOT NULL,
  ville VARCHAR(255) NOT NULL,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE
);


INSERT INTO oeuvre (titre, auteur, ville)
VALUES
  ('Khassida Touba', 'Cheikh Ahmadou Bamba', 'Touba'),
  ('Poème sur la Miséricorde', 'Serigne Fallou', 'Diourbel');
