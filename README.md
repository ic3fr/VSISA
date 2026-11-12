# VSISA – Virtual Simulator identification Signal Audio

**English** · [Français](README.fr.md)

[![Visits](https://abacus.jasoncameron.dev/get/ic3fr-vsisa/visits/shield?text=visits)](https://ic3fr.github.io/VSISA/) [![Plays](https://abacus.jasoncameron.dev/get/ic3fr-vsisa/plays/shield?text=plays)](https://ic3fr.github.io/VSISA/)

Radio mode identifier: **78 simulated signals** (including 18 sounds from space and 7 shortwave curiosities as bonuses), with five **display modes** (day, red night mode, and green, blue or amber phosphor like old computer screens), to learn to recognise what you hear and see on a receiver or an SDR.

**Open the page: https://ic3fr.github.io/VSISA/** · **[📥 Download the OpenBookRadio book](https://github.com/ic3fr/OpenBookRadio/releases)** (free, PDF and EPUB) · 13 languages: menu at the top of the page, or a direct link ending in `#en`, `#fr`, `#de`…

## What it does
- For each signal: the **sound**, the live **spectrum** and **waterfall**, the full **footprint** of the signal, and a fact card (principle, what it looks like on screen, sheet number in the book).
- **Mystery sound**: a random signal to identify among four answers, with a score.
- Settings: added noise, volume, loop playback; the cursor shows the frequency.
- **Display** menu: day, **night** (shades of red, to keep your night vision) or **green, blue or amber phosphor** (like old computer terminals, with scan lines); your choice is remembered.
- A single HTML page, nothing to install, that works **offline**: download `index.html` and open it in a browser.

## The signals
- **Analogue voice**: AM, SSB, FM
- **Telegraphy**: CW (Morse)
- **Data**: RTTY, APRS packet (AFSK 1200), PSK31, FT8, FT4, Olivia 8/250, Feld Hell, DMR / C4FM / NXDN / dPMR (4FSK), MT63, LoRa, MSK144, JT65, TETRA
- **Images**: SSTV (Martin M1), weather fax
- **Aviation, maritime and rescue**: ELT siren, 406 MHz beacon, ADS-B, ACARS, AIS, NAVTEX, HFDL, NDB beacon, VOR, ILS
- **Calling, sub-tones and paging**: CTCSS, DTMF, CCIR Selcall, POCSAG / FLEX, ALE
- **Radiosondes, sensors and connected devices**: RS41, M10 and M20 radiosondes, 433 MHz sensors (OOK), tyre pressure sensors (TPMS), Bluetooth (FHSS)
- **HF modes and curiosities**: WSPR, QRSS, text in the waterfall, VARA / Pactor / ARDOP, ionospheric sounder, over-the-horizon radar, power-supply interference
- **Broadcast and time**: FM stereo and RDS, DCF77, ALS162, WWV, MSF
- **Wideband**: OFDM, DSSS
- **Bonus: sounds from space**: hydrogen line (1420 MHz), solar radio bursts (types II and III), Jupiter (L and S bursts), pulsar, meteor echoes (GRAVES radar), VLF whistlers, tweeks, VLF hiss, dawn chorus, radio aurora, galactic noise, Sputnik 1, satellite Doppler shift, CubeSat telemetry, ISS on FM, NOAA APT, Moon echo (EME)
- **Bonus: shortwave curiosities**: UVB-76 "The Buzzer", "The Pip", "Squeaky Wheel", CODAR, STANAG 4285, Link-11, numbers station (imitated voice)

Radio signals (AM, FM, AIS, LoRa…) are shown as on an SDR screen, around a simulated intermediate frequency; some are scaled down or sped up, which is stated at the top of the screen. A few space signals are deliberately exaggerated so that you can see them.

## 13 languages
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

The language is picked automatically from your browser's language settings (all preferred languages are checked: a visitor from China, Taiwan or Brazil gets Chinese or Portuguese straight away; English otherwise); the menu lets you change it.

## Counter
The online page counts visits (once per browser session) and plays with [Abacus](https://v2.jasoncameron.dev/abacus), a free counting service with no cookies and no personal data stored. The totals are shown at the bottom of the page and in the badges above. The downloaded copy (offline) counts nothing.

## Editing the page
`index.html` is built by `python3 src/build.py` from `src/template.html` and the language files `src/i18n/<language>.json`. Fix a translation in its language file, then run the command again.

## The book
This page goes with the "Visualising a signal" sheet (sheet 5 bis) of the **OpenBookRadio** book, a free radio listening guide: [download it here](https://github.com/ic3fr/OpenBookRadio/releases). The sheet numbers shown refer to the book.

## License
Creative Commons **BY-NC-SA 4.0**: free, sharing allowed with attribution, no commercial use, same license for derivatives. Not for sale.

Author: ic3ric4 (https://github.com/ic3fr). Documentation and code made with the help of AI.
