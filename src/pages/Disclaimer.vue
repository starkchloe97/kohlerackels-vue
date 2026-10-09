<template>
  <div class="legacy-page">
    <main class="container contact-wrapper">
      <div class="row">
        <div class="col-md-12 interior-title">
          <h1>Disclaimer</h1>
        </div>
      </div>

      <div class="row interior-content">
        <div class="col-md-8">
          <p>
            The materials on this website have been prepared by Kohlerackels Riley &amp; Scarborough LLP for
            informational purposes only and are not legal advice. This information is not intended to create, and
            receipt of it does not constitute, an attorney-client relationship. Internet subscribers and online readers
            should not act upon this information without retaining professional counsel. Do not send us information
            until you speak with one of our lawyers and get authorization to send that information to us. No
            attorney-client relationship is created unless and until there is a written and signed engagement letter
            between you and the Firm.
          </p>

          <p>
            Some sections of this website describe legal matters handled in the past by Kohlerackels. The results for
            these matters depended upon a variety of factors, each unique to its own situation. Any result a lawyer or
            a law firm may achieve on behalf of one client in one matter does not guarantee or predict similar results
            can be obtained for other clients.
          </p>

          <p>
            To the extent state bar rules require designation of a principal office and/or a single lawyer responsible
            for this website, Kohlerackels designates its office in Columbia, South Carolina, USA (Meridian, 17th
            Floor, 1320 Main Street Columbia, SC 29201), as its principal office and designates James C. Gray, Jr. as
            the lawyer responsible for this website.
          </p>

          <p>
            <strong>No Advertisement:</strong> This website and the information contained herein are not intended to
            be an advertisement or solicitation of business, but it may be considered an advertisement in some
            jurisdictions.
          </p>

          <p>
            <strong>Third Party Website Links:</strong> This website may include links to other Internet sites that
            are beyond the control of Kohlerackels. Kohlerackels is not responsible for the content of any such sites,
            makes no representations regarding any such sites, cannot guarantee their practices regarding data
            privacy, and does not necessarily endorse or approve of the information, material, products, or services
            contained on or accessible through any such sites.
          </p>

          <p>
            <strong>Photography:</strong> Photographs depicting featured or sponsored events may contain pictures of
            individuals who are not lawyers or who are not employed by Kohlerackels.
          </p>

          <p>
            <strong>Website Content:</strong> Kohlerackels makes no guarantees that content of the website will be
            without errors, timely, free of viruses or other harmful elements, or that defects will be corrected.
            Kohlerackels does not make any representations, express or implied, with respect to the timeliness,
            accuracy, or completeness of any of the contents of this website, and expressly disclaims any liability or
            warranties, express or implied, including, without limitation, any implied warranties of merchantability,
            fitness for a particular purpose, or non-infringement.
          </p>
        </div>

        <div class="col-md-4 sidebar">
          <div class="aside-general-counsel">
            <h4 class="contact-sidebar-title">Corporate Information</h4>
            <h5>Kohlerackels Riley &amp; Scarborough LLP</h5>
            <p>
              Meridian<br />
              1320 Main Street, 17th Floor<br />
              Columbia, SC 29201
            </p>
            <p>
              T <a href="tel:18002372000">1.800.237.2000</a>
            </p>

            <div class="aside-spacer"></div>

            <h4 class="contact-sidebar-title">General Counsel</h4>
            <h5>Daniel S. Sanders, Jr.</h5>
            <address>
              Atlantic Station<br />
              201 17th Street NW, Suite 1700<br />
              Atlanta, GA 30363
            </address>
            <div class="sidebar-email-icon hidden-print">
              <a class="email_btn" href="#" :data-email="'dan.sanders@' + $siteInfo.SITE_EMAIL_DOMAIN">
                <img src="/images/detail-email-lighter.png" alt="Email Daniel S. Sanders, Jr." />
              </a>
            </div>
            <div class="visible-print-block">{{ 'dan.sanders@' + $siteInfo.SITE_EMAIL_DOMAIN }}</div>
            <p>T <a href="tel:8643732272">864.373.2272</a></p>
          </div>
        </div>
      </div>
    </main>

    <Carousel />
  </div>
</template>

<style scoped>

	.row {
        margin-right: -15px;
        margin-left: -15px;
        gap: 0px;
    }

</style>

<script setup>
import Carousel from '@/components/Carousel.vue'
</script>
