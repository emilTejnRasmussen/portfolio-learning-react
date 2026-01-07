import { useMemo, useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const emailTo = "362617@via.dk";

  const mailtoHref = useMemo(() => {
    const subject = `Portfolio contact from ${form.name || "Someone"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    return `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body
    )}`;
  }, [form]);

  const canSend =
    form.name.trim().length > 1 &&
    form.email.trim().includes("@") &&
    form.message.trim().length > 5;

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!canSend) return;
    window.location.href = mailtoHref;
  }

  return (
    <div className="bg-slate-950 pt-14">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-1">
            <p className="text-sm text-white/60">Contact</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let’s talk
            </h1>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              If you want to reach out about opportunities, feedback, or a project,
              send a message here. This form opens your email client with the message
              pre-filled.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-white">Links</p>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  GitHub →
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition"
                >
                  LinkedIn →
                </a>
                <a
                  href={`mailto:${emailTo}`}
                  className="text-white/70 hover:text-white transition"
                >
                  Email →
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-white/80">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Emil"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-white/80">
                    Email
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-white/80">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Write your message..."
                    rows={7}
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={!canSend}
                  className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition ${
                    canSend
                      ? "bg-white text-slate-950 hover:bg-white/90"
                      : "bg-white/20 text-white/50 cursor-not-allowed"
                  }`}
                >
                  Send message
                </button>
              </div>

              <div className="mt-4 text-xs text-white/50">
                Or click:{" "}
                <a
                  href={mailtoHref}
                  className="text-white/70 hover:text-white transition"
                >
                  open email →
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
