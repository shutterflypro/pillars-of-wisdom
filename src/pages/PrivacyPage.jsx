export default function PrivacyPage() {
  return (
    <div className="page-bg">
      <section className="bg-white pt-[90px] pb-20">
        <div className="container-site max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-gold" />
            <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">Legal</span>
          </div>
          <h1 className="section-heading">Privacy Policy</h1>
          <div className="flex items-center gap-2 mt-3 mb-2">
            <div className="h-[2px] w-10 bg-gold" />
            <div className="w-2 h-2 rotate-45 border border-gold" />
            <div className="h-[2px] w-10 bg-gold" />
          </div>
          <p className="text-sm text-slate mt-4">Last updated: May 2026</p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                1. Introduction
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Pillars of Wisdom AG ("Company," "we," "us," or "our") operates a sovereign AI
                operating system designed for regulated industries, including mortgage, banking,
                legal, healthcare, government, insurance, real estate, and accounting. We recognize
                that organizations in these sectors handle some of the most sensitive categories of
                personal and commercial data, and we are committed to protecting the privacy and
                security of that data with the highest standards of care.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                This Privacy Policy describes how we collect, use, disclose, and safeguard information
                when you use our platform, website, and related services (collectively, the "Platform").
                It applies to all users, including tenant administrators, end users, and visitors. This
                policy is effective as of the date listed above and governs all data processing
                activities undertaken by Pillars of Wisdom AG. We encourage you to read this policy
                carefully and to contact us with any questions regarding our practices.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                2. Information We Collect
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                We collect several categories of information to provide and improve the Platform,
                ensure security, and comply with legal obligations. The categories of information
                we collect include the following:
              </p>

              <h3 className="font-heading text-base font-semibold text-navy mb-1 mt-4">
                (a) Account and Registration Data
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                When you register for an account, we collect your name, email address, phone number,
                company name, job title, and industry sector. Tenant administrators may also provide
                organizational details such as company size, regulatory jurisdiction, and compliance
                requirements. This information is necessary to create and administer your account and
                to tailor the Platform experience to your organization's regulatory environment.
              </p>

              <h3 className="font-heading text-base font-semibold text-navy mb-1 mt-4">
                (b) Tenant Operational Data
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                When your organization uses the Platform, we process operational data that you and your
                users input, upload, or generate through workflows, document management, and
                decisioning tools. This includes documents, case files, transaction records, workflow
                configurations, and other business data processed through the Platform. This data is
                treated as tenant-controlled data and is subject to the isolation and sovereignty
                commitments described in Section 5.
              </p>

              <h3 className="font-heading text-base font-semibold text-navy mb-1 mt-4">
                (c) Usage Analytics
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                We collect information about how you interact with the Platform, including pages visited,
                features used, session duration, click patterns, navigation paths, and error
                occurrences. This analytics data helps us understand usage trends, improve user
                experience, optimize performance, and identify areas where additional features or
                support may be beneficial. Analytics data is aggregated and anonymized where possible
                before being used for product improvement purposes.
              </p>

              <h3 className="font-heading text-base font-semibold text-navy mb-1 mt-4">
                (d) Device and Log Data
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                We automatically collect certain technical information when you access the Platform,
                including IP address, browser type and version, operating system, device identifiers,
                screen resolution, referring URLs, and access timestamps. Server logs record requests
                to our infrastructure, including request paths, response codes, and latency metrics.
                This data is essential for maintaining platform security, diagnosing technical issues,
                preventing fraud, and ensuring the integrity of our services.
              </p>

              <h3 className="font-heading text-base font-semibold text-navy mb-1 mt-4">
                (e) AI Interaction Data
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                When you use AI-assisted features on the Platform, we process the prompts, queries, and
                inputs you provide to the AI system, as well as the outputs, recommendations, and
                insights generated in response. This data is processed within your tenant environment
                and is subject to the AI data processing commitments described in Section 7. We do not
                use customer AI interaction data to train or improve our general AI models without
                explicit consent from the tenant administrator.
              </p>

              <h3 className="font-heading text-base font-semibold text-navy mb-1 mt-4">
                (f) Payment Data
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                When you purchase a subscription or make a payment, we collect billing information
                including billing address, payment method details, and transaction records. Credit
                card numbers and other sensitive payment data are processed by our PCI-compliant payment
                processors and are not stored on our servers. We retain only the minimal transaction
                records necessary for accounting, tax compliance, and dispute resolution purposes.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                3. How We Use Information
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                We use the information we collect for the following primary purposes, each of which
                serves a legitimate and necessary function in delivering and improving our Platform:
              </p>

              <h3 className="font-heading text-base font-semibold text-navy mb-1 mt-4">
                Platform Operations and Service Delivery
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                We use your account and registration data to create, maintain, and secure your account;
                to authenticate users; to provision tenant environments; and to deliver the core
                functionality of the Platform. Operational data is processed to execute workflows,
                generate AI-assisted outputs, manage documents, and provide the decisioning and
                governance capabilities you rely on.
              </p>

              <h3 className="font-heading text-base font-semibold text-navy mb-1 mt-4">
                AI Improvement (With Consent)
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                We may use anonymized and aggregated usage data to improve the performance, accuracy,
                and capabilities of our AI models. Customer data is never used for model training
                without the explicit, informed consent of the tenant administrator. When consent is
                granted, data is stripped of all personally identifiable information and tenant-specific
                context before being incorporated into training datasets. Tenants may withdraw consent
                at any time through their administrative settings.
              </p>

              <h3 className="font-heading text-base font-semibold text-navy mb-1 mt-4">
                Security and Fraud Prevention
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                We use device, log, and usage data to detect, prevent, and respond to security threats,
                unauthorized access, fraud, and other malicious activity. This includes monitoring for
                anomalous access patterns, enforcing authentication policies, and conducting security
                investigations. These activities are essential to protecting the integrity of the Platform
                and the safety of all tenant data.
              </p>

              <h3 className="font-heading text-base font-semibold text-navy mb-1 mt-4">
                Regulatory Compliance
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                Given that our Platform serves regulated industries, we process certain data as necessary
                to comply with applicable laws, regulations, and legal processes. This includes
                maintaining audit trails, generating compliance reports, responding to lawful legal
                requests, and fulfilling obligations under industry-specific regulations such as HIPAA,
                GLBA, SOX, and state privacy laws.
              </p>

              <h3 className="font-heading text-base font-semibold text-navy mb-1 mt-4">
                Communications
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                We use your contact information to send service-related communications, including account
                verification, security alerts, billing notifications, and important updates about the
                Platform. With your consent, we may also send product announcements and educational
                content. You may opt out of non-essential communications at any time through your
                account settings or by contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                4. Legal Bases for Processing
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                We process personal data only when we have a lawful basis to do so. For individuals
                subject to the GDPR and other privacy regulations with similar requirements, our
                legal bases for processing include the following:
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Consent:</span> Where you have given clear, informed, and
                unambiguous consent for specific processing activities, such as receiving marketing
                communications or participating in AI model improvement programs. You may withdraw
                consent at any time without affecting the lawfulness of processing carried out prior
                to withdrawal.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Contract Performance:</span> Where processing is necessary
                for the performance of our contract with you or your organization, including providing
                the Platform services, maintaining your account, and delivering support.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Legal Obligations:</span> Where processing is required to
                comply with applicable laws, regulations, or legal processes, including regulatory
                requirements specific to the industries we serve.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Legitimate Interests:</span> Where processing is necessary
                for our legitimate business interests, such as improving the Platform, preventing fraud,
                ensuring network security, and enforcing our terms of service, provided that such
                interests are not overridden by your rights and freedoms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                5. Tenant Data Isolation &amp; Sovereignty
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Pillars of Wisdom is built on a multi-tenant architecture that enforces strict data
                isolation between tenants. Each tenant's operational data, configurations, AI
                interactions, and user information are logically and physically separated from every
                other tenant's data through dedicated encryption keys, namespace isolation, and
                access control boundaries. No tenant can access another tenant's data, and our own
                internal teams cannot view tenant data without explicit authorization from the tenant
                administrator.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                All tenant data is encrypted at rest using AES-256 and in transit using TLS 1.3.
                Tenant administrators retain full control over their data, including the ability to
                configure access policies, manage user permissions, set data retention rules, and
                initiate data export or deletion. We offer data residency options that allow tenants
                to specify the geographic region where their data is stored and processed, ensuring
                compliance with local data sovereignty requirements.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                For organizations with the most stringent sovereignty requirements, we offer sovereign
                deployment options that provide dedicated infrastructure, customer-managed encryption
                keys, and the ability to operate within air-gapped or government-approved cloud
                environments. These deployments ensure that data never leaves the designated
                jurisdiction and remains under the full control of the tenant at all times.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                6. Data Sharing &amp; Subprocessors
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                We do not sell, rent, or trade your personal information to any third party under any
                circumstances. This is a fundamental commitment that applies to all categories of data
                we collect and process. We share information only in the limited circumstances described
                below.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Service Providers and Subprocessors:</span> We engage a
                carefully vetted set of third-party service providers and subprocessors who perform
                specific functions on our behalf, such as cloud infrastructure hosting, payment
                processing, email delivery, and analytics. Each subprocessor is bound by data processing
                agreements that require them to process data only as instructed by us, maintain
                appropriate security measures, and comply with applicable privacy laws. We maintain a
                current list of subprocessors and notify tenant administrators of any material changes
                to subprocessor arrangements.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Confidentiality Obligations:</span> All subprocessors and
                service providers are subject to strict confidentiality obligations that prohibit them
                from using personal data for their own purposes or disclosing it to unauthorized parties.
                We conduct regular audits and assessments of our subprocessors to verify ongoing
                compliance with these obligations and with our security standards.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Legal Disclosures:</span> We may disclose information when
                required by law, regulation, or legal process, or when we believe in good faith that
                disclosure is necessary to protect our rights, the safety of our users, or the public
                interest. Where legally permissible, we will notify affected tenants before disclosing
                their data in response to legal process, and we will challenge overly broad or
                inappropriate requests.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                7. AI Data Processing
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                The Pillars of Wisdom Platform incorporates artificial intelligence and machine learning
                capabilities to assist with workflow automation, document analysis, decisioning support,
                and other operational functions. We are committed to transparency and accountability
                in how AI processes your data.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                AI processing occurs within the tenant's isolated environment. When a user submits a
                prompt or query to an AI feature, the input is processed within that tenant's
                encrypted namespace, and the resulting output is delivered back to the user within
                the same boundary. AI interaction data is not shared across tenants and is not
                accessible to other customers or to our general model training pipeline.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Training Data Policy:</span> We do not use customer data,
                including AI interaction data, to train, fine-tune, or improve our general-purpose AI
                models without the explicit, informed consent of the tenant administrator. When consent
                is granted, data undergoes a rigorous anonymization process that removes all personally
                identifiable information, tenant-specific context, and proprietary business data before
                it is considered for inclusion in any training dataset. Tenants may revoke consent at
                any time, and previously contributed data will be excluded from future training cycles.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Human Review:</span> In limited circumstances, such as
                quality assurance or safety evaluation, our authorized personnel may review AI inputs
                and outputs. Such reviews are conducted only with tenant authorization or where
                necessary for safety and compliance, and all reviewers are bound by strict
                confidentiality obligations.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Bias Mitigation:</span> We implement ongoing bias
                detection and mitigation practices across our AI systems. This includes regular
                audits of model outputs for disparate impact, diverse training data evaluation, and
                fairness testing across demographic groups. We are committed to ensuring that our AI
                capabilities serve all users equitably and do not perpetuate or amplify existing biases.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                8. Data Security
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                We implement comprehensive, industry-leading security measures to protect your data
                against unauthorized access, disclosure, alteration, and destruction. Our security
                program is designed to meet the rigorous requirements of the regulated industries we
                serve and is continuously evaluated and improved.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Encryption:</span> All data in transit is protected using
                TLS 1.3 with strong cipher suites. All data at rest is encrypted using AES-256 with
                tenant-specific encryption keys managed through a dedicated key management service.
                Encryption keys are rotated on a regular schedule and are never stored alongside the
                data they protect.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Access Controls:</span> We enforce role-based access
                controls and the principle of least privilege across all systems. Access to production
                data requires multi-factor authentication, is logged and audited, and is granted only
                to authorized personnel with a documented business need. Tenant administrators control
                all user-level access within their own environments.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Zero-Trust Architecture:</span> Our infrastructure
                operates on a zero-trust security model in which no user, device, or network segment
                is inherently trusted. Every access request is authenticated, authorized, and encrypted
                regardless of origin, and continuous verification is enforced throughout every session.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">SOC 2 Type II:</span> We maintain SOC 2 Type II
                certification, demonstrating our commitment to the highest standards of security,
                availability, processing integrity, confidentiality, and privacy. Our controls are
                independently audited on an annual basis, and the resulting reports are available to
                customers under NDA.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Vulnerability Management:</span> We conduct regular
                penetration testing, vulnerability scanning, and code security reviews. Identified
                vulnerabilities are triaged and remediated according to risk severity, with critical
                vulnerabilities addressed within defined SLA timeframes. We also maintain a responsible
                disclosure program for external security researchers.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Incident Response:</span> We maintain a comprehensive
                incident response plan that includes detection, containment, eradication, recovery, and
                post-incident analysis. In the event of a data breach, we will notify affected
                individuals and relevant authorities without undue delay and in accordance with
                applicable breach notification laws, including GDPR's 72-hour reporting requirement.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                9. Data Retention
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                We retain personal and operational data only for as long as necessary to fulfill the
                purposes for which it was collected, comply with legal obligations, resolve disputes,
                and enforce our agreements. Retention periods vary by data category:
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Account Data:</span> Retained for the duration of the
                account and for up to two years following account termination, or longer if required
                by law, to handle post-termination obligations and comply with regulatory recordkeeping
                requirements.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Tenant Operational Data:</span> Retained for the duration
                of the tenant subscription. Upon termination, tenant data is deleted within 30 days
                unless the tenant requests an export, in which case data is held for an additional 30
                days to allow completion of the export before deletion.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Usage Analytics:</span> Anonymized and aggregated
                analytics data may be retained indefinitely for product improvement. Personally
                identifiable analytics data is retained for up to 18 months, after which it is
                anonymized or deleted.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Device and Log Data:</span> Retained for up to 12 months
                for security and operational purposes, after which it is automatically purged unless
                required for an ongoing security investigation.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Legal Holds:</span> When data is subject to a legal hold,
                litigation preservation obligation, or regulatory investigation, retention will extend
                beyond the standard periods until the hold is released. We will notify affected users
                where legally permissible.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                Where data is no longer required, it is securely deleted or anonymized in accordance
                with our data destruction policies. Anonymized data that can no longer be linked to an
                identifiable individual may be retained for analytical purposes.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                10. Your Rights
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Depending on your jurisdiction, you may have the following rights with respect to your
                personal data. We are committed to facilitating the exercise of these rights and will
                respond to all verified requests within the timeframes required by applicable law.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Right of Access:</span> You have the right to request a
                copy of the personal data we hold about you and information about how we process it.
                We will provide this information in a commonly used, machine-readable format.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Right to Correction:</span> You have the right to request
                the correction of any inaccurate or incomplete personal data we hold about you. We will
                make corrections promptly upon verification of your identity and the nature of the
                inaccuracy.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Right to Deletion:</span> You have the right to request
                the deletion of your personal data, subject to certain exceptions such as legal
                obligations, ongoing contractual relationships, or legitimate interests that override
                your request. Where deletion is not possible, we will explain the reasons and any
                alternative measures available.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Right to Data Portability:</span> You have the right to
                receive your personal data in a structured, commonly used, and machine-readable format,
                and to transmit that data to another service provider where technically feasible.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Right to Restrict Processing:</span> You have the right
                to request that we restrict the processing of your personal data in certain
                circumstances, such as when you contest the accuracy of the data, when processing is
                unlawful, or when you need the data for legal claims.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Right to Object:</span> You have the right to object to
                the processing of your personal data based on legitimate interests or for direct
                marketing purposes. We will cease processing unless we demonstrate compelling
                legitimate grounds that override your interests.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Rights by Jurisdiction:</span> Additional rights may
                apply depending on your location. For individuals in the European Economic Area, the
                United Kingdom, and Switzerland, the GDPR provides the rights described above along
                with the right not to be subject to solely automated decision-making. For California
                residents, the CCPA provides specific rights detailed in Section 14. Other jurisdictions
                may provide additional rights, and we will honor those rights as applicable.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                11. Cookies &amp; Tracking
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                We use cookies and similar tracking technologies on our website and Platform to enhance
                your experience, analyze usage patterns, and ensure security. Cookies are small text
                files stored on your device that allow us to recognize your browser and capture certain
                information about your visit.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Strictly Necessary Cookies:</span> These cookies are
                essential for the Platform to function properly. They enable core functionality such as
                authentication, session management, and security features. You cannot opt out of these
                cookies without impairing the functionality of the Platform.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Analytics Cookies:</span> These cookies collect information
                about how users interact with the Platform, including pages visited, time spent, and
                error occurrences. This data is aggregated and anonymized to help us improve the Platform.
                Analytics cookies are set only after you have provided your consent.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Session Cookies:</span> These temporary cookies maintain
                your logged-in state during a single session and are automatically deleted when you close
                your browser. They are necessary for the secure operation of authenticated features.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Third-Party Cookies:</span> We may allow certain trusted
                third parties, such as our analytics and infrastructure providers, to set cookies to
                support the functionality described above. We do not permit third-party advertising
                cookies on our Platform.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                You can manage your cookie preferences through the cookie consent banner displayed on
                your first visit, or at any time through your browser settings. Most browsers allow you
                to refuse cookies, delete existing cookies, or alert you when a cookie is being set.
                Please note that disabling certain cookies may affect the functionality of the Platform.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                12. International Data Transfers
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Pillars of Wisdom AG operates globally, and your data may be transferred to and processed
                in countries other than your own. We take appropriate measures to ensure that
                international data transfers are conducted in compliance with applicable data protection
                laws and that your data receives an adequate level of protection regardless of where it
                is processed.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Standard Contractual Clauses (SCCs):</span> Where data is
                transferred from the European Economic Area, the United Kingdom, or other jurisdictions
                with adequacy decisions to countries that do not provide an adequate level of data
                protection, we rely on Standard Contractual Clauses approved by the European Commission
                or other relevant authorities. These clauses contractually bind the data importer to
                provide the same level of data protection as required in the originating jurisdiction.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Adequacy Decisions:</span> Where the European Commission
                or other relevant authority has recognized a country as providing an adequate level of
                data protection, transfers to that country may proceed without additional safeguards.
                We monitor adequacy decisions and update our transfer mechanisms accordingly.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Additional Safeguards:</span> In addition to SCCs, we
                implement supplementary measures including encryption in transit and at rest, access
                controls limiting data access to authorized personnel in specific jurisdictions, and
                contractual commitments from subprocessors regarding data handling practices. We conduct
                transfer impact assessments to evaluate the legal framework of the destination country
                and ensure that transfers do not undermine the protection of your data.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                13. Children's Privacy
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                The Pillars of Wisdom Platform is an enterprise product designed for use by professionals
                and organizations in regulated industries. It is not directed at children under the age
                of 16, and we do not knowingly collect personal information from children under 16. If
                we become aware that we have inadvertently collected personal data from a child under 16,
                we will take immediate steps to delete that information from our systems.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                If you are a parent or guardian and believe that your child has provided personal
                information to us, please contact us immediately at{" "}
                <a href="mailto:hello@pillarsofwisdom.ai" className="text-gold hover:underline">
                  hello@pillarsofwisdom.ai
                </a>{" "}
                and we will take appropriate action to remove the information and comply with applicable
                children's privacy laws, including the Children's Online Privacy Protection Act (COPPA)
                where applicable.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                14. California Privacy Rights
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                This section applies to California residents and describes additional rights provided
                under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act
                (CPRA), as amended. These rights are in addition to those described in Section 10.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Right to Know:</span> You have the right to request, twice
                per year, information about the categories and specific pieces of personal information
                we have collected about you, the categories of sources, the business or commercial
                purpose for collection, and the categories of third parties with whom we share that
                information. We will provide this information for the 12-month period preceding your
                request.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Right to Delete:</span> You have the right to request the
                deletion of your personal information, subject to certain exceptions permitted by the
                CCPA, such as maintaining data for legal compliance, completing transactions, or
                detecting security incidents.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Right to Opt Out of Sale:</span> We do not sell personal
                information, as the term "sale" is defined under the CCPA. We have never sold personal
                information and do not intend to do so in the future. Because we do not sell personal
                information, there is no need for you to exercise an opt-out right.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Right to Limit Use of Sensitive Personal Information:</span>
                Under the CPRA, you have the right to limit our use and disclosure of your sensitive
                personal information to what is necessary to perform the services or provide the goods
                reasonably expected. We only process sensitive personal information for the purposes
                described in this policy and do not use it for additional purposes without your consent.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Non-Discrimination:</span> We will not discriminate
                against you for exercising any of your CCPA rights. This means we will not deny goods
                or services, charge different prices, provide a different level of quality, or suggest
                that you will receive different treatment if you exercise your privacy rights.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                15. HIPAA &amp; Regulated Industry Considerations
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Pillars of Wisdom is designed to serve organizations in highly regulated industries,
                including healthcare. We understand the unique obligations that covered entities and
                business associates face under the Health Insurance Portability and Accountability Act
                (HIPAA) and other industry-specific regulations.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Business Associate Agreements (BAAs):</span> We are
                prepared to enter into Business Associate Agreements with covered entities and business
                associates who use the Platform to create, receive, maintain, or transmit Protected
                Health Information (PHI). BAAs are available upon request and define the scope of our
                obligations regarding the use and disclosure of PHI in accordance with the HIPAA
                Privacy Rule and Security Rule.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">PHI Handling:</span> When a BAA is in place, we implement
                the administrative, physical, and technical safeguards required by the HIPAA Security
                Rule to protect the confidentiality, integrity, and availability of PHI. This includes
                access controls, audit logging, encryption, integrity controls, and transmission
                security. We do not access, use, or disclose PHI except as permitted or required by the
                BAA or as required by law.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Covered Entity Responsibilities:</span> While we provide
                the technical and organizational safeguards necessary to support HIPAA compliance, the
                covered entity or business associate retains responsibility for ensuring that its use of
                the Platform complies with all applicable HIPAA requirements, including conducting a
                risk assessment, implementing workforce training, and maintaining required policies and
                procedures.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Minimum Necessary Standard:</span> We adhere to the HIPAA
                minimum necessary standard, which requires that access to and disclosure of PHI be
                limited to the minimum amount necessary to accomplish the intended purpose. Our
                role-based access controls and data governance features support tenants in implementing
                and enforcing this standard within their own environments.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                16. Changes to This Policy
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices,
                technologies, legal requirements, or other factors. When we make changes, we will notify
                you by posting the updated policy on our website with a revised "Last updated" date and,
                for material changes, by sending a notification to the email address associated with your
                account or by providing a prominent notice on the Platform.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                A material change is one that significantly affects how we collect, use, share, or
                store your personal data, or one that materially reduces your rights or our obligations
                under this policy. Examples of material changes include the introduction of new
                categories of data collection, changes to data sharing practices with third parties, or
                modifications to your rights regarding your data.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                For material changes, we will provide at least 30 days' notice before the changes take
                effect, giving you the opportunity to review the changes and, where applicable, to
                exercise your rights, including the right to object to the changes or to terminate your
                account. We encourage you to review this policy periodically to stay informed about how
                we protect your information.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy mb-2">
                17. Contact
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our
                data practices, please contact our Data Protection Officer using the information below.
                We are committed to responding to all inquiries promptly and in accordance with
                applicable legal requirements.
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Data Protection Officer:</span>{" "}
                <a href="mailto:hello@pillarsofwisdom.ai" className="text-gold hover:underline">
                  hello@pillarsofwisdom.ai
                </a>
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                <span className="font-semibold">Mailing Address:</span> Pillars of Wisdom AG, 1200
                South Federal Highway, Suite 200, Boca Raton, FL 33432, United States
              </p>
              <p className="text-sm text-slate leading-relaxed mt-3">
                We will acknowledge receipt of your inquiry within two (2) business days and provide a
                substantive response within thirty (30) days, or within the shorter timeframes required
                by applicable law. If your request requires additional time due to its complexity, we
                will inform you of the expected timeline and provide updates on our progress.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}