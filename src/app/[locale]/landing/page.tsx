import React from 'react';
import Link from 'next/link';
import { Inter, Playfair_Display } from 'next/font/google';
import {
    Leaf,
    TrendingUp,
    Plane,
    Handshake,
    GraduationCap,
    ArrowRight,
    Mail,
    Globe2,
    ShieldCheck,
    Award,
    MapPin,
    ChevronDown
} from 'lucide-react';

// Configuration des polices Google
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

// Types pour les pôles
interface PoleData {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    colorClass: string;
    borderClass: string;
    bgIconClass: string;
    textIconClass: string;
    badge?: {
        text: string;
        bgClass: string;
    };
}

// Données des pôles (Issues du CDC)
const poles: PoleData[] = [
    {
        id: 'ingredients',
        title: 'Primices Ingredients',
        description: "Sourcing et trading premium de matières premières (vanille, girofle). Une traçabilité totale entre les producteurs malgaches et les marchés mondiaux.",
        icon: Leaf,
        colorClass: 'text-pole-ingredients',
        borderClass: 'border-pole-ingredients',
        bgIconClass: 'bg-pole-ingredients/10',
        textIconClass: 'text-pole-ingredients',
        badge: { text: 'Pôle Majeur', bgClass: 'bg-pole-ingredients' }
    },
    {
        id: 'investissement',
        title: 'Primices Investissement',
        description: "Structuration et gestion de projets à forte valeur ajoutée. Un accompagnement sur-mesure pour les investisseurs locaux et internationaux.",
        icon: TrendingUp,
        colorClass: 'text-pole-invest',
        borderClass: 'border-pole-invest',
        bgIconClass: 'bg-pole-invest/10',
        textIconClass: 'text-pole-invest',
        badge: { text: 'Croissance', bgClass: 'bg-pole-invest' }
    },
    {
        id: 'mice',
        title: 'Primices MICE',
        description: "Conception de voyages d'affaires et d'événements exclusifs. L'art de recevoir décliné pour une clientèle d'affaires exigeante.",
        icon: Plane,
        colorClass: 'text-pole-mice',
        borderClass: 'border-pole-mice',
        bgIconClass: 'bg-pole-mice/10',
        textIconClass: 'text-pole-mice',
    },
    {
        id: 'fairbrand',
        title: 'Fair-Brand',
        description: "Accélérateur de carrières. Nous connectons l'excellence des jeunes talents africains aux opportunités des entreprises internationales.",
        icon: Handshake,
        colorClass: 'text-pole-fairbrand',
        borderClass: 'border-pole-fairbrand',
        bgIconClass: 'bg-pole-fairbrand/10',
        textIconClass: 'text-pole-fairbrand',
    },
    {
        id: 'institut',
        title: 'Primices Institut',
        description: "L'innovation pédagogique au service des écoles. Des parcours de formation certifiants pensés pour l'employabilité de demain.",
        icon: GraduationCap,
        colorClass: 'text-pole-institut',
        borderClass: 'border-pole-institut',
        bgIconClass: 'bg-pole-institut/10',
        textIconClass: 'text-pole-institut',
    }
];

export default function LandingPage() {
    return (
        <div className={`min-h-screen bg-brand-light text-gray-800 ${inter.variable} ${playfair.variable} font-sans`}>

            {/* HEADER */}
            <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-serif font-bold text-brand-dark tracking-wider">
                            PRIMICES <span className="text-brand-gold text-sm align-top">INTL</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="#philosophie" className="text-sm font-semibold text-gray-600 hover:text-brand-gold transition">Philosophie</Link>
                        <Link href="#ecosysteme" className="text-sm font-semibold text-gray-600 hover:text-brand-gold transition">Nos Expertises</Link>
                        <Link href="#impact" className="text-sm font-semibold text-gray-600 hover:text-brand-gold transition">Impact</Link>
                        <Link href="#contact" className="px-5 py-2 bg-brand-dark text-white text-sm font-semibold rounded hover:bg-brand-gold transition">Contact</Link>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section
                className="relative h-screen flex flex-col justify-center items-center text-center px-4"
                style={{
                    backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.95)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop')", // Image évoquant Madagascar/International
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="max-w-4xl mx-auto mt-20 z-10">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
                        <Globe2 size={16} className="text-brand-gold" />
                        <span className="text-white text-xs font-semibold tracking-widest uppercase">Holding Group • Madagascar & International</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        Révéler le potentiel.<br />
                        <span className="text-brand-gold">Créer la valeur.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                        Primices International est un écosystème synergique d'excellence. De l'investissement au trading premium, nous bâtissons des ponts durables entre le savoir-faire africain et les standards mondiaux.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="#ecosysteme" className="px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded shadow-lg hover:bg-white transition duration-300 flex items-center justify-center">
                            Découvrir nos 5 Pôles <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                </div>

                <Link href="#philosophie" className="absolute bottom-10 text-white/50 hover:text-brand-gold animate-bounce transition-colors">
                    <ChevronDown size={32} />
                </Link>
            </section>

            {/* SECTION PHILOSOPHIE & POSITIONNEMENT (Nouveau - Inspiré du site live) */}
            <section id="philosophie" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1000&auto=format&fit=crop" alt="Corporate Building" className="rounded-lg shadow-lg w-full h-64 object-cover" />
                                <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000&auto=format&fit=crop" alt="Agriculture Bio Madagascar" className="rounded-lg shadow-lg w-full h-64 object-cover mt-8" />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center">
                                <span className="text-4xl font-serif font-bold text-brand-dark">100%</span>
                                <span className="text-sm font-bold text-brand-gold uppercase tracking-wider">Exigence</span>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h3 className="text-brand-gold text-sm font-bold uppercase tracking-wider mb-3">Notre Vision</h3>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6 leading-tight">
                                L'Afrique au cœur de<br />l'excellence internationale.
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                Née d'une conviction profonde, PRIMICES INTERNATIONAL structure un modèle d'affaires novateur. Nous ne sommes pas une simple holding, mais un véritable <strong>accélérateur de synergies</strong>.
                            </p>

                            <ul className="space-y-6 mt-8">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-brand-gold mt-1">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-xl font-bold text-brand-dark mb-1">Traçabilité & Éthique</h4>
                                        <p className="text-gray-600">De la terre à la table (Ingredients) ou de la conception à la réalisation (Investissement), nous garantissons une transparence totale.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-brand-gold mt-1">
                                        <Award size={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-xl font-bold text-brand-dark mb-1">Standards Premium B2B</h4>
                                        <p className="text-gray-600">Un système d'information centralisé et une qualité de service répondant aux attentes des leaders mondiaux.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION CHIFFRES CLÉS / IMPACT (Nouveau) */}
            <section id="impact" className="py-16 bg-brand-dark text-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-700">
                        <div className="px-4">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-2">5</div>
                            <div className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Pôles d'Expertise</div>
                        </div>
                        <div className="px-4">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-2">+3</div>
                            <div className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Continents Connectés</div>
                        </div>
                        <div className="px-4">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-2">100%</div>
                            <div className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Démarche Éthique</div>
                        </div>
                        <div className="px-4">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-2">B2B</div>
                            <div className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Standards Premium</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION L'ÉCOSYSTÈME (Les 5 Pôles du CDC) */}
            <section id="ecosysteme" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h3 className="text-brand-gold text-sm font-bold uppercase tracking-wider mb-2">Nos Métiers</h3>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Un Écosystème Connecté</h2>
                        <p className="text-gray-600 text-lg">Chaque entité opère de manière autonome tout en s'appuyant sur l'architecture technologique et la force du groupe Primices.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {poles.map((pole) => (
                            <div
                                key={pole.id}
                                className={`bg-white rounded-xl shadow-sm border-t-4 ${pole.borderClass} p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
                            >
                                {pole.badge && (
                                    <div className={`absolute top-0 right-0 ${pole.badge.bgClass} text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg z-10 shadow-sm`}>
                                        {pole.badge.text}
                                    </div>
                                )}

                                <div className={`w-14 h-14 ${pole.bgIconClass} ${pole.textIconClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <pole.icon size={28} />
                                </div>

                                <h3 className="text-xl font-bold text-brand-dark mb-3 font-serif">{pole.title}</h3>
                                <p className="text-sm text-gray-600 mb-8 leading-relaxed min-h-[80px]">
                                    {pole.description}
                                </p>

                                <Link
                                    href={`#${pole.id}`}
                                    className={`${pole.colorClass} font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300 w-fit pb-1 border-b-2 border-transparent group-hover:border-current`}
                                >
                                    Découvrir la plateforme <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION CTA AVANT FOOTER (Nouveau) */}
            <section className="py-20 bg-brand-gold relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
                        Prêt à bâtir l'avenir avec Primices ?
                    </h2>
                    <p className="text-brand-dark/80 text-lg mb-8 font-medium">
                        Que vous soyez investisseur, partenaire commercial ou talent, notre écosystème est conçu pour accélérer votre réussite.
                    </p>
                    <Link href="#contact" className="inline-flex px-8 py-4 bg-brand-dark text-white font-bold rounded shadow-lg hover:bg-white hover:text-brand-dark transition duration-300">
                        Entrer en contact
                    </Link>
                </div>
            </section>

            {/* FOOTER */}
            <footer id="contact" className="bg-brand-dark text-white pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <Link href="/" className="text-2xl font-serif font-bold text-white tracking-wider mb-6 block">
                                PRIMICES <span className="text-brand-gold text-sm align-top">INTERNATIONAL</span>
                            </Link>
                            <p className="text-gray-400 text-sm max-w-md mb-8 leading-relaxed">
                                Holding d'investissement et de services premium. Nous bâtissons des ponts solides entre le potentiel africain et les standards internationaux, avec un siège fortifié par nos valeurs éthiques.
                            </p>
                            <div className="space-y-3">
                                <a href="mailto:rodolpho.r@primices-international.com" className="text-brand-gold hover:text-white transition-colors flex items-center w-fit">
                                    <Mail size={18} className="mr-3" /> rodolpho.r@primices-international.com
                                </a>
                                <div className="text-gray-400 flex items-center w-fit">
                                    <MapPin size={18} className="mr-3" /> Paris • Antananarivo • International
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-6 font-serif text-white border-b border-gray-800 pb-2 inline-block">Nos Écosystèmes</h4>
                            <ul className="space-y-3 text-sm text-gray-400 mt-2">
                                {poles.map(pole => (
                                    <li key={`footer-${pole.id}`}>
                                        <Link href={`#${pole.id}`} className="hover:text-brand-gold transition-colors flex items-center">
                                            <ChevronDown size={14} className="mr-2 -rotate-90" /> {pole.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-6 font-serif text-white border-b border-gray-800 pb-2 inline-block">Le Groupe</h4>
                            <ul className="space-y-3 text-sm text-gray-400 mt-2">
                                <li><Link href="#" className="hover:text-white transition-colors">Notre Philosophie</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Espace Presse / Médias</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Mentions Légales</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Politique RGPD</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                        <p>&copy; {new Date().getFullYear()} PRIMICES INTERNATIONAL. Tous droits réservés.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="#" className="hover:text-white transition-colors">Linkedin</Link>
                            <Link href="#" className="hover:text-white transition-colors">X</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}