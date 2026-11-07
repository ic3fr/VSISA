# VSISA – Virtual Simulator identification Signal Audio

Identificateur de modes radio : **42 signaux simulés + 11 sons de l'espace en bonus** pour apprendre à reconnaître ce qu'on entend et ce qu'on voit sur un récepteur ou un SDR.

**Ouvrir la page : https://ic3fr.github.io/VSISA/** · 13 langues : menu en haut de la page, ou lien direct avec `#en`, `#es`, `#de`… à la fin de l'adresse.

## Ce qu'elle fait
- Pour chaque signal : le **son**, le **spectre** et le **waterfall** en direct, l'**empreinte** complète du signal et une fiche (principe, aspect à l'écran, fiche du livre).
- **Son mystère** : un signal au hasard, à reconnaître parmi quatre réponses, avec un score.
- Réglages : bruit ajouté, volume, lecture en boucle ; le curseur affiche la fréquence.
- Une seule page HTML, sans installation, qui marche **hors ligne** : télécharge `index.html` et ouvre-la dans un navigateur.

## Les signaux
- **Voix analogique** : AM, BLU / SSB, FM
- **Télégraphie** : CW (Morse)
- **Données** : RTTY, Packet APRS (AFSK 1200), PSK31, FT8, FT4, Olivia 8/250, Feld Hell, DMR / C4FM / NXDN / dPMR (4FSK), MT63, LoRa
- **Images** : SSTV (Martin M1), fax météo
- **Aviation, marine et secours** : sirène ELT, balise 406 MHz, ADS-B, ACARS, AIS, NAVTEX, HFDL
- **Appel, sous-tons et messagerie** : CTCSS, DTMF, Selcall CCIR, POCSAG / FLEX, ALE
- **Radiosondes, capteurs et objets connectés** : radiosonde RS41, capteurs 433 MHz (OOK), Bluetooth (FHSS)
- **Modes HF et curiosités** : WSPR, QRSS, texte dans le waterfall, VARA / Pactor / ARDOP, sondeur ionosphérique, radar transhorizon, parasites d'alimentation
- **Diffusion et temps** : FM stéréo et RDS, DCF77
- **Large bande** : OFDM, DSSS
- **Bonus : sons de l'espace** : raie de l'hydrogène (1420 MHz), sursauts radio du Soleil, Jupiter (sursauts L et S), pulsar, échos de météores (GRAVES), sifflements VLF, chœur de l'aube, Spoutnik 1, effet Doppler d'un satellite, NOAA APT, écho de la Lune (EME)

Les signaux radio (AM, FM, AIS, LoRa…) sont montrés comme sur l'écran d'un SDR, autour d'une fréquence intermédiaire simulée ; certains sont à échelle réduite ou accélérée (c'est indiqué en haut de l'écran).

## 13 langues / 13 languages
| | |
|---|---|
| 🇫🇷 Français | Identificateur de modes radio : 42 signaux simulés, son, spectre, waterfall, quiz. `#fr` |
| 🇬🇧 English | Radio mode identifier: 42 simulated signals, sound, spectrum, waterfall, quiz. `#en` |
| 🇪🇸 Español | Identificador de modos de radio: 42 señales simuladas, sonido, espectro, cascada, test. `#es` |
| 🇩🇪 Deutsch | Funkbetriebsarten-Erkenner: 42 simulierte Signale, Ton, Spektrum, Wasserfall, Quiz. `#de` |
| 🇳🇱 Nederlands | Radiomodus-herkenner: 42 gesimuleerde signalen, geluid, spectrum, waterval, quiz. `#nl` |
| 🇨🇿 Čeština | Rozpoznávač rádiových druhů provozu: 42 simulovaných signálů, zvuk, spektrum, vodopád, kvíz. `#cs` |
| 🇵🇹 Português | Identificador de modos de rádio: 42 sinais simulados, som, espetro, cascata, quiz. `#pt` |
| 🇮🇹 Italiano | Identificatore di modi radio: 42 segnali simulati, suono, spettro, cascata, quiz. `#it` |
| 🇵🇱 Polski | Rozpoznawacz emisji radiowych: 42 symulowane sygnały, dźwięk, widmo, wodospad, quiz. `#pl` |
| 🇷🇺 Русский | Определитель видов радиосигналов: 42 смоделированных сигнала, звук, спектр, водопад, викторина. `#ru` |
| 🇺🇦 Українська | Визначник видів радіосигналів: 42 змодельовані сигнали, звук, спектр, водоспад, вікторина. `#uk` |
| 🇨🇳 中文 | 无线电模式识别器：42 种模拟信号，声音、频谱、瀑布图、测验。`#zh` |
| 🇯🇵 日本語 | 無線モード識別器：42 種類のシミュレーション信号、音、スペクトラム、ウォーターフォール、クイズ。`#ja` |

La langue est choisie automatiquement selon le navigateur ; le menu permet d'en changer.

## Modifier la page
`index.html` est construite par `python3 src/build.py` à partir de `src/template.html` et des fichiers de langue `src/i18n/<langue>.json`. Corrige une traduction dans le fichier de sa langue, puis relance la commande.

## Le livre
Cette page accompagne la fiche « Visualiser un signal » du livre **OpenBookRadio** (guide d'écoute radio, gratuit). Les numéros de fiche affichés renvoient au livre.

## Licence
Creative Commons **BY-NC-SA 4.0** : gratuit, partage autorisé avec attribution, pas d'usage commercial, même licence pour les dérivés. Ne pas vendre.

Auteur : ic3ric4 (https://github.com/ic3fr). Documentation et code réalisés à l'aide d'IA.
