const Footer = () => (
  <footer className="border-t border-border/50 py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="gradient-text font-bold text-base">{"<CE />"}</span>
      <p>© {new Date().getFullYear()} Choaib El Kaouri. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
