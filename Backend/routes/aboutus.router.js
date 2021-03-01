const router = require('express').Router();

let message = 'Im Rahmen des Moduls Projektmanagement inklusive Softwareprojekt und im Auftrag des Umweltbundesamt (UBA) war es das Ziel, einen Prototypen für eine Service-Schnittstelle, durch eine direkte Verknüpfung mit dem Chemikalien-Informationssystem ChemInfo/GSBL zu entwickeln. Vertreten wurde das UBA von Frau Dr. rer. nat. Gerlinde Knetsch.\n' +
  'Neben der Entwicklung und den damit verbundene Aufgaben der Schnittstelle sollte auch ein Projektplan konzipiert werden, um Grundlagen des Projektmanagement zu erlernen.\n'

router.get('/', async (req, res) => {
  res.render('aboutus', {msg: message})
});

module.exports = router;