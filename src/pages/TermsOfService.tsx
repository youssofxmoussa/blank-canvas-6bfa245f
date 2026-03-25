import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground text-sm mb-10">Last updated: March 25, 2026</p>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground text-sm leading-relaxed">
            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using this website (youssefxmoussa.vercel.app), you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.</p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">2. Intellectual Property</h2>
              <p>All content on this website — including but not limited to text, graphics, logos, icons, images, audio/video, animations, code, and design — is the property of Youssof Moussa and is protected by international copyright laws. You may not reproduce, distribute, modify, or create derivative works without explicit written permission.</p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">3. Use of Website</h2>
              <p>You agree to use this website only for lawful purposes. You shall not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Attempt to gain unauthorized access to the website or its servers</li>
                <li>Use automated tools to scrape or copy content</li>
                <li>Interfere with or disrupt the website's functionality</li>
                <li>Use the website to transmit harmful code or malware</li>
                <li>Impersonate the website owner or misrepresent your affiliation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">4. External Links</h2>
              <p>This website contains links to external platforms and services. We are not responsible for the content, accuracy, or practices of these third-party sites. Accessing them is at your own risk.</p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">5. Disclaimer</h2>
              <p>This website is provided "as is" without warranties of any kind, express or implied. We do not guarantee the website will be error-free, uninterrupted, or free of harmful components. Use is at your sole risk.</p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">6. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, Youssof Moussa shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website.</p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">7. Freelance Services</h2>
              <p>Any freelance or development services discussed via contact channels are subject to separate agreements. Terms of engagement, pricing, deliverables, and timelines will be agreed upon individually per project.</p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">8. Governing Law</h2>
              <p>These Terms are governed by the laws of Lebanon. Any disputes shall be resolved in the courts of Lebanon.</p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">9. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Continued use of the website after changes constitutes acceptance of the updated Terms.</p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">10. Contact</h2>
              <p>For questions regarding these Terms, contact us via <a href="https://t.me/youssofxmoussa" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-primary transition-colors">Telegram</a>.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
