"use client";

import Image from "next/image";
import {
  Mail,
  CalendarDays,
  History,
  FileText,
  Bug,
  Shield,
  ScrollText,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Author */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[2px] text-[var(--muted)] mb-4">
              Dibuat Oleh
            </h3>

            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/foto.png"
                alt="Profile"
                width={24}
                height={24}
                className="rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-base">
                  Muhammad Nur
                </h4>
                <p className="text-xs text-[var(--muted)]">
                  Mobile Developer • UI/UX Designer
                </p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <a
                href="mailto:muh.nur235@gmail.com"
                className="flex items-center gap-2 text-[var(--muted)] hover:text-white transition"
              >
                <Mail size={15} />
                muh.nur235@gmail.com
              </a>

              <a
                href="https://github.com/muhnur56"
                target="_blank"
                className="flex items-center gap-2 text-[var(--muted)] hover:text-white transition"
              >
                <FaGithub size={15} />
                github.com/muhnur56
              </a>
            </div>
          </div>

          {/* Website Info */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[2px] text-[var(--muted)] mb-4">
              Info Website
            </h3>

            <div className="space-y-3 text-sm text-[var(--muted)]">
              <div className="flex items-center gap-2">
                <CalendarDays size={15} />
                <span>Dibuat 18 Juni 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <History size={15} />
                <span>Diperbarui 18 Juni 2026</span>
              </div>

              <div className="pt-1">
                <p className="mb-2 text-xs">Version</p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs">
                    V1.0
                  </span>

                  <span className="px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    Aktif
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[2px] text-[var(--muted)] mb-4">
              Teknologi
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Next.js", "Tailwind", "TypeScript"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg border border-[var(--border)] text-xs text-[var(--muted)]"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <ScrollText size={15} />
              <span>Lisensi MIT</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[2px] text-[var(--muted)] mb-4">
              Tautan
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href="#"
                className="flex items-center gap-2 text-[var(--muted)] hover:text-white transition"
              >
                <FileText size={15} />
                Dokumentasi
              </a>

              <a
                href="#"
                className="flex items-center gap-2 text-[var(--muted)] hover:text-white transition"
              >
                <Bug size={15} />
                Laporkan Bug
              </a>

              <a
                href="#"
                className="flex items-center gap-2 text-[var(--muted)] hover:text-white transition"
              >
                <History size={15} />
                Changelog
              </a>

              <a
                href="#"
                className="flex items-center gap-2 text-[var(--muted)] hover:text-white transition"
              >
                <Shield size={15} />
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--border)] mt-6 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--muted)]">
          <p className="text-center md:text-left">
            © 2026 Muhammad Nur · Hak cipta dilindungi
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span>Build #5+</span>
            <span>•</span>
            <span>Uptime 99.9%</span>
            <span>•</span>
            <span>ID Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}