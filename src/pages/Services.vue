<template>
  <div class="legacy-page">
<!-- main content -->

            <div class="row featured-top cropped-feature">
                <div class="featured-background capabilities">
                    <img src="/images/service-1.jpg.jpeg" alt="" />
                </div>

                <div class="photo-gradient"></div>

                <div class="container featured-container">

                    <div class="row">

                        <div class="col-md-6 featured-content">
                            <h1 class="featured-section">Services</h1>
                            <h2 class="featured-title">Collaborative legal talent</h2>
                            <div class="featured-details">
                                <p><span class="text-head-blue">Working side-by-side with clients, our results-oriented,
                                        collaborative approach has made {{ $siteInfo.SITE_NAME }} the firm of choice for many.
                                    </span>&nbsp;With experience in over 100 practice areas, our attorneys and business
                                    professionals advocate for clients and offer practical solutions to challenging
                                    business problems.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <!-- /end of featured top -->

            <!-- services listing -->
            <div class="row full-width-blue people-search" ref="accordionRoot">
                <div class="container">
                    <div class="row">
                        <div class="col capabilities-practices">
                            <h1>Services</h1>
                            <search>
                                <form :action="`${$siteInfo.SITE_URL}/services/search`">
                                    <label class="label-required" for="keyword">Search By Name</label>
                                    <div class="input-group mb-3">
                                        <input type="text" id="keyword" name="keyword"
                                            class="form-control rounded-0 border-0 py-3">
                                        <div class="input-group-append">
                                            <button type="submit" class="btn-services-search h-100 pr-3"><img
                                                    src="/images/icon-search.png" alt="Submit Search" width="24"></button>
                                        </div>
                                    </div>
                                </form>
                            </search>
                            <button class="border-0 bg-transparent practice-category-view-all" type="button"
                                aria-expanded="false">View All</button>
                            <hr />
                            <div class="practice-column">
                                <button class="practice-category w-100 bg-transparent border-0 text-left"
                                    aria-expanded="false">Corporate<span
                                        class="practice-category-indicator">+</span></button>
                                <div class="practice-category-children">

                                    <div class="practices-category">
                                        <a href="#">Affordable and
                                            Workforce Housing</a>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Corporate &amp; Securities
                                    </button>
                                    <ul class="practices-subcategories  practice-subcategories-two-column ">
                                        <li><a href="#">Corporate &amp;
                                                Securities</a></li>
                                        <li><a href="#">Antitrust</a></li>
                                        <li><a href="#">Corporate Companies And Employee Insurance</a></li>
                                        <li><a href="#">Business Development
                                                Companies</a></li>
                                        <li><a href="#">Business Services</a></li>
                                        <li><a href="#">Corporate Governance</a></li>
                                        <li><a href="#">Corporate Leveraged
                                                Finance</a></li>
                                        <li><a href="#">Emerging Companies</a></li>
                                        <li><a href="#">Executive
                                                Compensation, ERISA, Employee Benefits</a></li>
                                        <li><a href="#">Franchise
                                                &amp; Distribution - Corporate</a></li>
                                        <li><a href="#">General Counsel
                                                Services</a></li>
                                        <li><a href="#">Infrastructure &amp; P3</a>
                                        </li>
                                        <li><a href="#">Investment Management</a></li>
                                        <li><a href="#">Non-Profit
                                                Organizations</a></li>
                                        <li><a href="#">Private Equity</a></li>
                                        <li><a href="#">Private
                                                Equity - Portfolio Company Services</a></li>
                                        <li><a href="#">Private Funds</a></li>
                                        <li><a href="#">Public
                                                Company Compliance &amp; Counseling</a></li>
                                        <li><a href="#">Public Finance</a></li>
                                        <li><a href="#">Securities Offerings</a></li>
                                        <li><a href="#">Special
                                                Purpose Acquisition Companies (SPACs)</a></li>

                                    </ul>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Cybersecurity &amp; Data Privacy
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Cybersecurity &amp;
                                                Data Privacy</a></li>
                                        <li><a href="#">Cybersecurity
                                                &amp; Data Breach Litigation</a></li>
                                        <li><a href="#">Cybersecurity
                                                &amp; Data Breach Response</a></li>
                                        <li><a href="#">Global Privacy &amp;
                                                Security</a></li>
                                        <li><a href="#">HIPAA
                                                &amp; Health Information Privacy &amp; Security</a></li>

                                    </ul>

                                    <div class="practices-category">
                                        <a href="#">Economic Development</a>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Energy
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Energy</a></li>
                                        <li><a href="#">Alternative Energy</a></li>
                                        <li><a href="#">Energy Efficiency</a></li>
                                        <li><a href="#">Oil &amp; Gas</a></li>
                                        <li><a href="#">Power Generation</a></li>

                                    </ul>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Environmental, Health &amp; Safety
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Environmental,
                                                Health &amp; Safety</a></li>
                                        <li><a href="#">Environmental -
                                                Transactions</a></li>
                                        <li><a href="#">Environmental
                                                Compliance &amp; Permitting</a></li>
                                        <li><a href="#">OSHA – Safety &amp;
                                                Health</a></li>

                                    </ul>

                                    <div class="practices-category">
                                        <a href="#">Government Contracts
                                            &amp; Grants</a>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Healthcare
                                    </button>
                                    <ul class="practices-subcategories  practice-subcategories-two-column ">
                                        <li><a href="#">Healthcare</a></li>
                                        <li><a href="#">FDA
                                                Regulatory Compliance &amp; Litigation</a></li>
                                        <li><a href="#">Health Insurance</a></li>
                                        <li><a href="#">Health IT</a></li>
                                        <li><a href="#">Healthcare
                                                Government Investigations &amp; Litigation</a></li>
                                        <li><a href="#">Healthcare Insolvency</a></li>
                                        <li><a href="#">Healthcare
                                                Providers &amp; Suppliers</a></li>
                                        <li><a href="#">Healthcare
                                                Qui Tam Investigations &amp; Litigation</a></li>
                                        <li><a href="#">Healthcare
                                                Regulatory, Compliance &amp; Operations</a></li>
                                        <li><a href="#">Healthcare Transactions</a>
                                        </li>
                                        <li><a href="#">HIPAA
                                                &amp; Health Information Privacy &amp; Security</a></li>
                                        <li><a href="#">Laboratory Services</a></li>
                                        <li><a href="#">Taxable &amp; Tax
                                                Exempt Entities</a></li>
                                        <li><a href="#">Telemedicine</a></li>
                                        <li><a
                                                href="#">White
                                                Collar Healthcare Fraud, Compliance &amp; Litigation</a></li>

                                    </ul>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        International
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">International</a></li>
                                        <li><a href="#">Business Immigration</a></li>
                                        <li><a href="#">Customs,
                                                Tariffs, and International Trade</a></li>
                                        <li><a href="#">Eastern Europe and CIS</a>
                                        </li>
                                        <li><a href="#">Europe</a></li>
                                        <li><a href="#">International Sanctions</a>
                                        </li>
                                        <li><a href="#">International Taxation</a>
                                        </li>
                                        <li><a href="#">Korea</a></li>
                                        <li><a href="#">Latin America &amp;
                                                the Caribbean</a></li>
                                        <li><a href="#">Middle East</a></li>

                                    </ul>

                                    <div class="practices-category">
                                        <a href="#">Mergers &amp; Acquisitions</a>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Real Estate
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Real Estate</a></li>
                                        <li><a href="#">Construction
                                                and Construction Transactions</a></li>
                                        <li><a href="#">Opportunity Zones</a></li>

                                    </ul>

                                    <div class="practices-category">
                                        <a href="#">Real Estate Capital
                                            Markets</a>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Tax
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Tax</a></li>
                                        <li><a href="#">Executive
                                                Compensation, ERISA, Employee Benefits</a></li>
                                        <li><a href="#">International Taxation</a>
                                        </li>
                                        <li><a href="#">Non-Profit
                                                Organizations</a></li>
                                        <li><a href="#">Opportunity Zones</a></li>
                                        <li><a href="#">State &amp; Local Tax</a></li>
                                        <li><a href="#">Tax Controversy</a></li>
                                        <li><a href="#">Tax Planning &amp;
                                                Consulting</a></li>

                                    </ul>
                                </div>
                            </div>
                            <hr>
                            <div class="practice-column">
                                <button class="practice-category w-100 bg-transparent border-0 text-left"
                                    aria-expanded="false">Litigation<span
                                        class="practice-category-indicator">+</span></button>
                                <div class="practice-category-children">

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Bankruptcy, Creditors&#039; Rights &amp; Restructuring
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Bankruptcy,
                                                Creditors&#039; Rights &amp; Restructuring</a></li>
                                        <li><a href="#">Bankruptcy
                                                &amp; Insolvency Related Litigation</a></li>
                                        <li><a href="#">Creditor Representation</a>
                                        </li>
                                        <li><a href="#">Debtor Representation</a></li>
                                        <li><a href="#">Healthcare Insolvency</a></li>
                                        <li><a href="#">Trustee,
                                                Receivership Practice &amp; Representation</a></li>

                                    </ul>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        E-Discovery &amp; Information Governance
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">E-Discovery
                                                &amp; Information Governance</a></li>
                                        <li><a :href="'#'">E-Discovery - Encompass</a>
                                        </li>
                                        <li><a href="#">Health Insurance</a></li>
                                        <li><a href="#">Records &amp;
                                                Information Governance</a></li>

                                    </ul>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Employment &amp; Labor
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Employment &amp; Labor</a></li>
                                        <li><a href="#">Employee Benefits</a></li>
                                        <li><a href="#">Executive
                                                Compensation, ERISA, Employee Benefits</a></li>
                                        <li><a href="#">OSHA – Safety &amp;
                                                Health</a></li>
                                        <li><a href="#">Trade Secrets
                                                &amp; Employee Mobility</a></li>

                                    </ul>

                                    <div class="practices-category">
                                        <a href="#">Environmental
                                            Enforcement &amp; Litigation</a>
                                    </div>

                                    <div class="practices-category">
                                        <a href="#">International Arbitration</a>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Litigation
                                    </button>
                                    <ul class="practices-subcategories  practice-subcategories-two-column ">
                                        <li><a href="#">Litigation</a></li>
                                        <li><a href="#">Antitrust</a></li>
                                        <li><a href="#">Appellate
                                                Practice &amp; Legal Strategies</a></li>
                                        <li><a href="#">Broker
                                                Dealers &amp; Investment Management Litigation</a></li>
                                        <li><a href="#">Commercial
                                                Litigation &amp; Business Torts</a></li>
                                        <li><a href="#">Consumer Financial
                                                Services</a></li>
                                        <li><a
                                                href="#">Consumer
                                                Product Safety, Risk Prevention &amp; Regulatory Compliance</a></li>
                                        <li><a href="#">Directors
                                                &amp; Officers Liability Coverage</a></li>
                                        <li><a href="#">Dispute Resolution
                                                Solutions</a></li>
                                        <li><a href="#">Eminent Domain</a></li>
                                        <li><a href="#">False
                                                Advertising &amp; Unfair Trade Practices</a></li>
                                        <li><a href="#">Franchise
                                                &amp; Distribution - Litigation</a></li>
                                        <li><a href="#">Health Insurance</a></li>
                                        <li><a href="#">Premises Liability</a></li>
                                        <li><a href="#">Probate Litigation</a></li>
                                        <li><a href="#">Professional Liability</a>
                                        </li>
                                        <li><a href="#">Qui Tam Litigation</a></li>
                                        <li><a href="#">Securities &amp;
                                                Enforcement</a></li>
                                        <li><a href="#">State Attorneys
                                                General Actions</a></li>
                                        <li><a href="#">Tax Controversy</a></li>
                                        <li><a href="#">Tax Lien
                                                Resolution &amp; Litigation</a></li>
                                        <li><a href="#">Warranty Litigation</a></li>

                                    </ul>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Products Liability
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Products Liability</a></li>
                                        <li><a href="#">Class Action
                                                &amp; Multi-Claim Litigation</a></li>
                                        <li><a href="#">Products Liability -
                                                Automotive</a></li>
                                        <li><a href="#">Products
                                                Liability - Consumer &amp; Mechanical</a></li>
                                        <li><a
                                                href="#">Products
                                                Liability - Pharmaceuticals &amp; Medical Devices</a></li>
                                        <li><a href="#">Toxic Torts/Asbestos</a></li>

                                    </ul>

                                    <div class="practices-category">
                                        <a href="#">Securities and
                                            Corporate Governance</a>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        White Collar Defense &amp; Government Investigations
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">White
                                                Collar Defense &amp; Government Investigations</a></li>
                                        <li><a href="#">Anti-Money Laundering</a></li>
                                        <li><a
                                                href="#">Litigation,
                                                Government Response, and Crisis Management</a></li>
                                        <li><a
                                                href="#">White
                                                Collar Healthcare Fraud, Compliance &amp; Litigation</a></li>

                                    </ul>
                                </div>
                            </div>
                            <hr>
                            <div class="practice-column">
                                <button class="practice-category w-100 bg-transparent border-0 text-left"
                                    aria-expanded="false">Intellectual Property<span
                                        class="practice-category-indicator">+</span></button>
                                <div class="practice-category-children not-this">

                                    <div class="practices-category">
                                        <RouterLink to="/services/intellectual-property">Intellectual Property</RouterLink>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Intellectual Property Litigation
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><RouterLink to="/services/intellectual-property/litigation">Intellectual Property
                                                Litigation</RouterLink></li>
                                        <li><RouterLink to="/services/intellectual-property/patent-litigation">Patent Litigation</RouterLink></li>
                                    </ul>

                                    <div class="practices-category">
                                        <RouterLink to="/services/intellectual-property/transactions">Intellectual Property Transactions</RouterLink>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Patent Counseling and Procurement
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><RouterLink to="/services/intellectual-property/patent-counseling">Patent Counseling
                                                and Procurement</RouterLink></li>
                                        <li><RouterLink to="/services/intellectual-property/life-sciences">Life Sciences - IP</RouterLink></li>

                                    </ul>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Trademarks &amp; Copyrights
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><RouterLink to="/services/intellectual-property/trademarks-copyrights">Trademarks &amp;
                                                Copyrights</RouterLink></li>
                                        <li><RouterLink to="/services/intellectual-property/nmwatch">NMWatch™</RouterLink></li>

                                    </ul>
                                </div>
                            </div>
                            <hr>
                            <div class="practice-column">
                                <button class="practice-category w-100 bg-transparent border-0 text-left"
                                    aria-expanded="false">Government Relations<span
                                        class="practice-category-indicator">+</span></button>
                                <div class="practice-category-children">

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Government Relations Strategies
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Government Relations
                                                Strategies</a></li>
                                        <li><a href="#">All Maryland
                                                Lobbying Contacts</a></li>
                                        <li><a href="#">All North
                                                Carolina Lobbying Contacts</a></li>
                                        <li><a href="#">All
                                                Pennsylvania Lobbying Contacts</a></li>
                                        <li><a href="#">All South
                                                Carolina Lobbying Contacts</a></li>
                                        <li><a href="#">All Tennessee
                                                Lobbying Contacts</a></li>
                                        <li><a href="#">Congressional
                                                Oversight Investigations</a></li>
                                        <li><a href="#">Customs,
                                                Tariffs, and International Trade</a></li>
                                        <li><a href="#">Defense Sector</a></li>
                                        <li><a
                                                href="#">International
                                                Relations &amp; Sovereign Government Advocacy</a></li>
                                        <li><a href="#">State &amp;
                                                Local Government Relations</a></li>

                                    </ul>
                                </div>
                            </div>
                            <hr>
                            <div class="practice-column">
                                <button class="practice-category w-100 bg-transparent border-0 text-left"
                                    aria-expanded="false">Industries<span
                                        class="practice-category-indicator">+</span></button>
                                <div class="practice-category-children">

                                    <div class="practices-category">
                                        <a href="#">Advertising,
                                            Marketing, Sponsorship &amp; Promotions</a>
                                    </div>

                                    <div class="practices-category">
                                        <a href="#">Agribusiness &amp; Animal
                                            Health</a>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Automobiles &amp; Other Motor Vehicles
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Automobiles
                                                &amp; Other Motor Vehicles</a></li>
                                        <li><a href="#">Products Liability -
                                                Automotive</a></li>
                                        <li><a href="#">Warranty Litigation</a></li>

                                    </ul>

                                    <div class="practices-category">
                                        <a href="#">Aviation</a>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Banking &amp; Financial Services
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Banking &amp;
                                                Financial Services</a></li>
                                        <li><a
                                                href="#">Alternative
                                                Lending &amp; Other Non-Bank Financial Services</a></li>
                                        <li><a href="#">Blockchain &amp;
                                                Digital Currency</a></li>
                                        <li><a href="#">Corporate Leveraged
                                                Finance</a></li>
                                        <li><a href="#">Financial
                                                Institutions Corporate &amp; Regulatory</a></li>
                                        <li><a href="#">Financial Services
                                                Advisory</a></li>
                                        <li><a href="#">FinTech</a></li>
                                        <li><a href="#">Payments &amp; Digital
                                                Commerce</a></li>
                                        <li><a href="#">Tax Lien
                                                Resolution &amp; Litigation</a></li>

                                    </ul>

                                    <div class="practices-category">
                                        <a href="#">Construction
                                            and Construction Transactions</a>
                                    </div>

                                    <div class="practices-category">
                                        <a href="#">Consumer Products &amp;
                                            Retail</a>
                                    </div>

                                    <div class="practices-category">
                                        <a href="#">Data Center</a>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Education
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Education</a></li>
                                        <li><a href="#">Collegiate Athletics</a></li>
                                        <li><a href="#">EducationCounsel LLC</a></li>
                                        <li><a href="#">Higher Education</a></li>
                                        <li><a href="#">K-12 Public &amp;
                                                Private Schools</a></li>

                                    </ul>

                                    <div class="practices-category">
                                        <a href="#">Food &amp; Beverage</a>
                                    </div>

                                    <div class="practices-category">
                                        <a href="#">Gaming</a>
                                    </div>

                                    <div class="practices-category">
                                        <a href="#">Human Capital Management</a>
                                    </div>

                                    <div class="practices-category">
                                        <a href="#">Infrastructure &amp; P3</a>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Insurance
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Insurance</a></li>
                                        <li><a href="#">Bad Faith
                                                &amp; Extra Contractual Litigation</a></li>
                                        <li><a href="#">Captive Insurance</a></li>
                                        <li><a href="#">Directors
                                                &amp; Officers Liability Coverage</a></li>
                                        <li><a href="#">Health Insurance</a></li>
                                        <li><a href="#">Insurance
                                                Regulatory &amp; Compliance</a></li>
                                        <li><a href="#">Life, Health,
                                                Disability &amp; ERISA</a></li>
                                        <li><a href="#">Property &amp;
                                                Casualty Coverage</a></li>

                                    </ul>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Life Sciences, Pharmaceuticals &amp; Medical Devices
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Life
                                                Sciences, Pharmaceuticals &amp; Medical Devices</a></li>
                                        <li><a
                                                href="#">Clinical
                                                Research Stage Contracting &amp; Risk Management</a></li>
                                        <li><a href="#">FDA
                                                Regulatory Compliance &amp; Litigation</a></li>
                                        <li><a href="#">Life Sciences - IP</a></li>
                                        <li><a
                                                href="#">Products
                                                Liability - Pharmaceuticals &amp; Medical Devices</a></li>

                                    </ul>

                                    <div class="practices-category">
                                        <a href="#">Manufacturing</a>
                                    </div>

                                    <div class="practices-category">
                                        <a href="#">Private
                                            Clubs, Branded Residences &amp; Hospitality</a>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Private Wealth Services
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Private Wealth Services</a>
                                        </li>
                                        <li><a href="#">Probate Litigation</a></li>
                                        <li><a href="#">Trusts &amp; Estate
                                                Planning</a></li>

                                    </ul>

                                    <div class="practices-category">
                                        <a href="#">Railroads</a>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Real Estate
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Real Estate</a></li>
                                        <li><a href="#">Build-to-Rent/Single-Family
                                                Rentals</a></li>
                                        <li><a href="#">Commercial Leasing</a></li>
                                        <li><a href="#">Corporate Leveraged
                                                Finance</a></li>
                                        <li><a href="#">Eminent Domain</a></li>
                                        <li><a href="#">Environmental -
                                                Transactions</a></li>
                                        <li><a href="#">Opportunity Zones</a></li>
                                        <li><a href="#">Real Estate Capital
                                                Markets</a></li>
                                        <li><a href="#">Real Estate Investment
                                                Trusts</a></li>
                                        <li><a href="#">Resort &amp; Planned
                                                Communities</a></li>
                                        <li><a href="#">Timber &amp; Forest</a></li>

                                    </ul>

                                    <div class="practices-category">
                                        <a href="#">Sports</a>
                                    </div>

                                    <button class="practices-category w-100 bg-transparent border-0 text-left"
                                        aria-expanded="false">
                                        <span class="practice-indicator">+</span>
                                        Technology and Commercial Transactions
                                    </button>
                                    <ul class="practices-subcategories ">
                                        <li><a href="#">Technology and Commercial
                                                Transactions</a></li>
                                        <li><a href="#">Cloud
                                                Computing, Licensing, &amp; Transactions</a></li>
                                        <li><a href="#">Cybersecurity
                                                &amp; Data Breach Response</a></li>
                                        <li><a href="#">Health IT</a></li>
                                        <li><a href="#">Outsourcing &amp;
                                                Managed Services</a></li>

                                    </ul>
                                </div>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

           <Carousel />

            <!-- /main content -->
  </div>
</template>

<style scoped>
@media (max-width: 1199px) {
    .legacy-page :deep(#bottom-carousel .carousel-inner) {
        width: auto !important;
    }
}

@media (max-width: 768px) {
    .legacy-page .featured-top.cropped-feature {
        flex-direction: column;
        min-height: 0;
    }

    .legacy-page .featured-top.cropped-feature .featured-background {
        position: relative;
        width: 100%;
        height: auto;
        margin-top: 0;
    }

    .legacy-page .featured-top.cropped-feature .featured-background img {
        position: relative;
        display: block;
        top: auto;
        right: auto;
        width: 100%;
        max-width: 100%;
        height: auto;
    }

    .legacy-page .featured-top .photo-gradient {
        display: none;
    }

    .legacy-page .cropped-feature .featured-container {
        margin-top: 0 !important;
        width: 100%;
    }

    .legacy-page .featured-top .featured-content {
        flex: 0 0 100%;
        max-width: 100%;
        padding: 0 20px 28px;
    }

    .legacy-page .featured-top .featured-section {
        margin: 0 0 8px;
        font-size: 1.25rem;
        line-height: 1.3;
    }

    .legacy-page .featured-title {
        font-size: clamp(2rem, 6vw, 2.5rem);
        line-height: 1.05;
        margin-bottom: 16px;
    }

    .legacy-page .featured-details span {
        font-size: 1.125rem;
    }

    .legacy-page .people-search {
        padding: 28px 0;
    }

    .legacy-page .people-search .container {
        width: 100%;
    }

    .legacy-page .people-search h1 {
        font-size: clamp(1.75rem, 5vw, 2rem);
        line-height: 1.2;
    }

    .legacy-page .practice-category,
    .legacy-page .practice-column .practices-category {
        white-space: normal;
        line-height: 1.3;
    }

    .legacy-page .practice-category {
        min-height: 44px;
        padding-right: 40px;
    }

    .legacy-page .practice-category-indicator {
        top: 8px;
        font-size: 2.75rem;
    }

    .legacy-page .practice-column .practices-subcategories li {
        overflow-wrap: anywhere;
    }
}

@media (max-width: 480px) {
    .legacy-page .featured-top .featured-content {
        padding-right: 16px;
        padding-left: 16px;
    }

    .legacy-page .people-search {
        padding: 24px 0;
    }
}
</style>

<script setup>

import Carousel from '@/components/Carousel.vue';
import { ref, reactive, computed, watchEffect, onMounted, onBeforeUnmount } from 'vue'
 
// Template ref (matches ref="accordionRoot" on the outer div)
const accordionRoot = ref(null)
 
// ---------- State ----------
// One boolean per accordion button, keyed by its position: { 0: false, 1: true, ... }
const open = reactive({})
 
const allOpen = computed(() => {
  const values = Object.values(open)
  return values.length > 0 && values.every(Boolean)
})
 
const toggle = (key) => {
  open[key] = !open[key]
}
 
const toggleAll = () => {
  const next = !allOpen.value
  Object.keys(open).forEach((key) => {
    open[key] = next
  })
}
 
// ---------- Wiring to the existing markup ----------
// Each entry links a button to the panel that follows it.
//   level 1: button.practice-category  -> div.practice-category-children
//   level 2: button.practices-category -> ul.practices-subcategories
let entries = []              // [{ key, btn, panel, indicator }]
let buttonToKey = new Map()   // btn -> key
let viewAllBtn = null
 
function collect(root) {
  entries = []
  buttonToKey = new Map()
 
  const buttons = root.querySelectorAll('button.practice-category, button.practices-category')
 
  buttons.forEach((btn, key) => {
    const panel = btn.nextElementSibling
    if (!panel) return
 
    // Give each panel an id so aria-controls is valid
    if (!panel.id) panel.id = `accordion-panel-${key}`
    btn.setAttribute('aria-controls', panel.id)
 
    const indicator = btn.querySelector('.practice-category-indicator, .practice-indicator')
 
    entries.push({ key, btn, panel, indicator })
    buttonToKey.set(btn, key)
    open[key] = false
  })
 
  viewAllBtn = root.querySelector('.practice-category-view-all')
}
 
function onClick(e) {
  const btn = e.target.closest('button')
  if (!btn || !accordionRoot.value?.contains(btn)) return
 
  if (btn === viewAllBtn) {
    toggleAll()
    return
  }
 
  if (buttonToKey.has(btn)) {
    toggle(buttonToKey.get(btn))
  }
}
 
onMounted(() => {
  const root = accordionRoot.value
  if (!root) return
 
  collect(root)
 
  // Single delegated listener for every button
  root.addEventListener('click', onClick)
 
  // Keeps the DOM in sync with `open` (runs once now, then on every change)
  watchEffect(() => {
    entries.forEach(({ key, btn, panel, indicator }) => {
      const isOpen = !!open[key]
      panel.style.display = isOpen ? 'block' : 'none'
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
      if (indicator) indicator.textContent = isOpen ? '−' : '+'
    })
 
    if (viewAllBtn) {
      viewAllBtn.setAttribute('aria-expanded', allOpen.value ? 'true' : 'false')
      viewAllBtn.textContent = allOpen.value ? 'Collapse All' : 'View All'
    }
  })
})
 
onBeforeUnmount(() => {
  accordionRoot.value?.removeEventListener('click', onClick)
})

</script>
