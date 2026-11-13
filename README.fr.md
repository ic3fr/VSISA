# VSISA V1.9 – Virtual Simulator identification Signal Audio

[English](README.md) · **Français**

[![Visits](https://abacus.jasoncameron.dev/get/ic3fr-vsisa/visits/shield?text=visits)](https://ic3fr.github.io/VSISA/) [![Plays](https://abacus.jasoncameron.dev/get/ic3fr-vsisa/plays/shield?text=plays)](https://ic3fr.github.io/VSISA/)

Identificateur de modes radio : **127 signaux simulés** (dont 18 sons de l'espace, 7 curiosités des ondes courtes, 13 sons sous-marins, 7 sons de la Terre et une comparaison de son numérique en bonus), avec cinq **modes d'affichage** (jour, nuit en nuances de rouge, et phosphore vert, bleu ou orange comme les vieux ordinateurs) pour apprendre à reconnaître ce qu'on entend et ce qu'on voit sur un récepteur ou un SDR.

**Ouvrir la page : https://ic3fr.github.io/VSISA/** · **[📥 Télécharger le livre OpenBookRadio](https://github.com/ic3fr/OpenBookRadio/releases)** (gratuit, PDF et EPUB) · 20 langues : menu en haut de la page, ou lien direct avec `#en`, `#es`, `#de`… à la fin de l'adresse.

## Ce qu'elle fait
- Pour chaque signal : le **son**, le **spectre** et le **waterfall** en direct, l'**empreinte** complète du signal, un **waterfall 3D** qu'on fait tourner à la souris ou au doigt et une fiche (principe, aspect à l'écran, fiche du livre).
- **Son mystère** : un signal au hasard, à reconnaître parmi quatre réponses, avec un score.
- Réglages : bruit ajouté, volume, lecture en boucle ; le curseur affiche la fréquence.
- **Compteurs à rouleaux** en haut de la page en ligne : visites et écoutes.
- En AM, BLU, FM et FM stéréo, on entend le **son démodulé**, comme sur un récepteur, avec une voix et une musique de synthèse (la FM stéréo est en vraie stéréo : au casque).
- Une seule page HTML, sans installation, qui marche **hors ligne** : télécharge `index.html` et ouvre-la dans un navigateur.

## Les signaux
- **Voix analogique** : AM, BLU / SSB, FM
- **Télégraphie** : CW (Morse)
- **Données** : RTTY, RTTY météo du DWD, Packet APRS (AFSK 1200), PSK31, FT8, FT4, Olivia 8/250, MFSK16, Feld Hell, DMR / C4FM / NXDN / dPMR (4FSK), MT63, LoRa, MSK144, JT65, TETRA
- **Images** : SSTV (Martin M1), fax météo
- **Aviation, marine et secours** : sirène ELT, balise 406 MHz, ADS-B, ACARS, AIS, NAVTEX, SITOR-A, ASN VHF (canal 70), HFDL, SELCAL aviation, balise NDB, VOR, ILS
- **Appel, sous-tons et messagerie** : CTCSS, DCS, tonalité 1750 Hz, DTMF, Selcall CCIR, POCSAG / FLEX, ALE
- **Radiosondes, capteurs et objets connectés** : radiosondes RS41, M10 et M20, capteurs 433 MHz (OOK), capteurs de pneus (TPMS), Bluetooth (FHSS)
- **Modes HF et curiosités** : WSPR, QRSS, balises NCDXF, texte dans le waterfall, VARA / Pactor / ARDOP, sondeur ionosphérique, radar transhorizon, parasites d'orage (QRN), fading sélectif (QSB), parasites d'alimentation, CPL, clôture électrique, téléphone GSM
- **Diffusion et temps** : FM stéréo et RDS, DCF77, ALS162, WWV, MSF, JJY (Japon), RWM (Russie), BPM (Chine)
- **Large bande** : OFDM, DSSS
- **Bonus : sons de l'espace** : raie de l'hydrogène (1420 MHz), signal « Wow! », sursauts radio du Soleil (types II et III), éruption solaire vue en VLF (SID), Jupiter (sursauts L et S), pulsar, sursaut radio rapide (FRB), échos de météores (GRAVES), sifflements VLF, tweeks, souffle VLF, chœur de l'aube, aurore radio, bruit galactique, Spoutnik 1, bips Quindar d'Apollo, effet Doppler d'un satellite, télémétrie de CubeSat, ISS en FM, NOAA APT, Meteor-M LRPT, écho de la Lune (EME)
- **Bonus : curiosités des ondes courtes** : UVB-76 « The Buzzer », « The Pip », « Squeaky Wheel », balises à une lettre, CODAR, STANAG 4285, Link-11, station de nombres (voix imitée)
- **Bonus : sons sous-marins** : baleine à bosse, rorquals bleu et commun, clics du cachalot, dauphin, orque, phoque barbu, crevettes-pistolets, ping de sonar, hélice de navire, téléphone sous-marin (UQC), radio des sous-marins ZEVS à 82 Hz, le « Bloop »
- **Bonus : sons de la Terre** (ondes sismiques et infrasons, accélérés pour être entendus) : séismes proche et lointain, essaim sismique, trémor harmonique du Redoubt, infrasons du Stromboli, microséisme de la houle, modes propres de la Terre
- **Bonus : son numérique (bits et kHz)** : le même air original façon jeu vidéo en 2, 4, 8, 16 et 32 bits, puis échantillonné à 3 et 6 kHz, pour voir et entendre le bruit de quantification et la perte des aigus

Les signaux radio (AM, FM, AIS, LoRa…) sont montrés comme sur l'écran d'un SDR, autour d'une fréquence intermédiaire simulée ; certains sont à échelle réduite ou accélérée (c'est indiqué en haut de l'écran).

## 20 langues / 20 languages
| | |
|---|---|
| 🇨🇿 Čeština | Rozpoznávač rádiových druhů provozu: 127 simulovaných signálů, zvuk, spektrum, vodopád, kvíz. `#cs` |
| 🇩🇰 Dansk | Identifikation af radiomodes: 127 simulerede signaler, lyd, spektrum, vandfald, quiz. `#da` |
| 🇩🇪 Deutsch | Funkbetriebsarten-Erkenner: 127 simulierte Signale, Ton, Spektrum, Wasserfall, Quiz. `#de` |
| 🇬🇧 English | Radio mode identifier: 127 simulated signals, sound, spectrum, waterfall, quiz. `#en` |
| 🇪🇸 Español | Identificador de modos de radio: 127 señales simuladas, sonido, espectro, cascada, test. `#es` |
| 🇫🇷 Français | Identificateur de modes radio : 127 signaux simulés, son, spectre, waterfall, quiz. `#fr` |
| 🇮🇹 Italiano | Identificatore di modi radio: 127 segnali simulati, suono, spettro, cascata, quiz. `#it` |
| 🇭🇺 Magyar | Rádiós üzemmódok azonosítója: 127 szimulált jel, hang, spektrum, vízesés, kvíz. `#hu` |
| 🇳🇱 Nederlands | Radiomodus-herkenner: 127 gesimuleerde signalen, geluid, spectrum, waterval, quiz. `#nl` |
| 🇳🇴 Norsk | Identifisering av radiomoduser: 127 simulerte signaler, lyd, spektrum, foss, quiz. `#nb` |
| 🇵🇱 Polski | Rozpoznawacz emisji radiowych: 127 symulowanych sygnałów, dźwięk, widmo, wodospad, quiz. `#pl` |
| 🇵🇹 Português | Identificador de modos de rádio: 127 sinais simulados, som, espetro, cascata, quiz. `#pt` |
| 🇷🇴 Română | Identificator de moduri radio: 127 de semnale simulate, sunet, spectru, cascadă, test. `#ro` |
| 🇫🇮 Suomi | Radiolähetelajien tunnistin: 127 simuloitua signaalia, ääni, spektri, vesiputous, tietovisa. `#fi` |
| 🇸🇪 Svenska | Identifiering av radiomoder: 127 simulerade signaler, ljud, spektrum, vattenfall, frågesport. `#sv` |
| 🇬🇷 Ελληνικά | Αναγνώριση ραδιοφωνικών τρόπων εκπομπής: 127 προσομοιωμένα σήματα, ήχος, φάσμα, καταρράκτης, κουίζ. `#el` |
| 🇷🇺 Русский | Определитель видов радиосигналов: 127 смоделированных сигналов, звук, спектр, водопад, викторина. `#ru` |
| 🇺🇦 Українська | Визначник видів радіосигналів: 127 змодельованих сигналів, звук, спектр, водоспад, вікторина. `#uk` |
| 🇨🇳 中文 | 无线电模式识别器：127 种模拟信号，声音、频谱、瀑布图、测验。`#zh` |
| 🇯🇵 日本語 | 無線モード識別器：127 種類のシミュレーション信号、音、スペクトラム、ウォーターフォール、クイズ。`#ja` |

La langue est choisie automatiquement d'après les réglages du navigateur (toutes les langues préférées sont regardées : un visiteur de Chine, de Taïwan ou du Brésil arrive directement en chinois ou en portugais ; sinon en anglais) ; le menu permet d'en changer. L'adresse ne prend une fin `#langue` que si quelqu'un choisit une langue dans le menu : un lien simple s'ouvre donc toujours dans la langue de chaque visiteur. Le menu **Affichage** propose jour, **nuit** (nuances de rouge, pour garder la vision de nuit) et **phosphore vert, bleu ou orange** (comme les vieux terminaux, avec des lignes de balayage) ; le choix est retenu.

## Compteur
La page en ligne compte les visites (une fois par session de navigateur) et les écoutes avec [Abacus](https://v2.jasoncameron.dev/abacus), un service de comptage gratuit, sans cookie et sans donnée personnelle conservée. Les totaux s'affichent en haut de la page, en chiffres qui tournent comme un compteur mécanique, et dans les badges ci-dessus. La copie téléchargée (hors ligne) ne compte rien.

## Modifier la page
`index.html` est construite par `python3 src/build.py` à partir de `src/template.html` et des fichiers de langue `src/i18n/<langue>.json`. Corrige une traduction dans le fichier de sa langue, puis relance la commande. `node src/check.js index.html` vérifie chaque signal (textes manquants, pics du spectre).

## Le livre
Cette page accompagne la fiche « Visualiser un signal » du livre **OpenBookRadio** (guide d'écoute radio, gratuit) : [le télécharger ici](https://github.com/ic3fr/OpenBookRadio/releases). Les numéros de fiche affichés renvoient au livre.

## Licence
Creative Commons **BY-NC-SA 4.0** : gratuit, partage autorisé avec attribution, pas d'usage commercial, même licence pour les dérivés. Ne pas vendre.

Auteur : ic3ric4 (https://github.com/ic3fr). Documentation et code réalisés à l'aide d'IA.
