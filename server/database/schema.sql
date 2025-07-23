CREATE DATABASE IF NOT EXISTS oeuvres_bamba CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE oeuvres_bamba;

DROP TABLE IF EXISTS oeuvre;

CREATE TABLE oeuvre (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titre VARCHAR(255) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  ville VARCHAR(255) NOT NULL,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO oeuvre (titre, description, ville)
VALUES
  
  (
  'Mouwahibou Nafikh',
  'Khassida majeur de Cheikh Ahmadou Bamba qui exalte les dons divins accordés aux croyants sincères.',
  'Touba'
),
(
  'Sindidi',
  'Poème introductif récité pour la protection spirituelle. Il contient des invocations puissantes contre les maux visibles et invisibles.',
  'Touba'
),
(
  'Matlabul Fawzayni',
  'Poème fondamental décrivant la quête du salut dans les deux mondes et les enseignements de la voie mouride.',
  'Diourbel'
),
(
  'Massalikul Jinane',
  'Traité spirituel exposant les voies d’accès au paradis à travers la connaissance, la piété et l’amour divin.',
  'Touba'
),
(
  'Jazaau Shukr',
  'Poème de gratitude dédié à Dieu pour ses bienfaits et la protection divine accordée à l’auteur.',
  'Mbacké'
),
(
  'Nahju',
  'Poème de style pédagogique retraçant les bonnes conduites du croyant selon la tradition prophétique.',
  'Diourbel'
),
(
  'Qasîdatul Istighfâr',
  'Khassida entièrement consacrée à la demande de pardon auprès d’Allah, écrite dans un élan de repentir sincère.',
  'Touba'
),
(
  'Ayyuhal Ibadu',
  'Discours spirituel exhortant les serviteurs de Dieu à la sincérité, à la patience et à l’effort constant.',
  'Touba'
),
(
  'Tazawudu Shubâni',
  'Invitation à la jeunesse à se nourrir de spiritualité, de discipline et de quête de savoir utile.',
  'Diourbel'
),
(
  'Yaa Qadim',
  'Poème d’invocation fervente adressée à Allah, Le Prééternel, pour implorer son secours et son amour.',
  'Touba'
),
(
  'Tazawudu Shoubbani',
  'Rappel destiné aux jeunes sur les vertus de l’éducation spirituelle et morale dans l’islam.',
  'Mbacké'
),
(
  'Qasîdatul Waqti',
  'Poème méditatif sur le temps et sa gestion selon une perspective soufie.',
  'Touba'
),
(
  'Khidmatul Khadim',
  'Éloge de la servitude volontaire envers le Prophète Muhammad, modèle suprême d’adoration.',
  'Diourbel'
),
(
  'Mimiyatu Khadim',
  'Poème structuré en rimes en M, glorifiant le Prophète et exposant des principes de soufisme.',
  'Touba'
),
(
  'Tawhidou Khadim',
  'Déclaration de l’unicité d’Allah, en vers, accompagnée de méditations sur la foi pure.',
  'Mbacké'
),
(
  'Qasîdatul Faraj',
  'Poème d’espérance et d’ouverture spirituelle après l’épreuve de l’exil.',
  'Touba'
),
(
  'Tazawudu Tullab',
  'Conseils adressés aux étudiants en quête de savoir et de lumière divine.',
  'Touba'
),
(
  'Irwâul Atachâ',
  'Poème spirituel décrivant l’apaisement de la soif intérieure par la foi et le dhikr.',
  'Diourbel'
),
(
  'Minhâjul Abyad',
  'Voie lumineuse exposée dans un poème décrivant les étapes de purification de l’âme.',
  'Touba'
),
(
  'Safinatu Naja',
  'Bateau du salut spirituel dans lequel l’auteur embarque tous ceux qui cherchent la miséricorde divine.',
  'Touba'
),
(
  'Faydu Lakhdar',
  'Poème sur la grâce spirituelle continue, source de baraka pour les disciples.',
  'Mbacké'
),
(
  'Tazawudu Rijal',
  'Éthique de l’homme engagé dans la voie de Dieu, entre action et contemplation.',
  'Touba'
),
(
  'Qasîdatul Qur’ân',
  'Louange au Coran, source ultime de guidance et de lumière divine.',
  'Touba'
),
(
  'Sirajul Muna',
  'Lampe des souhaits, poème d’espérance et de confiance en Allah.',
  'Diourbel'
),
(
  'Bachairu Lkhairât',
  'Annonce des bienfaits futurs pour ceux qui suivent la voie du Prophète avec sincérité.',
  'Touba'
),
(
  'Diwan Khadim Rassoul',
  'Recueil de poèmes composés pour glorifier le Prophète et transmettre les secrets de la voie mouride.',
  'Touba'
),
(
  'Munâjât',
  'Dialogue intime avec Dieu, exprimant la soumission totale du serviteur au Créateur.',
  'Touba'
),
(
  'Silkul Jawâhir',
  'Le collier des joyaux, un poème décrivant les trésors cachés de la connaissance divine.',
  'Mbacké'
);
