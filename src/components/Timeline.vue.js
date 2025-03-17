import image2008 from '@/assets/AydinBaby.jpg';
import image2009 from '@/assets/SeizureClipart.jpg';
import image2010 from '@/assets/Aydin2010.jpg';
import image2014 from '@/assets/Aydin2014.jpg';
import image2017 from '@/assets/AydinDilaraCarionFenn.jpg';
import image2018 from '@/assets/AydinMelRogers.jpg';
import image2019 from '@/assets/AydinEEG.jpg';
import image2023 from '@/assets/Aydin2023.jpg';
import image2024 from '@/assets/AydinVNS.jpg';
const events = [
    { date: '2008', title: 'Aydin is Born', description: 'Aydin Leamen was born a healthy baby boy.', image: image2008 },
    { date: '2009', title: 'First Seizure', description: 'Aydin had his first seizure at 18 months old.', image: image2009 },
    { date: '2010', title: 'Epilepsy Diagnosis', description: 'Aydin was diagnosed with epilepsy at 2 years old.', image: image2010 },
    { date: '2014', title: 'First Overnight @ SickKids', description: 'Aydin had his first overnight EEG at The Hospital for Sick Children.', image: image2014 },
    { date: '2017', title: 'Rare Disease Expo', description: 'Dilara and Aydin spoke at the Carion Fenn Rare Disease Expo to talk about epilepsy and mental health.', image: image2017 },
    { date: '2018', title: "Health 180 with Carion Fenn", description: 'Aydin and Melike were featured on Health 180 on ROGERStv.', image: image2018 },
    { date: '2019', title: 'Stereo EEG Surgery', description: 'Aydin underwent invasive Stereo EEG surgery to locate seizure focus for possible resection.', image: image2019 },
    { date: '2023', title: 'Diagnosed with LGS & ADHD', description: 'Aydin was diagnosed with Lennox-Gastaut Syndrome and ADHD, requiring new treatment strategies.', image: image2023 },
    { date: '2024', title: 'VNS Implant Surgery', description: 'Aydin received a Vagus Nerve Stimulator to help manage seizures.', image: image2024 },
];
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['timeline-item', 'timeline-item',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("timeline-container") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("timeline") },
    });
    for (const [event, index] of __VLS_getVForSourceType((__VLS_ctx.events))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((event.date)),
            ...{ class: ((['timeline-item', { 'left': index % 2 === 0, 'right': index % 2 !== 0 }])) },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("timeline-content") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("timeline-date") },
        });
        (event.date);
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (event.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (event.description);
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((event.image)),
            alt: ("Event Image"),
            ...{ class: ("timeline-image") },
        });
    }
    ['timeline-container', 'timeline', 'timeline-item', 'left', 'right', 'timeline-content', 'timeline-date', 'timeline-image',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            events: events,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
