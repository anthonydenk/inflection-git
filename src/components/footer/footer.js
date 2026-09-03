import Link from "next/link";
import { firm } from "../../data/site";

const DOCS = [
  { href: "/documents/adv-part-2a", label: "ADV Part 2A" },
  { href: "/documents/adv-part-2b", label: "ADV Part 2B" },
  { href: "/documents/form-crs", label: "Form CRS" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

const FooterComponent = ({ includeInstitutionalFootnote = false }) => (
  <footer>
    <div className="foot-inner">
      <div className="foot-top">
        <div className="foot-wordmark">
          <img
            src="/media/brand/logoWhite.png"
            width={503}
            height={435}
            alt=""
            style={{ height: "32px", width: "auto", display: "block", flex: "none" }}
          />
          <span>
            Inflection <small>Capital Management</small>
          </span>
        </div>
        <ul className="foot-links">
          {DOCS.map((d) => (
            <li key={d.href}>
              <Link href={d.href}>{d.label}</Link>
            </li>
          ))}
          <li>
            <a href={`tel:${firm.telephoneSchema}`}>{firm.telephoneDisplay}</a>
          </li>
        </ul>
      </div>

      <div className="foot-rule" />

      <p className="foot-legal">
        Information presented is for informational purposes only. Inflection Capital Management, LLC
        (&ldquo;Inflection&rdquo;) is a registered investment adviser. Registration as an investment adviser does not
        imply a certain level of skill or training. Past performance is not indicative of future results. Investing
        involves risk, including the possibility of loss of principal. The ideas and opinions expressed herein do not
        constitute legal, tax, or investment advice or a recommendation of any particular security or strategy. Before
        making any investment decision, you should seek expert, professional advice and obtain information regarding the
        legal, fiscal, regulatory and foreign currency requirements for any investment according to the laws of your home
        country and place of residence. Any forward-looking statements or forecasts are based on assumptions and actual
        results may vary. Information presented from third parties is believed to be reliable, but no warranty is
        provided. Inflection is not required to update information presented, unless otherwise required by applicable
        law. For more information about Inflection, including our Form ADV Part 2A Brochure, please visit{" "}
        <a href={firm.urls.sec} target="_blank" rel="noopener noreferrer">
          {firm.urls.sec}
        </a>{" "}
        or contact us at {firm.telephoneDisplay}.
      </p>

      {includeInstitutionalFootnote && (
        <p className="foot-legal foot-institutional">
          <em>*Institutional accounts are defined by FINRA Rule 4512(c) as an &ldquo;investor with total assets of at least $50 million.&rdquo; When we use the term &ldquo;institutional-level&rdquo; or &ldquo;institutional-grade,&rdquo; we are referring to the rigorous process and standard of care that would need to be applied to service an account with this level of assets.</em>
        </p>
      )}

      <p className="foot-meta">
        {firm.address.streetAddress}, {firm.address.addressLocality}, {firm.address.addressRegion}{" "}
        {firm.address.postalCode} &middot; &copy; {new Date().getFullYear()} {firm.legalName}
      </p>
    </div>
  </footer>
);

export default FooterComponent;
