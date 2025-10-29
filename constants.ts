
export const navLinks = [
  { id: 'about', title: '회사소개' },
  { id: 'solutions', title: '솔루션' },
  { id: 'technologies', title: '핵심기술' },
  { id: 'references', title: '구축사례' },
  { id: 'insights', title: 'AI인사이트' },
  { id: 'certifications', title: '인증' },
  { id: 'faq', title: 'FAQ' },
];

export const faqData = [
  {
    question: 'GEO(생성형 엔진 최적화)란 무엇이고, 기존 SEO와 어떻게 다른가요?',
    answer: 'GEO(Generative Engine Optimization)는 사용자가 생성형 AI(Gemini, ChatGPT 등)에게 질문했을 때, AI가 답변을 생성하는 과정에서 우리 웹사이트의 정보를 우선적으로 인용하고 출처로 활용하도록 최적화하는 전략입니다.\n기존 SEO(검색 엔진 최적화)가 검색 결과 \'목록\'에서 상위 노출을 목표로 한다면, GEO는 AI가 생성하는 \'답변\'의 내용 자체가 되는 것을 목표로 한다는 점에서 근본적인 차이가 있습니다. 즉, AI 시대의 새로운 정보 소비 방식에 맞춘 차세대 최적화 전략입니다.',
  },
  {
    question: 'RAG(검색 증강 생성) 기술은 LLM의 한계를 어떻게 보완하나요?',
    answer: 'RAG(Retrieval-Augmented Generation)는 대규모 언어 모델(LLM)이 답변을 생성할 때, 신뢰할 수 있는 외부 지식 베이스(예: 기업 내부 문서, 최신 데이터베이스)를 실시간으로 참조하게 하는 기술입니다.\n이를 통해 LLM이 잘못된 정보를 생성하는 \'환각(Hallucination)\' 현상을 크게 줄일 수 있습니다. 또한, 최신 정보를 반영하지 못하는 LLM의 한계를 극복하고, 답변의 출처를 명확히 제시하여 정보의 신뢰도를 극대화하는 핵심적인 역할을 합니다.',
  },
  {
    question: '오상테크놀로지의 AI 솔루션은 어떤 산업에 적용될 수 있나요?',
    answer: '오상테크놀로지는 특정 산업에 국한되지 않는 범용적인 AI 기술력과 다양한 산업별 도메인 지식을 결합하여 맞춤형 솔루션을 제공합니다. 주요 적용 산업 분야는 다음과 같습니다.\n의료: AI Medical CMS, 환자 맞춤형 챗봇\n커머스: AI CRM, O2O/D2C 통합 플랫폼\n공공: RAG 기반 민원 응대 시스템, 내부 지식 검색\n금융: 금융 상품 추천, 내부 컴플라이언스 강화',
  },
  {
    question: 'AI 솔루션 도입 시 가장 중요하게 고려해야 할 점은 무엇인가요?',
    answer: '성공적인 AI 솔루션 도입을 위해서는 다음 세 가지를 필수적으로 고려해야 합니다.\n첫째, 명확한 비즈니스 목표 설정입니다. AI를 통해 해결하고자 하는 구체적인 문제를 정의해야 합니다. 둘째, 데이터의 품질과 확보입니다. AI 모델의 성능은 학습 데이터의 질에 따라 결정됩니다. 마지막으로, 보안 및 규정 준수입니다. 특히 개인정보나 민감 데이터를 다룰 경우, 데이터 보호 규정을 철저히 준수하는 것이 매우 중요합니다.',
  },
];

export const aboutData = {
    description: "오상테크놀로지는 병원, 공공기관, 커머스, 금융 등 다양한 산업에 맞춤형 AI·LLM 솔루션을 제공하는 디지털 혁신 파트너입니다.",
    strengths: [
        { 
            title: "Cloud Expertise", 
            text: "AWS·Google·Microsoft 클라우드 기반 AI 솔루션 구축 경험",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
        },
        { 
            title: "Integration Technology", 
            text: "O2O/CRM/LLM Integration 기술 보유",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
        },
        { 
            title: "Certified Company", 
            text: "INNO-BIZ, 벤처기업, ISO9001 등 다수 인증 보유",
            image: "https://cdn.prod.website-files.com/642a5b996b19ef947a85c52c/65eff5127779bfe83300c754_abbe-sublett-nxZDMUQhN4o-unsplash-p-3200.jpg"
        }
    ],
    timeline: [
        {
            year: "2015",
            events: [
                { text: "솔루션개발 전담연구팀 설립 " },
                { text: "클라우드 기반 OSE-Commerce 1.0 플랫폼 개발" }
            ]
        },
        {
            year: "2018",
            events: [
                { text: "벤처기업 인증 및 O2O 플랫폼 출시" },
                { text: "데이터 분석팀 신설, AI 솔루션 R&D 착수" },
            ]
        },
        {
            year: "2021",
            events: [
                { text: "AI CRM 솔루션 개발 착수, INNO-BIZ 인증" },
                { text: "AWS 파트너 네트워크(APN) 등록", highlight: true },
                { text: "머신러닝 기반 '고객 이탈 예측' 모델 개발 성공" }
            ]
        },
        {
            year: "2023",
            events: [
                { text: "LLM 기반 Medical CMS 및 RAG 시스템 상용화", highlight: true },
                { text: "Google Cloud Partner Advantage 프로그램 참여" },
                { text: "'Vector + Graph RAG' 아키텍처 특허 출원" }
            ]
        },
        {
            year: "2024",
            events: [
                { text: "생성형 AI(Generative AI) 사업부 출범", highlight: true },
                { text: "'OSE-GEO(Generative Engine Optimization)' 솔루션 출시" },
                { text: "ISO 27001(정보보안체계), ISO 27017,27018(CLOUD정보관리체계) 인증" }
            ]
        }
    ]
};

export const solutions = [
    {
        icon: "ShoppingCart",
        title: "OSE-O2O/D2C AI Commerce Suite",
        subtitle: "AI 커머스 스위트",
        description: "온·오프라인 비즈니스를 통합하고 AI 기반 분석을 통해 구매 전환율을 극대화하는 차세대 커머스 솔루션입니다.",
        features: [
            { icon: "ShoppingCart", title: "통합 상거래 자동화", text: "온·오프라인 주문, 재고, 고객 데이터를 실시간으로 연동하여 운영 효율을 극대화합니다." },
            { icon: "Users", title: "AI 고객 행동 분석", text: "고객의 구매 패턴과 행동 데이터를 분석하여 개인화된 상품을 추천하고 타겟 마케팅을 지원합니다." },
            { icon: "Zap", title: "API 연동 확장성", text: "다양한 외부 서비스(결제, 배송, 마케팅)와 유연한 API 연동이 가능합니다." },
            { icon: "LayoutDashboard", title: "실시간 대시보드", text: "매출, 재고, 고객 유입 데이터를 실시간으로 시각화하여 빠른 의사결정을 돕습니다." },
        ],
        image: "https://picsum.photos/seed/commerce/600/400",
        showcase: {
            title: "AI 개인화 추천 대시보드",
            description: "실시간 고객 행동 분석을 통해 구매 전환율을 15% 향상시킨 AI 추천 엔진의 성과입니다.",
            chartData: [
                { name: '일반 상품', "전환율(%)": 4.5 },
                { name: 'AI 추천 상품', "전환율(%)": 19.5 },
            ]
        },
        architecture: {
            title: "AI Commerce Architecture",
            steps: [
                { icon: "Database", title: "데이터 수집", description: "온/오프라인 사용자 행동 및 구매 데이터 통합" },
                { icon: "BrainCircuit", title: "AI 분석 엔진", description: "실시간 고객 세분화 및 상품 추천 모델링" },
                { icon: "Cloud", title: "클라우드 플랫폼", description: "대용량 트래픽을 처리하는 확장 가능한 인프라" },
                { icon: "AppWindow", title: "개인화 서비스 제공", description: "웹/앱 채널을 통해 맞춤형 상품 및 콘텐츠 노출" }
            ]
        }
    },
    {
        icon: "UserCheck",
        title: "OSE-AI CRM / Medical CRM",
        subtitle: "AI 고객관계관리",
        description: "AI를 활용하여 고객 및 환자 데이터를 심층 분석하고, 초개인화된 마케팅 및 서비스를 제공하여 고객 충성도를 높입니다.",
        features: [
            { icon: "UserCheck", title: "AI 기반 고객 분석", text: "고객/환자 데이터를 360도로 분석하여 LTV(생애 가치) 및 이탈 가능성을 예측합니다." },
            { icon: "Gift", title: "개인화 마케팅 자동화", text: "고객 그룹별로 최적화된 상품, 서비스, 콘텐츠를 자동으로 추천하고 캠페인을 실행합니다." },
            { icon: "TrendingUp", title: "AI 수요 예측", text: "과거 데이터와 시장 트렌드를 분석하여 미래의 수요를 예측하고 재고 및 리소스를 최적화합니다." },
            { icon: "ShieldCheck", title: "데이터 보안 및 관리", text: "민감한 고객 정보를 암호화하고 접근을 제어하여 안전하게 관리합니다." },
        ],
        image: "https://picsum.photos/seed/crm/600/400",
        showcase: {
            title: "고객 LTV 예측 및 이탈 방지",
            description: "AI 모델을 통해 LTV 상위 20% 고객 그룹을 식별하고, 이탈 예측 정확도를 92% 달성했습니다.",
            chartData: [
                { name: '1분기', "예측 정확도(%)": 85 },
                { name: '2분기', "예측 정확도(%)": 88 },
                { name: '3분기', "예측 정확도(%)": 92 },
                { name: '4분기', "예측 정확도(%)": 92.5 },
            ]
        },
        architecture: {
            title: "AI CRM Architecture",
            steps: [
                { icon: "Server", title: "내/외부 데이터 연동", description: "ERP, EMR, 커머스 등 다양한 시스템 데이터 통합" },
                { icon: "Filter", title: "데이터 전처리 및 정제", description: "머신러닝 모델 학습을 위한 데이터 클렌징" },
                { icon: "BrainCircuit", title: "AI 예측 및 분석 모델", description: "LTV, 이탈 가능성, 구매 예측 모델링" },
                { icon: "Target", title: "초개인화 액션", description: "분석 결과를 기반으로 마케팅 자동화 및 서비스 제공" }
            ]
        }
    },
    {
        icon: "Stethoscope",
        title: "OSE-Medical CMS & AI Health Secretary",
        subtitle: "AI 의료 콘텐츠/비서",
        description: "의료기관을 위한 LLM 통합 콘텐츠 관리 시스템으로, 환자에게 맞춤형 정보를 제공하고 의료진의 업무 효율을 향상시킵니다.",
        features: [
            { icon: "FileText", title: "LLM 통합 CMS", text: "의료 전문 데이터를 학습한 LLM을 통해 정확하고 신뢰도 높은 콘텐츠를 생성하고 관리합니다." },
            { icon: "Bot", title: "24/7 AI 의료 정보 챗봇", text: "환자의 질문에 24시간 응대하며, 진료 예약 및 맞춤형 건강 정보를 제공합니다." },
            { icon: "Stethoscope", title: "환자 맞춤형 콘텐츠 추천", text: "환자의 진료 기록과 상태에 따라 필요한 건강 정보와 콘텐츠를 맞춤 제공합니다." },
            { icon: "Lock", title: "연합 학습(FIM) 기반 보안", text: "민감한 의료 데이터를 외부로 노출하지 않고 AI 모델을 학습시켜 보안을 강화합니다." },
        ],
        image: "https://picsum.photos/seed/medical/600/400",
        showcase: {
            title: "AI 챗봇을 통한 업무 효율 개선",
            description: "단순 반복 문의에 대한 AI 챗봇 응대율 85%를 달성하여 의료진의 업무 부담을 20% 경감했습니다.",
            chartData: [
                { name: '전화 문의', "업무 부담(%)": 100 },
                { name: 'AI 챗봇 도입 후', "업무 부담(%)": 80 },
            ]
        },
        architecture: {
            title: "AI Medical CMS Architecture",
            steps: [
                { icon: "Database", title: "EMR 및 의료 데이터", description: "환자 진료 기록, 의료 정보 등 데이터 연동 (비식별화)" },
                { icon: "BrainCircuit", title: "의료 특화 LLM", description: "Fine-tuning된 LLM을 통한 정보 생성 및 질의응답" },
                { icon: "ShieldCheck", title: "보안 및 규정 준수", description: "HIPAA, GDPR 등 의료 데이터 규정 준수" },
                { icon: "MonitorSmartphone", title: "다채널 콘텐츠 제공", description: "환자 포털, 모바일 앱, 챗봇을 통해 정보 제공" }
            ]
        }
    },
    {
        icon: "BrainCircuit",
        title: "OSE-RAG Knowledge Hub",
        subtitle: "RAG 지식허브",
        description: "기업 내부의 방대한 데이터를 LLM과 결합하여, 임직원이 필요한 정보를 실시간으로 찾고 활용할 수 있는 지식 관리 솔루션입니다.",
        features: [
            { icon: "Search", title: "사내 지식 기반 질의응답", text: "내부 문서, 매뉴얼, 보고서 등 모든 데이터를 기반으로 정확한 답변을 제공합니다." },
            { icon: "Workflow", title: "업무 자동화 및 리포팅", text: "반복적인 정보 검색 및 요약, 보고서 초안 작성을 자동화하여 업무 효율을 높입니다." },
            { icon: "KeyRound", title: "보안 등급별 접근 제어", text: "사용자의 직급과 역할에 따라 정보 접근 권한을 제어하여 내부 정보 유출을 방지합니다." },
            { icon: "FileCode", title: "다양한 문서 포맷 지원", text: "PDF, DOCX, PPT, 웹페이지 등 다양한 형태의 비정형 데이터를 자동으로 학습하고 검색합니다." },
        ],
        image: "https://picsum.photos/seed/rag/600/400",
        showcase: {
            title: "내부 정보 검색 시간 단축",
            description: "RAG 도입 후 임직원의 정보 검색 시간이 평균 80% 단축되었으며, 답변 정확도는 95%를 달성했습니다.",
            chartData: [
                { name: '기존 검색', "소요 시간(분)": 15 },
                { name: 'RAG 기반 검색', "소요 시간(분)": 3 },
            ]
        },
        architecture: {
            title: "RAG Architecture",
            steps: [
                { icon: "FolderArchive", title: "내부 데이터 소스", description: "문서, DB, 웹사이트 등 사내 지식 자산" },
                { icon: "Sigma", title: "데이터 임베딩 및 인덱싱", description: "Vector DB에 데이터를 저장하고 검색 가능하게 변환" },
                { icon: "BrainCircuit", title: "LLM + RAG Orchestrator", description: "사용자 질문과 가장 관련 높은 정보를 결합하여 답변 생성" },
                { icon: "MessageSquare", title: "정확한 답변 제공", description: "출처가 명시된 신뢰도 높은 답변을 사용자에게 제공" }
            ]
        }
    }
];

export const keyTechnologies = [
    { title: "LLM Integration", description: "GPT, Gemini, Claude 등 최신 LLM을 활용한 분산처리 구조로 안정성과 효율성을 보장합니다." },
    { title: "RAG Architecture", description: "Vector DB와 Graph RAG 기술을 결합하여 더 정확하고 맥락에 맞는 답변을 생성합니다." },
    { title: "GEO (Generative Engine Optimization)", description: "AI가 생성한 콘텐츠가 검색 엔진과 LLM에 최적화되도록 하여 노출 효과를 극대화합니다." },
    { title: "Cloud Architecture", description: "AWS SageMaker, Google Vertex AI 등 주요 클라우드 플랫폼을 활용하여 확장성 높은 AI 인프라를 구축합니다." }
];

export const caseStudies = [
    {
        client: "서울대학교병원, 경희의료원, 이화여자대학의료원 외",
        industry: "의료",
        solution: "OSE-CMS · GEO 최적화",
        image: "https://cdn.docdocdoc.co.kr/news/photo/202508/3030774_3033533_1454.jpg",
        effects: [
            { name: '고객 만족도', value: 25 },
            { name: '비용 절감', value: 15 },
            { name: '운영 효율', value: 30 },
        ]
    },
    {
        client: "현대자동차 · 기아",
        industry: "커머스",
        solution: "O2O 커머스 플랫폼",
        image: "https://images.unsplash.com/photo-1634804658555-248d9e9a212f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    },
    {
        client: "펫타리움 · 트루골프",
        industry: "리테일",
        solution: "AI CRM · 리셀링 자동화",
        image: "https://images.unsplash.com/photo-1542744095-0d53267d353e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    },
    {
        client: "헌법재판소, 대법원, 한국임업진흥원, 외",
        industry: "공공",
        solution: "공공 포털 시스템",
        image: "https://postfiles.pstatic.net/MjAyMDA5MDhfMTcg/MDAxNTk5NTMwMjE4NDg5.SjgKxH9obsLpK7uJ1ZDMQIVTeho7yxP-s0X7fVTK6wYg.sTWHfSOdOMue_3xsbSQYqxbvMD-SvtUZh0IYEE-5I2cg.JPEG.mopaspr/ti324a10202.jpg?type=w773",
    },
    {
        client: "페퍼저축은행, 우리저축은행, 신한은행 외",
        industry: "금융",
        solution: "금융 포털 구축",
        image: "https://images.unsplash.com/photo-1645226880663-81561dcab0ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fCVFQSVCOCU4OCVFQyVCNXxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&q=60&w=800",
    },
    {
        client: "가톨릭중앙의료원, 강릉아산병원, 창원파티마 외",
        industry: "의료",
        solution: "NU/EMR 연계, Health Secretary",
        image: "https://cdn.outsourcing.co.kr/news/photo/202509/200816_51098_3631.png",
    }
];

export const insightData = {
    ragAnswer: {
        points: [
            { text: "환자 맞춤형 콘텐츠 추천 엔진 v2.0 도입", highlight: "정확도 15% 향상" },
            { text: "LLM 기반 챗봇 응답 속도", highlight: "30% 개선" },
            { text: "GEO 리포팅 시스템 연동으로 SEO 효율 자동 분석 기능 추가", highlight: null }
        ],
        references: [
            { name: "Q3_Update_Log.pdf" },
            { name: "GEO_Report_v1.2.docx" }
        ]
    },
    medicalCMS: {
        patient: {
            name: "김O연님",
            details: "40대, 여성",
            lastVisit: "내분비내과",
            engagementScore: 78
        },
        healthTrend: [
            { month: "Jan", level: 140 },
            { month: "Feb", level: 135 },
            { month: "Mar", level: 132 },
            { month: "Apr", level: 125 },
            { month: "May", level: 120 },
            { month: "Jun", level: 118 },
        ],
        recommendations: [
            { title: "갑상선 기능 저하증 관리 방법", category: "건강 정보" },
            { title: "건강한 식단을 위한 저염식 레시피", category: "식단" }
        ]
    },
    geoReport: {
        data: [
            { month: '1월', ctr: 2.5, ranking: 12 },
            { month: '2월', ctr: 2.8, ranking: 10 },
            { month: '3월', ctr: 3.5, ranking: 8 },
            { month: '4월', ctr: 4.2, ranking: 6 },
            { month: '5월', ctr: 5.1, ranking: 5 },
            { month: '6월', ctr: 5.8, ranking: 3 },
        ],
        kpis: {
            peakCTR: { value: "5.8%", change: "+3.3p" },
            rankingImprovement: { value: "9", change: "상승" }
        },
        aiSummary: {
            title: "AI 분석 요약",
            text: "AI 분석 결과, 6월에 'CTR'과 '노출 순위'가 동반 상승하며 최적의 성과를 보였습니다. 이는 '핵심 콘텐츠 A' 업데이트와 연관성이 높으며, 유사 전략을 다른 콘텐츠에 적용할 것을 권장합니다."
        }
    }
};

export const certifications = {
    certs: [
        { name: 'INNO-BIZ (기술혁신형 중소기업)', authority: '중소벤처기업부', year: '2021', icon: 'Star', highlight: true },
        { name: '벤처기업', authority: '기술보증기금', year: '2018', icon: 'Award', highlight: true },
        { name: '정보보호 관리체계 (ISMS)', authority: '한국인터넷진흥원', year: '2024', icon: 'Lock', highlight: true },
        { name: 'ISO 9001 (품질경영시스템)', authority: 'International Organization for Standardization', year: '2019', icon: 'ShieldCheck', highlight: false },
        { name: 'A+ 디자인 전문기업', authority: '한국디자인진흥원', year: '2020', icon: 'Palette', highlight: false },
        { name: '기업부설연구소 인정', authority: '한국산업기술진흥협회', year: '2022', icon: 'FlaskConical', highlight: false },
    ],
    software: [
        { name: 'OSE-O2O/B2B/B2C Platform v2.0', regNo: 'C-2022-012345' },
        { name: 'OSE-AI Medical CMS', regNo: 'C-2023-009876' },
        { name: 'OSE-RAG Knowledge Hub Engine', regNo: 'C-2023-054321' },
        { name: 'OSE-GEO (Generative Engine Optimization)', regNo: 'C-2024-011223' },
    ]
};

export const contactInfo = {
    companyName: "㈜오상테크놀로지 | Osang Technology Co., Ltd.",
    address: "서울 금천구 가산디지털2로 143, 가산어반워크 2차 1211~1214호",
    tel: "070-7772-7766",
    email: "osang@osangtech.co.kr",
    partners: [
        { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
        { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" }
    ]
};