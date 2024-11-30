// Définition des types
type Race =
  | "poule_rousse"
  | "leghorn"
  | "sussex"
  | "orpington"
  | "marans"
  | "wyandotte"
  | "rhode_island_red"
  | "barnevelder"
  | "plymouth_rock"
  | "australorp";
type Saison = "printemps" | "été" | "automne" | "hiver";

// Données de base sur les races (productivité moyenne par jour)

// A REVOIR!!
const productiviteRace: Record<Race, number> = {
  poule_rousse: 0.85, // Environ 310 œufs par an
  leghorn: 0.9, // Environ 320 œufs par an
  sussex: 0.75, // Environ 275 œufs par an
  orpington: 0.65, // Environ 240 œufs par an
  marans: 0.6, // Environ 220 œufs par an
  wyandotte: 0.7, // Environ 255 œufs par an
  rhode_island_red: 0.8, // Environ 290 œufs par an
  barnevelder: 0.65, // Environ 240 œufs par an
  plymouth_rock: 0.75, // Environ 275 œufs par an
  australorp: 0.85, // Environ 310 œufs par an
};

// Ajustements saisonniers
const facteurSaison: Record<Saison, number> = {
  printemps: 1.2, // Production maximale
  été: 1.0, // Production standard
  automne: 0.8, // Production réduite
  hiver: 0.6, // Production faible
};

// Fonction pour calculer le facteur lié à l'âge
const facteurAge = (age: number): number => {
  if (age < 6) return 0.2; // Très jeune (moins de 6 mois)
  if (age <= 18) return 1.0; // Age optimal (6-18 mois)
  if (age <= 36) return 0.8; // Production réduite (18-36 mois)
  return 0.4; // Production faible (plus de 3 ans)
};

// Fonction principale de prévision
export function prevoirOeufsParJour(
  race: Race,
  age: number,
  saison: Saison,
): number {
  // Validation des entrées
  if (age < 0) {
    throw new Error("L'âge doit être un nombre positif.");
  }

  // Calcul de la productivité
  const baseProductivite = productiviteRace[race];
  const modificateurAge = facteurAge(age);
  const modificateurSaison = facteurSaison[saison];

  // Nombre d'œufs prévus par jour
  const oeufsParJour = baseProductivite * modificateurAge * modificateurSaison;

  return Math.round(oeufsParJour * 10) / 10; // Arrondi à une décimale
}

// Exemple d'utilisation
const race: Race = "marans";
const age: number = 14; // en mois
const saison: Saison = "automne";

const prevision = prevoirOeufsParJour(race, age, saison);
console.log(`Nombre prévu d'œufs par jour: ${prevision}`);
