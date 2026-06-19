"use client";

import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaArrowLeft,
} from "react-icons/fa";

export default function Contact() {
  const [step, setStep] = useState(1);

  return (
    <section
      id="contact"
      className="relative py-16 px-4 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 blur-[120px]" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 text-violet-600 text-sm">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            Available for Collaboration
          </div>

          <h2 className="text-3xl font-bold text-white mt-6">Contact</h2>

          <p className="text-zinc-400 mt-3 text-sm uppercase tracking-wider">
            Have something to say? Just send us a message!
          </p>

          <div className="w-16 h-1 bg-purple-500 rounded-full mx-auto mt-5" />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-6">
          {/* LEFT */}
          <div>
            {/* Status */}
            <div className="mb-4 rounded-xl border border-cyan-500/40 bg-cyan-500/5 p-4">
              <div className="flex items-center gap-3 text-cyan-400 font-medium">
                <span className="w-3 h-3 rounded-full bg-cyan-400" />
                Tersedia untuk project
              </div>
            </div>

            {/* Email */}
            <div className="mb-4 p-4 rounded-xl border border-white/10 bg-[#12122b] hover:border-purple-500/40 transition">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Email
                  </p>
                  <p className="text-white font-medium">
                    muh.nur235@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Whatsapp */}
            <div className="mb-4 p-4 rounded-xl border border-white/10 bg-[#12122b] hover:border-purple-500/40 transition">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    WhatsApp
                  </p>
                  <p className="text-white font-medium">
                    +62 852 3659 0381
                  </p>
                </div>
              </div>
            </div>

            {/* Lokasi */}
            <div className="p-4 rounded-xl border border-white/10 bg-[#12122b] hover:border-purple-500/40 transition">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Lokasi
                  </p>
                  <p className="text-white font-medium">
                    Kediri, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8 pt-6 border-t border-white/10">
              <a
                href="https://www.linkedin.com/in/muhammad-nur-713905328/"
                className="w-10 h-10 rounded-xl border border-white/10 bg-[#12122b] flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://github.com/muhnur56"
                className="w-10 h-10 rounded-xl border border-white/10 bg-[#12122b] flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.instagram.com/muh_nur56/"
                className="w-10 h-10 rounded-xl border border-white/10 bg-[#12122b] flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
<div className="rounded-2xl border-2 border-purple-600 p-6 bg-[#12122b]/80 backdrop-blur-sm">

  {/* Step Indicator */}
  <div className="flex justify-between items-center text-sm text-zinc-400 mb-8">
    <span className={step >= 1 ? "text-purple-400" : ""}>
      ① Info Diri
    </span>

    <span className={step >= 2 ? "text-purple-400" : ""}>
      ② Project
    </span>

    <span className={step >= 3 ? "text-purple-400" : ""}>
      ③ Pesan
    </span>
  </div>

  <div className="h-1 bg-zinc-800 rounded-full mb-8">
    <div
      className={`h-1 bg-purple-500 rounded-full transition-all duration-300 ${
        step === 1
          ? "w-1/3"
          : step === 2
          ? "w-2/3"
          : "w-full"
      }`}
    />
  </div>

  <form
    action="https://formsubmit.co/muh.nur235@gmail.com"
    method="POST"
  >
    <input type="hidden" name="_captcha" value="false" />
    <input
      type="hidden"
      name="_next"
      value="https://muhammadnur.my.id/?success=true"
    />

    {/* STEP 1 */}
    {step === 1 && (
      <>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="Nama Depan"
            placeholder="Nama Depan"
            required
            className="h-11 rounded-xl bg-[#1a1a3a] px-4 text-white"
          />

          <input
            type="text"
            name="Nama Belakang"
            placeholder="Nama Belakang"
            required
            className="h-11 rounded-xl bg-[#1a1a3a] px-4 text-white"
          />
        </div>

        <input
          type="email"
          name="Email"
          placeholder="Email"
          required
          className="w-full h-11 mt-4 rounded-xl bg-[#1a1a3a] px-4 text-white"
        />

        <input
          type="text"
          name="WhatsApp"
          placeholder="WhatsApp"
          className="w-full h-11 mt-4 rounded-xl bg-[#1a1a3a] px-4 text-white"
        />

        <button
          type="button"
          onClick={() => setStep(2)}
          className="w-full mt-6 h-11 rounded-xl bg-purple-600 text-white"
        >
          Lanjut →
        </button>
      </>
    )}

    {/* STEP 2 */}
    {step === 2 && (
      <>
        <input
          type="text"
          name="Jenis Project"
          placeholder="Website, Mobile App, UI/UX, dll"
          className="w-full h-11 rounded-xl bg-[#1a1a3a] px-4 text-white"
        />

        <input
          type="text"
          name="Budget"
          placeholder="Budget Project"
          className="w-full h-11 mt-4 rounded-xl bg-[#1a1a3a] px-4 text-white"
        />

        <input
          type="text"
          name="Deadline"
          placeholder="Deadline"
          className="w-full h-11 mt-4 rounded-xl bg-[#1a1a3a] px-4 text-white"
        />

        <div className="flex gap-3 mt-6">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="flex-1 h-11 rounded-xl border border-zinc-700 text-white"
          >
            ← Kembali
          </button>

          <button
            type="button"
            onClick={() => setStep(3)}
            className="flex-1 h-11 rounded-xl bg-purple-600 text-white"
          >
            Lanjut →
          </button>
        </div>
      </>
    )}

    {/* STEP 3 */}
    {step === 3 && (
      <>
        <textarea
          name="Pesan"
          rows={6}
          placeholder="Tulis pesan Anda..."
          required
          className="w-full rounded-xl bg-[#1a1a3a] p-4 text-white"
        />

        <div className="flex gap-3 mt-6">
          <button
            type="button"
            onClick={() => setStep(2)}
            className="flex-1 h-11 rounded-xl border border-zinc-700 text-white"
          >
            Kembali
          </button>

          <button
            type="submit"
            className="flex-1 h-11 rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 text-white"
          >
            Kirim 
          </button>
        </div>
      </>
    )}
  </form>
</div>
        </div>
      </div>
    </section>
  );
}