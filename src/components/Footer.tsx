import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 py-6 mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
          {/* Main Row */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Crafted with{" "}
            <span className="inline-block animate-pulse text-red-500">❤️</span>
            {" "}by{" "}
            <Link 
              href="https://alihamzakamboh.com" 
              target="_blank" 
              className="text-[#3B82F6] hover:text-[#60A5FA] transition-colors duration-200"
            >
              Ali Hamza Kamboh
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link href="https://github.com/ahkamboh" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com/in/ahkamboh" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:hi@alihamzakamboh.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#3B82F6]">
            © {new Date().getFullYear()} Avatar AI
          </p>
        </div>
      </div>
    </footer>
  )
}