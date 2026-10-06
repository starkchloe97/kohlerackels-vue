<template>

    <div class="history-page">

        <div class="row featured-top desktop_background_banner">
            <div class="featured-background firm">
                <img src="/images/firm-history.jpg" alt="" />
            </div>
            <div class="photo-gradient"></div>
            <div class="container featured-container">
                <div class="row">
                    <div class="col-md-6 featured-content">
                        <h1 class="featured-section">History</h1>
                        <h2 class="featured-title">Our place in time, our contributions to history</h2>
                        <div class="featured-details">
                            <p>
                                Throughout our storied history, we have engaged in and embraced our changing society and
                                have participated in some of the more significant events that have improved our
                                communities.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="container featured-tabs">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/firm">Overview</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/locations">Locations</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="firm/history.html">History</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/culture">Culture</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/careers">Careers</a>
                    </li>
                </ul>
            </div>
        </div><!-- /end of DESKTOP featured top -->

        <slider />

        <CarouselTwo />

    </div>

</template>

<script setup>

    import slider from '../components/slider.vue';
    import CarouselTwo from '../components/Carousel-two.vue';

</script>