/*
 * Globalize Culture nb-NO
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "nb-NO", "default", {
	name: "nb-NO",
	englishName: "Norwegian, Bokmål (Norway)",
	nativeName: "norsk, bokmål (Norge)",
	language: "nb",
	numberFormat: {
		",": " ",
		".": ",",
		negativeInfinity: "-INF",
		positiveInfinity: "INF",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["$ -n","$ n"],
			",": " ",
			".": ",",
			symbol: "kr"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],
				namesAbbr: ["sø","ma","ti","on","to","fr","lø"],
				namesShort: ["sø","ma","ti","on","to","fr","lø"]
			},
			months: {
				names: ["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember",""],
				namesAbbr: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd.MM.yyyy",
				D: "d. MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "d. MMMM yyyy HH:mm",
				F: "d. MMMM yyyy HH:mm:ss",
				M: "d. MMMM",
				Y: "MMMM yyyy"
			}
		}
	},
	messages: {
	    "Connection": "Forbindelse",
    "Defaults": "Vanlige",
    "Login": "Logg Inn",
    "File": "Fil",
    "Exit": "Avslutt",
    "Help": "Hjelp",
    "About": "Om",
    "Host": "Maskin",
    "Database": "Database",
    "User": "Bruker ID",
    "EnterUser": "Skriv  Applikasjon Bruker ID",
    "Password": "Passord",
    "EnterPassword": "Skriv Applikasjon Passordet",
    "Language": "Språk",
    "SelectLanguage": "Velg ønsket Språk",
    "Role": "Rolle",
    "Client": "Klient",
    "Organization": "Organisasjon",
    "Date": "Dato",
    "Warehouse": "Varehus",
    "Printer": "Skriver",
    "Connected": "Oppkoblett",
    "NotConnected": "Ikke Oppkoblet",
    "DatabaseNotFound": "Database ikke funnet",
    "UserPwdError": "Bruker passer ikke til passordet",
    "RoleNotFound": "Role not found/complete",
    "Authorized": "Autorisert",
    "Ok": "Ok",
    "Cancel": "Avbryt",
    "VersionConflict": "Versions Konflikt:",
    "VersionInfo": "Server <> Klient",
    "PleaseUpgrade": "Vennligst kjør oppdaterings programet",

    //New Resource

    "Back": "bakover",
    "SelectRole": "Velg rolle",
    "SelectOrg": "Velg organisasjon",
    "SelectClient": "Velg klient",
    "SelectWarehouse": "Velg lager",
    "VerifyUserLanguage": "Kontroller språk for",
    "LoadingPreference": "Lasting preferanse",
    "Completed": "fullkommen",
        "RememberMe": "Husk meg",
        "FillMandatoryFields": "Fyll obligatoriske felt",
        "BothPwdNotMatch": "Begge passordene må samsvare.",
        "mustMatchCriteria": "Minimum lengde for passord er 5. Passord må ha minst 1 store bokstaver, 1 små bokstaver, ett spesialtegn (@ $!% *? &) Og ett siffer. Passord må starte med tegn.",
        "NotLoginUser": "Bruker kan ikke logge inn på systemet",
        "MaxFailedLoginAttempts": "Brukerkontoen er låst. Maksimum mislykkede påloggingsforsøk overstiger den definerte grensen. Ta kontakt med administrator.",
        "UserNotFound": "Brukernavn er feil.",
        "RoleNotDefined": "Ingen rolle er definert for denne brukeren",
        "oldNewSamePwd": "gammelt passord og nytt passord må være annerledes.",
        "NewPassword": "Nytt passord",
        "NewCPassword": "Bekrefte nytt passord",
        "EnterOTP": "Skriv inn OTP",
        "WrongOTP": "Feil OTP angitt",
        "ScanQRCode": "Skann koden med Google Authenticator",
		"EnterVerCode": "Skriv inn OTP generert av mobilapplikasjonen din",
		"EnterVAVerCode": "Skriv inn OTP mottatt på din registrerte mobil",
		"SkipThisTime": "Hopp over denne gangen",
		"ResendOTP": "Send OTP på nytt",
		"CapsLockOn": "Caps Lock er på",
	}
});

}( this ));
