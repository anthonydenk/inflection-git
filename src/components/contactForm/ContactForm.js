"use client";

import { useRef, useState } from "react";

/**
 * Contact form — DESIGN PROTOTYPE. No action, no backend, no network request.
 * Validation and state reporting are client-side only so the required / error /
 * accepted states can be reviewed. Wire this to a real endpoint (and add
 * server-side validation plus spam protection) before the page goes live.
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()0-9.\-\s]{7,}$/;

const FIELD_IDS = ["cf-name", "cf-email", "cf-phone", "cf-message"];

function valid(input) {
  const v = input.value.trim();
  if (input.id === "cf-phone") return v === "" || PHONE.test(v);
  if (v === "") return false;
  if (input.id === "cf-email") return EMAIL.test(v);
  return true;
}

export default function ContactForm() {
  const formRef = useRef(null);
  const statusRef = useRef(null);
  // Errors are only surfaced after the first submit attempt, so an untouched
  // form never greets you in red.
  const submittedRef = useRef(false);
  const [errors, setErrors] = useState({});
  const [accepted, setAccepted] = useState(false);

  const inputs = () =>
    FIELD_IDS.map((id) => formRef.current?.querySelector(`#${id}`)).filter(Boolean);

  const handleBlur = (event) => {
    if (!submittedRef.current) return;
    const input = event.currentTarget;
    setErrors((prev) => ({ ...prev, [input.id]: !valid(input) }));
  };

  const handleInput = (event) => {
    const input = event.currentTarget;
    if (!submittedRef.current) return;
    setErrors((prev) => (prev[input.id] ? { ...prev, [input.id]: !valid(input) } : prev));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submittedRef.current = true;

    const all = inputs();
    const next = {};
    all.forEach((input) => {
      next[input.id] = !valid(input);
    });
    setErrors(next);

    const bad = all.filter((input) => next[input.id]);
    if (bad.length) {
      setAccepted(false);
      bad[0].focus();
      return;
    }

    formRef.current.reset();
    setErrors({});
    submittedRef.current = false;
    setAccepted(true);
    statusRef.current?.focus();
  };

  const fieldClass = (id) => (errors[id] ? "field err" : "field");
  const invalid = (id) => (errors[id] ? "true" : "false");

  return (
    <>
      <p
        className={accepted ? "form-status on" : "form-status"}
        id="form-status"
        role="status"
        tabIndex={-1}
        ref={statusRef}
      >
        Thank you for reaching out.
      </p>

      <form className="form" id="contact-form" noValidate onSubmit={handleSubmit} ref={formRef}>
        <div className="form-row">
          <div className={fieldClass("cf-name")} data-field="">
            <span className="field-label">
              <label htmlFor="cf-name">Name</label>
              <span className="field-flag">Required</span>
            </span>
            <input
              type="text"
              id="cf-name"
              name="name"
              autoComplete="name"
              autoCapitalize="words"
              required
              aria-required="true"
              aria-invalid={invalid("cf-name")}
              aria-describedby="cf-name-err"
              onBlur={handleBlur}
              onInput={handleInput}
            />
            <span className="field-err" id="cf-name-err">
              Please enter your name.
            </span>
          </div>

          <div className={fieldClass("cf-email")} data-field="">
            <span className="field-label">
              <label htmlFor="cf-email">Email</label>
              <span className="field-flag">Required</span>
            </span>
            <input
              type="email"
              id="cf-email"
              name="email"
              autoComplete="email"
              autoCapitalize="off"
              spellCheck="false"
              inputMode="email"
              required
              aria-required="true"
              aria-invalid={invalid("cf-email")}
              aria-describedby="cf-email-err"
              onBlur={handleBlur}
              onInput={handleInput}
            />
            <span className="field-err" id="cf-email-err">
              Please enter a valid email address.
            </span>
          </div>
        </div>

        <div className={fieldClass("cf-phone")} data-field="">
          <span className="field-label">
            <label htmlFor="cf-phone">Phone</label>
            <span className="field-flag">Optional</span>
          </span>
          <input
            type="tel"
            id="cf-phone"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={invalid("cf-phone")}
            aria-describedby="cf-phone-err"
            onBlur={handleBlur}
            onInput={handleInput}
          />
          <span className="field-err" id="cf-phone-err">
            Please enter a phone number we can reach you on, or leave this blank.
          </span>
        </div>

        <div className={fieldClass("cf-message")} data-field="">
          <span className="field-label">
            <label htmlFor="cf-message">Message</label>
            <span className="field-flag">Required</span>
          </span>
          <textarea
            id="cf-message"
            name="message"
            rows={6}
            placeholder="What would you like to discuss with Inflection..."
            required
            aria-required="true"
            aria-invalid={invalid("cf-message")}
            aria-describedby="cf-message-err"
            onBlur={handleBlur}
            onInput={handleInput}
          />
          <span className="field-err" id="cf-message-err">
            Please tell us what you would like to discuss.
          </span>
        </div>

        <div className="form-actions">
          <button className="btn-ever" type="submit">
            Submit{" "}
            <span className="arr" aria-hidden="true">
              &#8594;
            </span>
          </button>
          <p className="form-legend">Fields marked required must be completed.</p>
        </div>
      </form>
    </>
  );
}
