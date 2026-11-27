/**
 * EnquiryForm – reusable form component used on the home, contact, and careers pages.
 *
 * variant="quote"  → Quote-request form (home & contact pages)
 * variant="apply"  → Job-application form (careers page)
 */

type QuoteFormProps = {
  variant: "quote";
  /** Pre-select a service option (contact page reads this from the URL search param). */
  defaultService?: string;
  /** Override the visible heading. Pass `null` to suppress the heading entirely. */
  heading?: string | null;
};

type ApplyFormProps = {
  variant: "apply";
  /** Override the visible heading. Pass `null` to suppress the heading entirely. */
  heading?: string | null;
};

type EnquiryFormProps = QuoteFormProps | ApplyFormProps;

const SERVICE_OPTIONS = [
  "School or college transport",
  "Adult and social care transport",
  "Group travel or an event",
  "Wheelchair-accessible transport",
  "SEND or additional needs transport",
  "Not sure yet",
] as const;

const ROLE_OPTIONS_QUOTE = [
  "Parent or carer",
  "School, trust or college staff",
  "Care home or social care provider",
  "Other",
] as const;

const ROLE_OPTIONS_APPLY = ["Driver", "Passenger assistant", "Not sure yet"] as const;

export default function EnquiryForm(props: EnquiryFormProps) {
  const isQuote = props.variant === "quote";
  const defaultService = isQuote ? (props as QuoteFormProps).defaultService : undefined;

  // Heading: explicit prop → default heading → null (no heading)
  const rawHeading = props.heading;
  const heading =
    rawHeading === null
      ? null
      : rawHeading !== undefined
      ? rawHeading
      : isQuote
      ? "Request a quote"
      : "Apply now";

  const formId = isQuote ? "quote" : "apply";
  const ariaLabel = isQuote ? "Quote request" : "Job application";
  const submitLabel = isQuote ? "Send enquiry" : "Send application";

  // Field-id prefix keeps ids unique even if two forms appear on the same page.
  const p = isQuote ? "q" : "a";

  return (
    <form id={formId} action="#" method="post" aria-label={ariaLabel}>
      {heading && <h2 style={{ fontSize: "28px" }}>{heading}</h2>}

      {/* ── Row 1: Name + Role ── */}
      <div className="row">
        <label htmlFor={`${p}-name`}>
          Your name
          <input
            id={`${p}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </label>

        <label htmlFor={`${p}-role`}>
          {isQuote ? "I am a\u2026" : "Role"}
          <select id={`${p}-role`} name="role">
            {(isQuote ? ROLE_OPTIONS_QUOTE : ROLE_OPTIONS_APPLY).map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </label>
      </div>

      {/* ── Row 2: Email + Phone ── */}
      <div className="row">
        <label htmlFor={`${p}-email`}>
          Email
          <input
            id={`${p}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>

        <label htmlFor={`${p}-phone`}>
          Phone
          <input
            id={`${p}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            // Phone is required for applications, optional for quotes
            required={!isQuote}
          />
        </label>
      </div>

      {/* ── Quote-only fields ── */}
      {isQuote && (
        <>
          <label htmlFor="q-service">
            Service needed
            <select id="q-service" name="service" defaultValue={defaultService}>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>

          <div className="row">
            <label htmlFor="q-school">
              School or destination
              <input id="q-school" name="school" type="text" />
            </label>

            <label htmlFor="q-postcode">
              Pick-up postcode
              <input
                id="q-postcode"
                name="postcode"
                type="text"
                autoComplete="postal-code"
              />
            </label>
          </div>
        </>
      )}

      {/* ── Apply-only fields ── */}
      {!isQuote && (
        <label htmlFor="a-postcode">
          Home postcode
          <input
            id="a-postcode"
            name="postcode"
            type="text"
            autoComplete="postal-code"
          />
        </label>
      )}

      {/* ── Message ── */}
      <label htmlFor={`${p}-msg`}>
        {isQuote ? "What do you need?" : "Tell us a little about yourself"}
        <textarea
          id={`${p}-msg`}
          name="message"
          rows={4}
          placeholder={
            isQuote
              ? "Number of passengers, days and times, and any wheelchair, access, medical or care needs"
              : "Any relevant experience, and when you\u2019re available"
          }
        />
      </label>

      <button className="btn btn-primary" type="submit">
        {submitLabel}
      </button>
    </form>
  );
}
