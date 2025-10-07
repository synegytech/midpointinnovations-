import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Zap, CreditCard, BarChart3, Bell, Shield } from "lucide-react";
import meterbuddyApp from "@/assets/meterbuddy-app.png";

const Products = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-Time Monitoring",
      description: "Monitor your electric meter balance in real-time from your smartphone",
    },
    {
      icon: CreditCard,
      title: "Easy Top-Up",
      description: "Securely top up your meter balance through the app with multiple payment options",
    },
    {
      icon: BarChart3,
      title: "Usage Analytics",
      description: "Access detailed billing information and actionable insights into your energy usage",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Receive alerts about your meter balance and consumption patterns",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "All transactions are encrypted and protected with industry-standard security",
    },
    {
      icon: Smartphone,
      title: "User-Friendly Interface",
      description: "Intuitive design that makes energy management simple and convenient",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <Badge className="mb-4 text-sm px-4 py-1">Coming Soon</Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              MeterBuddy™ App
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Radically improving the interaction between customers and electric utilities through innovative mobile technology
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Transform Your Energy Management
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The MeterBuddy™ application transforms how customers interact with electric utilities. 
                The application enables metered electricity users to remotely monitor their electric meter balances, 
                access billing information and receive actionable insights into their energy usage.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Additionally, users can securely top up their meter balances through the app, 
                enhancing convenience and transparency in energy management.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 max-w-sm mx-auto">
                <img 
                  src={meterbuddyApp} 
                  alt="MeterBuddy App Interface" 
                  className="w-full h-auto rounded-3xl shadow-elegant"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Key Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your electricity consumption efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-smooth border-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Synopsis */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-2">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Project Synopsis
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Midpoint Innovations Ltd. has developed the MeterBuddy™ application to transform 
              how customers interact with electric utilities. The application enables metered 
              electricity users to remotely monitor their electric meter balances, access billing 
              information and receive actionable insights into their energy usage.
            </p>
            <p className="text-lg leading-relaxed">
              Additionally, users can securely top up their meter balances through the app, 
              enhancing convenience and transparency. This innovative solution aims to improve 
              customer satisfaction and promote better energy management practices across Nigeria.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
