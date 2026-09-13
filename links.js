/* ============================================================
   LINK STATION — NODE TABLE
   ------------------------------------------------------------
   Bağlantıları BURADAN düzenle; index.html'e dokunman gerekmez.
   Sıra burada nasılsa sayfada da öyle görünür.

   Her node:
     name    : görünen ad
     handle  : küçük alt satır (@kullanıcı, /repo, contact@ ...)
     url     : hedef adres. BOŞ bırakırsan ('') node OFFLINE
               görünür: gri, tıklanmaz, kırmızı LED. Panel
               başlığındaki "ACTIVE / OFFLINE" sayısı otomatiktir.
     icon    : icons.js içindeki anahtar
               (instagram, youtube, github, linkedin, x, mail)

   Örnek — yeni node eklemek:
     { name: 'TikTok', handle: '@as.eker', url: 'https://tiktok.com/@as.eker', icon: 'tiktok' },
   (ikon eklemek için icons.js'teki nota bak)
   ============================================================ */
window.STATION_NODES = [
  { name: 'Instagram', handle: '@as.eker',       url: 'https://www.instagram.com/as.eker?igsh=OHd5MXFxOWtwMTZt', icon: 'instagram' },
  { name: 'YouTube',   handle: '@shiekerFND',    url: 'https://www.youtube.com/@shiekerFND',                     icon: 'youtube' },
  { name: 'GitHub',    handle: '/abdullaheker1', url: 'https://github.com/abdullaheker1',                        icon: 'github' },
  { name: 'LinkedIn',  handle: '',               url: '',                                                        icon: 'linkedin' },
  { name: 'X',         handle: '',               url: '',                                                        icon: 'x' },
  { name: 'E-Mail',    handle: 'contact@',       url: 'mailto:abdullaheker1995@gmail.com',                       icon: 'mail' },
];
