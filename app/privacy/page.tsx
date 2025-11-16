export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-16 bg-paper">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto watercolor-texture rounded-3xl bg-milk p-8 md:p-16 shadow-xl">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-ink-light leading-relaxed">
            <p className="text-sm text-ink-light">Last updated: January 2025</p>

            <h2 className="font-serif text-2xl font-bold text-ink mt-8 mb-4">Introduction</h2>
            <p>
              At PercuMax, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>

            <h2 className="font-serif text-2xl font-bold text-ink mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill out a contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Interact with our website</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-ink mt-8 mb-4">Cookies</h2>
            <p>
              We use cookies to improve your browsing experience and analyze website traffic. You can control 
              cookie preferences through your browser settings.
            </p>

            <h2 className="font-serif text-2xl font-bold text-ink mt-8 mb-4">Amazon Associates</h2>
            <p>
              PercuMax is a participant in the Amazon Services LLC Associates Program, an affiliate advertising 
              program designed to provide a means for sites to earn advertising fees by advertising and linking 
              to Amazon.com. When you make a purchase through our links, we may earn a commission at no additional 
              cost to you.
            </p>

            <h2 className="font-serif text-2xl font-bold text-ink mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="font-serif text-2xl font-bold text-ink mt-8 mb-4">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. To exercise these rights, 
              please contact us at hello@percumax.com.
            </p>

            <h2 className="font-serif text-2xl font-bold text-ink mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at hello@percumax.com.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
