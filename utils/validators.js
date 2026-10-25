const estNonVide = valeur =>
	typeof valeur === 'string' && valeur.trim().length > 0;

const estEmailValide = valeur =>
	typeof valeur === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valeur.trim());

module.exports = {
	estNonVide,
	estEmailValide
};