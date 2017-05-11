function Telefon(marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
}

Telefon.prototype.printInfo = function() { 
	console.log("Marka telefonu to " + this.marka + 
		", kolor to " + this.kolor + ", a cena to " + this.cena + "."); 
}

var iPhone6S = new Telefon("Apple", 2250, "srebrny");
var SamsungGalaxyS6 = new Telefon("Samsung Galaxy S6", 3500, "złoty");
var OnePlusOne = new Telefon("One Plus One", 1200, "zielony");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();