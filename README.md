# LINK::STATION

**Live:** https://abdullaheker1.github.io/link-station/

A personal link-in-bio page guarded by a 4-DOF industrial robot arm. The arm tracks your pointer with a CCD inverse-kinematics solver, docks on whichever node you hover, and seals it with a pneumatic stamp when you click. Zero build step — one HTML file plus a data file, served by GitHub Pages.

![LINK::STATION demo — the arm locks on a node, stamps ROUTED, then the diagnostics overlay is toggled](assets/demo.gif)

---

## Bu ne?

shekerFND'nin bağlantı sayfası: Instagram, YouTube, GitHub, e-posta. Sıradan bir liste yerine KUKA-turuncusu bir robot kol imleci takip eder, üzerine geldiğin düğüme (node) yanaşır, tıklayınca damga basar.

### Etkileşim

| Yaptığın | Olan |
|---|---|
| İmleci gezdirmek | Kol imleci takip eder; retikül menzil dışındaysa kırmızıya döner (`OUT OF REACH`). |
| Boş bir yere tıklamak | Kol pnömatik damga döngüsünü çalıştırır (PRESS → PRINT → RETRACT) ve turuncu altıgen bir iz bırakır; iz 3,5 sn'de solar. |
| Bir node'un üzerine gelmek | Kol satırın sol kenarındaki **porta kilitlenir**; HUD `TGT: GITHUB // LOCKED` yazar, portta yeşil halka döner. |
| Kilitliyken tıklamak | Porta yeşil `ROUTED // GITHUB` mührü basılır; link yeni sekmede açılır, döndüğünde mühür seni bekler. |
| OFFLINE bir node'a gelmek | Kol yanaşmayı reddeder: kırmızı ✕, retikülde `NO ROUTE`. |
| `D` tuşu / `[ DIAG ]` düğmesi / `?diag` | **Diagnostik modu**: kol yarı saydamlaşır; iskelet, eklem açıları (A1–A4), uzuv boyları, çalışma uzayı halkası, hedef vektörü ve çözücü okuması görünür. |
| `Tab` + `Enter` | Klavyeyle de kilitlenir ve damgalanır. |
| Sistem "hareketi azalt" ayarı | Kol park pozunda durur, damga anında basılır. |

Bir şey olmadığında döngü uyur (HUD: `STANDBY`); ilk hareketle uyanır.

### Linkleri düzenlemek

Tek dosya: [`links.js`](links.js). `index.html`'e dokunman gerekmez.

```js
{ name: 'YouTube', handle: '@shiekerFND', url: 'https://www.youtube.com/@shiekerFND', icon: 'youtube' },
```

- `url` boşsa (`''`) node **OFFLINE** görünür (gri, tıklanmaz, kırmızı LED). Panel başlığındaki `04 ACTIVE · 02 OFFLINE` sayısı otomatiktir.
- Yeni bir platform ikonu için [`icons.js`](icons.js) içindeki nota bak (simpleicons.org'dan `path` kopyala).
- GitHub'da dosyayı düzenleyip commit'lemen yeterli; Pages birkaç dakikada yayınlar.

### Dosyalar

```
index.html   sayfa: stil, panel, robot kol motoru (yorumlar öğrenme amaçlı korunmuştur)
links.js     düzenlenecek tek dosya: node tablosu
icons.js     SVG ikon path'leri
assets/      favicon.svg, apple-touch-icon.png, og.png (paylaşım önizlemesi), demo.gif
```

### Nasıl çalışıyor (kısaca)

- **Kinematik:** 4 uzuvlu düzlemsel zincir. Her karede CCD (Cyclic Coordinate Descent) 8 iterasyon, `0.25` sönümleme → mekanik bir gecikme hissi. Yalnızca taban eklemi sınırlı. Kod: `solveIK()`.
- **Menzil:** Halka şeklindeki çalışma uzayı (`checkReach()`); hedef dışarıdaysa kol uzanabildiği yere basar ve iz `LIMIT` etiketi alır.
- **Damga:** 3 fazlı durum makinesi (`140 / 60 / 260 ms`), 30 izlik ring buffer.
- **Node kilidi:** `pointerover` / `focusin` ile satır yakalanır; hedef, satırın 16 px solundaki port olur.
- **Uyku:** Kol hedefe oturmuş, damga döngüsü boş, iz kalmamış ve 1,2 sn girdi yoksa `requestAnimationFrame` durur.

Detaylar `index.html` içindeki bölüm başlıklı yorumlarda.

### Geliştirme

Dosyayı tarayıcıda açman yeterli (`file://` çalışır). Değişiklikten sonra kontrol listesi:

- 1440×900, 768×1024, 390×844 ve **320×568** — son link erişilebilir mi?
- Konsolda hata yok mu?
- `?diag` ile kol hedefe oturuyor mu (`ERR` ~0)?

### Geçmiş

- **v2.6** (Mayıs 2026) — Claude 4.7 Opus ile üretildi: kol, damga, HUD, mobil düzen.
- **v3.0** (Eylül 2026) — Claude Opus 5 ile yenilendi: `links.js`, OFFLINE node'lar, node kilidi + ROUTED mührü, diagnostik modu, uyuyan render döngüsü, `dvh` ile mobil kaydırma, reduced-motion, klavye odağı, OG/favicon.

MIT — bkz. [LICENSE](LICENSE).
