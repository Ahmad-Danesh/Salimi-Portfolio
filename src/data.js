// Personalized portfolio data for Ahmad Danesh.
// Project descriptions are derived from public source files inspected on 13 Oct 2026.
// The WebP assets in public/images are original AI-generated illustrative concept covers, NOT genuine screenshots.
// Replace these covers with screenshots captured from each running app before final course submission.
export const profile = {
  name: 'Ahmad Danesh',
  initials: 'AD',
  role: {
    en: 'Student & Junior Front-End Developer',
    fa: 'محصل و توسعه‌دهندهٔ نوآموز فرانت‌اند',
  },
  location: {
    en: 'Herat, Afghanistan',
    fa: 'هرات، افغانستان',
  },
  introduction: {
    en: 'I am a student and junior front-end developer from Herat, Afghanistan. I am learning modern web development and practising HTML, CSS, JavaScript, and React by building small, practical projects.',
    fa: 'من محصل و توسعه‌دهندهٔ نوآموز فرانت‌اند از هرات افغانستان هستم. توسعهٔ وب را می‌آموزم و با ساخت پروژه‌های کوچک و عملی، HTML، CSS، JavaScript و React را تمرین می‌کنم.',
  },
  biography: {
    en: 'My learning journey is built around practice: writing code, testing how an interface behaves, reading errors, and improving step by step. I am especially interested in creating clear, responsive web interfaces and understanding the code behind them.',
    fa: 'مسیر یادگیری من بر تمرین عملی استوار است: کدنویسی، آزمایش رفتار رابط کاربری، بررسی خطاها و بهترساختن پروژه‌ها قدم‌به‌قدم. علاقه دارم رابط‌های وب واضح و واکنش‌گرا بسازم و منطق کد پشت هر بخش را بفهمم.',
  },
  goal: {
    en: 'My goal is to grow into a capable front-end developer by strengthening my foundations, completing more real projects, and learning to explain and maintain the code I write.',
    fa: 'هدفم این است که با تقویت پایه‌های برنامه‌نویسی، تکمیل پروژه‌های واقعی بیشتر و یادگیری توضیح و نگهداری کدی که می‌نویسم، به یک توسعه‌دهندهٔ توانمند فرانت‌اند تبدیل شوم.',
  },
  email: 'daneshsalimi845@gmail.com',
  github: 'https://github.com/Ahmad-Danesh',
  linkedin: '',
  resumeUrl: '',
};

export const projects = [
  {
    id: 'study-hub',
    title: 'StudyHub — Study Planner',
    titleFa: 'StudyHub — برنامه‌ریز مطالعه',
    category: 'React · JavaScript',
    description: {
      en: 'An interactive study planner. Add a subject and planned study hours, see the number of subjects and total/average hours, and remove a subject from the current list.',
      fa: 'یک برنامه‌ریز تعاملی مطالعه است. مضمون و ساعت مطالعه را اضافه کن، تعداد مضمون‌ها و مجموع/میانگین ساعت‌ها را ببین و موردی را از فهرست حذف کن.',
    },
    value: {
      en: 'Source review confirms component state, event handlers, reusable form/list/summary components, and values derived from the current list. Data is held in React state and resets when the page reloads.',
      fa: 'بررسی کد، state در کامپوننت، event handlerها، کامپوننت‌های فرم/فهرست/خلاصه و محاسبهٔ مقادیر از فهرست فعلی را تأیید می‌کند. داده‌ها در React state هستند و پس از بارگذاری مجدد صفحه پاک می‌شوند.',
    },
    previewImage: '/images/study-hub.webp',
    imageAlt: 'Original AI-generated UI concept artwork for the StudyHub study planner; not a screenshot of the running app.',
    liveUrl: '',
    repoUrl: 'https://github.com/Ahmad-Danesh/Study-Hub-Tsk',
    tags: ['React', 'useState', 'Derived values', 'Reusable components'],
    status: 'preview-only',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow — Task List',
    titleFa: 'TaskFlow — فهرست وظایف',
    category: 'React · JavaScript',
    description: {
      en: 'A task-list app. Add a task, receive validation feedback when the input is blank, remove tasks, and watch the task count and empty state update as the list changes.',
      fa: 'یک برنامهٔ فهرست وظایف است. وظیفه اضافه کن، هنگام خالی بودن ورودی پیام اعتبارسنجی ببین، وظایف را حذف کن و تغییر تعداد یا حالت خالی فهرست را مشاهده کن.',
    },
    value: {
      en: 'Source review confirms useState, controlled input, event handlers, conditional rendering, and list rendering with map(). Tasks are stored in component state and are not persisted after refresh.',
      fa: 'بررسی کد، useState، ورودی کنترل‌شده، event handlerها، نمایش شرطی و نمایش فهرست با map() را تأیید می‌کند. وظایف در state ذخیره می‌شوند و بعد از تازه‌کردن صفحه باقی نمی‌مانند.',
    },
    previewImage: '/images/taskflow.webp',
    imageAlt: 'Original AI-generated UI concept artwork for the TaskFlow task list; not a screenshot of the running app.',
    liveUrl: '',
    repoUrl: 'https://github.com/Ahmad-Danesh/Listing-Tasks',
    tags: ['React', 'useState', 'Form validation', 'map()'],
    status: 'preview-only',
  },
  {
    id: 'mobile-app-filter',
    title: 'Mobile App Filter',
    titleFa: 'فیلتر اپلیکیشن‌های موبایل',
    category: 'React · JavaScript',
    description: {
      en: 'A sample app list with filters for All, Social, Entertainment, and Education. Selecting a category updates the visible apps and result count.',
      fa: 'یک فهرست نمونه از اپلیکیشن‌ها با فیلترهای همه، اجتماعی، سرگرمی و آموزش. انتخاب دسته، اپلیکیشن‌های قابل مشاهده و تعداد نتیجه‌ها را تغییر می‌دهد.',
    },
    value: {
      en: 'Practises useState, array.filter(), button click handlers, and rendering a selected list. The source currently maps list items without React key props, which should be corrected.',
      fa: 'تمرین useState، متد array.filter()، رویداد کلیک دکمه‌ها و نمایش فهرست انتخاب‌شده است. در کد منبع فعلی، برای موارد map شده key در React تعیین نشده و بهتر است اصلاح شود.',
    },
    previewImage: '/images/mobile-app-filter.webp',
    imageAlt: 'Original AI-generated UI concept artwork for the mobile app category filter; not a screenshot of the running app.',
    liveUrl: '',
    repoUrl: 'https://github.com/Ahmad-Danesh/React-1-Projects/tree/main/react-4-1',
    tags: ['React', 'useState', 'Array.filter()'],
    status: 'preview-only',
  },
  {
    id: 'food-filter',
    title: 'Food Filter',
    titleFa: 'فیلتر غذاها',
    category: 'React · JavaScript',
    description: {
      en: 'A small food list with category filters for Fast Food, Traditional, and Dessert, plus an All option and a displayed result count.',
      fa: 'یک فهرست سادهٔ غذا با فیلترهای فست‌فود، غذای سنتی و دسر؛ همراه با گزینهٔ نمایش همه و تعداد نتیجه‌های قابل مشاهده.',
    },
    value: {
      en: 'Practises filtering an array of objects and updating the list from selected category buttons. Each filter acts independently; this exercise does not combine filters.',
      fa: 'تمرین فیلترکردن آرایه‌ای از اشیا و به‌روزرسانی فهرست بر اساس دکمهٔ دستهٔ انتخاب‌شده است. هر فیلتر جداگانه عمل می‌کند و در این تمرین فیلترها با هم ترکیب نمی‌شوند.',
    },
    previewImage: '/images/food-filter.webp',
    imageAlt: 'Original AI-generated UI concept artwork for the food category filter; not a screenshot of the running app.',
    liveUrl: '',
    repoUrl: 'https://github.com/Ahmad-Danesh/React-1-Projects/tree/main/react-4-2',
    tags: ['React', 'useState', 'Filtering'],
    status: 'preview-only',
  },
  {
    id: 'football-player-filter',
    title: 'Football Player Filter',
    titleFa: 'فیلتر بازیکنان فوتبال',
    category: 'React · JavaScript',
    description: {
      en: 'Shows a sample list of football players and filters by position: Forward, Midfielder, Defender, or Goalkeeper. The result count changes with the selected filter.',
      fa: 'فهرست نمونه‌ای از بازیکنان فوتبال را نمایش می‌دهد و بر اساس پُست مهاجم، هافبک، مدافع یا دروازه‌بان فیلتر می‌کند. تعداد نتیجه‌ها با انتخاب فیلتر تغییر می‌کند.',
    },
    value: {
      en: 'Demonstrates event handlers, state-driven filtering, and rendering filtered objects. The source list items should receive stable key props to avoid React warnings.',
      fa: 'رویدادها، فیلترکردن وابسته به state و نمایش اشیای فیلترشده را نشان می‌دهد. برای جلوگیری از هشدار React، موارد فهرست در کد منبع باید key پایدار دریافت کنند.',
    },
    previewImage: '/images/football-player-filter.webp',
    imageAlt: 'Original AI-generated UI concept artwork for the football player filter; not a screenshot of the running app.',
    liveUrl: '',
    repoUrl: 'https://github.com/Ahmad-Danesh/React-1-Projects/tree/main/react-4-3',
    tags: ['React', 'useState', 'Array.filter()'],
    status: 'preview-only',
  },
  {
    id: 'study-resources-filter',
    title: 'Study Resources Filter',
    titleFa: 'فیلتر منابع آموزشی',
    category: 'React · JavaScript',
    description: {
      en: 'A sample list of learning resources with subject filters for Math, English, and Science and resource-type filters for Video, PDF, and Exercise.',
      fa: 'فهرستی از منابع آموزشی نمونه با فیلتر مضمون ریاضی، انگلیسی و علوم و فیلتر نوع منبع ویدیو، PDF و تمرین.',
    },
    value: {
      en: 'Practises filtering data by object properties and updating a result count. In the source, subject and type buttons each replace the current filtered list rather than combining both criteria.',
      fa: 'فیلترکردن داده‌ها بر اساس ویژگی‌های اشیا و به‌روزرسانی تعداد نتیجه‌ها را تمرین می‌دهد. در کد منبع، دکمه‌های مضمون و نوع منبع هریک فهرست فعلی را جایگزین می‌کنند و دو معیار هم‌زمان ترکیب نمی‌شوند.',
    },
    previewImage: '/images/study-resources-filter.webp',
    imageAlt: 'Original AI-generated UI concept artwork for the study resources filter; not a screenshot of the running app.',
    liveUrl: '',
    repoUrl: 'https://github.com/Ahmad-Danesh/React-1-Projects/tree/main/react-4-4',
    tags: ['React', 'useState', 'Multiple properties'],
    status: 'preview-only',
  },
  {
    id: 'student-grade-filter',
    title: 'Student Grade Filter',
    titleFa: 'فیلتر نمرهٔ شاگردان',
    category: 'React · JavaScript',
    description: {
      en: 'Displays sample students and filters them by grade A, B, or C, with an All option and an updated count of visible students.',
      fa: 'شاگردان نمونه را نمایش می‌دهد و بر اساس نمرهٔ A، B یا C فیلتر می‌کند؛ همراه با گزینهٔ نمایش همه و تعداد شاگردان قابل مشاهده.',
    },
    value: {
      en: 'Demonstrates state-driven filtering of objects and dynamic result rendering. The source currently omits key props on mapped list items, a useful React QA improvement to make.',
      fa: 'فیلترکردن اشیا با state و نمایش پویای نتیجه‌ها را نشان می‌دهد. در کد منبع فعلی key برای موارد map شده درج نشده است؛ این مورد را می‌توان در QA React اصلاح کرد.',
    },
    previewImage: '/images/student-grade-filter.webp',
    imageAlt: 'Original AI-generated UI concept artwork for the student grade filter; not a screenshot of the running app.',
    liveUrl: '',
    repoUrl: 'https://github.com/Ahmad-Danesh/React-1-Projects/tree/main/react-4-5',
    tags: ['React', 'useState', 'Filtering', 'map()'],
    status: 'preview-only',
  },
];

export const skillGroups = [
  {
    title: { en: 'Web foundations', fa: 'پایه‌های وب' },
    description: {
      en: 'Building page structure and visual styling for websites.',
      fa: 'ساختار صفحه‌ها و استایل بصری وب‌سایت‌ها.',
    },
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: { en: 'React', fa: 'React' },
    description: {
      en: 'Learning to build user interfaces from reusable components.',
      fa: 'یادگیری ساخت رابط کاربری با کامپوننت‌های قابل استفادهٔ مجدد.',
    },
    skills: ['React', 'useState', 'map()', 'Event handlers'],
  },
  {
    title: { en: 'Development tools', fa: 'ابزارهای توسعه' },
    description: {
      en: 'Tracking source code and working with repositories.',
      fa: 'مدیریت کد منبع و کار با مخزن‌های پروژه.',
    },
    skills: ['Git', 'GitHub'],
  },
];
