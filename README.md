# Portfolio Muhammad Nur — Next.js

Portfolio website dengan dark theme, ID Card animasi, dan semua section lengkap.

## 🚀 Cara Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan development server
```bash
npm run dev
```

### 3. Buka di browser
```
http://localhost:3000
```

---

## 📁 Struktur File

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Halaman utama (gabungan semua section)
│   └── globals.css       # CSS global + animasi
│
├── components/
│   ├── Navbar.tsx        # Navigasi sticky atas
│   ├── Hero.tsx          # Section hero + ID Card
│   ├── IDCard.tsx        # Komponen ID Card animasi swing
│   ├── About.tsx         # Section tentang saya
│   ├── Skills.tsx        # Section keahlian + progress bar
│   ├── Projects.tsx      # Section projects
│   ├── Contact.tsx       # Section kontak + form
│   └── Footer.tsx        # Footer
│
└── data/
    └── portfolio.ts      # ✏️ EDIT FILE INI untuk ubah konten
```

---

## ✏️ Cara Mengubah Konten

Semua konten ada di satu file: **`src/data/portfolio.ts`**

### Ganti info pribadi:
```ts
export const profile = {
  name: "Nama Kamu",
  role: "Role Kamu",
  contact: {
    email: "email@kamu.com",
    linkedin: "linkedin.com/in/username",
    github: "github.com/username",
    phone: "+62 8xx xxxx xxxx",
  },
  photo: "/foto.jpg", // letakkan foto di folder /public
}
```

### Tambah foto:
1. Letakkan foto di folder `public/` (contoh: `public/foto.jpg`)
2. Di `portfolio.ts`, ubah: `photo: "/foto.jpg"`

### Tambah/ubah project:
```ts
export const projects = [
  {
    icon: "🚀",
    title: "Nama Project",
    description: "Deskripsi project kamu.",
    tags: ["React", "Tailwind"],
    demo: "https://link-demo.com",
    code: "https://github.com/...",
  },
  // tambah project lain...
]
```

### Ubah skill & persentase:
```ts
export const skills = [
  {
    category: "⚡ Frontend",
    items: [
      { name: "React.js", pct: 85 },  // ubah angka pct
      // tambah skill lain...
    ],
  },
]
```

---

## 📬 Setup Form Kontak (Opsional)

Di `src/components/Contact.tsx`, cari bagian `handleSubmit` dan ganti dengan salah satu:

### Opsi 1 — EmailJS (gratis, mudah):
```bash
npm install @emailjs/browser
```
```ts
import emailjs from "@emailjs/browser";

const handleSubmit = () => {
  emailjs.send("SERVICE_ID", "TEMPLATE_ID", form, "PUBLIC_KEY");
};
```

### Opsi 2 — Formspree (paling simpel, tanpa backend):
```ts
const handleSubmit = async () => {
  await fetch("https://formspree.io/f/YOUR_ID", {
    method: "POST",
    body: JSON.stringify(form),
    headers: { "Content-Type": "application/json" },
  });
};
```

---

## 🌐 Deploy ke Vercel

```bash
npm run build     # pastikan tidak ada error
```

Lalu push ke GitHub dan connect ke [vercel.com](https://vercel.com) — otomatis deploy!

---

## 🛠️ Tech Stack

- **Next.js 14** — Framework
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **CSS Animation** — Animasi ID Card swing & skill bar
- **Framer Motion** — (tersedia, bisa dipakai untuk animasi tambahan)
