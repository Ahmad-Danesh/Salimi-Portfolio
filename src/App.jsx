import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import {
  ArrowDownRight, ArrowLeft, ArrowUpRight, BookOpen, Check, CheckCircle2,
  Code2, ExternalLink, Filter, Github, Globe2, Layers3,
  Mail, MapPin, Menu, Moon, Send, Sparkles, Sun, Terminal,
  GitBranch, X,
} from 'lucide-react';
import { profile, projects, skillGroups } from './data.js';

const PortfolioContext = createContext(null);

const messages = {
  en: {
    navHome: 'Home', navProjects: 'Projects', navSkills: 'Skills', navAbout: 'About', navContact: 'Contact',
    contactCta: "Let's talk", language: 'دری', languageLabel: 'Switch language to Dari',
    modeLight: 'Switch to light mode', modeDark: 'Switch to dark mode', openMenu: 'Open navigation menu', closeMenu: 'Close navigation menu',
    availability: 'Open to learning & collaboration', heroLead: 'Curious mind.', heroAccent: 'Thoughtful interfaces.',
    heroDescription: 'I’m Ahmad Danesh, a student and junior front-end developer in Herat, Afghanistan. I build practical web projects while learning to write clearer, more accessible React experiences.',
    viewWork: 'Explore selected work', sayHello: 'Get in touch', location: 'Herat, Afghanistan',
    designedWith: 'Designed with intention', codeIdentity: 'A little about how I build', focus: 'Current focus', focusValue: 'React · UI craft · Fundamentals',
    selectedEyebrow: 'Selected work', selectedTitle: 'Small projects. Real progress.', selectedBody: 'A curated set of course work that shows my learning in component design, state, events and data filtering.',
    viewAll: 'View all projects', conceptTag: 'Custom concept artwork', viewCase: 'View project', sourceCode: 'Source code', liveDemo: 'Live demo', liveUnavailable: 'Live demo not published', demoPendingShort: 'Demo pending',
    projectsEyebrow: 'Project archive', projectsTitle: 'A closer look at what I’ve built.', projectsBody: 'Seven selected course projects and exercises. Their cover images are original illustrative UI concepts, not screenshots of the running apps; live demos will be added only after deployment.',
    allProjects: 'All projects', reactProjects: 'React', filteringProjects: 'Filtering', featured: 'Featured', project: 'Project', projectOf: 'of',
    details: 'Project overview', whyItMatters: 'What it demonstrates', links: 'Project links', learningNotes: 'Implementation notes',
    learningNotesBody: 'This project is part of my learning journey. The notes below describe the behavior visible in the public source; they are not a claim of production readiness.',
    backProjects: 'Back to projects', sourceOnGithub: 'View source on GitHub', noLiveYet: 'A live deployment has not been published for this project yet.',
    skillsEyebrow: 'My toolkit', skillsTitle: 'Foundations first. Improving every week.', skillsBody: 'These are the technologies I’ve confirmed and practised. I keep my skills list honest and focused on what I can explain.',
    webFoundations: 'Web foundations', reactFoundations: 'React practice', devTools: 'Development tools',
    approach: 'My approach', approachBody: 'Understand the basics, read errors carefully, test different states, and explain why a solution works—not just copy the code.',
    aboutEyebrow: 'Behind the code', aboutTitle: 'A learner who builds to understand.', aboutBody: 'My learning journey is practice-led: I turn course concepts into small projects, test how an interface behaves, investigate errors and improve each iteration.',
    goalTitle: 'Where I’m heading', goalBody: 'My goal is to become a capable front-end developer by strengthening my fundamentals, finishing more useful projects and learning to maintain the code I write.',
    principleOne: 'Learn by building', principleOneBody: 'Turn concepts into small, useful interfaces with a clear purpose.',
    principleTwo: 'Keep code understandable', principleTwoBody: 'Use components and meaningful names so I can explain and improve the work.',
    principleThree: 'Test the whole experience', principleThreeBody: 'Check responsive layouts, keyboard access, feedback states and working links before release.',
    contactEyebrow: 'Let’s connect', contactTitle: 'Have a question or an idea?', contactBody: 'Send a message through the form. Success appears only after Formspree accepts your submission.',
    emailMe: 'Email me', githubProfile: 'GitHub profile', publicEmail: 'Public email', yourName: 'Your name', emailAddress: 'Email address',
    subject: 'Subject', optional: '(optional)', message: 'Message', namePlaceholder: 'Your name', emailPlaceholder: 'you@example.com',
    subjectPlaceholder: 'What would you like to talk about?', messagePlaceholder: 'Write at least 10 characters…', messageHint: 'At least 10 characters.',
    send: 'Send message', sending: 'Sending…', requiredNote: 'Required fields are marked with *. Your message is sent only after the service accepts it.',
    validateName: 'Please enter your name (at least 2 characters).', validateEmail: 'Enter a valid email address.',
    validateSubject: 'Subject must be at least 3 characters, or leave it blank.', validateMessage: 'Please write at least 10 characters.',
    correctFields: 'Please correct the highlighted fields and try again.',
    notConnected: 'The contact form is not configured, so your message was not sent. Check VITE_FORMSPREE_ENDPOINT in your environment settings.',
    sendSuccess: 'Formspree accepted your message. Thank you for reaching out.', sendError: 'The message could not be confirmed as sent. Please try again or email me directly.',
    footerNote: 'Built with React, React Router and Tailwind CSS.', designedIn: 'Designed and built with care', backHome: 'Back to home',
    notFound: 'Page not found', notFoundBody: 'This route does not exist, or the page may have moved.', goHome: 'Return to Home',
    projectNotFound: 'That project could not be found.', previewWarning: 'Concept artwork — not a real app screenshot',
  },
  fa: {
    navHome: 'خانه', navProjects: 'پروژه‌ها', navSkills: 'مهارت‌ها', navAbout: 'دربارهٔ من', navContact: 'تماس',
    contactCta: 'ارتباط با من', language: 'English', languageLabel: 'تغییر زبان به انگلیسی',
    modeLight: 'تغییر به حالت روشن', modeDark: 'تغییر به حالت تاریک', openMenu: 'بازکردن منوی پیمایش', closeMenu: 'بستن منوی پیمایش',
    availability: 'آمادهٔ یادگیری و همکاری', heroLead: 'ذهن کنجکاو.', heroAccent: 'رابط‌های سنجیده.',
    heroDescription: 'من احمد دانش، محصل و توسعه‌دهندهٔ نوآموز فرانت‌اند در هرات افغانستان هستم. با ساخت پروژه‌های عملی، می‌آموزم چگونه تجربه‌های واضح‌تر و دسترس‌پذیرتر با React بسازم.',
    viewWork: 'دیدن پروژه‌های منتخب', sayHello: 'ارتباط با من', location: 'هرات، افغانستان',
    designedWith: 'با دقت طراحی‌شده', codeIdentity: 'کمی دربارهٔ روش کار من', focus: 'تمرکز فعلی', focusValue: 'React · رابط کاربری · پایه‌ها',
    selectedEyebrow: 'کارهای منتخب', selectedTitle: 'پروژه‌های کوچک؛ پیشرفت واقعی.', selectedBody: 'مجموعه‌ای گزیده از کارهای دوره که یادگیری من در کامپوننت‌ها، state، رویدادها و فیلترکردن داده را نشان می‌دهد.',
    viewAll: 'دیدن همهٔ پروژه‌ها', conceptTag: 'طرح تصویری مفهومی', viewCase: 'دیدن پروژه', sourceCode: 'مشاهدهٔ کد', liveDemo: 'دموی زنده', liveUnavailable: 'نسخهٔ آنلاین منتشر نشده', demoPendingShort: 'دمو آماده نیست',
    projectsEyebrow: 'آرشیف پروژه‌ها', projectsTitle: 'نگاهی دقیق‌تر به کارهایی که ساخته‌ام.', projectsBody: 'هفت پروژه و تمرین منتخب دوره. تصویرهای کارت‌ها طرح‌های تصویری مفهومی هستند، نه اسکرین‌شات اپلیکیشن‌های در حال اجرا؛ لینک آنلاین پس از انتشار واقعی اضافه می‌شود.',
    allProjects: 'همه', reactProjects: 'React', filteringProjects: 'فیلترکردن', featured: 'منتخب', project: 'پروژه', projectOf: 'از',
    details: 'معرفی پروژه', whyItMatters: 'چه چیزی را نشان می‌دهد', links: 'لینک‌های پروژه', learningNotes: 'یادداشت‌های پیاده‌سازی',
    learningNotesBody: 'این پروژه بخشی از مسیر یادگیری من است. توضیحات زیر رفتار قابل مشاهده در کد عمومی را بیان می‌کند و ادعای آماده‌بودن برای تولید نیست.',
    backProjects: 'بازگشت به پروژه‌ها', sourceOnGithub: 'مشاهدهٔ کد در GitHub', noLiveYet: 'برای این پروژه هنوز نسخهٔ آنلاین منتشر نشده است.',
    skillsEyebrow: 'ابزارهای من', skillsTitle: 'اول پایه‌ها؛ هر هفته بهتر.', skillsBody: 'این تکنالوژی‌ها را تأیید کرده‌ام و تمرین نموده‌ام. فهرست مهارت‌ها را صادقانه و مطابق چیزهایی نگه می‌دارم که می‌توانم توضیح بدهم.',
    webFoundations: 'پایه‌های وب', reactFoundations: 'تمرین React', devTools: 'ابزارهای توسعه',
    approach: 'روش کار من', approachBody: 'فهمیدن پایه‌ها، خواندن دقیق خطاها، آزمایش حالت‌های مختلف و توضیح دلیل کارکرد راه‌حل؛ نه فقط کاپی‌کردن کد.',
    aboutEyebrow: 'پشت کد', aboutTitle: 'یادگیرنده‌ای که برای فهمیدن می‌سازد.', aboutBody: 'مسیر یادگیری من بر تمرین استوار است: مفاهیم دوره را به پروژه‌های کوچک تبدیل می‌کنم، رفتار رابط را آزمایش می‌کنم، خطاها را بررسی می‌کنم و هر مرحله را بهتر می‌سازم.',
    goalTitle: 'مسیر آینده', goalBody: 'هدفم این است که با تقویت پایه‌ها، تکمیل پروژه‌های مفیدتر و یادگیری نگهداری کد خودم، به یک توسعه‌دهندهٔ توانمند فرانت‌اند تبدیل شوم.',
    principleOne: 'با ساختن یاد بگیرم', principleOneBody: 'مفاهیم را به رابط‌های کوچک و مفید با هدف روشن تبدیل کنم.',
    principleTwo: 'کد قابل فهم بنویسم', principleTwoBody: 'از کامپوننت‌ها و نام‌های معنادار استفاده کنم تا بتوانم کار خود را توضیح و بهتر کنم.',
    principleThree: 'تمام تجربه را آزمایش کنم', principleThreeBody: 'پیش از انتشار، واکنش‌گرایی، صفحه‌کلید، پیام‌های وضعیت و لینک‌ها را بررسی کنم.',
    contactEyebrow: 'ارتباط با من', contactTitle: 'پرسش یا ایده‌ای دارید؟', contactBody: 'از فرم زیر پیام بفرستید. پیام موفقیت فقط پس از پذیرش توسط Formspree نشان داده می‌شود.',
    emailMe: 'برایم ایمیل بفرست', githubProfile: 'پروفایل GitHub', publicEmail: 'ایمیل عمومی', yourName: 'نام شما', emailAddress: 'آدرس ایمیل',
    subject: 'موضوع', optional: '(اختیاری)', message: 'پیام', namePlaceholder: 'نام شما', emailPlaceholder: 'you@example.com',
    subjectPlaceholder: 'دربارهٔ چه چیزی می‌خواهید صحبت کنید؟', messagePlaceholder: 'دست‌کم ۱۰ حرف بنویسید…', messageHint: 'حداقل ۱۰ حرف.',
    send: 'ارسال پیام', sending: 'در حال ارسال…', requiredNote: 'موارد ضروری با * مشخص شده‌اند. پیام تنها پس از پذیرش توسط سرویس ارسال می‌شود.',
    validateName: 'لطفاً نام خود را با دست‌کم ۲ حرف وارد کنید.', validateEmail: 'لطفاً ایمیل معتبر وارد کنید.',
    validateSubject: 'موضوع باید دست‌کم ۳ حرف داشته باشد یا خالی بماند.', validateMessage: 'لطفاً دست‌کم ۱۰ حرف بنویسید.',
    correctFields: 'لطفاً موارد مشخص‌شده را اصلاح و دوباره تلاش کنید.',
    notConnected: 'فرم تماس تنظیم نشده است و پیام ارسال نشد. متغیر VITE_FORMSPREE_ENDPOINT را بررسی کنید.',
    sendSuccess: 'Formspree پیام شما را پذیرفت. از تماس‌تان سپاس‌گزارم.', sendError: 'ارسال پیام تأیید نشد. دوباره تلاش کنید یا مستقیم ایمیل بفرستید.',
    footerNote: 'ساخته‌شده با React، React Router و Tailwind CSS.', designedIn: 'با دقت طراحی و ساخته‌شده', backHome: 'بازگشت به خانه',
    notFound: 'صفحه پیدا نشد', notFoundBody: 'این مسیر وجود ندارد یا صفحه جابه‌جا شده است.', goHome: 'بازگشت به خانه',
    projectNotFound: 'این پروژه پیدا نشد.', previewWarning: 'تصویر مفهومی — نه اسکرین‌شات واقعی اپلیکیشن',
  },
};

function readSaved(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

export function PortfolioProvider({ children }) {
  const [lang, setLang] = useState(() => readSaved('ahmad-portfolio-lang', 'en') === 'fa' ? 'fa' : 'en');
  const [theme, setTheme] = useState(() => readSaved('ahmad-portfolio-theme', 'dark') === 'light' ? 'light' : 'dark');
  const value = useMemo(() => ({
    lang,
    setLang: (next) => setLang(next),
    toggleLang: () => setLang((current) => current === 'en' ? 'fa' : 'en'),
    theme,
    toggleTheme: () => setTheme((current) => current === 'dark' ? 'light' : 'dark'),
    t: messages[lang],
  }), [lang, theme]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.setAttribute('content', theme === 'dark' ? '#080d17' : '#f5f7fa');
    try { localStorage.setItem('ahmad-portfolio-theme', theme); } catch { /* Storage can be disabled. */ }
  }, [theme]);
  useEffect(() => {
    document.documentElement.lang = lang === 'fa' ? 'fa-AF' : 'en';
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    try { localStorage.setItem('ahmad-portfolio-lang', lang); } catch { /* Storage can be disabled. */ }
  }, [lang]);
  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error('Portfolio components must be rendered inside PortfolioProvider.');
  return context;
}

const navItems = [
  { to: '/home', key: 'navHome' },
  { to: '/projects', key: 'navProjects' },
  { to: '/skills', key: 'navSkills' },
  { to: '/about', key: 'navAbout' },
  { to: '/contact', key: 'navContact' },
];

export function SiteLayout({ children }) {
  const { lang, toggleLang, theme, toggleTheme, t } = usePortfolio();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const pageTitles = {
    '/home': t.navHome, '/projects': t.navProjects, '/skills': t.navSkills, '/about': t.navAbout, '/contact': t.navContact,
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setMenuOpen(false);
    const base = lang === 'fa' ? 'احمد دانش | نمونه‌کار توسعه‌دهندهٔ فرانت‌اند' : 'Ahmad Danesh | Front-End Developer Portfolio';
    const detail = location.pathname.startsWith('/projects/') ? (projects.find((item) => item.id === location.pathname.split('/')[2])?.title ?? t.navProjects) : pageTitles[location.pathname];
    document.title = detail ? `${detail} · ${base}` : base;
  }, [location.pathname, lang]);

  const navClass = ({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`;
  return <div className={`site-shell ${lang === 'fa' ? 'is-rtl' : ''}`} dir={lang === 'fa' ? 'rtl' : 'ltr'}>
    <a className="skip-link" href="#main-content">{lang === 'fa' ? 'رفتن به محتوای اصلی' : 'Skip to content'}</a>
    <header className="site-header">
      <div className="header-glass flex items-center">
        <Link to="/home" className="brand" aria-label="Ahmad Danesh home">
          <span className="brand-mark">AD<span className="brand-spark">✦</span></span>
          <span className="brand-copy"><strong>Ahmad Danesh</strong><small>FRONT-END DEVELOPER</small></span>
        </Link>
        <nav className="desktop-nav flex items-center" aria-label="Main navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} className={navClass}>{t[item.key]}</NavLink>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button language-button" type="button" onClick={toggleLang} aria-label={lang === 'en' ? 'Switch language to Dari' : 'Switch language to English'} title={lang === 'en' ? 'دری' : 'English'}><Globe2 size={17}/><span>{t.language}</span></button>
          <button className="icon-button theme-button" type="button" onClick={toggleTheme} aria-label={theme === 'dark' ? t.modeLight : t.modeDark} title={theme === 'dark' ? t.modeLight : t.modeDark}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</button>
          <Link to="/contact" className="header-cta">{t.contactCta}<ArrowUpRight size={15}/></Link>
          <button className="icon-button mobile-menu-button" type="button" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label={menuOpen ? t.closeMenu : t.openMenu}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
        </div>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map((item) => <NavLink key={item.to} to={item.to} className={navClass} onClick={() => setMenuOpen(false)}>{t[item.key]}</NavLink>)}
        <div className="mobile-nav-actions"><button className="mobile-action" type="button" onClick={toggleLang}><Globe2 size={17}/>{t.language}</button><button className="mobile-action" type="button" onClick={toggleTheme}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}{theme === 'dark' ? t.modeLight : t.modeDark}</button></div>
      </nav>}
    </header>
    <main id="main-content" className="main-content w-full" tabIndex={-1}>{children}</main>
    <footer className="site-footer">
      <div className="footer-main"><Link to="/home" className="footer-brand"><span className="brand-mark small-mark">AD</span><span><strong>Ahmad Danesh</strong><small>{t.designedIn}</small></span></Link><p>© {new Date().getFullYear()} Ahmad Danesh. {t.footerNote}</p><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={18}/></a><a href={`mailto:${profile.email}`} aria-label="Email Ahmad"><Mail size={18}/></a><Link to="/home" aria-label={t.backHome}><ArrowUpRight size={18}/></Link></div></div>
    </footer>
  </div>;
}

function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span className="eyebrow-mark" aria-hidden="true"/>{children}</p>;
}

function SectionTitle({ eyebrow, title, body, align = 'left' }) {
  return <div className={`section-title ${align === 'center' ? 'section-title-center' : ''}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{body && <p>{body}</p>}</div>;
}

function CodeCard({ t }) {
  return <div className="code-visual" aria-label="Decorative code card">
    <div className="code-orbit orbit-one"/><div className="code-orbit orbit-two"/>
    <div className="code-card-top"><div className="window-dots"><i/><i/><i/></div><span><Terminal size={14}/> src/App.jsx</span><span className="code-live"><b/> LIVE LEARNING</span></div>
    <div className="code-card-body"><div className="code-line"><span className="line-no">01</span><span className="code-muted">const</span> <span className="code-cyan">developer</span> <span className="code-pink">=</span> <span className="code-lime">{'{'}</span></div>
      <div className="code-line indent"><span className="line-no">02</span><span className="code-purple">name</span><span>:</span> <span className="code-gold">'Ahmad Danesh'</span><span>,</span></div>
      <div className="code-line indent"><span className="line-no">03</span><span className="code-purple">focus</span><span>:</span> <span className="code-gold">'React & UI'</span><span>,</span></div>
      <div className="code-line indent"><span className="line-no">04</span><span className="code-purple">mindset</span><span>:</span> <span className="code-gold">'keep learning'</span><span>,</span></div>
      <div className="code-line indent"><span className="line-no">05</span><span className="code-purple">values</span><span>:</span> <span className="code-lime">[</span></div>
      <div className="code-line indent-more"><span className="line-no">06</span><span className="code-gold">'clear code'</span><span>,</span></div>
      <div className="code-line indent-more"><span className="line-no">07</span><span className="code-gold">'accessible design'</span><span>,</span></div>
      <div className="code-line indent-more"><span className="line-no">08</span><span className="code-gold">'real user value'</span></div>
      <div className="code-line indent"><span className="line-no">09</span><span className="code-lime">]</span></div>
      <div className="code-line"><span className="line-no">10</span><span className="code-lime">{' }'}</span><span className="code-muted">;</span></div>
    </div>
    <div className="code-card-bottom"><span className="status-pulse"/>{t.designedWith}<span className="code-bottom-icon"><Code2 size={16}/></span></div>
    <div className="floating-note"><span className="floating-note-icon"><Layers3 size={18}/></span><span><strong>Components first</strong><small>Clear · Reusable · Responsive</small></span></div>
  </div>;
}

function HeroPage() {
  const { lang, t } = usePortfolio();
  const isFa = lang === 'fa';
  return <div className="page-transition">
    <section className="hero-section relative overflow-hidden">
      <div className="hero-grid-pattern"/><div className="hero-glow hero-glow-a"/><div className="hero-glow hero-glow-b"/>
      <div className="container hero-layout grid items-center">
        <div className="hero-copy">
          <div className="availability-pill"><span className="availability-dot"/>{t.availability}</div>
          <p className="hero-overline">{isFa ? 'سلام، من احمد هستم' : 'HELLO, I’M AHMAD'}</p>
          <h1>{t.heroLead}<br/><span className="hero-gradient-text">{t.heroAccent}</span></h1>
          <p className="hero-description">{t.heroDescription}</p>
          <div className="hero-buttons flex flex-wrap"><Link to="/projects" className="button button-primary">{t.viewWork}<ArrowUpRight size={17}/></Link><Link to="/contact" className="button button-secondary">{t.sayHello}<ArrowDownRight size={16}/></Link></div>
          <div className="hero-meta"><span><MapPin size={15}/>{t.location}</span><span className="meta-divider"/><a href={profile.github} target="_blank" rel="noreferrer"><Github size={15}/>GitHub <ArrowUpRight size={13}/></a><span className="meta-divider"/><a href={`mailto:${profile.email}`}><Mail size={15}/>{profile.email}</a></div>
        </div>
        <div className="hero-art"><div className="art-label label-top"><span className="label-dot"/>DESIGNING & BUILDING</div><CodeCard t={t}/><div className="art-label label-bottom"><span className="mini-wave">〰</span><span>{t.focus}<strong>{t.focusValue}</strong></span></div></div>
      </div>
      <div className="hero-bottom-line"><div className="container hero-bottom-inner"><span>{isFa ? 'از پایه‌ها شروع می‌کنم؛ با هر پروژه بهتر می‌شوم.' : 'Starting with the fundamentals. Getting better with every build.'}</span><span className="scroll-cue">SCROLL TO EXPLORE <ArrowDownRight size={15}/></span></div></div>
    </section>
    <FeaturedProjects />
    <div className="home-cta-wrap"><div className="container home-cta"><div><Eyebrow>{isFa ? 'گفت‌وگو را شروع کنیم' : 'HAVE AN IDEA?'}</Eyebrow><h2>{isFa ? 'بیایید چیزی مفید بسازیم.' : 'Let’s build something useful.'}</h2><p>{isFa ? 'از بازخورد سازنده و فرصت‌های یادگیری استقبال می‌کنم.' : 'I welcome constructive feedback, learning opportunities and conversations about front-end projects.'}</p></div><Link to="/contact" className="button button-primary">{t.contactCta}<ArrowUpRight size={17}/></Link></div></div>
  </div>;
}

function ProjectCover({ project, compact = false }) {
  const { t, lang } = usePortfolio();
  return <div className={`project-cover${compact ? ' project-cover-compact' : ''}`}>
    <img className="h-full w-full object-cover" src={project.previewImage} alt={t.previewWarning + ": " + (lang === 'fa' ? project.titleFa : project.title)} loading="lazy" decoding="async" width="1200" height="750" />
    <div className="cover-vignette"/>
    <span className="cover-caption"><Sparkles size={12}/>{t.conceptTag}</span>
    <span className="cover-arrow" aria-hidden="true"><ArrowUpRight size={17}/></span>
  </div>;
}

function ProjectCard({ project, index, featuredMode = false }) {
  const { lang, t } = usePortfolio();
  const title = lang === 'fa' ? project.titleFa : project.title;
  const category = project.category;
  return <article className={`project-card min-w-0 overflow-hidden${featuredMode ? ' project-card-featured' : ''}`}  style={{ '--card-delay': `${Math.min(index, 6) * 65}ms` }}>
    <Link to={`/projects/${project.id}`} className="project-cover-link" aria-label={`${t.viewCase}: ${title}`}><ProjectCover project={project} compact={featuredMode}/></Link>
    <div className="project-card-content">
      <div className="project-card-topline"><span className="project-category">{category}</span><span className="project-status-chip">{t.demoPendingShort}</span>{featuredMode && <span className="featured-chip"><Sparkles size={12}/>{t.featured}</span>}</div>
      <Link to={`/projects/${project.id}`} className="project-title-link"><h3>{title}</h3><ArrowUpRight size={17}/></Link>
      <p className="project-description">{project.description[lang]}</p>
      <div className="tag-list">{project.tags.slice(0, 3).map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div>
      <div className="project-card-footer"><Link to={`/projects/${project.id}`} className="text-link">{t.viewCase}<ArrowUpRight size={15}/></Link><div className="flex items-center gap-3">{project.liveUrl ? <a className="source-link" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${t.liveDemo}: ${title}`} title={t.liveDemo}><Globe2 size={17}/></a> : <span className="source-link opacity-40" aria-label={t.liveUnavailable} title={t.liveUnavailable}><Globe2 size={17}/></span>}<a className="source-link" href={project.repoUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} aria-label={`${t.sourceCode}: ${title}`}><Github size={17}/></a></div></div>
    </div>
  </article>;
}

function FeaturedProjects() {
  const { t } = usePortfolio();
  const featured = projects.slice(0, 3);
  return <section className="section-block featured-section"><div className="container"><div className="section-head-row"><SectionTitle eyebrow={t.selectedEyebrow} title={t.selectedTitle} body={t.selectedBody}/><Link to="/projects" className="button button-quiet">{t.viewAll}<ArrowUpRight size={16}/></Link></div><div className="projects-grid featured-grid grid">{featured.map((project, index) => <ProjectCard key={project.id} project={project} index={index} featuredMode/> )}</div></div></section>;
}

function ProjectsPage() {
  const { t, lang } = usePortfolio();
  const [filter, setFilter] = useState('all');
  const filters = [
    { id: 'all', label: t.allProjects },
    { id: 'react', label: t.reactProjects },
    { id: 'filtering', label: t.filteringProjects },
  ];
  const visibleProjects = projects.filter((project) => {
    if (filter === 'filtering') return /filter/i.test(project.title);
    if (filter === 'react') return project.tags.some((tag) => /react/i.test(tag)) || /React/i.test(project.category);
    return true;
  });
  return <div className="page-transition"><section className="inner-page-hero"><div className="container inner-hero-content"><Eyebrow>{t.projectsEyebrow}</Eyebrow><h1>{t.projectsTitle}</h1><p>{t.projectsBody}</p><div className="inner-hero-meta"><span><Layers3 size={15}/>{projects.length} {lang === 'fa' ? 'پروژهٔ منتخب' : 'selected projects'}</span><span><Sparkles size={15}/>{t.conceptTag}</span></div></div></section>
    <section className="section-block projects-page-section"><div className="container"><div className="filter-bar" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item.id} type="button" className={`filter-button${filter === item.id ? ' filter-button-active' : ''}`} onClick={() => setFilter(item.id)}>{item.id === 'all' ? <Layers3 size={15}/> : item.id === 'react' ? <Code2 size={15}/> : <Filter size={15}/>}{item.label}<span className="filter-count">{item.id === 'all' ? projects.length : item.id === 'filtering' ? projects.filter((p) => /filter/i.test(p.title)).length : projects.length}</span></button>)}</div>
      <p className="results-note">{visibleProjects.length} {lang === 'fa' ? 'پروژه نمایش داده می‌شود' : `project${visibleProjects.length === 1 ? '' : 's'} shown`}</p>
      <div className="projects-grid grid">{visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index}/>)}</div>
    </div></section></div>;
}

function ProjectDetailPage() {
  const { projectId } = useParams();
  const { lang, t } = usePortfolio();
  const project = projects.find((item) => item.id === projectId);
  if (!project) return <NotFoundPage message={t.projectNotFound}/>;
  const title = lang === 'fa' ? project.titleFa : project.title;
  return <div className="page-transition"><section className="detail-hero"><div className="container"><Link to="/projects" className="back-link"><ArrowLeft size={16}/>{t.backProjects}</Link><div className="detail-heading"><Eyebrow>{project.category}</Eyebrow><h1>{title}</h1><p>{project.description[lang]}</p></div><div className="detail-cover-wrap"><ProjectCover project={project}/></div></div></section>
    <section className="section-block detail-content-section"><div className="container detail-content-grid"><div className="detail-main-column"><div className="detail-block"><Eyebrow>{t.details}</Eyebrow><h2>{title}</h2><p>{project.description[lang]}</p></div><div className="detail-block"><Eyebrow>{t.whyItMatters}</Eyebrow><p>{project.value[lang]}</p></div><div className="detail-block"><Eyebrow>{t.learningNotes}</Eyebrow><p>{t.learningNotesBody}</p><div className="note-card"><CheckCircle2 size={18}/><span>{t.previewWarning}</span></div></div></div>
      <aside className="detail-sidebar"><div className="sidebar-card"><h3>{t.links}</h3><a className="sidebar-link" href={project.repoUrl} target="_blank" rel="noreferrer"><Github size={18}/><span>{t.sourceOnGithub}</span><ExternalLink size={15}/></a>{project.liveUrl ? <a className="sidebar-link" href={project.liveUrl} target="_blank" rel="noreferrer"><Globe2 size={18}/><span>{t.liveDemo}</span><ExternalLink size={15}/></a> : <div className="sidebar-link sidebar-link-muted" aria-disabled="true"><Globe2 size={18}/><span>{t.noLiveYet}</span></div>}</div><div className="sidebar-card"><h3>{lang === 'fa' ? 'تکنالوژی‌ها و مفاهیم' : 'Technologies & concepts'}</h3><div className="tag-list">{project.tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div></div><Link to="/contact" className="sidebar-cta"><span>{lang === 'fa' ? 'دربارهٔ کارم بازخورد دارید؟' : 'Have feedback on my work?'}</span><ArrowUpRight size={18}/></Link></aside>
    </div></section></div>;
}

function SkillsPage() {
  const { t, lang } = usePortfolio();
  const iconSet = [Code2, GitBranch, Terminal];
  const groupTitles = [t.webFoundations, t.reactFoundations, t.devTools];
  return <div className="page-transition"><section className="inner-page-hero"><div className="container inner-hero-content"><Eyebrow>{t.skillsEyebrow}</Eyebrow><h1>{t.skillsTitle}</h1><p>{t.skillsBody}</p><div className="skill-orbit"><span>HTML</span><span>CSS</span><span>JS</span><strong>React</strong><span>Git</span><span>GitHub</span></div></div></section>
    <section className="section-block skills-page-section"><div className="container"><div className="skills-grid grid">{skillGroups.map((group, index) => { const Icon = iconSet[index % iconSet.length]; return <article key={group.title.en} className="skill-card"><div className="skill-card-icon"><Icon size={23}/></div><span className="skill-index">0{index + 1}</span><h2>{groupTitles[index] ?? group.title[lang]}</h2><p>{group.description[lang]}</p><div className="skill-pills">{group.skills.map((skill) => <span key={skill}><Check size={13}/>{skill}</span>)}</div><div className="skill-card-bottom"><span/>{lang === 'fa' ? 'تمرین‌شده در پروژه‌ها' : 'Practised through projects'}</div></article>; })}</div>
      <div className="approach-panel"><div className="approach-icon"><Sparkles size={22}/></div><div><h3>{t.approach}</h3><p>{t.approachBody}</p></div></div>
    </div></section></div>;
}

function AboutPage() {
  const { t, lang } = usePortfolio();
  const steps = [
    { n: '01', title: t.principleOne, body: t.principleOneBody, icon: BookOpen },
    { n: '02', title: t.principleTwo, body: t.principleTwoBody, icon: Code2 },
    { n: '03', title: t.principleThree, body: t.principleThreeBody, icon: CheckCircle2 },
  ];
  return <div className="page-transition"><section className="inner-page-hero"><div className="container inner-hero-content"><Eyebrow>{t.aboutEyebrow}</Eyebrow><h1>{t.aboutTitle}</h1><p>{t.aboutBody}</p><div className="about-signature"><span className="signature-monogram">AD</span><span><strong>Ahmad Danesh</strong><small>{profile.role[lang]}</small></span></div></div></section>
    <section className="section-block about-page-section"><div className="container about-content-grid grid"><div className="about-story-card"><span className="large-quote">“</span><Eyebrow>{t.goalTitle}</Eyebrow><p>{profile.goal[lang]}</p><div className="about-story-footer"><span className="status-pulse"/>{lang === 'fa' ? 'در مسیر یادگیری پیوسته' : 'Always learning, one build at a time'}</div></div><div className="principles-list">{steps.map((step) => { const Icon = step.icon; return <article key={step.n} className="principle-card"><span className="principle-number">{step.n}</span><div className="principle-icon"><Icon size={21}/></div><div><h2>{step.title}</h2><p>{step.body}</p></div><ArrowUpRight className="principle-arrow" size={17}/></article>; })}</div></div></section></div>;
}

const emptyForm = { name: '', email: '', subject: '', message: '' };
function validateContactForm(values, t) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = t.validateName;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = t.validateEmail;
  if (values.subject.trim().length > 0 && values.subject.trim().length < 3) errors.subject = t.validateSubject;
  if (values.message.trim().length < 10) errors.message = t.validateMessage;
  return errors;
}

function ContactPage() {
  const { t, lang } = usePortfolio();
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();
  const endpointReady = Boolean(endpoint && /^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/.test(endpoint));
  function handleChange(event) {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    if (errors[name]) setErrors((previous) => ({ ...previous, [name]: '' }));
    if (status.type !== 'idle') setStatus({ type: 'idle', message: '' });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateContactForm(values, t);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) { setStatus({ type: 'error', message: t.correctFields }); return; }
    if (!endpointReady) { setStatus({ type: 'error', message: t.notConnected }); return; }
    setSubmitting(true);
    setStatus({ type: 'idle', message: '' });
    try {
      const response = await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: values.name.trim(), email: values.email.trim(), subject: values.subject.trim() || 'Portfolio contact', message: values.message.trim() }),
      });
      if (!response.ok) throw new Error(`Form service responded with ${response.status}`);
      setStatus({ type: 'success', message: t.sendSuccess }); setValues(emptyForm); setErrors({});
    } catch {
      setStatus({ type: 'error', message: t.sendError });
    } finally { setSubmitting(false); }
  }
  const fieldClass = (field) => `contact-field${errors[field] ? ' field-error' : ''}`;
  return <div className="page-transition"><section className="inner-page-hero"><div className="container inner-hero-content"><Eyebrow>{t.contactEyebrow}</Eyebrow><h1>{t.contactTitle}</h1><p>{t.contactBody}</p><div className="inner-hero-meta"><span><Mail size={15}/>{profile.email}</span><span><MapPin size={15}/>{t.location}</span></div></div></section>
    <section className="section-block contact-page-section"><div className="container contact-layout grid"><aside className="contact-aside"><div className="contact-aside-orb"/><div className="contact-aside-top-icon"><Mail size={23}/></div><Eyebrow light>{t.contactEyebrow}</Eyebrow><h2>{t.contactCta}<br/><span>{lang === 'fa' ? 'یک گفت‌وگو شروع کنیم.' : 'Let’s make a connection.'}</span></h2><p>{lang === 'fa' ? 'برای فرصت‌های یادگیری، بازخورد دربارهٔ پروژه‌ها یا گفت‌وگوهای فرانت‌اند خوشحال می‌شوم پیام دریافت کنم.' : 'I welcome constructive feedback, learning opportunities and conversations about front-end projects.'}</p><div className="contact-links"><a href={`mailto:${profile.email}`}><span className="contact-link-icon"><Mail size={17}/></span><span><small>{t.publicEmail}</small><strong>{profile.email}</strong></span><ArrowUpRight size={16}/></a><a href={profile.github} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Github size={17}/></span><span><small>{t.githubProfile}</small><strong>github.com/Ahmad-Danesh</strong></span><ArrowUpRight size={16}/></a></div><div className="contact-aside-bottom"><span className="status-pulse"/>{t.availability}</div></aside>
      <form className="contact-form-card" onSubmit={handleSubmit} noValidate><div className="form-heading"><div><Eyebrow>{lang === 'fa' ? 'پیام شما' : 'YOUR MESSAGE'}</Eyebrow><h2>{lang === 'fa' ? 'در تماس باشید.' : 'Send a message.'}</h2></div><span className="required-key">* {lang === 'fa' ? 'ضروری' : 'Required'}</span></div>
        <div className="form-fields-grid"><div className="field-wrap"><label htmlFor="contact-name">{t.yourName} *</label><input id="contact-name" className={fieldClass('name')} name="name" value={values.name} onChange={handleChange} autoComplete="name" placeholder={t.namePlaceholder} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} required/>{errors.name && <span className="field-error-text" id="name-error">{errors.name}</span>}</div>
          <div className="field-wrap"><label htmlFor="contact-email">{t.emailAddress} *</label><input id="contact-email" className={fieldClass('email')} name="email" type="email" value={values.email} onChange={handleChange} autoComplete="email" placeholder={t.emailPlaceholder} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} required/>{errors.email && <span className="field-error-text" id="email-error">{errors.email}</span>}</div></div>
        <div className="field-wrap"><label htmlFor="contact-subject">{t.subject} <span>{t.optional}</span></label><input id="contact-subject" className={fieldClass('subject')} name="subject" value={values.subject} onChange={handleChange} placeholder={t.subjectPlaceholder} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined}/>{errors.subject && <span className="field-error-text" id="subject-error">{errors.subject}</span>}</div>
        <div className="field-wrap"><label htmlFor="contact-message">{t.message} *</label><textarea id="contact-message" className={fieldClass('message')} name="message" value={values.message} onChange={handleChange} rows={5} placeholder={t.messagePlaceholder} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : 'message-hint'} required/>{errors.message ? <span className="field-error-text" id="message-error">{errors.message}</span> : <span className="field-help" id="message-hint">{t.messageHint}</span>}</div>
        {status.message && <div className={`form-status form-status-${status.type}`} role={status.type === 'error' ? 'alert' : 'status'} aria-live="polite">{status.type === 'success' ? <CheckCircle2 size={19}/> : <Mail size={19}/>}<p>{status.message}</p></div>}
        <div className="form-submit-row"><button className="button button-primary form-submit" type="submit" disabled={submitting}>{submitting ? t.sending : t.send}{submitting ? <span className="spinner"/> : <Send size={16}/>}</button><p>{t.requiredNote}</p></div>
      </form>
    </div></section></div>;
}

export function NotFoundPage({ message }) {
  const { t } = usePortfolio();
  return <div className="page-transition not-found-page"><div className="container not-found-card"><span className="not-found-code">404</span><Eyebrow>{t.notFound}</Eyebrow><h1>{message || t.notFound}</h1><p>{t.notFoundBody}</p><Link to="/home" className="button button-primary">{t.goHome}<ArrowUpRight size={17}/></Link></div></div>;
}

export { HeroPage, ProjectsPage, ProjectDetailPage, SkillsPage, AboutPage, ContactPage };
