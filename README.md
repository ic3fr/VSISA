# VSISA V1.9 – Virtual Simulator identification Signal Audio

**English** · [Français](README.fr.md)

[![Visits](https://abacus.jasoncameron.dev/get/ic3fr-vsisa/visits/shield?text=visits)](https://ic3fr.github.io/VSISA/) [![Plays](https://abacus.jasoncameron.dev/get/ic3fr-vsisa/plays/shield?text=plays)](https://ic3fr.github.io/VSISA/)

Radio mode identifier: **127 simulated signals** (including 18 sounds from space, 7 shortwave curiosities, 13 underwater sounds, 7 sounds of the Earth and a digital sound comparison as bonuses), with five **display modes** (day, red night mode, and green, blue or amber phosphor like old computer screens), to learn to recognise what you hear and see on a receiver or an SDR.

**Open the page: https://ic3fr.github.io/VSISA/** · **[📥 Download the OpenBookRadio book](https://github.com/ic3fr/OpenBookRadio/releases)** (free, PDF and EPUB) · 20 languages: menu at the top of the page, or a direct link ending in `#en`, `#fr`, `#de`…

## What it does
- For each signal: the **sound**, the live **spectrum** and **waterfall**, the full **footprint** of the signal, a **3D waterfall** you can rotate with the mouse or a finger, and a fact card (principle, what it looks like on screen, sheet number in the book).
- **Mystery sound**: a random signal to identify among four answers, with a score.
- Settings: added noise, volume, loop playback; the cursor shows the frequency.
- **Rolling-digit counters** at the top of the online page: visits and plays.
- For AM, SSB, FM and FM stereo you hear the **demodulated sound**, as from a receiver, with a synthetic voice and synthetic music (FM stereo is in real stereo: use headphones).
- **Display** menu: day, **night** (shades of red, to keep your night vision) or **green, blue or amber phosphor** (like old computer terminals, with scan lines); your choice is remembered.
- A single HTML page, nothing to install, that works **offline**: download `index.html` and open it in a browser.

## The signals
- **Analogue voice**: AM, SSB, FM
- **Telegraphy**: CW (Morse)
- **Data**: RTTY, DWD weather RTTY, APRS packet (AFSK 1200), PSK31, FT8, FT4, Olivia 8/250, MFSK16, Feld Hell, DMR / C4FM / NXDN / dPMR (4FSK), MT63, LoRa, MSK144, JT65, TETRA
- **Images**: SSTV (Martin M1), weather fax
- **Aviation, maritime and rescue**: ELT siren, 406 MHz beacon, ADS-B, ACARS, AIS, NAVTEX, SITOR-A, VHF DSC (channel 70), HFDL, aviation SELCAL, NDB beacon, VOR, ILS
- **Calling, sub-tones and paging**: CTCSS, DCS, 1750 Hz tone, DTMF, CCIR Selcall, POCSAG / FLEX, ALE
- **Radiosondes, sensors and connected devices**: RS41, M10 and M20 radiosondes, 433 MHz sensors (OOK), tyre pressure sensors (TPMS), Bluetooth (FHSS)
- **HF modes and curiosities**: WSPR, QRSS, NCDXF beacons, text in the waterfall, VARA / Pactor / ARDOP, ionospheric sounder, over-the-horizon radar, thunderstorm static (QRN), selective fading (QSB), power-supply interference, powerline (PLC) noise, electric fence, GSM phone buzz
- **Broadcast and time**: FM stereo and RDS, DCF77, ALS162, WWV, MSF, JJY (Japan), RWM (Russia), BPM (China)
- **Wideband**: OFDM, DSSS
- **Bonus: sounds from space**: hydrogen line (1420 MHz), the "Wow!" signal, solar radio bursts (types II and III), solar flare seen on VLF (SID), Jupiter (L and S bursts), pulsar, fast radio burst (FRB), meteor echoes (GRAVES radar), VLF whistlers, tweeks, VLF hiss, dawn chorus, radio aurora, galactic noise, Sputnik 1, Apollo Quindar tones, satellite Doppler shift, CubeSat telemetry, ISS on FM, NOAA APT, Meteor-M LRPT, Moon echo (EME)
- **Bonus: shortwave curiosities**: UVB-76 "The Buzzer", "The Pip", "Squeaky Wheel", single-letter beacons, CODAR, STANAG 4285, Link-11, numbers station (imitated voice)
- **Bonus: underwater sounds**: humpback, blue and fin whales, sperm whale clicks, dolphin, orca, bearded seal, snapping shrimp, active sonar ping, ship propeller, underwater telephone (UQC), ZEVS submarine radio at 82 Hz, the "Bloop"
- **Bonus: sounds of the Earth** (seismic waves and infrasound, sped up to be heard): nearby and distant earthquakes, earthquake swarm, Redoubt harmonic tremor, Stromboli infrasound, ocean microseism, the Earth's normal modes
- **Real recordings**: for 9 signals (UVB-76, Squeaky Wheel, "The Gong" numbers station, NAVTEX, WWV, blue and humpback whales, orca, Bloop) the info card also offers a real recording, streamed from Wikimedia Commons (public domain or free licence, author and link shown). Needs an Internet connection; offline the player is hidden.
- **Bonus: digital sound (bits and kHz)**: the same original video game style tune in 2, 4, 8, 16 and 32 bits, then sampled at 3 and 6 kHz, to see and hear quantization noise and the loss of high frequencies

Radio signals (AM, FM, AIS, LoRa…) are shown as on an SDR screen, around a simulated intermediate frequency; some are scaled down or sped up, which is stated at the top of the screen. A few space signals are deliberately exaggerated so that you can see them.

## 20 languages
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

The language is picked automatically from your browser's language settings (all preferred languages are checked: a visitor from China, Taiwan or Brazil gets Chinese or Portuguese straight away; English otherwise); the menu lets you change it. The address only gets a `#language` ending when someone picks a language in the menu, so a plain link always opens in each visitor's own language.

## Counter
The online page counts visits (once per browser session) and plays with [Abacus](https://v2.jasoncameron.dev/abacus), a free counting service with no cookies and no personal data stored. The totals are shown at the top of the page, as rolling digits like a mechanical counter, and in the badges above. The downloaded copy (offline) counts nothing.

## Editing the page
`index.html` is built by `python3 src/build.py` from `src/template.html` and the language files `src/i18n/<language>.json`. Fix a translation in its language file, then run the command again. `node src/check.js index.html` checks every signal (missing texts, spectrum peaks).

## The book
This page goes with the "Visualising a signal" sheet (sheet 6) of the **OpenBookRadio** book, a free radio listening guide: [download it here](https://github.com/ic3fr/OpenBookRadio/releases). The sheet numbers shown refer to the book.

## License
Creative Commons **BY-NC-SA 4.0**: free, sharing allowed with attribution, no commercial use, same license for derivatives. Not for sale.

Author: ic3ric4 (https://github.com/ic3fr). Documentation and code made with the help of AI.
