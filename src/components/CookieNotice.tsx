import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieNotice = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie-consent")) return;

    const onScroll = () => {
      if (window.scrollY > 80) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[100] animate-fade-in">
      <div className="bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-xl p-5 flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 rounded-full p-2 mt-0.5 shrink-0">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-heading font-semibold text-foreground text-sm mb-1">We value your privacy</h4>
            <p className="text-muted-foreground text-xs leading-relaxed">
              We use cookies to enhance your browsing experience and analyse site traffic. By continuing, you agree to our use of cookies.
            </p>
          </div>
          <button onClick={() => setVisible(false)} className="text-muted-foreground hover:text-foreground transition-colors shrink-0" aria-label="Dismiss">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-2 justify-end">
          <Button variant="ghost" size="sm" className="text-xs" onClick={() => setVisible(false)}>
            Decline
          </Button>
          <Button size="sm" className="text-xs" onClick={accept}>
            Accept Cookies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;
