import { useState, useEffect, useCallback } from "react";
import { workshops } from "../data/workshopsData";

// ─── Design tokens (mirror the rest of the site) ─────────────────────────────
const serif = "Georgia, 'Times New Roman', serif";
const T = {
  parchment: "#f5f0e8",
  sand: "#f9f5ee",
  cream: "#efe9de",
  gold: "#b5924c",
  goldLight: "#c8a96e",
  espresso: "#2c1f0e",
  brown: "#5c4a34",
  brownLight: "#7a6248",
  tan: "#9c8060",
  beige: "#d4c4a8",
  error: "#8b2500",
  errorBg: "#fff3ef",
  success: "#2d5a27",
  successBg: "#f0f7ef",
};

// ─── Validation helpers ───────────────────────────────────────────────────────
const validators = {
  fullName: (v) => (v.trim().length >= 2 ? "" : "Please enter your full name."),
  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
      ? ""
      : "Please enter a valid email address.",
  phone: (v) =>
    /^[+\d][0-9\s\-().]{6,19}$/.test(v.trim())
      ? ""
      : "Please enter a valid phone number.",
  workshop: (v) => (v.trim() ? "" : "Please select a workshop."),
};

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  workshop: "",
};
const initialErrors = { fullName: "", email: "", phone: "", workshop: "" };

/**
 * TrialForm
 *
 * @param {boolean}  isOpen          - Controls modal visibility
 * @param {function} onClose         - Called when modal should close
 * @param {string}   workshopTitle   - Pre-fills the workshop field if provided
 */
const TrialForm = ({ isOpen, onClose, workshopTitle = "" }) => {
  const [form, setForm] = useState({ ...initialForm, workshop: workshopTitle });
  const [errors, setErrors] = useState({ ...initialErrors });
  const [touched, setTouched] = useState({});
  const [focusField, setFocusField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync workshop title whenever it changes (e.g. different workshop opened)
  useEffect(() => {
    if (isOpen) {
      setForm({ ...initialForm, workshop: workshopTitle });
      setErrors({ ...initialErrors });
      setTouched({});
      setIsSuccess(false);
    }
  }, [isOpen, workshopTitle]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape" && !isSubmitting) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose, isSubmitting]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ── Handlers ────────────────────────────────────────────────────────────────
  const validate = useCallback(
    (name, value) => validators[name]?.(value) ?? "",
    []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (touched[name]) {
      setErrors((er) => ({ ...er, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((er) => ({ ...er, [name]: validate(name, value) }));
    setFocusField(null);
  };

  const handleFocus = (e) => setFocusField(e.target.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Touch all required fields & validate
    const requiredFields = ["fullName", "email", "phone", "workshop"];
    const allTouched = requiredFields.reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {}
    );
    const newErrors = requiredFields.reduce(
      (acc, k) => ({ ...acc, [k]: validate(k, form[k]) }),
      {}
    );

    setTouched((prev) => ({ ...prev, ...allTouched }));
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  // ── Styles (inline) ────────────────────────
  const fieldStyle = (name) => ({
    width: "100%",
    boxSizing: "border-box",
    fontFamily: serif,
    fontSize: 14,
    color: T.espresso,
    background: errors[name] && touched[name] ? T.errorBg : T.sand,
    border: `1px solid ${
      errors[name] && touched[name]
        ? T.error
        : focusField === name
        ? T.gold
        : "#e8e2d8"
    }`,
    outline: "none",
    padding: "13px 16px",
    transition: "border-color 0.2s, background 0.2s",
    borderRadius: 0,
    letterSpacing: "0.01em",
  });

  const labelStyle = {
    fontFamily: serif,
    fontSize: 9,
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: T.tan,
    display: "block",
    marginBottom: 8,
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        role="presentation"
        onClick={isSubmitting ? undefined : onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          background: "rgba(44, 31, 14, 0.55)",
          backdropFilter: "blur(3px)",
          animation: "fadeInBackdrop 0.25s ease",
        }}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Book a Free Trial"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1001,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 480,
            background: "#fff",
            position: "relative",
            pointerEvents: "auto",
            boxShadow: "0 24px 80px rgba(44,31,14,0.18)",
            animation: "slideUpModal 0.3s cubic-bezier(0.22,1,0.36,1)",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <div style={{ height: 3, background: T.gold, flexShrink: 0 }} />

          {/* ── Success state ─────────────────────────────────── */}
          {isSuccess ? (
            <div style={{ padding: "56px 40px 52px", textAlign: "center" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: T.successBg,
                  border: `1px solid ${T.success}22`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 28px",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12.5L9.5 17L19 7.5"
                    stroke={T.success}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p
                style={{
                  fontFamily: serif,
                  fontSize: 9,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: T.gold,
                  marginBottom: 12,
                }}
              >
                Request Submitted
              </p>
              <h2
                style={{
                  fontFamily: serif,
                  fontSize: 26,
                  fontWeight: 300,
                  color: T.espresso,
                  lineHeight: 1.3,
                  marginBottom: 16,
                }}
              >
                Trial request <em style={{ fontStyle: "italic" }}>submitted</em>
                !
              </h2>
              <div
                style={{
                  height: 1,
                  background: "#f0ece4",
                  maxWidth: 80,
                  margin: "0 auto 20px",
                }}
              />
              <p
                style={{
                  fontFamily: serif,
                  fontSize: 14,
                  color: T.brownLight,
                  lineHeight: 1.8,
                  marginBottom: 36,
                }}
              >
                Trial request submitted. We will contact you soon.
              </p>

              <button
                onClick={onClose}
                style={{
                  fontFamily: serif,
                  background: T.espresso,
                  color: T.parchment,
                  border: "none",
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  padding: "14px 36px",
                  cursor: "pointer",
                }}
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div
                style={{
                  padding: "36px 40px 28px",
                  borderBottom: "1px solid #f0ece4",
                }}
              >
                <p
                  style={{
                    fontFamily: serif,
                    fontSize: 9,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: T.gold,
                    marginBottom: 10,
                  }}
                >
                  Experience the Art
                </p>
                <h2
                  style={{
                    fontFamily: serif,
                    fontSize: 24,
                    fontWeight: 300,
                    color: T.espresso,
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  Book a <em style={{ fontStyle: "italic" }}>Free Trial</em>
                </h2>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                style={{ padding: "32px 40px 40px" }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {/* Full Name */}
                  <div>
                    <label htmlFor="trial-fullName" style={labelStyle}>
                      Full Name <span style={{ color: T.gold }}>*</span>
                    </label>
                    <input
                      id="trial-fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Your Full Name"
                      value={form.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      style={fieldStyle("fullName")}
                      aria-describedby={
                        errors.fullName ? "err-trial-fullName" : undefined
                      }
                      aria-invalid={!!errors.fullName}
                    />
                    {errors.fullName && touched.fullName && (
                      <p
                        id="err-trial-fullName"
                        role="alert"
                        style={{
                          fontFamily: serif,
                          fontSize: 11,
                          color: T.error,
                          marginTop: 6,
                        }}
                      >
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="trial-email" style={labelStyle}>
                      Email Address <span style={{ color: T.gold }}>*</span>
                    </label>
                    <input
                      id="trial-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      style={fieldStyle("email")}
                      aria-describedby={
                        errors.email ? "err-trial-email" : undefined
                      }
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && touched.email && (
                      <p
                        id="err-trial-email"
                        role="alert"
                        style={{
                          fontFamily: serif,
                          fontSize: 11,
                          color: T.error,
                          marginTop: 6,
                        }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="trial-phone" style={labelStyle}>
                      Phone Number <span style={{ color: T.gold }}>*</span>
                    </label>
                    <input
                      id="trial-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      style={fieldStyle("phone")}
                      aria-describedby={
                        errors.phone ? "err-trial-phone" : undefined
                      }
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && touched.phone && (
                      <p
                        id="err-trial-phone"
                        role="alert"
                        style={{
                          fontFamily: serif,
                          fontSize: 11,
                          color: T.error,
                          marginTop: 6,
                        }}
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Workshop */}
                  <div>
                    <label htmlFor="trial-workshop" style={labelStyle}>
                      Workshop <span style={{ color: T.gold }}>*</span>
                    </label>
                    {workshopTitle ? (
                      <input
                        id="trial-workshop"
                        name="workshop"
                        type="text"
                        value={form.workshop}
                        readOnly
                        style={{
                          ...fieldStyle("workshop"),
                          background: T.cream,
                          color: T.brown,
                          cursor: "default",
                        }}
                      />
                    ) : (
                      <select
                        id="trial-workshop"
                        name="workshop"
                        value={form.workshop}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        style={fieldStyle("workshop")}
                        aria-describedby={
                          errors.workshop ? "err-trial-workshop" : undefined
                        }
                        aria-invalid={!!errors.workshop}
                      >
                        <option value="">Select a Workshop</option>
                        {workshops.map((w) => (
                          <option key={w.id} value={w.title}>
                            {w.title}
                          </option>
                        ))}
                      </select>
                    )}
                    {errors.workshop && touched.workshop && (
                      <p
                        id="err-trial-workshop"
                        role="alert"
                        style={{
                          fontFamily: serif,
                          fontSize: 11,
                          color: T.error,
                          marginTop: 6,
                        }}
                      >
                        {errors.workshop}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    id="trial-submit"
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      fontFamily: serif,
                      background: isSubmitting ? T.tan : T.espresso,
                      color: T.parchment,
                      border: "none",
                      fontSize: 11,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      padding: "17px 0",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      transition: "background 0.3s",
                      marginTop: 4,
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <SpinnerIcon />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Request Free Trial
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M3 8H13M9 4L13 8L9 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}

          <button
            onClick={onClose}
            disabled={isSubmitting}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "none",
              border: "none",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              color: T.beige,
              padding: 4,
              lineHeight: 1,
              transition: "color 0.2s",
              opacity: isSubmitting ? 0.3 : 1,
            }}
            onMouseEnter={(e) =>
              !isSubmitting && (e.currentTarget.style.color = T.espresso)
            }
            onMouseLeave={(e) =>
              !isSubmitting && (e.currentTarget.style.color = T.beige)
            }
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInBackdrop { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUpModal { from { opacity: 0; transform: translateY(24px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
};

const SpinnerIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    style={{ animation: "spin 0.8s linear infinite", flexShrink: 0 }}
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.25"
    />
    <path
      d="M12 2a10 10 0 0 1 10 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default TrialForm;
