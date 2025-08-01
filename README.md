# My Foods App ���

Website sederhana untuk mencatat dan mengelola daftar makanan favorit. Dibuat menggunakan **Next.js**, **TypeScript**, dan **Supabase**, dengan fitur autentikasi dan CRUD.

## ✨ Fitur

- ✅ Login dan Logout (tanpa library tambahan)
- ✅ Lihat daftar makanan
- ✅ Tambah makanan baru
- ✅ Edit data makanan
- ✅ Hapus makanan
- ✅ Gambar makanan dari URL
- ✅ Validasi input
- ✅ Menggunakan Prisma + Supabase sebagai database
- ✅ Layout responsif

## ��� Teknologi yang Digunakan

- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Supabase](https://supabase.com/) (PostgreSQL)
- [Server Actions + API Routes](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)

## ���️ Struktur Folder

\`\`\`
prisma/ # schema database
src/
├── app/
│ ├── login/ # halaman login
│ ├── foods/ # halaman makanan (lihat, tambah, edit)
│ ├── api/ # API routes (Next.js handlers)
├── components/ # komponen UI (Navbar, dll)
├── lib/ # konfigurasi Supabase & Prisma
\`\`\`

## ⚙️ Setup dan Menjalankan Project

1. **Clone Repository**
   \`\`\`bash
   git clone https://github.com/nikkuananda/my_foods.git
   cd my_foods
   \`\`\`

2. **Install Dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set Environment Variables**

   Buat file \`.env\` dan sesuaikan:

   \`\`\`
   DATABASE_URL=postgresql://...
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key
   \`\`\`

4. **Migrate Database**
   \`\`\`bash
   npx prisma migrate dev
   \`\`\`

5. **Jalankan Project**
   \`\`\`bash
   npm run dev
   \`\`\`
