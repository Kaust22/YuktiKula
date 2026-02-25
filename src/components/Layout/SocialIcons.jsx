export default function SocialIcons() {
  const socialLinks = [
    { icon: 'fa-instagram', href: 'https://www.instagram.com/yuktikula_glbajaj/', label: 'Instagram' },
    { icon: 'fa-linkedin', href: 'https://in.linkedin.com/company/yuktikula-club', label: 'LinkedIn' },
    { icon: 'fa-whatsapp', href: 'https://chat.whatsapp.com/Edf9zptrIb6BhsB51CTJvl', label: 'WhatsApp' },
    { icon: 'fa-x-twitter', href: 'https://x.com/yuktikulaglbitm', label: 'Twitter' }
  ];

  return (
    <div className="flex gap-6 mt-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-2xl hover:text-yellow-400 transition-colors"
        >
          <i className={`fa-brands ${social.icon}`}></i>
        </a>
      ))}
    </div>
  );
}