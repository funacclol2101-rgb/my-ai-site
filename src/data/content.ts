import { ServiceGroupItem, ServiceComboPackage, ProjectCaseStudy, Testimonial, ProcessStep } from '../types';

export const USD_TO_VND_RATE = 25000;

export const SERVICE_GROUPS: ServiceGroupItem[] = [
  {
    id: 'dinh-huong',
    order: '01',
    name: '1. Đánh giá và định hướng Marketing',
    shortName: 'Đánh giá & Định hướng',
    scope: 'Khảo sát hoạt động Marketing hiện tại; phân tích khách hàng mục tiêu, đối thủ cạnh tranh và các kênh truyền thông; xác định 1-2 vấn đề cần ưu tiên cải thiện.',
    deliverables: 'Báo cáo đánh giá phân tích SWOT cơ bản; đề xuất 2-3 hướng cải thiện và lộ trình ưu tiên.',
    deliverableBullets: [
      'Báo cáo đánh giá phân tích SWOT cơ bản',
      'Đề xuất 2–3 hướng cải thiện trọng tâm',
      'Lộ trình và thứ tự ưu tiên hành động'
    ],
    priceVndRange: '2 – 4 triệu',
    priceUsdRange: '$80 – $160',
    unitVnd: '/ dự án',
    unitUsd: '/ project',
    minVnd: 2000000,
    maxVnd: 4000000,
    minUsd: 80,
    maxUsd: 160,
  },
  {
    id: 'lap-ke-hoach',
    order: '02',
    name: '2. Lập kế hoạch Marketing',
    shortName: 'Lập kế hoạch Marketing',
    scope: 'Xác định mục tiêu, phân khúc khách hàng, thông điệp truyền thông; lựa chọn kênh triển khai, phân bổ ngân sách và xây dựng KPI.',
    deliverables: 'Marketing Plan cho 1–3 tháng; kế hoạch nội dung theo tháng; timeline triển khai; bảng ngân sách và KPI.',
    deliverableBullets: [
      'Marketing Plan chi tiết cho 1–3 tháng',
      'Kế hoạch nội dung theo từng tháng',
      'Timeline tiến độ triển khai thực tế',
      'Bảng phân bổ ngân sách & chỉ số KPI cam kết'
    ],
    priceVndRange: '4 – 7 triệu',
    priceUsdRange: '$160 – $280',
    unitVnd: '/ kế hoạch',
    unitUsd: '/ plan',
    minVnd: 4000000,
    maxVnd: 7000000,
    minUsd: 160,
    maxUsd: 280,
  },
  {
    id: 'content-social',
    order: '03',
    name: '3. Content và Social Media',
    shortName: 'Content & Social Media',
    highlighted: true,
    scope: 'Xây dựng ý tưởng, lịch đăng; sản xuất nội dung và quản lý 1–2 kênh Facebook, TikTok hoặc Instagram; theo dõi tương tác cơ bản.',
    deliverables: 'Content Plan gồm 8–10 bài đăng/tháng kèm hình ảnh thiết kế; có thể thay thế một phần bằng 2–4 video ngắn theo gói và báo cáo cuối tháng.',
    deliverableBullets: [
      'Content Plan gồm 8–10 bài đăng/tháng chuẩn SEO',
      'Hình ảnh thiết kế đồng bộ nhận diện thương hiệu',
      'Có thể thay thế một phần bằng 2–4 video ngắn (Reels/TikTok)',
      'Quản lý 1–2 kênh mạng xã hội & báo cáo cuối tháng'
    ],
    priceVndRange: '5 – 8 triệu',
    priceUsdRange: '$200 – $320',
    unitVnd: '/ tháng',
    unitUsd: '/ month',
    minVnd: 5000000,
    maxVnd: 8000000,
    minUsd: 200,
    maxUsd: 320,
  },
  {
    id: 'digital-marketing',
    order: '04',
    name: '4. Digital Marketing',
    shortName: 'Digital Ads & Vận hành',
    scope: 'Tư vấn lựa chọn nền tảng quảng cáo; thiết lập chiến dịch trên Meta hoặc TikTok; xác định đối tượng, theo dõi và tối ưu hiệu quả quảng cáo.',
    deliverables: 'Kế hoạch quảng cáo; thiết lập và quản lý 1–2 chiến dịch/tháng; báo cáo hiệu quả theo các chỉ số.',
    deliverableBullets: [
      'Kế hoạch chiến dịch quảng cáo đa tầng',
      'Thiết lập & quản lý 1–2 chiến dịch/tháng trên Meta/TikTok',
      'Nghiên cứu tệp khách hàng mục tiêu & A/B testing',
      'Báo cáo hiệu quả chi phí và tỷ lệ chuyển đổi định kỳ'
    ],
    priceVndRange: '4 – 7 triệu',
    priceUsdRange: '$160 – $280',
    unitVnd: '/ tháng',
    unitUsd: '/ month',
    minVnd: 4000000,
    maxVnd: 7000000,
    minUsd: 160,
    maxUsd: 280,
  },
  {
    id: 'do-luong',
    order: '05',
    name: '5. Đo lường và cải thiện',
    shortName: 'Đo lường & Cải thiện',
    scope: 'Thu thập dữ liệu từ các kênh Marketing; phân tích mức độ đạt KPI; đánh giá nội dung, hiệu quả quảng cáo và đề xuất điều chỉnh.',
    deliverables: 'Bảng báo cáo tổng hợp KPI; phân tích các vấn đề và đề xuất 2-3 giải pháp cải thiện.',
    deliverableBullets: [
      'Bảng báo cáo tổng hợp chỉ số KPI thực tế',
      'Phân tích sâu các vấn đề và điểm nghẽn chuyển đổi',
      'Đề xuất 2–3 giải pháp tối ưu và tinh chỉnh chiến lược'
    ],
    priceVndRange: '2 – 3 triệu',
    priceUsdRange: '$80 – $120',
    unitVnd: '/ dự án',
    unitUsd: '/ project',
    minVnd: 2000000,
    maxVnd: 3000000,
    minUsd: 80,
    maxUsd: 120,
  }
];

export const COMBO_PACKAGES: ServiceComboPackage[] = [
  {
    id: 'combo-starter',
    name: 'GÓI KHỞI ĐẦU CHIẾN LƯỢC',
    badge: 'ĐỊNH HƯỚNG',
    idealFor: 'Dành cho doanh nghiệp cần khảo sát hiện trạng và chuẩn hóa kế hoạch bài bản trước khi chi ngân sách.',
    priceVndDisplay: '6 – 10 triệu',
    priceUsdDisplay: '$240 – $400',
    unit: '/ gói (1 lần)',
    includedServices: ['1. Đánh giá & định hướng', '2. Lập kế hoạch Marketing'],
    features: [
      'Khảo sát toàn diện kênh và đối thủ cạnh tranh',
      'Báo cáo phân tích SWOT & xác định 1-2 vấn đề cốt lõi',
      'Marketing Plan chi tiết cho 1–3 tháng tiếp theo',
      'Lập timeline triển khai & bảng ngân sách - KPI rõ ràng'
    ],
    ctaText: 'Đăng ký gói khởi đầu'
  },
  {
    id: 'combo-growth',
    name: 'GÓI VẬN HÀNH TĂNG TRƯỞNG',
    badge: 'PHỔ BIẾN NHẤT',
    highlighted: true,
    idealFor: 'Tối ưu độ phủ thương hiệu và thu hút khách hàng mới qua nội dung sáng tạo và quảng cáo số.',
    priceVndDisplay: '9 – 14 triệu',
    priceUsdDisplay: '$360 – $560',
    unit: '/ tháng',
    includedServices: ['3. Content & Social Media', '4. Digital Marketing'],
    features: [
      'Quản lý 1–2 kênh Facebook / TikTok / Instagram',
      '8–10 bài đăng/tháng hoặc thay thế 2–4 video ngắn (Reels)',
      'Thiết kế hình ảnh đồng bộ nhận diện thương hiệu',
      'Thiết lập & tối ưu 1–2 chiến dịch quảng cáo Meta/TikTok',
      'Báo cáo chỉ số chuyển đổi hàng tuần & cuối tháng'
    ],
    ctaText: 'Bắt đầu tăng trưởng'
  },
  {
    id: 'combo-full',
    name: 'GÓI ĐỒNG HÀNH TOÀN DIỆN',
    badge: 'TRỌN GÓI 5 NHÓM',
    idealFor: 'Giải pháp phòng Marketing thuê ngoài trọn gói từ A đến Z, tối ưu chi phí và cam kết hiệu quả.',
    priceVndDisplay: '16 – 26 triệu',
    priceUsdDisplay: '$640 – $1.040',
    unit: '/ tháng',
    includedServices: ['Tất cả 5 nhóm dịch vụ: 01, 02, 03, 04, 05'],
    features: [
      'Đầy đủ cả 5 nhóm: Đánh giá + Lập kế hoạch + Content + Ads + Đo lường',
      'Tiết kiệm 15–20% so với đăng ký riêng lẻ từng hạng mục',
      'Họp chiến lược định kỳ 1:1 cùng chuyên gia cấp cao TDC',
      'Bàn giao 100% tài nguyên sáng tạo và báo cáo đo lường KPI minh bạch'
    ],
    ctaText: 'Nhận tư vấn trọn gói'
  }
];

export const PORTFOLIO_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'maison-and-co',
    number: 'DỰ ÁN 01',
    title: 'Maison & Co. — Tái Định Vị & Tiếp Thị Bán Lẻ',
    client: 'Maison & Co. Retail & E-Commerce',
    aspect: 'portrait',
    categories: ['Tái định vị', 'Social Media', 'Meta Ads'],
    resultMetric: '+85%',
    resultLabel: 'Khách hàng tiềm năng & Tăng 2.1x tỷ lệ quay lại',
    summary: 'Chuyển đổi hình ảnh thương hiệu bán lẻ thời trang từ mờ nhạt sang phong cách editorial sang trọng, tối ưu chi phí quảng cáo và xây dựng cộng đồng người mua trung thành.',
    image: '/src/assets/images/project_maison_editorial_1793614204975.jpg',
    challenge: 'Maison & Co. sở hữu sản phẩm chất lượng cao nhưng hình ảnh truyền thông thiếu tính thống nhất, chi phí quảng cáo tăng cao do nội dung không chạm đúng gu khách hàng cao cấp.',
    solution: 'TDC tái cấu trúc toàn diện bảng màu thị giác, xây dựng concept "The Autumn Lookbook", triển khai chuỗi bài viết giải pháp phối đồ và kết hợp Meta Ads tập trung vào tệp khách hàng yêu thích lối sống tối giản.',
    fullDeliverables: [
      'Bộ nhận diện truyền thông số (Social Brand Guidelines)',
      '16 bài đăng lookbook và 6 Reels định dạng điện ảnh',
      'Chiến dịch quảng cáo phễu chuyển đổi trên Instagram & Facebook',
      'Mẫu Stories hàng ngày tương tác cao'
    ],
    founderQuote: {
      text: 'Hợp tác cùng TDC đã thay đổi hoàn toàn diện mạo truyền thông của chúng tôi. Đội ngũ không chỉ đăng bài cho đủ số lượng, mà thực sự mang lại sự trưởng thành về mặt hình ảnh và sự nhất quán giúp khách hàng tin tưởng thương hiệu.',
      author: 'Mai Linh',
      role: 'Nhà sáng lập, Maison & Co.'
    }
  },
  {
    id: 'letoile-ceramics',
    number: 'DỰ ÁN 02',
    title: "L'Étoile Fine Ceramics — Quảng Cáo Chuyển Đổi",
    client: "L'Étoile Studio",
    aspect: 'square',
    categories: ['Quảng cáo chuyển đổi', 'Visual Storytelling'],
    resultMetric: '4.2x ROAS',
    resultLabel: 'Tỷ suất hoàn vốn quảng cáo trong 90 ngày',
    summary: 'Khai thác vẻ đẹp tĩnh lặng của gốm thủ công qua các thước phim macro và hình ảnh tĩnh, chuyển đổi khách hàng yêu nghệ thuật thành đơn hàng thực tế.',
    image: '/src/assets/images/project_ceramics_still_1793614204757.jpg',
    challenge: 'Sản phẩm gốm nghệ thuật có giá trị đơn hàng cao (AOV lớn), khách hàng thường đắn đo thời gian dài trước khi đưa ra quyết định mua hàng online.',
    solution: 'TDC xây dựng chuỗi nội dung giải thích quá trình nhào nặn đất sét, men tráng thủ công kết hợp chiến dịch retargeting tinh tế mang tính chiêm nghiệm hơn là ép uổng mua hàng.',
    fullDeliverables: [
      'Bộ ảnh sản phẩm chụp trong ánh sáng tự nhiên',
      'Chiến dịch phễu khách hàng Retargeting 3 tầng',
      'Trang đích giới thiệu bộ sưu tập giới hạn (Limited Drop)',
      'Bản tin email marketing nghệ thuật gửi khách VIP'
    ],
    founderQuote: {
      text: 'TDC thấu hiểu tinh thần của người làm nghệ nhân. Quảng cáo của họ không tạo cảm giác thương mại thô kệch, mà nâng niu giá trị sản phẩm để khách hàng tự nguyện tìm đến.',
      author: 'Tuấn Khang',
      role: 'Nghệ nhân & Đồng sáng lập L’Étoile'
    }
  },
  {
    id: 'botanist-lab',
    number: 'DỰ ÁN 03',
    title: 'The Botanist Lab — Sản Xuất Reels & Visual Đột Phá',
    client: 'The Botanist Lab Skincare',
    aspect: 'square',
    categories: ['Sản xuất Reels', 'Nhiếp ảnh sản phẩm', 'TikTok Growth'],
    resultMetric: '120.000+',
    resultLabel: 'Lượt xem tự nhiên không qua quảng cáo trả phí',
    summary: 'Xây dựng chuỗi video ngắn giáo dục khoa học dưỡng da với hình ảnh tinh sạch, minh bạch thành phần, thúc đẩy tương tác lan tỏa tự nhiên.',
    image: '/src/assets/images/project_botanist_visual_1793614220836.jpg',
    challenge: 'Thị trường mỹ phẩm thiên nhiên có quá nhiều thông điệp thổi phồng, khách hàng trẻ hoài nghi các nội dung tiếp thị truyền thống.',
    solution: 'Định vị thương hiệu là "phòng thí nghiệm thảo mộc trung thực", quay cận cảnh giọt serum, lá thảo mộc trên phiến đá travertine với âm thanh ASMR thư thái.',
    fullDeliverables: [
      '12 video Reels/TikTok chất lượng 4K',
      'Kịch bản phân tích thành phần khoa học dễ hiểu',
      'Hệ thống bìa bài đăng đồng bộ trên Instagram Grid',
      'Bộ công cụ trả lời tự động tin nhắn tư vấn làn da'
    ],
    founderQuote: {
      text: 'Những thước phim TDC sản xuất làm khách hàng xem đi xem lại nhiều lần. Số lượng đơn nhắn hỏi tư vấn tăng gấp ba chỉ sau 2 tuần phát hành chuỗi video.',
      author: 'Phương Thảo',
      role: 'Managing Director, The Botanist Lab'
    }
  },
  {
    id: 'annam-heritage',
    number: 'DỰ ÁN 04',
    title: 'An Nam Heritage — Chiến Dịch Ra Mắt Đa Kênh',
    client: 'An Nam Heritage Crafts & Textiles',
    aspect: 'portrait',
    categories: ['Chiến dịch ra mắt', 'Đồng bộ nhận diện', 'PR & Omnichannel'],
    resultMetric: 'Chuẩn hóa 100%',
    resultLabel: 'Hệ thống nhận diện điểm chạm đa kênh & Bán hết BST 01',
    summary: 'Đưa di sản sơn mài và dệt lụa truyền thống Việt Nam đến với thế hệ tinh hoa trẻ thông qua ngôn ngữ thị giác đương đại và chiến dịch ra mắt đồng bộ.',
    image: '/src/assets/images/project_annam_heritage_1793614221107.jpg',
    challenge: 'Thương hiệu muốn thoát khỏi định kiến đồ thủ công mỹ nghệ xưa cũ, mong muốn vươn tới phân khúc quà tặng doanh nghiệp và người sưu tập trẻ.',
    solution: 'TDC thiết lập bộ nhận diện kết hợp chữ khắc thanh thoát và bố cục không gian bảo tàng hiện đại, xây dựng chiến dịch "Bản sắc đương thời" trên 3 kênh chính.',
    fullDeliverables: [
      'Sách hướng dẫn thương hiệu và giọng điệu ngôn từ',
      'Trang giới thiệu sản phẩm tương tác cao',
      'Tài liệu bán hàng (Lookbook PDF & Profile gửi đối tác B2B)',
      'Kế hoạch ra mắt sản phẩm 45 ngày trên Meta & LinkedIn'
    ],
    founderQuote: {
      text: 'TDC đã giúp chúng tôi chứng minh rằng nghề thủ công Việt Nam hoàn toàn có thể bước vào không gian đương đại một cách tự hào và kiêu hãnh.',
      author: 'Hoàng Nam',
      role: 'Sáng lập viên, An Nam Heritage'
    }
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'ĐÁNH GIÁ & ĐỊNH HƯỚNG',
    description: 'Phân tích hiện trạng thương hiệu, bóc tách điểm nghẽn chuyển đổi và xác định tệp khách hàng hạt nhân cùng các chỉ số KPIs rõ ràng.',
    deliverables: [
      'Khảo sát hiện trạng kênh và đối thủ cạnh tranh',
      'Định vị trụ cột nội dung (Content Pillars)',
      'Bảng chỉ số đo lường hiệu quả (KPIs) cam kết'
    ]
  },
  {
    step: '02',
    title: 'SÁNG TẠO & TRIỂN KHAI',
    description: 'Sản xuất hình ảnh, video và câu chữ chỉn chu theo chuẩn nhận diện. Lên lịch đăng bài đúng tiến độ và tối ưu theo thuật toán mới nhất.',
    deliverables: [
      'Lịch xuất bản nội dung chi tiết theo tháng',
      'Thiết kế đồ họa độc bản & dựng video ngắn chất lượng cao',
      'Kiểm duyệt và tinh chỉnh trước ngày lên sóng'
    ]
  },
  {
    step: '03',
    title: 'ĐO LƯỜNG & TỐI ƯU',
    description: 'Báo cáo số liệu minh bạch hàng tháng, tinh chỉnh chiến lược dựa trên dữ liệu thực tế và mở rộng quy mô tăng trưởng bền vững.',
    deliverables: [
      'Bảng báo cáo phân tích số liệu trực quan',
      'Buổi họp đánh giá định kỳ 1:1 cùng chuyên gia',
      'Đề xuất thử nghiệm nội dung mới cho chu kỳ tiếp theo'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Hợp tác cùng TDC đã thay đổi hoàn toàn diện mạo truyền thông của chúng tôi. Đội ngũ không chỉ đăng bài cho đủ số lượng, mà thực sự mang lại sự trưởng thành về mặt hình ảnh và sự nhất quán giúp khách hàng tin tưởng thương hiệu.',
    author: 'Mai Linh',
    role: 'Nhà sáng lập',
    company: 'Maison & Co. (Thương hiệu Bán lẻ & E-Commerce)',
    metric: '+85% Khách hàng tiềm năng'
  },
  {
    id: 'test-2',
    quote: 'Điều tôi đánh giá cao nhất ở TDC là sự thực chiến và kỷ luật. Không có những bản kế hoạch viển vông, mọi hạng mục đều rõ ràng về mặt đầu việc, ngân sách và thời hạn bàn giao.',
    author: 'Trần Vũ Hoàng',
    role: 'Giám đốc Điều hành',
    company: 'Kanso Living & Home Décor',
    metric: '3.8x Lợi nhuận đầu tư'
  },
  {
    id: 'test-3',
    quote: 'Phong cách Warm Editorial của TDC mang lại chất riêng không thể trộn lẫn. Các thước phim Reels do TDC dựng không chỉ đẹp mà còn truyền tải được trọn vẹn cái hồn của quán trà chúng tôi.',
    author: 'Lê Thảo My',
    role: 'Chủ sáng lập',
    company: 'Komorebi Tea House',
    metric: '100% Khách ấn tượng'
  }
];
