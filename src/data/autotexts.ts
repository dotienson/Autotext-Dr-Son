export type AutotextCategory = "acute" | "specialty";

export interface AutotextItem {
  id: string;
  title: string;
  category: AutotextCategory;
  content: string;
}

export const autotexts: AutotextItem[] = [
  // Cấp tính
  {
    id: "sot-ngay-1",
    title: "Sốt ngày đầu",
    category: "acute",
    content:
      "Tư vấn: hiện trẻ sốt ngày thứ 1, bệnh có thể chưa xuất hiện đủ triệu chứng. Cần khám lại đúng hẹn, và khám lại ngay, nếu: sốt cao khó hạ, ho đờm tăng, khàn tiếng, chảy dãi, đau tai, thở nhanh liên tục (khoảng trên 50 lần/phút), khò khè liên tục, tiêu chảy, nôn mọi thứ, đau bụng, viêm kết mạc, co giật, li bì/quấy khóc, uống kém - tiểu giảm, nổi ban trên da, xuất huyết, da tái... Liên hệ Tổng đài khi cần hỗ trợ và tư vấn.",
  },
  {
    id: "cum",
    title: "Cúm",
    category: "acute",
    content:
      "Tư vấn cho gia đình về chăm sóc, theo dõi. Hướng dẫn theo dõi về biến chứng có thể gặp (mất nước, co giật, viêm phổi...), hiếm gặp (viêm não, viêm cơ tim, viêm phổi nặng...) cùng các dấu hiệu nặng cần khám lại ngay. Tư vấn về liệu pháp kháng virus (oseltamivir) (chỉ định, mục đích, cách pha, thuốc sau pha có thể pha thêm với đường, siro ngọt...). Ưu tiên cho bé uống nhiều sữa, nước hoa quả, orseol (chia nhỏ bữa)… Khám lại ngay nếu: sốt cao khó hạ, sốt cao liên tục, co giật, lơ mơ, ngủ nhiều, mệt nhiều kể cả khi hạ sốt, thở nhanh liên tục, khò khè liên tục, rút lõm lồng ngực, nôn nhiều, nôn dịch vàng xanh, tiêu chảy toé nước, nổi ban, hành vi bất thường, tím tái, da nổi vân tím, tiểu ít, run giật chân tay…  Tái khám lại sau: 2-3 ngày; Liên hệ Tổng đài ngay khi cần hỗ trợ, tư vấn.",
  },
  {
    id: "ho-hap",
    title: "Hô hấp",
    category: "acute",
    content:
      "Vệ sinh mũi họng tích cực (nhỏ/xịt – hút mũi). \nƯu tiên cho trẻ uống đủ, chia nhỏ bữa để uống được tốt hơn.\nKhám lại ngay nếu: sốt cao khó hạ, nôn nhiều, uống kém - tiểu ít, thở nhanh liên tục (khoảng trên 50 lần/phút), rút lõm lồng ngực, khò khè liên tục, tím quanh môi, đau tai, nổi ban trên da, tiêu chảy toé nước, li bì hoặc quấy vô cớ... Liên hệ Tổng đài khi cần hỗ trợ và tư vấn.",
  },
  {
    id: "sot-xuat-huyet",
    title: "Sốt xuất huyết",
    category: "acute",
    content:
      "Theo dõi cơn sốt, cho trẻ uống nhiều nước, oresol. Nếu trẻ: sốt cao khó hạ, li bì, co giật, đau bụng, nôn, chảy máu mũi hoặc chân răng, tiểu máu, đái ít, ho, khó thở, đau ngực... thì khám lại ngay! Khám lại sau 1 ngày.  Liên hệ Tổng đài khi cần hỗ trợ và tư vấn.",
  },
  {
    id: "tay-chan-mieng",
    title: "Tay chân miệng",
    category: "acute",
    content:
      "Đã phát tờ hướng dẫn chăm sóc và theo dõi Tay chân miệng. Cần theo dõi sát các dấu hiệu chuyển độ của bệnh. Ưu tiên cho trẻ uống đủ với đồ uống phù hợp đã được làm mát; tránh đồ cứng - nóng - nhiều gia vị.\nKhám lại sau 01 ngày.\nKhám lại ngay khi: sốt cao liên tục không thể hạ được, trẻ giật mình (kể cả khi nghi ngờ giật mình), mệt mỏi không chơi, ngủ nhiều, lơ mơ, ngủ gà, vã mồ hôi, lạnh toàn thân, thở nhanh, thở bất thường, run chi, run người, ngồi không vững / loạng choạng, nuốt sặc khi ăn uống. Liên hệ Tổng đài khi cần hỗ trợ và tư vấn.",
  },
  {
    id: "tieu-hoa",
    title: "Rối loạn tiêu hoá, tiêu chảy",
    category: "acute",
    content:
      "Khi được BS kê, ORESOL (Hydrite) pha đúng cách và uống đúng cách như hướng dẫn là loại thuốc quan trọng nhất trong đơn, gia đình cần tuân thủ tốt. Nước lọc, sữa, nước quả, nước dừa không thay thế được oresol. \nKhám lại ngay nếu: sốt cao khó hạ, nôn mọi thứ hoặc nôn ra dịch xanh, không uống được hoặc uống oresol rất kém, đau bụng cơn, bụng chướng, bí trung đại tiện, tiểu ít, phân nhày máu hoặc tóe nước, nổi ban, thở nhanh, ngủ li bì hoặc quấy khóc vô cớ… Liên hệ Tổng đài khi cần hỗ trợ và tư vấn.\nKhám lại sau: ",
  },
  {
    id: "than-kinh",
    title: "Thần kinh",
    category: "acute",
    content:
      "Gia đình cần theo dõi sát con, có người theo dõi trực tiếp (ví dụ: ngủ chung phòng và theo dõi sát). Khám lại ngay nếu: đau đầu dữ dội, đau đầu không đáp ứng thuốc giảm đau, nhìn mờ, nhìn đôi, chảy dãi, nuốt sặc, buồn nôn hoặc nôn, cứng gáy (cổ), yếu hoặc giảm vận động chân tay, li bì, quấy khóc vô cớ, hành vi lạ, sốt cao liên tục...   \nKhám lại sau 01 ngày. Liên hệ Tổng đài khi cần hỗ trợ và tư vấn.",
  },
  {
    id: "nhiem-lien-cau-khuan",
    title: "Nhiễm liên cầu khuẩn",
    category: "acute",
    content:
      "Trẻ được chẩn đoán Nhiễm liên cầu khuẩn, đã tư vấn về bệnh và nguy cơ biến chứng; Trẻ cần dùng đúng liều và đủ liệu trình kháng sinh (thường là 10 ngày với nhóm Amoxicillin-acid clavulanic); tái khám lại theo ngày hẹn và dùng đủ đợt kháng sinh. Các dấu hiệu cần khám lại ngay: sốt cao khó hạ, thở nhanh, khò khè liên tục, khàn tiếng, chảy dãi nhiều, sưng đau vùng cổ, nôn nhiều, da tái, mệt lả, uống kém - tiểu ít; tiêu chảy toé nước; tiểu đỏ/màu coca, phù chân phù mặt; sưng đau khớp... \nLiên hệ Tổng đài khi cần hỗ trợ và tư vấn. \nKhám lại sau 3 ngày đánh giá đáp ứng điều trị; và kế hoạch khám lại sau 1 tháng (đánh giá lâm sàng, xét nghiệm kiểm tra; trong đó có ASLO); ",
  },
  {
    id: "dau-bung",
    title: "Đau bụng",
    category: "acute",
    content:
      "Khám lại ngay nếu: sốt cao khó hạ, nôn mọi thứ hoặc nôn ra dịch xanh, không uống được hoặc uống oresol rất kém, đau bụng cơn, đau tăng, đau dữ dội, thay đổi vị trí đau bụng, bụng chướng, bí trung đại tiện, tiểu ít, phân nhày máu hoặc tóe nước, nổi ban, thở nhanh, đau đầu, ngủ li bì hoặc quấy khóc vô cớ, đau tức ngực, khó thở, tim đập nhanh, chân tay lạnh… \nKhám lại sau 01 ngày.\nLiên hệ Tổng đài khi cần hỗ trợ và tư vấn.",
  },
  {
    id: "viem-ket-mac",
    title: "Viêm kết mạc",
    category: "acute",
    content:
      "Trẻ cần được vệ sinh mắt đúng cách 3-5 lần/ngày; lau từ khoé mắt ra ngoài bằng bông y tế, dùng riêng cho mỗi bên mắt; Cha mẹ cần rửa tay sạch trước khi thao tác; dùng đúng, đủ, đúng thứ tự thuốc nhỏ mắt; Trẻ cần khám lại ngay nếu: mắt sưng nề, đỏ tấy tăng lên, vùng quanh mắt sưng nóng, đau nhức mắt/quấy dữ dội, sợ ánh sáng, tăng tiết ghèn mắt nhiều, sốt cao khó hạ, lừ đừ, bỏ ăn, mệt lả, thở nhanh, ho tăng, khò khè, tiêu chảy. Khám lại sau 02 ngày hoặc khi có dấu hiệu bất thường.",
  },
  {
    id: "ve-sinh-mui",
    title: "Vệ sinh mũi",
    category: "acute",
    content:
      "Cách vệ sinh mũi phù hợp: Nhỏ mũi, xịt mũi với nước muối sinh lý; sau đó hút sạch bằng dụng cụ hút thủ công bằng tay; ngày 3-6 lần;",
  },
  {
    id: "ve-sinh-mui-nang-cao",
    title: "Vệ sinh mũi nâng cao",
    category: "acute",
    content:
      "Cách vệ sinh mũi tích cực: Nhỏ Elossy (thuốc giảm ngạt) trước khi thao tác 5 phút; sau đó Nhỏ mũi, xịt mũi với nước muối sinh lý; sau đó hút sạch bằng dụng cụ hút thủ công bằng tay; sau đó mới xịt/nhỏ nước muối ưu trương hoặc thuốc kháng viêm (nếu có); ngày 3 lần, tránh áp dụng quá 5 ngày liên tiếp; ưu tiên trước giấc ngủ hoặc sau khi ngủ dậy;",
  },

  // Chuyên khoa
  {
    id: "beo-phi-co-ban",
    title: "Béo phì cơ bản",
    category: "specialty",
    content:
      "⚠ Lời khuyên về can thiệp dinh dưỡng - sinh hoạt cho trẻ:\n1. Dùng nước lọc như một đồ uống chính; không dùng đồ uống ngọt.\n2. Ăn sáng mỗi ngày; nên ăn tại nhà, khẩu phần ăn vừa đủ.\n3. Cho trẻ ăn cùng bữa ăn với gia đình và khi ăn không xem Tivi;\n Tỉ lệ thực phẩm trong 1 bữa ăn (50% rau); bổ sung bữa phụ lành mạnh\n4. Hạn chế ăn vặt – thay vào đó là đồ ăn có lợi cho sức khỏe;\n5. Dành ≥ 60 phút/ ngày hoạt động thể dục thể thao ĐỀU ĐẶN, vừa sức, an toàn;\n6. Giới hạn thời gian cho tất cả các hoạt động giải trí tĩnh (xem TV, điện thoại, máy tính bảng, máy tính…).",
  },
  {
    id: "beo-phi-chuyen-sau",
    title: "Béo phì chuyên sâu",
    category: "specialty",
    content:
      "* Chế độ ăn lành mạnh:\n Duy trì chế độ ăn phù hợp sở thích, vùng miền... nhưng lưu ý:\n- Ăn cùng gia đình, không ăn riêng, tập trung khi ăn, không xem điện thoại, TV\n- Không uống đồ ngọt, ưu tiên nước lọc và các đồ uống không calo\n- Giảm lượng ăn / mỗi bữa\n- Tỉ lệ: 50% rau, 25% tinh bột chậm, 25% đạm\n- Ăn nhiều rau, chất xơ (ăn đầu bữa)\n- Ưu tiên đồ luộc, nướng (không dầu), hấp thay cho đồ rán\n- Tránh ăn vặt, đồ ăn chế biến sẵn, nhiều dầu/mỡ/đường\n- Có bữa phụ lành mạnh (các quả nhiều nước)\n* Tích cực thể thao và giảm lối sống tĩnh:\n- Thể dục đều 60 phút/ ngày (có ra mồ hôi) và tập sức cơ 3 buổi/tuần\n- Giảm thời gian: TV, máy tính, điện thoại...: dưới 2h/ngày\n- Hoạt bát hơn (leo thang bộ, đi bộ/đạp xe đi học, chia làm việc nhà...)\n- Cả nhà đồng hành: không chê cười con, khen thưởng khi đạt mục tiêu\n* Tối ưu hóa giấc ngủ\n- Ngủ đủ - Ngủ sớm, đúng giờ, giữ nếp\n- Không xem TV, điện thoại... trước giờ ngủ",
  },
  {
    id: "chieu-cao-binh-thuong",
    title: "Chiều cao bình thường",
    category: "specialty",
    content:
      "Tư vấn về tình trạng sức khỏe, kết quả thăm khám, chỉ số chiều cao hiện tại (trong khoảng tham chiếu cho phép -2SD đến +2SD của Tổ chức Y tế thế giới). Hiện chưa can thiệp đặc biệt thêm, tư vấn về sinh hoạt - thể thao - giấc ngủ - bổ sung vitamin D - tránh căng thẳng.",
  },
  {
    id: "chuyen-tuyen-nhi-tw",
    title: "Chuyển tuyến đến BV Nhi TW",
    category: "specialty",
    content:
      "Tư vấn về tình trạng sức khỏe, kế hoạch & chi phí chẩn đoán - điều trị. Đề nghị và đồng thuận gia đình: chuyển tuyến theo Bảo hiểm y tế đến Bệnh viện Nhi Trung ương để chẩn đoán và điều trị. Chẩn đoán hiện tại: Theo dõi",
  },
  {
    id: "mon-an-gi-thap",
    title: "Món ăn GI thấp",
    category: "specialty",
    content:
      "Các thực phẩm có chỉ số đường máu (Glycemic Index thấp): Yến mạch, hạt diêm mạch, cơm gạo lứt, bắp ngô luộc, chuối, táo, mơ, cà chua, cam, cà rốt, sữa chua Hy Lạp, tất cả các loại rau xanh.... Tránh thực phẩm: đồ ăn nhanh, chiên rán, dầu mỡ, bánh mì, khoai tây, bí đỏ, mỡ động vật, bơ...",
  },
  {
    id: "day-thi-dung-tuoi",
    title: "Dậy thì đúng tuổi",
    category: "specialty",
    content:
      "Giải thích về tuổi dậy thì, tư vấn chăm sóc tại nhà (đồng hành - tâm lý, ngủ sớm, hạn chế dùng màn hình điện tử sau 21h, thể thao vừa sức đều đặn, hạn chế đồ chiên rán dầu mỡ nhiều đường).",
  },
  {
    id: "xet-nghiem-gen",
    title: "Xét nghiệm gen",
    category: "specialty",
    content:
      "Giải thích về chỉ định phân tích gen (mục đích, phương pháp, khả năng phát hiện bất thường, vai trò của kết quả xét nghiệm trong chẩn đoán - điều trị - tiên lượng và sàng lọc di truyền). Gia đình xin thảo luận thêm.",
  },
  {
    id: "tang-truong-theo-doi-tiep",
    title: "Tăng trưởng Theo dõi tiếp",
    category: "specialty",
    content:
      "Tư vấn về phương pháp can thiệp toàn diện, bổ sung vi chất và kế hoạch tái khám đánh giá lại tốc độ tăng trưởng chiều cao. Theo dõi chiều cao tại nhà mỗi 2 tháng.",
  },
  {
    id: "cushing-do-thuoc",
    title: "Cushing do thuốc",
    category: "specialty",
    content:
      "Giải thích về cơ chế, ảnh hưởng của Hội chứng Cushing do thuốc (suy vỏ thượng thận thứ phát). HẠN CHẾ dùng các thuốc có chứa corticoid [prednisolone, methylprednisolone, prednisone, fluocinolone, triamcinolone; beclomethasone, betamethasone, dexamethasone...] dưới dạng bôi, xịt, uống, tiêm, nhỏ mũi.",
  },
  {
    id: "day-thi-som-dieu-tri",
    title: "Dậy thì sớm – Điều trị",
    category: "specialty",
    content:
      "Đã tư vấn cho gia đình về liệu pháp ức chế dậy thì: mục đích, đường tiêm, loại thuốc, thời gian điều trị, tác dụng ngoại ý có thể có, các lo ngại thường gặp, chi phí, thủ tục bảo hiểm y tế. Hướng dẫn xin giấy chuyển viện theo tuyến BHYT để điều trị (nếu có nguyện vọng).",
  },
  {
    id: "day-thi-som-nam",
    title: "Dậy thì sớm (nam)",
    category: "specialty",
    content:
      "Đã giải thích kết quả khám, tư vấn về tình trạng và cách theo dõi. NẾU: đau đầu, buồn nôn, nhìn mờ, cao nhanh, dương vật tăng kích thước nhanh, tinh hoàn to nhanh, có ria mép, vỡ giọng, mụn trứng cá nhiều... thì khám lại NGAY.",
  },
  {
    id: "g6pd",
    title: "G6PD",
    category: "specialty",
    content:
      "Tư vấn và kèm tờ thông tin về thiếu men G6PD:\n1. Cung cấp thông tin chung (tỉ lệ, di truyền, ảnh hưởng...).\n2. Trẻ có thể có cơn tan máu sau: nhiễm trùng/virus, một số thuốc, hóa chất, thực phẩm (ĐẶC BIỆT LÀ đậu fava - có nhiều tên gọi khác nhau...).\n3. Đi viện ngay khi có dấu hiệu cơn tan máu.\n4. Trẻ có thể tiêm chủng bình thường theo lịch.\n5. Sàng lọc máu gót chân cho lần sinh sau.\n6. Khám lại tại PK Nội tiết (T2 - 6, trừ T7, CN, lễ) định kì mỗi 6 tháng.",
  },
  {
    id: "roi-loan-tieu-hoa-acid-uric",
    title: "Tăng acid uric máu",
    category: "specialty",
    content:
      "Can thiệp Dinh dưỡng. Tránh ăn nội tạng động vật, thịt đỏ, hải sản. Nên ăn chuối, táo, quả bơ, quả cherry, đậu phụ, đậu Hà Lan, hoa quả giàu vitamin C...",
  },
  {
    id: "viem-am-ho",
    title: "Viêm âm hộ",
    category: "specialty",
    content:
      "Không mặc quần / quần lót chật, bí, ẩm ướt. Tắm với nước ấm, không xà phòng, thấm khô bằng khăn mềm sau tắm. Hỗ trợ và hướng dẫn trẻ tắm và vệ sinh sau đại tiện đúng cách. Tẩy giun định kì 6 tháng/lần. Khám lại ngay nếu: tái phát , dịch mủ, dịch máu, đau bụng, sốt, ngứa rát nhiều, nghi ngờ dị vật âm đạo....",
  },
  {
    id: "vu-phi-dai",
    title: "Vú phì đại",
    category: "specialty",
    content:
      "Không sờ nắn, chích rạch... vào tuyến vú. Nếu: chiều cao tăng nhanh, đau bụng, vú to nhanh, ra nhầy ra máu âm đạo... khám lại ngay.",
  },
  {
    id: "test-kich-thich-gnrh",
    title: "Test kích thích GnRH",
    category: "specialty",
    content:
      "Giải thích kết quả hiện tại, cần thực hiện nghiệm pháp kích thích GnRH để chẩn đoán dậy thì sớm với Dipherelin 0,1mg: mục đích, nguy cơ có thể có (dị ứng - hiếm gặp), quy trình tiêm và lấy mẫu máu, kế hoạch sau khi có kết quả. Gia đình đồng ý thực hiện nghiệm pháp.",
  },
  {
    id: "dung-gh",
    title: "Dùng GH",
    category: "specialty",
    content:
      "Tư vấn về liệu pháp hóc-môn tăng trưởng (rhGH - somatotropin của người tái tổ hợp): chỉ định, mục đích, đường dùng, chi phí, quy định bảo hiểm y tế, tác dụng phụ có thể có, thời gian điều trị, kế hoạch đánh giá định kì.",
  },
  {
    id: "tu-van-wes",
    title: "Tư vấn WES",
    category: "specialty",
    content:
      "WES (Giải trình tự Toàn bộ Exome) tại Phòng Xét nghiệm Di truyền:\nĐã trao đổi về: Mục đích của chỉ định: chẩn đoán bệnh, xác định tổn thương có thể có, tiên lượng, theo dõi dài hạn khi biết đột biến gen gây bệnh; sàng lọc di truyền cho gia đình và bào thai sau; Khả năng phát hiện đột biến gây bệnh của phương pháp; Chi phí; Thời gian dự kiến có Kết quả và Quy trình Tư vấn Di truyền.",
  },
  {
    id: "toi-uu-tang-truong",
    title: "Tối ưu Tăng trưởng",
    category: "specialty",
    content:
      "TƯ VẤN VỀ CHẾ ĐỘ SINH HOẠT TỐI ƯU TĂNG TRƯỞNG:\n* Chế độ ăn lành mạnh:\n Duy trì chế độ ăn phù hợp sở thích, vùng miền... nhưng lưu ý:\n- Ăn cùng gia đình, không ăn riêng, tập trung khi ăn, không xem điện thoại, TV khi ăn\n- Không uống đồ ngọt, ưu tiên nước lọc và các đồ uống không calo\n- Ăn đủ theo lượng được hướng dẫn; đặc biệt cần đủ lượng đạm chất lượng cao (ưu tiên đạm động vật như trứng, thịt, cá) nếu không ăn chay hay dị ứng\n- Tỉ lệ bữa ăn: 50% rau xanh, 25% tinh bột chậm, 25% đạm\n- Ăn nhiều rau, chất xơ (ăn đầu bữa)\n- Ưu tiên đồ luộc, nướng (không dầu), hấp thay cho đồ rán\n- Tránh ăn vặt, đồ ăn chế biến sẵn, nhiều dầu/mỡ/đường\n- Có bữa phụ lành mạnh (các quả nhiều nước)\n* Tích cực thể thao và giảm lối sống tĩnh:\n- Lựa chọn môn thể thao yêu thích, an toàn, thực tiễn để duy trì thể dục đều trên 60 phút hàng ngày (có ra mồ hôi) và tập sức cơ 3 buổi/tuần\n- Giảm thời gian: TV, máy tính, điện thoại...: dưới 2h/ngày\n- Hoạt bát hơn (leo thang bộ, đi bộ/đạp xe đi học, chia làm việc nhà...)\n* Tối ưu hóa giấc ngủ\n- Ngủ đủ - Ngủ sớm trước 22h, đúng giờ, giữ nếp\n- Không xem TV, điện thoại... trước giờ ngủ\n* Tránh căng thẳng quá mức (học tập, áp lực ngoại hình)\n* Không tự ý bổ sung các thực phẩm chức năng, thuốc không theo chỉ định của nhân viên y tế\n* Đo chiều cao tại nhà đúng cách, mỗi 2 tháng; ghi lại\n* Tập ngồi đúng tư thế (tư thế học, tư thế đứng, bài tập bổ trợ)",
  },
];
