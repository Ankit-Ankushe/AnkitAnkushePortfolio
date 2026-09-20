import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Mail, ExternalLink, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  subject?: string;
}

export default function ContactModal({
  open,
  onOpenChange,
  title = "Let's Connect & Work Together",
  subject = "Let's Connect - Portfolio Inquiry",
}: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const email = "ankitankushe@gmail.com";

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    subject,
  )}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-md border-border">
        <DialogHeader className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary border border-primary/20">
              <Mail className="size-5" />
            </span>
            <div>
              <DialogTitle className="text-xl font-bold text-foreground text-left">
                {title}
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground mt-0.5 text-left">
                Send your message directly to{" "}
                <span className="font-semibold text-foreground">{email}</span>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-4 space-y-3">
          {/* Option 1: Open in Gmail Web */}
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onOpenChange(false)}
            className="flex items-center justify-between rounded-xl border border-primary/30 bg-primary/10 p-3.5 text-sm font-semibold text-primary transition-all hover:bg-primary/20"
          >
            <span className="flex items-center gap-2.5">
              <Mail className="size-4" />
              <span>Compose in Gmail (Browser)</span>
            </span>
            <ExternalLink className="size-4 opacity-70" />
          </a>

          {/* Option 2: Open Default Mail App */}
          <a
            href={mailtoUrl}
            onClick={() => onOpenChange(false)}
            className="flex items-center justify-between rounded-xl border border-border bg-muted/50 p-3.5 text-sm font-semibold text-foreground transition-all hover:bg-muted"
          >
            <span className="flex items-center gap-2.5">
              <ExternalLink className="size-4" />
              <span>Open Default Mail App</span>
            </span>
            <span className="text-xs text-muted-foreground">mailto:</span>
          </a>

          {/* Option 3: Copy Email Address */}
          <button
            type="button"
            onClick={handleCopy}
            className="flex w-full items-center justify-between rounded-xl border border-border bg-card p-3.5 text-sm font-semibold text-foreground transition-all hover:bg-muted cursor-pointer"
          >
            <span className="flex items-center gap-2.5">
              {copied ? (
                <Check className="size-4 text-emerald-500" />
              ) : (
                <Copy className="size-4 text-muted-foreground" />
              )}
              <span>{copied ? "Email copied to clipboard!" : `Copy Email: ${email}`}</span>
            </span>
            <span
              className={`text-xs font-bold ${
                copied ? "text-emerald-500" : "text-muted-foreground"
              }`}
            >
              {copied ? "Copied!" : "Click to Copy"}
            </span>
          </button>
        </div>

        <div className="mt-2 flex justify-end">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onOpenChange(false)}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
