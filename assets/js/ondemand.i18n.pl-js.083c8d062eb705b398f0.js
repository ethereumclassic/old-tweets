(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1119:function(e,a,o){"use strict";var n=o(3)._register("pl"),t=function(e){var a=String(e).split("."),o=a[0],n=!a[1],t=o.slice(-1),i=o.slice(-2);return 1==e&&n?"one":n&&t>=2&&t<=4&&(i<12||i>14)?"few":n&&1!=o&&(0==t||1==t)||n&&t>=5&&t<=9||n&&i>=12&&i<=14?"many":"other"};function i(e,a,o,n,i){switch(t(e)){case"one":return a;case"few":return o;case"many":return n;default:return i}}function r(e,a){for(var o=0;o<a.length;o++){var n=a[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}n("bd4c3d18","Pobierz ponownie"),n("dae57baa","wype\u0142nij ten formularz"),n("h213e37d",function(e){return"Dzie\u0144 dobry, @"+e.userName+","}),n("adac1d25","Oto informacje z Twojego archiwum, kt\xf3re mog\u0105 by\u0107 dla Ciebie najbardziej przydatne."),n("e792ed49","Nie uda\u0142o si\u0119 za\u0142adowa\u0107 Strony G\u0142\xf3wnej"),n("db5927dc","Podsumowanie"),n("d3c63555","Oto kilka danych statystycznych z Twojego archiwum:"),n("f0472206","README"),n("jfd00c34","folder danych"),n("c4f8ac47","Tweety"),n("fbffbecb","Polubienia"),n("ecdaf192","Zablokowane konta"),n("e5c608f9","Wyciszone konta"),n("df98e6d9","Listy"),n("d183def2","Chwile"),n("dad4c74b","Zobacz"),n("ie98573b","Nie mo\u017cna wy\u015bwietli\u0107 tej informacji. Aby j\u0105 zobaczy\u0107, musisz ponownie rozpakowa\u0107 archiwum."),n("e2c00a0e",function(e){return"\u24b8 "+e.year+" Twitter, Inc."}),n("a6aeafeb","Centrum Prywatno\u015bci Twittera"),n("i3cb94db","Masz prawo wiedzie\u0107, jakie dane na Tw\xf3j temat zbieramy i w jaki spos\xf3b je wykorzystujemy."),n("fd7d9019","Dowiedz si\u0119 wi\u0119cej"),n("cd09a3c2","Twoje opcje prywatno\u015bci"),n("ic7e322d","Skorzystaj z wielu dost\u0119pnych opcji ustawie\u0144 prywatno\u015bci, aby u\u017cywa\u0107 Twittera w najbardziej dogodny dla Ciebie spos\xf3b."),n("deff5ed4","J\u0119zyk"),n("e2dfe155","Zmie\u0144 j\u0119zyk wy\u015bwietlania"),n("c586bb24","Wybierz j\u0119zyk, w kt\xf3rym maj\u0105 wy\u015bwietla\u0107 si\u0119 nag\u0142\xf3wki, przyciski i inne elementy tekstowe Twittera na tym koncie. Nie ma to wp\u0142ywu na j\u0119zyk tre\u015bci wy\u015bwietlanych na osi czasu."),n("ef35dfbf","J\u0119zyk wy\u015bwietlania"),n("e4cb8f8f","Zapisz"),n("b363cf17",function(e){return"Poniewa\u017c rozmiar Twojego archiwum przekracza "+e.size+" GB, nie mo\u017cna go otworzy\u0107 w tym widoku. Mo\u017cesz jednak wy\u015bwietli\u0107 zawarto\u015b\u0107 archiwum w folderze danych."}),n("g0619214","Nie mo\u017cna wy\u015bwietli\u0107 tutaj archiwum, bo jego rozmiar jest zbyt du\u017cy."),n("bd550e36","folderze danych"),n("ab73e5d3",function(e){return e.size+" KB"}),n("fe25ac98",function(e){return e.size+" MB"}),n("dd55750a","Twoje archiwum zawiera wszystkie dane dotycz\u0105ce Twojego konta aktualne w momencie wygenerowania archiwum."),n("j58dfe39","Wygenerowano dnia"),n("b09970bd","Szacowany rozmiar"),n("b3b293a1","Ukryj menu"),n("bacb0ed2","Strona G\u0142\xf3wna"),n("b747cc48","Konto"),n("fc594176","Prywatne wiadomo\u015bci"),n("b4d1578d","Bezpiecze\u0144stwo"),n("a03760ff","Personalizacja"),n("b449308c","Reklamy"),n("b0fc166e","Odpowiedzi"),n("f2017ac5","Tweety podane dalej"),n("ec451555","Tweet w Grupie dyskusyjnej"),n("e6580b36","Dalej"),n("g4c9627f","Wstecz"),n("ec6e8853","Wr\xf3\u0107"),n("fdfb88b8","Wyszukaj Tweety"),n("f12ed169","Filtry wyszukiwania"),n("ce97ada1","Usu\u0144 filtry"),n("e511b066","Wszystkie Tweety"),n("bcfc167d","Tylko multimedia"),n("a38c92f2","Tylko tekst"),n("cb360050","Od najnowszych"),n("f5228b07","Od najstarszych"),n("ed5d96a0","Poka\u017c"),n("ecd8d7d3","Sortuj chronologicznie"),n("bea20d4d","Daty"),n("fdb1297d","Od "),n("gd4ddeb4","Do "),n("efc5dd77","Zobacz na Twitterze"),n("f3aabb50","Nie wys\u0142a\u0142e\u015b/a\u015b jeszcze \u017cadnych Tweet\xf3w"),n("af9c4c44","Odtw\xf3rz film"),n("db70b04a","Informacje og\xf3lne"),n("b22ba8dc","Profil"),n("a0d100f8","Powi\u0105zane aplikacje"),n("haf26e7a","Kontakty"),n("h1ab74c0","Sesje"),n("eb4f1c12","Historia dost\u0119pu do konta"),n("ac6543d2",function(e){return"Utworzono za pomoc\u0105 "+e.createdVia}),n("f5539b09",function(e){return"Zmieniono "+e.changedAt}),n("d79553fc","Chro\u0144"),n("a38009bb","Wy\u0142\u0105cz ochron\u0119"),n("ebb5550a","Opcja: "),n("a450ed39","To s\u0105 og\xf3lne informacje powi\u0105zane z Twoim kontem."),n("a6368dcb","Nie znaleziono danych dotycz\u0105cych konta."),n("gc611216","Utworzenie konta"),n("b858720c","Identyfikator konta"),n("jddcdfb5","Strefa czasowa"),n("f562baf9","Adres IP u\u017cytkownika"),n("d0a2cd65","Adres e-mail"),n("ca948b38","Numer telefonu"),n("a0b1619f","Informacja o wieku"),n("h75fecfe","Zweryfikowano"),n("a97eb7e8","Tak"),n("a6adcbe2","Nie"),n("d0c13b0f","Zmiany adresu e-mail"),n("f3b7e4c1","Chronione dane dotycz\u0105ce historii"),n("i47fd245","Brak danych"),n("ea80569b"," do "),n("ge84fa17","Sp\xf3\u0142ka"),n("e2171091","Polityka Prywatno\u015bci"),n("dbc530a7","Warunki korzystania"),n("e8e530e9","Nazwa"),n("gff6e204","Opis"),n("hb589b3e","Uprawnienia"),n("g652ba51","Udzielono"),n("c2526d37","Nie masz \u017cadnych po\u0142\u0105czonych aplikacji"),n("ce84bf94","Centrum Pomocy"),n("a75a33f3","Twoja lista kontakt\xf3w jest pusta lub nie mamy do niej dost\u0119pu."),n("eef7aa2c","Nie znaleziono kontakt\xf3w"),n("e0988a03","cofnij jej dost\u0119p do Twojego konta"),n("f3ae1a6f","Dowiedz si\u0119 wi\u0119cej"),n("f70c934a","Nazwa u\u017cytkownika"),n("effec96f","Wy\u015bwietlana nazwa konta"),n("hfa811da","Obserwuj\u0105cy"),n("fd87318c","Obserwujesz"),n("g81fed0b","O mnie"),n("a6766a9e","Strona internetowa"),n("bfe77df7","Lokalizacja"),n("c4abb442","Zmiany wy\u015bwietlanej nazwy"),n("i7d6b90c","Obraz awatara"),n("d2aa6664","Obraz w nag\u0142\xf3wku"),n("h2a67073","ochrony Tweet\xf3w"),n("b2f2c9a2","Poka\u017c szczeg\xf3\u0142y"),n("f7a8b5e7","Ukryj szczeg\xf3\u0142y"),n("f298d79c","Zobacz reklam\u0119 na Twitterze"),n("f762d354","Promowany trend"),n("dc2b9300","Wiek"),n("b4cf4994","S\u0142owa kluczowe"),n("a385a137","Dopasowani odbiorcy (listy)"),n("a98a677f","Modele urz\u0105dze\u0144"),n("caf7be6e","Wydarzenia"),n("bc0e1f74","P\u0142e\u0107"),n("fccf8c3b","Lokalizacje"),n("b600f91b","J\u0119zyki"),n("gaa6f4f0","Operatorzy"),n("fccc5d35","Platformy"),n("b24af003","Wersje systemu OS"),n("c0ea46a6","Zachowania"),n("i40276f4","U\u017cytkownik podobny do obserwuj\u0105cego"),n("acdf7e38","Filmy i seriale"),n("cd7eeb0c","Targetowanie tylko przez WiFi"),n("a9de604a","Wydarzenia wideo na \u017cywo"),n("cc9c1e84","Publikacja tre\u015bci"),n("b9c99219","Tematy rozm\xf3w"),n("i87ec85e","Rodzaj targetowania"),n("fc53fe65","Targetowanie na podstawie u\u017cytkownik\xf3w"),n("d2fb9b2a","Targetowanie na podstawie podobnych u\u017cytkownik\xf3w"),n("g78431ba","Targetowanie na podstawie podobnych kampanii"),n("e730263c","Targetowanie na nowym urz\u0105dzeniu"),n("d5b2d63b","P\u0142ynne targetowanie"),n("b8790f32","Nieznane"),n("f75d1985","Oto lista reklam, kt\xf3re mog\u0142e\u015b/a\u015b widzie\u0107 na Twitterze. Zawiera ona informacje takie jak Twoja @nazwa_u\u017cytkownika oraz nazwa reklamodawcy i tre\u015b\u0107 reklamy. Je\u015bli chcesz dowiedzie\u0107 si\u0119, dlaczego wybrano dla Ciebie w\u0142a\u015bnie te reklamy, oraz aby uzyska\u0107 wi\u0119cej informacji, kliknij opcj\u0119 \u201ePoka\u017c szczeg\xf3\u0142y\u201d."),n("e154a141","Wyszukaj reklamy"),n("c13928a5","Nie ma \u017cadnych infornacji dotycz\u0105cych reklam. Wygl\u0105da na to, \u017ce nie wy\u015bwietlono Ci jeszcze \u017cadnych reklam."),n("a5178376","Przeszukaj wiadomo\u015bci"),n("a1c1e53e","Nie wys\u0142a\u0142e\u015b/a\u015b ani nie otrzyma\u0142e\u015b/a\u015b jeszcze \u017cadnych prywatnych wiadomo\u015bci."),n("eeb5bf00","Wys\u0142a\u0142e\u015b/a\u015b film"),n("d7edf1b1","Wys\u0142a\u0142e\u015b/a\u015b zdj\u0119cie"),n("j1b5f5c7","Nie uda\u0142o si\u0119 znale\u017a\u0107 rozmowy."),n("b46514f7","Nie wybrano \u017cadnej wiadomo\u015bci"),n("h6c25993","Do\u0142\u0105czy\u0142e\u015b/a\u015b do rozmowy"),n("ed8d5620","Wyszukaj polubienia"),n("h117ca98","Nie masz jeszcze \u017cadnych polubie\u0144"),n("fd73f6e8","Utworzone przez Ciebie"),n("h63f51be","Subskrybujesz"),n("fd8591d2","Listy, na kt\xf3ych jeste\u015b"),n("h4fd72b9","Szukaj list"),n("h1aadb42","Nie utworzono jeszcze \u017cadnej listy"),n("g174d5cb","Nie subskrybujesz jeszcze \u017cadnej listy"),n("hc086ec0","Nie dodano Ci\u0119 do \u017cadnych list"),n("hd84f30c","Nie utworzy\u0142e\u015b/a\u015b jeszcze \u017cadnej Chwili"),n("f1f4be42","Nie mo\u017cna znale\u017a\u0107 tej Chwili."),n("a4fa5e4d","Chwila"),n("fe0c78b7","Zablokowane konta"),n("baaf063b","Nikogo nie wyciszy\u0142e\u015b/a\u015b"),n("b2e67bb8","Nie zablokowano \u017cadnych kont"),n("fcb8139f","Wy\u015bwietl list\u0119 na Twitterze"),n("hbc3d07a","swoich ustawieniach"),n("h88485ae",function(e){return""+e.formattedCount}),n("c901f4b8",function(e){return"wyciszon"+i(e.count,"e konta","e konta","ych kont","ych kont")}),n("a8aeb17c",function(e){return"zablokowan"+i(e.count,"e konto","e konta","ych kont","ych kont")}),n("eb2a0213","Tweety i Fleets"),n("h9fa2c25","Fleets"),n("f12d439f","Prywatne wiadomo\u015bci"),n("c65cffee","Dane demograficzne"),n("dc8c70b9","Zainteresowania"),n("hd7191b2","Listy reklamodawc\xf3w"),n("d5924f36","Zapisane wyszukiwania"),n("i91e3f1b","Nie znaleziono \u017cadnych danych demograficznych"),n("f12a13a0","Data urodzenia"),n("e7d7128c","Twoje dane z Twittera"),n("fc1f2690"," (wy\u0142\u0105czone)"),n("bac9bfd9","Do Twojego konta nie przypisano jeszcze \u017cadnych zainteresowa\u0144."),n("d6281c2a","Ju\u017c nie obserwujesz"),n("aae750cb","zmienia\u0107"),n("ac8b1c8a","Ci reklamodawcy dodali Ci\u0119 do list swoich odbiorc\xf3w. Listy odbiorc\xf3w s\u0105 cz\u0119sto tworzone na podstawie list e-mailowych lub historii przegl\u0105darek. Pozwalaj\u0105 reklamodawcom trafi\u0107 do potencjalnych klient\xf3w lub do os\xf3b, kt\xf3re najprawdopodobniej s\u0105 zainteresowane ich ofert\u0105."),n("j69ff9c4","Nie znaleziono danych dotycz\u0105cych ustawie\u0144 reklam"),n("g443f4cb","Nie ma jeszcze miejsc powi\u0105zanych z Twoim kontem."),n("b2289376","Ustawienia lokalizacji"),n("h27aca22","Nie znaleziono zapisanych wyszukiwa\u0144 powi\u0105zanych z Twoim kontem.");var c=o(0);n("I18NFormatMessage",function(e){var a,o,n,t,i;function d(){return e.apply(this,arguments)||this}return o=e,(a=d).prototype=Object.create(o.prototype),a.prototype.constructor=a,a.__proto__=o,d.prototype.render=function(){return c.createElement.apply(c,this[this.props.$i18n].reduce(this.templateReducer,[c.Fragment,null]))},n=d,(t=[{key:"a68bfcab",get:function(){return["Co\u015b posz\u0142o nie tak, ale nie martw si\u0119 \u2013 spr\xf3buj ponownie. Je\u015bli b\u0142\u0105d wci\u0105\u017c wyst\u0119puje, ","."]}},{key:"aeedc89f",get:function(){return["To nie s\u0105 wszystkie dane z Twojego archiwum. Je\u015bli chcesz zobaczy\u0107 wszystko, otw\xf3rz folder danych. Obja\u015bnienie ka\u017cdego zbioru danych znajduje si\u0119 w pliku "," zawartym w tym samym folderze."]}},{key:"b192a8c3",get:function(){return["To nie s\u0105 wszystkie dane z Twojego archiwum. Je\u015bli chcesz zobaczy\u0107 wszystko, otw\xf3rz ",". Obja\u015bnienie ka\u017cdego zbioru danych znajduje si\u0119 w pliku "," zawartym w tym samym folderze."]}},{key:"h593f704",get:function(){return["Poniewa\u017c rozmiar Twojego archiwum przekracza "+this.props.size+" GB, nie mo\u017cna go otworzy\u0107 w tym widoku. Mo\u017cesz jednak wy\u015bwietli\u0107 zawarto\u015b\u0107 archiwum w ","."]}},{key:"dc274341",get:function(){return["Te aplikacje maj\u0105 dost\u0119p do wybranych lub wszystkich danych z Twojego konta. Dost\u0119pna jest r\xf3wnie\u017c informacja o rodzaju dost\u0119pu i dacie jego udzielenia. Wi\u0119cej informacji o aplikacjach stron trzecich i Twoich sesjach logowania znajdziesz w naszym ","."]}},{key:"d3d0737a",get:function(){return["Oto lista kontakt\xf3w, kt\xf3re doda\u0142e\u015b/a\u015b, aby znale\u017a\u0107 swoich znajomych lub spersonalizowa\u0107 tre\u015bci wy\u015bwietlane na Twitterze. Informacje dotycz\u0105ce dodawania kontakt\xf3w i zarz\u0105dzania nimi znajdziesz w naszym ","."]}},{key:"e48e7ad9",get:function(){return["Oto lista ostatnich logowa\u0144 na Twoje konto. Je\u015bli widzisz podejrzan\u0105 aktywno\u015b\u0107 z udzia\u0142em nieznanej aplikacji, ",". "]}},{key:"b4f3e44c",get:function(){return["Zawiera Twoj\u0105 histori\u0119 logowania, w tym informacj\u0119 o aplikacjach powi\u0105zanych z Twoim kontem oraz o miejscach, w kt\xf3rych przebywa\u0142e\u015b/a\u015b, korzystaj\u0105c z Twittera. W niekt\xf3rych przypadkach adres IP mo\u017ce r\xf3\u017cni\u0107 si\u0119 od Twojej fizycznej lokalizacji. Wi\u0119cej informacji znajdziesz w naszym ","."]}},{key:"b2e7db9d",get:function(){return["Te informacje s\u0105 dost\u0119pne na Twoim profilu. Je\u015bli wybra\u0142e\u015b/a\u015b opcj\u0119 ",", niekt\xf3re z tych informacji s\u0105 widoczne tylko dla os\xf3b, kt\xf3re Ci\u0119 obserwuj\u0105."]}},{key:"b0d29d01",get:function(){return[""," wys\u0142a\u0142/a film"]}},{key:"a0be60c5",get:function(){return[""," wys\u0142a\u0142/a zdj\u0119cie"]}},{key:"edc8b99e",get:function(){return["Zmieni\u0142e\u015b/a\u015b nazw\u0119 grupy na "]}},{key:"e9fdcd1a",get:function(){return[""," zmieni\u0142/a nazw\u0119 grupy na "]}},{key:"gbde7c07",get:function(){return[""," doda\u0142/a "]}},{key:"d668cefe",get:function(){return["Dodano "]}},{key:"jfc6c37c",get:function(){return["Doda\u0142e\u015b/a\u015b "]}},{key:"jd175a41",get:function(){return[""," opu\u015bci\u0142/a rozmow\u0119"]}},{key:"f89a35dd",get:function(){return[""," doda\u0142/a Ci\u0119"]}},{key:"bad364ba",get:function(){return["To jest lista wyciszonych przez Ciebie kont. W dowolnym momencie mo\u017cesz nimi zarz\u0105dza\u0107 w ","."]}},{key:"dad3fe4b",get:function(){return["To jest lista zablokowanych przez Ciebie kont. W dowolnym momencie mo\u017cesz nimi zarz\u0105dza\u0107 w ","."]}},{key:"c1f9cb79",get:function(){return[""," "]}},{key:"fd55c421",get:function(){return[""," "]}},{key:"c42254fb",get:function(){return["To s\u0105 dane demograficzne dotycz\u0105ce Twojego konta. Zawieraj\u0105 one informacje dodane przez Ciebie oraz automatycznie dopasowane do Twojego konta. Mo\u017cesz je edytowa\u0107 w zak\u0142adce ","."]}},{key:"h58ae65c",get:function(){return["Oto lista zagadnie\u0144, kt\xf3re wybrali\u015bmy dla Ciebie na podstawie Twojego profilu, Twojej aktywno\u015bci i temat\xf3w, kt\xf3re obserwujesz. Te informacje pomagaj\u0105 nam lepiej dostosowywa\u0107 wybierane dla Ciebie tre\u015bci, w tym reklamy. Mo\u017cesz dowolnie "," zawarto\u015b\u0107 tej listy."]}},{key:"fbcd7d5d",get:function(){return["Oto lista miejsc powi\u0105zanych z Twoim kontem na Twitterze na podstawie Twojej aktywno\u015bci. Mo\u017cesz usun\u0105\u0107 te dane ze swojego konta, korzystaj\u0105c z ",". Aby zdecydowa\u0107, w jaki spos\xf3b wykorzystujemy Twoj\u0105 histori\u0119 lokalizacji, dostosuj swoje ","."]}},{key:"templateReducer",get:function(){var e=c.Children.toArray(this.props.children);return function(a,o,n){return a.concat(o,e[n])}}}])&&r(n.prototype,t),i&&r(n,i),d}(o(3).I18NFormatMessage||c.Component));var d=o(7);o(9),o(10),o(11);d._validateParameterTypeNumber,d._validateParameterPresence;var w=d._numberRound,y=(d._numberFormat,d._numberFormatterFn),z=d._pluralGeneratorFn,s=(d._validateParameterTypeDate,d._dateToPartsFormat,d._dateToPartsFormatterFn),m=(d._dateFormat,d._dateFormatterFn);d.b1974190279=y(["",,1,0,1,,,,3,,"","#,##0.###","-#,##0.###","-","",w(),"\u221e","NaN",{".":",",",":"\xa0","%":"%","+":"+","-":"-",E:"E","\u2030":"\u2030"},,{3:{one:"0\xa0tys'.'",few:"0\xa0tys'.'",many:"0\xa0tys'.'",other:"0\xa0tys'.'"},4:{one:"00\xa0tys'.'",few:"00\xa0tys'.'",many:"00\xa0tys'.'",other:"00\xa0tys'.'"},5:{one:"000\xa0tys'.'",few:"000\xa0tys'.'",many:"000\xa0tys'.'",other:"000\xa0tys'.'"},6:{one:"0\xa0mln",few:"0\xa0mln",many:"0\xa0mln",other:"0\xa0mln"},7:{one:"00\xa0mln",few:"00\xa0mln",many:"00\xa0mln",other:"00\xa0mln"},8:{one:"000\xa0mln",few:"000\xa0mln",many:"000\xa0mln",other:"000\xa0mln"},9:{one:"0\xa0mld",few:"0\xa0mld",many:"0\xa0mld",other:"0\xa0mld"},10:{one:"00\xa0mld",few:"00\xa0mld",many:"00\xa0mld",other:"00\xa0mld"},11:{one:"000\xa0mld",few:"000\xa0mld",many:"000\xa0mld",other:"000\xa0mld"},12:{one:"0\xa0bln",few:"0\xa0bln",many:"0\xa0bln",other:"0\xa0bln"},13:{one:"00\xa0bln",few:"00\xa0bln",many:"00\xa0bln",other:"00\xa0bln"},14:{one:"000\xa0bln",few:"000\xa0bln",many:"000\xa0bln",other:"000\xa0bln"},maxExponent:14}],d("pl").pluralGenerator({})),d.b155312707=y(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",w(),"\u221e","NaN",{".":",",",":"\xa0","%":"%","+":"+","-":"-",E:"E","\u2030":"\u2030"}]),d.a1793204633=y(["",,1,0,0,,,,,,"","0","-0","-","",w(),"\u221e","NaN",{".":",",",":"\xa0","%":"%","+":"+","-":"-",E:"E","\u2030":"\u2030"}]),d.b244900517=y(["",,2,0,0,,,,,,"","00","-00","-","",w(),"\u221e","NaN",{".":",",",":"\xa0","%":"%","+":"+","-":"-",E:"E","\u2030":"\u2030"}]),d.a1975419755=z(function(e){var a=String(e).split("."),o=a[0],n=!a[1],t=o.slice(-1),i=o.slice(-2);return 1==e&&n?"one":n&&t>=2&&t<=4&&(i<12||i>14)?"few":n&&1!=o&&(0==t||1==t)||n&&t>=5&&t<=9||n&&i>=12&&i<=14?"many":"other"}),d.b624190422=s({1:d("pl").numberFormatter({raw:"0"}),2:d("pl").numberFormatter({raw:"00"})},{pattern:"d MMMM y HH:mm:ss z",timeSeparator:":",months:{M:{4:{1:"stycznia",2:"lutego",3:"marca",4:"kwietnia",5:"maja",6:"czerwca",7:"lipca",8:"sierpnia",9:"wrze\u015bnia",10:"pa\u017adziernika",11:"listopada",12:"grudnia"}}},gmtFormat:"GMT{0}",gmtZeroFormat:"GMT",hourFormat:["+H;-H","+H:mm;-H:mm"]}),d.a146409481=s({},{pattern:"ccccc",timeSeparator:":",days:{c:{5:{sun:"N",mon:"P",tue:"W",wed:"\u015a",thu:"C",fri:"P",sat:"S"}}}}),d.b1879772353=s({},{pattern:"LLL",timeSeparator:":",months:{L:{3:{1:"sty",2:"lut",3:"mar",4:"kwi",5:"maj",6:"cze",7:"lip",8:"sie",9:"wrz",10:"pa\u017a",11:"lis",12:"gru"}}}}),d.a1133157692=s({1:d("pl").numberFormatter({raw:"0"})},{pattern:"d MMM y",timeSeparator:":",months:{M:{3:{1:"sty",2:"lut",3:"mar",4:"kwi",5:"maj",6:"cze",7:"lip",8:"sie",9:"wrz",10:"pa\u017a",11:"lis",12:"gru"}}}}),d.b1281713965=s({1:d("pl").numberFormatter({raw:"0"}),2:d("pl").numberFormatter({raw:"00"})},{pattern:"h:mm a",timeSeparator:":",dayPeriods:{am:"AM",pm:"PM"}}),d.b1893034089=s({1:d("pl").numberFormatter({raw:"0"}),2:d("pl").numberFormatter({raw:"00"})},{pattern:"d MMM y, h:mm a",timeSeparator:":",months:{M:{3:{1:"sty",2:"lut",3:"mar",4:"kwi",5:"maj",6:"cze",7:"lip",8:"sie",9:"wrz",10:"pa\u017a",11:"lis",12:"gru"}}},dayPeriods:{am:"AM",pm:"PM"}}),d.a611126813=s({1:d("pl").numberFormatter({raw:"0"})},{pattern:"d MMMM y",timeSeparator:":",months:{M:{4:{1:"stycznia",2:"lutego",3:"marca",4:"kwietnia",5:"maja",6:"czerwca",7:"lipca",8:"sierpnia",9:"wrze\u015bnia",10:"pa\u017adziernika",11:"listopada",12:"grudnia"}}}}),d.b1015597503=m(d("pl").dateToPartsFormatter({datetime:"long"})),d.a897691858=m(d("pl").dateToPartsFormatter({skeleton:"ccccc"})),d.b2030945720=m(d("pl").dateToPartsFormatter({skeleton:"MMM"})),d.a1884440069=m(d("pl").dateToPartsFormatter({skeleton:"yMMMd"})),d.b2117874518=m(d("pl").dateToPartsFormatter({skeleton:"hm"})),d.b1465175520=m(d("pl").dateToPartsFormatter({skeleton:"yMMMdhm"})),d.a1513049012=m(d("pl").dateToPartsFormatter({date:"long"})),n("f9e9679f",d.b1974190279),n("ia24dc8c",d.b155312707),n("a54d3ef4",d.b1015597503),n("cad3f89f",d.a897691858),n("f3f5ce0b",d.b2030945720),n("jade381b",d.a1884440069),n("d725a288",d.b2117874518),n("bfbc051c",d.b1465175520),n("ba2e82a1",d.a1513049012)}}]);