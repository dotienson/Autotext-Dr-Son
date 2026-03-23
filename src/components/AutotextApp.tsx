import React, { useState, useEffect } from "react";
import { Copy, CheckCircle2, Save, Lock, RefreshCcw } from "lucide-react";
import { autotexts } from "../data/autotexts";

export default function AutotextApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [passcodeError, setPasscodeError] = useState(false);

  const [selectedAcute, setSelectedAcute] = useState<string[]>([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string[]>([]);

  const [khamSangSom, setKhamSangSom] = useState(false);
  const [nhinAnSang, setNhinAnSang] = useState(false);
  const [datHenTruoc, setDatHenTruoc] = useState(false);

  const [khamLaiCapTinhLyDo, setKhamLaiCapTinhLyDo] = useState("");
  const [khamLaiCapTinhValue, setKhamLaiCapTinhValue] = useState("");
  const [khamLaiCapTinhUnit, setKhamLaiCapTinhUnit] = useState("ngày");

  const [khamLaiManTinhLyDo, setKhamLaiManTinhLyDo] = useState("");
  const [khamLaiManTinhValue, setKhamLaiManTinhValue] = useState("");
  const [khamLaiManTinhUnit, setKhamLaiManTinhUnit] = useState("tháng");

  const [tuVanKham, setTuVanKham] = useState("");
  const [ketQuaCho, setKetQuaCho] = useState("Không");

  const [editableText, setEditableText] = useState("");
  const [isEdited, setIsEdited] = useState(false);

  const [copied, setCopied] = useState(false);

  const [copiedDefaultExam, setCopiedDefaultExam] = useState(false);

  const acuteItems = autotexts
    .filter((item) => item.category === "acute")
    .sort((a, b) => a.title.localeCompare(b.title));
  const specialtyItems = autotexts
    .filter((item) => item.category === "specialty")
    .sort((a, b) => a.title.localeCompare(b.title));

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);

  useEffect(() => {
    const checkPasscode = (code: string) => {
      const lowerCode = code.toLowerCase();
      return lowerCode.endsWith("8") || lowerCode.endsWith("n");
    };

    if (
      checkPasscode(passcode) &&
      !isAuthenticated &&
      !isAuthenticating &&
      !authSuccess
    ) {
      handleSuccessfulAuth();
    }
  }, [passcode, isAuthenticated, isAuthenticating, authSuccess]);

  const handleSuccessfulAuth = () => {
    setIsAuthenticating(true);
    setPasscodeError(false);
    setTimeout(() => {
      setAuthSuccess(true);
      setTimeout(() => {
        setIsAuthenticated(true);
        setIsAuthenticating(false);
        setAuthSuccess(false);
      }, 1000);
    }, 1500);
  };

  // Auto-lock after 5 minutes of inactivity
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      if (isAuthenticated) {
        timeoutId = setTimeout(
          () => {
            setIsAuthenticated(false);
            setPasscode("");
          },
          5 * 60 * 1000,
        ); // 5 minutes
      }
    };

    // Initialize timer
    resetTimer();

    // Add event listeners
    const events = [
      "mousedown",
      "mousemove",
      "keydown",
      "scroll",
      "touchstart",
    ];
    events.forEach((event) => {
      document.addEventListener(event, resetTimer);
    });

    return () => {
      clearTimeout(timeoutId);
      events.forEach((event) => {
        document.removeEventListener(event, resetTimer);
      });
    };
  }, [isAuthenticated]);

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lowerCode = passcode.toLowerCase();
    if (lowerCode.endsWith("8") || lowerCode.endsWith("n")) {
      handleSuccessfulAuth();
    } else {
      setPasscodeError(true);
      setPasscode("");
    }
  };

  const handleReset = () => {
    setSelectedAcute([]);
    setSelectedSpecialty([]);
    setKhamSangSom(false);
    setNhinAnSang(false);
    setDatHenTruoc(false);
    setKhamLaiCapTinhLyDo("");
    setKhamLaiCapTinhValue("");
    setKhamLaiCapTinhUnit("ngày");
    setKhamLaiManTinhLyDo("");
    setKhamLaiManTinhValue("");
    setKhamLaiManTinhUnit("tháng");
    setTuVanKham("");
    setKetQuaCho("Không");
    setEditableText("");
    setIsEdited(false);
  };

  const handleToggleAcute = (id: string) => {
    setSelectedAcute((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleToggleSpecialty = (id: string) => {
    setSelectedSpecialty((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  useEffect(() => {
    const parts: string[] = [];

    if (tuVanKham.trim()) {
      parts.push(`* Các vấn đề chính của trẻ hiện tại:\n${tuVanKham.trim()}`);
    } else {
      parts.push(`Đã tư vấn cho gia đình về kết quả thăm khám.`);
    }
    if (ketQuaCho.trim()) {
      parts.push(
        `* Kết quả cận lâm sàng đang chờ kết quả: ${ketQuaCho.trim()}`,
      );
    }

    // Lời dặn cấp tính
    if (selectedAcute.length > 0) {
      parts.push("* Về bệnh cấp tính, gia đình lưu ý:");
      const acuteContents: string[] = [];
      selectedAcute.forEach((id) => {
        const item = autotexts.find((i) => i.id === id);
        if (item) acuteContents.push(item.content);
      });
      parts.push(acuteContents.join("\n\n"));
    }

    // Lời dặn chuyên khoa
    if (selectedSpecialty.length > 0) {
      parts.push("* Tư vấn gia đình về:");
      const specContents: string[] = [];

      // Lời dặn cơ bản (if selected in specialty)
      const basicId = "beo-phi-co-ban";
      if (selectedSpecialty.includes(basicId)) {
        const basicItem = autotexts.find((i) => i.id === basicId);
        if (basicItem) specContents.push(basicItem.content);
      }

      // Lời dặn chuyên khoa (excluding basic if already added)
      selectedSpecialty.forEach((id) => {
        if (id !== basicId) {
          const item = autotexts.find((i) => i.id === id);
          if (item) specContents.push(item.content);
        }
      });
      parts.push(specContents.join("\n\n"));
    }

    // Options
    if (khamSangSom) {
      parts.push("* Khám lại vào sáng sớm (lấy số và chờ khám trước 8h30).");
    }
    if (nhinAnSang) {
      parts.push(
        "* Trẻ cần nhịn ăn sáng vào ngày khám, có thể uống nước lọc; đến khám sáng sớm.",
      );
    }
    if (datHenTruoc) {
      parts.push("* Đặt hẹn trước khám với BS. Đỗ Tiến Sơn qua tổng đài.");
    }

    // Khám lại sau
    if (khamLaiCapTinhValue) {
      const lyDo = khamLaiCapTinhLyDo ? ` (${khamLaiCapTinhLyDo})` : "";
      parts.push(
        `* Khám lại bệnh cấp tính${lyDo} sau: ${khamLaiCapTinhValue} ${khamLaiCapTinhUnit}.`,
      );
    }
    if (khamLaiManTinhValue) {
      const lyDo = khamLaiManTinhLyDo ? ` (${khamLaiManTinhLyDo})` : "";
      parts.push(
        `* Khám lại tình trạng sức khoẻ mạn tính${lyDo} sau: ${khamLaiManTinhValue} ${khamLaiManTinhUnit}.`,
      );
    }

    setEditableText(parts.join("\n"));
    setIsEdited(false);
  }, [
    selectedAcute,
    selectedSpecialty,
    khamSangSom,
    nhinAnSang,
    datHenTruoc,
    khamLaiCapTinhLyDo,
    khamLaiCapTinhValue,
    khamLaiCapTinhUnit,
    khamLaiManTinhLyDo,
    khamLaiManTinhValue,
    khamLaiManTinhUnit,
    tuVanKham,
    ketQuaCho,
  ]);

  const handleCopy = async () => {
    if (!editableText || isEdited) return;
    try {
      await navigator.clipboard.writeText(editableText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleCopyDefaultExam = async () => {
    const defaultExamText = `Gia đình đưa trẻ đến khám vì: 

Tiền sử dị ứng:
Thuốc đang dùng:
- Trẻ tỉnh; tương tác tốt; Da niêm mạc hồng, không ban nốt; 
- Dấu hiệu mất nước:  không 
- Tuyến giáp: Không sờ thấy
- Hạch ngoại vi: Không sờ thấy

- Tim nhịp đều,  T1,T2 rõ; Refill <2s; Tưới máu ngoại biên tốt; Chi ấm; Mạch ngoại vi bắt rõ; Không tái tím 
- Trẻ tự thở, môi hồng; Thông khí đều; Lồng ngực cân đối;  Không ran phổi; Không thở nhanh
- Trẻ tri giác tỉnh, tương tác được; Hội chứng màng não âm tính; Không giảm trương lực cơ; Không yếu cơ; Đồng tử 2 bên 2mm, phản xạ ánh sáng dương tính, không liệt vận nhãn
- Bụng mềm, không dấu hiệu bụng ngoại khoa, không nôn nhiều. Phản ứng thành bụng: không; Cảm ứng phúc mạc: Không; Không chướng hơi; Không có dấu hiệu quai ruột nổi 
- Tiết niệu khám ngoài chưa ghi nhận bất thường
- Không bầm tím bất thường; 
- Khám tai mũi họng: `;

    try {
      await navigator.clipboard.writeText(defaultExamText);
      setCopiedDefaultExam(true);
      setTimeout(() => setCopiedDefaultExam(false), 2000);
    } catch (err) {
      console.error("Failed to copy default exam text: ", err);
    }
  };

  return (
    <>
      {/* Passcode Overlay */}
      {!isAuthenticated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-xl">
          <div className="bg-[#111] p-8 rounded-3xl border border-white/10 shadow-2xl w-full max-w-sm text-center transform transition-all">
            <div
              className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer"
              onClick={() => {
                setIsAuthenticated(true);
                setPasscodeError(false);
              }}
            >
              <Lock className="w-8 h-8 text-white/80" />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Nội dung bảo mật
            </h2>
            <p className="text-white/50 text-sm mb-8">
              Vui lòng nhập mã bảo vệ để tiếp tục
            </p>
            <form onSubmit={handlePasscodeSubmit}>
              <input
                type="password"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setPasscodeError(false);
                }}
                disabled={isAuthenticating || authSuccess}
                className={`w-full bg-white/5 border ${passcodeError ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/50" : "border-white/10 focus:border-white/30 focus:ring-white/20"} rounded-xl px-4 py-4 text-center text-2xl text-white tracking-[0.5em] focus:ring-2 outline-none mb-4 transition-colors disabled:opacity-50`}
                placeholder="••••"
                autoFocus
              />
              {passcodeError && (
                <p className="text-rose-500 text-sm mb-4">
                  Mã bảo vệ không chính xác
                </p>
              )}
              <button
                type="submit"
                disabled={isAuthenticating || authSuccess}
                className={`w-full font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center ${
                  authSuccess
                    ? "bg-emerald-500 text-white"
                    : isAuthenticating
                      ? "bg-rose-600/50 text-white/80 cursor-wait"
                      : "bg-rose-600 hover:bg-rose-700 text-white"
                }`}
              >
                {authSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Xác thực thành công
                  </>
                ) : isAuthenticating ? (
                  <>
                    <RefreshCcw className="w-5 h-5 mr-2 animate-spin" />
                    Kiểm tra an ninh nội bộ...
                  </>
                ) : (
                  "Xác nhận"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main App */}
      <div
        className={`min-h-screen bg-gradient-to-br from-[#00529c] via-[#004280] to-[#003366] p-4 md:p-8 font-sans text-slate-800 transition-all duration-700 ${!isAuthenticated ? "blur-md scale-[0.98] opacity-40 overflow-hidden h-screen" : ""}`}
      >
        <div className="max-w-6xl mx-auto space-y-6">
          <header className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#00529c] tracking-tight">
                Autotext and Reminder - Dr.Son
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handleCopyDefaultExam}
                className="flex items-center justify-center px-4 py-2.5 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-xl font-medium transition-colors border border-amber-100"
              >
                {copiedDefaultExam ? (
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                ) : (
                  <Copy className="w-4 h-4 mr-2" />
                )}
                {copiedDefaultExam ? "Đã copy Hỏi-Khám" : "Copy Hỏi-Khám"}
              </button>
              <button
                onClick={handleReset}
                className="flex items-center justify-center px-4 py-2.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-xl font-medium transition-colors border border-rose-100"
              >
                <RefreshCcw className="w-4 h-4 mr-2" />
                Phiên khám mới
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Selections */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bệnh cấp tính */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                  <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                    <span className="w-2 h-6 bg-rose-400 rounded-full mr-3"></span>
                    Bệnh cấp tính
                  </h2>
                  <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {acuteItems.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-start space-x-3 cursor-pointer group"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <input
                            type="checkbox"
                            className="w-5 h-5 rounded border-slate-300 bg-white text-[#00529c] focus:ring-[#00529c]/50 transition-colors cursor-pointer accent-[#00529c]"
                            checked={selectedAcute.includes(item.id)}
                            onChange={() => handleToggleAcute(item.id)}
                          />
                        </div>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-[#00529c] transition-colors">
                          {item.title}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Bệnh chuyên khoa */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                  <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                    <span className="w-2 h-6 bg-[#00529c] rounded-full mr-3"></span>
                    Bệnh chuyên khoa
                  </h2>
                  <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {specialtyItems.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-start space-x-3 cursor-pointer group"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <input
                            type="checkbox"
                            className="w-5 h-5 rounded border-slate-300 bg-white text-[#00529c] focus:ring-[#00529c]/50 transition-colors cursor-pointer accent-[#00529c]"
                            checked={selectedSpecialty.includes(item.id)}
                            onChange={() => handleToggleSpecialty(item.id)}
                          />
                        </div>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-[#00529c] transition-colors">
                          {item.title}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tư vấn khám & Cận lâm sàng */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                <h2 className="text-lg font-semibold text-slate-800 mb-4">
                  Các vấn đề chính của trẻ hiện tại
                </h2>
                <textarea
                  className="w-full p-3 border border-slate-200 rounded-xl bg-white text-slate-800 text-sm resize-y min-h-[100px] focus:ring-2 focus:ring-[#00529c] focus:border-[#00529c] outline-none transition-all placeholder:text-slate-400"
                  placeholder="Nhập tư vấn của bác sĩ..."
                  value={tuVanKham}
                  onChange={(e) => setTuVanKham(e.target.value)}
                />

                <h2 className="text-lg font-semibold text-slate-800 mt-6 mb-4">
                  Kết quả cận lâm sàng đang chờ kết quả
                </h2>
                <textarea
                  className="w-full p-3 border border-slate-200 rounded-xl bg-white text-slate-800 text-sm resize-y min-h-[60px] focus:ring-2 focus:ring-[#00529c] focus:border-[#00529c] outline-none transition-all placeholder:text-slate-400"
                  value={ketQuaCho}
                  onChange={(e) => setKetQuaCho(e.target.value)}
                />
              </div>

              {/* Additional Options */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                <h2 className="text-lg font-semibold text-slate-800 mb-4">
                  Tuỳ chọn thêm
                </h2>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-slate-300 bg-white text-[#00529c] focus:ring-[#00529c]/50 cursor-pointer accent-[#00529c]"
                      checked={khamSangSom}
                      onChange={(e) => setKhamSangSom(e.target.checked)}
                    />
                    <span className="text-sm font-medium text-slate-700">
                      Khám sáng sớm (đến khám trước 8h30)
                    </span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-slate-300 bg-white text-[#00529c] focus:ring-[#00529c]/50 cursor-pointer accent-[#00529c]"
                      checked={nhinAnSang}
                      onChange={(e) => setNhinAnSang(e.target.checked)}
                    />
                    <span className="text-sm font-medium text-slate-700">
                      Nhịn ăn sáng ngày khám lại, uống nước lọc bình thường
                    </span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-slate-300 bg-white text-[#00529c] focus:ring-[#00529c]/50 cursor-pointer accent-[#00529c]"
                      checked={datHenTruoc}
                      onChange={(e) => setDatHenTruoc(e.target.checked)}
                    />
                    <span className="text-sm font-medium text-slate-700">
                      Đặt hẹn trước khám với BS. Đỗ Tiến Sơn qua tổng đài
                    </span>
                  </label>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div>
                      <span className="text-sm font-medium text-slate-600 block mb-1.5">
                        Khám lại bệnh cấp tính:
                      </span>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5">
                        <input
                          type="text"
                          className="w-full sm:flex-1 px-2.5 py-1.5 border border-slate-200 rounded-md bg-white focus:ring-2 focus:ring-[#00529c] focus:border-[#00529c] outline-none transition-all text-sm text-slate-800 placeholder:text-slate-400"
                          value={khamLaiCapTinhLyDo}
                          onChange={(e) =>
                            setKhamLaiCapTinhLyDo(e.target.value)
                          }
                          placeholder="..."
                        />
                        <div className="flex items-center gap-1.5 w-full sm:w-auto">
                          <span className="text-sm text-slate-500 whitespace-nowrap">
                            sau
                          </span>
                          <input
                            type="number"
                            min="1"
                            className="flex-1 sm:w-16 px-2.5 py-1.5 border border-slate-200 rounded-md bg-white focus:ring-2 focus:ring-[#00529c] focus:border-[#00529c] outline-none transition-all text-sm text-slate-800 placeholder:text-slate-400"
                            value={khamLaiCapTinhValue}
                            onChange={(e) =>
                              setKhamLaiCapTinhValue(e.target.value)
                            }
                            placeholder="Số"
                          />
                          <select
                            className="flex-1 sm:w-auto px-2 py-1.5 border border-slate-200 rounded-md bg-white focus:ring-2 focus:ring-[#00529c] focus:border-[#00529c] outline-none transition-all text-sm text-slate-800"
                            value={khamLaiCapTinhUnit}
                            onChange={(e) =>
                              setKhamLaiCapTinhUnit(e.target.value)
                            }
                          >
                            <option value="ngày">Ngày</option>
                            <option value="tuần">Tuần</option>
                            <option value="tháng">Tháng</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="text-sm font-medium text-slate-600 block mb-1.5">
                        Khám lại tình trạng sức khoẻ mạn tính:
                      </span>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5">
                        <input
                          type="text"
                          className="w-full sm:flex-1 px-2.5 py-1.5 border border-slate-200 rounded-md bg-white focus:ring-2 focus:ring-[#00529c] focus:border-[#00529c] outline-none transition-all text-sm text-slate-800 placeholder:text-slate-400"
                          value={khamLaiManTinhLyDo}
                          onChange={(e) =>
                            setKhamLaiManTinhLyDo(e.target.value)
                          }
                          placeholder="..."
                        />
                        <div className="flex items-center gap-1.5 w-full sm:w-auto">
                          <span className="text-sm text-slate-500 whitespace-nowrap">
                            sau
                          </span>
                          <input
                            type="number"
                            min="1"
                            className="flex-1 sm:w-16 px-2.5 py-1.5 border border-slate-200 rounded-md bg-white focus:ring-2 focus:ring-[#00529c] focus:border-[#00529c] outline-none transition-all text-sm text-slate-800 placeholder:text-slate-400"
                            value={khamLaiManTinhValue}
                            onChange={(e) =>
                              setKhamLaiManTinhValue(e.target.value)
                            }
                            placeholder="Số"
                          />
                          <select
                            className="flex-1 sm:w-auto px-2 py-1.5 border border-slate-200 rounded-md bg-white focus:ring-2 focus:ring-[#00529c] focus:border-[#00529c] outline-none transition-all text-sm text-slate-800"
                            value={khamLaiManTinhUnit}
                            onChange={(e) =>
                              setKhamLaiManTinhUnit(e.target.value)
                            }
                          >
                            <option value="ngày">Ngày</option>
                            <option value="tuần">Tuần</option>
                            <option value="tháng">Tháng</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Results */}
            <div className="lg:col-span-5 space-y-6">
              {/* Vietnamese Result */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl flex flex-col h-[600px]">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-slate-800">
                    Lời dặn (Tiếng Việt)
                  </h2>
                  <div className="flex items-center space-x-2">
                    {isEdited && (
                      <button
                        onClick={() => setIsEdited(false)}
                        className="flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all bg-amber-100 text-amber-700 hover:bg-amber-200"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Lưu và xác nhận
                      </button>
                    )}
                    <button
                      onClick={handleCopy}
                      disabled={!editableText || isEdited}
                      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        !editableText || isEdited
                          ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                          : copied
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-[#00529c]/10 text-[#00529c] hover:bg-[#00529c]/20"
                      }`}
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Đã copy
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <textarea
                  className={`flex-1 w-full p-4 border rounded-xl text-sm resize-none focus:ring-2 focus:ring-[#00529c] focus:border-[#00529c] outline-none transition-all ${
                    isEdited
                      ? "bg-amber-50 border-amber-200 text-amber-900"
                      : "bg-slate-50 border-slate-200 text-slate-800"
                  }`}
                  value={editableText}
                  onChange={(e) => {
                    setEditableText(e.target.value);
                    setIsEdited(true);
                  }}
                  placeholder="Chọn các mục bên trái để tạo lời dặn..."
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 pb-8 text-center text-white/60 text-sm space-y-1">
            <p>&copy; BS. Đỗ Tiến Sơn</p>
            <p>BVĐK Tâm Anh Hà Nội</p>
            <p>
              <a
                href="https://dotienson.com/app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white hover:underline font-medium transition-colors"
              >
                dotienson.com/app
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
