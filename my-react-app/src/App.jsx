
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-tertiary-fixed-dim selection:text-on-tertiary-fixed">

{/* TopAppBar */}
<nav className="sticky top-0 w-full z-50 bg-[#F3EBDD]/80 dark:bg-slate-900/80 backdrop-blur-md shadow-xl shadow-[#1E1E1B]/5 transition-all duration-300">
<div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
<a className="text-2xl font-black text-[#184D38] dark:text-emerald-500 tracking-tighter font-headline" href="#">GSIF</a>
<div className="hidden md:flex items-center gap-8">
<a className="font-headline font-bold tracking-tight text-lg text-[#184D38] dark:text-emerald-400 border-b-2 border-[#C08A3E] pb-1" href="#">Home</a>
<a className="font-headline font-bold tracking-tight text-lg text-[#1E1E1B] dark:text-slate-300 hover:text-[#184D38] transition-colors" href="#">SAS</a>
<a className="font-headline font-bold tracking-tight text-lg text-[#1E1E1B] dark:text-slate-300 hover:text-[#184D38] transition-colors" href="#">About Us</a>
<a className="font-headline font-bold tracking-tight text-lg text-[#1E1E1B] dark:text-slate-300 hover:text-[#184D38] transition-colors" href="#">Certification</a>
<a className="font-headline font-bold tracking-tight text-lg text-[#1E1E1B] dark:text-slate-300 hover:text-[#184D38] transition-colors" href="#">Document Center</a>
<a className="font-headline font-bold tracking-tight text-lg text-[#1E1E1B] dark:text-slate-300 hover:text-[#184D38] transition-colors" href="#">Research Network</a>
</div>
<button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold hover:bg-primary-container transition-all active:scale-[0.98]">
                Get Certified
            </button>
</div>
</nav>
{/* Hero Section */}
<header className="relative min-h-[921px] flex items-center justify-start overflow-hidden pt-20">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" data-alt="cinematic wide angle shot of rolling agricultural hills with vibrant green crops under a soft golden morning sun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARj2j3kGEDlxNPzkhs193nu_3ZGW1656YNLOtPfaggSPleGuZJzFpux2Ri2U3L-SLiI0-Y0_Ef50qGPuZtndtCDifEJzU3_woEIDrBPvLsSY7tiauJOIVWkeaRQmoBOsvOXQ6BMBFCvnmzHKcdlss1en33deBu-UMqXzmb_Gq08xZMyNk1Fz9FJ_Qg8sqamvkjwRH_NgS8cuNaCrq5nYCeVIstMVV-8RFGYG21bx9t5OBbpKjEgrbinwUajsAZP53Wyixx7qSMZ_tD"/>
<div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
<div className="max-w-3xl">
<span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[0.7rem] font-bold uppercase tracking-widest mb-6 rounded-sm">Leading Global Standards</span>
<h1 className="font-headline text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                    Defining credible standards for a <span className="text-tertiary-fixed-dim">more sustainable future.</span>
</h1>
<p className="text-lg md:text-xl text-surface-container-lowest leading-relaxed mb-10 opacity-90 font-light max-w-2xl">
                    GSIF establishes thoughtful, future-ready standards that support responsible practices, institutional trust, and long-term sustainability.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-tertiary-fixed-dim text-on-tertiary-fixed px-8 py-4 font-bold text-lg rounded hover:bg-tertiary-container hover:text-white transition-all shadow-lg">Explore Standards</button>
<button className="border border-white/30 text-white backdrop-blur-md px-8 py-4 font-bold text-lg rounded hover:bg-white/10 transition-all">Get Certified</button>
</div>
</div>
</div>
</header>
{/* Section 2: Introduction */}
<section className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
<div className="md:col-span-5">
<label className="block text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4">GSIF Philosophy</label>
<h2 className="font-headline text-4xl font-bold text-on-surface leading-tight tracking-tight mb-8">The authority on institutional sustainability.</h2>
</div>
<div className="md:col-span-7">
<blockquote className="border-l-4 border-tertiary-fixed-dim pl-8 mb-8">
<p className="text-2xl md:text-3xl font-light italic leading-snug text-on-surface-variant">
                            "In a world asking for transparency, accountability, and measurable responsibility, GSIF provides the structure that makes sustainability more credible."
                        </p>
</blockquote>
<p className="text-on-surface-variant leading-relaxed text-lg">
                        GSIF sits at the intersection of rigorous research and practical application. We empower institutions to move beyond surface-level commitments into a framework of audited, verifiable impact. Our role is to provide the architectural backbone for the global transition toward restorative economic practices.
                    </p>
</div>
</div>
</div>
</section>
{/* Section 3: Why GSIF Matters */}
<section className="py-32 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-8">
<div className="mb-20 text-center">
<h2 className="font-headline text-4xl font-black tracking-tight text-primary">Why credible standards matter now.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Card 1 */}
<div className="bg-surface-container-lowest p-10 rounded-xl transition-all hover:-translate-y-2 duration-300">
<div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded mb-8">
<span className="material-symbols-outlined text-primary" data-icon="account_balance">account_balance</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4 text-primary">From intention to structure</h3>
<p className="text-on-surface-variant leading-relaxed">Good intentions lack scale. We provide the concrete frameworks that turn vague sustainability goals into repeatable, industrial processes.</p>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest p-10 rounded-xl transition-all hover:-translate-y-2 duration-300">
<div className="w-12 h-12 bg-tertiary-fixed flex items-center justify-center rounded mb-8">
<span className="material-symbols-outlined text-tertiary" data-icon="verified">verified</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4 text-primary">From claims to credibility</h3>
<p className="text-on-surface-variant leading-relaxed">In an era of greenwashing, GSIF certification acts as a beacon of truth, backed by rigorous third-party verification and data integrity.</p>
</div>
{/* Card 3 */}
<div className="bg-surface-container-lowest p-10 rounded-xl transition-all hover:-translate-y-2 duration-300">
<div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded mb-8">
<span className="material-symbols-outlined text-primary" data-icon="hub">hub</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4 text-primary">From isolated efforts to shared systems</h3>
<p className="text-on-surface-variant leading-relaxed">Sustainability is a collective challenge. Our standards ensure that every organization speaks the same language of impact.</p>
</div>
</div>
</div>
</section>
{/* Section 4: GSIF Ecosystem */}
<section className="py-32 bg-surface overflow-hidden">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
<div className="relative group h-[500px] bg-primary rounded-2xl overflow-hidden flex flex-col justify-end p-12">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" data-alt="top-down artistic view of agricultural patterns and lines in the earth with deep green and brown tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSqzcdYclXVMIhooMMeL_o9BhUHwPNTApjigAJIIypYXqbpJeZ8aPqF85IWQ1TaQSLNagWjrTHxNoGmOiSPesEW4dSjy6wAZF-z5j2VAiwFVOJeFRsWIfVEj0F4SFRdLywLd3TJOnAdw0J1J0bcWWuLtiFz7rKvbqN-m-P7gUpcQ174iDVQ8dfEtt1WM0S63v5pkAMTcp9QEJB8pracavSwzR1jpJpj3oHn931IkDD-WkTYyU37ssHwOjZ0-A27kKeZwI2WP8lKnBp"/>
<div className="relative z-10">
<h3 className="font-headline text-4xl font-bold text-white mb-4">SAS Framework</h3>
<p className="text-on-primary-container text-lg max-w-md mb-8">The Sustainable Agriculture Standard (SAS) defines the baseline for ethical land stewardship and resource management.</p>
<a className="inline-flex items-center text-tertiary-fixed-dim font-bold gap-2 hover:gap-4 transition-all" href="#">
                            Learn more <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
</div>
<div className="relative group h-[500px] bg-surface-container-highest rounded-2xl overflow-hidden flex flex-col justify-end p-12">
<img className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" data-alt="modern glass library or research center with natural lighting and people collaborating in the distance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwBOMzFOSvFbamRSGIs8In0WW6nkWE0dX2vNVk3Ch17rugUNt7UjmwxmnCRK9CQ9fKOOuC97Bi1l0NlLHT6SibPM92iwKNdZMha8iHdNIeheAVxiDydif8mW-YUO7VG5_A3qz6dRNiI1ZgL-nOcJVNXjTrRd7FcgmjKnNfcgPGy2fD-mji1tpz9HQcC7gZvoHAIgzAXrVLz9BWoDl7uvvaUFhH2ghpei1CzN6k0SocfdmCWFisePIaohxkzdTe1hDxyJ-7i9Y95Bx7"/>
<div className="relative z-10">
<h3 className="font-headline text-4xl font-bold text-primary mb-4">Research Network</h3>
<p className="text-on-surface-variant text-lg max-w-md mb-8">Connecting leading academics with industry practitioners to iterate on the next generation of impact metrics.</p>
<a className="inline-flex items-center text-primary font-bold gap-2 hover:gap-4 transition-all" href="#">
                            Join the network <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/* Section 5: SAS Framework Preview */}
<section className="py-32 bg-surface-container-lowest">
<div className="max-w-7xl mx-auto px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="font-headline text-4xl md:text-5xl font-black text-primary mb-6">SAS: a structured foundation for sustainable practice.</h2>
<p className="text-on-surface-variant text-lg">Our framework is built on three immutable pillars that ensure balance between the planet, its people, and our collective prosperity.</p>
</div>
<button className="border-b-2 border-primary font-bold text-primary py-2 hover:text-tertiary transition-colors">Download SAS 2024 Core</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/30">
<div className="bg-surface-container-lowest py-16 pr-12">
<span className="text-4xl font-headline font-black text-primary/10 mb-8 block">01</span>
<h4 className="font-headline text-2xl font-bold text-primary mb-6">Environmental Integrity</h4>
<ul className="space-y-4 text-on-surface-variant">
<li className="flex items-start gap-3"><span className="material-symbols-outlined text-sm mt-1">check_circle</span> Biodiversity conservation</li>
<li className="flex items-start gap-3"><span className="material-symbols-outlined text-sm mt-1">check_circle</span> Soil health restoration</li>
<li className="flex items-start gap-3"><span className="material-symbols-outlined text-sm mt-1">check_circle</span> Water management systems</li>
</ul>
</div>
<div className="bg-surface-container-lowest py-16 px-12">
<span className="text-4xl font-headline font-black text-primary/10 mb-8 block">02</span>
<h4 className="font-headline text-2xl font-bold text-primary mb-6">Social Responsibility</h4>
<ul className="space-y-4 text-on-surface-variant">
<li className="flex items-start gap-3"><span className="material-symbols-outlined text-sm mt-1">check_circle</span> Fair labor practices</li>
<li className="flex items-start gap-3"><span className="material-symbols-outlined text-sm mt-1">check_circle</span> Community empowerment</li>
<li className="flex items-start gap-3"><span className="material-symbols-outlined text-sm mt-1">check_circle</span> Supply chain safety</li>
</ul>
</div>
<div className="bg-surface-container-lowest py-16 pl-12">
<span className="text-4xl font-headline font-black text-primary/10 mb-8 block">03</span>
<h4 className="font-headline text-2xl font-bold text-primary mb-6">Economic Sustainability</h4>
<ul className="space-y-4 text-on-surface-variant">
<li className="flex items-start gap-3"><span className="material-symbols-outlined text-sm mt-1">check_circle</span> Long-term viability</li>
<li className="flex items-start gap-3"><span className="material-symbols-outlined text-sm mt-1">check_circle</span> Transparent governance</li>
<li className="flex items-start gap-3"><span className="material-symbols-outlined text-sm mt-1">check_circle</span> Risk mitigation standards</li>
</ul>
</div>
</div>
</div>
</section>
{/* Section 6: Certification Preview */}
<section className="py-32 bg-primary overflow-hidden">
<div className="max-w-7xl mx-auto px-8 relative">
<div className="mb-24 text-center max-w-2xl mx-auto">
<h2 className="font-headline text-4xl font-bold text-white mb-6">Certification that strengthens trust.</h2>
<p className="text-on-primary-container text-lg">A clear path toward institutional excellence, designed for leaders who value verifiable progress over marketing claims.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
{/* Connectors */}
<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>
{/* Steps */}
<div className="text-center">
<div className="w-16 h-16 bg-surface-container-lowest text-primary rounded-full flex items-center justify-center mx-auto mb-8 font-black text-xl shadow-[0_0_40px_rgba(255,255,255,0.1)]">1</div>
<h5 className="text-white font-bold mb-3">Apply</h5>
<p className="text-on-primary-container text-sm">Submit your intent and initial assessment of operations.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-surface-container-lowest text-primary rounded-full flex items-center justify-center mx-auto mb-8 font-black text-xl shadow-[0_0_40px_rgba(255,255,255,0.1)]">2</div>
<h5 className="text-white font-bold mb-3">Prepare</h5>
<p className="text-on-primary-container text-sm">Align processes with the SAS framework guidelines.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-surface-container-lowest text-primary rounded-full flex items-center justify-center mx-auto mb-8 font-black text-xl shadow-[0_0_40px_rgba(255,255,255,0.1)]">3</div>
<h5 className="text-white font-bold mb-3">Verify</h5>
<p className="text-on-primary-container text-sm">Rigorous auditing by our independent network of experts.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-tertiary-fixed text-on-tertiary-fixed rounded-full flex items-center justify-center mx-auto mb-8 font-black text-xl shadow-[0_0_40px_rgba(192,138,62,0.3)]">4</div>
<h5 className="text-white font-bold mb-3">Advance</h5>
<p className="text-on-primary-container text-sm">Unlock the GSIF seal and ongoing continuous improvement.</p>
</div>
</div>
</div>
</section>
{/* Section 7: Deeper Institutional Strength */}
<section className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
<div className="order-2 md:order-1">
<img className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" data-alt="close up of seedling sprouting from dark rich soil with soft bokeh background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiD1YOx_9azNcNuHkutBf2DeilddUZ8OqI9aQNcTCkqnSlSXvq7q0wnM3Sm5LlyrptbC8u_7ieZTVAkejxZwzlSDWXr2x3ZlSd2hXPjRTIDsj7Nu-ulaSv_Dlj4vjfklFD3L4uGCkw3CucuKpi0h3BI1p6hIfyBxQHOr6PBoEJVhOGi4An9QZF3dOPuHs-rrUHQSWk-T1njEZ4gNZsUcXVhr45iIzxVUo7_0M6D-dE14be1_Fx_EzYA5xl2EGXxBZWOT2panFVMCsQ"/>
</div>
<div className="order-1 md:order-2">
<h2 className="font-headline text-4xl font-bold text-primary mb-8">Long-term Relevance</h2>
<p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                        Our standards aren't static. They evolve with the climate, technology, and sociological shifts of our time. By partnering with GSIF, your institution ensures it remains at the forefront of global best practices.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="text-tertiary mt-1"><span className="material-symbols-outlined">public</span></div>
<div>
<h6 className="font-bold text-on-surface">Global Credibility</h6>
<p className="text-on-surface-variant text-sm">Recognized by major international policy-making bodies.</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-tertiary mt-1"><span className="material-symbols-outlined">analytics</span></div>
<div>
<h6 className="font-bold text-on-surface">Data-Driven Verification</h6>
<p className="text-on-surface-variant text-sm">Move beyond anecdotes with rigorous evidence-based auditing.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Section 8: Research & Knowledge Preview */}
<section className="py-32 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-8">
<div className="mb-20 text-center max-w-3xl mx-auto">
<h2 className="font-headline text-4xl font-bold text-primary mb-6">Knowledge that supports stronger systems.</h2>
<p className="text-on-surface-variant text-lg">We synthesize the latest in sustainability science into actionable intelligence for institutional members.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-surface-container-lowest p-8 border-t-4 border-primary">
<h4 className="font-headline text-xl font-bold mb-4">Research and Insight</h4>
<p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Quarterly reports on carbon sequestration benchmarks and biodiversity mapping in agro-ecosystems.</p>
<a className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2" href="#">Read Report <span className="material-symbols-outlined text-sm">open_in_new</span></a>
</div>
<div className="bg-surface-container-lowest p-8 border-t-4 border-tertiary-fixed-dim">
<h4 className="font-headline text-xl font-bold mb-4">Knowledge Exchange</h4>
<p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Connecting practitioners across continents to share drought-resilience strategies and soil remediation techniques.</p>
<a className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2" href="#">Access Portal <span className="material-symbols-outlined text-sm">open_in_new</span></a>
</div>
<div className="bg-surface-container-lowest p-8 border-t-4 border-primary">
<h4 className="font-headline text-xl font-bold mb-4">Shared Progress</h4>
<p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Collective case studies proving the ROI of long-term sustainable land management across diverse climates.</p>
<a className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2" href="#">View Case Studies <span className="material-symbols-outlined text-sm">open_in_new</span></a>
</div>
</div>
</div>
</section>
{/* Section 9: Get Involved */}
<section className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-8">
<h2 className="font-headline text-4xl font-black text-center text-primary mb-20">Join the movement toward credible sustainability.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/30 overflow-hidden rounded-2xl border border-outline-variant/30">
<div className="bg-surface p-12 hover:bg-surface-container-low transition-colors group cursor-pointer">
<span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">handshake</span>
<h4 className="font-headline text-2xl font-bold text-primary mb-4">Partner with GSIF</h4>
<p className="text-on-surface-variant leading-relaxed">Incorporate GSIF standards into your institutional investment or procurement policies.</p>
</div>
<div className="bg-surface p-12 hover:bg-surface-container-low transition-colors group cursor-pointer">
<span className="material-symbols-outlined text-4xl text-tertiary mb-6 group-hover:scale-110 transition-transform">biotech</span>
<h4 className="font-headline text-2xl font-bold text-primary mb-4">Contribute Expertise</h4>
<p className="text-on-surface-variant leading-relaxed">Join our technical working groups to help shape the future of global sustainability standards.</p>
</div>
<div className="bg-surface p-12 hover:bg-surface-container-low transition-colors group cursor-pointer">
<span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">rocket_launch</span>
<h4 className="font-headline text-2xl font-bold text-primary mb-4">Take the next step</h4>
<p className="text-on-surface-variant leading-relaxed">Start your organization's journey toward certification and verifiable transparency today.</p>
</div>
</div>
</div>
</section>
{/* Section 10: Final CTA */}
<section className="py-32 bg-surface">
<div className="max-w-5xl mx-auto px-8 text-center bg-primary rounded-3xl py-24 px-12 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-0 right-0 w-96 h-96 bg-tertiary rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-on-primary-container rounded-full blur-[120px]"></div>
</div>
<div className="relative z-10">
<h2 className="font-headline text-4xl md:text-5xl font-black text-white mb-8">Lead the transition with trust, structure, and purpose.</h2>
<div className="flex flex-wrap justify-center gap-6">
<button className="bg-tertiary-fixed text-on-tertiary-fixed px-10 py-5 font-bold rounded-lg text-lg hover:bg-tertiary transition-all hover:text-white">Get Certified</button>
<button className="border border-white/20 text-white px-10 py-5 font-bold rounded-lg text-lg hover:bg-white/10 transition-all">Explore GSIF</button>
</div>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-[#184D38] dark:bg-emerald-950 w-full rounded-t-none">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-20">
<div className="md:col-span-1">
<span className="text-[#C08A3E] font-bold text-lg mb-4 block font-headline">GSIF</span>
<p className="text-[#F3EBDD]/80 font-['Sora'] leading-relaxed text-sm">
                    Global Sustainability Impact Foundation is a non-profit organization dedicated to fostering institutional trust through rigorous environmental and social standards.
                </p>
</div>
<div>
<h6 className="font-['Cabinet_Grotesk'] text-xl text-[#F3EBDD] mb-6">Quick Links</h6>
<ul className="space-y-4">
<li><a className="text-[#F3EBDD]/80 hover:text-white hover:translate-x-1 transition-transform duration-300 block text-sm" href="#">Home</a></li>
<li><a className="text-[#F3EBDD]/80 hover:text-white hover:translate-x-1 transition-transform duration-300 block text-sm" href="#">About Us</a></li>
<li><a className="text-[#F3EBDD]/80 hover:text-white hover:translate-x-1 transition-transform duration-300 block text-sm" href="#">Research Network</a></li>
<li><a className="text-[#F3EBDD]/80 hover:text-white hover:translate-x-1 transition-transform duration-300 block text-sm" href="#">Document Center</a></li>
</ul>
</div>
<div>
<h6 className="font-['Cabinet_Grotesk'] text-xl text-[#F3EBDD] mb-6">Standards</h6>
<ul className="space-y-4">
<li><a className="text-[#F3EBDD]/80 hover:text-white hover:translate-x-1 transition-transform duration-300 block text-sm" href="#">SAS Framework</a></li>
<li><a className="text-[#F3EBDD]/80 hover:text-white hover:translate-x-1 transition-transform duration-300 block text-sm" href="#">Certification Process</a></li>
<li><a className="text-[#F3EBDD]/80 hover:text-white hover:translate-x-1 transition-transform duration-300 block text-sm" href="#">Verification Bodies</a></li>
<li><a className="text-[#F3EBDD]/80 hover:text-white hover:translate-x-1 transition-transform duration-300 block text-sm" href="#">Impact Metrics</a></li>
</ul>
</div>
<div>
<h6 className="font-['Cabinet_Grotesk'] text-xl text-[#F3EBDD] mb-6">Connect</h6>
<ul className="space-y-4">
<li><a className="text-[#F3EBDD]/80 hover:text-white hover:translate-x-1 transition-transform duration-300 block text-sm" href="#">Contact Us</a></li>
<li><a className="text-[#F3EBDD]/80 hover:text-white hover:translate-x-1 transition-transform duration-300 block text-sm" href="#">Privacy Policy</a></li>
<li><a className="text-[#F3EBDD]/80 hover:text-white hover:translate-x-1 transition-transform duration-300 block text-sm" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 py-8 max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[#F3EBDD]/60 text-xs font-['Sora']">© 2024 Global Sustainability Impact Foundation. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[#F3EBDD]/60 hover:text-white" href="#"><span className="material-symbols-outlined text-lg">public</span></a>
<a className="text-[#F3EBDD]/60 hover:text-white" href="#"><span className="material-symbols-outlined text-lg">description</span></a>
<a className="text-[#F3EBDD]/60 hover:text-white" href="#"><span className="material-symbols-outlined text-lg">campaign</span></a>
</div>
</div>
</footer>

    </div>
  );
}

export default App;
