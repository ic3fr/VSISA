# Builds index.html from src/template.html and the 15 language files in src/i18n/.
# Usage (from the repository root): python3 src/build.py
import json, os
H = os.path.dirname(os.path.abspath(__file__))
L = ["fr", "en", "es", "de", "nl", "cs", "pt", "it", "pl", "el", "sv", "ru", "uk", "zh", "ja"]
data = {l: json.load(open(os.path.join(H, "i18n", l + ".json"), encoding="utf-8")) for l in L}
tpl = open(os.path.join(H, "template.html"), encoding="utf-8").read()
open(os.path.join(os.path.dirname(H), "index.html"), "w", encoding="utf-8").write(tpl.replace("/*I18N*/{}", json.dumps(data, ensure_ascii=False, separators=(",", ":"))))
print("ok index.html")
