<template>
  <div class="Culture-pro-bono">
    <!-- main content -->

    <div class="row featured-top desktop_background_banner">
      <div class="featured-background firm">
        <img
          src="/images/firm-pro-bono (1).jpg"
          alt="Image of coworkers in a meeting room"
        />
      </div>
      <div class="photo-gradient"></div>
      <div class="container featured-container">
        <div class="row">
          <div class="col-md-6 featured-content">
            <h1 class="featured-section">Pro Bono</h1>
            <h2 class="featured-title">Seeking justice for those in need</h2>
            <div class="featured-details">
              <p>
                <span class="text-head-blue"
                  >Pro Bono is powerful for those who receive it and equally for
                  firm members who have the privilege to provide it..</span
                >
              </p>

              <p>
                Our Pro Bono Program strives for liberty and justice for all in
                legal need. The program was created with the mission to serve
                the less fortunate and nonprofits providing services in our
                communities and beyond. Pro bono is a tradition deeply rooted in
                our culture. Since 1990, {{ $siteInfo.SITE_NAME }} lawyers have provided over
                622,450 hours of service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container featured-tabs">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              exact-active-class="active"
              to="/culture"
              >Overview</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              exact-active-class="active"
              to="/CultureProBono"
              >Pro Bono</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              exact-active-class="active"
              to="/EngagementAndOpportunity"
              >Engagement and Opportunity</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              exact-active-class="active"
              to="/CommunityServices"
              >Community Service</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- /end of DESKTOP featured top -->

    <div class="row featured-top mobile_background_banner">
      <img
        src="/images/Lufuwi6sfCydaiXdhd2EoUYGcwIvXeWv9R1HMnxZ.jpg"
        alt="Image of coworkers in a meeting room"
      />
      <div class="container featured-container">
        <div class="row">
          <div class="col-md-6 featured-content">
            <h1 class="featured-section">Pro Bono</h1>
            <h2 class="featured-title">Seeking justice for those in need</h2>
            <div class="featured-details">
              <p>
                <span class="text-head-blue"
                  >Pro Bono is powerful for those who receive it and equally for
                  firm members who have the privilege to provide it.</span
                >
              </p>

              <p>
                Our Pro Bono Program strives for liberty and justice for all in
                legal need. The program was created with the mission to serve
                the less fortunate and nonprofits providing services in our
                communities and beyond. Pro bono is a tradition deeply rooted in
                our culture. Since 1990, {{ $siteInfo.SITE_NAME }} lawyers have provided over
                622,450 hours of service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container featured-tabs">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              exact-active-class="active"
              to="/culture"
              >Overview</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              to="/CultureProBono"
              class="nav-link"
              exact-active-class="active"
            >
              Pro Bono
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              exact-active-class="active"
              to="/EngagementAndOpportunity"
              >Engagement and Opportunity</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              exact-active-class="active"
              to="/CommunityServices"
              >Community Service
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <!-- /end of MOBILE featured top -->

    <div class="row full-width-blue flush-top">
      <div class="container desktop_only">
        <div class="row">
          <div class="col-md-4">
            <div class="culture-intro">
              <p><strong>Pro Bono Runs Deep in Our Culture</strong></p>

              <p>
                {{ $siteInfo.SITE_NAME }} is committed to serving the most vulnerable in our
                society with legal, social and economic issues through pro bono
                service. The Firm engages in complex pro bono litigation, policy
                and legislative advocacy, and provides individual representation
                to a diverse group of individuals and organizations whose
                mission is to serve people with limited means. As often
                described by our late partner and advocate, Stephen G. Morrison,
                pro bono work helps all of us to remember the reason we have
                laws—to protect, to help, to guide, and to seek justice. The
                Firm embraces the pro bono culture that those who serve the law
                shall serve the poor and disadvantaged.
              </p>

              <div class="pre-content" contenteditable="false">
                <details
                  class="content-expand-wrapper-ck"
                  data-bordered=""
                  data-collapse="true"
                  data-color=""
                  data-cssclass="content-expand-wrapper-ck"
                  data-hidesummary=""
                  data-maxheight=""
                  data-monospace=""
                  data-wrap="true"
                  undefined=""
                >
                  <summary class="pre-title">
                    If You Need a Pro Bono Lawyer
                  </summary>

                  <div class="pre-content">
                    <p>
                      {{ $siteInfo.SITE_NAME }} does not accept direct requests for pro bono
                      representation. Our pro bono cases and clients are
                      referred to us through legal services organizations. If
                      you are in need of pro bono legal representation, you may
                      be able to find help from one of these resources:
                    </p>
                    <ul class="list-triangle">
                      <li>
                        <a
                          href="https://www.americanbar.org/groups/legal_services/flh-home/"
                          >FindLegalHelp.org</a
                        >
                      </li>
                      <li>
                        <a href="https://www.lawhelp.org/">LawHelp.org</a>
                      </li>
                      <li>
                        <a
                          href="https://www.americanbar.org/groups/center-pro-bono/resources/directory_of_law_school_public_interest_pro_bono_programs/"
                          target="_blank"
                          >Law School Pro Bono Programs</a
                        >
                      </li>
                      <li>Your State Bar’s lawyer referral program</li>
                    </ul>
                  </div>
                </details>

                <details
                  class="content-expand-wrapper-ck"
                  data-bordered=""
                  data-collapse="true"
                  data-color=""
                  data-cssclass="content-expand-wrapper-ck"
                  data-hidesummary=""
                  data-maxheight=""
                  data-monospace=""
                  data-wrap="true"
                  undefined=""
                >
                  <summary class="pre-title">
                    Historic Impact Litigation
                  </summary>

                  <div class="pre-content">
                    <p>
                      {{ $siteInfo.SITE_NAME }} has a legacy of taking on large-scale
                      litigation matters to promote the well-being of
                      disadvantaged classes of individuals.<br />
                      <br />
                      <strong
                        >Advocacy for Prisoners with Mental Health
                        Illnesses</strong
                      ><br />
                      The Firm represented Protection and Advocacy for People
                      with Disabilities and a class of inmates with mental
                      illnesses in a lawsuit against the SC Department&nbsp;of
                      Corrections.&nbsp;After 10 years of litigation and two
                      years of negotiations, a settlement was struck that could
                      end what Judge Michael Baxley called the unconstitutional
                      treatment of severely mentally ill offenders in the prison
                      facilities.&nbsp;<br />
                      <br />
                      <strong>Protecting the Rights of School Children</strong
                      ><br />
                      In Abbeville County School District v. State of South
                      Carolina, {{ $siteInfo.SITE_NAME }} represented a group of rural school
                      districts, students, and taxpayers in a groundbreaking
                      lawsuit challenging the funding of public schools and the
                      adequacy of the education system overall. Students in the
                      plaintiff school districts are predominantly living in
                      poverty in the state’s poorest and most isolated areas.
                    </p>
                  </div>
                </details>

                <details
                  class="content-expand-wrapper-ck"
                  data-bordered=""
                  data-collapse="true"
                  data-color=""
                  data-cssclass="content-expand-wrapper-ck"
                  data-hidesummary=""
                  data-maxheight=""
                  data-monospace=""
                  data-wrap="true"
                  open=""
                  undefined=""
                >
                  <summary class="pre-title">
                    Justice Through Legislative Reform and New Courts
                  </summary>

                  <div class="pre-content">
                    <p>
                      Through hands-on involvement, {{ $siteInfo.SITE_NAME }} attorneys have
                      been integral in the creation of new legal frameworks and
                      new, specialized courts to meet needs that were previously
                      unmet.<br />
                      <br />
                      <strong>Race, Law Enforcement and Law Project</strong
                      ><br />
                      As a result of a recent national incident, the Firm, in
                      partnership with Georgia Appleseed and the Atlanta Bar,
                      formed this project to analyze law enforcement, community
                      relations and policies.&nbsp;The Firm completed detailed
                      legal and factual research and interviewed 350
                      stakeholders to create a Report identifying key law and
                      policy issues relating to the police-community legal
                      process for investigations and charging such
                      incidents.&nbsp;<br />
                      <br />
                      <strong
                        >Statewide Review Seeking Improved Services for
                        Vulnerable Adults</strong
                      ><br />
                      The Firm concluded a statewide research project and
                      created a Report with recommendations to improve services
                      to vulnerable adults in South Carolina.&nbsp;Our client,
                      AARP, plans to use the Report to lobby lawmakers to
                      restore funding and needed improvements identified in the
                      research.<br />
                      <br />
                      <strong>Columbia Homeless Court</strong><br />
                      {{ $siteInfo.SITE_NAME }}, in conjunction with dedicated judges, the
                      Richland County Solicitor’s Office and Public Defender’s
                      Office, SC Appleseed Legal Justice and several nonprofits,
                      worked to create the first homeless court in Columbia,
                      South Carolina.&nbsp;The purpose of the court is to
                      encourage participants to receive and complete treatment
                      programs in exchange for the dismissal of fines associated
                      with a criminal offense and, in some cases, the dismissal
                      of a charge.&nbsp;The court model was also used to create
                      a homeless court in Charleston, SC in 2017.&nbsp;
                    </p>
                  </div>
                </details>

                <details
                  class="content-expand-wrapper-ck"
                  data-bordered=""
                  data-collapse="true"
                  data-color=""
                  data-cssclass="content-expand-wrapper-ck"
                  data-hidesummary=""
                  data-maxheight=""
                  data-monospace=""
                  data-wrap="true"
                  open="open"
                  undefined=""
                >
                  <summary class="pre-title">Veterans Assistance</summary>

                  <div class="pre-content">
                    <p>
                      {{ $siteInfo.SITE_NAME }}’ attorneys are committed to serving those who
                      have served their country and fellow citizens in the
                      military.<br />
                      <br />
                      <strong>Lawyers 4 Vets</strong><br />
                      This pro bono clinic was created in May, 2014, by SC
                      Appleseed Legal Justice, in partnership with Dorn VA
                      Medical Center and in coordination with and support from
                      {{ $siteInfo.SITE_NAME }}.&nbsp;The monthly legal clinic is for
                      low-income vets seeking guidance or representation in
                      specific areas of law from SC Bar attorneys. As of April,
                      2017, the Firm has received and screened over 4,200 calls
                      from veterans.&nbsp;<br />
                      <br />
                      <strong>Adopt-A-Base</strong><br />
                      {{ $siteInfo.SITE_NAME }} is among a few firms nationwide participating
                      in the Adopt-A-Base Program.&nbsp;In this program, the ABA
                      Tax Section partners with the military and IRS to help
                      train service members to become voluntary tax preparers
                      through Voluntary Income Tax Assistance
                      (VITA).&nbsp;Numerous Firm tax attorneys provide annual
                      training at bases located in NC, SC and GA.&nbsp;<br />
                      <br />
                      <strong>K9 For Warriors</strong><br />
                      The Firm provides legislative support at the federal
                      government affairs level to this nonprofit.&nbsp;The group
                      is seeking to establish an accreditation for service dog
                      providers to veterans suffering from post-traumatic stress
                      disorder among other goals.
                    </p>
                  </div>
                </details>

                <details
                  class="content-expand-wrapper-ck"
                  data-bordered=""
                  data-collapse="true"
                  data-color=""
                  data-cssclass="content-expand-wrapper-ck"
                  data-hidesummary=""
                  data-maxheight=""
                  data-monospace=""
                  data-wrap="true"
                  undefined=""
                >
                  <summary class="pre-title">
                    Estate Planning for Those Who Serve and Those in Need
                  </summary>

                  <div class="pre-content">
                    <p>
                      {{ $siteInfo.SITE_NAME }} has proactively created and maintained robust
                      programs to provide simple wills and healthcare directives
                      free of charge to first responders who put their lives on
                      the line to serve and protect.<br />
                      <br />
                      <strong>Wills for Heroes</strong><br />
                      After the tragic events of September 11, 2001, the Firm
                      created the Wills For Heroes Program that provides free,
                      simple wills and medical directives to first
                      responders.&nbsp;Since the program’s inception, thousands
                      of wills have been created for these individuals that
                      protect us daily in our communities in Georgia, South
                      Carolina and West Virginia. The Firm has expanded its
                      wills programs to include the creation of the&nbsp;<strong
                        >Habitat for Humanity Wills Project </strong
                      ><strong>and the</strong
                      ><strong> Zeb Alley Wills for Veterans</strong>. Several
                      attorneys assisted Georgia&nbsp;Appleseed with<strong>
                        the</strong
                      ><strong> Promised Land Project</strong> to provide simple
                      wills to low-income rural farmers.<br />
                      <br />
                      The Firm worked in partnership with Eli Lilly and Company
                      to help create and launch the Indianapolis Wills for
                      Heroes Program.&nbsp;
                    </p>
                  </div>
                </details>

                <details
                  class="content-expand-wrapper-ck"
                  data-bordered=""
                  data-collapse="true"
                  data-color=""
                  data-cssclass="content-expand-wrapper-ck"
                  data-hidesummary=""
                  data-maxheight=""
                  data-monospace=""
                  data-wrap="true"
                  undefined=""
                >
                  <summary class="pre-title">
                    Protecting the Rights of the Incarcerated
                  </summary>

                  <div class="pre-content">
                    <p>
                      {{ $siteInfo.SITE_NAME }}’ attorneys work to protect the rights of
                      individuals under the jurisdiction of the criminal justice
                      system who otherwise would have no access to justice.<br />
                      <br />
                      <strong>Changing the Parole System</strong><br />
                      Attorneys who represented an inmate in a parole proceeding
                      obtained a SC Supreme Court ruling that fundamentally
                      changed the way the State Parole Board determines how a
                      majority of votes is calculated and parole questions for
                      parole-eligible inmates. The Firm has represented inmates
                      in parole proceedings with successful results that
                      resulted in the release of nine inmates since
                      2003.&nbsp;<br />
                      <br />
                      <strong>Clemency Project 2014</strong><br />
                      More than 20 lawyers worked to seek relief for clients
                      under President Obama’s clemency power for prisoners
                      facing long sentences for nonviolent drug crimes. The Firm
                      handled 15&nbsp;cases and four clients were granted
                      clemency and released from prison.&nbsp;<br />
                      <br />
                      <strong>Appellate Indigent Defense Project</strong><br />
                      The South Carolina Commission on Indigent Defense and
                      {{ $siteInfo.SITE_NAME }} created a new program called the Appellate
                      Project.&nbsp;Volunteer attorneys help the appellate
                      division handle an increasingly heavy hearing
                      caseload.&nbsp;
                    </p>
                  </div>
                </details>

                <details
                  class="content-expand-wrapper-ck"
                  data-bordered=""
                  data-collapse="true"
                  data-color=""
                  data-cssclass="content-expand-wrapper-ck"
                  data-hidesummary=""
                  data-maxheight=""
                  data-monospace=""
                  data-wrap="true"
                  undefined=""
                >
                  <summary class="pre-title">Children and the Law</summary>

                  <div class="pre-content">
                    <p>
                      {{ $siteInfo.SITE_NAME }}’ attorneys have deep experience in protecting
                      the legal rights of children who are unable to protect
                      themselves.<br />
                      <br />
                      <strong>Reuniting Abducted Children</strong><br />
                      For numerous years, the Firm has been a member of the
                      Hague Convention Attorney Network to support the U.S.
                      Department of State that serves as the U.S. Central
                      Authority for the 1980 Hague Convention on the Civil
                      Aspects of International Child Abduction.&nbsp;The firm
                      has represented many applicant-parents involving
                      international child abduction to the United
                      States.&nbsp;<br />
                      <br />
                      <strong
                        >Making a Better Life for Special Needs Children…
                        Guardianship Project-SC and GA</strong
                      ><br />
                      Parents and caregivers with young adults with profound
                      special needs are suddenly faced with having limited
                      ability to make health, education, placement, financial
                      and other decisions when their children transition to
                      adulthood at age 18. The Firm created the South Carolina
                      Guardianship Project and recently the Georgia Guardianship
                      Project with Atlanta Legal Aid, and attorneys represent
                      low-income parents and caregivers in probate court to
                      establish legal guardianship over family members who have
                      severe special needs.<br />
                      <br />
                      <strong>Special Education Program</strong><br />
                      This pro bono project enables attorneys to represent and
                      advocate for students in a variety of school
                      administration proceedings, including special education
                      meetings, discipline proceedings, state special education
                      complaints, due process hearings under the Individuals
                      with Disabilities Education Act, and appeals of
                      administrative proceedings to state circuit courts,
                      federal district courts, and courts of appeal.
                    </p>
                  </div>
                </details>

                <details
                  class="content-expand-wrapper-ck"
                  data-bordered=""
                  data-collapse="true"
                  data-color=""
                  data-cssclass="content-expand-wrapper-ck"
                  data-hidesummary=""
                  data-maxheight=""
                  data-monospace=""
                  data-wrap="true"
                  undefined=""
                >
                  <summary class="pre-title">
                    Representing Victims of Domestic Violence
                  </summary>

                  <div class="pre-content">
                    <p>
                      {{ $siteInfo.SITE_NAME }}’ attorneys fight for the silent victims of
                      violent crimes within the household across the firm’s
                      footprint.<br />
                      <br />
                      Numerous attorneys, in several states, are trained to
                      represent domestic violence victims who cannot afford
                      representation. Our lawyers have successfully represented
                      their clients to ensure their safety and to help reclaim
                      their lives after enduring abusive situations by
                      participating in the following organized programs:
                    </p>
                    <ul class="list-triangle">
                      <li>
                        Atlanta Volunteer Lawyers Domestic Violence Project
                      </li>
                      <li>DC Volunteer Lawyers Project</li>
                      <li>Safe Alliance, Charlotte, NC</li>
                      <li>
                        SC Attorney General’s Criminal Domestic Violence Project
                      </li>
                    </ul>
                  </div>
                </details>

                <details
                  class="content-expand-wrapper-ck"
                  data-bordered=""
                  data-collapse="true"
                  data-color=""
                  data-cssclass="content-expand-wrapper-ck"
                  data-hidesummary=""
                  data-maxheight=""
                  data-monospace=""
                  data-wrap="true"
                  undefined=""
                >
                  <summary class="pre-title">
                    Corporate Lawyers Supporting Nonprofits
                  </summary>

                  <div class="pre-content">
                    <p>
                      A hallmark of the Pro bono Program is the creative service
                      provided by the Firm’s corporate attorneys to nonprofit
                      organizations.<br />
                      <br />
                      The Firm has a very strong commitment to provide pro bono
                      service to charitable, religious, civic, community,
                      governmental and educational organizations whose mission
                      is to address the needs of persons of limited
                      means.&nbsp;The Firm’s pro bono service to eleemosynary
                      corporations has involved tax issues, bankruptcy,
                      employment, mergers and acquisitions, real estate matters,
                      contracts, government regulations, intellectual property,
                      immigration, lobbying, litigation and several other
                      issues. As an example, &nbsp;we are strong supporters of
                      the Atlanta Pro Bono Partnership and over the years have
                      provided legal services on approximately 225 matters to
                      nonprofits in Atlanta.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div data-v-a2324b3f="" class="col-md-7 diversity-contacts">
            <!-- Contact records and initial slides are configured at the end of this file. -->
            <!-- <SingleImageCarousal /> -->
             <RightSideShortSlider title="PRO BONO CONTACTS" :contacts="proBonoContacts" :initial-index="3" />
            <youtubeVideoSection />
            <ProBonoGalleryCarousal />
          </div>
        </div>
      </div>
      <!-- /container -->

      <div class="card-header non-accordion">
        <h5 class="closed">
          <a class="nav-link" href="/culture" role="tab">Culture</a>
        </h5>

        <div class="container">
          <div class="row">
            <div class="col-12 diversity-contacts">
              <div class="culture-intro">
                <p>
                  <strong
                    >With over 1,000 attorneys and professionals practicing in
                    more than 100 practice areas, our Firm has a broad practice
                    platform, yet is personal enough to provide individual
                    client attention.</strong
                  >
                </p>

                <p>Hallmarks of our culture and values include:</p>

                <ul class="list-triangle">
                  <li>Unwavering client commitment</li>
                  <li>Seeking justice for those in need</li>
                  <li>Commitment to inclusive excellence</li>
                  <li>Improving lives in our communities</li>
                  <li>Thinking beyond the law</li>
                </ul>

                <p>&nbsp;</p>

                <div class="pre-content" contenteditable="false">
                  <details
                    class="content-expand-wrapper-ck"
                    data-bordered=""
                    data-collapse="true"
                    data-color=""
                    data-cssclass="content-expand-wrapper-ck"
                    data-hidesummary=""
                    data-maxheight=""
                    data-monospace=""
                    data-wrap="true"
                    undefined=""
                  >
                    <summary class="pre-title">
                      Historic Impact Litigation
                    </summary>

                    <div class="pre-content">
                      <p>
                        {{ $siteInfo.SITE_NAME }} has a legacy of taking on large-scale
                        litigation matters to promote the well-being of
                        disadvantaged classes of individuals.<br />
                        <br />
                        <strong
                          >Advocacy for Prisoners with Mental Health
                          Illnesses</strong
                        ><br />
                        The Firm represented Protection and Advocacy for People
                        with Disabilities and a class of inmates with mental
                        illnesses in a lawsuit against the SC Department&nbsp;of
                        Corrections.&nbsp;After 10 years of litigation and two
                        years of negotiations, a settlement was struck that
                        could end what Judge Michael Baxley called the
                        unconstitutional treatment of severely mentally ill
                        offenders in the prison facilities.<br />
                        <br />
                        <strong>Protecting the Rights of School Children</strong
                        ><br />
                        In Abbeville County School District v. State of South
                        Carolina, {{ $siteInfo.SITE_NAME }} represents a group of rural
                        school districts, students and taxpayers in a
                        groundbreaking lawsuit challenging the funding of public
                        schools and the adequacy of the overall education
                        system. The Supreme Court found the entire public
                        education system to be constitutionally
                        lacking.&nbsp;Since the decision, the South Carolina
                        legislature has been examining the court&rsquo;s opinion
                        in anticipation of passing remedial legislation.
                      </p>
                    </div>
                  </details>

                  <details
                    class="content-expand-wrapper-ck"
                    data-bordered=""
                    data-collapse="true"
                    data-color=""
                    data-cssclass="content-expand-wrapper-ck"
                    data-hidesummary=""
                    data-maxheight=""
                    data-monospace=""
                    data-wrap="true"
                    undefined=""
                  >
                    <summary class="pre-title">
                      Estate Planning for Those Who Serve and Those in Need
                    </summary>

                    <div class="pre-content">
                      <p>
                        {{ $siteInfo.SITE_NAME }} has proactively created and maintained
                        robust programs to provide simple wills and healthcare
                        directives free of charge to first responders who put
                        their lives on the line to serve and protect.<br />
                        <br />
                        <strong>Wills for Heroes</strong><br />
                        After the tragic events of September 11, 2001, the Firm
                        created the Wills For Heroes Program that provides free,
                        simple wills and medical directives to first
                        responders.&nbsp;Since the program&rsquo;s inception,
                        thousands of wills have been created for these
                        individuals that protect us daily in our communities in
                        Georgia, South Carolina and West Virginia. The Firm has
                        expanded its wills programs to include the creation of
                        the&nbsp;<strong
                          >Habitat for Humanity Wills Project </strong
                        >and the<strong> Zeb Alley Wills for Veterans</strong
                        >.&nbsp;Several attorneys assisted
                        Georgia&nbsp;Appleseed with the
                        <strong>Promised Land Project</strong> to provide simple
                        wills to low-income rural farmers.<br />
                        <br />
                        The Firm worked in partnership with Eli Lilly and
                        Company to help create and launch the Indianapolis Wills
                        for Heroes Program.
                      </p>
                    </div>
                  </details>

                  <details
                    class="content-expand-wrapper-ck"
                    data-bordered=""
                    data-collapse="true"
                    data-color=""
                    data-cssclass="content-expand-wrapper-ck"
                    data-hidesummary=""
                    data-maxheight=""
                    data-monospace=""
                    data-wrap="true"
                    open=""
                    undefined=""
                  >
                    <summary class="pre-title">
                      Pipeline Initiatives &amp; {{ $siteInfo.SITE_NAME }} Dick Riley
                      Scholarship Program
                    </summary>

                    <div class="pre-content">
                      <p>
                        The Firm sponsors and participates in several
                        recruitment initiatives.
                      </p>

                      <p>
                        <strong
                          >{{ $siteInfo.SITE_NAME }} Dick Riley Scholarship Program -</strong
                        >&nbsp;the merit-based program is open to all&nbsp;2L
                        law students. Factors considered include a wide array of
                        student backgrounds, characteristics, life experiences,
                        and perspectives that may be reflected in beliefs -
                        whether political, economic, social or philosophical.
                        Awardees will receive a $10,000 scholarship and a
                        salaried summer associate position at one of the
                        firm&rsquo;s offices. The selection process coincides
                        with {{ $siteInfo.SITE_NAME }}&rsquo; regular summer associate
                        recruiting process.
                      </p>

                      <p>
                        {{ $siteInfo.SITE_NAME }} partners with Claflin University (a HBCU in
                        Orangeburg, SC) for pre-law scholarships.
                      </p>

                      <p>
                        The
                        <strong>{{ $siteInfo.SITE_NAME }} M&amp;A Externship Program</strong>
                        provides 2L and 3L students from the University of
                        Georgia School of Law with work experience in mergers
                        and acquisitions for academic credit. During the fall
                        and spring semesters, externs work side by side with
                        Atlanta attorneys from {{ $siteInfo.SITE_NAME }}&rsquo; Corporate
                        Group to gain exposure to the entire M&amp;A process as
                        they become involved in a variety of matters related to
                        a transaction.&nbsp;
                      </p>

                      <p>
                        The firm participates in the
                        <strong
                          >Atlanta Bar Association&#39;s Minority &amp;
                          Diversity Clerkship Program</strong
                        >, which offers first-year students from Georgia&#39;s
                        law schools &mdash; Emory, Georgia State University,
                        John Marshall, Mercer and the University of Georgia
                        &mdash; opportunities to participate as clerks for the
                        summer with law firms and judges.
                      </p>

                      <p>
                        {{ $siteInfo.SITE_NAME }} holds a
                        <strong>Practical Skills Workshop</strong> in our
                        Columbia, S.C. office. Attendees included students from
                        the Black Students Association at University of South
                        Carolina School of Law and Charleston School of Law
                        along with in-house and outside attorneys to help
                        facilitate the event. The workshop was created to help
                        better equip the students to succeed in law school and
                        transition smoothly to the practice of law.
                      </p>

                      <p>
                        {{ $siteInfo.SITE_NAME }} participates in the
                        <strong>Southeastern Minority Job Fair (SEMJF)</strong>.
                        SEMJF provides legal employers throughout the United
                        States an opportunity to interview second- and
                        third-year law students, as well as recent graduates,
                        from over 50+ ABA-approved southeastern law schools,
                        including many of the country&rsquo;s top-tier law
                        schools.
                      </p>

                      <p>
                        Our firm participates in the National LGBTQ+ Bar
                        Association&rsquo;s annual Lavender
                        <strong>Law&reg; Career Fair.</strong>
                      </p>

                      <p>
                        {{ $siteInfo.SITE_NAME }} has a
                        <strong>Pipeline Outreach Program</strong> which is
                        aimed at undergraduate students and helping&nbsp;them
                        understand opportunities of a career in law.
                      </p>
                    </div>
                  </details>

                  <details
                    class="content-expand-wrapper-ck"
                    data-bordered=""
                    data-collapse="true"
                    data-color=""
                    data-cssclass="content-expand-wrapper-ck"
                    data-hidesummary=""
                    data-maxheight=""
                    data-monospace=""
                    data-wrap="true"
                    open=""
                    undefined=""
                  >
                    <summary class="pre-title">
                      Leadership Council on Legal Diversity
                    </summary>

                    <div class="pre-content">
                      <p>
                        {{ $siteInfo.SITE_NAME }} is a member of the Leadership Council on
                        Legal Diversity, an organization of more than 200
                        corporate chief legal officers and law firm managing
                        partners.&nbsp;We participate in the LCLD&#39;s Fellows
                        program and in LCLD&#39;s 1L Scholars Program.
                      </p>
                    </div>
                  </details>

                  <details
                    class="content-expand-wrapper-ck"
                    data-bordered=""
                    data-collapse="true"
                    data-color=""
                    data-cssclass="content-expand-wrapper-ck"
                    data-hidesummary=""
                    data-maxheight=""
                    data-monospace=""
                    data-wrap="true"
                    open=""
                    undefined=""
                  >
                    <summary class="pre-title">
                      Packages for Peacekeepers
                    </summary>

                    <div class="pre-content">
                      <p>
                        For over 20 years the firm has packed and sent over 300
                        &ldquo;{{ $siteInfo.SITE_NAME }} care packages&rdquo; to military
                        personnel overseas serving on the front lines of
                        defense.
                      </p>
                    </div>
                  </details>

                  <details
                    class="content-expand-wrapper-ck"
                    data-bordered=""
                    data-collapse="true"
                    data-color=""
                    data-cssclass="content-expand-wrapper-ck"
                    data-hidesummary=""
                    data-maxheight=""
                    data-monospace=""
                    data-wrap="true"
                    open=""
                    undefined=""
                  >
                    <summary class="pre-title">Homeless Issues</summary>

                    <div class="pre-content">
                      <p>
                        The firm has been very active in addressing homelessness
                        in the communities in which it serves. Among the
                        organizations we have supported include One80 Place
                        (Charleston), Crossroads Community Ministries Inc.
                        (Georgia), Family Promise of the Midlands (South
                        Carolina),&nbsp;New Directions (Myrtle Beach),
                        Transitions (Columbia), and the Salvation Army (South
                        Carolina). The firm has organized or served as a
                        consultant to the creation of homeless courts in
                        Columbia, Myrtle Beach, Florence and in Charleston.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              <!-- Contact records and initial slides are configured at the end of this file. -->
              <RightSideShortSlider
                title="PRO BONO CONTACTS"
                :contacts="proBonoContacts"
                :initial-index="1"
              />
              <RightSideShortSlider
                title="ENGAGEMENT AND OPPORTUNITY CONTACTS"
                :contacts="engagementContacts"
                :initial-index="2"
              />
              <RightSideShortSlider
                title="COMMUNITY SERVICE CONTACTS"
                :contacts="communityContacts"
              />
            </div>
          </div>
        </div>
        <!-- /container -->
      </div>

      <div class="card-header non-accordion">
        <h5 class="closed">
          <a class="nav-link" href="culture/culture_pro_bono.html" role="tab"
            >Pro Bono</a
          >
        </h5>
      </div>

      <div class="card-header non-accordion">
        <h5 class="closed">
          <a class="nav-link" href="/EngagementAndOpportunity" role="tab"
            >Engagement and Opportunity</a
          >
        </h5>
      </div>

      <div class="card-header non-accordion">
        <h5 class="closed">
          <a class="nav-link" href="/CommunityServices" role="tab"
            >Community Service</a
          >
        </h5>
      </div>
    </div>

    <Carousel />

    <!-- /main content -->
  </div>
</template>

<style scoped>
@media (max-width: 767px) {
  .legacy-page :deep(.container.desktop_only) {
    display: none !important;
  }
}
</style>

<script setup>
import Carousel from "@/components/Carousel.vue";
import RightSideShortSlider from "@/components/Right-side-short-slider.vue";
// import galleryImageCarousal from "../../components/gallery-image-carousal.vue";
import ProBonoGalleryCarousal from "../../components/Pro-bono-gallery-carousal.vue";
import youtubeVideoSection from "../../components/youtube-video-section.vue";
// import SingleImageCarousal from "../../components/Single-Image-carousal.vue";

// Edit these lists to change the contact details, images, or first slide.
const proBonoContacts = [
  {
    id: "emily-guerrero",
    name: "Emily Guerrero",
    title: "Pro Bono Coordinator",
    phone: "T 843.534.4102",
    photo: "/images/FCSluFnd4rD1mZVKMSlYbCYrqYf2gm67X5MSs4Pe.jpg",
  },
  {
    id: "elisa-smith-kodish",
    name: "Elisa Smith Kodish",
    title: "Pro Bono Partner",
    phone: "T 404.322.6160",
    photo: "/images/Lh812PsEnE9sofSZGILxaH7bABv8kCJB72qdJx6P.jpg",
  },
  {
    id: "katherine-lawler",
    name: "Katherine A. Lawler",
    title: "Partner",
    phone: "T 443.392.9405",
    photo: "/images/katherineAlawler.jpg",
  },
  {
    id: "norah-rogers",
    name: "Norah C. Rogers",
    title: "Pro Bono Manager",
    phone: "T 803.255.9546",
    photo: "/images/3159c8eb968d004fd09f64c7254b4e67.jpg",
  },
];

const communityContacts = [
  {
    id: "elisa-smith-kodish",
    name: "Elisa Smith Kodish",
    title: "Pro Bono Partner",
    phone: "T 404.322.6160",
    photo: "/images/Lh812PsEnE9sofSZGILxaH7bABv8kCJB72qdJx6P.jpg",
  },
];
</script>
