import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-10">Last updated: March 25, 2026</p>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground text-sm leading-relaxed">
            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">1. Information We Collect</h2>
              <p>This portfolio website is a static site. We do not collect, store, or process any personal data directly. We do not use cookies for tracking purposes. No registration or login is required to browse this website.</p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">2. Third-Party Services</h2>
              <p>This website may use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong className="text-foreground">Google Fonts</strong> — for typography. Google may collect anonymized usage data.</li>
                <li><strong className="text-foreground">Vercel</strong> — for hosting. Vercel may collect basic server logs (IP addresses, request timestamps).</li>
              </ul>
              <p>We encourage you to review the privacy policies of these third-party services.</p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">3. External Links</h2>
              <p>This website contains links to external platforms (Telegram, WhatsApp, Instagram). We are not responsible for the privacy practices of these external services. Please review their respective privacy policies before sharing personal information.</p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">4. Data Handling</h2>
              <p>We do not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Collect personal information</li>
                <li>Use tracking cookies</li>
                <li>Store user data in databases</li>
                <li>Share data with third parties</li>
                <li>Process payments on this website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">5. GDPR Compliance</h2>
              <p>As we do not collect or process personal data, GDPR data subject rights (access, rectification, erasure, portability) are not applicable. If you contact us via external messaging platforms, the data handling is governed by those platforms' privacy policies.</p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">6. Children's Privacy</h2>
              <p>This website is not directed at children under 13. We do not knowingly collect information from children.</p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">8. Contact</h2>
              <p>If you have any questions about this Privacy Policy, please contact us via <a href="https://t.me/youssofxmoussa" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-primary transition-colors">Telegram</a>.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
