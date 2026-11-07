# VSISA – Virtual Simulator identification Signal Audio

[English](README.md) · **Français**

Identificateur de modes radio : **78 signaux simulés** (dont 18 sons de l'espace et 7 curiosités des ondes courtes en bonus), avec un **mode nuit** en nuances de rouge pour apprendre à reconnaître ce qu'on entend et ce qu'on voit sur un récepteur ou un SDR.

**Ouvrir la page : https://ic3fr.github.io/VSISA/** · 13 langues : menu en haut de la page, ou lien direct avec `#en`, `#es`, `#de`… à la fin de l'adresse.

## Ce qu'elle fait
- Pour chaque signal : le **son**, le **spectre** et le **waterfall** en direct, l'**empreinte** complète du signal et une fiche (principe, aspect à l'écran, fiche du livre).
- **Son mystère** : un signal au hasard, à reconnaître parmi quatre réponses, avec un score.
- Réglages : bruit ajouté, volume, lecture en boucle ; le curseur affiche la fréquence.
- Une seule page HTML, sans installation, qui marche **hors ligne** : télécharge `index.html` et ouvre-la dans un navigateur.

## Les signaux
- **Voix analogique** : AM, BLU / SSB, FM
- **Télégraphie** : CW (Morse)
- **Données** : RTTY, Packet APRS (AFSK 1200), PSK31, FT8, FT4, Olivia 8/250, Feld Hell, DMR / C4FM / NXDN / dPMR (4FSK), MT63, LoRa, MSK144, JT65, TETRA
- **Images** : SSTV (Martin M1), fax météo
- **Aviation, marine et secours** : sirène ELT, balise 406 MHz, ADS-B, ACARS, AIS, NAVTEX, HFDL, balise NDB, VOR, ILS
- **Appel, sous-tons et messagerie** : CTCSS, DTMF, Selcall CCIR, POCSAG / FLEX, ALE
- **Radiosondes, capteurs et objets connectés** : radiosondes RS41, M10 et M20, capteurs 433 MHz (OOK), capteurs de pneus (TPMS), Bluetooth (FHSS)
- **Modes HF et curiosités** : WSPR, QRSS, texte dans le waterfall, VARA / Pactor / ARDOP, sondeur ionosphérique, radar transhorizon, parasites d'alimentation
- **Diffusion et temps** : FM stéréo et RDS, DCF77, ALS162, WWV, MSF
- **Large bande** : OFDM, DSSS
- **Bonus : sons de l'espace** : raie de l'hydrogène (1420 MHz), sursauts radio du Soleil (types II et III), Jupiter (sursauts L et S), pulsar, échos de météores (GRAVES), sifflements VLF, tweeks, souffle VLF, chœur de l'aube, aurore radio, bruit galactique, Spoutnik 1, effet Doppler d'un satellite, télémétrie de CubeSat, ISS en FM, NOAA APT, écho de la Lune (EME)
- **Bonus : curiosités des ondes courtes** : UVB-76 « The Buzzer », « The Pip », « Squeaky Wheel », CODAR, STANAG 4285, Link-11, station de nombres (voix imitée)

Les signaux radio (AM, FM, AIS, LoRa…) sont montrés comme sur l'écran d'un SDR, autour d'une fréquence intermédiaire simulée ; certains sont à échelle réduite ou accélérée (c'est indiqué en haut de l'écran).

## 13 langues / 13 languages
| | |
|---|---|
| 🇫🇷 Français | Identificateur de modes radio : 78 signaux simulés, son, spectre, waterfall, quiz. `#fr` |
| 🇬🇧 English | Radio mode identifier: 78 simulated signals, sound, spectrum, waterfall, quiz. `#en` |
| 🇪🇸 Español | Identificador de modos de radio: 78 señales simuladas, sonido, espectro, cascada, test. `#es` |
| 🇩🇪 Deutsch | Funkbetriebsarten-Erkenner: 78 simulierte Signale, Ton, Spektrum, Wasserfall, Quiz. `#de` |
| 🇳🇱 Nederlands | Radiomodus-herkenner: 78 gesimuleerde signalen, geluid, spectrum, waterval, quiz. `#nl` |
| 🇨🇿 Čeština | Rozpoznávač rádiových druhů provozu: 78 simulovaných signálů, zvuk, spektrum, vodopád, kvíz. `#cs` |
| 🇵🇹 Português | Identificador de modos de rádio: 78 sinais simulados, som, espetro, cascata, quiz. `#pt` |
| 🇮🇹 Italiano | Identificatore di modi radio: 78 segnali simulati, suono, spettro, cascata, quiz. `#it` |
| 🇵🇱 Polski | Rozpoznawacz emisji radiowych: 78 symulowane sygnały, dźwięk, widmo, wodospad, quiz. `#pl` |
| 🇷🇺 Русский | Определитель видов радиосигналов: 78 смоделированных сигнала, звук, спектр, водопад, викторина. `#ru` |
| 🇺🇦 Українська | Визначник видів радіосигналів: 78 змодельовані сигнали, звук, спектр, водоспад, вікторина. `#uk` |
| 🇨🇳 中文 | 无线电模式识别器：78 种模拟信号，声音、频谱、瀑布图、测验。`#zh` |
| 🇯🇵 日本語 | 無線モード識別器：78 種類のシミュレーション信号、音、スペクトラム、ウォーターフォール、クイズ。`#ja` |

La langue est choisie automatiquement selon le navigateur ; le menu permet d'en changer. Le bouton **Mode nuit** passe toute la page en nuances de rouge pour garder la vision de nuit (le choix est retenu).

## Modifier la page
`index.html` est construite par `python3 src/build.py` à partir de `src/template.html` et des fichiers de langue `src/i18n/<langue>.json`. Corrige une traduction dans le fichier de sa langue, puis relance la commande.

## Le livre
Cette page accompagne la fiche « Visualiser un signal » du livre **OpenBookRadio** (guide d'écoute radio, gratuit). Les numéros de fiche affichés renvoient au livre.

## Licence
Creative Commons **BY-NC-SA 4.0** : gratuit, partage autorisé avec attribution, pas d'usage commercial, même licence pour les dérivés. Ne pas vendre.

Auteur : ic3ric4 (https://github.com/ic3fr). Documentation et code réalisés à l'aide d'IA.
