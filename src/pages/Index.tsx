import { Button } from "@/components/ui/button";
import { Download, Zap, Github, Linkedin, Twitter } from "lucide-react";

const Index = () => {
  const handleWindowsDownload = () => {
    const link = document.createElement("a");
    link.href = "/BoostPC.bat";
    link.download = "BoostPC.bat";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-black">BoostPC</div>
          <div className="flex items-center gap-8">
            <a href="#how" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#download" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                Focused on{" "}
                <span className="text-primary">
                  speed
                </span>{" "}
                and{" "}
                <span className="text-accent-yellow">
                  performance
                </span>
                , you're simply going to have a{" "}
                <span className="text-accent-pink">
                  faster PC
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                BoostPC is a Windows optimization tool that lets you focus on your work while we handle system performance. People are gonna love using your machine.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" onClick={handleWindowsDownload}>
                  <Download className="mr-2 h-5 w-5" />
                  Download for Windows 
                </Button>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl bg-gradient-to-br from-accent-pink/20 via-accent-purple/20 to-primary/20 p-8 backdrop-blur-sm border border-border/50 shadow-purple">
                {/* Mock Terminal/Code Output */}
                <div className="bg-card rounded-lg p-6 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-accent-yellow"></div>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-xs text-muted-foreground ml-2">BoostPC Optimizer</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-primary">$ boostpc --optimize</p>
                    <p className="text-muted-foreground">Analyzing system...</p>
                    <p className="text-accent-yellow">🧹 Cleaning temp and cache files...</p>
                    <p className="text-accent-pink">💾 Memory cleanup: <span className="text-foreground">2.4GB freed</span></p>
                    <p className="text-primary">🚀 Startup time: <span className="text-foreground">-42% faster</span></p>
                    <p className="text-accent-purple">✓ Optimization complete!</p>
                    <p className="text-muted-foreground mt-4">⚡ System cleanup complete — <span className="text-accent-yellow font-bold">smoother performance ahead! </span></p>
                  </div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-pink/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="how" className="px-6 py-20 md:py-32 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-16 text-center">
            Optimization made{" "}
            <span className="text-primary">simple</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-cyan">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">One-Click Boost</h3>
              <p className="text-muted-foreground leading-relaxed">
                No configuration needed. Our intelligent algorithm analyzes and optimizes your system automatically with a single click.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-xl bg-background/50 border border-border/50 hover:border-accent-pink/50 transition-all duration-300 hover:shadow-pink">
              <div className="w-12 h-12 rounded-lg bg-accent-pink/10 flex items-center justify-center mb-6 group-hover:bg-accent-pink/20 transition-colors">
                <Download className="h-6 w-6 text-accent-pink" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lightweight</h3>
              <p className="text-muted-foreground leading-relaxed">
                Under 50MB download. Runs efficiently in the background without consuming system resources. Built for performance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-xl bg-background/50 border border-border/50 hover:border-accent-yellow/50 transition-all duration-300 hover:shadow-purple">
              <div className="w-12 h-12 rounded-lg bg-accent-yellow/10 flex items-center justify-center mb-6 group-hover:bg-accent-yellow/20 transition-colors">
                <svg className="h-6 w-6 text-accent-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Safe & Secure</h3>
              <p className="text-muted-foreground leading-relaxed">
                No data collection, no telemetry. Open source and fully transparent. Your privacy is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
            Ready to{" "}
            <span className="text-primary">supercharge</span>{" "}
            your PC?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Join thousands of users who have already optimized their Windows experience
          </p>
          <Button variant="hero" size="xl" onClick={handleWindowsDownload}>
            <Download className="mr-2 h-5 w-5" />
            Download Now - It's Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-black mb-2">Developed By Akash Saha</div>
              <p className="text-sm text-muted-foreground">
                Crafted with <span className="text-accent-pink">❤️</span> for faster computing
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/ASaha-os/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card hover:bg-primary transition-all duration-300 flex items-center justify-center group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/akash-saha-764359307/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card hover:bg-accent-pink transition-all duration-300 flex items-center justify-center group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-background transition-colors" />
              </a>
              
              
      

            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            © 2025 BoostPC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
