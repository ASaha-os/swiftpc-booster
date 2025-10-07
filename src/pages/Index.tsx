import { Button } from "@/components/ui/button";
import { Download, Zap, Settings, Rocket, Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-performance.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="mb-6 text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
            Unlock Peak{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Performance
            </span>
          </h1>
          
          <p className="mb-10 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transform your Windows PC into a blazing-fast powerhouse with one click
          </p>
          
          <Button variant="hero" size="xl" className="group">
            <Download className="mr-2 h-6 w-6 group-hover:animate-pulse" />
            Download for Windows
          </Button>
          
          {/* Scroll Indicator */}
          <div className="mt-20 flex flex-col items-center gap-2 animate-float">
            <span className="text-sm text-muted-foreground">Scroll for Details</span>
            <ChevronDown className="h-6 w-6 text-primary animate-pulse-glow" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative px-6 py-32 bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-20 text-5xl md:text-6xl font-black text-center">
            Setup in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Seconds
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="group text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-6 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow group-hover:shadow-strong transition-all duration-300 group-hover:scale-110">
                  <Download className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Download the App</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quick and easy installation. Get started in under 30 seconds.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow group-hover:shadow-strong transition-all duration-300 group-hover:scale-110">
                  <Settings className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Run the Optimizer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our smart algorithm analyzes and optimizes your system automatically.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="mb-6 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow group-hover:shadow-strong transition-all duration-300 group-hover:scale-110">
                  <Rocket className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Enjoy a Faster PC</h3>
              <p className="text-muted-foreground leading-relaxed">
                Experience lightning-fast performance and improved responsiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative px-6 py-24 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-12 text-5xl md:text-6xl font-black">
            Crafted with{" "}
            <span className="inline-block animate-pulse-glow">❤️</span>
          </h2>
          
          <div className="flex justify-center gap-8 mt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
              aria-label="GitHub"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary hover:bg-gradient-primary transition-all duration-300 shadow-glow hover:shadow-strong hover:scale-110">
                <Github className="h-8 w-8 text-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary hover:bg-gradient-primary transition-all duration-300 shadow-glow hover:shadow-strong hover:scale-110">
                <Linkedin className="h-8 w-8 text-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
            </a>
            
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
              aria-label="Twitter/X"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary hover:bg-gradient-primary transition-all duration-300 shadow-glow hover:shadow-strong hover:scale-110">
                <Twitter className="h-8 w-8 text-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
            </a>
          </div>
          
          <p className="mt-12 text-muted-foreground text-sm">
            © 2025 PC Performance Booster. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
