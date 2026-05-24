export default function BillingPage() {
  return (
    <div className="page-bg">
      <section className="bg-white pt-[90px] pb-20">
        <div className="container-site max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-gold" />
            <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">Billing</span>
          </div>
          <h1 className="section-heading">Billing & Payment Terms</h1>
          <div className="flex items-center gap-2 mt-3 mb-2">
            <div className="h-[2px] w-10 bg-gold" />
            <div className="w-2 h-2 rotate-45 border border-gold" />
            <div className="h-[2px] w-10 bg-gold" />
          </div>
          <p className="text-sm text-slate mt-4">Last updated: May 2026</p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                1. Engagement & Subscription Model
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Pillars of Wisdom operates on an enterprise engagement model designed for organizations in regulated industries including mortgage, banking, legal, healthcare, government, insurance, real estate, and accounting. Services are provided under annual subscription agreements, with separate statements of work (SOWs) governing any professional services such as implementation, training, or custom development. Pilot programs may be available for qualifying organizations and are subject to their own terms as outlined in the applicable pilot agreement. The specific terms, fees, and scope for each engagement are governed by the Order Form executed between Pillars of Wisdom AG and the customer, which takes precedence over any conflicting terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                2. Pricing & Fees
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Pillars of Wisdom offers three subscription tiers: Foundation, Professional, and Enterprise. Each tier is priced on a per-seat basis with module add-ons available for specialized capabilities such as advanced compliance workflows, AI-assisted decisioning, and custom reporting. Enterprise customers may negotiate custom pricing, volume discounts, and multi-year commitments tailored to their organizational needs. All fees, including base subscription rates, per-seat charges, module costs, and any professional services fees, are specified in the applicable Order Form. There are no hidden fees; any charges not explicitly stated in the Order Form will not be assessed.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                3. Payment Terms
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Unless otherwise specified in your Order Form, payment terms are net 30 days from the invoice date. Invoices are issued according to the billing schedule outlined in your subscription agreement, which may be annual, quarterly, or monthly depending on the terms elected. Invoices are delivered via email to the designated billing contact and are also accessible through the customer portal. All payments must reference the applicable invoice number to ensure proper credit. If any portion of an invoice is disputed, the undisputed amount must still be paid by the due date, and the disputed portion should be resolved in accordance with the dispute process described in these terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                4. Payment Methods
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                We accept payment via ACH transfer, wire transfer, and corporate credit card. Specific payment instructions, including bank account details and routing information, are provided on each invoice. Customers are responsible for any bank fees, transaction charges, or processing costs associated with their chosen payment method. All payments must be made in United States Dollars (USD) unless otherwise specified in the Order Form. Payments made in a currency other than USD are subject to conversion at the prevailing exchange rate, and any resulting shortfall is the customer's responsibility.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                5. Taxes
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                All fees specified in the Order Form are exclusive of applicable taxes, duties, and similar governmental assessments. The customer is responsible for all sales, use, value-added (VAT), goods and services (GST), and other taxes associated with the purchase, except for taxes based on Pillars of Wisdom AG's net income. Tax-exempt customers must provide a valid tax exemption certificate prior to the invoice date; taxes invoiced before receipt of a valid certificate will not be refunded retroactively. Where the customer is required by law to withhold tax on payments, the customer shall increase its payment so that Pillars of Wisdom AG receives the full amount payable net of withholding, and the customer shall provide Pillars of Wisdom AG with official tax receipts evidencing the withholding.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                6. Subscription Periods & Renewals
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                The initial subscription term is specified in the Order Form and typically runs for twelve months from the effective date. Upon expiration of the initial term, subscriptions automatically renew for successive annual periods unless either party provides written notice of non-renewal at least 60 days prior to the renewal date. Pillars of Wisdom AG reserves the right to adjust pricing upon renewal and will communicate any price changes in writing at least 30 days before the renewal date. Renewals will be at the then-current rates applicable to the customer's subscription tier and selected modules.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                7. Upgrades & Module Additions
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Customers may upgrade their subscription tier or add modules at any time during the subscription term. Mid-term upgrades are prorated based on the remaining months in the current billing period, with the prorated amount invoiced separately or added to the next scheduled invoice. Module additions and user seat increases are priced according to the rate card in effect at the time of the change. All upgrades and additions become effective upon mutual written agreement as reflected in an amended Order Form or a signed change order.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                8. Downgrades & Reductions
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Reductions in user seats are permitted only at the time of subscription renewal and cannot be applied mid-term. Module removals may be requested at any time but will take effect at the end of the current subscription term. No mid-term partial refunds or credits are issued for downgrades, seat reductions, or module removals. Customers seeking to reduce their subscription scope should contact their account manager at least 60 days before the renewal date to discuss available options.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                9. Late Payments & Collections
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Any invoice amount not received within 30 days of the invoice date is considered past due. Past due balances accrue interest at the lesser of 1.5% per month or the maximum rate permitted by applicable law, calculated from the original due date. If payment remains outstanding, Pillars of Wisdom AG may suspend access to the Platform after providing 15 days' written notice of such suspension. The customer is responsible for all reasonable collection costs, including attorneys' fees, incurred in connection with the collection of overdue amounts. Pillars of Wisdom AG may also place accounts on credit hold, restricting the addition of seats or modules, until outstanding balances are resolved.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                10. Refund Policy
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Subscription fees and professional services fees are non-refundable except as expressly provided in the Order Form or as required by applicable law. In the event of termination for Pillars of Wisdom AG's material breach, the customer may be entitled to a prorated refund of prepaid fees for the unused portion of the subscription term, calculated from the effective date of termination. Pilot program fees are non-refundable regardless of the outcome of the pilot engagement. Any overpayment identified by either party will be applied as a credit toward future invoices or refunded at the customer's request within 90 days of the overpayment.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                11. Credits & Adjustments
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Service-level agreement (SLA) credits, where applicable, are processed in accordance with the SLA terms specified in the customer's subscription agreement. Billing error corrections are addressed promptly upon verification and may result in a credit memo or an adjusted invoice. Credit memos are issued within 30 days of confirmation and may be applied toward future invoices at the customer's discretion. Customers must notify Pillars of Wisdom AG of any billing disputes within 90 days of the invoice date; disputes raised after this window will not be eligible for adjustment.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                12. Expense Reimbursement
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                For professional services engagements including implementation, custom development, and on-site support, Pillars of Wisdom AG may incur pre-approved expenses such as travel, lodging, and materials. All expenses must be pre-approved in writing by the customer's designated project sponsor before they are incurred. Expense documentation, including itemized receipts and descriptions, must be submitted within 30 days of the expense date. Reimbursement for approved expenses will be included on the next scheduled invoice following verification of the supporting documentation.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                13. Audit Rights
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Customers have the right to audit fees charged by Pillars of Wisdom AG for a period of 12 months following the date of each invoice, provided that such audit is conducted during normal business hours and with at least 30 days' prior written notice. All audit results, including any findings related to fee calculations, shall be treated as confidential information subject to the terms of the applicable non-disclosure agreement. The cost of the audit shall be borne by the customer; however, if the audit reveals an overcharge exceeding 5% of the total fees for the audited period, Pillars of Wisdom AG will bear the reasonable cost of the audit in addition to issuing a credit for the overcharged amount.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                14. Termination Financial Provisions
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                All outstanding financial obligations, including fees for services rendered through the termination date and any applicable early termination charges, survive termination and remain due and payable. A final invoice will be issued within 30 days of the effective date of termination covering all accrued and unpaid amounts. Following termination, customers have a 30-day data export period during which they may retrieve their data from the Platform; access after this period is not guaranteed. Transition assistance, if requested, will be provided at then-current professional services rates under a separate SOW. Prepaid fees for the period beyond the termination date will be handled in accordance with the refund policy set forth in Section 10.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                15. Contact
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Billing inquiries, payment questions, and dispute notices may be directed to:{" "}
                <a
                  href="mailto:billing@pillarsofwisdom.ai"
                  className="text-gold hover:underline"
                >
                  billing@pillarsofwisdom.ai
                </a>. Written correspondence may be sent to Pillars of Wisdom AG, Florida. Customers may also access billing information, invoices, and payment history through the customer portal at any time.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}