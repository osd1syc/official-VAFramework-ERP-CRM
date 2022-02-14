/*
 * Globalize Culture ms-MY
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

Globalize.addCultureInfo( "ms-MY", "default", {
	name: "ms-MY",
	englishName: "Malay (Malaysia)",
	nativeName: "Bahasa Melayu (Malaysia)",
	language: "ms",
	numberFormat: {
		currency: {
			decimals: 0,
			symbol: "RM"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],
				namesAbbr: ["Ahad","Isnin","Sel","Rabu","Khamis","Jumaat","Sabtu"],
				namesShort: ["A","I","S","R","K","J","S"]
			},
			months: {
				names: ["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember",""],
				namesAbbr: ["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogos","Sept","Okt","Nov","Dis",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd/MM/yyyy",
				D: "dd MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dd MMMM yyyy H:mm",
				F: "dd MMMM yyyy H:mm:ss",
				M: "dd MMMM",
				Y: "MMMM yyyy"
			}
		}
    },
    // For localized strings
    messages: {
        "Connection": "Sambungan",
        "Defaults": "Defaults",
        "Login": "Lalai",
        "File": "Fail",
        "Exit": "Keluar",
        "Help": "Tolonglah",
        "About": "Mengenai",
        "Host": "Pelayan",
        "Database": "Pangkalan data",
        "User": "ID Pengguna",
        "EnterUser": "Masukkan ID Pengguna Aplikasi",
        "Password": "Kata Laluan",
        "EnterPassword": "Masukkan Kata Laluan Aplikasi",
        "Language": "Bahasa",
        "SelectLanguage": "Pilih bahasa anda",
        "Role": "Peranan",
        "Client": "Pelanggan",
        "Organization": "Pertubuhan",
        "Date": "Tarikh",
        "Warehouse": "Gudang",
        "Printer": "Mesin pencetak",
        "Connected": "Bersambung",
        "NotConnected": "Tidak Bersambung",
        "DatabaseNotFound": "Pangkalan data tidak dijumpai",
        "UserPwdError": "Pengguna tidak sepadan dengan kata laluan",
        "RoleNotFound": "Peranan tidak dijumpai / lengkap",
        "Authorized": "Dibenar",
        "Ok": "Okey",
        "Cancel": "Batal",
        "VersionConflict": "Konflik Versi:",
        "VersionInfo": "Pelayan <> Pelanggan",
        "PleaseUpgrade": "Sila muat turun Versi baru dari Pelayan",
        "Configure": "Konfigurasikan Aplikasi",
        "GetDefaultPort": "Dapatkan Default Port untuk pangkalan data",
        "DatabaseName": "Nama Pangkalan Data",
        "DatabaseType": "Jenis Pangkalan Data",
        "TestConnection": "Sambungan Ujian",
        "Success": "Kejayaan",
        "Failed": "Gagal",
        "AppsType": "Jenis Permohonan",
        "AppsHost": "Host Permohonan",
        "AppsPort": "Port Aplikasi",
        "TestApps": "Pelayan Aplikasi Uji",
        "CConnectionDialog": "Sambungan VAdvantage",
        "ServerNotActive": "Permohonan Ujian",
        "ConnectionError": "Sambungan VAdvantage",
        "GoodMorning": "Selamat Pagi",
        "GoodAfternoon": "Selamat petang",
        "GoodEvening": "Selamat petang",

        //New Resource



        "Back": "Belakang",
        "SelectRole": "Pilih Peranan",
        "SelectOrg": "Pilih Organisasi",
        "SelectClient": "Pilih Pelanggan",
        "SelectWarehouse": "Pilih Gudang",
        "SelectDate": "Pilih Tarikh",

        "VerifyUserLanguage": "Mengesahkan pengguna dan bahasa",
        "LoadingPreference": "Memuatkan Keutamaan",
        "Completed": "Selesai",
        //new
        "RememberMe": "Ingatlah Aku",
        "FillMandatoryFields": "Isi Bidang Wajib",
        "BothPwdNotMatch": "Kedua-dua kata laluan mesti sepadan.",
        "mustMatchCriteria": "Panjang minimum untuk kata laluan adalah 5. Kata laluan mesti mempunyai sekurang-kurangnya 1 huruf besar, 1 watak huruf kecil, satu watak khas (@ $!% *? &) Dan satu digit. Kata laluan mesti bermula dengan watak.",
        "NotLoginUser": "Pengguna tidak boleh masuk ke dalam sistem",
        "MaxFailedLoginAttempts": "Akaun pengguna dikunci. Percubaan masuk yang gagal maksimum melebihi had yang ditentukan. Sila hubungi pentadbir.",
        "UserNotFound": "Nama pengguna tidak betul.",
        "RoleNotDefined": "Tiada peranan yang ditentukan untuk pengguna ini",
        "oldNewSamePwd": "kata laluan lama dan kata laluan baru mesti berbeza.",
        "NewPassword": "Kata Laluan VA Baru",
        "NewCPassword": "Sahkan Kata Laluan VA Baru",
        "EnterOTP": "Masukkan OTP",
        "WrongOTP": "OTP Salah Dimasukkan",
        "ScanQRCode": "Imbas kod dengan Google Authenticator",
        "EnterVerCode": "Masukkan OTP yang dihasilkan oleh aplikasi mudah alih anda",
        "PwdExpired": "Kata Laluan Pengguna Tamat Tempoh",
        "ActDisabled": "Akaun telah dilumpuhkan",
        "ActExpired": "Akaun telah Tamat Tempoh",
        "AdminUserNotFound": "Nama Pengguna Pentadbir tidak betul.",
        "AdminUserPwdError": "Pengguna Pentadbir tidak sepadan dengan kata laluan",
        "AdminPwdExpired": "Kata Laluan Pengguna Pentadbir Tamat Tempoh",
        "AdminActDisabled": "Akaun Pentadbir telah dilumpuhkan",
        "AdminActExpired": "Akaun Pentadbir Tamat Tempoh",
        "AdminMaxFailedLoginAttempts": "Akaun Pengguna Pentadbir dikunci. Percubaan masuk yang gagal maksimum melebihi had yang ditentukan. Sila hubungi pentadbir.",
        "EnterVAVerCode": "Masukkan OTP yang diterima di telefon bimbit berdaftar anda",
        "SkipThisTime": "Langkau kali ini",
        "ResendOTP": "Hantar semula OTP",
        "CapsLockOn": "Kunci topi dihidupkan",
    }
});

}( this ));
