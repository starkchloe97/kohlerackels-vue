<template>
  <div class="legacy-page">
<!-- main content -->

            <!-- main content -->
            <div class="row featured-top desktop_background_banner">
                <div class="featured-background">
                    <img src="/images/professional-section-img.jpeg"
                        alt="Image of two individuals quickly walking down a spiral staircase" />
                </div>
                <div class="photo-gradient"></div>
                <div class="container featured-container">
                    <div class="row">
                        <div class="col-md-6 featured-content">
                            <h1 class="featured-section">Professionals</h1>
                            <h2 class="featured-title">A deep understanding of your vision</h2>
                            <div class="featured-details"><span></span>
                                <p><span class="text-head-blue">At {{ $siteInfo.SITE_NAME }}, we help advance our clients&rsquo;
                                        business goals through flexibility, business sense, and tireless advocacy based
                                        on a deep understanding of their business worlds.</span> &nbsp;</p>

                                <p>A team of more than 1,000 attorneys, policy advisors, e-discovery professionals and
                                    other business professionals with over 100 diversified practice areas, we work
                                    side-by-side with you towards shared goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /end of DESKTOP featured top -->

            <div class="row featured-top mobile_background_banner">
                <img src="/images/professional-section-img.jpeg"
                    alt="Image of two individuals quickly walking down a spiral staircase" />
                <div class="container featured-container">
                    <div class="row">
                        <div class="col-md-6 featured-content">
                            <h1 class="featured-section">Professionals</h1>
                            <h2 class="featured-title">A deep understanding of your vision</h2>
                            <div class="featured-details">
                                <p><span class="text-head-blue">At {{ $siteInfo.SITE_NAME }}, we help advance our clients&rsquo;
                                        business goals through flexibility, business sense, and tireless advocacy based
                                        on a deep understanding of their business worlds.</span> &nbsp;</p>

                                <p>A team of more than 1,000 attorneys, policy advisors, e-discovery professionals and
                                    other business professionals with over 100 diversified practice areas, we work
                                    side-by-side with you towards shared goals.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div><!-- /end of MOBILE featured top -->







            <div class="container">


                <div class="attorneys-grid">
                    <!-- Attorney 1: Alice Smith -->
                    <div class="attorney-card">
                        <img src="/images/alice-smith.avif"
                            alt="Alice Smith" class="attorney-img">
                        <div class="attorney-info">
                            <h3 class="attorney-name">Alice Smith</h3>
                            <p class="attorney-designation">Manager</p>

                            <div class="contact-info">
                                <div class="contact-item">
                                    <Phone class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">T 803.555.1001</span>
                                </div>
                                <div class="contact-item">
                                    <Printer class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">F 803.555.1002</span>
                                </div>
                                <div class="contact-item">
                                    <MapPin class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="location">Atlanta, GA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Attorney 2: Robert Johnson -->
                    <div class="attorney-card">
                        <img src="/images/robert.avif"
                            alt="Robert Johnson" class="attorney-img">
                        <div class="attorney-info">
                            <h3 class="attorney-name">Robert Johnson</h3>
                            <p class="attorney-designation">Senior Partner</p>

                            <div class="contact-info">
                                <div class="contact-item">
                                    <Phone class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">T 212.555.2300</span>
                                </div>
                                <div class="contact-item">
                                    <Printer class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">F 212.555.2301</span>
                                </div>
                                <div class="contact-item">
                                    <MapPin class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="location">New York, NY</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Attorney 3: Maria Garcia -->
                    <div class="attorney-card">
                        <img src="/images/maria.avif"
                            alt="Maria Garcia" class="attorney-img">
                        <div class="attorney-info">
                            <h3 class="attorney-name">Maria Garcia</h3>
                            <p class="attorney-designation">Corporate Counsel</p>

                            <div class="contact-info">
                                <div class="contact-item">
                                    <Phone class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">T 305.555.4500</span>
                                </div>
                                <div class="contact-item">
                                    <Printer class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">F 305.555.4501</span>
                                </div>
                                <div class="contact-item">
                                    <MapPin class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="location">Miami, FL</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Attorney 4: James Wilson -->
                    <div class="attorney-card">
                        <img src="/images/james.avif"
                            alt="James Wilson" class="attorney-img">
                        <div class="attorney-info">
                            <h3 class="attorney-name">James Wilson</h3>
                            <p class="attorney-designation">Litigation Attorney</p>

                            <div class="contact-info">
                                <div class="contact-item">
                                    <Phone class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">T 312.555.6700</span>
                                </div>
                                <div class="contact-item">
                                    <Printer class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">F 312.555.6701</span>
                                </div>
                                <div class="contact-item">
                                    <MapPin class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="location">Chicago, IL</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Attorney 5: Patricia Lee -->
                    <div class="attorney-card">
                        <img src="/images/patricia.avif"
                            alt="Patricia Lee" class="attorney-img">
                        <div class="attorney-info">
                            <h3 class="attorney-name">Patricia Lee</h3>
                            <p class="attorney-designation">Intellectual Property</p>

                            <div class="contact-info">
                                <div class="contact-item">
                                    <Phone class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">T 415.555.8900</span>
                                </div>
                                <div class="contact-item">
                                    <Printer class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">F 415.555.8901</span>
                                </div>
                                <div class="contact-item">
                                    <MapPin class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="location">San Francisco, CA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Attorney 6: Michael Brown -->
                    <div class="attorney-card">
                        <img src="/images/Michael.avif"
                            alt="Michael Brown" class="attorney-img">
                        <div class="attorney-info">
                            <h3 class="attorney-name">Michael Brown</h3>
                            <p class="attorney-designation">Tax Attorney</p>

                            <div class="contact-info">
                                <div class="contact-item">
                                    <Phone class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">T 202.555.3400</span>
                                </div>
                                <div class="contact-item">
                                    <Printer class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">F 202.555.3401</span>
                                </div>
                                <div class="contact-item">
                                    <MapPin class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="location">Washington, DC</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Attorney 7: Jennifer Davis -->
                    <div class="attorney-card">
                        <img src="/images/jennifer.avif"
                            alt="Jennifer Davis" class="attorney-img">
                        <div class="attorney-info">
                            <h3 class="attorney-name">Jennifer Davis</h3>
                            <p class="attorney-designation">Family Law</p>

                            <div class="contact-info">
                                <div class="contact-item">
                                    <Phone class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">T 713.555.5600</span>
                                </div>
                                <div class="contact-item">
                                    <Printer class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">F 713.555.5601</span>
                                </div>
                                <div class="contact-item">
                                    <MapPin class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="location">Houston, TX</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Attorney 8: William Miller -->
                    <div class="attorney-card">
                        <img src="/images/william.avif"
                            alt="William Miller" class="attorney-img">
                        <div class="attorney-info">
                            <h3 class="attorney-name">William Miller</h3>
                            <p class="attorney-designation">Real Estate Attorney</p>

                            <div class="contact-info">
                                <div class="contact-item">
                                    <Phone class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">T 602.555.7800</span>
                                </div>
                                <div class="contact-item">
                                    <Printer class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">F 602.555.7801</span>
                                </div>
                                <div class="contact-item">
                                    <MapPin class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="location">Phoenix, AZ</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Attorney 9: Linda Taylor -->
                    <div class="attorney-card">
                        <img src="/images/linda.avif"
                            alt="Linda Taylor" class="attorney-img">
                        <div class="attorney-info">
                            <h3 class="attorney-name">Linda Taylor</h3>
                            <p class="attorney-designation">Criminal Defense</p>

                            <div class="contact-info">
                                <div class="contact-item">
                                    <Phone class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">T 617.555.1200</span>
                                </div>
                                <div class="contact-item">
                                    <Printer class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">F 617.555.1201</span>
                                </div>
                                <div class="contact-item">
                                    <MapPin class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="location">Boston, MA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Attorney 10: David Anderson -->
                    <div class="attorney-card">
                        <img src="/images/david-anderson.avif"
                            alt="David Anderson" class="attorney-img">
                        <div class="attorney-info">
                            <h3 class="attorney-name">David Anderson</h3>
                            <p class="attorney-designation">Immigration Lawyer</p>

                            <div class="contact-info">
                                <div class="contact-item">
                                    <Phone class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">T 310.555.9900</span>
                                </div>
                                <div class="contact-item">
                                    <Printer class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="contact-text">F 310.555.9901</span>
                                </div>
                                <div class="contact-item">
                                    <MapPin class="contact-icon" :size="16" aria-hidden="true" />
                                    <span class="location">Los Angeles, CA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <Carousel />


            <!-- /main content -->

            <!-- /main content -->
  </div>
</template>

<style scoped>
.contact-icon {
    flex: 0 0 20px;
    margin-right: 10px;
    color: #000;
    transform: scale(.875);
}
</style>

<script setup>

import Carousel from '@/components/Carousel.vue';
import { MapPin, Phone, Printer } from '@lucide/vue'



</script>
