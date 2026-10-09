<template>

    <div class="row full-width-blue flush-top" ref="timelineRoot">
        <div class="container">
            <div class="row firm-tab-info mt-4 mt-md-0">
                <div class="col-12">
                    <h2 class="header mb-4">Long History. Lasting Legacy. Limitless Future.</h2>

                    <section class="timeline">
                        <ol>
                            <li>
                                <div><time>1897</time><b>The firm is founded by Patrick Henry Nelson, II</b> of Camden
                                    and Columbia, S.C.<br />
                                    Patrick Henry Nelson is succeeded at the firm by his son William Shannon Nelson and
                                    his grandson Patrick Henry Nelson, III.</div>
                            </li>
                            <li>
                                <div><time>1920</time><b>Edward Mullins, Sr.</b> joins the firm, continuing its
                                    expansion across the Southeast.</div>
                            </li>
                            <li>
                                <div><time>1938</time>The firm continues to grow and expand its practice.</div>
                            </li>
                            <li>
                                <div><time>1961</time>Ed Mullins, Jr. and Claude Scarborough join as partners,
                                    expanding the firm&rsquo;s leadership.</div>
                            </li>
                            <li>
                                <div><time>1964</time><b>Claude Scarborough becomes managing partner</b>, a position he
                                    will hold for 31 years.</div>
                            </li>
                            <li>
                                <div><time>1970</time>The firm begins planning for growth with the goal of adding
                                    attorneys and diversifying its practices. <b>The firm jumps to 18 attorneys in
                                        1978</b>.</div>
                            </li>
                            <li>
                                <div><time>1985</time><b>Ed Mullins, Jr.</b> is elected president of the Defense
                                    Research Institute. Firm attorneys who will later fill this prestigious national
                                    role are Steve Morrison, David Dukes, Marc Williams, and John Kuppens.</div>
                            </li>
                            <li>
                                <div><time>1987</time>After two terms as South Carolina governor, <b>Richard W. Riley
                                        and his father and brother join the firm</b>.</div>
                            </li>
                            <li>
                                <div><time>1990</time><b>The Pro Bono Committee is established</b>. Closing out its
                                    first year of existence in 1990, the committee proudly reports that the pro bono
                                    program has been &quot;smoothly integrated into not only the administration, but the
                                    ethic of the firm.&quot;</div>
                            </li>
                            <li>
                                <div><time>1992</time>The firm expands out of South Carolina with the opening of an
                                    office in <b>Atlanta</b>.</div>
                            </li>
                            <li>
                                <div><time>1999</time>Am Law begins publishing the &quot;Am Law Second Hundred&quot; and
                                    ranks the firm as the <b>178th largest law firm</b> based on 1998 gross revenues.
                                </div>
                            </li>
                            <li>
                                <div><time>2001</time><b>David Dukes becomes managing partner</b>. The firm has now
                                    grown to 250 attorneys in six offices located in <b>Columbia, Greenville, Myrtle
                                        Beach, Charleston, Atlanta,</b> and <b>Charlotte</b>.</div>
                            </li>
                            <li>
                                <div><time>2003</time>The firm expands in 2003 and 2004 with office openings in
                                    <b>Raleigh, Winston-Salem,</b> and <b>Washington D.C.</b></div>
                            </li>
                            <li>
                                <div><time>2006</time>The firm opens an office in <b>Boston</b>, which expands in 2010
                                    with the addition of intellectual property attorneys and technical specialists from
                                    Lahive &amp; Cockfield.</div>
                            </li>
                            <li>
                                <div><time>2008</time>By now, the firm has grown to 400 attorneys in 10 offices.
                                    <b>EducationCounsel</b>, a mission-based education consulting firm designed to drive
                                    significant improvements in the U.S. education system, becomes a wholly owned
                                    subsidiary.</div>
                            </li>
                            <li>
                                <div><time>2011</time>The firm launches <b>Encompass</b>, an e-discovery business unit
                                    that is now one of the largest practices of its kind in the nation.</div>
                            </li>
                            <li>
                                <div><time>2012</time><b>Jim Lehman</b>, after serving as operations partner, is elected
                                    <b>managing partner of the firm</b>.</div>
                            </li>
                            <li>
                                <div><time>2017</time>In 2016 and 2017, the firm opens offices in <b>Denver</b> and
                                    <b>Los Angeles</b> as an expansion of its national automotive defense practice. Now
                                    with 575+ lawyers, the firm enters the Am Law 100 for the first time, debuting at
                                    No. 88.</div>
                            </li>
                            <li>
                                <div><time>2018</time>A year for significant expansion, the firm opens in
                                    <b>Baltimore</b> to cement its presence in the Mid-Atlantic and <b>combines with
                                        Broad and Cassel</b> to grow its <b>Florida</b> presence, adding more than 160
                                    attorneys.</div>
                            </li>
                            <li>
                                <div><time>2022</time><b>The firm celebrates 125 years</b> of service to clients,
                                    communities, and the profession.</div>
                            </li>
                            <li>
                                <div><time>2023</time>The firm expands into <b>Pittsburgh</b> and <b>Chicago</b> with
                                    two new offices and 16 attorneys while also bolstering its presence in Cleveland
                                    with the addition of three partners.</div>
                            </li>
                            <li>
                                <div><time>2024</time>Ten new litigation and corporate attorneys join {{ $siteInfo.SITE_NAME }} in
                                    Texas as the firm opens its first office in <b>Houston</b>.</div>
                            </li>
                            <li>&nbsp;</li>
                        </ol>
                    </section>
                </div>

            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'

// Template ref (matches ref="timelineRoot" on the outer div)
const timelineRoot = ref(null)

let section = null // <section class="timeline"> (this is the horizontal scroller)
let dragging = false
let startX = 0
let startScroll = 0
let savedStyles = {}
let resizeTimer = null
let cleanups = []

// ---------- Card sizing ----------
// Cards are absolutely positioned above/below the line, so the list needs to
// know the tallest card. We measure it and publish it as CSS variables; the
// stylesheet uses them for the card height (all equal) and the list padding.
function setEqualHeights() {
    if (!section) return

    section.style.setProperty('--card-h', 'auto')

    let max = 0
    section.querySelectorAll('ol li > div').forEach((card) => {
        max = Math.max(max, card.offsetHeight)
    })
    if (!max) return

    section.style.setProperty('--card-h', `${max}px`)
    section.style.setProperty('--card-h-px', `${max}px`)
}

function onResize() {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(setEqualHeights, 120)
}

// ---------- Helpers ----------
// Distance between two neighbouring events (used for arrow keys)
function getPitch() {
    const items = section.querySelectorAll('li')
    if (items.length > 1) {
        const pitch = items[1].offsetLeft - items[0].offsetLeft
        if (pitch > 0) return pitch
    }
    return section.clientWidth * 0.5
}

const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

// ---------- Mouse drag (touch & trackpad already scroll natively) ----------
function onPointerDown(e) {
    if (e.pointerType !== 'mouse' || e.button !== 0) return
    if (section.scrollWidth <= section.clientWidth) return

    // Don't hijack clicks on the native scrollbar itself
    const r = section.getBoundingClientRect()
    if (e.clientY - r.top > section.clientHeight || e.clientX - r.left > section.clientWidth) return

    dragging = true
    startX = e.clientX
    startScroll = section.scrollLeft

    // Temporarily disable anything that would fight the drag
    savedStyles = {
        scrollBehavior: section.style.scrollBehavior,
        userSelect: section.style.userSelect,
    }
    section.style.scrollBehavior = 'auto'
    section.style.userSelect = 'none'
    section.style.cursor = 'grabbing'
    section.setPointerCapture(e.pointerId)
}

function onPointerMove(e) {
    if (!dragging) return
    section.scrollLeft = startScroll - (e.clientX - startX)
}

function endDrag(e) {
    if (!dragging) return
    dragging = false
    section.style.scrollBehavior = savedStyles.scrollBehavior || ''
    section.style.userSelect = savedStyles.userSelect || ''
    section.style.cursor = 'grab'
    if (section.hasPointerCapture?.(e.pointerId)) section.releasePointerCapture(e.pointerId)
}

// ---------- Keyboard ----------
function onKeydown(e) {
    const behavior = prefersReducedMotion() ? 'auto' : 'smooth'

    switch (e.key) {
        case 'ArrowRight':
            e.preventDefault()
            section.scrollBy({ left: getPitch(), behavior })
            break
        case 'ArrowLeft':
            e.preventDefault()
            section.scrollBy({ left: -getPitch(), behavior })
            break
        case 'Home':
            e.preventDefault()
            section.scrollTo({ left: 0, behavior })
            break
        case 'End':
            e.preventDefault()
            section.scrollTo({ left: section.scrollWidth, behavior })
            break
    }
}

// ---------- Lifecycle ----------
function on(target, type, handler) {
    target.addEventListener(type, handler)
    cleanups.push(() => target.removeEventListener(type, handler))
}

onMounted(() => {
    section = timelineRoot.value?.querySelector('.timeline')
    if (!section) return

    // Accessibility: make the scroller reachable and announced
    section.setAttribute('tabindex', '0')
    section.setAttribute('role', 'region')
    section.setAttribute('aria-label', 'Firm history timeline')
    section.style.cursor = 'grab'

    on(section, 'pointerdown', onPointerDown)
    on(section, 'pointermove', onPointerMove)
    on(section, 'pointerup', endDrag)
    on(section, 'pointercancel', endDrag)
    on(section, 'keydown', onKeydown)
    on(window, 'resize', onResize)

    // Measure once painted, again when web fonts finish loading
    nextTick(setEqualHeights)
    document.fonts?.ready.then(setEqualHeights)
})

onBeforeUnmount(() => {
    clearTimeout(resizeTimer)
    cleanups.forEach((fn) => fn())
    cleanups = []
})
</script>


<style scoped>
/* ------------------------------------------------------------------
   Timeline slider
   Everything is driven by the variables below, so spacing, colours and
   breakpoints can be tuned in one place.
   ------------------------------------------------------------------ */
.full-width-blue .timeline {
    /* Colours */
    --tl-accent: #365a8a;
    --tl-card: #ffffff;
    --tl-line: #ffffff;
    --tl-text: #333333;
    --tl-text-strong: #222222;
    --tl-sb-track: #b4b2b7;

    /* Geometry */
    --tl-card-w: 350px;
    --tl-pitch: 217.5px;   /* distance between two dots */
    --tl-lead: 212px;      /* empty space before the first dot */
    --tl-dot: 22px;
    --tl-line-h: 5px;
    --tl-gap: 21px;        /* line -> card */
    --tl-space: 32px;      /* card -> edge of the scroller */
    --tl-radius: 16px;
    --tl-tail: 10px;
    --tl-sb: 20px;         /* scrollbar height */
    --tl-fade-l: 80px;
    --tl-fade-r: 100px;

    /* Type */
    --tl-fs: 18px;
    --tl-lh: 30px;
    --tl-year-fs: 28px;
    --tl-year-lh: 34px;
    --tl-pad: 24px 20px 20px;

    /* Set by the script after measuring the tallest card */
    --card-h-px: 331px;

    position: relative;
    display: block;
    margin: 0;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    /* Soft fade at both ends of the strip; the scrollbar stays solid */
    -webkit-mask-image:
        linear-gradient(to right, transparent 0, #000 var(--tl-fade-l), #000 calc(100% - var(--tl-fade-r)), transparent 100%),
        linear-gradient(#000, #000);
    mask-image:
        linear-gradient(to right, transparent 0, #000 var(--tl-fade-l), #000 calc(100% - var(--tl-fade-r)), transparent 100%),
        linear-gradient(#000, #000);
    -webkit-mask-size: 100% calc(100% - var(--tl-sb)), 100% var(--tl-sb);
    mask-size: 100% calc(100% - var(--tl-sb)), 100% var(--tl-sb);
    -webkit-mask-position: 0 0, 0 100%;
    mask-position: 0 0, 0 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
}

.full-width-blue .timeline:focus-visible {
    outline: 2px solid var(--tl-accent);
    outline-offset: -2px;
}

/* ---------- Strip + horizontal line ---------- */
.full-width-blue .timeline ol {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    width: max-content;
    margin: 0;
    padding: calc(var(--card-h-px) + var(--tl-gap) + var(--tl-space)) 0;
    padding-left: var(--tl-lead);
    list-style: none;
    background: linear-gradient(var(--tl-line), var(--tl-line)) 0 50% / 100% var(--tl-line-h) no-repeat;
}

.full-width-blue .timeline ol li {
    position: relative;
    flex: 0 0 var(--tl-pitch);
    height: var(--tl-line-h);
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Dot on the line */
.full-width-blue .timeline ol li::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 2;
    width: var(--tl-dot);
    height: var(--tl-dot);
    border-radius: 50%;
    background: var(--tl-accent);
    transform: translate(-50%, -50%);
}

/* The empty last item just gives the line room to run out */
.full-width-blue .timeline ol li:last-child {
    flex-basis: 280px;
    font-size: 0;
    line-height: 0;
}

.full-width-blue .timeline ol li:last-child::before {
    display: none;
}

/* ---------- Cards ---------- */
.full-width-blue .timeline ol li > div {
    position: absolute;
    left: -3px;
    box-sizing: border-box;
    width: var(--tl-card-w);
    height: var(--card-h, auto);
    padding: var(--tl-pad);
    border-radius: var(--tl-radius);
    background: var(--tl-card);
    color: var(--tl-text);
    font-size: var(--tl-fs);
    font-weight: 400;
    line-height: var(--tl-lh);
    text-align: left;
    white-space: normal;
}

/* Odd events sit above the line, even events below it */
.full-width-blue .timeline ol li:nth-child(odd) > div {
    bottom: calc(100% + var(--tl-gap));
    border-bottom-left-radius: 0;
}

.full-width-blue .timeline ol li:nth-child(even) > div {
    top: calc(100% + var(--tl-gap));
    border-top-left-radius: 0;
}

/* Little pointer toward the dot */
.full-width-blue .timeline ol li > div::before {
    content: '';
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
}

.full-width-blue .timeline ol li:nth-child(odd) > div::before {
    top: 100%;
    border-width: var(--tl-tail) var(--tl-tail) 0 0;
    border-color: var(--tl-card) transparent transparent transparent;
}

.full-width-blue .timeline ol li:nth-child(even) > div::before {
    bottom: 100%;
    border-width: 0 var(--tl-tail) var(--tl-tail) 0;
    border-color: transparent transparent var(--tl-card) transparent;
}

/* Year + text */
.full-width-blue .timeline ol li > div time {
    display: block;
    margin-bottom: 12px;
    color: var(--tl-accent);
    font-size: var(--tl-year-fs);
    font-weight: 600;
    line-height: var(--tl-year-lh);
}

.full-width-blue .timeline ol li > div b {
    color: var(--tl-text-strong);
    font-weight: 700;
}

/* ---------- Scrollbar (Chrome, Edge, Safari) ---------- */
.full-width-blue .timeline::-webkit-scrollbar {
    height: var(--tl-sb);
}

.full-width-blue .timeline::-webkit-scrollbar-track {
    background: var(--tl-sb-track);
}

.full-width-blue .timeline::-webkit-scrollbar-thumb {
    border: 5px solid transparent;
    border-radius: 10px;
    background: var(--tl-accent);
    background-clip: padding-box;
}

.full-width-blue .timeline::-webkit-scrollbar-button:single-button {
    display: block;
    width: 17px;
    height: var(--tl-sb);
    background-color: var(--tl-sb-track);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 9px 9px;
}

.full-width-blue .timeline::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M8 1v8L2 5z' fill='%23365a8a'/%3E%3C/svg%3E");
}

.full-width-blue .timeline::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M2 1v8l6-4z' fill='%23365a8a'/%3E%3C/svg%3E");
}

/* Firefox (scrollbar-color would disable the rules above in Chrome, so it is scoped) */
@supports (-moz-appearance: none) {
    .full-width-blue .timeline {
        scrollbar-color: var(--tl-accent) var(--tl-sb-track);
    }
}

/* ---------- Responsive ---------- */
@media (max-width: 991.98px) {
    .full-width-blue .timeline {
        --tl-card-w: 300px;
        --tl-pitch: 190px;
        --tl-lead: 120px;
        --tl-fade-l: 50px;
        --tl-fade-r: 70px;
    }
}

@media (max-width: 575.98px) {
    .full-width-blue .timeline {
        --tl-card-w: 260px;
        --tl-pitch: 160px;
        --tl-lead: 36px;
        --tl-dot: 18px;
        --tl-gap: 18px;
        --tl-space: 20px;
        --tl-radius: 14px;
        --tl-tail: 8px;
        --tl-fs: 16px;
        --tl-lh: 26px;
        --tl-year-fs: 24px;
        --tl-year-lh: 30px;
        --tl-pad: 20px 16px 16px;
        --tl-fade-l: 24px;
        --tl-fade-r: 40px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .full-width-blue .timeline {
        scroll-behavior: auto;
    }
}
</style>