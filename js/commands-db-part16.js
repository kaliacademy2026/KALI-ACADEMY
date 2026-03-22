// ============================================================
// KALI ACADEMY - COMMANDS DATABASE PART 16
// 25 NEW UNIQUE COMMANDS - IDs 1511-1535
// ============================================================
window.CMD_PART16 = [
  {
    id: 1511,
    name: 'kerbrute',
    cat: 'password',
    level: 'intermediate',
    syntax: 'kerbrute userenum -d <domain> <wordlist>',
    short: 'تعداد مستخدمي Kerberos وكشف حسابات صالحة',
    desc: 'أداة Go سريعة لتعداد أسماء مستخدمي Active Directory عبر بروتوكول Kerberos بدون قفل الحسابات.',
    options: [
      { flag: 'userenum', desc: 'تعداد المستخدمين الصالحين' },
      { flag: 'bruteuser', desc: 'brute force على مستخدم محدد' },
      { flag: '-d <domain>', desc: 'اسم النطاق' },
      { flag: '--dc <ip>', desc: 'عنوان Domain Controller' }
    ],
    examples: [
      { cmd: 'kerbrute userenum -d domain.local users.txt --dc 192.168.1.10', desc: 'تعداد المستخدمين' },
      { cmd: 'kerbrute bruteuser -d domain.local -u admin rockyou.txt', desc: 'brute force مستخدم محدد' }
    ],
    tips: 'kerbrute لا يقفل الحسابات لأنه يستخدم طلبات pre-auth فاشلة.',
    related: ['crackmapexec', 'kerberoasting', 'bloodhound']
  },
  {
    id: 1512,
    name: 'rubeus',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'Rubeus.exe <command>',
    short: 'مجموعة أدوات Kerberos لـ Windows',
    desc: 'مجموعة C# متخصصة في عمليات Kerberos مثل Kerberoasting وAS-REP وPass-the-Ticket.',
    options: [
      { flag: 'kerberoast', desc: 'Kerberoasting' },
      { flag: 'asreproast', desc: 'AS-REP Roasting' },
      { flag: 'ptt', desc: 'Pass-the-Ticket' },
      { flag: 'dump', desc: 'تفريغ تذاكر Kerberos' }
    ],
    examples: [
      { cmd: 'Rubeus.exe kerberoast /outfile:hashes.txt', desc: 'Kerberoasting' },
      { cmd: 'Rubeus.exe asreproast /user:targetuser', desc: 'AS-REP Roasting' }
    ],
    tips: 'Rubeus يعمل من الذاكرة ويدعم over-pass-the-hash.',
    related: ['mimikatz', 'impacket-secretsdump', 'bloodhound']
  },
  {
    id: 1513,
    name: 'certipy',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'certipy <command> [options]',
    short: 'هجمات Active Directory Certificate Services',
    desc: 'أداة لاستغلال ثغرات ADCS (Active Directory Certificate Services) للحصول على صلاحيات.',
    options: [
      { flag: 'find', desc: 'البحث عن templates ضعيفة' },
      { flag: 'req', desc: 'طلب شهادة' },
      { flag: 'auth', desc: 'المصادقة بالشهادة' }
    ],
    examples: [
      { cmd: 'certipy find -u user@domain.local -p password', desc: 'البحث عن ADCS templates' },
      { cmd: 'certipy req -u user@domain.local -p pass -ca CA-SERVER', desc: 'طلب شهادة' }
    ],
    tips: 'ESC1-ESC8 هي أنواع الضعف الرئيسية في ADCS.',
    related: ['bloodhound', 'rubeus', 'crackmapexec']
  },
  {
    id: 1514,
    name: 'seatbelt',
    cat: 'privesc',
    level: 'advanced',
    syntax: 'Seatbelt.exe <command>',
    short: 'تعداد شامل لبيئة Windows',
    desc: 'أداة C# لجمع معلومات أمنية شاملة عن بيئة Windows للـ post-exploitation.',
    options: [
      { flag: '-group=all', desc: 'تشغيل كل الفحوصات' },
      { flag: '-group=system', desc: 'فحوصات النظام' },
      { flag: '-group=user', desc: 'فحوصات المستخدم' }
    ],
    examples: [
      { cmd: 'Seatbelt.exe -group=all', desc: 'فحص شامل' },
      { cmd: 'Seatbelt.exe ChromiumPresence SlackPresence', desc: 'فحص تطبيقات محددة' }
    ],
    tips: 'Seatbelt يجمع بيانات CredFiles وDPAPI وAutorun.',
    related: ['winpeas', 'bloodhound', 'powerview']
  },
  {
    id: 1515,
    name: 'mitm6',
    cat: 'network',
    level: 'advanced',
    syntax: 'mitm6 -d <domain>',
    short: 'هجوم IPv6 MitM على شبكات Windows',
    desc: 'يستغل الـ Default IPv6 Configuration في Windows لاختطاف DNS وتنفيذ relay attacks.',
    options: [
      { flag: '-d <domain>', desc: 'النطاق المستهدف' },
      { flag: '-i <interface>', desc: 'واجهة الشبكة' },
      { flag: '--ignore-nofqdn', desc: 'تجاهل الأجهزة بدون FQDN' }
    ],
    examples: [
      { cmd: 'mitm6 -d domain.local', desc: 'تشغيل MitM6' },
      { cmd: 'ntlmrelayx.py -6 -t ldaps://dc01.domain.local', desc: 'ربطه مع ntlmrelayx' }
    ],
    tips: 'ادمج mitm6 مع ntlmrelayx للحصول على حسابات AD عبر IPv6.',
    related: ['ntlmrelayx', 'responder', 'impacket-secretsdump']
  },
  {
    id: 1516,
    name: 'bloodyad',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'bloodyAD [options] <command>',
    short: 'هجمات Active Directory المتقدمة',
    desc: 'أداة لتنفيذ هجمات AD مثل تغيير كلمات المرور وإضافة للمجموعات وإنشاء حسابات.',
    options: [
      { flag: '-d <domain>', desc: 'اسم النطاق' },
      { flag: '-u <user>', desc: 'المستخدم' },
      { flag: '-p <pass>', desc: 'كلمة المرور' }
    ],
    examples: [
      { cmd: 'bloodyAD -d domain.local -u admin -p pass addGroupMember "Domain Admins" user1', desc: 'إضافة لـ Domain Admins' },
      { cmd: 'bloodyAD --host dc.domain.local setAttr users targetuser userAccountControl 512', desc: 'تفعيل حساب' }
    ],
    tips: 'bloodyAD يعمل بدون impacket في بعض العمليات.',
    related: ['crackmapexec', 'bloodhound', 'powerview']
  },
  {
    id: 1517,
    name: 'covenant',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'dotnet run',
    short: 'إطار C2 متعدد المستخدمين',
    desc: 'منصة Command and Control مبنية على .NET تدعم التشغيل التعاوني لفريق Red Team.',
    options: [],
    examples: [
      { cmd: 'dotnet run', desc: 'تشغيل Covenant' },
      { cmd: 'https://localhost:7443', desc: 'واجهة الويب' }
    ],
    tips: 'Covenant يدعم إنشاء Grunts (agents) متعددي الأنواع.',
    related: ['metasploit', 'cobalt-strike', 'empire']
  },
  {
    id: 1518,
    name: 'caido',
    cat: 'web',
    level: 'intermediate',
    syntax: 'caido',
    short: 'بديل حديث لـ Burp Suite مكتوب بـ Rust',
    desc: 'أداة حديثة لاختبار أمان الويب مكتوبة بـ Rust توفر proxy وfuzzing وتشغيل سريع.',
    options: [],
    examples: [
      { cmd: 'caido', desc: 'تشغيل Caido' }
    ],
    tips: 'Caido أسرع من Burp Suite في الـ fuzzing بفضل Rust.',
    related: ['burpsuite', 'zaproxy', 'mitmproxy']
  },
  {
    id: 1519,
    name: 'trivy',
    cat: 'system',
    level: 'intermediate',
    syntax: 'trivy <target> [options]',
    short: 'فحص ثغرات حاويات Docker والبنية التحتية',
    desc: 'ماسح ثغرات شامل لحاويات Docker وصور الحاويات وملفات IaC.',
    options: [
      { flag: 'image <img>', desc: 'فحص صورة Docker' },
      { flag: 'fs <path>', desc: 'فحص نظام ملفات' },
      { flag: '--severity HIGH,CRITICAL', desc: 'عرض الثغرات الخطيرة فقط' }
    ],
    examples: [
      { cmd: 'trivy image nginx:latest', desc: 'فحص صورة Docker' },
      { cmd: 'trivy fs --security-checks vuln,config .', desc: 'فحص مجلد المشروع' }
    ],
    tips: 'ادمج trivy في CI/CD pipeline لفحص الصور تلقائياً.',
    related: ['docker-security', 'snyk', 'docker']
  },
  {
    id: 1520,
    name: 'trufflehog',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'trufflehog <source> [options]',
    short: 'اكتشاف أسرار وبيانات اعتماد في الكود',
    desc: 'يبحث في repositories Git وغيرها عن API keys وكلمات مرور وأسرار مكشوفة.',
    options: [
      { flag: 'git', desc: 'فحص Git repository' },
      { flag: 'github', desc: 'فحص GitHub repos' },
      { flag: '--only-verified', desc: 'إظهار الأسرار المتحقق منها فقط' }
    ],
    examples: [
      { cmd: 'trufflehog git https://github.com/org/repo', desc: 'فحص GitHub repo' },
      { cmd: 'trufflehog filesystem --path=/home/user/project', desc: 'فحص مجلد محلي' }
    ],
    tips: 'trufflehog يتحقق من صحة الأسرار المكتشفة تلقائياً.',
    related: ['git-secrets', 'gitleaks', 'secretfinder']
  },
  {
    id: 1521,
    name: 'gitleaks',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'gitleaks detect [options]',
    short: 'كشف تسريبات الأسرار في Git',
    desc: 'أداة للكشف عن كلمات المرور وAPI keys والرموز المميزة في repositories Git.',
    options: [
      { flag: 'detect', desc: 'وضع الكشف' },
      { flag: '--source <path>', desc: 'مسار المصدر' },
      { flag: '-v', desc: 'وضع verbose' }
    ],
    examples: [
      { cmd: 'gitleaks detect --source .', desc: 'فحص الـ repo الحالي' },
      { cmd: 'gitleaks detect --source . --log-opts="--all"', desc: 'فحص كل التاريخ' }
    ],
    tips: 'ادمج gitleaks مع pre-commit hooks لمنع التسريب.',
    related: ['trufflehog', 'git-secrets', 'detect-secrets']
  },
  {
    id: 1522,
    name: 'git-secrets',
    cat: 'recon',
    level: 'beginner',
    syntax: 'git secrets [options]',
    short: 'منع التزام أسرار في Git',
    desc: 'أداة AWS لمنع التزام كلمات المرور والأسرار في repositories Git.',
    options: [
      { flag: '--install', desc: 'تثبيت hooks في الـ repo' },
      { flag: '--scan', desc: 'فحص الـ repo' },
      { flag: '--add-provider', desc: 'إضافة مزود أنماط' }
    ],
    examples: [
      { cmd: 'git secrets --install', desc: 'تثبيت في الـ repo الحالي' },
      { cmd: 'git secrets --scan', desc: 'فحص كل الملفات' }
    ],
    tips: 'استخدم git-secrets مع trufflehog للحماية الشاملة.',
    related: ['gitleaks', 'trufflehog', 'detect-secrets']
  },
  {
    id: 1523,
    name: 'scoutsuite',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'scout suite <provider> [options]',
    short: 'تدقيق أمني متعدد السحابات',
    desc: 'أداة تدقيق أمني مفتوحة المصدر تدعم AWS وAzure وGCP وغيرها.',
    options: [
      { flag: 'aws', desc: 'فحص AWS' },
      { flag: 'azure', desc: 'فحص Azure' },
      { flag: 'gcp', desc: 'فحص GCP' }
    ],
    examples: [
      { cmd: 'scout suite aws', desc: 'تدقيق AWS account' },
      { cmd: 'scout suite azure --tenant <id>', desc: 'تدقيق Azure tenant' }
    ],
    tips: 'ScoutSuite يولد تقريراً HTML شاملاً عن المخاطر.',
    related: ['pacu', 'prowler', 'aws-cli']
  },
  {
    id: 1524,
    name: 'pacu',
    cat: 'exploit',
    level: 'advanced',
    syntax: 'pacu',
    short: 'إطار اختبار اختراق AWS',
    desc: 'إطار اختبار اختراق متخصص في Amazon Web Services يوفر وحدات متعددة للاستغلال.',
    options: [],
    examples: [
      { cmd: 'pacu', desc: 'تشغيل Pacu' },
      { cmd: 'run iam__enum_users_roles_policies', desc: 'تعداد IAM entities' }
    ],
    tips: 'Pacu يتعقب الإجراءات المنفذة لكتابة تقارير Red Team.',
    related: ['scoutsuite', 'aws-cli', 'cloud-enum']
  },
  {
    id: 1525,
    name: 'cloud-enum',
    cat: 'recon',
    level: 'intermediate',
    syntax: 'cloud_enum -k <keyword>',
    short: 'تعداد موارد السحابة العامة',
    desc: 'يبحث عن موارد AWS وGCP وAzure الخاصة بمنظمة معينة باستخدام كلمات مفتاحية.',
    options: [
      { flag: '-k <keyword>', desc: 'الكلمة المفتاحية' },
      { flag: '-kf <file>', desc: 'ملف كلمات مفتاحية' }
    ],
    examples: [
      { cmd: 'cloud_enum -k targetcompany', desc: 'بحث عن موارد الشركة' },
      { cmd: 'cloud_enum -kf keywords.txt', desc: 'بحث بقائمة كلمات' }
    ],
    tips: 'cloud_enum يكشف عن S3 buckets وBlob storage العامة.',
    related: ['scoutsuite', 'pacu', 'aws-cli']
  },
  {
    id: 1526,
    name: 'prowler',
    cat: 'system',
    level: 'intermediate',
    syntax: 'prowler [provider] [options]',
    short: 'أداة تدقيق أمني لـ AWS',
    desc: 'أداة تدقيق AWS مفتوحة المصدر تفحص أكثر من 500 فحص أمني.',
    options: [
      { flag: 'aws', desc: 'فحص AWS' },
      { flag: '-c <check>', desc: 'فحص محدد' },
      { flag: '-g <group>', desc: 'مجموعة فحوصات' }
    ],
    examples: [
      { cmd: 'prowler aws', desc: 'تشغيل كل فحوصات AWS' },
      { cmd: 'prowler aws -c check111', desc: 'تشغيل فحص محدد' }
    ],
    tips: 'Prowler يدعم CIS Benchmark و PCI DSS وغيرها.',
    related: ['scoutsuite', 'aws-cli', 'cloud-enum']
  },
  {
    id: 1527,
    name: 'ipmitool',
    cat: 'network',
    level: 'advanced',
    syntax: 'ipmitool -H <host> -U <user> -P <pass> <command>',
    short: 'إدارة واستغلال IPMI',
    desc: 'أداة للتفاعل مع Intelligent Platform Management Interface (IPMI) والكشف عن ثغراته.',
    options: [
      { flag: '-H <host>', desc: 'عنوان الجهاز' },
      { flag: '-U <user>', desc: 'اسم المستخدم' },
      { flag: '-P <pass>', desc: 'كلمة المرور' },
      { flag: 'user list', desc: 'سرد المستخدمين' }
    ],
    examples: [
      { cmd: 'ipmitool -H 192.168.1.100 -U admin -P admin user list', desc: 'سرد مستخدمي IPMI' },
      { cmd: 'ipmitool -H 192.168.1.100 -U admin -P "" user list', desc: 'محاولة بدون كلمة مرور' }
    ],
    tips: 'Cipher 0 يتيح المصادقة بدون كلمة مرور على IPMI القديم.',
    related: ['nmap', 'metasploit', 'onesixtyone']
  },
  {
    id: 1528,
    name: 'onesixtyone',
    cat: 'network',
    level: 'beginner',
    syntax: 'onesixtyone [options] <host>',
    short: 'ماسح SNMP سريع',
    desc: 'ماسح SNMP سريع للكشف عن community strings وتعداد معلومات الأجهزة.',
    options: [
      { flag: '-c <file>', desc: 'ملف community strings' },
      { flag: '-i <file>', desc: 'ملف عناوين IP' }
    ],
    examples: [
      { cmd: 'onesixtyone 192.168.1.100 public', desc: 'فحص community string' },
      { cmd: 'onesixtyone -c /usr/share/doc/onesixtyone/dict.txt 192.168.1.0/24', desc: 'فحص شبكة' }
    ],
    tips: 'SNMP v1/v2c بدون تشفير - community string "public" شائع جداً.',
    related: ['snmpwalk', 'nmap', 'metasploit']
  },
  {
    id: 1529,
    name: 'nbtscan',
    cat: 'network',
    level: 'beginner',
    syntax: 'nbtscan <target>',
    short: 'مسح أسماء NetBIOS على الشبكة',
    desc: 'يبحث عن أسماء NetBIOS وعناوين MAC على الشبكة المحلية.',
    options: [
      { flag: '-r', desc: 'استخدام منفذ المصدر 137' },
      { flag: '-q', desc: 'وضع الهدوء' },
      { flag: '-s', desc: 'فصل الحقول بفاصلة' }
    ],
    examples: [
      { cmd: 'nbtscan 192.168.1.0/24', desc: 'مسح الشبكة المحلية' },
      { cmd: 'nbtscan -r 192.168.1.100', desc: 'فحص جهاز محدد' }
    ],
    tips: 'NetBIOS يعمل على المنفذ 137/UDP - مفيد في بيئات Windows.',
    related: ['smbclient', 'enum4linux', 'nmap']
  },
  {
    id: 1530,
    name: 'smtp-user-enum',
    cat: 'network',
    level: 'intermediate',
    syntax: 'smtp-user-enum -M <mode> -U <wordlist> -t <host>',
    short: 'تعداد مستخدمي خادم البريد SMTP',
    desc: 'يعدد المستخدمين الصالحين على خوادم SMTP عبر VRFY وEXPN وRCPT.',
    options: [
      { flag: '-M VRFY', desc: 'استخدام أمر VRFY' },
      { flag: '-M RCPT', desc: 'استخدام RCPT TO' },
      { flag: '-U <file>', desc: 'قائمة المستخدمين' },
      { flag: '-t <host>', desc: 'الخادم المستهدف' }
    ],
    examples: [
      { cmd: 'smtp-user-enum -M VRFY -U users.txt -t 192.168.1.100', desc: 'تعداد بـ VRFY' },
      { cmd: 'smtp-user-enum -M RCPT -U /usr/share/wordlists/users.txt -t mail.target.com', desc: 'تعداد بـ RCPT' }
    ],
    tips: 'VRFY قد يكون معطلاً - جرب RCPT بدلاً منه.',
    related: ['nmap', 'metasploit', 'swaks']
  },
  {
    id: 1531,
    name: 'swaks',
    cat: 'network',
    level: 'intermediate',
    syntax: 'swaks --to <email> --from <email> --server <smtp>',
    short: 'اختبار بروتوكول SMTP',
    desc: 'Swiss Army Knife لـ SMTP يتيح إرسال رسائل اختبارية وفحص بروتوكول البريد.',
    options: [
      { flag: '--to <email>', desc: 'المستلم' },
      { flag: '--from <email>', desc: 'المرسل' },
      { flag: '--server <host>', desc: 'خادم SMTP' },
      { flag: '--auth LOGIN', desc: 'مصادقة LOGIN' }
    ],
    examples: [
      { cmd: 'swaks --to victim@target.com --from admin@attacker.com --server 192.168.1.100', desc: 'إرسال بريد اختباري' },
      { cmd: 'swaks --to user@target.com --server smtp.target.com --auth LOGIN --auth-user admin', desc: 'اختبار مصادقة' }
    ],
    tips: 'swaks مفيد لاختبار email spoofing واستعراض SPF.',
    related: ['smtp-user-enum', 'nmap', 'social-engineer-toolkit']
  },
  {
    id: 1532,
    name: 'davtest',
    cat: 'web',
    level: 'intermediate',
    syntax: 'davtest -url <url>',
    short: 'اختبار إمكانية رفع الملفات عبر WebDAV',
    desc: 'يختبر ما إذا كان الخادم يدعم WebDAV ويسمح برفع ملفات قابلة للتنفيذ.',
    options: [
      { flag: '-url <url>', desc: 'الرابط المستهدف' },
      { flag: '-auth <user:pass>', desc: 'بيانات المصادقة' },
      { flag: '-uploadfile <file>', desc: 'ملف للرفع' }
    ],
    examples: [
      { cmd: 'davtest -url http://target.com/webdav/', desc: 'فحص WebDAV' },
      { cmd: 'davtest -url http://target.com/dav/ -auth user:pass', desc: 'فحص مع مصادقة' }
    ],
    tips: 'WebDAV مفتوح مع رفع PHP يعني RCE مباشر.',
    related: ['cadaver', 'nikto', 'metasploit']
  },
  {
    id: 1533,
    name: 'cadaver',
    cat: 'web',
    level: 'intermediate',
    syntax: 'cadaver <url>',
    short: 'عميل WebDAV لسطر الأوامر',
    desc: 'عميل WebDAV يتيح إدارة الملفات على خوادم WebDAV من سطر الأوامر.',
    options: [],
    examples: [
      { cmd: 'cadaver http://target.com/webdav/', desc: 'الاتصال بـ WebDAV' },
      { cmd: 'put shell.php', desc: 'رفع ملف (داخل cadaver)' }
    ],
    tips: 'بعد رفع shell.php عبر cadaver، يمكن تنفيذه عبر المتصفح.',
    related: ['davtest', 'curl', 'nikto']
  },
  {
    id: 1534,
    name: 'wapiti',
    cat: 'web',
    level: 'intermediate',
    syntax: 'wapiti -u <url> [options]',
    short: 'ماسح ثغرات تطبيقات ويب',
    desc: 'ماسح ثغرات ويب مفتوح المصدر يكشف SQLi وXSS وXXE وغيرها.',
    options: [
      { flag: '-u <url>', desc: 'الرابط المستهدف' },
      { flag: '-m <modules>', desc: 'وحدات الفحص' },
      { flag: '-f <format>', desc: 'صيغة التقرير (html, json)' }
    ],
    examples: [
      { cmd: 'wapiti -u http://target.com', desc: 'فحص شامل' },
      { cmd: 'wapiti -u http://target.com -m sql,xss -f html -o report/', desc: 'فحص محدد مع تقرير' }
    ],
    tips: 'wapiti يدعم المصادقة وملفات الارتباط.',
    related: ['nikto', 'zaproxy', 'nuclei']
  },
  {
    id: 1535,
    name: 'finger',
    cat: 'recon',
    level: 'beginner',
    syntax: 'finger [user]@<host>',
    short: 'الاستعلام عن معلومات المستخدمين عبر finger protocol',
    desc: 'يستعلم عن معلومات المستخدمين على الأجهزة التي تشغل خدمة finger (المنفذ 79).',
    options: [],
    examples: [
      { cmd: 'finger @target.com', desc: 'سرد المستخدمين المتصلين' },
      { cmd: 'finger root@target.com', desc: 'معلومات مستخدم محدد' }
    ],
    tips: 'خدمة finger قديمة لكنها تكشف معلومات حساسة في الأنظمة القديمة.',
    related: ['nmap', 'smtp-user-enum', 'recon-ng']
  }
];
